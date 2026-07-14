import { images as agenthackImages } from "@/app/hackathons/agenthack25/images";
import { images as accomplishImages } from "@/app/hackathons/accomplish/images";
import { orHiltch } from "@/app/hackathons/accomplish/images/testimonials";
import { images as assembleImages } from "@/app/hackathons/assemblehack25/images";
import {
	aravind,
	juanPa,
	zain,
} from "@/app/hackathons/assemblehack25/images/testimonials";
import { images as futurestackImages } from "@/app/hackathons/futurestack25/images";
import { images as lingohackImages } from "@/app/hackathons/lingohack25/images";
import { sumit } from "@/app/hackathons/lingohack25/images/testimonials";
import { images as motiaImages } from "@/app/hackathons/motiahack25/images";
import { mikePiccolo } from "@/app/hackathons/motiahack25/images/testimonials";
import { images as tamboImages } from "@/app/hackathons/tambo/images";
import { michaelMagan } from "@/app/hackathons/tambo/images/testimonials";
import { images as twoFastTwoMcpImages } from "@/app/hackathons/2fast2mcp/images";
import { matveyKukuy } from "@/app/hackathons/2fast2mcp/images/testimonials";
import { emmanuel, kestraLogo } from "@/assets/images";
import type { StaticImageData } from "next/image";

export interface SponsorTestimonialItem {
	quote: string;
	author: string;
	company: string;
	logo: StaticImageData;
	authorImage: StaticImageData;
}

export const sponsorTestimonials: SponsorTestimonialItem[] = [
	// Cline - Juan Pa (AssembleHack)
	{
		quote:
			"Working with WeMakeDevs on our hackathon was one of the best partnership decisions we made. The turnout exceeded anything we expected, with real, engaged builders who showed up ready to create. From a sponsor perspective, they made our involvement effortless.",
		author: "Juan Pa",
		company: "Developer Relations, Cline",
		logo: assembleImages.clineLogo,
		authorImage: juanPa,
	},
	// CodeRabbit - Aravind (AssembleHack)
	{
		quote:
			"Working with Kunal and WeMakeDevs was incredible. The community genuinely cared about what we're building at CodeRabbit, developers tried the product, they loved it, and told others about it. The awareness we gained in the developer community was beyond what we expected.",
		author: "Aravind Putrevu",
		company: "VP of Growth, CodeRabbit",
		logo: assembleImages.coderabbitLogo,
		authorImage: aravind,
	},
	// Together AI - Zain (AssembleHack)
	{
		quote:
			"Presenting this webinar was a fantastic experience. The audience was highly engaged throughout, with thoughtful questions and active discussion around LLM and coding agents.",
		author: "Zain",
		company: "Together AI",
		logo: assembleImages.togetheraiLogo,
		authorImage: zain,
	},
	// Portia (AgentHack)
	{
		quote:
			"What an incredible journey AgentHack 2025 has been! Seeing developers from around the world come together to build innovative AI agents using Portia was truly inspiring. The creativity and technical excellence displayed by all participants exceeded our expectations.",
		author: "Mounir Mouawad",
		company: "CEO, Portia AI",
		logo: agenthackImages.portiaLogo,
		authorImage: agenthackImages.portiaTestimonialAuthor,
	},
	// Meta - Yash (FutureStack)
	{
		quote:
			"The WeMakeDevs hackathon provided a fantastic platform for developers to showcase their skills and learn from each other. It was an amazing experience to be invited for a QA session covering hackathon strategies and AI career advice. Great opportunity to share knowledge.",
		author: "Yash Khare",
		company: "Partner Engineer, GenAI, Meta",
		logo: futurestackImages.metaLogo,
		authorImage: futurestackImages.yashKhare,
	},
	// Cerebras - Sarah (FutureStack)
	{
		quote:
			"Working with WeMakeDevs was such a great experience! The energy from the community was unreal, over 5,500 participants and 7,000+ API signups in just one hackathon. We loved seeing how creative the projects were and how quickly developers picked up Cerebras tech.",
		author: "Sarah Chieng",
		company: "Head of DevX, Cerebras Systems",
		logo: futurestackImages.cerebrasLogo,
		authorImage: futurestackImages.sarahChieng,
	},
	// Motia (MotiaHack)
	{
		quote:
			"Working with WeMakeDevs for #MotiaHack25 was amazing! This partnership went way beyond what we expected. The quality of projects was impressive, thousands of developers actually understood what we were building and shipped real solutions.",
		author: "Mike Piccolo",
		company: "Founder, Motia",
		logo: motiaImages.motiaLogo,
		authorImage: mikePiccolo,
	},
	// Lingo (LingoHack)
	{
		quote:
			"The hackathon we organised with WeMakeDevs was immensely successful. Not only did it bring us thousands of users, community members and GitHub stars but we were also very impressed with the projects participants submitted and what they built.",
		author: "Sumit Saurabh",
		company: "Lingo.dev",
		logo: lingohackImages.lingoLogo,
		authorImage: sumit,
	},
	// Tambo (The UI Strikes Back)
	{
		quote:
			"Working with WeMakeDevs was a game-changer for Tambo. What we imagined, Kunal and his team delivered, and then some. The results from our hackathon were staggering: we gained over 7,000 GitHub stars in just one week and saw thousands of developers actively building and engaging in our Discord. The quality of the projects produced was incredible. If you are looking to tap into a global developer ecosystem, gather real-world feedback, and discover innovative use cases for your product, I highly recommend partnering with WeMakeDevs. They don't just run events; they build movements.",
		author: "Michael Magan",
		company: "CEO, Tambo",
		logo: tamboImages.tamboLogo,
		authorImage: michaelMagan,
	},
	// Archestra (2 Fast 2 MCP)
	{
		quote:
			"Kunal and his team didn't just host a hackathon; they built a bridge between our tech and thousands of high-level developers. The results spoke for themselves: 3,000+ GitHub stars and a community of builders actually orchestrating MCP agents in real-time. The sophisticated projects we saw come out of this event proved that WeMakeDevs attracts a higher tier of talent. If you're looking to get your AI tools into the hands of global builders and see what they can really do, look no further.",
		author: "Matvey Kukuy",
		company: "CEO, Archestra",
		logo: twoFastTwoMcpImages.archestraLogo,
		authorImage: matveyKukuy,
	},
	// Accomplish.ai (Automate Me If You Can)
	{
		quote:
			"We expected a hackathon; we got a high-octane engineering sprint. Kunal and the WeMakeDevs team didn't just bring us visibility, they brought us contributors. For Accomplish.ai, the impact was immediate: 5,000+ GitHub stars in a week and thousands of developers diving into our actual issues. The volume of PRs was staggering; we saw bugs squashed and new features shipped faster than we ever imagined. Beyond the code, the cultural ripple effect has been huge, people are sharing their Accomplish setups across social media, and we've gained long-term contributors who are still active in our Discord today. If you want to move the needle on your product development while building a global brand, WeMakeDevs is the ultimate partner.",
		author: "Or Hiltch",
		company: "CEO, Accomplish.ai",
		logo: accomplishImages.accomplishLogo,
		authorImage: orHiltch,
	},
	// Kestra (HackFrost)
	{
		quote:
			"Huge thanks to Kunal Kushwaha and the amazing team at WeMakeDevs for organizing the very first Hackathon around Kestra! With over 2,000 participants all around the world, it was an incredible success and a true honor to see such brilliant developers using Kestra to create innovative and original projects.",
		author: "Emmanuel Darras",
		company: "CEO, Kestra",
		logo: kestraLogo,
		authorImage: emmanuel,
	},
];
