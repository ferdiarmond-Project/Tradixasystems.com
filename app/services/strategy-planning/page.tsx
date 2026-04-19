import BackgroundGradient from "@/components/BackgroundGradient";
import SectionLabel from "@/components/SectionLabel";
import TypingHeading from "@/components/TypingHeading";
import FadeInSection from "@/components/FadeInSection";
import { ChevronRight } from "lucide-react";

const schemeItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    label: "Konsultasi",
    desc: "Memahami visi dan tantangan unik bisnis Anda melalui diskusi mendalam.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    label: "Analisa Bisnis",
    desc: "Memetakan struktur fundamental dan alur kerja untuk menemukan inefisiensi.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    label: "Workflow & SOP",
    desc: "Merancang alur kerja digital baru yang lebih ramping dan terstandarisasi.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    label: "Mockup",
    desc: "Visualisasi antarmuka sistem untuk memastikan solusi sesuai ekspektasi.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    label: "Technical Architecture",
    desc: "Merancang infrastruktur teknologi yang kokoh dan siap untuk skalabilitas.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    label: "Development",
    desc: "Membangun inti sistem dengan standar kode industri dan keamanan tinggi.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "QC & Testing",
    desc: "Pengujian ketat pada setiap modul untuk memastikan performa stabil.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "UAT & Training",
    desc: "Pendampingan tim Anda dalam mengadopsi sistem baru secara mulus.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    label: "Maintenance",
    desc: "Dukungan berkelanjutan untuk memastikan pertumbuhan jangka panjang.",
  },
];

export default function StrategyPlanningPage() {
  return (
    <main className="bg-[#0B2A4A] text-white min-h-screen">
      
      <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <BackgroundGradient />
        </div>
        
        <FadeInSection className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <SectionLabel text="Workflow & Methodology" />
            </div>
            <TypingHeading 
              className="heading-aurora text-4xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-8"
              text={"STRATEGY & PLANNING"}
            />
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
              Setiap solusi yang kami bangun berakar pada pemahaman mendalam terhadap struktur dan 
              fundamental bisnis Anda. Kami melakukan analisis komprehensif untuk memastikan setiap 
              sistem menjawab tantangan spesifik dan dirancang untuk skalabilitas jangka panjang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative px-4 lg:px-0">
            {schemeItems.map((item, i) => (
              <div key={i} className="relative group">
                <div
                  className="glass-card rounded-3xl p-8 lg:p-10 flex flex-col items-center gap-6 hover:border-yellow-400/30 transition-all duration-500 hover:-translate-y-2 text-center h-full border-white/5"
                >
                  <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-400 group-hover:text-yellow-400 group-hover:border-yellow-400/30 transition-colors">
                    0{i + 1}
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 flex-shrink-0 group-hover:bg-yellow-400/20 transition-all duration-500">
                    {item.icon}
                  </div>
                  
                  <div>
                    <TypingHeading 
                      as="h3"
                      className="text-xl lg:text-2xl font-bold text-white mb-3" 
                      text={item.label} 
                    />
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector (Desktop) */}
                {i < schemeItems.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 -mt-3 z-20 text-yellow-400/30 group-hover:text-yellow-400/60 transition-colors pointer-events-none">
                    {(i + 1) % 3 !== 0 && <ChevronRight size={27} />}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 glass-card rounded-3xl p-10 border-white/5 bg-gradient-to-br from-[#13315C] to-transparent max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">Kenapa Perencanaan Itu Penting?</h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Banyak proyek pengembangan sistem gagal bukan karena teknologi yang buruk, melainkan karena 
                kurangnya pemahaman terhadap proses bisnis rill. Di Tradixa, kami menjembatani kesenjangan 
                tersebut melalui fase strategi yang intensif.
              </p>
              <p>
                Kami tidak menggunakan solusi template. Setiap sistem dirancang unik untuk menyesuaikan dengan 
                keunikan alur kerja perusahaan Anda. Fokus kami adalah memberikan dampak nyata pada 
                profitabilitas dan efisiensi operasional Anda.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

    </main>
  );
}
