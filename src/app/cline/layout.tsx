import type { Metadata } from "next";

const title = "Cline × WeMakeDevs | Hackathon Proposal";
const description =
	"Put Cline in front of 5,000+ builders. Online hackathon with 3,000+ Cline platform signups, builder blogs, social buzz, and a livestream to 1.6M+ across Kunal's channels. Fully managed by WeMakeDevs.";

export const metadata: Metadata = {
	metadataBase: new URL("https://wemakedevs.org"),
	title,
	description,
	openGraph: {
		title,
		description,
		url: "https://wemakedevs.org/cline",
		siteName: "WeMakeDevs",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
	},
};

export default function ClineLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return children;
}
