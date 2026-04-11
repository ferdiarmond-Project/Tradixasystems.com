"use client";
import { useEffect, useRef, useState } from "react";

export default function TypingHeading({ 
  text, 
  className = "", 
  as: Tag = "h2",
  style,
  highlightWords = [],
  type = "char"
}: { 
  text: string; 
  className?: string; 
  as?: React.ElementType;
  style?: React.CSSProperties;
  highlightWords?: string[];
  type?: "char" | "word";
}) {
  const [displayCount, setDisplayCount] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const hasStarted = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted.current) {
        hasStarted.current = true;
        let count = 0;
        
        const items = type === "char" ? text.length : text.split(" ").length;

        intervalRef.current = setInterval(() => {
          count++;
          setDisplayCount(count);
          if (count >= items) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setIsTypingComplete(true);
          }
        }, 20);
        
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '100px 0px' });
    
    if (ref.current) observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

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
    <Tag 
      ref={ref} 
      className={`${className} whitespace-pre-line`} 
      style={style}
    >
      {chars.map((char, index) => {
        const isVisible = index < displayCount;
        if (char === '\n') {
          return <br key={index} />;
        }
        return (
          <span
            key={index}
            className={`transition-opacity duration-75 ${highlightIndices.has(index) ? 'text-yellow-400 font-extrabold' : ''}`}
            style={{ 
              opacity: isVisible ? 1 : 0,
              visibility: isVisible ? 'visible' : 'hidden' 
            }}
          >
            {char}
          </span>
        );
      })}
      {!isTypingComplete && <span className="text-yellow-400 animate-pulse ml-0.5">|</span>}
    </Tag>
  );
}
