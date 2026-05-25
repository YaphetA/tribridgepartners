import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tribridge — Smart Outsourcing. Real Results.",
  description:
    "Tribridge is a global BPO and remote operations firm helping businesses of all sizes scale with expertly trained, dedicated remote teams. Proposal delivered within 48 hours.",
  keywords: [
    "BPO",
    "business process outsourcing",
    "remote teams",
    "virtual admin",
    "legal admin",
    "customer support",
    "back office",
    "Ethiopia in-country support",
    "Tribridge",
  ],
  openGraph: {
    title: "Tribridge — Smart Outsourcing. Real Results.",
    description:
      "Scale your business with expertly trained, dedicated remote teams — serving clients globally.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
