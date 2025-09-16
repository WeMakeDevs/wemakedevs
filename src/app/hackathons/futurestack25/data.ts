import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "FutureStack GenAI hackathon",
	prize: "$15,000+",
	startDate: "2025-09-29T04:30:00Z",
	endDate: "2025-10-05T16:30:00Z",
	description: "Our biggest hackathon yet",
	descriptionCard: "Build the future with AI and cloud-native tech!",
	slug: "futurestack25",
	images,
	cta: {
		label: "Register Now",
		href: "https://forms.gle/dzo4pdF7LBoRgYLw6",
		openInNewTab: true,
	},
	prizes: {
		winning: [
			{
				name: "Best Use of Cerebras",
				prize: "$5,000 cash prize + Interview opportunity with Cerebras",
			},
			{
				name: "Best Use of Meta Llama Models",
				prize: "$5,000 cash prize + Private coffee chat with Meta engineers",
			},
			{
				name: "Best Use of Docker",
				prize: "$5,000 cash prize",
			},
		],
		giveaway: [
			{
				name: "Top 30 runner ups",
				prize: "Exclusive swag packs from our sponsors",
				details: {
					requirements: [
						"Submit a valid project using at least one sponsor technology",
						"Follow submission guidelines",
					],
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
		answer: "Join the FutureStack hackathon channel on Cerebras Discord for all the updates and submission instructions.",
	},
	{
		question: "Do I need to use all sponsor technologies?",
		answer: "No, you can choose to focus on one or more sponsor technologies (Cerebras, Meta Llama, Docker) based on your project idea. However, using at least one is required to be eligible for prizes.",
	},
	{
		question: "I am a beginner in tech, can I still participate?",
		answer: 'Yes, At WeMakeDevs we believe in the "learn by doing" approach! We\'ll have workshops and resources to help you get started.',
	},
	{
		question: "Are we allowed to take help of AI tools like ChatGPT?",
		answer: "If you use ChatGPT or other AI tools, make sure to declare this when submitting your project. Failing to do so will result in your disqualification.",
	},
	{
		question: "How do I get access to Cerebras Cloud?",
		answer: "Sign up using our referral link: https://cloud.cerebras.ai/?referral_code=wemakedevs to get started with free credits.",
	},
	{
		question: "Where can I connect for other queries?",
		answer: "For any hackathon related queries, join the FutureStack hackathon channel on Cerebras Discord server.",
	},
];

const schedule = [
	{
		date: "2024-09-29T00:00:00+05:30",
		items: [
			{
				title: "Hacking begins",
				time: "2024-09-29T10:00:00+05:30",
			},
			{
				title: "Building Voice Agents with LiveKit and Cerebras",
				description:
					"Learn how to build a sophisticated real-time voice sales agent that can hold natural conversations with potential customers. The session will cover both single-agent and multi-agent systems, where specialized AI assistants can handle sales, technical support, and pricing inquiries.",
				link: {
					name: "Stay tuned!",
					url: "#",
				},
				time: "2024-09-29T20:30:00+05:30",
			},
		],
	},
	{
		date: "2024-09-30T00:00:00+05:30",
		items: [
			{
				title: "Docker DevDuck Multi-Agent Workshop",
				description:
					"Join us for a multi-agent workshop that will guide you through building and deploying a multi-agent system using Docker, Google Agent Development Kit (ADK), and Cerebras AI. This workshop will contain theoretical concepts and practical exercises that will give you hands-on experience with everything you need to know to create your hackathon project! You'll learn how to build and deploy a multi-agent system using Agentic Compose, orchestrate multiple AI agents, and integrate Cerebras AI with local models.",
				link: {
					name: "Stay tuned!",
					url: "#",
				},
				time: "2024-09-30T20:30:00+05:30",
			},
		],
	},
	{
		date: "2024-10-01T00:00:00+05:30",
		items: [
			{
				title: "Building the World's Fastest AI Apps with Cerebras",
				link: {
					name: "Stay tuned!",
					url: "#",
				},
				time: "2024-10-01T20:30:00+05:30",
			},
		],
	},
	{
		date: "2024-10-02T00:00:00+05:30",
		items: [
			{
				title: "Resume review session",
				link: {
					name: "Join Discord Server",
					url: "https://discord.gg/wemakedevs",
				},
				time: "2024-10-02T17:00:00+05:30",
			},
		],
	},
	{
		date: "2024-10-03T00:00:00+05:30",
		items: [
			{
				title: "Early project showcase and feedback session",
				link: {
					name: "Join Discord Server",
					url: "https://discord.gg/wemakedevs",
				},
				time: "2024-10-03T21:00:00+05:30",
			},
		],
	},
	{
		date: "2024-10-04T00:00:00+05:30",
		items: [
			{
				title: "Keep on working. This hackathon is not over yet!",
			},
		],
	},
	{
		date: "2024-10-05T00:00:00+05:30",
		items: [
			{
				title: "Hackathon ends",
				time: "2024-10-05T19:00:00+05:30",
			},
			{
				title: "Results will be announced during the week of October 6th",
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
