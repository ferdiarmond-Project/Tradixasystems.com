"use client";

export default function FadeInSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Animations are currently disabled per user request for smooth mobile experience.
  return (
    <div className={`opacity-100 translate-y-0 ${className}`}>
      {children}
    </div>
  );
}
