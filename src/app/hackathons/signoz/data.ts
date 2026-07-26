import type { FaqType } from "@/types";

const DATA = {
	title: "Agents of SigNoz",
	titleCard: "Agents of SigNoz",
	prize: "MacBook Air, iPad Air, iPhone Air, AirPods Pro 3 / Beats Powerbeats Pro 2 & Job Interviews",
	startDate: "2026-07-20T00:00:00Z",
	endDate: "2026-07-26T23:59:00Z",
	description:
		"If you can't observe your AI agents, you don't own them. Instrument real systems with SigNoz, the OpenTelemetry-native observability platform, and make AI infrastructure fully debuggable.",
	descriptionCard:
		"Observe your AI solutions using SigNoz. The agency is recruiting, build agent-native observability with OpenTelemetry.",
	slug: "signoz",
	cta: {
		label: "Submit Project",
		href: "https://forms.gle/xv1TXSiC54MEWujRA",
		openInNewTab: true,
		disabled: false,
	},
	submissionFormUrl: "",
	blogSubmissionUrl: "https://forms.gle/wf9tFYcksrk6P4Zy8",
	blogWinnersDate: "July 19, 2026",
	slackUrl: "http://signoz.io/slack",
	githubUrl: "https://github.com/SigNoz/signoz",
};

const navLinks = [
	{
		href: "/hackathons/signoz",
		label: "Overview",
		page: "overview",
	},
	{
		href: "/hackathons/signoz/rules",
		label: "Rules",
		page: "rules",
	},
	{
		href: "/hackathons/signoz/resources",
		label: "Resources",
		page: "resources",
	},
	{
		href: "/hackathons/signoz/blog-guide",
		label: "Blog Guide",
		page: "blog-guide",
	},
	{
		href: "/hackathons/signoz/schedule",
		label: "Schedule",
		page: "schedule",
	},
];

const faqs: FaqType[] = [
	{
		question: "What are the eligibility criteria for this hackathon?",
		answer: "You must be above 16 years of age and follow the WeMakeDevs hackathon protocols. Teams can have 1-4 members. No neuralyzer required, just a willingness to see everything your systems are doing.",
	},
	{
		question: "Do I need prior experience with SigNoz?",
		answer: "Nope. SigNoz is open source and well documented. Start with the <a href='https://signoz.io/docs/introduction/' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>introduction</a>, read the <a href='https://signoz.io/docs/' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>docs</a>, and join the <a href='http://signoz.io/slack' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>SigNoz Slack</a> for help. You'll have traces, metrics, and logs flowing in minutes.",
	},
	{
		question: "Is the theme really open-ended?",
		answer: "Pick one of the three tracks or bring your own idea. Build anything, agents, dashboards, instrumentation libraries, SRE copilots, as long as it uses or integrates with SigNoz. The example builds on this page are just inspiration, not requirements.",
	},
	{
		question: "I registered solo. Can I switch to a team?",
		answer: "Of course. If you went solo and now want to assemble your own agency, just submit the registration form again with your team name and your profile will be updated automatically.",
	},
	{
		question: "Can I use existing projects or prior work?",
		answer: "All projects must be built from scratch after the hackathon begins. Using starter templates, SigNoz, OpenTelemetry SDKs, integrations, and boilerplates is permitted. Submitting a pre-existing project with minimal changes is not allowed.",
	},
	{
		question: "How do I set up SigNoz?",
		answer: "The easiest way is Foundry, which installs both SigNoz and its MCP server in one step. Follow the <a href='https://signoz.io/docs/install/docker/' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>Foundry quickstart</a> to spin it up with Docker, then instrument your app with OpenTelemetry to start streaming traces, metrics, and logs.",
	},
	{
		question: "Are AI assistants like ChatGPT or Copilot permitted?",
		answer: "Use of AI tools is permitted but must be declared in your submission. Failure to disclose will result in disqualification.",
	},
	{
		question: "What tech stack should I use?",
		answer: "Your project must use or integrate with <a href='https://github.com/SigNoz/signoz' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>SigNoz</a> for observability. Beyond that you're free to use any language, framework, or tool. SigNoz is OpenTelemetry-native, so your instrumentation works everywhere with zero vendor lock-in.",
	},
	{
		question: "How do I submit my project?",
		answer: "The project submission form is now live. Once your project is ready, submit it through the <a href='https://forms.gle/xv1TXSiC54MEWujRA' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>submission form</a> before the deadline. Make sure to include your demo, README, and any required details.",
	},
	{
		question: "Where can I get help during the hackathon?",
		answer: "Join the <a href='http://signoz.io/slack' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>SigNoz Slack</a> for technical support and community discussion. You can also reach WeMakeDevs at <a href='mailto:contact@wemakedevs.org' class='text-amber-300 underline hover:text-amber-200'>contact@wemakedevs.org</a>.",
	},
	{
		question: "Do the job interviews guarantee a job?",
		answer: "No. Interview opportunities at SigNoz do not guarantee a position, but they're a genuine chance to showcase your skills directly to the team building the open-source observability platform.",
	},
];

