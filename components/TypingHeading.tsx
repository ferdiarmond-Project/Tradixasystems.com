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
  const totalItems = type === "char" ? text.length : text.split(" ").length;
  
  // Start with ALL text visible (SSR-safe: no invisible flash)
  const [displayCount, setDisplayCount] = useState(totalItems);
  const [isTypingComplete, setIsTypingComplete] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const ref = useRef<HTMLElement>(null);
  const hasStarted = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const desktop = typeof window !== 'undefined' && window.innerWidth >= 768;
    setIsDesktop(desktop);

    // Only run typing animation on desktop
    if (!desktop) return;

    // Reset to 0 to start typing animation on desktop
    setDisplayCount(0);
    setIsTypingComplete(false);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted.current) {
        hasStarted.current = true;
        const items = totalItems;

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
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '100px 0px' });
    
    if (ref.current) observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, type, delay, totalItems]);

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
            className={`${highlightIndices.has(index) ? 'text-yellow-400 font-extrabold' : ''}`}
            style={
              isDesktop
                ? { 
                    opacity: isVisible ? 1 : 0,
                    visibility: isVisible ? 'visible' as const : 'hidden' as const
                  }
                : undefined  // No inline styles on mobile — always visible
            }
          >
            {char}
          </span>
        );
      })}
      {isDesktop && !isTypingComplete && (
        <span className="text-yellow-400 animate-pulse ml-0.5">|</span>
      )}
    </Tag>
  );
}
