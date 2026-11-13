import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";
import dynamic from "next/dynamic";
import { CustomCursorLoader } from "@/components/ui/CustomCursorLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.role} | Android & App Development`,
  description: portfolio.hero.description,
};

const AIChatbot = dynamic(() => import("@/components/ui/AIChatbot"));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-background selection:bg-primary/30">
        <CustomCursorLoader />
        {children}
        <AIChatbot />
      </body>
    </html>
  );
}
