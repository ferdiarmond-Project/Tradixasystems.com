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
import StartupLoader from "../components/StartupLoader";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="overflow-x-hidden">
      <body className={`${inter.variable} font-sans bg-[#071A2E] text-white antialiased overflow-x-hidden relative w-full`}>
        {/* Anti-flash script */}
        <script dangerouslySetInnerHTML={{ __html: `
          if (typeof window !== 'undefined') {
            document.body.style.opacity = '1';
          }
        `}} />
        <StartupLoader />
        <GlobalBackButton />
        <main className="transition-opacity duration-1000">
          {children}
        </main>
      </body>
    </html>
  );
}
