"use client";
import BackgroundGradient from "./BackgroundGradient";
import SectionLabel from "./SectionLabel";
import TypingHeading from "./TypingHeading";
import FadeInSection from "./FadeInSection";

// --- SVG Icons (Safe alternatives to lucide-react) ---
const IconDatabase = () => (
  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const IconAlert = () => (
  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const IconSettings = () => (
  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconClock = () => (
  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function Problem() {
  const items = [
    {
      icon: <IconDatabase />,
      label: "Data tersebar di banyak tools",
    },
    {
      icon: <IconAlert />,
      label: "Sulit memantau performa bisnis",
    },
    {
      icon: <IconSettings />,
      label: "Proses masih manual",
    },
    {
      icon: <IconClock />,
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

          {/* RIGHT — Items list */}
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
