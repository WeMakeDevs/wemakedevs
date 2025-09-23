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
		question: "I am a beginner in tech, can I still participate?",
		answer: "Yes, At WeMakeDevs we believe in the “learn by doing” approach!",
	},
	{
		question: "Eligibility criteria to participate in this hackathon?",
		answer: "Check out the <a href='https://www.wemakedevs.org/hackathons/futurestack25/rules' target='_blank' rel='noopener noreferrer' class='text-blue-700 underline hover:no-underline'>rules section</a>.",
	},
	{
		question: "How can I submit my project?",
		answer: "You'll receive an email with detailed submission instructions before the deadline. Make sure to also join the FutureStack hackathon channel on the <a href='https://cerebras.ai/discord' target='_blank' rel='noopener noreferrer' class='text-blue-700 underline hover:no-underline'>Cerebras Discord server</a> for updates and support. For setup guides and documentation, head over to the <a href='https://www.wemakedevs.org/hackathons/futurestack25/resources' target='_blank' rel='noopener noreferrer' class='text-blue-700 underline hover:no-underline'>Resources</a> section.",
	},
	{
		question: "How do I get access to Cerebras Cloud?",
		answer: "Sign up using <a href='https://cloud.cerebras.ai/?referral_code=wemakedevs' target='_blank' rel='noopener noreferrer' class='text-blue-700 underline hover:no-underline'>this link</a> to get started with free credits.",
	},
	{
		question: "Do I need to use all sponsor technologies?",
		answer: "You can choose to focus on one or more sponsor technologies (Cerebras, Meta Llama, Docker) based on your project idea. However, using at least one is required to be eligible for prizes, and incorporating multiple sponsors is recommended to increase your chances of winning.",
	},
	{
		question: "Where can I connect for other queries?",
		answer: "For any hackathon related queries, join the FutureStack hackathon channel on <a href='https://cerebras.ai/discord' target='_blank' rel='noopener noreferrer' class='text-blue-700 underline hover:no-underline'>Cerebras Discord server</a>.",
	},
];

const schedule = [
	{
		date: "2025-09-29T00:00:00+05:30",
		items: [
			{
				title: "Hacking starts",
				time: "2025-09-29T08:00:00+05:30",
			},
			{
				title: "Building Voice Agents with LiveKit and Cerebras",
				description:
					"Learn how to build a sophisticated real-time voice sales agent that can hold natural conversations with potential customers. The session will cover both single-agent and multi-agent systems, where specialized AI assistants can handle sales, technical support, and pricing inquiries.",
				time: "2025-09-29T21:30:00+05:30",
				links: [
					{
						platform: "youtube",
						url: "https://www.youtube.com/live/jlF3mfie-y0?si=I46eDyigfLxxehZK",
					},
					{
						platform: "linkedin",
						url: "https://www.linkedin.com/events/buildingvoiceagentswithlivekita7376200720397762560/theater/",
					},
				],
			},
		],
	},
	{
		date: "2025-09-30T00:00:00+05:30",
		items: [
			{
				title: "Docker DevDuck Multi-Agent Workshop",
				description:
					"Join us for a multi-agent workshop that will guide you through building and deploying a multi-agent system using Docker, Google Agent Development Kit (ADK), and Cerebras AI. This workshop will contain theoretical concepts and practical exercises that will give you hands-on experience with everything you need to know to create your hackathon project! You'll learn how to build and deploy a multi-agent system using Agentic Compose, orchestrate multiple AI agents, and integrate Cerebras AI with local models. Facilitator: Ajeet Raina, Developer Advocate, Docker",
				time: "2025-09-30T20:30:00+05:30",
				links: [
					{
						platform: "youtube",
						url: "https://www.youtube.com/live/Tk8sjwpffFY?si=kzulhmyqS_NGMu7s",
					},
					{
						platform: "linkedin",
						url: "https://www.linkedin.com/events/dockerdevduckmulti-agentworksho7376201071230332928/theater/",
					},
				],
			},
		],
	},
	{
		date: "2025-10-01T00:00:00+05:30",
		items: [
			{
				title: "Creating Research Assistants with Exa and Cerebras",
				description:
					"Build your own AI-powered research assistant that can intelligently search the web, analyze information, and provide comprehensive answers with proper citations. You'll create a 'Perplexity-style' tool that rivals commercial AI search platforms.",
				time: "2025-10-01T21:30:00+05:30",
				links: [
					{
						platform: "youtube",
						url: "https://www.youtube.com/live/8D73Reafu90?si=ifmxZdQ2qdDyxaou",
					},
					{
						platform: "linkedin",
						url: "https://www.linkedin.com/events/creatingresearchassistantswithe7376201413288185856/theater/",
					},
				],
			},
		],
	},
	{
		date: "2025-10-02T00:00:00+05:30",
		items: [
			{
				title: "Resume review",
				description:
					"Get personalized feedback on your resume from industry experts. Learn how to highlight your skills and stand out to recruiters.",
				time: "2025-10-02T20:30:00+05:30",
			},
		],
	},
	{
		date: "2025-10-03T00:00:00+05:30",
		items: [
			{
				title: "Early project showcase and feedback session",
				description:
					"Share your early-stage project with mentors and peers. Get constructive feedback to refine your idea before final submission.",
				time: "2025-10-03T20:30:00+05:30",
			},
		],
	},
	{
		date: "2025-10-05T00:00:00+05:30",
		items: [
			{
				title: "Hackathon ends",
				time: "2025-10-05T20:00:00+05:30",
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
