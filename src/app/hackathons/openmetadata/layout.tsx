import HackathonFooter from "@/components/HackathonFooter";
import HackathonNavbar from "@/components/HackathonNavbar";
import type { navLinksType } from "@/types";
import TimeWarpBackground from "./components/TimeWarpBackground";
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
			name: "Sponsor",
			url: `/hackathons/${DATA.slug}#sponsor`,
			type: "link",
		},
		{
			name: "Hackathons",
			url: "https://www.wemakedevs.org/hackathons",
			type: "link",
		},
		{
			name: "Partner with us",
			url: "https://www.wemakedevs.org/#partners",
			type: "button",
		},
	];

	return (
		<div className="openmetadata-hackathon bg-slate-950 text-slate-100 min-h-screen relative">
			<TimeWarpBackground />
			<div className="relative z-10">
				<HackathonNavbar customNavLinks={hackathonNavLinks} />
				{children}
				<HackathonFooter />
			</div>
		</div>
	);
}
