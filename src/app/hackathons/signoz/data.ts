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
		label: "Register",
		href: "https://forms.gle/uxaLXAXmtKwz8uYh9",
		openInNewTab: true,
		disabled: false,
	},
	submissionFormUrl: "",
	blogSubmissionUrl: "https://forms.gle/wf9tFYcksrk6P4Zy8",
	blogWinnersDate: "July 19, 2026",
	slackUrl:
		"https://signoz-community.slack.com/join/shared_invite/zt-3x7z8ihiq-CJ6dU~OCOgp5nS1gTqwFTw#/shared-invite/email",
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
		answer: "Nope. SigNoz is open source and well documented. Start with the <a href='https://signoz.io/docs/introduction/' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>introduction</a>, read the <a href='https://signoz.io/docs/' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>docs</a>, and join the <a href='https://signoz-community.slack.com/join/shared_invite/zt-3x7z8ihiq-CJ6dU~OCOgp5nS1gTqwFTw#/shared-invite/email' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>SigNoz Slack</a> for help. You'll have traces, metrics, and logs flowing in minutes.",
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
		answer: "Submissions are via blogs this time. Each team writes a blog about their project, what you built, what you learnt, and how you used SigNoz, the more detailed the better, then submits it through the <a href='https://forms.gle/wf9tFYcksrk6P4Zy8' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>blog submission form</a> before the deadline.",
	},
	{
		question: "Where should I write and publish my blog?",
		answer: "Anywhere you like. Use your own platform or any publishing site, Substack, LinkedIn, dev.to, Medium, Hashnode, and so on. Just make sure the blog is public and drop the link in the submission form.",
	},
	{
		question: "What can I win?",
		answer: "$20,000 in prizes across three tracks. Win the AI & Agent Observability track and every team member gets a MacBook Air, win Signals & Dashboards and each member gets an iPad Air, and win Build Your Own and each member gets an iPhone Air. Top winners also get job interviews at SigNoz. The top 20 PRs earn $100 each, the best blogs win your choice of AirPods Pro 3 or Beats Powerbeats Pro 2, and the top 10 social posts get exclusive swag shipped to them.",
	},

	{
		question: "Where can I get help during the hackathon?",
		answer: "Join the <a href='https://signoz-community.slack.com/join/shared_invite/zt-3x7z8ihiq-CJ6dU~OCOgp5nS1gTqwFTw#/shared-invite/email' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>SigNoz Slack</a> for technical support and community discussion. You can also reach WeMakeDevs at <a href='mailto:contact@wemakedevs.org' class='text-amber-300 underline hover:text-amber-200'>contact@wemakedevs.org</a>.",
	},
	{
		question: "Do the job interviews guarantee a job?",
		answer: "No. Interview opportunities at SigNoz do not guarantee a position, but they're a genuine chance to showcase your skills directly to the team building the open-source observability platform.",
	},
	{
		question: "What are the judging criteria?",
		answer: "Projects are evaluated on Potential Impact, Creativity & Innovation, Technical Excellence, Best Use of SigNoz, User Experience, and Presentation Quality. The deeper you lean on SigNoz, the better.",
	},
];

const schedule = [
	{
		date: "2026-07-19T00:00:00Z",
		items: [
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
					"Submit your project as a blog before the deadline. Write about what you built, what you learnt, and how you used SigNoz, the more detailed the better. The agency does not accept late field reports.",
				time: "2026-07-26T23:59:00Z",
				link: {
					name: "Submit Your Blog",
					url: "https://forms.gle/wf9tFYcksrk6P4Zy8",
				},
			},
		],
	},
];

export { DATA, navLinks, faqs, schedule };
