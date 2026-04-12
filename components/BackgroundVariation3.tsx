export default function BackgroundVariation3() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Center floating purple glow - reverse float */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl animate-float-reverse hidden lg:block" />
      
      {/* Bottom left cyan accent */}
      <div className="absolute bottom-0 -left-32 w-[600px] h-[600px] bg-cyan-500/18 rounded-full blur-3xl animate-float-slow hidden lg:block" />
      
      {/* Top right pulsing glow */}
      <div className="absolute top-0 -right-24 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl animate-pulse-glow hidden lg:block" />
      
      {/* Right side cyan - medium float */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-cyan-400/12 rounded-full blur-3xl animate-float-medium hidden lg:block" />
    </div>
  );
}
