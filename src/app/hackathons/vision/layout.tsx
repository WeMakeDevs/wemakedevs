import HackathonFooter from "@/components/HackathonFooter";
import HackathonNavbar from "@/components/HackathonNavbar";
import type { navLinksType } from "@/types";
import MissionBackground from "./components/MissionBackground";
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
			url: `/hackathons/vision/#about`,
			type: "link",
		},
		{
			name: "Prizes",
			url: `/hackathons/vision#prizes`,
			type: "link",
		},
		{
			name: "Sponsor",
			url: `/hackathons/vision#sponsor`,
			type: "link",
		},
		{
			name: "Judging",
			url: `/hackathons/vision#judging`,
			type: "link",
		},
		{
			name: "FAQ",
			url: `/hackathons/vision#faq`,
			type: "link",
		},
		{
			name: DATA.cta.label,
			url: DATA.cta.href,
			type: "button",
		},
	];

	return (
		<div className="vision-hackathon bg-slate-950 text-slate-100 min-h-screen relative">
			{/* Mission Impossible inspired background */}
			<MissionBackground />

			{/* Main content */}
			<div className="relative z-10">
				<HackathonNavbar customNavLinks={hackathonNavLinks} />
				{children}
				<HackathonFooter />
			</div>
		</div>
	);
}
