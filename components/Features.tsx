import Image from "next/image";

export default function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

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

        <Image
          src="/macbook-mockup.png"
          alt="preview"
          width={600}
          height={400}
          className="rounded-xl"
        />

      </div>
    </section>
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
