import HackathonFooter from "@/components/HackathonFooter";
import HackathonNavbar from "@/components/HackathonNavbar";
import type { navLinksType } from "@/types";
import RacingBackground from "./components/RacingBackground";
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
			url: `/hackathons/${DATA.slug}/#about`,
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
			name: "Judging",
			url: `/hackathons/${DATA.slug}#judging`,
			type: "link",
		},
		{
			name: "FAQ",
			url: `/hackathons/${DATA.slug}#faq`,
			type: "link",
		},
		{
			name: DATA.cta.label,
			url: DATA.cta.href,
			type: "button",
		},
	];

	return (
		<div className="fast2mcp-hackathon bg-slate-950 text-slate-100 min-h-screen relative">
			{/* Racing background with cars and speed elements */}
			<RacingBackground />

			{/* Main content */}
			<div className="relative z-10">
				<HackathonNavbar customNavLinks={hackathonNavLinks} />
				{children}
				<HackathonFooter />
			</div>
		</div>
	);
}
