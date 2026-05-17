export default function BackgroundVariation1() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top center cyan glow - floating slowly */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] animate-float-slow hidden lg:block" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)' }} />
      
      {/* Bottom left blue glow - medium floating */}
      <div className="absolute bottom-0 -left-32 w-[700px] h-[700px] animate-float-medium hidden lg:block" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.20) 0%, transparent 70%)' }} />
      
      {/* Right side glow - floating reverse */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] animate-float-reverse hidden lg:block" style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)' }} />
      
      {/* Center-bottom accent glow */}
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] animate-pulse-glow hidden lg:block" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)' }} />
    </div>
  );
}
