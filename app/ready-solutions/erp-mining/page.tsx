import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGradient from "@/components/BackgroundGradient";
import { 
  Pickaxe, 
  Map, 
  Truck, 
  PackageSearch, 
  Users, 
  Wallet, 
  LineChart, 
  CheckCircle2 
} from "lucide-react";

const miningModules = [
  {
    icon: <Pickaxe size={24} />,
    title: "Mining Operations",
    desc: "Kendalikan seluruh aktivitas tambang secara real-time dari satu dashboard.",
    features: [
      "Monitoring produksi & KPI tambang",
      "Daily production & strip ratio otomatis",
      "Gold production & chain of custody",
      "Hauling & stockpile tracking",
      "Analisis biaya vs budget"
    ]
  },
  {
    icon: <Map size={24} />,
    title: "Exploration Management",
    desc: "Kelola eksplorasi dari perencanaan hingga analisis data geologi.",
    features: [
      "Perencanaan area eksplorasi",
      "Tracking drill hole & koordinat",
      "Sample & assay management",
      "Dokumentasi aktivitas lapangan"
    ]
  },
  {
    icon: <Truck size={24} />,
    title: "Asset & Heavy Equipment",
    desc: "Pantau aset dan alat berat dengan kontrol penuh dan maintenance terjadwal.",
    features: [
      "Monitoring alat berat (HM & status)",
      "Maintenance & work order system",
      "Asset lifecycle management",
      "Depresiasi & asset ledger"
    ]
  },
  {
    icon: <PackageSearch size={24} />,
    title: "Procurement & Inventory",
    desc: "Kelola pengadaan dan stok material secara terintegrasi.",
    features: [
      "PR → PO → GRN workflow",
      "Supplier management",
      "Inventory & stock tracking",
      "Material request & mutasi stok"
    ]
  },
  {
    icon: <Users size={24} />,
    title: "Workforce & HR",
    desc: "Kelola tenaga kerja tambang secara efisien dan terstruktur.",
    features: [
      "Data karyawan & kontrak",
      "Attendance & shift tracking",
      "Leave & approval workflow",
      "Payroll & slip gaji"
    ]
  },
  {
    icon: <Wallet size={24} />,
    title: "Finance & Cost Control",
    desc: "Pantau keuangan dan biaya operasional tambang secara real-time.",
    features: [
      "Jurnal & laporan keuangan",
      "AR / AP management",
      "Expense & cost tracking",
      "Analisis biaya tambang"
    ]
  },
  {
    icon: <LineChart size={24} />,
    title: "Analytics & Executive Dashboard",
    desc: "Ambil keputusan berbasis data dengan dashboard analitik yang lengkap.",
    features: [
      "Production analytics",
      "Inventory dashboard",
      "KPI & performance tracking",
      "Custom reporting"
    ]
  }
];

export default function ERPMining() {
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
            ERP Mining System
          </h1>
          <p className="text-gray-300 leading-relaxed text-lg lg:text-xl max-w-2xl mx-auto font-medium">
            Sistem operasi tambang terintegrasi. Pantau dan optimalkan aktivitas dari eksplorasi, produksi, logistik armada, hingga performa keuangan secara real-time.
          </p>
        </div>
      </section>

      {/* MODULES GRID SECTION (LIGHT) */}
      <section className="py-24 bg-[#F8FAFC] px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2545] mb-4">
              Modul Fundamental Tambang
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Dirancang dengan best-practices industri pertambangan, untuk efisiensi bisnis, transparansi data, dan percepatan keputusan operasional Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {miningModules.map((mod, idx) => (
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
            <div className="bg-gradient-to-br from-[#0B2545] to-[#13315C] rounded-2xl p-6 shadow-xl flex flex-col h-full justify-center text-center">
               <h3 className="text-2xl font-bold text-white mb-4">Butuh Custom Sistem?</h3>
               <p className="text-blue-100 text-sm leading-relaxed mb-6">
                 Konsultasikan kebutuhan operasional unik tambang Anda bersama architect kami.
               </p>
               <a href="https://wa.me/6281383882120" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-300 text-[#0B2545] font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-yellow-400/20">
                 Jadwalkan Konsultasi Gratis
               </a>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
