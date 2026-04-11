import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGradient from "@/components/BackgroundGradient";
import SectionLabel from "@/components/SectionLabel";
import TypingHeading from "@/components/TypingHeading";
import FadeInSection from "@/components/FadeInSection";

const cases = [
  {
    category: "Retail & Distribution (UMKM)",
    title: "Optimasi Perputaran Modal melalui Integrated Inventory",
    problem: "Stagnasi pertumbuhan akibat pengelolaan stok manual di Excel. Sering terjadi selisih stok (stockout/overstock), keterlambatan pengiriman, dan kesulitan memantau produk yang paling laku (fast-moving) vs paling tidak laku (slow-moving).",
    solution: "Pembangunan Integrated Inventory & Sales Management System berbasis web & mobile. Mencakup manajemen gudang otomatis, pelacakan pesanan real-time, dan aplikasi sales front-end untuk input order instan.",
    results: [
      { label: "Akurasi Stok", value: "99%", desc: "Menghilangkan kerugian akibat selisih barang." },
      { label: "Efisiensi Waktu", value: "40%", desc: "Pemangkasan proses administrasi manual." },
      { label: "Omzet", value: "Sales ↑", desc: "Sales melayani 25% lebih banyak toko harian." }
    ],
    image: "/mockup_iphone_ipad_mac_PHAL.png"
  },
  {
    category: "Mining Industry",
    title: "Integrasi Produksi & Finansial Real-Time",
    problem: "Kompleksitas tinggi dalam validasi hasil produksi harian, pemantauan tonase harian, serta rasio bahan bakar terhadap output produksi. Terjadi gap informasi antara data lapangan dengan laporan keuangan pusat.",
    solution: "Mining Production & Finance Intelligence System. Mencatat hasil produksi dan tonase secara real-time, menghubungkan metrik produksi dengan modul manajemen bahan bakar (fuel ratio), dan sinkronisasi otomatis ke laporan keuangan.",
    results: [
      { label: "Presisi Tonase", value: "100%", desc: "Menghilangkan risiko manipulasi data lapangan." },
      { label: "Fuel Ratio", value: "15% ↓", desc: "Optimasi konsumsi BBM armada produksi." },
      { label: "Reporting", value: "Instan", desc: "Laporan laba-rugi operasional tersedia harian." }
    ],
    image: "/mockup-system-16.png"
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#0B2A4A] text-white min-h-screen">
      <Navbar />
      
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <BackgroundGradient />
        </div>
        
        <FadeInSection className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <SectionLabel text="Success Stories" />
            <TypingHeading 
              className="heading-aurora text-4xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mt-6"
              text={"CASE STUDIES"}
            />
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mt-8">
              Penerapan teknologi yang tepat memberikan dampak nyata bagi profitabilitas dan efisiensi operasional bisnis.
            </p>
          </div>

          <div className="space-y-40">
            {cases.map((c, i) => (
              <div key={i} className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <div className="text-yellow-400 font-bold mb-4 flex items-center justify-center gap-2">
                    <div className="w-8 h-[2px] bg-yellow-400" />
                    {c.category}
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-extrabold mb-8 text-white">{c.title}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="glass-card rounded-2xl p-8 border-white/5">
                    <h4 className="font-bold text-white mb-4 text-xl flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full" />
                      Masalah
                    </h4>
                    <p className="text-gray-400 leading-relaxed">{c.problem}</p>
                  </div>
                  <div className="glass-card rounded-2xl p-8 border-white/5 bg-white/[0.02]">
                    <h4 className="font-bold text-white mb-4 text-xl flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      Solusi
                    </h4>
                    <p className="text-gray-400 leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                <div className="glass-card rounded-3xl p-10 border-white/5">
                  <h4 className="text-center font-bold text-white mb-10 text-xl tracking-widest uppercase">Key Results</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {c.results.map((res, idx) => (
                      <div key={idx} className="text-center relative">
                        {idx !== 0 && <div className="hidden md:block absolute left-[-24px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10" />}
                        <div className="text-4xl lg:text-5xl font-black text-white mb-2">{res.value}</div>
                        <div className="text-sm text-yellow-400 font-bold uppercase mb-2 tracking-wider">{res.label}</div>
                        <p className="text-xs text-gray-500 leading-relaxed px-4">{res.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-40 text-center glass-card rounded-3xl p-16 border-white/5 bg-gradient-to-t from-[#13315C] to-transparent">
            <h2 className="text-4xl font-bold mb-6">Siap Menjadi Success Story Berikutnya?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              Setiap tantangan bisnis adalah peluang untuk inovasi. Mari diskusikan bagaimana sistem custom kami dapat membantu Anda mencapai hasil serupa.
            </p>
            <a href="/consultation" className="inline-block bg-yellow-400 text-black px-8 md:px-12 py-5 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20">
              Jadwalkan Konsultasi Gratis
            </a>
          </div>
        </FadeInSection>
      </section>

      <Footer />
    </main>
  );
}
