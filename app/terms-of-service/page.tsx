import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundVariation2 from "@/components/BackgroundVariation2";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#071A2E] text-white selection:bg-yellow-400 selection:text-black">
      <Navbar />
      
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <BackgroundVariation2 />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 lg:pt-32 pb-12 lg:pb-20 optimize-render">
        <header className="mb-16 border-b border-white/10 pb-10">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tighter mb-4">TERMS OF SERVICE</h1>
          <p className="text-yellow-400 font-medium tracking-wide">Effective Date: January 6, 2026</p>
        </header>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">01</span>
              Gambaran Umum Layanan
            </h2>
            <p className="text-justify">
              Tradixa Systems menyediakan platform integrasi digital berbasis cloud (SaaS) yang mencakup sistem ERP, HRIS, dan modul operasional bisnis lainnya. Layanan kami dirancang untuk membantu perusahaan (B2B) dalam mengelola alur kerja, data karyawan, dan efisiensi operasional harian.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">02</span>
              Akun Pengguna dan Keamanan
            </h2>
            <p className="mb-4">Untuk mengakses layanan Tradixa, Anda setuju untuk:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Memberikan informasi pendaftaran perusahaan yang akurat dan lengkap.</li>
              <li>Menjaga kerahasiaan kredensial akun Anda dan bertanggung jawab atas semua aktivitas di bawah akun tersebut.</li>
              <li>Segera memberitahu kami jika terdapat indikasi penyalahgunaan akun atau pelanggaran keamanan.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">03</span>
              Aturan Penggunaan dan Larangan
            </h2>
            <p className="mb-4 text-justify">Kami menghargai lingkungan profesional. Anda dilarang untuk:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Menggunakan platform untuk aktivitas ilegal, penipuan, atau melanggar hukum RI.</li>
              <li>Melakukan rekayasa balik (<strong>reverse engineering</strong>) atau mencoba menyalin kode sumber platform.</li>
              <li>Mengunggah konten yang mengandung virus, malware, atau skrip berbahaya.</li>
              <li>Mengganggu integritas atau stabilitas sistem cloud Tradixa Systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">04</span>
              Kepemilikan Data Bisnis
            </h2>
            <p className="text-justify">
              Anda memegang kepemilikan penuh atas semua data bisnis, catatan karyawan, dan konten yang Anda unggah ke Tradixa Systems. Kami hanya bertindak sebagai pemroses data untuk memfasilitasi operasional Anda sesuai dengan instruksi yang diberikan melalui fitur-fitur aplikasi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">05</span>
              Ketersediaan dan Dukungan
            </h2>
            <p className="text-justify">
              Meskipun kami berkomitmen untuk menyediakan layanan terbaik, kami tidak menjamin ketersediaan sistem 100% tanpa gangguan (<strong>uptime</strong>). Kami melakukan pemeliharaan rutin yang mungkin menyebabkan downtime singkat, dan kami akan berusaha memberikan notifikasi sebelumnya melalui dashboard aplikasi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">06</span>
              Batasan Tanggung Jawab
            </h2>
            <p className="text-justify">
              Tradixa Systems tidak bertanggung jawab atas kerugian tidak langsung, kehilangan keuntungan bisnis, atau kerusakan data yang disebabkan oleh kelalaian pihak ketiga atau penggunaan platform yang tidak sesuai instruksi teknis kami. Layanan disediakan dengan basis <strong>"sebagaimana adanya" (as is)</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">07</span>
              Penghentian Akun
            </h2>
            <p className="text-justify">
              Anda dapat menghentikan penggunaan layanan kapan saja. Tradixa Systems juga berhak menangguhkan atau menghentikan akses jika ditemukan pelanggaran serius terhadap ketentuan penggunaan ini, demi melindungi keamanan pengguna lainnya.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">08</span>
              Hukum yang Berlaku
            </h2>
            <p className="text-justify">
              Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku di Republik Indonesia. Setiap perselisihan yang timbul akan diselesaikan melalui musyawarah untuk mufakat atau melalui yurisdiksi pengadilan yang berwenang.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">Butuh Penjelasan Lebih Lanjut?</h2>
            <p className="mb-4">
              Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan penggunaan platform Tradixa Systems, silakan hubungi tim legal kami.
            </p>
            <a href="mailto:tradixasystems@gmail.com" className="text-yellow-400 font-bold hover:underline">
              tradixasystems@gmail.com
            </a>
          </section>

        </div>
      </div>
    </main>
  );
}
