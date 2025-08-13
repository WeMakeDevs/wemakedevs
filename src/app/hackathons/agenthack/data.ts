import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "AgentHack 2025",
	prize: "Apple MacBooks",
	startDate: "2025-08-20T04:30:00Z",
	endDate: "2025-08-24T16:30:00Z",
	description: "Build AI that works for you",
	slug: "agenthack",
	images,
	cta: {
		label: "Register for AgentHack",
		href: "https://forms.gle/kjRyZZQAcVoxZgu79",
	},
	prizes: {
		winning: [
			{
				name: "Top 3",
				prize: "MacBook Air",
			},
		],
		other: [
			{
				name: "Top 10",
				prize: "Swag",
			},
		],
		giveaway: null,
	},
	submissionLink: "https://github.com/codefest-2024/submissions",
	registrationLink: "https://forms.gle/b3uwjeo5ZMrmiDVy7",
	googleCalendarLink:
		"https://calendar.google.com/calendar/u/0?cid=Y18zMDkwNGI0NzdhOTVmNzU5MjRjYjI1ZDdhMjk1NDY5NzlmNDk3OWRkMzliNDEwMTlhYzViMjJlNzZmYTE2MDNkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
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

export { DATA, navLinks, faqs };
