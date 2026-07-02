import type { Metadata } from "next";
import { Bangers, Comic_Neue, Courier_Prime } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
  display: "swap",
});

const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  variable: "--font-comic-neue",
  subsets: ["latin"],
  display: "swap",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  variable: "--font-courier-prime",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nitesh Ranjan Singh | Data & AI Engineer",
  description:
    "Data Engineer & AI Engineer — production data platforms and GenAI systems. 3+ years at IQVIA and Axtria building pharma analytics platforms; MSc Data Science at the University of Glasgow. Explore my comic-style portfolio.",
  keywords: [
    "Data Engineering",
    "GenAI",
    "Azure",
    "Databricks",
    "PySpark",
    "RAG",
    "LLM Fine-Tuning",
    "MCP",
    "Machine Learning",
  ],
  authors: [{ name: "Nitesh Ranjan Singh" }],
  openGraph: {
    title: "Nitesh Ranjan Singh | Data & AI Engineer",
    description:
      "Production data platforms and GenAI systems — from 10M-record pipelines for global pharma to fine-tuned LLMs served at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${bangers.variable} ${comicNeue.variable} ${courierPrime.variable} antialiased`}
      >
        <Navbar />
        <main className="relative flex min-h-screen flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
