import Image from "next/image";
import Link from "next/link";
import SectionLabel from "./SectionLabel";
import TypingHeading from "./TypingHeading";

export const systemsData = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    name: "ERP & Management",
    slug: "erp-management",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    name: "Accounting & Finance",
    slug: "accounting-finance",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    name: "Inventory & Warehouse",
    slug: "inventory-warehouse",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    name: "POS & Sales System",
    slug: "pos-sales",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    name: "CRM & Customer System",
    slug: "crm-customer",
  },
];

import FadeInSection from "./FadeInSection";

export default function SystemTypes() {
  return (
    <section className="relative py-10 lg:py-12 px-6 overflow-hidden bg-[#0D2140]">
      {/* Inline style for the sweeping light effect */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer-sweep {
          0% { transform: translateX(250%) skewX(-20deg); }
          100% { transform: translateX(-150%) skewX(-20deg); }
        }
        @keyframes premium-vibration {
          0% { transform: translateY(-4px) rotate(0deg); }
          25% { transform: translateY(-4px) rotate(0.8deg); }
          50% { transform: translateY(-4px) rotate(-0.8deg); }
          75% { transform: translateY(-4px) rotate(0.8deg); }
          100% { transform: translateY(-4px) rotate(0deg); }
        }
        @keyframes subtle-nudge {
          0%, 90%, 100% { transform: translate(0, 0) rotate(0deg); }
          92% { transform: translate(1px, 0) rotate(0.5deg); }
          94% { transform: translate(-1px, 0) rotate(-0.5deg); }
          96% { transform: translate(1px, 0) rotate(0.5deg); }
          98% { transform: translate(-1px, 0) rotate(-0.5deg); }
        }
        .animate-shimmer-sweep {
          animation: shimmer-sweep 5s infinite linear;
        }
        .animate-subtle-nudge {
          animation: subtle-nudge 6s infinite ease-in-out;
        }
        .hover-vibrate:hover {
          animation: premium-vibration 0.3s ease-in-out infinite;
        }
      ` }} />
      {/* Animated subtle blue glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Center blue glow - very subtle */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-15 animate-float-slow" />
        {/* Secondary glow - bottom left */}
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-blue-400 rounded-full blur-3xl opacity-10 animate-float-medium" />
        {/* Vignette overlay - dark edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2140] via-transparent to-[#0D2140] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D2140] via-transparent to-[#0D2140] opacity-60" />
      </div>
      <FadeInSection className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-0">
          <div className="flex justify-center mb-4">
            <SectionLabel text="Solusi Kami" />
          </div>
          <TypingHeading
            className="heading-aurora text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight"
            text="Jenis Sistem yang Dapat Dikembangkan"
          />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Kami membangun berbagai solusi digital yang disesuaikan dengan
            infrastruktur bisnis Anda.
          </p>
        </div>

        {/* Content: phones left, cards right */}
        <div className="grid lg:grid-cols-2 gap-0 items-center">

          {/* LEFT — Two phones, upright, centered and overlapping */}
          <div className="relative w-full h-[480px] lg:h-[600px] flex justify-center items-center overflow-visible scale-[1.1] lg:scale-100">

            {/* Phone 1 — back */}
            <div className="absolute top-1/2 -translate-y-1/2 z-10 w-[100%] lg:w-[800px] h-[450px] lg:h-[650px] -translate-x-[12%] lg:translate-x-0 lg:left-[-180px]">
              <Image
                src="/mockup-system-18.png"
                alt="Mobile App Preview"
                width={800}
                height={1600}
                className="h-full w-auto object-contain drop-shadow-2xl animate-float-medium will-change-transform"
                loading="eager"
              />
            </div>

            {/* Phone 2 — front */}
            <div className="absolute top-1/2 -translate-y-1/2 z-20 w-[100%] lg:w-[800px] h-[450px] lg:h-[650px] translate-x-[12%] lg:translate-x-0 lg:left-[-20px]">
              <Image
                src="/mockup-system.png"
                alt="Mobile App Preview 2"
                width={800}
                height={1600}
                className="h-full w-auto object-contain drop-shadow-2xl animate-float-slow will-change-transform"
                loading="eager"
              />
            </div>

          </div>

          {/* RIGHT — System cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {systemsData.map((sys, i) => (
              <Link
                href={`/solutions/${sys.slug}`}
                key={i}
                className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-white/20 transition-all duration-300 cursor-pointer group relative overflow-hidden hover-vibrate animate-subtle-nudge"
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                {/* Continuous Shimmer Sweep effect */}
                <div className="absolute top-0 -left-[100%] w-[150%] h-[200%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent animate-shimmer-sweep pointer-events-none z-0" />

                <div className="w-11 h-11 rounded-xl bg-[#0B2340] border border-white/10 flex items-center justify-center text-yellow-400 flex-shrink-0 group-hover:bg-yellow-400/10 group-hover:border-yellow-400/20 transition-colors relative z-10 will-change-transform">
                  {sys.icon}
                </div>
                <TypingHeading
                  as="span"
                  className="text-sm font-semibold text-white leading-snug block relative z-10"
                  text={sys.name}
                />
              </Link>
            ))}

            {/* CTA Card */}
            <div className="glass-card rounded-2xl p-5 bg-yellow-400/5 border-yellow-400/20 hover:bg-yellow-400/10 transition-all duration-300 flex flex-col justify-between gap-4">
              <p className="text-sm font-semibold text-white">Kebutuhan Lain?</p>
              <Link 
                href="/consultation" 
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-bold py-2.5 rounded-xl transition-colors text-center block"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}
