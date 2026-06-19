import {
	brusselsAiMixer,
	openSourceConnectBangaloreMeetup,
	openSourceConnectMeetup,
	sfAiEngineerHappyHour,
} from "@/app/meetups/images";
import type { MeetupData } from "@/types";

const meetups: MeetupData[] = [
	{
		title: "Brussels AI Mixer",
		image: brusselsAiMixer,
		date: "2026-06-30",
		description:
			"A casual evening for developers, builders, and AI enthusiasts in Brussels to connect.",
		url: "https://luma.com/dq5whcj6",
		location: "BeCentral, Brussels",
	},
	{
		title: "AI Engineer Happy Hour",
		image: sfAiEngineerHappyHour,
		date: "2026-07-01",
		description:
			"A low-key happy hour for AI engineers, technical founders, and product builders who are actively building.",
		url: "https://luma.com/ai-engineer-happy-hour-jul1-2026",
		location: "AWS Builder Loft, San Francisco",
	},
	{
		title: "Open Source Connect (Bangalore)",
		image: openSourceConnectBangaloreMeetup,
		date: "2025-03-06",
		description:
			"Meet fellow professionals, hear insightful talks from industry experts, and enjoy good conversations over pizza and drinks. Plus, there's swag!",
		url: "https://lu.ma/mww6iphz",
		location: "JFrog India, Bengaluru",
	},
	{
		title: "Open Source Connect (Delhi)",
		image: openSourceConnectMeetup,
		date: "2024-12-13",
		description:
			"Explore open source and tech with expert talks, networking, pizza, drinks, and swag!",
		url: "https://lu.ma/v0dhix0t",
		location: "The Circle-Huda City Center, Gurgaon",
	},
];

export { meetups };
