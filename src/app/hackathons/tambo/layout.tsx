import HackathonFooter from "@/components/HackathonFooter";
import HackathonNavbar from "@/components/HackathonNavbar";
import type { navLinksType } from "@/types";
import SpaceBackground from "./components/SpaceBackground";
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
		<div className="tambo-hackathon bg-slate-950 text-slate-100 min-h-screen relative">
			{/* Space background with stars, ships, and aliens */}
			<SpaceBackground />

			{/* Main content */}
			<div className="relative z-10">
				<HackathonNavbar customNavLinks={hackathonNavLinks} />
				{children}
				<HackathonFooter />
			</div>
		</div>
	);
}
