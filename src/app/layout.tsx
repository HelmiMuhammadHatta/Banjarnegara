import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pemerintah Kabupaten Banjarnegara",
  description: "Website Resmi Pemerintah Kabupaten Banjarnegara. Informasi pemerintahan, layanan publik, berita terbaru, dan transparansi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased flex flex-col min-h-screen`}>
        <Header />
        {/* FIX: Semantic HTML <main> (Point D.16) */}
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        {/* FIX: Widget melayang dibuat collapsible (Point C.9) */}
        <FloatingWidget />
      </body>
    </html>
  );
}
