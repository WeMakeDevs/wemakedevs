import HackathonFooter from "@/components/HackathonFooter";
import HackathonNavbar from "@/components/HackathonNavbar";
import type { navLinksType } from "@/types";
import type { Metadata } from "next";
import SignozBackground from "./components/SignozBackground";
import { DATA } from "./data";
import "./styles.css";

export const metadata: Metadata = {
	title: `${DATA.title} | WeMakeDevs`,
	description: DATA.description,
	openGraph: {
		title: `${DATA.title} | WeMakeDevs`,
		description: DATA.description,
		url: `https://wemakedevs.org/hackathons/${DATA.slug}`,
		images: {
			url: `/hackathons/${DATA.slug}/opengraph-image`,
			width: 1200,
			height: 630,
			alt: `${DATA.title} - WeMakeDevs Hackathon`,
		},
	},
	twitter: {
		card: "summary_large_image",
		title: `${DATA.title} | WeMakeDevs`,
		description: DATA.descriptionCard,
		images: [`/hackathons/${DATA.slug}/opengraph-image`],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const hackathonNavLinks: navLinksType = [
		{
			name: "About",
			url: `/hackathons/${DATA.slug}#about`,
			type: "link",
		},
		{
			name: "Prizes",
			url: `/hackathons/${DATA.slug}#prizes`,
			type: "link",
		},
		{
			name: "The Problem",
			url: `/hackathons/${DATA.slug}#why`,
			type: "link",
		},
		{
			name: "Sponsor",
			url: `/hackathons/${DATA.slug}#sponsor`,
			type: "link",
		},
		{
			name: "Tracks",
			url: `/hackathons/${DATA.slug}#projects`,
			type: "link",
		},
		{
			name: "Register",
			url: DATA.cta.href,
			type: "button",
			openInNewTab: true,
		},
	];

	return (
		<div className="signoz-hackathon bg-[#0b0c0e] text-[#e5e7eb] min-h-screen relative">
			<SignozBackground />
			<div className="relative z-10">
				<HackathonNavbar customNavLinks={hackathonNavLinks} />
				{children}
				<div className="border-t border-[#3c4152]/60 bg-[#0e1014]">
					<div className="max-w-4xl mx-auto px-6 py-6 text-center">
						<p className="text-xs leading-relaxed text-[#62687c]">
							Disclaimer: &ldquo;Agents of SigNoz&rdquo; is an
							independent developer hackathon run by WeMakeDevs in
							partnership with SigNoz. The &ldquo;Men in
							Black&rdquo; aesthetic is used purely for fun and is
							not affiliated with, endorsed by, or associated with
							the &ldquo;Men in Black&rdquo; films, Sony Pictures,
							or any of their rights holders.
						</p>
					</div>
				</div>
				<HackathonFooter />
			</div>
		</div>
	);
}
