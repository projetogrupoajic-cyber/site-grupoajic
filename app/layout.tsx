import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo AJIC | Assessoria Jurídica, Imobiliária e Contábil",
  description:
    "Grupo AJIC oferece soluções jurídicas, imobiliárias e contábeis com atendimento personalizado e painel administrativo integrado.",
  openGraph: {
    title: "Grupo AJIC",
    description:
      "Grupo AJIC oferece soluções jurídicas, imobiliárias e contábeis com atendimento personalizado.",
    type: "website",
    url: "https://grupo-ajic.vercel.app",
    siteName: "Grupo AJIC",
  },
  metadataBase: new URL("https://grupo-ajic.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
