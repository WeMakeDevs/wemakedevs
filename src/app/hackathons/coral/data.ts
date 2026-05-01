import type { FaqType } from "@/types";

const DATA = {
	title: "Pirates of the Coral-bean: Dead Men Tell No SQL",
	prize: "$10,000+",
	startDate: "2026-05-18T08:00:00+05:30",
	endDate: "2026-05-24T23:59:59+05:30",
	description:
		"Hoist the Jolly Roger and set sail on the high seas of data! Build agents that query any API, database, or file as SQL, powered by Coral. No ETL, no warehouse, no glue code. Just you, your crew, and the open ocean of data.",
	descriptionCard:
		"Build agents powered by Coral. Query any API, database, or file as SQL. $10K+ in treasure awaits.",
	slug: "coral",
	cta: {
		label: "Register Now",
		href: "https://forms.gle/dxBPLK17A8dXwp64A",
		openInNewTab: true,
		disabled: false,
	},
	showDate: true,
	prizes: {
		winning: [
			{
				name: "Top 3 Winners",
				prize: "MacBook + iPhone 17 + exclusive swag",
			},
		],
		giveaway: [
			{
				name: "Community Rewards",
				prize: "Top 10 social sharers win swag boxes",
				details: {
					requirements: [
						"Star the Coral repo + join Discord and post about participation tagging Coral",
					],
					links: {
						github: "https://github.com/withcoral/coral",
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
		answer: "Click the <a href='https://forms.gle/dxBPLK17A8dXwp64A' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Register Now</a> button to sign up. You must also ⭐ star the <a href='https://github.com/withcoral/coral' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Coral GitHub repo</a> and join the <a href='https://withcoral.com/discord' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Coral Discord</a> to be eligible.",
	},
	{
		question: "What is Coral?",
		answer: "Coral is an open-source data retrieval layer for agents that lets them query any API, database, or file as SQL tables. It handles auth, pagination, rate limits, cross-source joins, schema learning, and caching. No ETL, no warehouse, no glue code. Run it from the CLI or through MCP. Everything is local. Credentials, data, and usage history never leave your machine.",
	},
	{
		question: "What kind of projects can I build?",
		answer: "Two types of projects are encouraged: (1) Build an agent for a use case that retrieves data across multiple sources using Coral. Describe how you did it and what's great about it. (2) Build a new source connector for Coral. Follow the <a href='https://withcoral.com/docs/guides/write-a-custom-source' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>custom source guide</a> and describe how you built it.",
	},
	{
		question: "Eligibility criteria to participate?",
		answer: "You should be above 16 years of age and abide by the rules of WeMakeDevs hackathons. Teams can have 1 to 4 members. You must star the Coral repo and join the Coral Discord to be eligible.",
	},
	{
		question: "Who is this hackathon for?",
		answer: "This hackathon is for 'agent builders'. Developers actively building and experimenting with AI agents professionally or for personal projects. This includes AI Engineers, LLM Engineers, ML Engineers, Founding Engineers, and any 'agent-pilled' software engineers.",
	},
	{
		question: "Can I use existing or previously made projects?",
		answer: "No, ye must start building only after the hackathon begins. No pre-built treasure allowed. Your ship should be freshly launched!",
	},
	{
		question: "Are we allowed to use AI tools like ChatGPT?",
		answer: "Aye! But declare it when submitting your project. Failing to do so will result in walking the plank (disqualification).",
	},
	{
		question: "Where can I get help during the hackathon?",
		answer: "Join the <a href='https://withcoral.com/discord' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Coral Discord</a> and ask questions in the #help-and-questions channel. The Coral crew will be standing by!",
	},
	{
		question: "What are the entry requirements?",
		answer: "Two things: (1) ⭐ Star the <a href='https://github.com/withcoral/coral' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Coral GitHub repo</a>, and (2) Join the <a href='https://withcoral.com/discord' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Coral Discord</a>. Then register through the hackathon page.",
	},
];

const schedule = [
	{
		date: "2026-05-18T00:00:00+05:30",
		items: [
			{
				title: "⚓ Set Sail: Hacking Begins",
				time: "2026-05-18T08:00:00+05:30",
			},
			{
				title: "🎬 Livestream Kickoff with Matt (Coral Co-founder & CEO)",
				description:
					"Meet the captain of the Coral ship! Matt walks through Coral, live demos, and answers your questions.",
				time: "2026-05-18T21:30:00+05:30",
				links: [
					{
						platform: "youtube",
						url: "https://youtube.com/@WeMakeDevs",
					},
				],
			},
		],
	},
	{
		date: "2026-05-20T00:00:00+05:30",
		items: [
			{
				title: "⚡ Query of the Day Challenge",
				description:
					"Post a creative challenge query. First person to run it successfully and share the output wins a prize!",
				time: "2026-05-20T18:00:00+05:30",
				link: {
					name: "Discord",
					url: "https://withcoral.com/discord",
				},
			},
			{
				title: "🐠 Coral Creature of the Day",
				description:
					"Daily highlight: most creative project, funniest bug, or wildest query. Today's Sea Urchin Award goes to...",
				time: "2026-05-20T23:00:00+05:30",
			},
		],
	},
	{
		date: "2026-05-21T00:00:00+05:30",
		items: [
			{
				title: "🎤 Lightning Demos: 30-min Discord Voice Channel",
				description:
					"Anyone can do a 2-min live demo of their WIP. Cross-pollinate ideas with fellow pirates!",
				time: "2026-05-21T21:30:00+05:30",
				link: {
					name: "Discord",
					url: "https://withcoral.com/discord",
				},
			},
		],
	},
	{
		date: "2026-05-22T00:00:00+05:30",
		items: [
			{
				title: "⏰ 48 Hours Left: Craziest Queries So Far",
				description:
					"Countdown content drop: here's the wildest queries and projects we've seen so far!",
				time: "2026-05-22T18:00:00+05:30",
			},
			{
				title: "🐠 Coral Creature of the Day",
				description:
					"Another round of highlights. Most creative project, funniest bug, or wildest query gets the Sea Urchin Award!",
				time: "2026-05-22T23:00:00+05:30",
			},
		],
	},
	{
		date: "2026-05-23T00:00:00+05:30",
		items: [
			{
				title: "⏰ 24 Hours Left: Final Push!",
				description:
					"Last call to polish your treasure. Final countdown content drop.",
				time: "2026-05-23T18:00:00+05:30",
			},
		],
	},
	{
		date: "2026-05-24T00:00:00+05:30",
		items: [
			{
				title: "🏴‍☠️ Land Ho: Hacking Ends",
				time: "2026-05-24T20:00:00+05:30",
			},
			{
				title: "📜 Submissions Due: Deliver Your Treasure",
				time: "2026-05-24T23:59:59+05:30",
				link: {
					name: "Submit Your Project",
					url: "https://forms.gle/dxBPLK17A8dXwp64A",
				},
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
