import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
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
  metadataBase: new URL("https://www.ashilandassociates.com"),
  title: {
    default: "Ashil & Associates | Chartered Accountants & Business Advisors",
    template: "%s | Ashil & Associates",
  },
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
    "Business Consulting",
  ],
  authors: [{ name: "Ashil & Associates" }],
  creator: "Ashil & Associates",
  publisher: "Ashil & Associates",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ashil & Associates | Chartered Accountants & Business Advisors",
    description:
      "Ashil & Associates delivers world-class accounting and advisory services with a focus on precision and professional integrity across India and the GCC.",
    url: "https://www.ashilandassociates.com",
    siteName: "Ashil & Associates",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Ashil & Associates Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashil & Associates",
    description:
      "Ashil & Associates delivers world-class accounting and advisory services with a focus on precision and professional integrity across India and the GCC.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
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
        <JsonLd />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
