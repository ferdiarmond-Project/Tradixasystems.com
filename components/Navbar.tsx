"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X, User, LogOut, Layers, Database } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { User as SupabaseUser } from "@supabase/supabase-js";

const servicesItems = [
  { label: "Digital Transformation", href: "/services/digital-transformation" },
  { label: "Strategy & Planning", href: "/services/strategy-planning" },
  { label: "Tech Integration", href: "/services/tech-integration" },
];

const readySolutionsItems = [
  { label: "ERP Mining System", href: "/ready-solutions/erp-mining" },
  { label: "Retail Management System", href: "/ready-solutions/retail-management" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(e.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    // Check initial session
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setProfileDropdownOpen(false);
    window.location.reload();
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 border-b border-white/5 ${isMobileMenuOpen ? "bottom-0 h-full bg-gradient-to-b from-[#071A2E] to-[#051424] overflow-y-auto" : scrolled
          ? "h-24 bg-[#071A2E]/90 backdrop-blur-md shadow-lg shadow-black/40 bg-gradient-to-b from-[#071A2E] to-[#051424]/95"
          : "h-24 bg-gradient-to-b from-[#071A2E] to-[#051424]"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/Logo Tradixa only.png"
            alt="Tradixa"
            width={150}
            height={46}
            className="h-12 w-auto object-contain"
            priority
          />
          <span className="text-white font-bold text-xl tracking-tight">Tradixa</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">

          {/* About Us — FIRST */}
          <Link href="/about" className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-200">
            About Us
          </Link>

          {/* Services — with dropdown (Image 2) */}
          <div
            className="relative h-full flex items-center"
            ref={servicesDropdownRef}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown menu */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                <div
                  className="w-64 rounded-xl overflow-hidden shadow-2xl animate-fade-up"
                  style={{
                    background: 'rgba(7, 26, 46, 0.95)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  {servicesItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-6 py-4 text-sm text-white/90 hover:bg-white/5 hover:text-yellow-400 transition-all border-b border-white/5 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Solutions Page (Grid of System Types) */}
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

          {/* Case Studies (Image 3) */}
          <Link href="/case-studies" className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-200">
            Case Studies
          </Link>

        </div>

        {/* CTA / Auth (Desktop only) */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="relative" ref={profileDropdownRef}>
              <button 
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="w-10 h-10 rounded-full border border-white/20 overflow-hidden hover:border-yellow-400/50 transition-all focus:outline-none"
              >
                {user.user_metadata?.avatar_url ? (
                  <Image 
                    src={user.user_metadata.avatar_url} 
                    alt="Profile" 
                    width={40} 
                    height={40} 
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white">
                    <User size={20} />
                  </div>
                )}
              </button>

              {/* Profile Dropdown */}
              {profileDropdownOpen && (
                <div className="absolute top-full right-0 mt-4 w-48 rounded-xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl bg-[#071A2E]/90 animate-fade-up">
                  <div className="px-4 py-3 border-b border-white/5">
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>
                  <Link 
                    href="/profile" 
                    className="flex items-center gap-2 px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors"
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    <User size={16} /> Profill Saya
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-400 hover:bg-white/5 transition-colors text-left"
                  >
                    <LogOut size={16} /> Keluar
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/consultation" className="bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-bold px-6 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/20 inline-block active:scale-95">
              Free Consultation
            </Link>
          )}
        </div>

        {/* Hamburger Menu Toggle (Mobile only) */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} className="w-7 h-7" /> : <Menu size={28} className="w-7 h-7" />}
        </button>
      </div>
      {/* Mobile Menu Content (Expands inside the Nav) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col px-6 pb-12 will-change-transform transition-opacity duration-300">
          <div className="flex flex-col gap-6 pt-4">
            <Link href="/about" className="text-xl font-medium text-white hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between text-xl font-medium text-white hover:text-yellow-400 transition-colors w-full text-left"
              >
                <div className="flex items-center gap-3">
                  <Layers size={22} className="text-yellow-400" />
                  <span>Services</span>
                </div>
                <ChevronDown size={20} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 border-l-2 border-white/10 flex flex-col gap-4 py-1">
                  {servicesItems.map((item) => (
                    <Link key={item.label} href={item.href} className="text-lg text-white/70 hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/solutions" className="text-xl font-medium text-white hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Solutions
            </Link>

            {/* Mobile Ready Solutions Accordion */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="flex items-center justify-between text-xl font-medium text-white hover:text-yellow-400 transition-colors w-full text-left"
              >
                <div className="flex items-center gap-3">
                  <Database size={22} className="text-yellow-400" />
                  <span>Ready Solutions</span>
                </div>
                <ChevronDown size={20} className={`transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileSolutionsOpen && (
                <div className="pl-4 border-l-2 border-white/10 flex flex-col gap-4 py-1">
                  {readySolutionsItems.map((item) => (
                    <Link key={item.label} href={item.href} className="text-lg text-white/70 hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/case-studies" className="text-xl font-medium text-white hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Case Studies
            </Link>
          </div>

          <div className="mt-10 border-t border-white/5 pt-6">
            {user ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 px-2">
                  <div className="w-12 h-12 rounded-full border border-white/20 overflow-hidden">
                    {user.user_metadata?.avatar_url ? (
                      <Image src={user.user_metadata.avatar_url} alt="Profile" width={48} height={48} />
                    ) : (
                      <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white"><User size={24} /></div>
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium">{user.email?.split('@')[0]}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                </div>
                <Link href="/profile" className="w-full text-center bg-white/5 text-white py-4 rounded-xl border border-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                  Profil Saya
                </Link>
                <button onClick={handleLogout} className="w-full text-center bg-red-500/10 text-red-400 py-4 rounded-xl border border-red-500/20">
                  Keluar
                </button>
              </div>
            ) : (
              <Link href="/consultation" className="w-full text-center bg-yellow-400 hover:bg-yellow-300 text-black text-lg font-bold px-5 py-4 rounded-xl transition-all duration-200 block shadow-xl shadow-yellow-400/20" onClick={() => setIsMobileMenuOpen(false)}>
                Free Consultation
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
