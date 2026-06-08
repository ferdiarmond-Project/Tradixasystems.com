import Image from "next/image";
import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Image Container with optimized static image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image-flow.jpg"
          alt="About Us Background"
          fill
          priority
          quality={80}
          className="object-cover object-center"
        />
        {/* Premium dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071A2E]/90 via-[#071A2E]/80 to-[#071A2E]" />
      </div>

      <FadeInSection className="relative z-10 max-w-3xl mx-auto backdrop-blur-md bg-black/30 p-8 rounded-3xl border border-white/10 shadow-2xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8">About Us</h1>
        
        <div className="space-y-6 text-gray-300 text-justify">
          <p className="text-lg leading-relaxed">
            Tradixa adalah partner transformasi digital yang membantu bisnis berkembang secara lebih terstruktur, efisien, dan berkelanjutan melalui sistem yang dirancang khusus sesuai kebutuhan setiap usaha.
          </p>
          
          <p className="text-lg leading-relaxed">
            Kami memahami bahwa setiap bisnis memiliki karakter, proses, dan tantangan yang unik. Oleh karena itu, Tradixa tidak sekadar menghadirkan teknologi, tetapi merancang solusi yang benar-benar selaras dengan workflow operasional, sehingga mampu meningkatkan produktivitas sekaligus mempermudah pengelolaan bisnis secara menyeluruh.
          </p>

          <p className="text-lg leading-relaxed">
            Nama Tradixa berasal dari filosofi transisi - sebuah perjalanan dari sistem bisnis yang masih tradisional, manual, atau bahkan belum terdigitalisasi, menuju ekosistem digital yang terintegrasi, modern, dan scalable. Kami hadir sebagai jembatan dalam proses perubahan tersebut, memastikan setiap langkah transformasi berjalan lebih terarah, terukur, dan memberikan dampak nyata bagi pertumbuhan bisnis.
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
