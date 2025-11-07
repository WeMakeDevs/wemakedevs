import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "The Multilingual Hackathon",
	prize: "₹50,000+",
	startDate: "2025-11-13T08:00:00+05:30",
	endDate: "2025-11-16T23:59:59+05:30",
	description: "Build anything. Translate everything. Powered by Lingo.",
	descriptionCard: "Build anything. Translate everything. Powered by Lingo.",
	slug: "lingohack25",
	images,
	cta: {
		label: "Register Now",
		href: "https://forms.gle/znDG8FR5FJRdWHcz7",
		openInNewTab: true,
		disabled: false,
	},
	prizes: {
		winning: [
			{
				name: "Top 3 Winners",
				prize: "₹50,000 + Lingo credits + exclusive swag",
			},
		],
		giveaway: [
			{
				name: "Community Rewards",
				prize: "Top 10 posts win Lingo credits + swag bundles",
				details: {
					requirements: [
						"Star the repo and post about participation tagging Lingo",
					],
					links: {
						github: "https://github.com/lingodotdev/lingo.dev",
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
	{
		href: `/hackathons/${DATA.slug}/schedule`,
		label: "Schedule",
		page: "schedule",
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
		answer: "Yes, At WeMakeDevs we believe in the “learn by doing” approach!",
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

const schedule = [
	{
		date: "2025-11-13T00:00:00+05:30",
		items: [
			{
				title: "Hacking starts",
				time: "2025-11-13T08:00:00+05:30",
			},
			{
				title: "Live stream - Getting Started with Lingo",
				time: "2025-11-13T20:00:00+05:30",
			},
		],
	},
	{
		date: "2025-11-14T00:00:00+05:30",
		items: [
			{
				title: "Resume review session",
				time: "2025-11-14T20:00:00+05:30",
				description:
					"Get personalized feedback on your resume from industry experts. Learn how to highlight your skills and stand out to recruiters.",
				link: {
					name: "Discord",
					url: "https://discord.gg/lingodotdev?event=1436217312741953617",
				},
			},
		],
	},
	{
		date: "2025-11-16T00:00:00+05:30",
		items: [
			{
				title: "Hacking ends",
				time: "2025-11-16T20:00:00+05:30",
			},
			{
				title: "Submissions due",
				time: "2025-11-16T23:00:00+05:30",
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
