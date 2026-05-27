import HackathonFooter from "@/components/HackathonFooter";
import HackathonNavbar from "@/components/HackathonNavbar";
import type { navLinksType } from "@/types";
import type { Metadata } from "next";
import PirateBackground from "./components/PirateBackground";
import SubmissionBanner from "./components/SubmissionBanner";
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
			url: `/hackathons/${DATA.slug}/opengraph-image.png`,
			width: 1200,
			height: 630,
			alt: `${DATA.title} - WeMakeDevs Hackathon`,
		},
	},
	twitter: {
		card: "summary_large_image",
		title: `${DATA.title} | WeMakeDevs`,
		description: DATA.descriptionCard,
		images: [`/hackathons/${DATA.slug}/opengraph-image.png`],
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
			name: "Tracks",
			url: `/hackathons/${DATA.slug}#tracks`,
			type: "link",
		},
		{
			name: "Prizes",
			url: `/hackathons/${DATA.slug}#prizes`,
			type: "link",
		},
		{
			name: "Sponsor",
			url: `/hackathons/${DATA.slug}#sponsor`,
			type: "link",
		},
		{
			name: "FAQs",
			url: `/hackathons/${DATA.slug}#faq`,
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
		<div className="coral-hackathon bg-[#002b36] text-[#fdf6e3] min-h-screen relative">
			<PirateBackground />
			<div className="relative z-10">
				<HackathonNavbar customNavLinks={hackathonNavLinks} />
				{children}
				<HackathonFooter />
			</div>
			<SubmissionBanner />
		</div>
	);
}
