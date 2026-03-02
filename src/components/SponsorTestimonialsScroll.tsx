"use client";

import { emmanuel, kestraLogo } from "@/assets/images";
import { images as assembleImages } from "@/app/hackathons/assemblehack25/images";
import { juanPa, aravind, zain } from "@/app/hackathons/assemblehack25/images/testimonials";
import { images as agenthackImages } from "@/app/hackathons/agenthack25/images";
import { images as futurestackImages } from "@/app/hackathons/futurestack25/images";
import { images as motiaImages } from "@/app/hackathons/motiahack25/images";
import { mikePiccolo } from "@/app/hackathons/motiahack25/images/testimonials";
import { images as lingohackImages } from "@/app/hackathons/lingohack25/images";
import { sumit } from "@/app/hackathons/lingohack25/images/testimonials";
import { images as tamboImages } from "@/app/hackathons/tambo/images";
import { michaelMagan } from "@/app/hackathons/tambo/images/testimonials";
import { images as twoFastTwoMcpImages } from "@/app/hackathons/2fast2mcp/images";
import { matveyKukuy } from "@/app/hackathons/2fast2mcp/images/testimonials";
import { cn } from "@/lib/utils";
import type { StaticImageData } from "next/image";
import Image from "next/image";

export interface SponsorTestimonialItem {
	quote: string;
	author: string;
	company: string;
	logo: StaticImageData;
	authorImage: StaticImageData;
}

const sponsorTestimonials: SponsorTestimonialItem[] = [
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
			"The WeMakeDevs hackathon provided a fantastic platform for developers and students to showcase their skills and learn from each other. It was an amazing experience to be invited for a QA session covering hackathon strategies and AI career advice. Great opportunity to share knowledge.",
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

function SponsorTestimonialCard({
	item,
	className,
}: {
	item: SponsorTestimonialItem;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"flex-shrink-0 w-[320px] md:w-[380px] rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur border border-border shadow-lg p-5 md:p-6 flex flex-col",
				className,
			)}
		>
			<Image
				src={item.logo}
				alt={item.company}
				className="w-20 h-10 object-contain object-left mb-4"
			/>
			<p className="text-sm md:text-base font-medium text-foreground/90 flex-1 line-clamp-4">
				&quot;{item.quote}&quot;
			</p>
			<div className="flex items-center gap-3 mt-4 pt-3 border-t border-border/50">
				<Image
					src={item.authorImage}
					alt={item.author}
					className="w-10 h-10 rounded-full object-cover"
				/>
				<div>
					<p className="font-semibold text-foreground text-sm">{item.author}</p>
					<p className="text-xs text-muted-foreground">{item.company}</p>
				</div>
			</div>
		</div>
	);
}

export default function SponsorTestimonialsScroll() {
	return (
		<section
			className="relative py-8 md:py-10 overflow-hidden"
			aria-label="Sponsor testimonials"
		>
			{/* Edge fade masks */}
			<div
				className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 bg-gradient-to-r from-background to-transparent"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 bg-gradient-to-l from-background to-transparent"
				aria-hidden
			/>
			<div className="flex gap-6 w-max motion-safe:animate-sponsor-scroll">
				{sponsorTestimonials.map((item, index) => (
					<SponsorTestimonialCard key={`${item.company}-${index}`} item={item} />
				))}
				{/* Duplicate set for seamless loop */}
				{sponsorTestimonials.map((item, index) => (
					<SponsorTestimonialCard key={`${item.company}-dup-${index}`} item={item} />
				))}
			</div>
		</section>
	);
}
