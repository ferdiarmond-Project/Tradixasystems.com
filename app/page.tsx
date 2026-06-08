import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SystemTypes from "@/components/SystemTypes";
import Showcase from "@/components/Showcase";

import Workflow from "@/components/Workflow";
import Benefits from "@/components/Benefits";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Investment from "@/components/Investment";

export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-[#071A2E] text-white overflow-hidden">
      <div className="flex flex-col w-full overflow-x-hidden optimize-render">
        <Hero />
        <div className="section-divider" />
        <Problem />
        <div className="section-divider" />
        <SystemTypes />
        <div className="section-divider" />
        <Showcase />
        <div className="section-divider" />
        <Workflow />
        <div className="section-divider" />
        <Benefits />
        <div className="section-divider" />
        <Industries />
        <div className="section-divider" />
        <Process />
        <div className="section-divider" />
        <Investment />
      </div>
    </main>
  );
}
