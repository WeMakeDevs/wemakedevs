import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "AI Agents Assemble",
	prize: "$20,000+ in cash prizes",
	startDate: "2025-12-08T08:00:00+05:30", // December 8th 8am IST 2025
	endDate: "2025-12-14T20:00:00+05:30", // December 14th 8pm IST 2025
	showDate: true,
	// Short description for header (1-2 sentences, no em dashes)
	description:
		"A global showdown where builders unite to create the next generation of intelligent agents. Assemble your skills, assemble your tools, assemble your team.",
	// Description for card on home page
	descriptionCard:
		"Build the next generation of intelligent agents with cutting-edge AI tools.",
	slug: "assemblehack25",
	images,
	cta: {
		label: "Register Now",
		href: "https://forms.gle/oq2TySW9DGyKmftT9",
		openInNewTab: true,
		disabled: false,
	},
	prizes: {
		winning: [
			{
				name: "The Infinity Build Award",
				prize: "$10,000 cash + swag + job interviews + career mentorship",
				description:
					"Use all 3 tools (Cline, Vercel, Kestra) to build a full-stack AI agent system.",
			},
			{
				name: "The Visionary Intelligence Award",
				prize: "$3,000 cash + swag + job interviews + career mentorship",
				description:
					"Best use of Oumi with open-source LLMs (LLaMA, Gemma, Mistral, Qwen, etc.).",
			},
			{
				name: "The Captain Code Award",
				prize: "$2,000 cash + swag + job interviews + career mentorship",
				description:
					"Use CodeRabbit to demonstrate exceptional open-source engineering: clean PRs, documentation, modularity, OSS workflows.",
			},
		],
		giveaway: [],
	},
	sponsors: [
		{
			name: "Cline",
			description:
				"An autonomous coding environment that helps you build, iterate, and experiment with AI agents directly from your editor. Perfect for rapid prototyping and local agent development.",
			logo: images.clineLogo,
			url: "https://cline.sh",
		},
		{
			name: "Kestra",
			description:
				"A powerful workflow orchestration engine that lets you automate, schedule, and connect complex tasks with ease. Ideal for building multi-step or event-driven agent systems.",
			logo: images.kestraLogo,
			url: "https://kestra.io",
		},
		{
			name: "Vercel",
			description:
				"A world-class platform for deploying fast, dynamic frontends and AI-powered applications. The best place to host smooth, production-ready interfaces for your agents.",
			logo: images.vercelLogo,
			url: "https://vercel.com",
		},
		{
			name: "Oumi",
			description:
				"An open-source agent framework that brings memory, reasoning, and tool-use to life. Build intelligent agents powered by your favorite open-source models.",
			logo: images.oumiLogo,
			url: "https://oumi.ai",
		},
		{
			name: "CodeRabbit",
			description:
				"An AI-driven code review assistant that ensures clean, maintainable, open-source quality code. Helps your project stay polished and production-ready.",
			logo: images.coderabbitLogo,
			url: "https://coderabbit.ai",
		},
		{
			name: "Together AI",
			description:
				"An AI-native cloud platform providing cutting-edge open-source models, high-performance inference, fine-tuning, and GPU clusters. Power your agents with industry-leading price-performance at scale.",
			logo: images.togetheraiLogo,
			url: "https://www.together.ai",
		},
	],
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
		question: "I'm a beginner. Can I take part?",
		answer: "Yes. Beginners are absolutely welcome. You don't need prior experience with agents, just curiosity and willingness to learn.",
	},
	{
		question: "Where is the hackathon taking place?",
		answer: "This is a fully online hackathon. You can participate from anywhere in the world.",
	},
	{
		question: "How can I learn about the sponsor tools?",
		answer: "Visit the Resources section for guides and tutorials. We'll also host webinars during the hackathon to help you get started.",
	},
	{
		question: "How do I ask questions or clear doubts?",
		answer: 'Join the <a href="https://discord.gg/wemakedevs" target="_blank" rel="noopener noreferrer" class="font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-2">WeMakeDevs Discord</a> where mentors and community members will be available throughout the event.',
	},
	{
		question: "How do I submit my project?",
		answer: 'You\'ll receive an email with detailed submission instructions before the deadline. Make sure to also join <a href="https://discord.gg/wemakedevs" target="_blank" rel="noopener noreferrer" class="font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-2">Discord</a> to stay updated.',
	},
	{
		question: "How do I win and what are the eligibility criteria?",
		answer: "Check the Rules section for prize requirements, judging criteria, and all eligibility details.",
	},
	{
		question: "Can I participate solo or in a team?",
		answer: 'You can join solo or form a team of up to 4 people. If you need teammates, you can find others in the <a href="https://discord.gg/wemakedevs" target="_blank" rel="noopener noreferrer" class="font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-2">Discord community</a>.',
	},
];

export { DATA, navLinks, faqs };
