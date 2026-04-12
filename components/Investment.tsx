"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import FadeInSection from "./FadeInSection";
import SectionLabel from "./SectionLabel";
import TypingHeading from "./TypingHeading";
import BackgroundGradient from "./BackgroundGradient";

// --- SVG Icons (Safe alternatives to lucide-react) ---
const IconCheck = () => (
  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconStore = () => (
  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v2H3V3zm1 4v12a2 2 0 002 2h12a2 2 0 002-2V7H4zm2 2h12v10H6V9zm4 3v4h4v-4h-4z" />
  </svg>
);

const IconCode = () => (
  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const IconMining = () => (
  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.5 2L3.5 13L2.5 16L5.5 19L8.5 18L19.5 7L14.5 2Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6L11 6L6 11M6 18L6 11M6 11L13 18" />
  </svg>
);

const IconArrowRight = () => (
  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const IconZap = () => (
  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const IconShield = () => (
  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconChart = () => (
  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const IconTrending = () => (
  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const solutionPlans = [
  {
    name: "Retail Management System",
    desc: "Solusi praktis untuk membantu operasional UMKM lebih rapi dan terkontrol",
    price: "Rp 50.000",
    priceSub: "/ bulan",
    setup: "Setup Rp 1.000.000",
    setupSub: "Optional lifetime (beli putus)",
    icon: <IconStore />,
    features: [
      "Manajemen stok",
      "Transaksi penjualan",
      "Laporan dasar",
      "Multi-user sederhana"
    ],
    cta: "Mulai Sekarang",
    href: "/consultation",
    highlight: false
  },
  {
    name: "Custom Business System",
    desc: "Sistem yang dirancang khusus mengikuti alur kerja bisnis Anda secara menyeluruh",
    price: "Custom Budget",
    priceSub: "Sesuai Kompleksitas",
    setup: "Rp 10.000.000 - Rp 100.000.000+",
    setupSub: "Investment-based model",
    icon: <IconCode />,
    features: [
      "Analisa & perancangan sistem",
      "Workflow & SOP digital",
      "Dashboard & automasi",
      "Integrasi sistem",
      "Sistem scalable & fleksibel"
    ],
    cta: "Konsultasi Sekarang",
    href: "/consultation",
    highlight: true,
    label: "Paling banyak digunakan oleh bisnis berkembang"
  },
  {
    name: "Mining Operation System",
    desc: "Sistem terintegrasi untuk monitoring dan kontrol operasional tambang secara real-time",
    price: "Enterprise Level",
    priceSub: "Skala Tambang",
    setup: "Rp 50.000.000 - Rp 150.000.000+",
    setupSub: "Maintenance bulanan",
    icon: <IconMining />,
    features: [
      "Monitoring unit & aktivitas",
      "Tracking produksi",
      "Kontrol BBM",
      "Dashboard operasional",
      "Sistem terintegrasi"
    ],
    cta: "Diskusikan Kebutuhan Anda",
    href: "/consultation",
    highlight: false
  }
];

const valuePoints = [
  {
    icon: <IconZap />,
    title: "Sesuai Alur Kerja",
    desc: "Dirancang spesifik mengikuti pola bisnis Anda, bukan Anda yang mengikuti sistem."
  },
  {
    icon: <IconShield />,
    title: "Minim Kesalahan",
    desc: "Otomasi proses yang mengurangi ketergantungan pada input manual dan human error."
  },
  {
    icon: <IconChart />,
    title: "Data-Driven",
    desc: "Mempermudah pengambilan keputusan strategis berdasarkan angka rill di lapangan."
  },
  {
    icon: <IconTrending />,
    title: "Skalabilitas",
    desc: "Sistem yang fleksibel dan siap berkembang seiring bertambahnya skala bisnis Anda."
  }
];

export default function Investment() {
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  
  const planScrollRef = useRef<HTMLDivElement>(null);
  const valueScrollRef = useRef<HTMLDivElement>(null);

  const handlePlanScroll = () => {
    if (planScrollRef.current) {
      const { scrollLeft, offsetWidth } = planScrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      if (index !== activePlanIndex && index >= 0 && index < solutionPlans.length) {
        setActivePlanIndex(index);
      }
    }
  };

  const handleValueScroll = () => {
    if (valueScrollRef.current) {
      const { scrollLeft, offsetWidth } = valueScrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      if (index !== activeValueIndex && index >= 0 && index < valuePoints.length) {
        setActiveValueIndex(index);
      }
    }
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#071A2E]">
      <div className="absolute inset-0 -z-10 opacity-40">
        <BackgroundGradient />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <FadeInSection className="text-center max-w-4xl mx-auto mb-20">
          <SectionLabel text="Solusi & Investasi" />
          <TypingHeading 
            className="heading-aurora text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mt-6"
            text={"Investasi Sistem untuk\nPertumbuhan Bisnis Anda"}
          />
          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mt-8 font-medium">
            Setiap sistem yang kami bangun dirancang untuk meningkatkan efisiensi, kontrol, dan skalabilitas bisnis Anda.
          </p>
          <p className="text-gray-400 text-base mt-4 max-w-2xl mx-auto">
            Kami tidak menawarkan produk generik. Setiap solusi disesuaikan dengan kebutuhan dan kompleksitas operasional bisnis Anda.
          </p>
        </FadeInSection>

        {/* PRICING TABLE */}
        <div 
          ref={planScrollRef}
          onScroll={handlePlanScroll}
          className="flex lg:grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-8 lg:mb-24 overflow-x-auto lg:overflow-x-visible pt-16 pb-12 lg:pb-0 snap-x snap-mandatory scrollbar-hide pricing-scroll-container no-scrollbar"
        >
          {solutionPlans.map((plan, i) => (
            <FadeInSection key={i} className="h-full flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-auto snap-center relative pt-4 overflow-visible">
              
              {/* Floating Label - Moved OUTSIDE the overflow-hidden inner container */}
              {plan.label && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow-[0_4px_15px_rgba(245,197,24,0.4)] whitespace-nowrap z-50 animate-bounce-subtle">
                  {plan.label}
                </div>
              )}

              {/* Inner Card Container - Handles Rounded Corners and Shimmer Clipping */}
              <div className={`relative h-full flex flex-col rounded-3xl p-8 transition-all duration-700 border animate-vibrate-premium overflow-hidden group ${
                plan.highlight 
                ? "bg-white/10 border-yellow-400/50 shadow-[0_0_40px_rgba(245,197,24,0.15)] ring-1 ring-yellow-400/30 lg:scale-105 z-10" 
                : "bg-white/5 border-white/10 hover:border-white/20"
              }`}>
                {/* Continuous Shimmer Light Effect */}
                <div className="absolute inset-0 bg-white/10 -translate-x-full skew-x-[-45deg] animate-[shimmer-sweep_5s_infinite] pointer-events-none z-10" />

                <div className="mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{plan.desc}</p>
                </div>

                <div className="mb-8 pb-8 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-sm">{plan.priceSub}</span>
                  </div>
                  <div className="mt-2 text-yellow-400 font-bold text-sm tracking-tight">{plan.setup}</div>
                  <div className="text-gray-500 text-xs mt-1">{plan.setupSub}</div>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                      <IconCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={plan.href}
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2 group ${
                    plan.highlight 
                    ? "bg-yellow-400 text-black hover:bg-yellow-300" 
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  }`}
                >
                  {plan.cta}
                  <IconArrowRight />
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Plan Scroll Indicator */}
        <div className="flex lg:hidden justify-center gap-2 mb-16">
          {solutionPlans.map((_, i) => (
            <div 
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activePlanIndex ? "bg-yellow-400 w-6" : "bg-white/20 w-2"
              }`}
            />
          ))}
        </div>

        {/* FOOTNOTE */}
        <FadeInSection className="text-center mb-32">
          <p className="text-gray-500 text-sm italic text-center">
            * Harga dapat menyesuaikan dengan kompleksitas sistem, skala operasional, dan kebutuhan integrasi bisnis.
          </p>
        </FadeInSection>

        {/* VALUE SECTION - Centered Header */}
        <FadeInSection className="text-center max-w-4xl mx-auto mb-20">
          <SectionLabel text="Keunggulan" />
          <h2 className="text-3xl lg:text-5xl font-bold text-white mt-6 mb-8 leading-tight">
            Lebih dari Sekadar Sistem
          </h2>
        </FadeInSection>

        {/* VALUE CARDS - Repurposed as cards/tables */}
        <div 
          ref={valueScrollRef}
          onScroll={handleValueScroll}
          className="flex lg:grid lg:grid-cols-4 gap-6 items-stretch mb-8 lg:mb-24 overflow-x-auto lg:overflow-x-visible pb-8 lg:pb-0 snap-x snap-mandatory scrollbar-hide no-scrollbar"
        >
          {valuePoints.map((point, i) => (
            <FadeInSection key={i} className="h-full flex-shrink-0 w-[80vw] sm:w-[320px] lg:w-auto snap-center">
              <div className="relative h-full flex flex-col items-center text-center rounded-[2rem] p-8 transition-all duration-700 border border-white/10 bg-white/5 hover:border-yellow-400/30 group animate-vibrate-premium">
                <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {point.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{point.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                
                {/* Decorative glow behind icon */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-400/5 blur-2xl -z-10 group-hover:bg-yellow-400/10 transition-colors" />
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Value Scroll Indicator */}
        <div className="flex lg:hidden justify-center gap-2 mb-20">
          {valuePoints.map((_, i) => (
            <div 
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeValueIndex ? "bg-yellow-400 w-5" : "bg-white/10 w-1.5"
              }`}
            />
          ))}
        </div>

        {/* TRUST SECTION - Repositioned Below the Cards */}
        <FadeInSection className="relative mb-32 max-w-5xl mx-auto">
          <div className="glass-card rounded-[3rem] p-10 lg:p-16 border-white/10 overflow-hidden relative text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-[100px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 blur-[100px] -ml-32 -mb-32" />
            
            <h3 className="text-2xl lg:text-4xl font-bold text-white mb-8">Telah Diimplementasikan dalam Operasional Nyata</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
              Sistem kami telah sukses diimplementasikan dan digunakan secara harian dalam operasional perusahaan pertambangan dan perkebunan berskala besar melalui <strong>PT Permata Hijau Agro Lestari</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-4 p-5 px-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400">
                  <IconShield />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold">Teruji & Terpercaya</div>
                  <div className="text-xs text-gray-400 italic">Enterprise Ready Solution</div>
                </div>
              </div>
              
              <div className="text-gray-500 text-sm italic">
                “Meningkatkan kontrol penuh atas <br className="hidden sm:block" /> aset dan produksi secara real-time.”
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* FINAL CTA SECTION */}
        <FadeInSection className="text-center py-20 px-8 rounded-[3rem] bg-gradient-to-br from-yellow-400 to-yellow-500 text-black relative overflow-hidden group">
          {/* Constant Shimmer Effect - Loop without hover for mobile/old devices support */}
          <div className="absolute inset-0 bg-white/25 -translate-x-full skew-x-[-45deg] animate-[shimmer-sweep_4s_infinite] pointer-events-none" />
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 relative z-10">Siap Melangkah ke Level Selanjutnya?</h2>
          <p className="text-black/80 text-lg mb-10 font-medium relative z-10 max-w-2xl mx-auto">
            Mulai dengan analisa yang tepat. Konsultasikan tantangan bisnis Anda hari ini secara gratis. Mari kita bangun masa depan digital Anda bersama.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link 
              href="/consultation"
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              Lihat Rencana Sistem Anda
              <IconArrowRight />
            </Link>
            
            <button 
              onClick={() => {
                const message = `Halo Tradixa, saya ingin konsultasi mengenai kebutuhan sistem bisnis saya.`;
                if (typeof window !== 'undefined') {
                  window.open(`https://wa.me/6281383882120?text=${encodeURIComponent(message)}`, "_blank");
                }
              }}
              className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md border border-black/10 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all"
            >
              Hubungi via WhatsApp
            </button>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
}
