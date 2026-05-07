import type { FaqType } from "@/types";

const DATA = {
	title: "Pirates of the Coral-bean",
	prize: "$10,000+",
	startDate: "2026-05-25T08:00:00+05:30",
	endDate: "2026-05-31T23:59:59+05:30",
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
				name: "Track 1: Enterprise Agent Winners",
				prize: "MacBook Neo for every teammate (up to 4) + exclusive swag",
			},
			{
				name: "Track 2: Personal Agent Winners",
				prize: "Apple iPad for every teammate (up to 4) + exclusive swag",
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
						github: "https://git.new/coral-wemakedevs-may26",
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
		answer: "Click the <a href='https://forms.gle/dxBPLK17A8dXwp64A' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Register Now</a> button to sign up. You must also ⭐ star the <a href='https://git.new/coral-wemakedevs-may26' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Coral GitHub repo</a> and join the <a href='https://withcoral.com/discord' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Coral Discord</a> to be eligible.",
	},
	{
		question: "What is Coral?",
		answer: "Coral is an open-source data retrieval layer for agents that lets them query any API, database, or file as SQL tables. It handles auth, pagination, rate limits, cross-source joins, schema learning, and caching. No ETL, no warehouse, no glue code. Run it from the CLI or through MCP. Everything is local. Credentials, data, and usage history never leave your machine.",
	},
	{
		question: "What kind of projects can I build?",
		answer: "Two tracks to choose from: (1) Build an enterprise agent that retrieves data across multiple sources using Coral to solve a real problem for an organisation. (2) Build a personal agent that makes your own workflow more productive. See the Tracks section for example voyages. If the source you need doesn't exist yet, build it yourself and earn a special bounty!",
	},
	{
		question: "Eligibility criteria to participate?",
		answer: "You should be above 16 years of age and abide by the rules of WeMakeDevs hackathons. Teams can have 1 to 4 members, and every member of the winning team will receive the prize individually (each teammate gets their own MacBook Neo or Apple iPad). You must star the Coral repo and join the Coral Discord to be eligible.",
	},
	{
		question: "Who is this hackathon for?",
		answer: "Anyone actively building and experimenting with AI agents professionally or for personal projects, and frustrated with retrieving accurate data across multiple sources.",
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
		answer: "Join the <a href='https://withcoral.com/discord' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Coral Discord</a>. Ask Coral-related questions in <span class='text-amber-400 font-mono'>#support-questions</span> and hackathon-related questions in <span class='text-amber-400 font-mono'>#hackathon-wemakedevs-may26</span>. The Coral crew will be standing by!",
	},
	{
		question: "What are the entry requirements?",
		answer: "Two things: (1) ⭐ Star the <a href='https://git.new/coral-wemakedevs-may26' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Coral GitHub repo</a>, and (2) Join the <a href='https://withcoral.com/discord' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Coral Discord</a>. Then register through the hackathon page.",
	},
];

const schedule = [
	{
		date: "2026-05-22T00:00:00+05:30",
		items: [
			{
				title: "📺 Video Tutorial on Kunal's YouTube",
				description:
					"Video tutorial up on this channel.",
				link: {
					name: "youtube.com/@KunalKushwaha",
					url: "https://www.youtube.com/@KunalKushwaha",
				},
			},
		],
	},
	{
		date: "2026-05-25T00:00:00+05:30",
		items: [
			{
				title: "⚓ Set Sail: Hacking Begins",
				time: "2026-05-25T08:00:00+05:30",
			},
			{
				title: "🎬 Livestream Kickoff with Matt (Coral Co-founder & CEO)",
				description:
					"Meet the captain of the Coral ship! Matt walks through Coral, live demos, and answers your questions.",
				time: "2026-05-25T21:30:00+05:30",
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
		date: "2026-05-28T00:00:00+05:30",
		items: [
			{
				title: "🎤 Lightning Demos: 30-min Discord Voice Channel",
				description:
					"Anyone can do a 2-min live demo of their WIP. Cross-pollinate ideas with fellow pirates!",
				time: "2026-05-28T15:00:00+02:00",
				link: {
					name: "Discord",
					url: "https://withcoral.com/discord",
				},
			},
		],
	},
	{
		date: "2026-05-31T00:00:00+05:30",
		items: [
			{
				title: "🏴‍☠️ Land Ho: Hacking Ends",
				time: "2026-05-31T20:00:00+05:30",
			},
			{
				title: "📜 Submissions Due: Deliver Your Treasure",
				time: "2026-05-31T23:59:59+05:30",
				link: {
					name: "Submit Your Project",
					url: "https://forms.gle/dxBPLK17A8dXwp64A",
				},
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
