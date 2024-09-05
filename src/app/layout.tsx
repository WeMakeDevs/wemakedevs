import type { Metadata } from "next";
import { Space_Grotesk as FontMono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono'
})

const fontSans = localFont({
  src: [
    {
      path: '../assets/fonts/Satoshi-Variable.woff2',
      weight: '300 900',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Satoshi-VariableItalic.woff2',
      weight: '300 900',
      style: 'italic'
    }
  ],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: "WeMakeDevs | The home for hackers",
  description: "WeMakeDevs website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-body antialiased', fontSans.variable, fontMono.variable)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
