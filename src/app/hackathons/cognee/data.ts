import type { FaqType } from "@/types";

const DATA = {
	title: "The Hangover Part AI: Where's My Context?",
	titleCard: "The Hangover Part AI",
	prize: "MacBooks, iPads, Keychron Keyboards & Job Interviews",
	startDate: "2026-06-29T00:00:00Z",
	endDate: "2026-07-05T23:59:00Z",
	description:
		"Your AI woke up in Vegas with no memory of last night. Build AI that doesn't forget with Cognee's self-hosted, hybrid graph-vector memory layer.",
	descriptionCard:
		"What happens in the context window doesn't have to stay there. Build AI that doesn't forget with Cognee.",
	slug: "cognee",
	cta: {
		label: "Register Now",
		href: "https://forms.gle/aGefvBfYfAMux5sL9",
		openInNewTab: true,
		disabled: false,
	},
	submissionFormUrl: "",
	discordUrl: "https://discord.com/invite/m63hxKsp4p",
};

const navLinks = [
	{
		href: "/hackathons/cognee",
		label: "Overview",
		page: "overview",
	},
	{
		href: "/hackathons/cognee/rules",
		label: "Rules",
		page: "rules",
	},
	{
		href: "/hackathons/cognee/resources",
		label: "Resources",
		page: "resources",
	},
	{
		href: "/hackathons/cognee/schedule",
		label: "Schedule",
		page: "schedule",
	},
];

const faqs: FaqType[] = [
	{
		question: "What are the eligibility criteria for this hackathon?",
		answer: "You must be above 16 years of age and follow the WeMakeDevs hackathon protocols. Teams can have 1-4 members. No tigers in the bathroom required.",
	},
	{
		question: "Do I need prior experience with Cognee?",
		answer: "Nope. Cognee is open source and well documented. Start with the <a href='https://docs.cognee.ai/guides/self-improvement-quickstart' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>self-improvement quickstart</a>, read the <a href='https://docs.cognee.ai' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>docs</a>, and join the <a href='https://discord.com/invite/m63hxKsp4p' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>Discord</a> for help. You'll give your agent a memory in minutes.",
	},
	{
		question: "Is the theme really open-ended?",
		answer: "Yes. Build literally anything you want, agents, apps, tools, games, automations, as long as it uses Cognee for memory. The examples on this page are just inspiration to spark ideas, not requirements.",
	},
	{
		question: "I registered solo. Can I switch to a team?",
		answer: "Of course. If you went solo and now want to assemble your own Wolfpack, just submit the registration form again with your team name and your profile will be updated automatically.",
	},
	{
		question: "Can I use existing projects or prior work?",
		answer: "All projects must be built from scratch after the hackathon begins. Using starter templates, Cognee's APIs, integrations, and boilerplates is permitted. Submitting a pre-existing project with minimal changes is not allowed.",
	},
	{
		question: "How do I set up Cognee?",
		answer: "Cognee is self-hosted and pip-installable. Follow the <a href='https://docs.cognee.ai/guides/self-improvement-quickstart' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>quickstart</a> to spin up your memory layer locally, then call <code>remember()</code> and <code>recall()</code> to give your agent permanent context.",
	},
	{
		question: "Are AI assistants like ChatGPT or Copilot permitted?",
		answer: "Use of AI tools is permitted but must be declared in your submission. Failure to disclose will result in disqualification.",
	},
	{
		question: "What tech stack should I use?",
		answer: "Your project must use <a href='https://github.com/topoteretes/cognee' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>Cognee</a> for memory. Beyond that you're free to use any language, framework, or tool, and you can leverage plug-and-play integrations for Claude Code, Codex, n8n, and OpenClaw, plus the MCP server for your favorite IDE agents.",
	},
	{
		question: "What can I win?",
		answer: "$10,000 in prizes. Top winners get job interviews at Cognee. Best use of open source wins a MacBook per team member, best use of Cognee Cloud wins an iPad per team member, the top 20 PRs earn $100 each, the best blogs win a Keychron mechanical keyboard, and the top 10 social posts get exclusive swag shipped to them.",
	},
	{
		question: "Where can I get help during the hackathon?",
		answer: "Join the <a href='https://discord.com/invite/m63hxKsp4p' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>Discord</a> for technical support and community discussion. You can also reach WeMakeDevs at <a href='mailto:contact@wemakedevs.org' class='text-amber-300 underline hover:text-amber-200'>contact@wemakedevs.org</a>.",
	},
	{
		question: "Do the job interviews guarantee a job?",
		answer: "No. Interview opportunities at Cognee do not guarantee a position, but they're a genuine chance to showcase your skills directly to the team building the memory layer for AI.",
	},
	{
		question: "What are the judging criteria?",
		answer: "Projects are evaluated on Potential Impact, Creativity & Innovation, Technical Excellence, Best Use of Cognee, User Experience, and Presentation Quality. The more deeply you lean on Cognee's memory APIs, the better.",
	},
];

const schedule = [
	{
		date: "2026-06-29T00:00:00Z",
		items: [
			{
				title: "Hackathon Begins: Start Building!",
				description:
					"The lights of Vegas are on. Fire up Cognee, give your agents a memory, and start building AI that doesn't forget.",
				time: "2026-06-29T00:00:00Z",
			},
			{
				title: "Livestream: Building with Cognee",
				description:
					"Tune in to the livestream for a deep dive into building with Cognee, live demos, and your questions answered as the hackathon gets underway.",
				time: "2026-06-29T15:00:00Z",
			},
		],
	},
	{
		date: "2026-07-02T00:00:00Z",
		items: [
			{
				title: "Mid-Hackathon Check-in",
				description:
					"Share your progress, get feedback from the Cognee team, and connect with fellow hackers in the Discord.",
				time: "2026-07-02T15:00:00Z",
			},
		],
	},
	{
		date: "2026-07-05T00:00:00Z",
		items: [
			{
				title: "Final Submissions Due",
				description:
					"Submit your project before the deadline. Don't let your memory of the deadline slip away.",
				time: "2026-07-05T23:59:00Z",
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
