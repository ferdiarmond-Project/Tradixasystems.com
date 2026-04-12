import Image from "next/image";
import Link from "next/link";
import SectionLabel from "./SectionLabel";
import TypingHeading from "./TypingHeading";
import FadeInSection from "@/components/FadeInSection";

export default function Showcase() {
  return (
    <section className="relative py-12 px-6 overflow-hidden bg-[#040E1A] border-t border-white/5">
      {/* Background glows */}
      {/* Background glows - Optimized with SVG for older Macs - Hidden on mobile */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden lg:block">
        {/* Main bottom glow */}
        <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] opacity-[0.12] animate-float-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="showcase-glow-1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50%" cy="50%" r="50%" fill="url(#showcase-glow-1)" />
          </svg>
        </div>
        {/* Top left glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] opacity-[0.08] animate-float-medium">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="showcase-glow-2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50%" cy="50%" r="50%" fill="url(#showcase-glow-2)" />
          </svg>
        </div>
      </div>

      <FadeInSection className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 lg:mb-10 text-center lg:flex lg:flex-col lg:items-center">
          <div className="flex justify-center mb-4">
            <SectionLabel text="Tampilan Sistem" />
          </div>
          <TypingHeading
            className="heading-aurora text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight"
            text="Tampilan dan modul disesuaikan dengan kebutuhan masing-masing bisnis"
            highlightWords={["kebutuhan", "bisnis"]}
          />
        </div>

        {/* ── Professional SaaS Device Mockup ── */}
        <div className="relative w-full mt-4 lg:mt-8 overflow-x-auto overflow-y-hidden lg:overflow-visible scrollbar-hide py-4 px-4 -mx-4 lg:mx-0 lg:px-0">
          <div className="flex justify-start lg:justify-center items-center h-full min-w-[760px] md:min-w-0">
            <div className="relative z-30 w-full max-w-[1200px] lg:scale-100 xl:scale-105 animate-float-slow lg:-translate-x-12 xl:-translate-x-16 mx-auto">
              <Image
                src="/mockup_iphone_ipad_mac_PHAL.png"
                alt="Tradixa Complete System Mockup"
                width={900}
                height={600}
                className="w-full h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)] scale-[0.9] lg:scale-100"
                loading="lazy"
                quality={50}
                sizes="(max-width: 768px) 100vw, 900px"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl border border-white/10 transition-all hover:scale-105"
          >
            Lihat Studi Kasus Selengkapnya →
          </Link>
        </div>

      </FadeInSection>
    </section>
  );
}
