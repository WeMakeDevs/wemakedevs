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
			url: `/hackathons/${DATA.slug}/#about`,
			type: "link",
		},
		{
			name: "Prizes",
			url: `/hackathons/${DATA.slug}#prizes`,
			type: "link",
		},
		{
			name: "Timeline",
			url: `/hackathons/${DATA.slug}#timeline`,
			type: "link",
		},
		{
			name: "Tips",
			url: `/hackathons/${DATA.slug}#tips`,
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
		<div className="bg-white">
			<HackathonNavbar customNavLinks={hackathonNavLinks} />
			{children}
			<HackathonFooter />
		</div>
	);
}
