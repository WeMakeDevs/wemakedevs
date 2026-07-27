import type { FaqType } from "@/types";
import type { StaticImageData } from "next/image";
import aayush from "./images/speakers/aayush.jpg";
import adarsh from "./images/speakers/adarsh.jpg";
import ankit from "./images/speakers/ankit.jpg";
import goutham from "./images/speakers/goutham.jpg";
import kunal from "./images/speakers/kunal.jpg";
import pranay from "./images/speakers/pranay.jpg";
import sachin from "./images/speakers/sachin.jpg";

const DATA = {
	title: "Agents of SigNoz Edition 2",
	titleCard: "Agents of SigNoz Edition 2",
	greeting: "Hello San Francisco",
	tagline: "AI Observability Conference",
	prize: "A full day of talks, workshops and a hackathon in the same room",
	// Doors 08:30 PT → drinks until 19:30 PT on Aug 29, 2026 (UTC-7)
	startDate: "2026-08-29T15:30:00Z",
	endDate: "2026-08-30T02:30:00Z",
	description:
		"A single day on the hard part of shipping AI: seeing inside it. Traces, metrics, logs and token cost for agents, LLM apps and the infrastructure underneath, plus a one-day hackathon running in the same room.",
	descriptionCard:
		"One day, one room, one problem. The AI Observability Conference by WeMakeDevs, sponsored by SigNoz and Bright Data.",
	slug: "signoz",
	cta: {
		label: "Register Now",
		href: "#register",
		openInNewTab: false,
		disabled: false,
	},
	submissionFormUrl: "",
	blogSubmissionUrl: "https://forms.gle/wf9tFYcksrk6P4Zy8",
	blogWinnersDate: "July 19, 2026",
	slackUrl: "http://signoz.io/slack",
	githubUrl: "https://github.com/SigNoz/signoz",
	contactEmail: "contact@wemakedevs.org",
};

const venue = {
	name: "The Web Data Loft",
	host: "Bright Data",
	addressLines: [
		"625 2nd St, Suite 101",
		"San Francisco, CA 94107",
		"United States",
	],
	shortAddress: "625 2nd St, San Francisco",
	dateLabel: "Saturday, August 29, 2026",
	dateShort: "Aug 29, 2026",
	lat: "37.7816889",
	lng: "-122.3908867",
	get mapEmbedUrl() {
		return `https://maps.google.com/maps?q=${this.lat},${this.lng}&z=16&output=embed`;
	},
	get directionsUrl() {
		return `https://www.google.com/maps/search/?api=1&query=${this.lat}%2C${this.lng}`;
	},
	description:
		"Bright Data's community space for developers and AI builders in San Francisco. One room, one day, everyone shipping.",
	travel: [
		{
			mode: "Caltrain",
			detail: "4th & King is about a 10 minute walk. Best option from the Peninsula and South Bay.",
		},
		{
			mode: "Muni",
			detail: "The T Third and N Judah both stop within a few blocks; several bus lines run along 2nd and Bryant.",
		},
		{
			mode: "BART",
			detail: "Montgomery is roughly a 15 minute walk, or one short Muni hop.",
		},
		{
			mode: "Driving",
			detail: "Street parking in South Beach is tight on weekends. Use a nearby garage rather than circling.",
		},
		{
			mode: "Access",
			detail: "Photo ID needed for building access. The Loft is on one level and step-free from the street entrance.",
		},
	],
	facilities: [
		{ title: "Doors", detail: "08:30 registration, 09:15 first session." },
		{
			title: "Food",
			detail: "Breakfast, lunch, snacks and an open bar from 17:30. Dietary needs collected in the form.",
		},
		{
			title: "Wifi & power",
			detail: "Venue wifi and power at the workshop and hack tables. Bring your own adapter.",
		},
		{
			title: "Quiet space",
			detail: "A quiet room is available all day away from the stages.",
		},
	],
};

