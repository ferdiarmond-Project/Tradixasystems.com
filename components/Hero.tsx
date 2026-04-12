import Image from "next/image";
import Link from "next/link";
import BackgroundGradient from "./BackgroundGradient";
import SectionLabel from "./SectionLabel";
import TypingHeading from "./TypingHeading";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <BackgroundGradient />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="animate-fade-up">
            <div className="ml-0">
              <SectionLabel text="Digital Transformation Partner" className="justify-start lg:justify-start" />
            </div>

            <meta name="heading" content="hero" />
            <TypingHeading
              as="h1"
              className="heading-aurora text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mt-0 text-white"
              text={"Kami membuat sistem custom\nsesuai workflow\nbisnis Anda."}
              highlightWords={["custom"]}
              delay={0}
            />

            <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-lg">
              Partner teknologi untuk UMKM yang ingin scale. Kami mengarsiteki
              efisiensi lewat empati dan kode berkualitas. Tampilan dan modul
              disesuaikan dengan kebutuhan masing-masing bisnis.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/consultation" className="relative overflow-hidden inline-flex group items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-yellow-400/20 hover:-translate-y-0.5">
                <span className="absolute inset-0 w-full h-full bg-white/30 -translate-x-full skew-x-[-20deg] group-hover:animate-[shimmer-sweep_1.5s_infinite]" />
                <span className="relative flex items-center gap-2">
                  Mulai Transformasi
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>

          </div>

          {/* RIGHT — Macbook Mockup */}
          <div className="relative flex justify-center items-center animate-fade-up w-full mt-4 lg:mt-0 lg:-ml-4 xl:ml-0" style={{ '--animation-delay': '0.2s' } as { [key: string]: string }}>
            <div className="relative w-full max-w-[1200px] flex justify-center lg:justify-end px-2 sm:px-0">
              {/* Optimized SVG Glow for older Safari compatibility - Hidden on mobile */}
              <div className="absolute inset-0 rounded-3xl opacity-30 transform scale-95 hidden lg:block">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="50%" cy="50%" r="50%" fill="url(#hero-glow)" />
                </svg>
              </div>
              <Image
                src="/Free_MacBook_Pro_1_PHAL.png"
                alt="Tradixa Dashboard Preview"
                width={800}
                height={500}
                className="relative w-full drop-shadow-2xl scale-[1.15] sm:scale-[1.05] lg:scale-[1.2] xl:scale-[1.3] origin-center lg:origin-right lg:translate-x-12 xl:translate-x-20 transition-transform"
                priority
              />
            </div>
          </div>

        </div>



      </div>
    </section>
  );
}
