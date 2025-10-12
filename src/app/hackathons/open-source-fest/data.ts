import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "WeMakeDevs Open Source Fest",
	prize: "MacBook, iPhone 17, iPad & More!",
	startDate: "2025-10-13T00:00:00Z",
	endDate: "2025-11-03T23:59:59Z",
	description:
		"A month-long challenge where you'll contribute to real-world open source projects",
	descriptionCard:
		"Learn how open source truly works with mentorship and clear guidelines!",
	slug: "open-source-fest",
	images,
	cta: {
		label: "Register Now",
		href: "https://kestra.io/slack",
		openInNewTab: true,
	},
	prizes: {
		winning: [
			{
				name: "Grand Prize",
				prize: "MacBook + Paid internship at WeMakeDevs",
			},
			{
				name: "Second Place",
				prize: "iPhone 17 + Paid internship at WeMakeDevs",
			},
			{
				name: "Third Place",
				prize: "iPad + Paid internship at WeMakeDevs",
			},
		],
		giveaway: [
			{
				name: "All Winners",
				prize: "Paid internship opportunity at WeMakeDevs",
				details: {
					requirements: [
						"Complete meaningful contributions to Kestra",
						"Submit a blog post about your journey",
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
		question: "I am a beginner in open source, can I still participate?",
		answer: "Absolutely! This event is designed for beginners. We provide mentorship, clear guidelines, and step-by-step guidance to help you make your first meaningful contributions.",
	},
	{
		question: "What is Kestra and why are we contributing to it?",
		answer: "Kestra is a powerful open-source workflow orchestration platform. It's a real-world project with an active community, making it perfect for learning how open source contributions work in practice.",
	},
	{
		question: "How do I get started with contributing to Kestra?",
		answer: "Join the <a href='https://kestra.io/slack' target='_blank' rel='noopener noreferrer' class='text-blue-700 underline hover:no-underline'>Kestra Slack community</a> and check out the <a href='https://www.wemakedevs.org/hackathons/open-source-fest/resources' target='_blank' rel='noopener noreferrer' class='text-blue-700 underline hover:no-underline'>Resources</a> section for getting started guides and documentation.",
	},
	{
		question: "What kind of contributions count for this event?",
		answer: "Any meaningful contribution to Kestra counts - bug fixes, feature additions, documentation improvements, or helping other contributors. The key is that it should be assigned to you through an issue first.",
	},
	{
		question: "Do I need to write a blog post?",
		answer: "Yes! As part of the wrap-up phase (November 3rd), you'll need to write a short blog post about your journey, what you learned, and your experience with Kestra. This will be submitted for prize eligibility.",
	},
	{
		question: "Where can I get help during the event?",
		answer: "Join the <a href='https://kestra.io/slack' target='_blank' rel='noopener noreferrer' class='text-blue-700 underline hover:no-underline'>Kestra Slack community</a> and use the #contributors channel for questions. You can also reach out to us at contact@wemakedevs.org for event-specific queries.",
	},
];

const schedule = [
	{
		date: "2025-10-13T00:00:00Z",
		items: [
			{
				title: "Kickoff! Start using Kestra",
				description:
					"Start using Kestra, explore the project, and pick your first good issues. We'll guide you on how to make your first contribution and get comfortable with the workflow.",
				time: "2025-10-13T00:00:00Z",
			},
		],
	},
	{
		date: "2025-10-20T00:00:00Z",
		items: [
			{
				title: "Keep the momentum going",
				description:
					"Continue contributing to open issues, improve your existing PRs, and connect with maintainers or mentors for feedback and ideas.",
				time: "2025-10-20T00:00:00Z",
			},
		],
	},
	{
		date: "2025-10-27T00:00:00Z",
		items: [
			{
				title: "Deepen your impact",
				description:
					"Take on slightly bigger tasks, help others in the community, and share what you've learned. This is your chance to go beyond 'just contributing' and build confidence as an open source developer.",
				time: "2025-10-27T00:00:00Z",
			},
		],
	},
	{
		date: "2025-11-03T00:00:00Z",
		items: [
			{
				title: "Wrap-up & submissions",
				description:
					"Write a short blog post about your journey, what you learned, and your experience with Kestra. Submit it to be eligible for prizes and recognition. (The submission form will be emailed to everyone who registers)",
				time: "2025-11-03T00:00:00Z",
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
