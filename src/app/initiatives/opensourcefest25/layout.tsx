import HackathonFooter from "@/components/HackathonFooter";
import HackathonNavbar from "@/components/HackathonNavbar";
import type { navLinksType } from "@/types";
import { DATA } from "./data";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const hackathonNavLinks: navLinksType = [
		{
			name: "About",
			url: `/initiatives/${DATA.slug}/#about`,
			type: "link",
		},
		{
			name: "Prizes",
			url: `/initiatives/${DATA.slug}#prizes`,
			type: "link",
		},
		{
			name: "Timeline",
			url: `/initiatives/${DATA.slug}#timeline`,
			type: "link",
		},
		{
			name: "Tips",
			url: `/initiatives/${DATA.slug}#tips`,
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
		<div className="bg-white">
			<HackathonNavbar customNavLinks={hackathonNavLinks} />
			{children}
			<HackathonFooter />
		</div>
	);
}
