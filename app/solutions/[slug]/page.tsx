import { notFound } from "next/navigation";
import { systemsData } from "@/components/SystemTypes";
import TypingHeading from "@/components/TypingHeading";
import BackgroundGradient from "@/components/BackgroundGradient";
import { solutionsContent } from "@/lib/solutionsData";
import { CheckCircle2, PlayCircle, BarChart3, TrendingUp, Layers, Box } from "lucide-react";
import LottiePlayer from "@/components/LottiePlayer";
import { lottieFiles } from "@/lib/lottieMap";

export function generateStaticParams() {
  return Object.keys(solutionsContent).map((slug) => ({
    slug: slug,
  }));
}

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const systemBase = systemsData.find((s) => s.slug === slug);
  const content = solutionsContent[slug];
  const lottieData = lottieFiles[slug];

  if (!systemBase || !content) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 px-6 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 -z-10 bg-[#060D18]">
        <BackgroundGradient />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#0B2545] to-[#13315C] border border-blue-500/30 flex items-center justify-center text-yellow-400 mb-6 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
            {systemBase.icon}
          </div>
          <TypingHeading 
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight" 
            text={content.title} 
          />
          <p className="text-gray-300 leading-relaxed text-lg text-justify md:text-center mt-6">
            {content.pengertian}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* LOTTIE ANIMATION CONCEPT PLACEHOLDER & DETAILS */}
          <div className="order-first lg:order-1 flex flex-col gap-6">
            <div className="glass-card rounded-3xl px-8 py-12 sm:py-16 relative min-h-[400px] h-auto flex flex-col items-center justify-center text-center group">
              <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors rounded-3xl" />
              
              {/* Lottie Container */}
              <div className="w-full h-[250px] flex justify-center items-center relative z-10 animate-float-slow">
                {lottieData ? (
                  <div className="w-[250px] h-[250px] flex justify-center items-center">
                    <LottiePlayer animationData={lottieData} />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-[#0A192F] rounded-full border border-blue-500/30 flex items-center justify-center shadow-2xl">
                    <PlayCircle size={40} className="text-yellow-400" />
                  </div>
                )}
              </div>
              
              <div className="relative z-10 w-full mt-6">
                <p className="text-gray-300 max-w-md mx-auto text-base sm:text-lg leading-relaxed mb-6 font-medium">
                  {content.lottieConcept.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {content.lottieConcept.styleProps.map((prop, i) => (
                    <span key={i} className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-semibold uppercase tracking-wider">
                      {prop}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full" />
            </div>
            
            <a href="https://wa.me/6281383882120" target="_blank" rel="noopener noreferrer" className="w-full bg-[#13315C] hover:bg-blue-600 border border-blue-500/30 text-white font-bold py-4 rounded-xl transition-colors text-center block shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">
              Konsultasikan Sistem Ini Gratis →
            </a>
          </div>

          {/* FEATURES & BENEFITS LIST */}
          <div className="order-last lg:order-2 space-y-6">
            
            {/* Fitur Utama */}
            <div className="glass-card rounded-3xl p-8 border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Layers size={22} />
                </div>
                <h3 className="text-2xl font-bold text-white">Fitur Utama</h3>
              </div>
              
              <ul className="space-y-4">
                {content.fiturUtama.map((fitur, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <CheckCircle2 size={20} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 font-medium leading-snug">{fitur}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Manfaat Untuk Bisnis */}
            <div className="glass-card rounded-3xl p-8 border-white/5 bg-gradient-to-b from-[#0B2545]/40 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-400/10 rounded-lg text-yellow-400">
                  <TrendingUp size={22} />
                </div>
                <h3 className="text-2xl font-bold text-white">Manfaat untuk Bisnis</h3>
              </div>
              
              <ul className="space-y-4">
                {content.manfaat.map((mft, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                    <span className="text-gray-300 leading-snug">{mft}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}
