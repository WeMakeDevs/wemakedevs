import HackathonFooter from "@/components/HackathonFooter";
import HackathonNavbar from "@/components/HackathonNavbar";
import type { navLinksType } from "@/types";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import VegasBackground from "./components/VegasBackground";
import { DATA } from "./data";
import "./styles.css";
export const metadata: Metadata = {
	title: `${DATA.title} | WeMakeDevs`,
	description: DATA.description,
	openGraph: {
		title: `${DATA.title} | WeMakeDevs`,
		description: DATA.description,
		url: `https://wemakedevs.org/hackathons/${DATA.slug}`,
		images: {
			url: `/hackathons/${DATA.slug}/opengraph-image.png`,
			width: 1200,
			height: 630,
			alt: `${DATA.title} - WeMakeDevs Hackathon`,
		},
	},
	twitter: {
		card: "summary_large_image",
		title: `${DATA.title} | WeMakeDevs`,
		description: DATA.descriptionCard,
		images: [`/hackathons/${DATA.slug}/opengraph-image.png`],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const hackathonNavLinks: navLinksType = [
		{
			name: "About",
			url: `/hackathons/${DATA.slug}#about`,
			type: "link",
		},
		{
			name: "Prizes",
			url: `/hackathons/${DATA.slug}#prizes`,
			type: "link",
		},
		{
			name: "The Problem",
			url: `/hackathons/${DATA.slug}#why`,
			type: "link",
		},
		{
			name: "Sponsor",
			url: `/hackathons/${DATA.slug}#sponsor`,
			type: "link",
		},
		{
			name: "Ideas",
			url: `/hackathons/${DATA.slug}#ideas`,
			type: "link",
		},
		...(DATA.submissionsClosed
			? []
			: [
					{
						name: "Submit Project",
						url: DATA.submissionFormUrl,
						type: "button" as const,
						openInNewTab: true,
					},
				]),
	];

	return (
		<div className="cognee-hackathon bg-[#f7ead0] text-[#4a3624] min-h-screen relative">
			<VegasBackground />
			<div className="relative z-10">
				<HackathonNavbar customNavLinks={hackathonNavLinks} />
				{children}

				{/* ── Submit your projects banner ── */}
				<div className="bg-gradient-to-r from-[#e23b2d] to-[#c33124] border-y-2 border-[#f6c453]">
					<div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
						<div>
							<h3 className="text-2xl md:text-3xl font-black italic uppercase text-white">
								{DATA.submissionsClosed
									? "Submissions Are Closed"
									: "Submit Your Projects Now"}
							</h3>
							<p className="text-[#ffe6c7] font-medium mt-1">
								{DATA.submissionsClosed
									? "The submission deadline has passed. Thanks to everyone who took part!"
									: "Built something unforgettable? Send it in before the deadline."}
							</p>
						</div>
						{DATA.submissionsClosed ? (
							<div
								aria-disabled="true"
								className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#fffdf6]/60 text-[#c33124]/70 font-black text-lg cursor-not-allowed opacity-75 shadow-lg border-2 border-[#f6c453]"
							>
								Submissions Closed
							</div>
						) : (
							<Link
								href={DATA.submissionFormUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#fffdf6] text-[#c33124] font-black text-lg hover:bg-[#fff1d6] transition-colors shadow-lg border-2 border-[#f6c453]"
							>
								Submit Project
								<ArrowUpRight className="w-5 h-5" />
							</Link>
						)}
					</div>
				</div>

				<div className="border-t border-[#b07d12]/20 bg-[#f1dcb4]/50">
					<div className="max-w-4xl mx-auto px-6 py-6 text-center">
						<p className="text-xs leading-relaxed text-[#7c6244]">
							Disclaimer: &ldquo;The Hangover Part AI&rdquo; is an
							independent developer hackathon run by WeMakeDevs.
							It is not affiliated with, endorsed by, or
							associated with the &ldquo;The Hangover&rdquo;
							films, Warner Bros. Entertainment, or any of their
							rights holders. The theme is used purely for fun.
						</p>
					</div>
				</div>
				<HackathonFooter />
			</div>
		</div>
	);
}
