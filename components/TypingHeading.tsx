"use client";
import { useEffect, useRef, useState } from "react";

export default function TypingHeading({ 
  text, 
  className = "", 
  as: Tag = "h2",
  style,
  highlightWords = []
}: { 
  text: string; 
  className?: string; 
  as?: any;
  style?: React.CSSProperties;
  highlightWords?: string[];
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Start animation slightly after visibility
        setTimeout(() => setIsVisible(true), 150);
        observer.disconnect();
      }
    }, { threshold: 0.1 }); // trigger when 10% visible
    
    if (ref.current) observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const chars = text.split("");
  const highlightIndices = new Set<number>();
  
  if (highlightWords && highlightWords.length > 0) {
    highlightWords.forEach(word => {
      let startIndex = 0;
      while ((startIndex = text.toLowerCase().indexOf(word.toLowerCase(), startIndex)) !== -1) {
        for (let i = 0; i < word.length; i++) {
          highlightIndices.add(startIndex + i);
        }
        startIndex += word.length;
      }
    });
  }

  return (
    <Tag ref={ref} className={`${className} whitespace-pre-line`} style={style}>
      {chars.map((char, index) => {
        if (char === '\n') {
          return <br key={index} />;
        }
        return (
          <span
            key={index}
            className={`transition-opacity duration-[10ms] ${highlightIndices.has(index) ? 'text-yellow-400' : ''}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${index * 35}ms`
            }}
          >
            {char}
          </span>
        );
      })}
      <span 
        className="inline-block w-[3px] h-[0.8em] bg-yellow-400 ml-1 translate-y-[0.1em]"
        style={{
          opacity: isVisible ? 0 : 1,
          animation: 'pulse 1s infinite'
        }}
      />
    </Tag>
  );
}
