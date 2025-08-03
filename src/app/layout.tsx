import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gauthier Compan - AI Software Engineer",
  description: "AI Software Engineer specialized in AI application development, blockchain, and modern architectures. Expert in LLMs, NLP, DeFi, and full-stack development.",
  keywords: ["AI Software Engineer", "LLMs", "NLP", "Blockchain", "DeFi", "React", "Node.js", "Solidity", "Freelance"],
  authors: [{ name: "Gauthier Compan" }],
  creator: "Gauthier Compan",
  openGraph: {
    title: "Gauthier Compan - AI Software Engineer",
    description: "AI Software Engineer specialized in AI application development, blockchain, and modern architectures.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gauthier Compan - AI Software Engineer",
    description: "AI Software Engineer specialized in AI application development, blockchain, and modern architectures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
