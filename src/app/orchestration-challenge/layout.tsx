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
		url: "https://wemakedevs.org/orchestration-challenge",
	},
};

const navLinks: navLinksType = [
	{
		name: "About",
		url: "/orchestration-challenge#about",
		type: "link",
	},
	{
		name: "Prizes",
		url: "/orchestration-challenge#prizes",
		type: "link",
	},
	{
		name: "How to Win",
		url: "/orchestration-challenge#quest-steps",
		type: "link",
	},
	{
		name: "FAQ",
		url: "/orchestration-challenge#faq",
		type: "link",
	},
	{
		name: "Start the Quest",
		url: "https://academy.kestra.io/kestra-fundamentals",
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
