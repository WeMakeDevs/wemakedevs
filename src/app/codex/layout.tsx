import type { Metadata } from "next";

const title = "Codex × WeMakeDevs | Collaboration Proposal";
const description =
	"Put Codex in the hands of India's 200,000+ builders. Hands-on demos on Kunal's channels (1.6M+ reach) plus a flagship hybrid hackathon in India with 5,000+ guaranteed participants.";

export const metadata: Metadata = {
	metadataBase: new URL("https://wemakedevs.org"),
	title,
	description,
	openGraph: {
		title,
		description,
		url: "https://wemakedevs.org/codex",
		siteName: "WeMakeDevs",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
	},
};

export default function CodexLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return children;
}
