import HackathonFooter from "@/components/HackathonFooter";
import type { navLinksType } from "@/types";
import PrimaryNavbar from "./components/navbars/PrimaryNavbar";
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
		<div className="bg-white min-h-screen">
			<PrimaryNavbar customNavLinks={hackathonNavLinks} />
			{children}
			<HackathonFooter />
		</div>
	);
}
