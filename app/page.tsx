import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SystemTypes from "@/components/SystemTypes";
import Showcase from "@/components/Showcase";

// Lazy load non-critical sections for faster TTI
const WhyTradixa = dynamic(() => import("@/components/WhyTradixa"), { loading: () => <div className="h-96" /> });
const Workflow = dynamic(() => import("@/components/Workflow"), { loading: () => <div className="h-96" /> });
const Benefits = dynamic(() => import("@/components/Benefits"), { loading: () => <div className="h-96" /> });
const Industries = dynamic(() => import("@/components/Industries"), { loading: () => <div className="h-96" /> });
const Process = dynamic(() => import("@/components/Process"), { loading: () => <div className="h-96" /> });
const CTA = dynamic(() => import("@/components/CTA"), { loading: () => <div className="h-96" /> });

export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-[#0B2A4A] text-white overflow-hidden">
      <div className="flex flex-col w-full overflow-x-hidden">
        <Hero />
        
        <div className="optimize-render">
          <Problem />
        </div>
        
        <div className="optimize-render">
          <SystemTypes />
        </div>
        
        <div className="optimize-render">
          <Showcase />
        </div>
        
        <div className="optimize-render">
          <Workflow />
        </div>
        
        <div className="optimize-render">
          <Benefits />
        </div>
        
        <div className="optimize-render">
          <Industries />
        </div>
        
        <div className="optimize-render">
          <Process />
        </div>
        
        <div className="optimize-render">
          <CTA />
        </div>
      </div>
    </main>
  );
}
