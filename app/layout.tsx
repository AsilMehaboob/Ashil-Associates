import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashil & Associates",
  description:
    "Ashil & Associates delivers world-class accounting and advisory services with a focus on precision and professional integrity across India and the GCC.",
  keywords: [
    "Chartered Accountants",
    "Audit",
    "Taxation",
    "Advisory",
    "GCC VAT",
    "Corporate Tax",
    "Virtual CFO",
    "India",
    "UAE",
    "Financial Services",
    "Bookkeeping",
  ],
  icons: {
    icon: "/logo-transparent.png",
    shortcut: "/logo-transparent.png",
    apple: "/logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="antialiased scroll-smooth">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
