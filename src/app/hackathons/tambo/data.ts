import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "The UI Strikes Back",
	prize: "$6,000+",
	startDate: "2026-02-02T08:00:00+05:30",
	endDate: "2026-02-09T23:59:59+05:30",
	description:
		"Build generative UI applications with the power of Tambo. May the components be with you.",
	descriptionCard:
		"Build generative UI applications with the power of Tambo. May the components be with you.",
	slug: "tambo",
	images,
	cta: {
		label: "Register Now",
		href: "https://discord.gg/wemakedevs",
		openInNewTab: true,
		disabled: false,
	},
	prizes: {
		winning: [
			{
				name: "Top 3 Winners",
				prize: "$6,000 + Tambo credits + exclusive swag",
			},
		],
		giveaway: [
			{
				name: "Community Rewards",
				prize: "Top 10 posts win Tambo credits + swag bundles",
				details: {
					requirements: [
						"Star the repo and post about participation tagging Tambo",
					],
					links: {
						github: "https://github.com/tambo-ai/tambo",
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
		answer: "Yes, At WeMakeDevs we believe in the \"learn by doing\" approach!",
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
		date: "2026-02-02T00:00:00+05:30",
		items: [
			{
				title: "Hacking starts - The Force Awakens",
				time: "2026-02-02T08:00:00+05:30",
			},
			{
				title: "Discord office hours",
				time: "2026-02-02T20:00:00+05:30",
				link: {
					name: "Discord",
					url: "https://discord.gg/wemakedevs",
				},
			},
		],
	},
	{
		date: "2026-02-03T00:00:00+05:30",
		items: [
			{
				title: "Live stream - Getting Started with Tambo",
				time: "2026-02-03T19:00:00+05:30",
				link: {
					name: "YouTube",
					url: "https://youtube.com/@wemakedevs",
				},
			},
		],
	},
	{
		date: "2026-02-09T00:00:00+05:30",
		items: [
			{
				title: "Hacking ends - Return of the Projects",
				time: "2026-02-09T20:00:00+05:30",
			},
			{
				title: "Submissions due",
				time: "2026-02-09T23:59:59+05:30",
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
