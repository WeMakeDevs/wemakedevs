import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "The UI Strikes Back",
	prize: "$6,000+",
	startDate: "2026-02-02T08:00:00+05:30",
	endDate: "2026-02-08T23:59:59+05:30",
	description:
		"Build generative UI applications with the power of Tambo. May the components be with you.",
	descriptionCard:
		"Build generative UI applications with the power of Tambo. May the components be with you.",
	slug: "tambo",
	images,
	cta: {
		label: "Register Now",
		href: "https://forms.gle/PG5jppKYjwky4BFUA",
		openInNewTab: true,
		disabled: false,
	},
	prizes: {
		winning: [
			{
				name: "Top 3 Winners",
				prize: "$6,000 + exclusive swag + job/intern interviews at Tambo",
			},
		],
		giveaway: [
			{
				name: "Community Rewards",
				prize: "Top 10 posts win swag bundles",
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
		answer: "Join the <a href='https://discord.gg/dJNvPEHth6' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Tambo Discord</a> for all the updates and announcements regarding the hackathon.",
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
		answer: "For any hackathon related queries, join the <a href='https://discord.gg/dJNvPEHth6' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Tambo Discord</a> for support.",
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
				title: "Live stream - Building Your First Generative UI Application",
				time: "2026-02-02T21:30:00+05:30",
				link: {
					name: "YouTube",
					url: "https://youtube.com/@wemakedevs",
				},
			},
		],
	},
	{
		date: "2026-01-22T00:00:00+05:30",
		items: [
			{
				title: "Tambo Thursday - Weekly Office Hours",
				description:
					"Join the Tambo team for weekly office hours. We're building an open-source React SDK for generative UI, where AI can render and interact with your React components through natural language.",
				time: "2026-01-22T23:30:00+05:30",
				link: {
					name: "Luma",
					url: "https://luma.com/1fljcus7",
				},
			},
		],
	},
	{
		date: "2026-02-08T00:00:00+05:30",
		items: [
			{
				title: "Hacking ends - Return of the Projects",
				time: "2026-02-08T20:00:00+05:30",
			},
			{
				title: "Submissions due",
				time: "2026-02-08T23:59:59+05:30",
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
