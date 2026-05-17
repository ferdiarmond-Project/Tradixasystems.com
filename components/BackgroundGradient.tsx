export default function BackgroundGradient() {
  return (
    <>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071A2E] via-[#0B2A4A] to-[#081F38]" />
      
      {/* Center glow - main light source - Hidden on mobile, shown on desktop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hidden lg:block pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }} />
      
      {/* Bottom center warm glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] translate-y-1/2 hidden lg:block pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)' }} />
      
      {/* Top right accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] -translate-y-1/2 translate-x-1/4 hidden lg:block pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.05) 0%, transparent 70%)' }} />
      
      {/* Top left accent */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] -translate-x-1/2 hidden lg:block pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)' }} />
    </>
  );
}
