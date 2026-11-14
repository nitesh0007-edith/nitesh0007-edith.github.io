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
  title: "Nitesh Ranjan Singh | Data Engineer & PhD Applicant",
  description:
    "I’m Nitesh, a data engineer in Glasgow seeking engineering roles and a funded PhD. My work spans data platforms, information retrieval and LLM evaluation. I also teach on Nitesh Explains AI.",
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
    "PhD Applicant",
    "LLM Evaluation",
    "Information Retrieval",
  ],
  authors: [{ name: "Nitesh Ranjan Singh" }],
  openGraph: {
    title: "Nitesh Ranjan Singh | Data Engineer & PhD Applicant",
    description:
      "Data engineer in Glasgow, open to work and seeking a funded PhD. Selected engineering projects, LLM evaluation pilots and lessons from Nitesh Explains AI.",
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
