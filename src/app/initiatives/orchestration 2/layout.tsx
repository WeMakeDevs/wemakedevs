import HackathonFooter from "@/components/HackathonFooter";
import HackathonNavbar from "@/components/HackathonNavbar";
import type { navLinksType } from "@/types";
import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
	title: "The Kestra Orchestration Challenge | WeMakeDevs",
	description:
		"Master the art of automation, get certified, and claim legendary loot. Complete the Kestra Fundamentals course, earn your certification, and win MacBooks, iPads, iPhones, and more!",
	openGraph: {
		title: "The Kestra Orchestration Challenge | WeMakeDevs",
		description:
			"Master the art of automation, get certified, and claim legendary loot. Complete the Kestra Fundamentals course, earn your certification, and win MacBooks, iPads, iPhones, and more!",
		url: "https://wemakedevs.org/initiatives/orchestration",
		images: {
			url: "/initiatives/orchestration/opengraph-image.png",
			width: 1200,
			height: 630,
			alt: "The Kestra Orchestration Challenge - Win prizes worth $4,000",
		},
	},
	twitter: {
		card: "summary_large_image",
		title: "The Kestra Orchestration Challenge | WeMakeDevs",
		description:
			"Learn workflow orchestration, earn an official Kestra certification, and win a MacBook, iPad, iPhone & more worth $4,000.",
		images: ["/initiatives/orchestration/opengraph-image.png"],
	},
};

const navLinks: navLinksType = [
	{
		name: "About",
		url: "/initiatives/orchestration#about",
		type: "link",
	},
	{
		name: "Prizes",
		url: "/initiatives/orchestration#prizes",
		type: "link",
	},
	{
		name: "How to Win",
		url: "/initiatives/orchestration#quest-steps",
		type: "link",
	},
	{
		name: "FAQ",
		url: "/initiatives/orchestration#faq",
		type: "link",
	},
	{
		name: "Register",
		url: "https://forms.gle/veQSZHHVG49firuj9",
		type: "button",
		openInNewTab: true,
	},
];

export default function OrchestrationChallengeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="orchestration-challenge grid-bg bg-[#0a0a1a] text-slate-100 min-h-screen relative">
			<div className="relative z-10">
				<HackathonNavbar customNavLinks={navLinks} />
				{children}
				<HackathonFooter />
			</div>
		</div>
	);
}
