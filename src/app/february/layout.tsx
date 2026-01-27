import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Hack All February | WeMakeDevs",
	description:
		"Join all 4 February hackathons to win a Samsung Galaxy Flip 7 worth ₹1,10,000! Over $40,000 in cash prizes, job interviews, and exclusive swag throughout the month.",
	keywords: [
		"hackathon",
		"WeMakeDevs",
		"Hack All February",
		"Samsung Galaxy Flip 7",
		"coding competition",
		"developer hackathon",
		"February hackathons",
	],
	openGraph: {
		title: "Hack All February | WeMakeDevs",
		description:
			"Join all 4 February hackathons to win a Samsung Galaxy Flip 7 worth ₹1,10,000! Over $40,000 in cash prizes.",
		type: "website",
		url: "https://wemakedevs.org/february",
	},
	twitter: {
		card: "summary_large_image",
		title: "Hack All February | WeMakeDevs",
		description:
			"Join all 4 February hackathons to win a Samsung Galaxy Flip 7 worth ₹1,10,000!",
	},
};

export default function FebruaryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
