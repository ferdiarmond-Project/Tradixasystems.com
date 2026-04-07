"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const readySolutionsItems = [
  { label: "ERP Mining System", href: "/ready-solutions/erp-mining" },
  { label: "Retail Management System", href: "/ready-solutions/retail-management" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? "bottom-0 bg-[#071A2E] overflow-y-auto" : scrolled
          ? "h-24 bg-gradient-to-r from-[#071A2E] via-[#0a2a4a] to-[#123456] backdrop-blur-xl shadow-lg shadow-black/20"
          : "h-24 bg-gradient-to-r from-[#071A2E] via-[#0a2a4a] to-[#123456]"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/Logo Tradixa only.png"
            alt="Tradixa"
            width={280}
            height={88}
            className="h-20 w-auto object-contain"
            priority
          />
          <span className="text-white font-bold text-xl tracking-tight">Tradixa</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">

          {/* About Us — FIRST */}
          <Link href="/about" className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-200">
            About Us
          </Link>

          {/* Solutions */}
          <Link href="/solutions" className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-200">
            Solutions
          </Link>

          {/* Ready Solutions — with dropdown */}
          <div
            className="relative h-full flex items-center"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Ready Solutions
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 pt-4"
              >
                <div
                  className="w-56 rounded-xl overflow-hidden shadow-2xl"
                  style={{
                    background: 'rgba(7, 26, 46, 0.95)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  {readySolutionsItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-5 py-3.5 text-sm text-white/90"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Consulting */}
          <a href="#" className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-200">
            Consulting
          </a>

          {/* UMKM Growth */}
          <a href="#" className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-200">
            UMKM Growth
          </a>

          {/* Case Studies */}
          <a href="#" className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-200">
            Case Studies
          </a>

        </div>

        {/* CTA (Desktop only) */}
        <div className="hidden md:block">
          <a href="/consultation" className="bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/20 inline-block">
            Free Consultation
          </a>
        </div>

        {/* Hamburger Menu Toggle (Mobile only) */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} className="w-7 h-7" /> : <Menu size={28} className="w-7 h-7" />}
        </button>
      </div>
      {/* Mobile Menu Content (Expands inside the Nav) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col px-6 pb-12 animate-fade-up">
          <div className="flex flex-col gap-6 pt-4">
            <Link href="/about" className="text-xl font-medium text-white hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/solutions" className="text-xl font-medium text-white hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Solutions
            </Link>

            <div className="flex flex-col gap-3">
              <span className="text-xl font-medium text-white">Ready Solutions</span>
              <div className="pl-4 border-l-2 border-white/10 flex flex-col gap-4">
                {readySolutionsItems.map((item) => (
                  <Link key={item.label} href={item.href} className="text-lg text-white/70 hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="#" className="text-xl font-medium text-white hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Consulting
            </Link>
            <Link href="#" className="text-xl font-medium text-white hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              UMKM Growth
            </Link>
            <Link href="#" className="text-xl font-medium text-white hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Case Studies
            </Link>
          </div>

          <div className="mt-10">
            <a href="/consultation" className="w-full text-center bg-yellow-400 hover:bg-yellow-300 text-black text-lg font-bold px-5 py-4 rounded-xl transition-all duration-200 block shadow-xl shadow-yellow-400/20" onClick={() => setIsMobileMenuOpen(false)}>
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
