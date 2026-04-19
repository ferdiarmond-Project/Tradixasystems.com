import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050F1C] px-6 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Top - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">

          {/* Brand */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/Logo Tradixa only.png"
                alt="Tradixa"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
                loading="lazy"
              />
              <span className="text-white font-bold text-[24px] tracking-tight mt-1">Tradixa</span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Arsitek Digital untuk UMKM masa depan.
              <br />
              Mengubah kompleksitas menjadi kemudahan operasional dan profitabilitas yang terukur.
            </p>
          </div>

          <div className="flex flex-col items-start text-left">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-yellow-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:081383882120" className="group">
                  <span className="text-gray-500 hover:text-yellow-400 transition-colors italic font-medium">Contact Support: </span>
                  <span className="text-yellow-400 font-bold tracking-wider hover:text-yellow-300 transition-all drop-shadow-[0_0_8px_rgba(250,204,21,0.3)]">081383882120</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <Link href="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <Link href="/terms-of-service" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <div className="flex w-full max-w-sm gap-2 mb-6">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-yellow-400/50 focus:outline-none transition-colors"
              />
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-bold px-6 py-3 rounded-xl transition-all active:scale-95 flex-shrink-0">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed italic">
              Gedung Thamrin City LT. 3A Blok B No. 62-63
              <br />
              Jakarta Pusat, DKI Jakarta 10230
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            © 2026 Tradixa Digital Architect. Empowering UMKM through Professional Empathy.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Twitter">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://instagram.com/tradixa.systems" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="mailto:tradixasystems@gmail.com" className="text-gray-500 hover:text-white transition-colors" aria-label="Email">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
