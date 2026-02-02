import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "Vision Possible: Agent Protocol",
	prize: "$5,000+",
	startDate: "2026-02-23T16:00:00Z",
	endDate: "2026-03-01T23:59:59Z",
	description:
		"Your mission, should you choose to accept it: Build multi-modal AI agents that watch, listen, and understand video in real-time.",
	descriptionCard:
		"Build real-time Vision AI agents with Stream's Vision Agents SDK. This message will self-destruct.",
	slug: "vision",
	images,
	cta: {
		label: "Accept Mission",
		href: "https://forms.gle/b8YS4J4jcR2mSnnf7",
		openInNewTab: true,
		disabled: false,
	},
	prizes: {
		winning: [
			{
				name: "Top 3 Agents",
				prize: "$5,000 + exclusive swag + career opportunities",
			},
		],
		giveaway: [
			{
				name: "Community Intel",
				prize: "Top 10 posts win swag bundles",
				details: {
					requirements: [
						"Star the repo and post about participation tagging Vision Agents",
					],
					links: {
						github: "https://github.com/GetStream/Vision-Agents",
					},
				},
			},
		],
	},
};

const navLinks = [
	{
		href: `/hackathons/vision`,
		label: "Overview",
		page: "overview",
	},
	{
		href: `/hackathons/vision/rules`,
		label: "Mission Brief",
		page: "rules",
	},
	{
		href: `/hackathons/vision/resources`,
		label: "Intel",
		page: "resources",
	},
	{
		href: `/hackathons/vision/schedule`,
		label: "Timeline",
		page: "schedule",
	},
];

const faqs: FaqType[] = [
	{
		question: "What are the eligibility criteria for this mission?",
		answer: "You must be above 16 years of age and follow the WeMakeDevs hackathon protocols. Teams can have 1-4 agents (members).",
	},
	{
		question: "Can I use existing projects or prior work?",
		answer: "Negative, Agent. All projects must be built from scratch after the mission commences. Using starter templates is permitted.",
	},
	{
		question: "How do I submit my completed mission?",
		answer: "Join the <a href='https://discord.gg/RkhX9PxMS6' target='_blank' rel='noopener noreferrer' class='text-cyan-400 underline hover:text-cyan-300'>Vision Agents Discord</a> for mission updates, submission details, and direct communication with HQ.",
	},
	{
		question: "I'm new to Vision AI. Can I still participate?",
		answer: "Affirmative. Every elite agent started as a recruit. WeMakeDevs believes in learning by doing. Your mission training starts now!",
	},
	{
		question: "Are AI assistants like ChatGPT permitted?",
		answer: "Use of AI tools is permitted but must be declared in your mission report (submission). Failure to disclose will result in disqualification.",
	},
	{
		question: "What technology stack should I use?",
		answer: "Vision Agents SDK is required. You can combine it with any video AI tools - YOLO, Roboflow, Moondream, Gemini, OpenAI, and more. The SDK supports React, Android, iOS, Flutter, React Native, and Unity.",
	},
	{
		question: "Where can I get mission support?",
		answer: "For operational support, join the <a href='https://discord.gg/RkhX9PxMS6' target='_blank' rel='noopener noreferrer' class='text-cyan-400 underline hover:text-cyan-300'>Vision Agents Discord</a> or contact HQ at <a href='mailto:contact@wemakedevs.org' class='text-cyan-400 underline hover:text-cyan-300'>contact@wemakedevs.org</a>.",
	},
];

const schedule = [
	{
		date: "2026-02-23T00:00:00Z",
		items: [
			{
				title: "Mission Briefing Livestream",
				description:
					"Join us for the official kickoff where we'll introduce Vision Agents, demonstrate capabilities, and reveal mission objectives.",
				time: "2026-02-23T16:00:00Z",
				links: [
					{
						platform: "youtube",
						url: "https://www.youtube.com/@WeMakeDevs",
					},
				],
			},
			{
				title: "Mission Commences - Agents Deployed",
				time: "2026-02-23T16:30:00Z",
			},
		],
	},
	{
		date: "2026-02-25T00:00:00Z",
		items: [
			{
				title: "Office Hours with Vision Agents Team",
				description:
					"Get your questions answered and receive tactical support from the Vision Agents team.",
				time: "2026-02-25T16:00:00Z",
				link: {
					name: "Discord",
					url: "https://discord.gg/RkhX9PxMS6",
				},
			},
		],
	},
	{
		date: "2026-02-27T00:00:00Z",
		items: [
			{
				title: "Mid-Mission Check-in",
				description:
					"Share your progress and get feedback from mentors and fellow agents.",
				time: "2026-02-27T16:00:00Z",
				link: {
					name: "Discord",
					url: "https://discord.gg/RkhX9PxMS6",
				},
			},
		],
	},
	{
		date: "2026-03-01T00:00:00Z",
		items: [
			{
				title: "Mission Extraction - Final Submissions",
				time: "2026-03-01T20:00:00Z",
			},
			{
				title: "Mission Complete - Deadline",
				time: "2026-03-01T23:59:59Z",
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
