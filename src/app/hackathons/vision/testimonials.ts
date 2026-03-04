import type { TestimonialInterface } from "@/types";
import {
	tosif,
	swayam,
	vicky,
	rahul,
	mrityunjay,
	rishi,
	gaurav,
	srinivas,
	kaustubh,
	dhruva,
} from "./images/testimonials";

export const visionTestimonials: TestimonialInterface[] = [
	{
		profileImage: tosif,
		name: "Tosif",
		platform: "twitter",
		testimonialText:
			"Just finished building FitAgent for the #VisionPossible hackathon! It's a real-time AI personal trainer that lives right in your browser. No apps, no sensors—just your webcam, YOLO11, and Gemini Live automatically detecting your exercises and giving you voice coaching! Huge thanks to @WeMakeDevs and the amazing SDK from @visionagents_ai that made building this under 30ms latency possible!",
	},
	{
		profileImage: swayam,
		name: "Swayam",
		platform: "twitter",
		testimonialText:
			"A huge thanks to @WeMakeDevs, @visionagents_ai and @kunalstwt for conducting this amazing hackathon. Got to learn a lot about building vision agents!",
	},
	{
		profileImage: vicky,
		name: "Vicky",
		platform: "twitter",
		testimonialText:
			"Built a real-time cognitive AI tutor. Every 15s it analyzes gaze, posture & cognitive load → adapts live via Gemini + WebRTC. Not passive video. Adaptive learning in real time.",
	},
	{
		profileImage: rahul,
		name: "Rahul",
		platform: "twitter",
		testimonialText:
			"Wrote the full build diary for \"RoundZero\" — Every bug. Every 2AM debugging session. Every honest take on what @VisionAgents actually feels like to build with. I want to thank @kunalstwt and whole @WeMakeDevs for this.",
	},
	{
		profileImage: mrityunjay,
		name: "Mrityunjay",
		platform: "twitter",
		testimonialText:
			"Working on a hackathon by @WeMakeDevs, where I need to orchestrate an audio-visual agent using visionagents.ai and it truly has been more fun than expected, from ideating around what to build and exploring the docs and building.",
	},
	{
		profileImage: rishi,
		name: "Rishi",
		platform: "twitter",
		testimonialText:
			"Built IntentLens for the Vision Possible Hackathon — a real-time Vision AI agent that tracks people, detects gestures, analyzes movement, and answers questions about what it sees. Learned a lot building this one. Thanks @kunalstwt, @WeMakeDevs & @visionagents_ai!",
	},
	{
		profileImage: gaurav,
		name: "Gaurav",
		platform: "twitter",
		testimonialText:
			"My CCTV fire alarm project is coming along nicely for #visionpossible hackathon.",
	},
	{
		profileImage: srinivas,
		name: "Srinivas",
		platform: "twitter",
		testimonialText:
			"Built an AI Sports Broadcaster PlayCast: point phone at action → get live ESPN-style commentary. No app install, it runs in browser.",
	},
	{
		profileImage: kaustubh,
		name: "Kaustubh",
		platform: "twitter",
		testimonialText:
			"I tried to do something on this weekend. For Vision-Agents Hackathon. @WeMakeDevs Created Semsorter, a multimodal robotic arm system that could help in hazardous item sorting.",
	},
	{
		profileImage: dhruva,
		name: "Dhruva",
		platform: "twitter",
		testimonialText:
			"Beyond the Webcam: I built a Real-Time AI Medical Wellness Assistant. What if your webcam could detect posture issues, estimate breathing rate, and flag fatigue — in under 10 seconds?",
	},
];
