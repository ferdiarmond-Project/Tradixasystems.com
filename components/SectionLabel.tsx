export default function SectionLabel({ text, className = "justify-center" }: { text: string, className?: string }) {
  return (
    <div className={`flex mb-6 ${className}`}>
      <span className="section-label flex-col items-center justify-center gap-1.5 px-6 py-2">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
        <span className="text-center">{text}</span>
      </span>
    </div>
  );
}
