import BackgroundGradient from "./BackgroundGradient";
import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#040E1A]">
      {/* Full animated colorful gradient background layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0B2545] via-[#241b3e] to-[#040E1A] bg-[length:400%_400%] animate-[aurora-shift_12s_ease-in-out_infinite]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent opacity-80 mix-blend-screen" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-80 mix-blend-screen" />

      <FadeInSection className="relative z-10 max-w-3xl mx-auto backdrop-blur-[2px] bg-black/10 p-8 rounded-3xl border border-white/5">
        <h1 className="text-5xl font-bold mb-8">About Us</h1>
        
        <div className="space-y-6 text-gray-300 text-justify">
          <p className="text-lg leading-relaxed">
            Tradixa adalah partner transformasi digital yang membantu bisnis berkembang secara lebih terstruktur, efisien, dan berkelanjutan melalui sistem yang dirancang khusus sesuai kebutuhan setiap usaha.
          </p>
          
          <p className="text-lg leading-relaxed">
            Kami memahami bahwa setiap bisnis memiliki karakter, proses, dan tantangan yang unik. Oleh karena itu, Tradixa tidak sekadar menghadirkan teknologi, tetapi merancang solusi yang benar-benar selaras dengan workflow operasional, sehingga mampu meningkatkan produktivitas sekaligus mempermudah pengelolaan bisnis secara menyeluruh.
          </p>

          <p className="text-lg leading-relaxed">
            Nama Tradixa berasal dari filosofi transisi — sebuah perjalanan dari sistem bisnis yang masih tradisional, manual, atau bahkan belum terdigitalisasi, menuju ekosistem digital yang terintegrasi, modern, dan scalable. Kami hadir sebagai jembatan dalam proses perubahan tersebut, memastikan setiap langkah transformasi berjalan lebih terarah, terukur, dan memberikan dampak nyata bagi pertumbuhan bisnis.
          </p>

          <p className="text-lg leading-relaxed">
            Dengan pendekatan yang fleksibel dan berorientasi pada hasil, Tradixa tidak hanya membangun sistem, tetapi juga menjadi mitra strategis dalam perjalanan transformasi digital Anda.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4 text-left">Visi</h2>
          <p className="text-lg leading-relaxed">
            Menjadi partner teknologi terpercaya bagi bisnis di Indonesia dalam mewujudkan transformasi digital yang efektif, terukur, dan berkelanjutan.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4 text-left">Misi</h2>
          <ul className="text-lg leading-relaxed space-y-4">
            <li className="flex items-start gap-4">
              <span className="text-yellow-400 font-bold text-xl leading-none pt-1">•</span>
              <span>Mengembangkan solusi sistem digital yang fleksibel dan dapat disesuaikan dengan kebutuhan unik setiap bisnis.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-yellow-400 font-bold text-xl leading-none pt-1">•</span>
              <span>Membantu pelaku usaha bertransformasi dari proses manual menuju sistem yang terintegrasi secara sederhana, efisien, dan terjangkau.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-yellow-400 font-bold text-xl leading-none pt-1">•</span>
              <span>Menyediakan layanan konsultasi, implementasi, dan pendampingan agar sistem dapat digunakan secara optimal dalam operasional sehari-hari.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-yellow-400 font-bold text-xl leading-none pt-1">•</span>
              <span>Meningkatkan efisiensi dan produktivitas bisnis melalui integrasi data, otomatisasi proses, dan pengelolaan yang lebih terstruktur.</span>
            </li>
          </ul>
        </div>
      </FadeInSection>
    </section>
  );
}
