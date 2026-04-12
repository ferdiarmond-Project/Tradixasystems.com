import BackgroundGradient from "./BackgroundGradient";
import SectionLabel from "./SectionLabel";
import TypingHeading from "./TypingHeading";
import { Database, AlertCircle, Settings, Clock } from "lucide-react";

import FadeInSection from "./FadeInSection";

export default function Problem() {
  const items = [
    {
      icon: <Database size={24} strokeWidth={1.5} className="text-yellow-400" />,
      label: "Data tersebar di banyak tools",
    },
    {
      icon: <AlertCircle size={24} strokeWidth={1.5} className="text-yellow-400" />,
      label: "Sulit memantau performa bisnis",
    },
    {
      icon: <Settings size={24} strokeWidth={1.5} className="text-yellow-400" />,
      label: "Proses masih manual",
    },
    {
      icon: <Clock size={24} strokeWidth={1.5} className="text-yellow-400" />,
      label: "Laporan tidak real-time",
    },
  ];

  return (
    <section className="bg-[#060D18] relative px-6 py-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <BackgroundGradient />
      </div>

      <FadeInSection className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT — Title & Description */}
          <div>
            <SectionLabel text="Masalah" className="justify-start lg:justify-start" />
            <TypingHeading 
              className="heading-aurora text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight"
              text="Tantangan Umum Dalam Operasional Bisnis"
            />
            <p className="text-gray-300 leading-relaxed text-base">
              Banyak bisnis masih menjalankan operasional dengan proses
              manual dan sistem yang terpisah-pisah. Kondisi ini menyebabkan
              data tidak akurat, laporan lambat, dan sulitnya pengambilan
              keputusan yang tepat.
            </p>
          </div>

          {/* RIGHT — Items list, pushed to right edge */}
          <div className="space-y-6 ml-auto w-full max-w-md">
            {items.map((item, i) => (
              <div key={i} className="flex gap-5 items-center group">
                <div className="w-14 h-14 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-all duration-300">
                  {item.icon}
                </div>
                <TypingHeading
                  as="p"
                  className="font-semibold text-xl leading-snug text-white"
                  text={item.label}
                  highlightWords={[item.label.split(" ").pop() || ""]}
                />
              </div>
            ))}
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}
