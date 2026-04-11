"use client";
import { useState } from "react";
import Link from "next/link";
import TypingHeading from "./TypingHeading";

import FadeInSection from "./FadeInSection";

export default function CTA() {
  const [formData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    company: "",
    businessType: "",
    systemNeeds: "",
    consultationDate: "",
    consultationTime: "",
  });

  const handleWhatsApp = () => {
    const message = `Halo Tradixa, saya ingin konsultasi dengan Anda mengenai kebutuhan sistem untuk bisnis saya.`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "6281383882120";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-[#031020] relative py-16 px-6 overflow-hidden">
      {/* Simplified background for mobile efficiency */}
      <div className="absolute inset-0 bg-[#071A2E]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[80px] opacity-50" />
      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[100px] translate-y-1/2" />


      <FadeInSection className="relative max-w-4xl mx-auto z-10">
        <div className="rounded-3xl overflow-hidden bg-[#0B2A4A]/60 border border-white/10 shadow-2xl">
          
          {/* Subtle glow elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-[60px] opacity-40" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-[60px] opacity-30" />

          
          {/* Premium border */}
          <div className="absolute inset-0 rounded-3xl border border-white/15 shadow-2xl shadow-blue-500/10" />

          {/* Content */}
          <div className="relative text-center py-12 px-8">
            <TypingHeading 
              className="heading-aurora text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
              text={"Siap Melangkah ke Level\nSelanjutnya?"}
            />

            <p className="text-gray-300 mt-6 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              Konsultasikan tantangan bisnis Anda hari ini secara gratis. Mari kita bangun
              masa depan digital Anda bersama.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/consultation"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-yellow-400/30 hover:-translate-y-1 inline-block"
              >
                Jadwalkan Konsultasi Gratis
              </Link>
              <button
                onClick={handleWhatsApp}
                className="glass-card border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/15 hover:shadow-lg hover:shadow-white/10"
              >
                Hubungi via WhatsApp
              </button>
            </div>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}
