import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "Backend Reloaded",
	prize: "$3,000+ + swag + Google Summer of Code mentorship",
	// TODO: Update dates when available - format: "YYYY-MM-DDTHH:mm:ss+05:30" (IST)
	// Example: "2025-12-20T08:00:00+05:30"
	startDate: "2025-12-20T08:00:00+05:30", // Placeholder - update when dates are confirmed
	endDate: "2025-12-25T20:00:00+05:30", // Placeholder - update when dates are confirmed
	showDate: false, // Set to true when dates are confirmed
	// Short description for header (1-2 sentences, no em dashes)
	description:
		"Build the next generation of backends with Motia's unified runtime. Join Backend Reloaded Hackathon to showcase your creativity and win exciting prizes.",
	// Description for card on home page
	descriptionCard:
		"Build the next generation of backends with Motia's unified runtime.",
	slug: "motiahack25",
	images,
	cta: {
		label: "Registrations Starting Soon",
		href: "#",
		openInNewTab: false,
		disabled: true,
	},
	prizes: {
		winning: [
			{
				name: "1st Prize",
				prize: "$1,500 + swag + Google Summer of Code mentorship",
			},
			{
				name: "2nd Prize",
				prize: "$1,000 + swag + Google Summer of Code mentorship",
			},
			{
				name: "3rd Prize",
				prize: "$500 + swag + Google Summer of Code mentorship",
			},
		],
		giveaway: [
			{
				name: "Community Rewards",
				prize: "Top 10 posts win Motia credits and swag bundles",
				details: {
					requirements: [
						"Star the Motia repository on GitHub and share your participation on social media (don't forget to tag Motia)",
					],
					links: {
						github: "https://git.new/kunal-motia",
						motia: "https://motia.dev",
					},
				},
			},
		],
	},
};

const navLinks = [
	{
		href: `/hackathons/${DATA.slug}`,
		label: "Overview",
		page: "overview",
	},
	{
		href: `/hackathons/${DATA.slug}/rules`,
		label: "Rules",
		page: "rules",
	},
	{
		href: `/hackathons/${DATA.slug}/resources`,
		label: "Resources",
		page: "resources",
	},
];

const faqs: FaqType[] = [
	{
		question: "Eligibility criteria to participate in this hackathon?",
		answer: "You should be above 16 years of age and should abide by the rule of WeMakeDevs hackathons. Teams can have anywhere from 1 to 4 people in them.",
	},
	{
		question: "Can I use existing or previously made projects?",
		answer: "No, you have to start making the project only after the hackathon starts.",
	},
	{
		question: "How can I submit my project?",
		answer: "Join our discord server for all the updates and announcements regarding the hackathon.",
	},
	{
		question: "I am a beginner in tech, can I still participate?",
		answer: 'Yes, At WeMakeDevs we believe in the "learn by doing" approach!',
	},
	{
		question: "Are we allowed to take help of AI tools like ChatGPT?",
		answer: "If you use ChatGPT or other AI tools, make sure to declare this when submitting your project. Failing to do so will result in your disqualification.",
	},
	{
		question: "Where can I connect for other queries?",
		answer: "For any hackathon related queries, please raise a ticket on our Discord server.",
	},
];

export { DATA, navLinks, faqs };
