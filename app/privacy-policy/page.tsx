import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundVariation1 from "@/components/BackgroundVariation1";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#071A2E] text-white selection:bg-yellow-400 selection:text-black">
      <Navbar />
      
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <BackgroundVariation1 />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 lg:pt-44 pb-12 lg:pb-20 optimize-render">
        <header className="mb-16 border-b border-white/10 pb-10">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tighter mb-4">PRIVACY POLICY</h1>
          <p className="text-yellow-400 font-medium tracking-wide">Effective Date: January 6, 2026</p>
        </header>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">01</span>
              Pendekatan Kami Terhadap Privasi
            </h2>
            <p className="text-justify">
              Di Tradixa Systems, kami percaya bahwa data Anda adalah aset paling berharga Anda. Kami berkomitmen untuk menjaga kepercayaan Anda dengan bersikap transparan tentang bagaimana kami mengelola dan melindungi informasi yang dipercayakan kepada platform SaaS kami. Kebijakan ini menjelaskan praktik kami dalam memproses data untuk solusi ERP, HRIS, dan sistem operasional lainnya.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">02</span>
              Informasi yang Kami Kelola
            </h2>
            <p className="mb-4">Untuk memberikan layanan yang optimal, kami memproses beberapa kategori data berikut:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Data Perusahaan:</strong> Nama entitas bisnis, alamat kantor, NPWP, dan informasi identitas perusahaan lainnya.</li>
              <li><strong>Informasi Karyawan:</strong> Data yang dimasukkan ke dalam sistem HRIS seperti nama, jabatan, struktur organisasi, dan catatan operasional terkait.</li>
              <li><strong>Data Operasional:</strong> Catatan transaksi, manajemen stok, dan alur kerja bisnis yang Anda kelola melalui sistem ERP kami.</li>
              <li><strong>Informasi Teknis:</strong> Alamat IP, jenis perangkat, dan catatan log penggunaan aplikasi untuk tujuan keamanan dan peningkatan performa.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">03</span>
              Tujuan Penggunaan Data
            </h2>
            <p className="mb-4">Kami memproses informasi Anda semata-mata untuk:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Menyediakan, menjaga, dan memelihara fitur-fitur layanan cloud Tradixa Systems.</li>
              <li>Memastikan akurasi perhitungan operasional dan pelaporan bisnis Anda.</li>
              <li>Memberikan dukungan teknis yang responsif dan bantuan pengguna.</li>
              <li>Mendeteksi, mencegah, dan menangani masalah keamanan atau teknis secara proaktif.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">04</span>
              Keamanan dan Penyimpanan
            </h2>
            <p className="text-justify">
              Kami mengimplementasikan standar keamanan kelas industri untuk melindungi data Anda. Seluruh data disimpan dalam infrastruktur cloud yang terenkripsi dan dipantau selama 24/7. Kami menggunakan protokol enkripsi saat data dikirimkan (in-transit) maupun saat data disimpan (at-rest) untuk meminimalisir risiko akses yang tidak sah.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">05</span>
              Prinsip Berbagi Data
            </h2>
            <p className="text-justify">
              Tradixa Systems <strong>tidak pernah menjual data Anda kepada pihak ketiga</strong>. Kami hanya berbagi informasi dengan penyedia layanan infrastruktur (seperti provider cloud) yang terikat kontrak ketat untuk melindungi data Anda, atau jika diwajibkan oleh hukum yang berlaku di Republik Indonesia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">06</span>
              Hak Pengguna dan Retensi
            </h2>
            <p className="text-justify">
              Sebagai pemilik data, Anda memiliki kontrol penuh. Anda berhak untuk mengakses, memperbaiki, serta meminta penghapusan data perusahaan Anda dari sistem kami. Kami menyimpan data selama akun Anda aktif atau sesuai dengan kewajiban retensi data legal yang berlaku bagi perusahaan B2B.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-yellow-400 text-sm font-mono border border-yellow-400/30 px-2 py-1 rounded">07</span>
              Perubahan Kebijakan
            </h2>
            <p className="text-justify">
              Kami dapat memperbarui kebijakan privasi ini secara berkala untuk mencerminkan perubahan pada layanan kami. Anda akan menerima notifikasi melalui aplikasi atau email jika terdapat perubahan yang signifikan dalam cara kami mengelola data Anda.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">Butuh Bantuan Lebih Lanjut?</h2>
            <p className="mb-4">
              Jika Anda memiliki pertanyaan mengenai privasi atau keamanan data di Tradixa Systems, tim privasi kami siap membantu.
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
