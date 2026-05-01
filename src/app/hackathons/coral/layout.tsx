import HackathonFooter from "@/components/HackathonFooter";
import HackathonNavbar from "@/components/HackathonNavbar";
import type { navLinksType } from "@/types";
import PirateBackground from "./components/PirateBackground";
import { DATA } from "./data";
import "./styles.css";

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
		</div>
	);
}
