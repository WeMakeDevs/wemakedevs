import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "Automate Me If You Can",
	prize: "$3000 cash, 30 winners + interview opportunities",
	startDate: "2026-02-16T08:00:00+05:30",
	endDate: "2026-02-22T23:59:59+05:30",
	description:
		"Frank didn't do his own paperwork. Neither should you. Use Accomplish - the open source AI coworker that lives on your desktop - to automate your boring, repetitive tasks. 10 winners for showcasing your automation, Top 20 for open source (merged PRs) · $100 each. One person can win both tracks. Think you can pull it off?",
	descriptionCard:
		"Automate your boring tasks with Accomplish. Think you can pull it off?",
	slug: "accomplish",
	images,
	cta: {
		label: "Register",
		href: "https://forms.gle/GRpyeRt8Gsm3r72V8",
		openInNewTab: true,
		disabled: false,
	},
	submissionFormUrl: "https://forms.gle/cD39An6mkmuUAc3t8",
	prizes: {
		winning: [
			{
				name: "Showcase how you used Accomplish to automate your task",
				prize: "10 winners · $100 each + job interview at Accomplish.ai",
			},
			{
				name: "Get your PR merged",
				prize: "Top 20 · $100 each + job interview at Accomplish.ai",
				details: {
					requirements: [
						"Pick an issue with label feb_hackathon, get a PR merged",
					],
					links: {
						github: "https://github.com/accomplish-ai/accomplish/issues?q=is%3Aissue%20state%3Aopen%20label%3Afeb_hackathon",
					},
				},
			},
		],
		giveaway: [
			{
				name: "Start your open source journey",
				prize: "Top 20 for merged PRs · $100 each (one person can win both tracks)",
				details: {
					requirements: [
						"Pick an issue with label feb_hackathon, get a PR merged",
					],
					links: {
						github: "https://github.com/accomplish-ai/accomplish/issues?q=is%3Aissue%20state%3Aopen%20label%3Afeb_hackathon",
					},
				},
			},
			{
				name: "Community Rewards",
				prize: "10 lucky winners who share on socials get swag boxes",
				details: {
					requirements: [
						"After you register, share on socials and tag @wemakedevs and @Accomplish_ai — share your experience, what you build, etc.",
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
		question: "How do I sign up?",
		answer: "Easy! Click the <a href='https://forms.gle/GRpyeRt8Gsm3r72V8' target='_blank' rel='noopener noreferrer' class='text-sky-400 underline hover:text-sky-300'>Register</a> button to sign up for Automate Me If You Can. Fill out the form with your details and you're in. No fake IDs required.",
	},
	{
		question: "Eligibility criteria to participate in this hackathon?",
		answer: "You should be above 16 years of age and should abide by the rules of WeMakeDevs hackathons. This is a solo hackathon - you participate on your own.",
	},
	{
		question: "Who is this hackathon for?",
		answer: "Anyone who's tired of doing the same boring tasks over and over. Developers, students, freelancers, content creators - if you've got repetitive work that eats your time, this is for you. Accomplish is beginner-friendly, so you don't need to be a pro to pull this off.",
	},
	{
		question: "What exactly do I need to build to win?",
		answer: "Use Accomplish to automate something real in your day-to-day life. Organize messy files, draft documents, automate browser tasks, generate reports - the more creative and useful your automation, the better. Show us a real problem, and how Accomplish solved it for you. Record a demo showing the before and after.",
	},
	{
		question: "Can I win both tracks (submitting a project and merging a pull request)?",
		answer: "Yes! You can win both. You get $100 for each PR merged (you can merge multiple PRs), and you also get $100 for your automation solution if it's selected as a winner in the highlight track.",
	},
	{
		question: "How can I submit my project?",
		answer: "Submit your project using the <a href='https://forms.gle/cD39An6mkmuUAc3t8' target='_blank' rel='noopener noreferrer' class='text-sky-400 underline hover:text-sky-300'>project submission form</a>. Record a demo, share on X (Twitter) or LinkedIn tagging @archestra_ai and @wemakedevs, then paste the link(s) in the form. For the open source track, paste your merged PR URL(s). Join the <a href='https://discord.gg/bHjupJwF' target='_blank' rel='noopener noreferrer' class='text-sky-400 underline hover:text-sky-300'>Accomplish Discord</a> for all updates.",
	},
	{
		question: "I am a beginner in tech, can I still participate?",
		answer: "Absolutely! At WeMakeDevs we believe in the \"learn by doing\" approach! Everyone starts somewhere - Frank Abagnale was only 16 when he pulled off his first scheme. Accomplish takes just 2 minutes to set up, and you don't need to write any code to use it.",
	},
	{
		question: "Where can I ask questions?",
		answer: "Join the <a href='https://discord.gg/bHjupJwF' target='_blank' rel='noopener noreferrer' class='text-sky-400 underline hover:text-sky-300'>Accomplish Discord</a> for support and updates. The Accomplish team is active there and happy to help.",
	},
];

const schedule = [
	{
		date: "2026-02-16T00:00:00+05:30",
		items: [
			{
				title: "The Con Begins - Hacking Starts",
				time: "2026-02-16T08:00:00+05:30",
			},
			{
				title: "Live Stream - Getting Started with Accomplish",
				description: "Learn how to set up Accomplish and start automating your first tasks. From zero to your first automation in under 10 minutes.",
				time: "2026-02-16T21:30:00+05:30",
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
				title: "Midway Check-in - Office Hours with Accomplish Team",
				description:
					"Join the Accomplish team for a mid-hackathon check-in. Get your questions answered, share progress, and learn tips for building powerful automations.",
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
				title: "Hacking Ends",
				time: "2026-02-22T20:00:00+05:30",
			},
			{
				title: "Submissions Due",
				time: "2026-02-22T23:59:59+05:30",
				link: {
					name: "Submit Your Project",
					url: "https://forms.gle/cD39An6mkmuUAc3t8",
				},
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
