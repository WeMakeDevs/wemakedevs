import type { FaqType } from "@/types";
import { images } from "./images";

const DATA = {
	title: "WeMakeDevs Open Source Fest",
	prize: "Interview at Kestra!",
	startDate: "2025-10-14T04:30:00Z",
	endDate: "2025-11-03T23:59:59Z",
	description:
		"A month-long challenge where you'll contribute to real-world open source projects",
	descriptionCard:
		"Learn how open source truly works with mentorship and clear guidelines!",
	slug: "opensourcefest25",
	images,
	cta: {
		label: "Partner with us",
		href: "https://www.wemakedevs.org/#partners",
		openInNewTab: false,
		disabled: false,
	},
	prizes: {
		winning: [
			{
				name: "Top Contributors",
				prize: "Interview at Kestra",
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
	// {
	// 	href: `/hackathons/${DATA.slug}/schedule`,
	// 	label: "Schedule",
	// 	page: "schedule",
	// },
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
		answer: "Join the <a href='https://kestra.io/slack' target='_blank' rel='noopener noreferrer' class='text-blue-700 underline hover:no-underline'>Kestra Slack community</a> and check out the <a href='https://www.wemakedevs.org/hackathons/opensourcefest25/resources' target='_blank' rel='noopener noreferrer' class='text-blue-700 underline hover:no-underline'>Resources</a> section for getting started guides and documentation. Also read the <a href='https://kestra.io/docs/getting-started/contributing' target='_blank' rel='noopener noreferrer' class='text-blue-700 underline hover:no-underline'>Kestra Contributing Guide</a>.",
	},
	{
		question: "What kind of contributions count for this event?",
		answer: "Any meaningful contribution to Kestra counts, please pick from the <a href='https://github.com/kestra-io/kestra/issues' target='_blank' rel='noopener noreferrer' class='text-blue-700 underline hover:no-underline'>Kestra issue tracker</a> and get it assigned first. Examples include adding plugins, fixing frontend, backend changes, bug fixes, feature additions, documentation improvements, or helping other contributors.",
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
