export default function BackgroundGradient() {
  return (
    <>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071A2E] via-[#0B2A4A] to-[#081F38]" />
      
      {/* Center glow - main light source - Desktop only */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hidden lg:block pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }} />
    </>
  );
}
