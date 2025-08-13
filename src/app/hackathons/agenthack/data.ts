import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "AgentHack 2025",
	prize: "$5,000+",
	startDate: "2025-08-20T04:30:00Z",
	endDate: "2025-08-24T16:30:00Z",
	description: "Build AI that works for you!",
	descriptionCard:
		"Create powerful, tool-connected agents that work for you!",
	slug: "agenthack",
	images,
	cta: {
		label: "Register for AgentHack",
		href: "https://forms.gle/kjRyZZQAcVoxZgu79",
	},
	prizes: {
		winning: [
			{
				name: "Winning team",
				prize: "Apple MacBook Pro",
			},
			{
				name: "1st runner up team",
				prize: "Apple iPhone 16",
			},
			{
				name: "2nd runner up team",
				prize: "Apple iPad Air",
			},
		],
		other: [
			{
				name: "Top 10 teams",
				prize: "Exclusive swags",
			},
		],
		giveaway: [
			{
				name: "Top 5 teams",
				prize: "Exclusive swags for starring Portia SDK on GitHub and sharing experience on Twitter with #AgentHack2025",
				details: {
					requirements: [
						"Star Portia SDK on GitHub",
						"Share your experience on Twitter with #AgentHack2025",
					],
					links: {
						github: "https://github.com/portiaAI/portia-sdk-python",
						twitter: "https://twitter.com",
					},
				},
			},
		],
	},
	submissionLink: "https://github.com/codefest-2024/submissions",
	registrationLink: "https://forms.gle/b3uwjeo5ZMrmiDVy7",
	googleCalendarLink: "#",
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
		date: "2025-08-18T00:00:00+05:30",
		items: [
			{
				title: "AgentHack 2025 Live Stream: Build AI that works for you!",
				link: {
					name: "Watch Live",
					url: "https://www.youtube.com/live/5_0JTeR3Yt8?si=DWSUyvaK5077BusY",
				},
				time: "2025-08-18T20:30:00+05:30",
			},
		],
	},
	{
		date: "2025-08-20T00:00:00+05:30",
		items: [
			{
				title: "Hacking begins",
				time: "2025-08-20T10:00:00+05:30",
			},
			{
				title: "Live office hour on Discord",
				link: {
					name: "Join Discord",
					url: "https://discord.gg/wemakedevs",
				},
				time: "2025-08-20T19:00:00+05:30",
			},
		],
	},
	{
		date: "2025-08-21T00:00:00+05:30",
		items: [
			{
				title: "Resume review by Kunal Kushwaha",
				time: "2025-08-21T19:00:00+05:30",
			},
		],
	},
	{
		date: "2025-08-22T00:00:00+05:30",
		items: [
			{
				title: "Discord community call",
				time: "2025-08-22T19:00:00+05:30",
			},
		],
	},
	{
		date: "2025-08-23T00:00:00+05:30",
		items: [
			{
				title: "Fun activity",
				time: "2025-08-23T19:00:00+05:30",
			},
		],
	},

	{
		date: "2025-08-24T00:00:00+05:30",
		items: [
			{
				title: "Project submission starts",
				time: "2025-08-24T10:00:00+05:30",
			},
			{
				title: "Hackathon ends (project submission closes)",
				time: "2025-08-24T22:00:00+05:30",
			},
		],
	},
	{
		date: "2025-08-25T00:00:00+05:30",
		items: [
			{
				title: "Hackathon end stream & result announcement",
				time: "2025-08-25T19:00:00+05:30",
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
