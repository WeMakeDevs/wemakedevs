import HackathonFooter from "@/components/HackathonFooter";
import HackathonNavbar from "@/components/HackathonNavbar";
import type { navLinksType } from "@/types";
import type { Metadata } from "next";
import VegasBackground from "./components/VegasBackground";
import { DATA } from "./data";
import "./styles.css";
export const metadata: Metadata = {
	title: `${DATA.title} | WeMakeDevs`,
	description: DATA.description,
	openGraph: {
		title: `${DATA.title} | WeMakeDevs`,
		description: DATA.description,
		url: `https://wemakedevs.org/hackathons/${DATA.slug}`,
	},
	twitter: {
		card: "summary_large_image",
		title: `${DATA.title} | WeMakeDevs`,
		description: DATA.descriptionCard,
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
			name: "Sponsor",
			url: `/hackathons/${DATA.slug}#sponsor`,
			type: "link",
		},
		{
			name: "Hackathons",
			url: "https://www.wemakedevs.org/hackathons",
			type: "link",
			openInNewTab: true,
		},
		{
			name: "Partner with us",
			url: "https://www.wemakedevs.org/#partners",
			type: "button",
			openInNewTab: true,
		},
	];

	return (
		<div className="cognee-hackathon bg-[#f7ead0] text-[#4a3624] min-h-screen relative">
			<VegasBackground />
			<div className="relative z-10">
				<HackathonNavbar customNavLinks={hackathonNavLinks} />
				{children}
				<HackathonFooter />
			</div>
		</div>
	);
}
