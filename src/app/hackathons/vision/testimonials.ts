import type { TestimonialInterface } from "@/types";
import {
	vicky,
	rishi,
	swayam,
	yamini,
	mehboob,
	swagatika,
	tosif,
} from "./images/testimonials";

export const visionTestimonials: TestimonialInterface[] = [
	{
		profileImage: vicky,
		name: "Vicky",
		platform: "twitter",
		testimonialText:
			"Recently, I wasn't developing any projects due to personal issues & depression. The #VisionPossible hackathon by @WeMakeDevs reignited my spark! Huge thanks to @kunalstwt for introducing me to @visionagents_ai — it got me building again.",
	},
	{
		profileImage: rishi,
		name: "Rishi",
		platform: "twitter",
		testimonialText:
			"Built IntentLens for the Vision Possible Hackathon — a real-time Vision AI agent that tracks people, detects gestures, analyzes movement, and answers questions about what it sees. Learned a lot building this one. Thanks @kunalstwt, @WeMakeDevs & @visionagents_ai!",
	},
	{
		profileImage: swayam,
		name: "Swayam",
		platform: "twitter",
		testimonialText:
			"A huge thanks to @WeMakeDevs, @visionagents_ai and @kunalstwt for conducting this amazing hackathon. Got to learn a lot about building vision agents! I even published a detailed blog regarding the project!",
	},
	{
		profileImage: yamini,
		name: "Yamini",
		platform: "twitter",
		testimonialText:
			"Built for @WeMakeDevs Vision Possible: Agent Protocol Hackathon. First hackathon I've ever submitted. Felt like the right one to finally finish. Full build story + architecture + code.",
	},
	{
		profileImage: mehboob,
		name: "Mehboob",
		platform: "twitter",
		testimonialText:
			"Built Drishti AI, a real-time eye screening agent that runs on any ASHA worker's Android phone. India has 12 million blind people, but 80% of this blindness is preventable. The Vision Agents SDK made building a real-time vision AI agent feel achievable in 7 days.",
	},
	{
		profileImage: swagatika,
		name: "Swagatika",
		platform: "twitter",
		testimonialText:
			"Submitted my FIRST hackathon project yesterday. A week ago, I didn't think I could. Built VisionMate AI at the Vision Possible hackathon by @WeMakeDevs. Biggest lesson? Don't wait to feel ready. Start. 1 week of building > months of tutorials.",
	},
	{
		profileImage: tosif,
		name: "Tosif",
		platform: "twitter",
		testimonialText:
			"Building my Vision Possible hackathon entry: Live Face Match! Taking my production Pixel Match AI (facial recognition for event photographers) and adding @visionagents_ai realtime video processing. Point camera at attendees → instant live galleries appear.",
	},
];
