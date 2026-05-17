export default function BackgroundVariation3() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Center floating purple glow - reverse float */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] animate-float-reverse hidden lg:block" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.20) 0%, transparent 70%)' }} />
      
      {/* Bottom left cyan accent */}
      <div className="absolute bottom-0 -left-32 w-[600px] h-[600px] animate-float-slow hidden lg:block" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)' }} />
      
      {/* Top right pulsing glow */}
      <div className="absolute top-0 -right-24 w-[500px] h-[500px] animate-pulse-glow hidden lg:block" style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.15) 0%, transparent 70%)' }} />
      
      {/* Right side cyan - medium float */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] animate-float-medium hidden lg:block" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)' }} />
    </div>
  );
}
