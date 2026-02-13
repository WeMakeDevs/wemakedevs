import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "Automate Me If You Can",
	prize: "$3000 cash + job interviews",
	startDate: "2026-02-16T08:00:00+05:30",
	endDate: "2026-02-22T23:59:59+05:30",
	description:
		"Frank didn't do his own paperwork. Neither should you. Use Accomplish - the open source AI coworker that lives on your desktop - to automate your boring, repetitive tasks. 10 winners who showcase their use case win $100 each. Think you can pull it off?",
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
	prizes: {
		winning: [
			{
				name: "Top 10 Winners",
				prize: "$100 each for showcasing their use case + job interview at Accomplish.ai",
			},
		],
		giveaway: [
			{
				name: "Start your open source journey",
				prize: "$100 per merged issue (good-first issues on GitHub)",
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
		answer: "You should be above 16 years of age and should abide by the rules of WeMakeDevs hackathons. Teams can have anywhere from 1 to 4 people in them.",
	},
	{
		question: "I registered solo. Can I switch to a team?",
		answer: "Of course! If you initially registered solo and now want to join or form a team, simply submit the registration form again with your team name. Your registration will be updated automatically - time to assemble your crew!",
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
		question: "Can I use existing or previously made projects?",
		answer: "No. You have to start fresh only after the hackathon begins. No recycled work - Frank never used the same fake check twice.",
	},
	{
		question: "How can I submit my project?",
		answer: "Submit your project using the submission form (will be shared closer to the deadline). Only one person from a team needs to submit. Make sure you have your GitHub link, deployed link, and a YouTube demo (max 3 minutes) ready. Join the <a href='https://discord.gg/bHjupJwF' target='_blank' rel='noopener noreferrer' class='text-sky-400 underline hover:text-sky-300'>Accomplish Discord</a> for all updates.",
	},
	{
		question: "I am a beginner in tech, can I still participate?",
		answer: "Absolutely! At WeMakeDevs we believe in the \"learn by doing\" approach! Everyone starts somewhere - Frank Abagnale was only 16 when he pulled off his first scheme. Accomplish takes just 2 minutes to set up, and you don't need to write any code to use it.",
	},
	{
		question: "Are we allowed to take help of AI tools like ChatGPT?",
		answer: "If you use ChatGPT or other AI tools to help build your project, make sure to declare this when submitting. Failing to do so will get you disqualified - and unlike Frank, we will catch you.",
	},
	{
		question: "Where can I ask questions?",
		answer: "Join the <a href='https://discord.gg/bHjupJwF' target='_blank' rel='noopener noreferrer' class='text-sky-400 underline hover:text-sky-300'>Accomplish Discord</a> for support and updates. The Accomplish team is active there and happy to help.",
	},
	{
		question: "What makes Accomplish special?",
		answer: "It's 100% open source (MIT licensed), runs entirely on your machine, and you bring your own API keys. Your files never leave your computer. It's not just a chatbot - it actually does things: browses the web, organizes files, creates documents, and automates workflows. Think of it as a coworker who never complains.",
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
					url: "https://forms.gle/GRpyeRt8Gsm3r72V8",
				},
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
