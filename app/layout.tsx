import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "Tradixa - Digital Transformation Partner",
  description:
    "Tradixa membangun sistem custom sesuai workflow bisnis Anda. Partner teknologi terpercaya untuk UMKM yang ingin scale dengan sistem digital yang efisien.",
  icons: {
    icon: "/favicon-tradixa.png",
    apple: "/favicon-tradixa.png",
  },
  openGraph: {
    title: "Tradixa - Digital Transformation Partner",
    description: "Tradixa membangun sistem custom sesuai workflow bisnis Anda. Partner teknologi terpercaya untuk UMKM yang ingin scale dengan sistem digital yang efisien.",
    images: [
      {
        url: "/Logo Tradixa only.png",
        width: 1200,
        height: 630,
        alt: "Tradixa Logo",
      },
    ],
  },
};

import GlobalBackButton from "../components/GlobalBackButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} font-sans bg-[#071A2E] text-white antialiased overflow-x-hidden relative w-full`}>
        <Navbar />
        <GlobalBackButton />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
