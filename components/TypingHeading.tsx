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
  as?: React.ElementType;
  style?: React.CSSProperties;
  highlightWords?: string[];
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
        
        intervalRef.current = setInterval(() => {
          count++;
          setDisplayCount(count);
          if (count >= text.length) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setIsTypingComplete(true);
          }
        }, 30);
        
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
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
      className={`${className} whitespace-pre-line ${!isTypingComplete ? 'typing-cursor' : ''}`} 
      style={style}
    >
      {chars.slice(0, displayCount).map((char, index) => {
        if (char === '\n') {
          return <br key={index} />;
        }
        return (
          <span
            key={index}
            className={`${highlightIndices.has(index) ? 'text-yellow-400' : ''}`}
          >
            {char}
          </span>
        );
      })}
    </Tag>
  );
}
