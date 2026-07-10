import type { BuilderStep, Faq, TimelineStop } from "./types";

export const DATA = {
	title: "AWS Next Gen Hacks 2026",
	slug: "aws",
	prize: "$100,000+",
	description:
		"Six hybrid hackathons across India. Build with AWS online or on site, and top teams win a sponsored trip to Las Vegas.",
	registerHref: "#register",
	communityHref: "https://wemakedevs.org",
};

export const navLinks = [
	{ label: "About", href: "#top" },
	{ label: "Hackathons", href: "#hubs" },
	{ label: "Resources", href: "#builder" },
	{ label: "FAQ", href: "#faqs" },
];

export const timeline: TimelineStop[] = [
	{
		id: "all",
		city: "Five stops across India",
		subtitle: "The Route",
		blurb:
			"AWS Next Gen Hacks tours five Indian tech hubs through 2026. Each city runs as a hybrid hackathon that you can join in person or fully online. The strongest teams earn a fully sponsored trip to the final stop in Las Vegas.",
	},
	{
		id: "bangalore",
		stop: "Stop 01",
		city: "Bangalore",
		subtitle: "India's startup capital",
		date: "Jul 27 to Aug 2, 2026",
		blurb:
			"Kick off the tour with a GenAI and serverless focused build sprint alongside Bangalore's startup community.",
		tags: ["GenAI track", "Startup demo day"],
	},
	{
		id: "delhi",
		stop: "Stop 02",
		city: "Delhi",
		subtitle: "The capital hub",
		date: "Aug 17 to 23, 2026",
		blurb:
			"Builders from across North India converge for tracks spanning fintech, public sector scale, and cloud security.",
		tags: ["Fintech track", "Scale and security"],
	},
	{
		id: "mumbai",
		stop: "Stop 03",
		city: "Mumbai",
		subtitle: "Finance and media capital",
		date: "Sep 7 to 13, 2026",
		blurb:
			"Ship for high throughput fintech and media streaming workloads with mentors from Mumbai's enterprise scene.",
		tags: ["Media and streaming", "High scale APIs"],
	},
	{
		id: "hyderabad",
		stop: "Stop 04",
		city: "Hyderabad",
		subtitle: "Cyberabad",
		date: "Oct 5 to 11, 2026",
		blurb:
			"A data and machine learning heavy stop, with deep dives into analytics pipelines and model deployment on AWS.",
		tags: ["Data and ML", "MLOps labs"],
	},
	{
		id: "chennai",
		stop: "Stop 05",
		city: "Chennai",
		subtitle: "SaaS and IoT hub",
		date: "Nov 16 to 22, 2026",
		blurb:
			"Close out the Indian leg building for IoT, manufacturing, and SaaS, with a strong hardware plus cloud crossover.",
		tags: ["IoT and edge", "SaaS builds"],
	},
	{
		id: "vegas",
		stop: "Stop 06",
		city: "Las Vegas",
		subtitle: "Nevada, USA",
		date: "Dec 7 to 13, 2026",
		blurb:
			"The tour's last stop. Top teams from the Indian legs win a fully sponsored trip to Las Vegas to showcase what they built on a global stage. It is a celebration and showcase, not another competition.",
		tags: ["Sponsored flights", "Hotel and lodging covered", "Venue passes"],
		finale: true,
	},
];

// City coordinates in the India map viewBox (0 0 400 460)
export const cityCoords: Record<string, [number, number]> = {
	delhi: [188, 150],
	mumbai: [128, 262],
	hyderabad: [182, 288],
	bangalore: [172, 350],
	chennai: [205, 342],
};

export const builderSteps: BuilderStep[] = [
	{
		key: "LEARN",
		desc: "Explore 600+ courses and workshops curated by AWS Solutions Architects and industry experts.",
	},
	{
		key: "BUILD",
		desc: "Turn theoretical cloud concepts into scalable, live production-ready code with step-by-step guides.",
	},
	{
		key: "SHARE",
		desc: "Write articles, document your architecture diagrams, and publish your setup stories to build developer authority.",
	},
	{
		key: "GROW",
		desc: "Become part of the AWS community, join regional Cloud Clubs, and keep leveling up your cloud and AI skills with hands on projects.",
	},
];

export const sessionTopics = [
	{
		title: "Hands on workshops",
		desc: "Build serverless apps, GenAI features, and ML pipelines step by step on AWS.",
	},
	{
		title: "Live Q&A and mentorship",
		desc: "Bring your blockers to the experts and get unstuck while you build.",
	},
	{
		title: "Cloud and AI deep dives",
		desc: "Sharpen the skills that matter, taught by people who build with them daily.",
	},
];

export const faqs: Faq[] = [
	{
		q: "Is each hackathon in person or online?",
		a: "Every city is a hybrid event. You can take part on the ground at the venue or join fully online, whichever works for you.",
	},
	{
		q: "Can I take part in more than one city?",
		a: "Yes, you are welcome to register across multiple cities. Each city runs on its own dates through 2026.",
	},
	{
		q: "What is the trip to Las Vegas?",
		a: "Top teams from the Indian legs win a fully sponsored trip to the final stop in Las Vegas, with flights, lodging, and venue passes covered. It is a showcase and celebration, not another competition.",
	},
	{
		q: "Who is eligible to join?",
		a: "Open to all developers, students, and system architects based in India.",
	},
	{
		q: "How do we claim AWS Credits?",
		a: "Registered teams receive credit code allocations at project kickoff to build their architectures.",
	},
];
