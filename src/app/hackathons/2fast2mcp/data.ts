import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "2 Fast 2 MCP",
	prize: "$10,000+",
	startDate: "2026-02-08T08:00:00+05:30",
	endDate: "2026-02-15T23:59:59+05:30",
	description:
		"Rev your engines and join our online hackathon! Run, orchestrate, and scale MCP-based agents with Archestra. It's not about how fast you code, it's about control, security, and architecture.",
	descriptionCard:
		"Run powerful MCP-based agents with Archestra. Architecture wins races.",
	slug: "2fast2mcp",
	images,
	cta: {
		label: "Register Now",
		href: "/hackathons/2fast2mcp/register",
		openInNewTab: false,
		disabled: false,
	},
	prizes: {
		winning: [
			{
				name: "Top 3 Winners",
				prize: "$10,000 + exclusive swag + job interview at Archestra.ai with the CEO",
			},
		],
		giveaway: [
			{
				name: "Community Rewards",
				prize: "Top 10 posts win swag bundles",
				details: {
					requirements: [
						"Star the repo and post about participation tagging Archestra",
					],
					links: {
						github: "https://github.com/archestra-ai/archestra",
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
		question: "How do I register for the hackathon?",
		answer: "It's simple! Click the <a href='/hackathons/2fast2mcp/register' class='text-orange-400 underline hover:text-orange-300'>Register Now</a> button to sign up for 2 Fast 2 MCP. Fill out the registration form with your details and you'll be ready to race!",
	},
	{
		question: "Eligibility criteria to participate in this hackathon?",
		answer: "You should be above 16 years of age and should abide by the rules of WeMakeDevs hackathons. Teams can have anywhere from 1 to 4 people in them.",
	},
	{
		question: "I registered as a solo participant. Can I switch to a team?",
		answer: "Yes! If you initially registered solo and now want to join or form a team, simply submit the registration form again with your team name. Your registration will be updated automatically - time to assemble your crew!",
	},
	{
		question: "Who is this hackathon for?",
		answer: "This hackathon is perfect for tinkerers, agent builders, DevOps engineers, and SREs who want to explore the power of MCP (Model Context Protocol) servers and intelligent agent orchestration with Archestra.",
	},
	{
		question: "Can I use existing or previously made projects?",
		answer: "No, you have to start making the project only after the hackathon starts. Your engines should be cold before the race begins!",
	},
	{
		question: "How can I submit my project?",
		answer: "Submit your project using the <a href='https://forms.gle/S1fV4shNaDmAbgSB8' target='_blank' rel='noopener noreferrer' class='text-orange-400 underline hover:text-orange-300'>submission form</a>. Only one person from a team needs to submit. Make sure you have your GitHub link, deployed link, and a YouTube demo (max 3 minutes) ready. Join the <a href='https://join.slack.com/t/archestracommunity/shared_invite/zt-3pxh76ids-sy7J9TrvfQnlbfhGO0uM5A' target='_blank' rel='noopener noreferrer' class='text-orange-400 underline hover:text-orange-300'>Archestra Slack Community</a> for all updates.",
	},
	{
		question: "I am a beginner in tech, can I still participate?",
		answer: "Yes! At WeMakeDevs we believe in the \"learn by doing\" approach! Everyone starts somewhere - even Dom Toretto started with a 10-second car.",
	},
	{
		question: "Are we allowed to take help of AI tools like ChatGPT?",
		answer: "If you use ChatGPT or other AI tools, make sure to declare this when submitting your project. Failing to do so will result in your disqualification - we don't tolerate cheaters in this family.",
	},
	{
		question: "Where can I connect for other queries?",
		answer: "For any hackathon related queries, join the <a href='https://join.slack.com/t/archestracommunity/shared_invite/zt-3pxh76ids-sy7J9TrvfQnlbfhGO0uM5A' target='_blank' rel='noopener noreferrer' class='text-orange-400 underline hover:text-orange-300'>Archestra Slack Community</a> for support.",
	},
];

const schedule = [
	{
		date: "2026-02-09T00:00:00+05:30",
		items: [
			{
				title: "Engines Start - Hacking Begins",
				time: "2026-02-09T08:00:00+05:30",
			},
			{
				title: "Live Stream - Getting Started with Archestra & MCP",
				time: "2026-02-09T21:30:00+05:30",
				links: [
					{
						platform: "youtube",
						url: "https://www.youtube.com/watch?v=aRtR99W-EoI",
					},
					{
						platform: "linkedin",
						url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7425859351120093186",
					},
				],
			},
		],
	},
	{
		date: "2026-02-12T00:00:00+05:30",
		items: [
			{
				title: "Mid-Race Check-in - Office Hours with Archestra Team",
				description:
					"Join the Archestra team for a mid-hackathon check-in. Get your questions answered and learn tips for building powerful MCP servers and agent orchestration.",
				time: "2026-02-12T21:30:00+05:30",
				link: {
					name: "Slack",
					url: "https://join.slack.com/t/archestracommunity/shared_invite/zt-3pxh76ids-sy7J9TrvfQnlbfhGO0uM5A",
				},
			},
		],
	},
	{
		date: "2026-02-15T00:00:00+05:30",
		items: [
			{
				title: "Finish Line - Hacking Ends",
				time: "2026-02-15T20:00:00+05:30",
			},
		{
			title: "Submissions Due - Cross the Finish Line",
			time: "2026-02-15T23:59:59+05:30",
			link: {
				name: "Submit Your Project",
				url: "https://forms.gle/S1fV4shNaDmAbgSB8",
			},
		},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
