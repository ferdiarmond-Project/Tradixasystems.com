"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function StartupLoader() {
  const [show, setShow] = useState<boolean | null>(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("tradixa_loaded");
    
    if (hasLoaded) {
      setShow(false);
    } else {
      setShow(true);
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 1500);
      
      const removeTimer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("tradixa_loaded", "true");
      }, 2500);
      
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, []);

  if (show === null || show === false) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#071A2E] transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="relative flex flex-col items-center">
        <Image
          src="/Logo Tradixa only.png"
          alt="Tradixa"
          width={200}
          height={200}
          className="h-32 w-auto object-contain animate-float"
          priority
        />
        <div className="mt-8 flex flex-col items-center">
          <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400 animate-[shimmer-sweep_2s_infinite]" style={{ width: '60%' }} />
          </div>
          <p className="mt-4 text-yellow-400 font-bold tracking-[0.2em] text-sm uppercase">
            Tradixa Systems
          </p>
        </div>
      </div>
    </div>
  );
}
