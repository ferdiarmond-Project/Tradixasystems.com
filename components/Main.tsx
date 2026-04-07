import Image from "next/image";

export default function Main() {
  return (
    <main className="bg-[#002347] text-white">

      {/* ===== HERO ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10">
        
        <div className="flex-1">
          <p className="text-yellow-400 text-sm mb-4">
            Digital Transformation Partner
          </p>

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Kami membuat sistem custom <br />
            sesuai workflow bisnis Anda
          </h1>

          <p className="text-gray-300 mb-8">
            Partner teknologi untuk UMKM yang ingin scale.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold">
              Mulai Transformasi
            </button>
            <button className="border border-white px-6 py-3 rounded-lg">
              Lihat Portfolio
            </button>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src="/macbook-mockup.png"
            alt="hero"
            width={800}
            height={500}
            className="w-full"
          />
        </div>
        
      </section>
       
      {/* ===== PROBLEM SECTION ===== */}
      <section className="bg-[#001b3d] py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Tantangan Operasional Bisnis
            </h2>

            <p className="text-gray-300">
              Banyak bisnis masih menggunakan sistem manual dan terpisah,
              menyebabkan data tidak akurat dan keputusan lambat.
            </p>
          </div>

          <div className="grid gap-6">
            <Card text="Proses masih manual & tidak terintegrasi" />
            <Card text="Sulit memantau performa bisnis" />
            <Card text="Data tersebar di banyak tools" />
            <Card text="Laporan tidak real-time" />
          </div>

        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl font-bold mb-8">
              Sistem mengikuti alur kerja bisnis Anda
            </h2>

            <Feature
              title="Workflow sesuai proses internal"
              desc="Kami tidak mengubah cara Anda bekerja."
            />

            <Feature
              title="Otomatisasi sesuai kebutuhan"
              desc="Hilangkan pekerjaan repetitif."
            />
          </div>

          <div>
            <Image
              src="/mockup-system-16.png"
              alt="preview"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-[#001b3d] p-10 rounded-3xl">
          
          <h2 className="text-3xl font-bold mb-4">
            Siap naik ke level berikutnya?
          </h2>

          <p className="text-gray-300 mb-6">
            Konsultasikan bisnis Anda secara gratis.
          </p>

          <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold">
            Jadwalkan Konsultasi
          </button>

        </div>
      </section>

    </main>
  );
}

/* ===== COMPONENTS ===== */

function Card({ text }: { text: string }) {
  return (
    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
      {text}
    </div>
  );
}

function Feature({ title, desc }: any) {
  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}
