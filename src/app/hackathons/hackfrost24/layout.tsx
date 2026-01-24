import HackathonFooter from "@/components/HackathonFooter";
import HackathonNavbar from "@/components/HackathonNavbar";
import type { navLinksType } from "@/types";
import DATA from "./data";

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
			name: "FAQ",
			url: `/hackathons/${DATA.slug}#faq`,
			type: "link",
		},
		{
			name: "Partner with us",
			url: "https://www.wemakedevs.org/#partners",
			type: "link",
		},
		{
			name: DATA.hackathonCtas.nav.label,
			url: DATA.hackathonCtas.nav.href,
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
