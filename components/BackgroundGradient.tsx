export default function BackgroundGradient() {
  return (
    <>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071A2E] via-[#0B2A4A] to-[#081F38]" />
      
      {/* Center glow - main light source */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/15 rounded-full blur-3xl" />
      
      {/* Bottom center warm glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl translate-y-1/2" />
      
      {/* Top right accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      
      {/* Top left accent */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2" />
    </>
  );
}
