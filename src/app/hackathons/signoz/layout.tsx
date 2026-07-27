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
			url: `/hackathons/${DATA.slug}/opengraph-image.jpg`,
			width: 1200,
			height: 630,
			alt: `${DATA.title} - AI Observability Conference by WeMakeDevs`,
		},
	},
	twitter: {
		card: "summary_large_image",
		title: `${DATA.title} | WeMakeDevs`,
		description: DATA.descriptionCard,
		images: [`/hackathons/${DATA.slug}/opengraph-image.jpg`],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const hackathonNavLinks: navLinksType = [
		{
			name: "Overview",
			url: `/hackathons/${DATA.slug}#overview`,
			type: "link",
		},
		{
			name: "Speakers",
			url: `/hackathons/${DATA.slug}#speakers`,
			type: "link",
		},
		{
			name: "Agenda",
			url: `/hackathons/${DATA.slug}#agenda`,
			type: "link",
		},
		{
			name: "Venue",
			url: `/hackathons/${DATA.slug}#venue`,
			type: "link",
		},
		{
			name: "Sponsors",
			url: `/hackathons/${DATA.slug}#sponsors`,
			type: "link",
		},
		{
			name: DATA.cta.label,
			url: `/hackathons/${DATA.slug}${DATA.cta.href}`,
			type: "button",
		},
	];

	return (
		<div className="signoz-hackathon bg-[#08090b] text-[#e5e7eb] min-h-screen relative">
			<SignozBackground />
			<div className="relative z-10">
				<HackathonNavbar customNavLinks={hackathonNavLinks} />
				{children}
				<div className="border-t border-[#3c4152]/60 bg-[#0a0b0e]">
					<div className="max-w-4xl mx-auto px-6 py-6 text-center">
						<p className="text-xs leading-relaxed text-[#62687c]">
							Agents of SigNoz Edition 2 is an independent
							developer conference and hackathon run by WeMakeDevs
							in partnership with SigNoz, hosted at The Web Data
							Loft by Bright Data.
						</p>
					</div>
				</div>
				<HackathonFooter />
			</div>
		</div>
	);
}
