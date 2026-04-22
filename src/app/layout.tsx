import type { Metadata } from "next";
import "./globals.css";

import Header from "@/layout/header/Header";
import Footer from "@/layout/Footer/Footer";


export const metadata: Metadata = {
  title: "NextSolve | Desenvolvimento de Sistemas e Soluções Tecnológicas",

  description:
    "A NextSolve é uma empresa de tecnologia especializada no desenvolvimento de sistemas sob medida e soluções digitais para empresas que buscam crescer com inovação.",

  keywords: [
    "desenvolvimento de sistemas",
    "empresa de tecnologia",
    "software sob medida",
    "soluções digitais",
    "desenvolvimento web",
    "automação empresarial"
  ],

  authors: [{ name: "NextSolve" }],

  icons: {
    icon: "/logo.png",
  },

  openGraph: {
    title: "NextSolve | Soluções Tecnológicas",
    description:
      "Desenvolvemos sistemas personalizados e soluções digitais para empresas.",
    url: "https://nextsolve.com.br",
    siteName: "NextSolve",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
}; G

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={``}>
      <Header />
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer />
    </html>
  );
}
