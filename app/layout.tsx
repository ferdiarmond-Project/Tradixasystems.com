import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tradixa – Digital Transformation Partner",
  description:
    "Tradixa membangun sistem custom sesuai workflow bisnis Anda. Partner teknologi terpercaya untuk UMKM yang ingin scale dengan sistem digital yang efisien.",
};

import GlobalBackButton from "../components/GlobalBackButton";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="overflow-x-hidden">
      <body suppressHydrationWarning className={`${inter.variable} font-sans bg-[#071A2E] text-white antialiased overflow-x-hidden relative w-full`}>
        <GlobalBackButton />
        <main className="opacity-0 animate-[fade-in_1s_ease-out_forwards]">
          {children}
        </main>
      </body>
    </html>
  );
}
