import Image from "next/image";
import Link from "next/link";
import SectionLabel from "./SectionLabel";
import TypingHeading from "./TypingHeading";
import FadeInSection from "@/components/FadeInSection";

export default function Showcase() {
  return (
    <section className="relative py-12 px-6 overflow-hidden bg-[#040E1A] border-t border-white/5">
      {/* Background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full blur-3xl opacity-[0.10] animate-float-slow" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-3xl opacity-[0.08] animate-float-medium" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400 rounded-full blur-3xl opacity-[0.07]" />
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
                width={1800}
                height={1200}
                className="w-full h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
                priority
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
