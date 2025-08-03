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
  description: "AI Software Engineer spécialisé dans le développement d'applications IA, la blockchain et les architectures modernes. Expert en LLMs, NLP, DeFi et développement full-stack.",
  keywords: ["AI Software Engineer", "LLMs", "NLP", "Blockchain", "DeFi", "React", "Node.js", "Solidity", "Freelance"],
  authors: [{ name: "Gauthier Compan" }],
  creator: "Gauthier Compan",
  openGraph: {
    title: "Gauthier Compan - AI Software Engineer",
    description: "AI Software Engineer spécialisé dans le développement d'applications IA, la blockchain et les architectures modernes.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gauthier Compan - AI Software Engineer",
    description: "AI Software Engineer spécialisé dans le développement d'applications IA, la blockchain et les architectures modernes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
