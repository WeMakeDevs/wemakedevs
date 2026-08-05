import type { Metadata } from "next";
import { Space_Grotesk as FontMono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

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
	// This app is served from the archive host, so it resolves its own relative
	// OG/canonical URLs against that host. Claiming wemakedevs.org here would
	// point every archived page's metadata at the live site instead.
	metadataBase: new URL("https://archive.wemakedevs.org"),
	openGraph: {
		title: "WeMakeDevs",
		description:
			"WeMakeDevs is an inclusive global community for anyone passionate about technology. We foster collaboration and innovation through global events.",
		url: "https://archive.wemakedevs.org",
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
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-body antialiased overflow-x-hidden",
					fontSans.variable,
					fontMono.variable,
				)}
			>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
