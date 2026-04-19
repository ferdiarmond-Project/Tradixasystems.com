import BackgroundGradient from "@/components/BackgroundGradient";
import SectionLabel from "@/components/SectionLabel";
import TypingHeading from "@/components/TypingHeading";
import FadeInSection from "@/components/FadeInSection";
import { Zap, Activity, Layers, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Layers className="text-yellow-400" size={32} />,
    title: "Proses Terintegrasi",
    desc: "Mengubah proses manual yang terfragmentasi menjadi satu ekosistem digital yang saling terhubung."
  },
  {
    icon: <Zap className="text-yellow-400" size={32} />,
    title: "Otomasi Cerdas",
    desc: "Menghilangkan pekerjaan repetitif melalui otomasi yang berjalan 24/7 tanpa risiko human error."
  },
  {
    icon: <BarChart3 className="text-yellow-400" size={32} />,
    title: "Keputusan Berbasis Data",
    desc: "Akses data rill-time untuk validasi pengambilan keputusan strategis yang lebih akurat."
  },
  {
    icon: <Activity className="text-yellow-400" size={32} />,
    title: "Efisiensi Operasional",
    desc: "Optimalisasi alur kerja yang memberikan dampak langsung pada pengurangan biaya operasional."
  }
];

export default function DigitalTransformationPage() {
  return (
    <main className="bg-[#0B2A4A] text-white min-h-screen">
      
      <section className="relative pt-36 lg:pt-44 pb-12 lg:pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <BackgroundGradient />
        </div>
        
        <FadeInSection className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
            <SectionLabel text="Service Module" />
            <TypingHeading 
              className="heading-aurora text-4xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mt-6"
              text={"DIGITAL\nTRANSFORMATION"}
            />
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mt-4 lg:mt-6">
              Kami membantu bisnis melampaui batasan operasional konvensional dengan mengubah proses 
              manual yang terfragmentasi menjadi ekosistem digital yang terintegrasi.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a href="https://wa.me/6281383882120" target="_blank" className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20">
                Konsultasi Sekarang
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="glass-card rounded-3xl p-8 border-white/5 hover:border-white/10 transition-all group">
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-yellow-400/10 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 lg:mt-20 text-center">
            <h2 className="text-3xl font-bold mb-12">Mengapa Bertransformasi Sekarang?</h2>
            <div className="max-w-4xl mx-auto text-gray-300 space-y-8 text-lg leading-relaxed text-left lg:text-center">
              <p className="text-justify">
                Di era digital, kecepatan adalah mata uang utama. Bisnis yang masih bergantung pada proses manual 
                akan tertinggal oleh kompetitor yang mampu bergerak lebih efisien dengan bantuan teknologi.
              </p>
              <p className="text-justify">
                Tradixa fokus bukan sekadar pada digitalisasi (scan kertas jadi PDF), melainkan pada <strong>transformasi</strong> 
                - yaitu mendesain ulang cara Anda bekerja agar lebih cepat, lebih murah, dan lebih akurat.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

    </main>
  );
}
