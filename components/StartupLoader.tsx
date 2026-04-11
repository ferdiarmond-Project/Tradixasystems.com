"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function StartupLoader() {
  const [show, setShow] = useState<boolean | null>(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if we've already shown the loader in this browser session
    const hasLoaded = sessionStorage.getItem("tradixa_app_primary_load");
    
    if (hasLoaded) {
      setShow(false);
      return;
    }

    // It's the first load
    setShow(true);
    // Mark as loaded IMMEDIATELY so fast clicks don't re-trigger it
    sessionStorage.setItem("tradixa_app_primary_load", "true");

    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 4500); // Start fading at 4.5s
    
    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 5500); // Fully removed at 5.5s
    
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
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
          <div className="h-0.5 w-64 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400 animate-[loading-progress_5s_ease-out_forwards]" />
          </div>
          <p className="mt-6 text-yellow-400 font-bold tracking-[0.3em] text-[10px] uppercase opacity-60">
            Arsitek Digital Anda
          </p>
        </div>
      </div>
    </div>
  );
}