const stats = [
	{ value: "300", label: "Attendees" },
	{ value: "1", label: "Day" },
	{ value: "7", label: "Speakers" },
	{ value: "2", label: "Stages + Hack Room" },
];

const marqueeTopics = [
	"OpenTelemetry",
	"AI Agent Tracing",
	"Token Cost",
	"LLM Observability",
	"SRE Copilots",
	"Self-Hosted Inference",
	"Dashboards & SLOs",
	"One-Day Hackathon",
	"Open Source",
	"300 Engineers",
];

type Speaker = {
	name: string;
	role: string;
	org: string;
	photo: StaticImageData;
	talk?: string;
	link?: string;
};

const speakers: Speaker[] = [
	{
		name: "Kunal Kushwaha",
		role: "Founder",
		org: "WeMakeDevs",
		photo: kunal,
		talk: "Keynote — The Skills That Survive: Engineering When AI Writes the Code",
		link: "https://www.linkedin.com/in/kunal-kushwaha/",
	},
	{
		name: "Pranay Prateek",
		role: "Co-founder",
		org: "SigNoz",
		photo: pranay,
		talk: "Keynote — Every Signal in One Place: Observability Built for the AI Era",
		link: "https://www.linkedin.com/in/pranay01/",
	},
	{
		name: "Ankit Nayan",
		role: "Co-founder & CTO",
		org: "SigNoz",
		photo: ankit,
		talk: "Observability clinic",
		link: "https://www.linkedin.com/in/ankitnayan/",
	},
	{
		name: "Aayush Sharma",
		role: "Developer Relations Engineer",
		org: "SigNoz",
		photo: aayush,
		talk: "Observe Your AI Agents with SigNoz",
	},
	{
		name: "Goutham Karthi",
		role: "Engineering",
		org: "SigNoz",
		photo: goutham,
		talk: "Workshop — Using SigNoz to Debug Your Applications",
		link: "https://www.linkedin.com/in/goutham-karthi-6b0468186/",
	},
	{
		name: "Sachin Sharma",
		role: "CMO",
		org: "WeMakeDevs",
		photo: sachin,
		talk: "Scaling Developer Products and Building Right DevEx",
	},
	{
		name: "Adarsh Dubey",
		role: "Software Developer",
		org: "WeMakeDevs",
		photo: adarsh,
		talk: "Shipping AI You Can Actually Debug",
	},
];

type AgendaKind = "main" | "work" | "hack" | "break";

type AgendaSlot = {
	time: string;
	kind: AgendaKind;
	format?: string;
	title: string;
	who?: string;
	duration?: string;
};

