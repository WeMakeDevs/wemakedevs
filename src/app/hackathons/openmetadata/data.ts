import type { FaqType } from "@/types";

const DATA = {
	title: "Back to the Metadata",
	prize: "MacBook Neo, iPad Tablet & Keychron Keyboards",
	startDate: "2026-04-17T00:00:00Z",
	endDate: "2026-04-26T23:59:00Z",
	description:
		"Great Scott! Travel through time and build the future of data discovery, observability, and governance with OpenMetadata.",
	descriptionCard:
		"Build the future of metadata with OpenMetadata. Where we're going, we don't need silos.",
	slug: "openmetadata",
	cta: {
		label: "Register Now",
		href: "https://forms.gle/gogMB2AjCbeFQdZZ8",
		openInNewTab: true,
		disabled: false,
	},
	submissionFormUrl: undefined,
};

const navLinks = [
	{
		href: "/hackathons/openmetadata",
		label: "Overview",
		page: "overview",
	},
	{
		href: "/hackathons/openmetadata/rules",
		label: "Rules",
		page: "rules",
	},
	{
		href: "/hackathons/openmetadata/resources",
		label: "Resources",
		page: "resources",
	},
	{
		href: "/hackathons/openmetadata/schedule",
		label: "Schedule",
		page: "schedule",
	},
];

const faqs: FaqType[] = [
	{
		question: "What are the eligibility criteria for this hackathon?",
		answer: "You must be above 16 years of age and follow the WeMakeDevs hackathon protocols. Teams can have 1-4 members. No flux capacitor required.",
	},
	{
		question: "Do I need prior experience with OpenMetadata?",
		answer: "Negative, time traveler! OpenMetadata is open source and well-documented. We'll provide getting-started resources, a livestream walkthrough, and the <a href='https://slack.open-metadata.org' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>OpenMetadata Slack</a> for support. Start your time circuits now!",
	},
	{
		question: "I registered solo. Can I switch to a team?",
		answer: "Affirmative! If you initially went solo and now want to assemble a crew, simply submit the registration form again with your team name. Your profile will be updated automatically.",
	},
	{
		question: "Can I use existing projects or prior work?",
		answer: "All projects must be built from scratch after the hackathon commences. Using starter templates, OpenMetadata's existing APIs, and boilerplates is permitted. But simply submitting a pre-existing project with minimal changes will get you sent back to 1955.",
	},
	{
		question: "How do I set up OpenMetadata locally?",
		answer: "Install <a href='https://www.docker.com/products/docker-desktop/' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>Docker Desktop</a> and follow the <a href='https://docs.open-metadata.org/v1.12.x/quick-start/local-docker-deployment' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>OpenMetadata Docker Quickstart</a> to run OpenMetadata locally. To set up a development environment for contributing to OpenMetadata itself, use the <a href='https://docs.open-metadata.org/v1.12.x/developers/contribute/development-environment-setup' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>development environment setup</a> guide. Curated links for both are on the hackathon <a href='/hackathons/openmetadata/resources' class='text-amber-400 underline hover:text-amber-300'>Resources</a> page. You'll have a running instance in minutes—faster than 88 mph!",
	},
	{
		question: "Are AI assistants like ChatGPT or Copilot permitted?",
		answer: "Use of AI tools is permitted but must be declared in your submission. Failure to disclose will result in disqualification. Remember: the future is about transparency!",
	},
	{
		question: "What tech stack should I use?",
		answer: "Your project must integrate with or extend <a href='https://github.com/open-metadata/OpenMetadata' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>OpenMetadata</a>. Beyond that, you're free to use any language, framework, or tool. Python, Java, TypeScript, all roads lead to the future.",
	},
	{
		question: "Do I have to pick an idea from the GitHub project board?",
		answer: "Not at all! The hackathon theme is completely open-ended. The ideas on the <a href='https://github.com/orgs/open-metadata/projects/107/views/1?pane=info' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>GitHub project board</a> are just suggestions to get you started. You can build anything you want — your own original idea is equally welcome — as long as it uses or integrates with OpenMetadata.",
	},
	{
		question: "Where can I get help during the hackathon?",
		answer: "Join the <a href='https://slack.open-metadata.org' target='_blank' rel='noopener noreferrer' class='text-amber-400 underline hover:text-amber-300'>OpenMetadata Slack</a> for technical support and community discussion. You can also reach WeMakeDevs at <a href='mailto:contact@wemakedevs.org' class='text-amber-400 underline hover:text-amber-300'>contact@wemakedevs.org</a>.",
	},
	{
		question: "What are the judging criteria?",
		answer: "Projects will be evaluated on: Potential Impact, Creativity & Innovation, Technical Excellence, Best Use of OpenMetadata, User Experience, and Presentation Quality. The more deeply you integrate OpenMetadata, the better!",
	},
	{
		question: "Will winners get job opportunities?",
		answer: "Yes! Top winners will get interview opportunities at Collate (the company behind OpenMetadata). This is a genuine chance to showcase your skills for a career in the data platform space.",
	},
];

