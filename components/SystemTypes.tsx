import Image from "next/image";

export const systemsData = [
  {
    slug: "erp-management",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    name: "ERP & Management",
  },
  {
    slug: "accounting-finance",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    name: "Accounting & Finance",
  },
  {
    slug: "inventory-warehouse",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    name: "Inventory & Warehouse",
  },
  {
    slug: "pos-sales",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    name: "POS & Sales System",
  },
  {
    slug: "crm-customer",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    name: "CRM & Customer System",
  },
];

export default function SystemTypes() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#0D2140]">
      {/* Animated subtle blue glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Center blue glow - very subtle */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-15 animate-float-slow" />
        {/* Secondary glow - bottom left */}
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-blue-400 rounded-full blur-3xl opacity-10 animate-float-medium" />
        {/* Vignette overlay - dark edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2140] via-transparent to-[#0D2140] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D2140] via-transparent to-[#0D2140] opacity-60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex">Solusi Kami</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4">
            Jenis Sistem yang Dapat Dikembangkan
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            Kami membangun berbagai solusi digital yang disesuaikan dengan
            infrastruktur bisnis Anda.
          </p>
        </div>

        {/* Content: phones left, cards right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Two phones, upright, left-anchored */}
          <div className="relative w-full" style={{ height: '640px', overflow: 'visible' }}>

            {/* Phone 1 — back, anchored to far left edge */}
            <div className="absolute" style={{
              width: '800px',
              height: '640px',
              left: '-220px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}>
              <Image
                src="/mockup-system-18.png"
                alt="Mobile App Preview"
                width={800}
                height={1600}
                className="h-full w-auto object-contain drop-shadow-2xl"
                loading="eager"
              />
            </div>

            {/* Phone 2 — front, slightly overlaps Phone 1 */}
            <div className="absolute" style={{
              width: '800px',
              height: '640px',
              left: '-50px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
            }}>
              <Image
                src="/mockup-system.png"
                alt="Mobile App Preview 2"
                width={800}
                height={1600}
                className="h-full w-auto object-contain drop-shadow-2xl"
                loading="eager"
              />
            </div>

          </div>

          {/* RIGHT — System cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {systemsData.map((sys, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0B2340] border border-white/10 flex items-center justify-center text-yellow-400 flex-shrink-0 group-hover:bg-yellow-400/10 group-hover:border-yellow-400/20 transition-colors">
                  {sys.icon}
                </div>
                <span className="text-sm font-semibold text-white leading-snug">
                  {sys.name}
                </span>
              </div>
            ))}

            {/* CTA Card */}
            <div className="glass-card rounded-2xl p-5 bg-yellow-400/5 border-yellow-400/20 hover:bg-yellow-400/10 transition-all duration-300 cursor-pointer flex flex-col justify-between gap-4">
              <p className="text-sm font-semibold text-white">Kebutuhan Lain?</p>
              <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-bold py-2.5 rounded-xl transition-colors">
                Hubungi Kami
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
