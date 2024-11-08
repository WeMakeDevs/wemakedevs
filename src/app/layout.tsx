import type { Metadata } from "next";
import { Space_Grotesk as FontMono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import Banner from "@/components/Banner";
import { Button } from "@/components/ui/button";

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontSans = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../assets/fonts/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "WeMakeDevs",
  description:
    "WeMakeDevs is an inclusive global community for anyone passionate about technology. We foster collaboration and innovation through global events.",
  metadataBase: new URL("https://wemakedevs.org"),
  openGraph: {
    title: "WeMakeDevs",
    description:
      "WeMakeDevs is an inclusive global community for anyone passionate about technology. We foster collaboration and innovation through global events.",
    url: "https://wemakedevs.org",
    siteName: "WeMakeDevs",
    images: {
      url: "/opengraph-image.png",
      width: 1920,
      height: 960,
      alt: "Hackathons for everyone",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
