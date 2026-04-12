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
              delay={5500}
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

              <button className="border border-white/20 hover:border-white/40 text-white px-7 py-3.5 rounded-xl hover:bg-white/5 transition-all duration-200 font-medium">
                Lihat Portfolio
              </button>
            </div>

          </div>

          {/* RIGHT — Macbook Mockup */}
          <div className="relative flex justify-center items-center animate-fade-up w-full mt-12 lg:mt-0 lg:-ml-4 xl:ml-0" style={{ '--animation-delay': '0.2s' } as { [key: string]: string }}>
            <div className="relative w-full max-w-[1200px] flex justify-center lg:justify-end px-2 sm:px-0">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl transform scale-95" />
              <Image
                src="/Free_MacBook_Pro_1_PHAL.png"
                alt="Tradixa Dashboard Preview"
                width={1100}
                height={700}
                className="relative w-full drop-shadow-2xl scale-[0.9] sm:scale-[1.10] lg:scale-[1.25] xl:scale-[1.35] origin-center lg:origin-right lg:translate-x-12 xl:translate-x-20 transition-transform"
                priority
              />
            </div>
          </div>

        </div>

        {/* Trust badges spanning full width below the grid */}
        <div className="mt-16 lg:mt-24 pt-10 border-t border-white/10 flex flex-wrap justify-center lg:justify-center items-center gap-12 lg:gap-24 animate-fade-up w-full" style={{ '--animation-delay': '0.4s' } as React.CSSProperties}>
          <div className="text-center group">
            <div className="text-4xl lg:text-5xl font-extrabold tracking-tight inline-block animate-float-slow text-shimmer-gold">50+</div>
            <div className="text-sm lg:text-base font-medium text-gray-400 mt-2 transition-colors group-hover:text-yellow-400">Klien Aktif</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="text-center group">
            <div className="text-4xl lg:text-5xl font-extrabold tracking-tight inline-block animate-float-medium text-shimmer-gold">100+</div>
            <div className="text-sm lg:text-base font-medium text-gray-400 mt-2 transition-colors group-hover:text-yellow-400">Proyek Selesai</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="text-center group">
            <div className="text-4xl lg:text-5xl font-extrabold tracking-tight inline-block animate-float-slow text-shimmer-gold">5★</div>
            <div className="text-sm lg:text-base font-medium text-gray-400 mt-2 transition-colors group-hover:text-yellow-400">Rating Klien</div>
          </div>
        </div>

      </div>
    </section>
  );
}
