import Image from "next/image";
import { Grid, Lock, Zap } from "lucide-react";
import SectionLabel from "./SectionLabel";
import TypingHeading from "./TypingHeading";

const features = [
  {
    icon: <Grid size={20} strokeWidth={1.5} className="text-yellow-400" />,
    title: "Workflow disesuaikan proses internal",
    desc: "Sistem dirancang mengikuti alur kerja internal perusahaan Anda, sehingga proses bisnis tetap berjalan tanpa perubahan besar.",
  },
  {
    icon: <Lock size={20} strokeWidth={1.5} className="text-yellow-400" />,
    title: "Hak akses sesuai peran",
    desc: "Atur hak akses setiap pengguna berdasarkan peran, sehingga hanya pihak yang berwenang yang dapat melihat atau mengelola data.",
  },
  {
    icon: <Zap size={20} strokeWidth={1.5} className="text-yellow-400" />,
    title: "Otomatisasi sesuai kebutuhan",
    desc: "Hilangkan tugas repetitif dengan sistem cerdas yang bekerja 24/7 tanpa perlu intervensi manual.",
  },
];

import FadeInSection from "./FadeInSection";

export default function Workflow() {
  return (
    <section className="bg-[#0a2235] py-12 px-6">
      <FadeInSection className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel text="Cara Kerja Sistem" />
          <TypingHeading 
            className="heading-aurora text-3xl lg:text-4xl font-bold text-white mt-4"
            text="Sistem Mengikuti Alur Kerja Bisnis Anda"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - Feature list */}
          <div className="space-y-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 flex gap-5 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors mt-0.5">
                  {f.icon}
                </div>
                <div>
                  <TypingHeading
                    as="h3"
                    className="font-semibold text-white mb-1.5"
                    text={f.title}
                  />
                  <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - MacBook preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-2xl" />
            <Image
              src="/Free_MacBook_Pro_PHAL_8.png"
              alt="System Workflow Preview"
              width={700}
              height={440}
              className="relative w-full drop-shadow-2xl"
            />
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}