/** Saturday, August 29, 2026 — all times Pacific. */
const agenda: AgendaSlot[] = [
	{
		time: "08:30",
		kind: "break",
		title: "Registration, coffee, breakfast",
	},
	{
		time: "09:15",
		kind: "main",
		title: "Welcome and how the day works",
		who: "Organiser",
	},
	{
		time: "09:30",
		kind: "main",
		format: "Keynote",
		title: "The Skills That Survive: Engineering When AI Writes the Code",
		who: "Kunal Kushwaha · Founder, WeMakeDevs",
		duration: "40 min",
	},
	{
		time: "10:10",
		kind: "main",
		format: "Keynote",
		title: "Every Signal in One Place: Observability Built for the AI Era",
		who: "Pranay Prateek · Co-founder, SigNoz",
		duration: "40 min",
	},
	{ time: "10:50", kind: "break", title: "Break" },
	{
		time: "11:05",
		kind: "main",
		format: "Open",
		title: "Lightning talks — five 5-min talks, sign-up sheet at registration",
		who: "Community",
	},
	{
		time: "11:30",
		kind: "main",
		format: "Talk",
		title: "Observe Your AI Agents with SigNoz",
		who: "Aayush Sharma · Developer Relations Engineer, SigNoz",
		duration: "35 min",
	},
	{ time: "12:05", kind: "break", title: "Lunch" },
	{
		time: "13:00",
		kind: "work",
		format: "Workshop",
		title: "Using SigNoz to Debug Your Applications",
		who: "Goutham",
		duration: "90 min, laptops out",
	},
	{ time: "14:30", kind: "break", title: "Break" },
	{
		time: "14:45",
		kind: "main",
		format: "Talk",
		title: "Scaling Developer Products and Building Right DevEx",
		who: "Sachin Sharma · CMO, WeMakeDevs",
		duration: "35 min",
	},
	{
		time: "15:20",
		kind: "main",
		format: "Talk",
		title: "Shipping AI You Can Actually Debug",
		who: "Adarsh",
		duration: "40 min",
	},
	{ time: "16:00", kind: "break", title: "Break" },
	{
		time: "16:15",
		kind: "hack",
		format: "Open",
		title: "Observability clinic — bring your stack, get it instrumented with the SigNoz team",
		who: "All speakers",
		duration: "50 min",
	},
	{
		time: "17:15",
		kind: "main",
		title: "Closing remarks",
		who: "Organiser",
	},
	{
		time: "17:30",
		kind: "break",
		title: "Networking and drinks until 19:30",
	},
];

const agendaLegend: { kind: AgendaKind; label: string }[] = [
	{ kind: "main", label: "Main stage" },
	{ kind: "work", label: "Workshop room" },
	{ kind: "hack", label: "Clinic / hack room" },
	{ kind: "break", label: "Break / social" },
];

const sponsors = [
	{
		tier: "Presenting Sponsor",
		name: "SigNoz",
		accent: "#e5502a",
		blurb: "The open-source, OpenTelemetry-native observability platform. Traces, metrics, logs, dashboards and token cost in one place, self-hosted or managed, with no proprietary agents and no lock-in. SigNoz leads the main-stage programme and runs the hands-on workshop track.",
		links: [
			{ label: "signoz.io", href: "https://signoz.io" },
			{ label: "GitHub", href: "https://github.com/SigNoz/signoz" },
			{ label: "Slack", href: "http://signoz.io/slack" },
		],
	},
	{
		tier: "Venue & Host Sponsor",
		name: "Bright Data",
		accent: "#5fe9ff",
		blurb: "Bright Data hosts the conference at The Web Data Loft, their community space for developers and AI builders in SF. The Loft provides the main stage, the workshop room and the dedicated hack room used for the one-day hackathon.",
		links: [
			{ label: "brightdata.com", href: "https://brightdata.com" },
			{ label: "See the venue", href: "#venue" },
		],
	},
];

/** Sessions streamed during Edition 1 of Agents of SigNoz. */
const previousWebinars = [
	{
		title: "Streamlining AI Agent Observability",
		date: "Streamed live on Jul 20, 2026",
		videoId: "rr9YHSV5bj0",
		blurb: "The Edition 1 kickoff: a deep dive into building with SigNoz and OpenTelemetry, live demos and community questions.",
	},
	{
		title: "SigNoz MCP Overview",
		date: "Streamed live on Jul 19, 2026",
		videoId: "c0bvA5Q9n2U",
		blurb: "Put the SigNoz MCP server to work. Query telemetry, automate dashboards and debug with your coding agent.",
	},
	{
		title: "Office Hours: Blog Reviews",
		date: "Streamed live on Jul 18, 2026",
		videoId: "EzKyA43AqGg",
		blurb: "Live feedback on draft blogs before publishing, tightening the story so the experience shines.",
	},
	{
		title: "Office Hours: Dashboard Building Challenge",
		date: "Streamed live on Jul 16, 2026",
		videoId: "-tDZIPRxFJw",
		blurb: "Building SigNoz dashboards live: the Query Builder and panel design, turning traces, metrics and logs into insight.",
	},
	{
		title: "Office Hours: Blog Outline Workshop",
		date: "Streamed live on Jul 15, 2026",
		videoId: "1OiN39v1lFo",
		blurb: "Bring a blog idea, leave with an outline: structuring the write-up, picking an angle and deciding what to show.",
	},
];

