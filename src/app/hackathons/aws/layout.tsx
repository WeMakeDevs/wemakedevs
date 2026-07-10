import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles.css";

export const metadata: Metadata = {
	title: "AWS Next Gen Hacks 2026 · WeMakeDevs",
	description:
		"AWS Next Gen Hacks 2026. Six hybrid hackathons across India with a $100,000+ prize pool. Build with AWS and win a sponsored trip to Las Vegas. In partnership with WeMakeDevs.",
};

export default function AwsLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="aws-root relative min-h-screen font-body antialiased">
			{/* Fonts for the AWS Builder Center look */}
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="anonymous"
			/>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
			/>
			{/* Apply saved theme before paint to avoid flash */}
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: tiny theme bootstrap */}
			<script
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{
					__html:
						"try{if(localStorage.getItem('aws-theme')==='light')document.documentElement.classList.add('light')}catch(e){}",
				}}
			/>
			<div className="aura" aria-hidden="true" />
			<div className="relative z-10">
				<Navbar />
				{children}
				<Footer />
			</div>
		</div>
	);
}