const schedule = [
	{
		date: "2026-04-13T00:00:00Z",
		items: [
			{
				title: "Kickoff Livestream: Getting Started with OpenMetadata",
				description:
					"Join us for the official kickoff where we'll introduce OpenMetadata, walk through setup, and reveal hackathon objectives. Get a head start before the build phase begins!",
				time: "2026-04-13T15:00:00Z",
				links: [
					{
						platform: "youtube",
						url: "https://youtube.com/live/lLKGrzqM7-U?feature=share",
					},
				],
			},
		],
	},
	{
		date: "2026-04-17T00:00:00Z",
		items: [
			{
				title: "Hackathon Begins: Start Building!",
				description:
					"The DeLorean has arrived. Fire up your flux capacitors and start building!",
				time: "2026-04-17T00:00:00Z",
			},
		],
	},
	{
		date: "2026-04-21T00:00:00Z",
		items: [
			{
				title: "Mid-Hackathon Check-in",
				description:
					"Share your progress, get feedback from the OpenMetadata team, and connect with fellow hackers.",
				time: "2026-04-21T15:00:00Z",
			},
		],
	},
	{
		date: "2026-04-26T00:00:00Z",
		items: [
			{
				title: "Final Submissions Due",
				description:
					"Submit your project before the deadline. Don't be late, this isn't a time machine!",
				time: "2026-04-26T23:59:00Z",
			},
		],
	},
];

const ideaCategories = [
	{
		title: "MCP Ecosystem & AI Agents",
		icon: "brain",
		description:
			"Build MCP servers, AI agents, or intelligent assistants that interact with OpenMetadata's APIs. Think auto-classification, smart data discovery, or natural language metadata queries.",
		color: "from-violet-500 to-purple-600",
	},
	{
		title: "Data Observability",
		icon: "eye",
		description:
			"Create monitoring dashboards, data quality alert systems, anomaly detection tools, or pipeline health monitors that leverage OpenMetadata's observability features.",
		color: "from-blue-500 to-cyan-600",
	},
	{
		title: "OpenMetadata Connectors & Ingestion",
		icon: "plug",
		description:
			"Build new connectors for data sources, improve ingestion frameworks, create ETL integrations, or extend metadata ingestion to new platforms and databases.",
		color: "from-green-500 to-emerald-600",
	},
	{
		title: "Developer Tooling & CI/CD",
		icon: "wrench",
		description:
			"Build CLI tools, GitHub Actions, CI/CD integrations, IDE plugins, or developer-facing utilities that make working with metadata effortless.",
		color: "from-amber-500 to-orange-600",
	},
	{
		title: "Community & Communication Apps",
		icon: "message",
		description:
			"Build Slack bots, notification systems, collaboration tools, or community dashboards that leverage OpenMetadata to keep teams informed and aligned.",
		color: "from-pink-500 to-rose-600",
	},
	{
		title: "Governance & Classification",
		icon: "shield",
		description:
			"Build governance automation, auto-tagging, PII detection, compliance tools, or policy enforcement systems powered by OpenMetadata's classification capabilities.",
		color: "from-red-500 to-rose-600",
	},
];

export { DATA, navLinks, faqs, schedule, ideaCategories };
