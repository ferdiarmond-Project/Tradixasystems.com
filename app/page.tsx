import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SystemTypes from "@/components/SystemTypes";
import Showcase from "@/components/Showcase";
import WhyTradixa from "@/components/WhyTradixa";
import Workflow from "@/components/Workflow";
import Benefits from "@/components/Benefits";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Investment from "@/components/Investment";
import CTA from "@/components/CTA";

export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-[#0B2A4A] text-white overflow-hidden">
      <div className="flex flex-col w-full overflow-x-hidden optimize-render">
        <Hero />
        <Problem />
        <SystemTypes />
        <Showcase />
        <Investment />
        <Workflow />
        <Benefits />
        <Industries />
        <Process />
        <CTA />
      </div>
    </main>
  );
}
