import BackgroundGradient from "@/components/BackgroundGradient";
import SectionLabel from "@/components/SectionLabel";
import TypingHeading from "@/components/TypingHeading";
import FadeInSection from "@/components/FadeInSection";
import { Share2, Monitor, Cpu, ShieldCheck } from "lucide-react";

const integrationPoints = [
  {
    icon: <Share2 className="text-yellow-400" size={32} />,
    title: "API Ecosystem",
    desc: "Menghubungkan berbagai platform pihak ketiga (pembayaran, logistik, marketplace) ke dalam satu alur kerja terpadu."
  },
  {
    icon: <Monitor className="text-yellow-400" size={32} />,
    title: "Centralized Dashboard",
    desc: "Visualisasi data dari berbagai sumber dalam satu antarmuka dashboard untuk pemantauan performa real-time."
  },
  {
    icon: <Cpu className="text-yellow-400" size={32} />,
    title: "Platform Orchestration",
    desc: "Sinkronisasi data otomatis antar departemen untuk memastikan informasi tetap konsisten di seluruh organisasi."
  },
  {
    icon: <ShieldCheck className="text-yellow-400" size={32} />,
    title: "Secure Connectivity",
    desc: "Protokol keamanan tingkat tinggi dalam setiap pertukaran data antar sistem untuk menjaga integritas informasi bisnis."
  }
];

export default function TechIntegrationPage() {
  return (
    <main className="bg-[#0B2A4A] text-white min-h-screen">
      
      <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <BackgroundGradient />
        </div>
        
        <FadeInSection className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <SectionLabel text="Service Module" />
            </div>
            <TypingHeading 
              className="heading-aurora text-4xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-8"
              text={"TECH INTEGRATION"}
            />
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
              Kami menjembatani kesenjangan antar platform melalui integrasi sistem yang mulus. 
              Memastikan seluruh infrastruktur teknologi Anda bekerja sebagai satu kesatuan yang solid dan efisien.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-10 lg:p-16 border-white/5 bg-gradient-to-br from-[#13315C] to-transparent">
              <h3 className="text-3xl font-bold mb-10 text-white text-center">The Power of Connectivity</h3>
              <div className="grid md:grid-cols-2 gap-10">
                {integrationPoints.map((p, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="p-3 bg-white/5 rounded-xl text-yellow-400">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{p.title}</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-24 glass-card rounded-3xl p-12 border-yellow-400/20 bg-yellow-400/5 text-center">
            <h2 className="text-3xl font-bold mb-6">Automate Your Data Flow</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-10">
              Hilangkan input data ganda dan ketidakkonsistenan informasi. Dengan integrasi yang tepat, 
              data operasional Anda akan mengalir otomatis ke departemen terkait, mempercepat proses bisnis 
              dan mengurangi beban kerja administratif.
            </p>
            <a href="https://wa.me/6281383882120" target="_blank" className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all hover:scale-105">
              Diskusikan Kebutuhan Integrasi Anda
            </a>
          </div>
        </FadeInSection>
      </section>

    </main>
  );
}
