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
			name: "Ideas",
			url: `/hackathons/${DATA.slug}#ideas`,
			type: "link",
		},
		{
			name: "Prizes",
			url: `/hackathons/${DATA.slug}#prizes`,
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
		<div className="cognee-hackathon bg-[#f7ead0] text-[#4a3624] min-h-screen relative">
			<VegasBackground />
			<div className="relative z-10">
				<HackathonNavbar customNavLinks={hackathonNavLinks} />
				{children}
				<div className="border-t border-[#b07d12]/20 bg-[#f1dcb4]/50">
					<div className="max-w-4xl mx-auto px-6 py-6 text-center">
						<p className="text-xs leading-relaxed text-[#7c6244]">
							Disclaimer: &ldquo;The Hangover Part AI&rdquo; is an
							independent developer hackathon by WeMakeDevs and
							Cognee. It is not affiliated with, endorsed by, or
							associated with the &ldquo;The Hangover&rdquo;
							films, Warner Bros. Entertainment, or any of their
							rights holders. The theme is used purely for fun.
						</p>
					</div>
				</div>
				<HackathonFooter />
			</div>
		</div>
	);
}
