import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGradient from "@/components/BackgroundGradient";
import { 
  PackageSearch, 
  ShoppingCart, 
  Truck, 
  Calculator, 
  Users, 
  UserSquare2, 
  CheckCircle2 
} from "lucide-react";

const retailModules = [
  {
    icon: <PackageSearch size={24} />,
    title: "Inventory & Stock Control",
    desc: "Kelola stok secara real-time dengan kontrol penuh di semua lokasi.",
    features: [
      "Monitoring stok real-time (masuk, keluar, retur)",
      "Multi-location warehouse tracking",
      "Stock opname & adjustment",
      "Low stock alert otomatis",
      "Analisis perputaran produk"
    ]
  },
  {
    icon: <ShoppingCart size={24} />,
    title: "Sales & POS System",
    desc: "Proses transaksi lebih cepat, akurat, dan terintegrasi langsung ke sistem.",
    features: [
      "POS system untuk transaksi cepat",
      "Invoice otomatis & multi pembayaran",
      "Retur & refund management",
      "Tracking order & pengiriman",
      "Integrasi laporan penjualan"
    ]
  },
  {
    icon: <Truck size={24} />,
    title: "Procurement",
    desc: "Kelola pembelian barang dari supplier dengan alur yang terstruktur.",
    features: [
      "Purchase Order ke supplier",
      "Goods receipt & verifikasi",
      "Tracking status pembelian",
      "Retur ke supplier",
      "Kontrol biaya pembelian"
    ]
  },
  {
    icon: <Calculator size={24} />,
    title: "Finance & Accounting",
    desc: "Pantau keuangan bisnis secara real-time dan terintegrasi otomatis.",
    features: [
      "Laporan laba rugi, neraca, arus kas",
      "Manajemen piutang & utang",
      "Rekonsiliasi bank",
      "Tracking transaksi masuk keluar",
      "Financial reporting otomatis"
    ]
  },
  {
    icon: <Users size={24} />,
    title: "Customer & Marketing",
    desc: "Bangun hubungan pelanggan dan tingkatkan penjualan dengan strategi promosi.",
    features: [
      "Database & riwayat pelanggan",
      "Loyalty & membership program",
      "Diskon & promosi fleksibel",
      "Segmentasi pelanggan",
      "Analisis perilaku pelanggan"
    ]
  },
  {
    icon: <UserSquare2 size={24} />,
    title: "Team & Workforce",
    desc: "Kelola tim dan operasional SDM dalam satu sistem terintegrasi.",
    features: [
      "Data karyawan & kontrak",
      "Attendance & cuti",
      "Payroll dasar",
      "Manajemen agen & komisi",
      "Laporan kinerja tim"
    ]
  }
];

export default function RetailManagement() {
  return (
    <>
      <Navbar />
      
      {/* HEADER SECTION (DARK) */}
      <section className="relative pt-40 pb-20 bg-[#071A2E] overflow-hidden text-center px-6">
        <BackgroundGradient />
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-up flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-400 font-semibold text-sm mb-6 border border-yellow-400/20">
            Enterprise Ready
          </span>
          <h1 className="heading-aurora text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white mb-6">
            Retail Management System
          </h1>
          <p className="text-gray-300 leading-relaxed text-lg lg:text-xl max-w-2xl mx-auto font-medium">
            Sistem terpadu untuk bisnis ritel modern. Integrasikan penjualan kasir otomatis, pantau pergerakan gudang antar cabang, hingga laporan keuangan dalam satu platform cerdas.
          </p>
        </div>
      </section>

      {/* MODULES GRID SECTION (LIGHT) */}
      <section className="py-24 bg-[#F8FAFC] px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2545] mb-4">
              Semua Fitur Untuk Skala Ritel Anda
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Bukan sekadar kasir, ini adalah mesin penggerak ritel komprehensif untuk memastikan rantai pasok dan penjualan Anda berjalan tanpa cacat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {retailModules.map((mod, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-10px_rgba(37,99,235,0.2)] transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full group"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B2545] flex items-center justify-center mb-5 group-hover:bg-[#0B2545] group-hover:text-yellow-400 transition-colors">
                  {mod.icon}
                </div>
                
                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-[#0B2545] mb-3">{mod.title}</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed h-[72px]">{mod.desc}</p>
                
                {/* Bullet Features */}
                <ul className="space-y-3 flex-1">
                  {mod.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-sm text-gray-700 font-medium leading-snug">
                       <CheckCircle2 size={16} strokeWidth={2.5} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                       <span className="flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Custom CTA Card */}
            <div className="bg-gradient-to-br from-[#0B2545] to-[#13315C] rounded-2xl p-6 shadow-xl flex flex-col h-full justify-center text-center md:col-span-2 lg:col-span-2">
               <h3 className="text-2xl font-bold text-white mb-4">Integrasikan Hardware Anda!</h3>
               <p className="text-blue-100 text-sm leading-relaxed mb-6 max-w-md mx-auto">
                 Punya sistem barcode, printer termal, atau perangkat IoT cabang yang ingin disambungkan langsung? Kami bisa mengkoneksikannya.
               </p>
               <a href="https://wa.me/6281383882120" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-yellow-400/20 inline-block w-max mx-auto">
                 Konsultasikan Solusi Retail
               </a>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
