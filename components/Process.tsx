import Image from "next/image";
import BackgroundGradient from "./BackgroundGradient";
import SectionLabel from "./SectionLabel";
import TypingHeading from "./TypingHeading";

const schemeItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    label: "Custom scope & kebutuhan",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "One-time development",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: "Timeline sesuai kompleksitas",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Maintenance",
  },
];

import FadeInSection from "./FadeInSection";

export default function Process() {
  return (
    <section className="bg-[#091929] relative py-12 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <BackgroundGradient />
      </div>
      <FadeInSection className="relative z-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT - Big heading */}
          <div className="pt-0 lg:pt-10">
            <SectionLabel text="Kerjasama" className="justify-start mb-6" />
            <TypingHeading
              className="heading-aurora text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
              text={"SKEMA\nKERJASAMA"}
            />
          </div>

          {/* RIGHT - Description + scheme items */}
          <div className="pt-0 lg:pt-28">
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
              Pengembangan sistem yang efektif dimulai dari pemahaman kebutuhan dan
              alur kerja bisnis klien. Tradixa berfokus pada perancangan sistem yang
              disesuaikan, mulai dari analisis kebutuhan, desain solusi, hingga
              implementasi sistem yang siap digunakan.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {schemeItems.map((item, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 flex-shrink-0 group-hover:bg-yellow-400/15 transition-colors">
                    {item.icon}
                  </div>
                  <TypingHeading
                    as="span"
                    className="text-sm font-semibold text-white block"
                    text={item.label}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </FadeInSection>
    </section>
  );
}
