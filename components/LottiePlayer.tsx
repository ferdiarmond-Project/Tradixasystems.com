"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LottiePlayer({ animationData }: { animationData: any }) {
  const lottieRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lottieRef.current?.play();
        } else {
          lottieRef.current?.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (!animationData) return null;

  return (
    <div ref={containerRef} className="w-full h-full">
      <Lottie 
        lottieRef={lottieRef}
        animationData={animationData} 
        loop={true} 
        autoplay={true} 
        className="w-full h-full" 
      />
    </div>
  );
}
