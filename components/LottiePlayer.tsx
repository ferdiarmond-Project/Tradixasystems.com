"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LottiePlayer({ animationData }: { animationData: any }) {
  if (!animationData) return null;
  return (
    <Lottie 
      animationData={animationData} 
      loop={true} 
      autoplay={true} 
      className="w-full h-full" 
    />
  );
}