const schedule = [
	{
		date: "2026-07-15T00:00:00Z",
		items: [
			{
				title: "Office Hours: Blog Outline Workshop",
				description:
					"Daily office hours kick off. Bring your blog idea and leave with a solid outline, get help structuring your write-up, picking an angle, and deciding what to show.",
				time: "2026-07-15T19:30:00+05:30",
				links: [
					{
						platform: "linkedin",
						url: "https://www.linkedin.com/events/7483068952382889984",
					},
					{
						platform: "youtube",
						url: "https://www.youtube.com/live/1OiN39v1lFo",
					},
				],
			},
		],
	},
	{
		date: "2026-07-16T00:00:00Z",
		items: [
			{
				title: "Office Hours: Dashboard Building Challenge",
				description:
					"Build SigNoz dashboards live with the team. Learn the Query Builder and panel design hands-on as you turn traces, metrics, and logs into insight.",
				time: "2026-07-16T19:30:00+05:30",
				links: [
					{
						platform: "linkedin",
						url: "https://www.linkedin.com/events/7483412214830346240",
					},
					{
						platform: "youtube",
						url: "https://www.youtube.com/live/-tDZIPRxFJw",
					},
				],
			},
		],
	},
	{
		date: "2026-07-18T00:00:00Z",
		items: [
			{
				title: "Office Hours: Blog Reviews",
				description:
					"Get live feedback on your draft blog before you publish and submit. We'll help you tighten the story and make your experience shine.",
				time: "2026-07-18T19:30:00+05:30",
				links: [
					{
						platform: "linkedin",
						url: "https://www.linkedin.com/events/7484156541533679616",
					},
					{
						platform: "youtube",
						url: "https://www.youtube.com/live/EzKyA43AqGg",
					},
				],
			},
		],
	},
	{
		date: "2026-07-19T00:00:00Z",
		items: [
			{
				title: "SigNoz MCP Overview",
				description:
					"Put the SigNoz MCP server to work. Query telemetry, automate dashboards, and debug with your coding agent using the same observability data.",
				time: "2026-07-19T19:30:00+05:30",
				links: [
					{
						platform: "linkedin",
						url: "https://www.linkedin.com/events/7484157531485872128",
					},
					{
						platform: "youtube",
						url: "https://www.youtube.com/live/c0bvA5Q9n2U",
					},
				],
			},
			{
				title: "Blog Challenge Winners Announced",
				description:
					"The pre-event blog challenge wraps up today. Self-host SigNoz, send data, explore its features, and write about the one you like the most before now for an early win. The best blogs take their choice of AirPods Pro 3 or Beats Powerbeats Pro 2, announced right before the hackathon kicks off.",
				time: "2026-07-19T23:59:00+05:30",
				link: {
					name: "Submit Your Blog",
					url: "https://forms.gle/wf9tFYcksrk6P4Zy8",
				},
			},
		],
	},
	{
		date: "2026-07-20T00:00:00Z",
		items: [
			{
				title: "Hackathon Begins: Accept the Mission!",
				description:
					"The agency is live. Fire up SigNoz, instrument your systems with OpenTelemetry, and start building observability that sees everything.",
				time: "2026-07-20T00:00:00Z",
			},
			{
				title: "Streamlining AI Agent Observability",
				description:
					"Join the kickoff livestream for a deep dive into building with SigNoz and OpenTelemetry, live demos, and your questions answered as the hackathon gets underway.",
				time: "2026-07-20T19:30:00+05:30",
				links: [
					{
						platform: "linkedin",
						url: "https://www.linkedin.com/events/7479842316539736065",
					},
					{
						platform: "youtube",
						url: "https://youtube.com/live/rr9YHSV5bj0",
					},
				],
			},
		],
	},
	{
		date: "2026-07-23T00:00:00Z",
		items: [
			{
				title: "Mid-Hackathon Check-in",
				description:
					"Share your progress, get feedback from the SigNoz team, and connect with fellow agents in the SigNoz Slack.",
				time: "2026-07-23T15:00:00Z",
			},
		],
	},
	{
		date: "2026-07-26T00:00:00Z",
		items: [
			{
				title: "Final Submissions Due",
				description:
					"Submit your project before the deadline through the submission form, including everything required. The agency does not accept late field reports.",
				time: "2026-07-26T23:59:00+05:30",
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
