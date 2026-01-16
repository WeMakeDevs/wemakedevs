import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "Backend Reloaded",
	prize: "$3,000+ + swag + Google Summer of Code mentorship",
	startDate: "2025-12-15T08:00:00+05:30",
	endDate: "2025-12-21T20:00:00+05:30",
	showDate: true,
	description:
		"Build production-grade backends with a single primitive. APIs, background jobs, workflows, queues, and AI agents - unified in one system with built-in State management and Observability.",
	descriptionCard:
		"Build the next generation of backends with Motia's unified runtime.",
	slug: "motiahack25",
	images,
	cta: {
		label: "Projects",
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
	{
		href: `/hackathons/${DATA.slug}/schedule`,
		label: "Schedule",
		page: "schedule",
	},
];

const faqs: FaqType[] = [
	{
		question: "Eligibility criteria to participate in this hackathon?",
		answer: "You should be 18 years of age or older (or have reached the age of majority in your country) and should abide by the rules of WeMakeDevs hackathons. Teams can have anywhere from 1 to 4 people in them.",
	},
	{
		question: "Can I use existing or previously made projects?",
		answer: "No, you have to start making the project only after the hackathon starts.",
	},
	{
		question: "How can I submit my project?",
		answer: "Join our <a href='https://discord.com/invite/motia' target='_blank' rel='noopener noreferrer' class='text-green-400 underline hover:no-underline'>Discord</a> server for all the updates and announcements regarding the hackathon.",
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
		answer: "For any hackathon related queries, please raise a ticket on our <a href='https://discord.com/invite/motia' target='_blank' rel='noopener noreferrer' class='text-green-400 underline hover:no-underline'>Discord</a> server.",
	},
];

const schedule = [
	{
		date: "2025-12-15T00:00:00+05:30",
		items: [
			{
				title: "Hackathon starts",
				time: "2025-12-15T08:00:00+05:30",
			},
			{
				title: "One-shot full-stack apps with Motia and Cursor in minutes",
				time: "2025-12-15T21:30:00+05:30",
				description: "Live stream - How to build with Motia",
				links: [
					{
						platform: "youtube",
						url: "https://www.youtube.com/live/9HfvdxVxpmY",
					},
				],
			},
		],
	},
	{
		date: "2025-12-17T00:00:00+05:30",
		items: [
			{
				title: "Office hours",
				time: "2025-12-17T20:00:00+05:30",
			},
		],
	},
	{
		date: "2025-12-19T00:00:00+05:30",
		items: [
			{
				title: "Office hours",
				time: "2025-12-19T20:00:00+05:30",
			},
		],
	},
	{
		date: "2025-12-21T00:00:00+05:30",
		items: [
			{
				title: "Hackathon ends",
				time: "2025-12-21T20:00:00+05:30",
			},
		],
	},
	{
		date: "2025-12-22T00:00:00+05:30",
		items: [
			{
				title: "Winners announced",
				description: "Week of 22nd",
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
