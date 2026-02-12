import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "Automate Me If You Can",
	prize: "$2,500+",
	startDate: "2026-02-15T08:00:00+05:30",
	endDate: "2026-02-22T23:59:59+05:30",
	description:
		"Your mission, should you choose to accept it: Build multi-modal AI agents that watch, listen, and automate your day-to-day tasks. Use Accomplish to pull off the ultimate automation heist.",
	descriptionCard:
		"Automate your world with Accomplish. Your mission starts now.",
	slug: "accomplish",
	images,
	cta: {
		label: "Accept Mission",
		href: "https://forms.gle/GRpyeRt8Gsm3r72V8",
		openInNewTab: true,
		disabled: false,
	},
	prizes: {
		winning: [
			{
				name: "Top 5 Winners",
				prize: "$500 each + job interview at Accomplish.ai",
			},
		],
		giveaway: [
			{
				name: "Community Rewards",
				prize: "10 lucky winners who star the repo get swag boxes",
				details: {
					requirements: [
						"Star the repo and post about participation tagging Accomplish",
					],
					links: {
						github: "https://github.com/accomplish-ai/accomplish",
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
		question: "How do I register for this mission?",
		answer: "It's simple, agent! Click the <a href='https://forms.gle/GRpyeRt8Gsm3r72V8' target='_blank' rel='noopener noreferrer' class='text-sky-400 underline hover:text-sky-300'>Accept Mission</a> button to sign up for Automate Me If You Can. Fill out the registration form with your details and you'll be ready to start your automation heist!",
	},
	{
		question: "Eligibility criteria to participate in this hackathon?",
		answer: "You should be above 16 years of age and should abide by the rules of WeMakeDevs hackathons. Teams can have anywhere from 1 to 4 agents in them.",
	},
	{
		question: "I registered as a solo agent. Can I switch to a team?",
		answer: "Absolutely! If you initially registered solo and now want to join or form a team, simply submit the registration form again with your team name. Your registration will be updated automatically - time to assemble your crew for the heist!",
	},
	{
		question: "Who is this hackathon for?",
		answer: "This hackathon is perfect for anyone who wants to automate their day-to-day tasks using AI. Whether you're a developer, designer, or just someone who wants to make their life easier, Accomplish is your ticket to the ultimate automation adventure.",
	},
	{
		question: "Can I use existing or previously made projects?",
		answer: "No, agent. You have to start your mission fresh only after the hackathon begins. Your cover story should be clean before you go undercover!",
	},
	{
		question: "How can I submit my project?",
		answer: "Submit your project using the submission form (will be shared closer to the deadline). Only one person from a team needs to submit. Make sure you have your GitHub link, deployed link, and a YouTube demo (max 3 minutes) ready. Join the <a href='https://discord.gg/bHjupJwF' target='_blank' rel='noopener noreferrer' class='text-sky-400 underline hover:text-sky-300'>Accomplish Discord</a> for all mission briefings and updates.",
	},
	{
		question: "I am a beginner in tech, can I still participate?",
		answer: "Absolutely! At WeMakeDevs we believe in the \"learn by doing\" approach! Everyone starts somewhere - even the greatest con artists had to learn their first trick. Accomplish is designed to be beginner-friendly with simple setup and intuitive tools.",
	},
	{
		question: "Are we allowed to take help of AI tools like ChatGPT?",
		answer: "If you use ChatGPT or other AI tools, make sure to declare this when submitting your project. Failing to do so will result in your disqualification - we catch all the cheaters, that's what we do!",
	},
	{
		question: "Where can I connect for other queries?",
		answer: "For any mission-related queries, join the <a href='https://discord.gg/bHjupJwF' target='_blank' rel='noopener noreferrer' class='text-sky-400 underline hover:text-sky-300'>Accomplish Discord</a> for support and mission briefings.",
	},
	{
		question: "What makes Accomplish special?",
		answer: "Accomplish is 100% open source, runs locally on your machine, and you bring your own API keys. Your files never leave your computer - privacy first, always. It's the perfect tool for building AI agents that automate file management, document creation, and browser tasks.",
	},
];

const schedule = [
	{
		date: "2026-02-15T00:00:00+05:30",
		items: [
			{
				title: "Mission Begins - Hacking Starts",
				time: "2026-02-15T08:00:00+05:30",
			},
			{
				title: "Live Stream - Getting Started with Accomplish",
				description: "Learn how to set up Accomplish and start building your first AI agent automation.",
				time: "2026-02-15T21:30:00+05:30",
				links: [
					{
						platform: "youtube",
						url: "https://www.youtube.com/@WeMakeDevs",
					},
				],
			},
		],
	},
	{
		date: "2026-02-18T00:00:00+05:30",
		items: [
			{
				title: "Mid-Mission Check-in - Office Hours with Accomplish Team",
				description:
					"Join the Accomplish team for a mid-hackathon check-in. Get your questions answered and learn tips for building powerful automation agents.",
				time: "2026-02-18T21:30:00+05:30",
				link: {
					name: "Discord",
					url: "https://discord.gg/bHjupJwF",
				},
			},
		],
	},
	{
		date: "2026-02-22T00:00:00+05:30",
		items: [
			{
				title: "Mission Complete - Hacking Ends",
				time: "2026-02-22T20:00:00+05:30",
			},
			{
				title: "Submissions Due - Extract Your Work",
				time: "2026-02-22T23:59:59+05:30",
				link: {
					name: "Submit Your Project",
					url: "https://forms.gle/GRpyeRt8Gsm3r72V8",
				},
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
