const benefits = [
  {
    num: "1",
    title: "Efisiensi waktu & biaya",
    desc: "Atur hak akses setiap pengguna berdasarkan peran, sehingga hanya pihak yang berwenang yang dapat melihat atau mengelola data.",
  },
  {
    num: "2",
    title: "Data lebih akurat & transparan",
    desc: "Semua hal tercatat secara otomatis dan terpusat, meminimalisir kesalahan serta memberikan visibilitas penuh terhadap aktivitas bisnis.",
  },
  {
    num: "3",
    title: "Pengambilan keputusan lebih cepat",
    desc: "Akses laporan dan data real-time untuk membantu Anda mengambil keputusan dengan lebih cepat dan tepat berdasarkan kondisi bisnis terkini.",
  },
  {
    num: "4",
    title: "Sistem siap berkembang",
    desc: "Sistem dirancang fleksibel dan modular, sehingga dapat mengikuti pertumbuhan bisnis tanpa perlu mengganti sistem dari awal.",
  },
];

import BackgroundGradient from "./BackgroundGradient";
import SectionLabel from "./SectionLabel";
import TypingHeading from "./TypingHeading";
import FadeInSection from "./FadeInSection";

export default function Benefits() {
  return (
    <section className="bg-[#051525] relative py-12 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <BackgroundGradient />
      </div>
      <FadeInSection className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel text="Dampak Nyata" />
          <TypingHeading 
            className="heading-aurora text-3xl lg:text-4xl font-bold text-white mt-4"
            text="Dampak & Manfaat bagi Bisnis"
          />
        </div>

        {/* 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-7 flex gap-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Number circle */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-yellow-400/10 border-2 border-yellow-400/30 flex items-center justify-center text-yellow-400 font-bold text-lg group-hover:bg-yellow-400/20 transition-colors">
                  {b.num}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </FadeInSection>
    </section>
  );
}
