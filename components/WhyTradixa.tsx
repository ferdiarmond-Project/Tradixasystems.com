import { CheckCircle2, Zap, DollarSign, Target, Activity } from "lucide-react";

const reasons = [
  {
    icon: <Zap size={24} />,
    title: "Kecepatan Implementasi",
    desc: "Sistem kami dirancang untuk langsung dipakai, menghemat waktu setup berbulan-bulan menjadi hanya hitungan hari.",
    color: "bg-blue-50 text-[#0B2545]",
    iconColor: "group-hover:text-yellow-400",
  },
  {
    icon: <DollarSign size={24} />,
    title: "Efisiensi Biaya",
    desc: "Hindari biaya tersembunyi infrastruktur mahal. Dapatkan kualitas lisensi enterprise dengan investasi yang jelas dan terukur.",
    color: "bg-emerald-50 text-[#0B2545]",
    iconColor: "group-hover:text-emerald-500",
  },
  {
    icon: <Target size={24} />,
    title: "Fokus Kebutuhan Bisnis",
    desc: "Hilangkan fitur mubazir. Kami menyusun arsitektur sistem khusus sesuai dengan model operasional inti Anda.",
    color: "bg-purple-50 text-[#0B2545]",
    iconColor: "group-hover:text-purple-500",
  },
  {
    icon: <Activity size={24} />,
    title: "Skalabilitas Maksimal",
    desc: "Infrastruktur yang dirancang dari hari pertama untuk tumbuh bersama bisnis Anda menembus jutaan transaksi tanpa hambatan.",
    color: "bg-orange-50 text-[#0B2545]",
    iconColor: "group-hover:text-orange-500",
  }
];

export default function WhyTradixa() {
  return (
    <section className="py-12 bg-white relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16 max-w-2xl mx-auto animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-4 border border-blue-100">
            Nilai Tambah Kami
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#0B2545] mb-4 tracking-tight leading-tight">
             Kenapa Memilih Tradixa?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
             Investasi teknologi terbaik untuk mempercepat hasil nyata bisnis Anda tanpa kerumitan yang tak perlu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_-10px_rgba(37,99,235,0.2)] transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col h-full group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${reason.color} group-hover:bg-[#0B2545] ${reason.iconColor}`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0B2545] mb-3 leading-snug">{reason.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">{reason.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
