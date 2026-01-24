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
			name: "Sponsors",
			url: `/hackathons/${DATA.slug}#sponsors`,
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
			name: "Partner with us",
			url: "https://www.wemakedevs.org/#partners",
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
