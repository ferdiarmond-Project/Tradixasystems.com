export default function BackgroundVariation2() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Bottom center pulsing yellow glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] animate-pulse-glow hidden lg:block" style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.20) 0%, transparent 70%)' }} />
      
      {/* Top left blue glow - medium floating */}
      <div className="absolute top-0 -left-40 w-[600px] h-[600px] animate-float-medium hidden lg:block" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.20) 0%, transparent 70%)' }} />
      
      {/* Right side yellow accent - slow float */}
      <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] animate-float-slow hidden lg:block" style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.15) 0%, transparent 70%)' }} />
      
      {/* Center subtle glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] animate-float-reverse hidden lg:block" style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 70%)' }} />
    </div>
  );
}
