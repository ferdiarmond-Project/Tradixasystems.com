import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGradient from "@/components/BackgroundGradient";
import SectionLabel from "@/components/SectionLabel";
import TypingHeading from "@/components/TypingHeading";
import FadeInSection from "@/components/FadeInSection";
import Image from "next/image";
import { TrendingUp, Package, Calculator, Truck } from "lucide-react";

const umkmBenefits = [
  {
    icon: <Package className="text-yellow-400" size={32} />,
    title: "Akurasi Movement Stok",
    desc: "Pencatatan harian otomatis untuk menghilangkan risiko kehilangan barang dan selisih data stok fisik vs sistem."
  },
  {
    icon: <TrendingUp className="text-yellow-400" size={32} />,
    title: "Fast vs Slow Moving Analysis",
    desc: "Identifikasi produk yang paling laku dan paling tidak laku secara instan untuk mengoptimalkan perputaran modal."
  },
  {
    icon: <Calculator className="text-yellow-400" size={32} />,
    title: "Efisiensi Modal",
    desc: "Kurangi penumpukan stok mati (dead stock) dan fokuskan modal Anda pada produk yang terbukti laku di pasar."
  },
  {
    icon: <Truck className="text-yellow-400" size={32} />,
    title: "Distribusi Terukur",
    desc: "Pantau performa sales lapangan dan distribusi barang secara real-time langsung dari smartphone Anda."
  }
];

export default function UMKMGrowthPage() {
  return (
    <main className="bg-[#0B2A4A] text-white min-h-screen">
      <Navbar />
      
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <BackgroundGradient />
        </div>
        
        <FadeInSection className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <SectionLabel text="Transformasi UMKM" />
            <TypingHeading 
              className="heading-aurora text-4xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mt-6"
              text={"GROW YOUR BUSINESS\nTO THE NEXT LEVEL"}
            />
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto mt-8">
              Kami membangun sistem digital yang didesain khusus untuk membantu UMKM skala menengah mengatasi 
              stagnasi pertumbuhan melalui akurasi data dan otomasi operasional.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Teknologi yang Memberikan Dampak Nyata pada Profit</h2>
              <p className="text-gray-400 leading-relaxed text-lg text-justify">
                Banyak UMKM distributor dan retail gagal scale-up bukan karena kurangnya pembeli, melainkan 
                karena kebocoran operasional. Penggunaan Excel manual seringkali membuat pemilik bisnis 
                buta terhadap pergerakan stok rill dan efektivitas sales.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg text-justify">
                Tradixa hadir dengan solusi **Integrated Inventory & Sales** yang memberikan visibilitas penuh 
                terhadap perputaran barang dan modal Anda.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-8 border-t border-white/10">
                <div>
                  <div className="text-4xl font-extrabold text-yellow-400">99%</div>
                  <div className="text-sm font-medium text-white mt-1">Akurasi Stok</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white">40%</div>
                  <div className="text-sm font-medium text-yellow-400 mt-1">Efisiensi Admin</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-400/10 blur-3xl rounded-full animate-float-slow" />
              <Image 
                src="/mockup-system.png" 
                alt="UMKM Solution" 
                width={800}
                height={600}
                className="relative w-full drop-shadow-2xl rounded-3xl object-contain"
                quality={75}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {umkmBenefits.map((b, i) => (
              <div key={i} className="glass-card rounded-3xl p-10 border-white/5 hover:border-white/15 transition-all flex gap-8 items-start group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-yellow-400/10 transition-colors">
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{b.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#13315C] rounded-3xl overflow-hidden relative border border-white/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-3xl -mr-32 -mt-32" />
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-20">
                <h3 className="text-3xl font-extrabold mb-8">Berhenti Menebak-nebak, Mulai Memutuskan dengan Data</h3>
                <p className="text-gray-300 text-lg mb-10">
                  Konsultasikan alur kerja bisnis retail atau distribusi Anda dengan tim ahli kami secara gratis. 
                  Dapatkan gambaran bagaimana sistem custom dapat memangkas kerugian operasional Anda.
                </p>
                <a href="/consultation" className="inline-block bg-white text-[#0B2A4A] px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all hover:scale-105 shadow-2xl">
                  Hubungi Kami Sekarang
                </a>
              </div>
              <div className="hidden lg:block relative min-h-[400px]">
                <Image 
                  src="/Free_MacBook_Pro_1_PHAL.png" 
                  alt="CTA Mockup" 
                  width={1000}
                  height={800}
                  className="absolute bottom-0 left-0 w-[120%] object-cover translate-y-20 translate-x-10"
                  quality={75}
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      <Footer />
    </main>
  );
}
