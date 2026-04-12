"use client";
import { useEffect, useRef, useState } from "react";

export default function TypingHeading({ 
  text, 
  className = "", 
  as: Tag = "h2",
  style,
  highlightWords = [],
  type = "char",
  delay = 0
}: { 
  text: string; 
  className?: string; 
  as?: React.ElementType;
  style?: React.CSSProperties;
  highlightWords?: string[];
  type?: "char" | "word";
  delay?: number;
}) {
  const [displayCount, setDisplayCount] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const hasStarted = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Detect mobile initially
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted.current) {
        hasStarted.current = true;
        const items = type === "char" ? text.length : text.split(" ").length;

        if (isMobile) {
          // Mobile: Instant appearance
          setDisplayCount(items);
          setIsTypingComplete(true);
        } else {
          // Desktop: Typing animation
          let count = 0;
          const timer = setTimeout(() => {
            intervalRef.current = setInterval(() => {
              count += 2;
              if (count >= items) {
                count = items;
                if (intervalRef.current) clearInterval(intervalRef.current);
                setIsTypingComplete(true);
              }
              setDisplayCount(count);
            }, 40);
          }, delay);
        }
        
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '100px 0px' });
    
    if (ref.current) observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, type, delay]);

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

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <Tag 
      ref={ref} 
      className={`${className} whitespace-pre-line transition-all duration-700 ease-out 
        ${isMobile 
          ? (isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2') 
          : 'opacity-100 translate-y-0'
        }`} 
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
            className={`${highlightIndices.has(index) ? 'text-yellow-400 font-extrabold' : ''}`}
            style={{ 
              opacity: isVisible ? 1 : 0,
              visibility: isVisible ? 'visible' : 'hidden' 
            }}
          >
            {char}
          </span>
        );
      })}
      {!isTypingComplete && !isMobile && (
        <span className="text-yellow-400 animate-pulse ml-0.5">|</span>
      )}
    </Tag>
  );
}
