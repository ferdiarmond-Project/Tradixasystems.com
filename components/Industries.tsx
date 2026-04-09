const industries = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "Ritel & F&B",
    desc: "Mendukung manajemen stok, transaksi kasir, laporan penjualan, serta program loyalitas pelanggan yang terintegrasi.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
    title: "Jasa & Software",
    desc: "Manajemen proyek, timesheet, invoicing klien, serta tracking progress pekerjaan secara real-time.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Industri Tambang",
    desc: "Mendukung monitoring operasional tambang seperti produksi harian, penggunaan alat berat, pencatatan bahan bakar, maintenance unit, serta pelaporan kinerja dan keuangan secara terintegrasi.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Jasa & Project",
    desc: "Mendukung pencatatan proyek, biaya operasional, progres pekerjaan, serta laporan keuangan yang disesuaikan dengan model bisnis berbasis jasa.",
  },
];
import SectionLabel from "./SectionLabel";
import TypingHeading from "./TypingHeading";
import FadeInSection from "./FadeInSection";

export default function Industries() {
  return (
    <section className="relative py-12 px-6 overflow-hidden bg-[#0B2340]">
      {/* Animated subtle blue glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Center blue glow - very subtle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500 rounded-full blur-3xl opacity-15 animate-float-slow" />
        {/* Bottom left secondary glow */}
        <div className="absolute bottom-0 -left-32 w-[600px] h-[600px] bg-blue-400 rounded-full blur-3xl opacity-10 animate-float-medium" />
        {/* Vignette overlay - dark edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2340] via-transparent to-[#0B2340] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2340] via-transparent to-[#0B2340] opacity-60" />
      </div>
      <FadeInSection className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <SectionLabel text="Industri" className="justify-start lg:justify-start" />
          <TypingHeading 
            className="heading-aurora text-3xl lg:text-4xl font-bold text-white mt-4 max-w-xl"
            text="Cocok untuk Berbagai Jenis Bisnis"
          />
          <p className="text-gray-400 mt-3 max-w-2xl leading-relaxed">
            Tradixa dirancang sebagai sistem digital yang fleksibel dan dapat disesuaikan dengan karakter serta alur kerja berbagai jenis bisnis. Setiap sistem dibangun berdasarkan kebutuhan operasional, skala usaha, dan proses kerja masing-masing.
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-7 flex gap-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                {ind.icon}
              </div>
              <div>
                <TypingHeading
                  as="h3"
                  className="font-bold text-white text-lg mb-2"
                  text={ind.title}
                />
                <p className="text-sm text-gray-400 leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </FadeInSection>
    </section>
  );
}