const navLinks = [
	{
		href: "/hackathons/signoz",
		label: "Overview",
		page: "overview",
	},
	{
		href: "/hackathons/signoz/schedule",
		label: "Agenda",
		page: "schedule",
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
];

const faqs: FaqType[] = [
	{
		question: "Who is this conference for?",
		answer: "Engineers who run things in production: platform and infrastructure engineers, SREs, backend and full-stack developers, and anyone building with LLMs or agents who has hit the wall of not being able to debug them. Founders and engineering leaders are welcome, but the programme is technical first.",
	},
	{
		question: "Is it really free?",
		answer: "Yes. Entry is free and includes food, drinks and swag. Because capacity at the Loft is capped at 300, you register rather than buy a ticket. There is no paid tier and no upsell.",
	},
	{
		question: "Registration is full. Can I still come?",
		answer: "The 300 seats are gone, but drop your name on the waitlist at the bottom of this page. Spots open up as people drop out and we release them in order, so it is genuinely worth joining.",
	},
	{
		question: "Do I need to know SigNoz or OpenTelemetry already?",
		answer: "No. The afternoon workshop starts from zero and gets you to a working trace. Main-stage talks are designed to be followable either way. If you want a head start, read the <a href='https://signoz.io/docs/introduction/' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>SigNoz introduction</a> beforehand.",
	},
	{
		question: "What is the hackathon and do I have to take part?",
		answer: "It is entirely optional. A hackathon runs in a dedicated room alongside the talks. You can attend the conference and ignore it completely, dip in and out, or spend the whole day building. Every project has to use or integrate with SigNoz; beyond that the brief is wide open.",
	},
	{
		question: "Can I join the hackathon solo?",
		answer: "Yes. Teams are up to four people and there is a team-forming board at registration, but solo entries are accepted and judged on the same criteria.",
	},
	{
		question: "What should I bring?",
		answer: "A laptop and charger if you want to do the workshop or the hackathon. Photo ID for building access at 625 2nd St. That is it.",
	},
	{
		question: "Will talks be recorded?",
		answer: "Main-stage talks are recorded and published on the <a href='https://youtube.com/@WeMakeDevs' target='_blank' rel='noopener noreferrer' class='text-amber-300 underline hover:text-amber-200'>WeMakeDevs YouTube channel</a> afterwards. Workshops are not recorded, since they are hands-on.",
	},
	{
		question: "Is there a code of conduct?",
		answer: "Yes, and it is enforced. This is a harassment-free event for everyone. Report anything to an organiser wearing a staff badge, or email <a href='mailto:contact@wemakedevs.org' class='text-amber-300 underline hover:text-amber-200'>contact@wemakedevs.org</a>.",
	},
	{
		question: "How do I get there, and is there parking?",
		answer: "The Loft is at 625 2nd St, a short walk from Caltrain 4th &amp; King and several Muni lines. Street parking in South Beach is limited on event days; nearby garages are the safer bet. Full details in the venue section above.",
	},
	{
		question: "Can my company sponsor, or can my community partner?",
		answer: "Both, yes. Community partners get member tickets plus a logo slot, and sponsorship covers stage time, workshop slots and booth space. Email <a href='mailto:contact@wemakedevs.org' class='text-amber-300 underline hover:text-amber-200'>contact@wemakedevs.org</a>.",
	},
];

export {
	DATA,
	navLinks,
	faqs,
	venue,
	stats,
	marqueeTopics,
	speakers,
	agenda,
	agendaLegend,
	sponsors,
	previousWebinars,
};
export type { Speaker, AgendaSlot, AgendaKind };
