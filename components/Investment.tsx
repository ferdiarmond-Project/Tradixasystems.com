"use client";
import React from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Store, 
  Code2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  TrendingUp
} from "lucide-react";
import FadeInSection from "./FadeInSection";
import SectionLabel from "./SectionLabel";
import TypingHeading from "./TypingHeading";
import BackgroundGradient from "./BackgroundGradient";

const solutionPlans = [
  {
    name: "Retail Management System",
    desc: "Solusi praktis untuk membantu operasional UMKM lebih rapi dan terkontrol",
    price: "Rp 50.000",
    priceSub: "/ bulan",
    setup: "Setup Rp 1.000.000",
    setupSub: "Optional lifetime (beli putus)",
    icon: <Store size={28} className="text-yellow-400" />,
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
    icon: <Code2 size={28} className="text-yellow-400" />,
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
    icon: (
      <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.5 2L3.5 13L2.5 16L5.5 19L8.5 18L19.5 7L14.5 2Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6L11 6L6 11M6 18L6 11M6 11L13 18" />
      </svg>
    ),
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
    icon: <Zap className="text-yellow-400" size={24} />,
    title: "Sesuai Alur Kerja",
    desc: "Dirancang spesifik mengikuti pola bisnis Anda, bukan Anda yang mengikuti sistem."
  },
  {
    icon: <ShieldCheck className="text-yellow-400" size={24} />,
    title: "Minim Kesalahan",
    desc: "Otomasi proses yang mengurangi ketergantungan pada input manual dan human error."
  },
  {
    icon: <BarChart3 className="text-yellow-400" size={24} />,
    title: "Data-Driven",
    desc: "Mempermudah pengambilan keputusan strategis berdasarkan angka rill di lapangan."
  },
  {
    icon: <TrendingUp className="text-yellow-400" size={24} />,
    title: "Skalabilitas",
    desc: "Sistem yang fleksibel dan siap berkembang seiring bertambahnya skala bisnis Anda."
  }
];

export default function Investment() {
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
        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-24">
          {solutionPlans.map((plan, i) => (
            <FadeInSection key={i} delay={i * 0.1} className="h-full">
              <div className={`relative h-full flex flex-col rounded-3xl p-8 transition-all duration-300 border ${
                plan.highlight 
                ? "bg-white/10 border-yellow-400/50 shadow-[0_0_40px_rgba(245,197,24,0.15)] ring-1 ring-yellow-400/30 lg:scale-105 z-10" 
                : "bg-white/5 border-white/10 hover:border-white/20"
              }`}>
                {plan.label && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    {plan.label}
                  </div>
                )}

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
                      <CheckCircle2 size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />
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
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* FOOTNOTE */}
        <FadeInSection className="text-center mb-32">
          <p className="text-gray-500 text-sm italic text-center">
            * Harga dapat menyesuaikan dengan kompleksitas sistem, skala operasional, dan kebutuhan integrasi bisnis.
          </p>
        </FadeInSection>

        {/* VALUE SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <FadeInSection>
            <SectionLabel text="Keunggulan" className="justify-start" />
            <h2 className="text-3xl lg:text-5xl font-bold text-white mt-6 mb-8 leading-tight">
              Lebih dari Sekadar Sistem
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {valuePoints.map((point, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center">
                    {point.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white">{point.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
          <FadeInSection className="relative">
            <div className="glass-card rounded-[2rem] p-10 border-white/10 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-3xl -mr-16 -mt-16" />
              <h3 className="text-2xl font-bold text-white mb-6">Telah Diimplementasikan dalam Operasional Nyata</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Sistem kami telah sukses diimplementasikan dan digunakan secara harian dalam operasional perusahaan pertambangan dan perkebunan berskala besar (PT Permata Hijau Agro Lestari).
              </p>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="text-white font-bold">Teruji & Terpercaya</div>
                  <div className="text-xs text-gray-400">Enterprise Ready Solution</div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* FINAL CTA SECTION (MERGED) */}
        <FadeInSection className="text-center py-20 px-8 rounded-[3rem] bg-gradient-to-br from-yellow-400 to-yellow-500 text-black relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/20 -translate-x-full skew-x-[-45deg] group-hover:animate-[shimmer-sweep_2s_infinite]" />
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
              <ArrowRight size={22} />
            </Link>
            
            <button 
              onClick={() => {
                const message = `Halo Tradixa, saya ingin konsultasi mengenai kebutuhan sistem bisnis saya.`;
                window.open(`https://wa.me/6281383882120?text=${encodeURIComponent(message)}`, "_blank");
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
