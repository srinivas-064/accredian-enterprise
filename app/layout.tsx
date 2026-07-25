import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-Gen Corporate Training & Upskilling",
  description:
    "Cultivate high-performance teams through expert-led learning programs. Bridge skill gaps, accelerate innovation, and drive measurable business impact with Accredian Enterprise.",
  keywords: [
    "corporate training",
    "enterprise learning",
    "upskilling",
    "AI training",
    "leadership development",
    "data science",
    "digital transformation",
  ],
  openGraph: {
    title: "Accredian Enterprise | Next-Gen Corporate Training",
    description:
      "Cultivate high-performance teams through expert-led learning programs.",
    type: "website",
    url: "https://enterprise.accredian.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
