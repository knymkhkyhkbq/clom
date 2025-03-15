import type { Metadata } from "next";
import { Inter, Open_Sans, Bree_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"]
});
const breeSerif = Bree_Serif({
  subsets: ["latin"],
  variable: "--font-bree-serif",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Conectate.com.do | Loterías, Turismo y Noticias Dominicanas",
  description: "Resultados de Leidsa, Lotería Nacional, Lotería Real y Loteka; eventos, encuestas, precios de combustibles y guía turística de la República Dominicana.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${openSans.variable} ${breeSerif.variable} font-sans bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
