"use client";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function GlobalBackButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <button 
      onClick={() => router.back()}
      className="fixed top-28 left-6 md:left-12 z-40 bg-[#0A2235]/80 hover:bg-[#0A2235] p-3 rounded-full backdrop-blur-md shadow-2xl border border-yellow-400/20 text-white transition-all duration-300 flex items-center justify-center group"
      aria-label="Kembali"
    >
      <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform text-yellow-400" />
    </button>
  );
}
