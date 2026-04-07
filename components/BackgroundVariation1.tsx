export default function BackgroundVariation1() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top center cyan glow - floating slowly */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/25 rounded-full blur-3xl animate-float-slow" />
      
      {/* Bottom left blue glow - medium floating */}
      <div className="absolute bottom-0 -left-32 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-3xl animate-float-medium" />
      
      {/* Right side glow - floating reverse */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl animate-float-reverse" />
      
      {/* Center-bottom accent glow */}
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl animate-pulse-glow" />
    </div>
  );
}
