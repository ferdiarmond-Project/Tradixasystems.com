"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BackgroundGradient from "@/components/BackgroundGradient";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      setSuccessMsg("Berhasil! Silakan cek email Anda untuk verifikasi.");
      setLoading(false);
    }
  };

  return (
    <>
      <main className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
        <BackgroundGradient />
        
        <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl animate-fade-up">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Daftar Akun</h1>
            <p className="text-gray-400">Buat akun untuk mengelola projek Anda</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
                placeholder="nama@perusahaan.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
                placeholder="••••••••"
              />
              <p className="text-[10px] text-gray-500 mt-1 ml-1">*Minimal 6 karakter</p>
            </div>

            {errorMsg && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm py-2.5 px-4 rounded-xl text-center">
                {errorMsg}
              </div>
            )}

            {successMsg && (
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-sm py-2.5 px-4 rounded-xl text-center">
                {successMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-black font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-yellow-400/20 active:scale-95"
            >
              {loading ? "Mendaftarkan..." : "Daftar"}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400">
            Sudah punya akun?{" "}
            <Link href="/login" className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
              Masuk
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
