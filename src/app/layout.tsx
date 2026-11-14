import type { Metadata } from "next";
import { Anton, Comic_Neue, Courier_Prime } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const displayFont = Anton({
  weight: "400",
  variable: "--font-anton",
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
  metadataBase: new URL("https://nitesh0007-edith.github.io"),
  title: "Nitesh Ranjan Singh | Data & AI Engineer",
  description:
    "Data & AI Engineer in Glasgow. Explore production data platforms, grounded AI systems, award-winning retrieval research and selected work by Nitesh Ranjan Singh.",
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
        className={`${displayFont.variable} ${comicNeue.variable} ${courierPrime.variable} antialiased`}
      >
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
