export default function BackgroundVariation2() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Bottom center pulsing yellow glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/20 rounded-full blur-3xl animate-pulse-glow hidden lg:block" />
      
      {/* Top left blue glow - medium floating */}
      <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-float-medium hidden lg:block" />
      
      {/* Right side yellow accent - slow float */}
      <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-yellow-400/15 rounded-full blur-3xl animate-float-slow hidden lg:block" />
      
      {/* Center subtle glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl animate-float-reverse hidden lg:block" />
    </div>
  );
}
