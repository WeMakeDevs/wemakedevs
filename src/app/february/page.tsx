"use client";

import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import type { FaqType } from "@/types";
import { CalendarIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import {
	ArrowRight,
	Gift,
	Share2,
	Trophy,
	Users,
	Briefcase,
	Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { images } from "./images";

// Hackathon data for the timeline
const hackathons = [
	{
		week: 1,
		title: "The UI Strikes Back",
		dates: "Feb 2 - Feb 8",
		status: "live",
		slug: "tambo",
		description: "Build generative UI applications with Tambo",
		prize: "$6,000+",
		registrationLink: "https://forms.gle/PG5jppKYjwky4BFUA",
	},
	{
		week: 2,
		title: "2 Fast 2 MCP",
		dates: "Feb 9 - Feb 15",
		status: "live",
		slug: "2fast2mcp",
		description: "Run powerful MCP-based agents with Archestra",
		prize: "$10,000+",
		registrationLink: "https://forms.gle/GtDSjNvxJ7iTD6LD9",
	},
	{
		week: 3,
		title: "Coming Soon",
		dates: "Feb 16 - Feb 22",
		status: "coming_soon",
		slug: null,
		description: "Another exciting hackathon awaits!",
		prize: "TBA",
		registrationLink: null,
	},
	{
		week: 4,
		title: "Coming Soon",
		dates: "Feb 23 - Feb 28",
		status: "coming_soon",
		slug: null,
		description: "The grand finale of Hack All February!",
		prize: "TBA",
		registrationLink: null,
	},
];

const faqs: FaqType[] = [
	{
		question: "What is Hack All February?",
		answer:
			"Hack All February is a month-long hackathon program by WeMakeDevs featuring 4 consecutive weekly hackathons throughout February 2026. Participate in all 4 hackathons to be eligible for the grand prize - a Samsung Galaxy Flip 7 worth ₹1,10,000!",
	},
	{
		question: "How do I win the Samsung Galaxy Flip 7?",
		answer:
			"To be eligible for the Galaxy Flip 7, you must register and submit a project in ALL 4 February hackathons. The winner will be chosen randomly from all eligible participants. It's that simple - no judging, just participate in all 4 events!",
	},
	{
		question: "Can I participate in individual hackathons without joining all 4?",
		answer:
			"Yes! Each hackathon is independent and has its own prizes. You can participate in any hackathon individually and win prizes specific to that event. However, to be eligible for the Galaxy Flip 7 grand prize, you must participate in all 4 hackathons.",
	},
	{
		question: "What counts as a valid submission?",
		answer:
			"A valid submission means you must register for the hackathon before the deadline and submit a working project that meets the hackathon's requirements. Each hackathon has its own submission guidelines - make sure to follow them!",
	},
	{
		question: "Can I participate solo or do I need a team?",
		answer:
			"You can participate either solo or with a team of up to 4 members. Team composition can vary between hackathons - you don't need to have the same team for all 4 events.",
	},
	{
		question: "What are the total prizes across all hackathons?",
		answer:
			"Throughout Hack All February, there are over $40,000 in cash prizes across all 4 hackathons, plus the Samsung Galaxy Flip 7 grand prize, exclusive swag, and job/internship interview opportunities with sponsor companies!",
	},
	{
		question: "How will the Galaxy Flip 7 winner be selected?",
		answer:
			"The winner will be selected randomly from all participants who have successfully registered and submitted projects in ALL 4 February hackathons. The draw will happen after the final hackathon concludes.",
	},
	{
		question: "How can I share my journey?",
		answer:
			"We encourage you to share your hackathon journey on social media! Use the hashtag <span class='text-accent-4 font-semibold'>#HackAllFebruary</span> and tag <span class='text-accent-4 font-semibold'>@WeMakeDevs</span> on Twitter/X, LinkedIn, or Instagram. We love seeing your progress!",
	},
	{
		question: "Where can I get help during the hackathons?",
		answer:
			"Each hackathon has its own community channel (Discord/Slack) where you can get help from mentors and fellow participants. Check the individual hackathon pages for links to their communities.",
	},
	{
		question: "Are there any eligibility requirements?",
		answer:
			"You must be at least 16 years of age to participate. There are no geographical restrictions - anyone from anywhere in the world can join!",
	},
];

export default function FebruaryPage() {
	return (
		<div className="min-h-screen bg-background">
			<Navbar />

			{/* Hero Section */}
			<section className="pt-24 pb-8 md:pt-32 md:pb-12">
				<ViewContainer>
					<div className="relative rounded-xl overflow-hidden">
						<Image
							src={images.banner}
							alt="Hack All February - Win a Samsung Galaxy Flip 7"
							className="w-full h-auto object-cover"
							priority
						/>
					</div>
				</ViewContainer>
			</section>

			{/* Tagline Section */}
			<section className="py-8 md:py-12">
				<ViewContainer>
					<div className="text-center space-y-6">
						<h1 className="text-4xl md:text-6xl font-bold font-title">
							Hack All February
						</h1>
						<p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground">
							Join all 4 February hackathons to win a{" "}
							<span className="text-accent-4 font-semibold">
								Samsung Galaxy Flip 7
							</span>{" "}
							worth{" "}
							<span className="text-accent-4 font-semibold">
								₹1,10,000
							</span>
						</p>
					</div>
				</ViewContainer>
			</section>

			{/* Stats/Highlights Section */}
			<section className="py-8 md:py-12">
				<ViewContainer>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
						<div className="bg-card border-4 border-accent-4 rounded-lg p-6 text-center">
							<Trophy className="w-10 h-10 mx-auto mb-3 text-accent-4" />
							<div className="text-2xl md:text-3xl font-bold">
								$40,000+
							</div>
							<div className="text-sm md:text-base text-muted-foreground">
								Cash Prizes
							</div>
						</div>
						<div className="bg-card border-4 border-accent-4 rounded-lg p-6 text-center">
							<CalendarIcon className="w-10 h-10 mx-auto mb-3 text-accent-4" />
							<div className="text-2xl md:text-3xl font-bold">4</div>
							<div className="text-sm md:text-base text-muted-foreground">
								Hackathons
							</div>
						</div>
						<div className="bg-card border-4 border-accent-4 rounded-lg p-6 text-center">
							<Briefcase className="w-10 h-10 mx-auto mb-3 text-accent-4" />
							<div className="text-2xl md:text-3xl font-bold">
								Job Interviews
							</div>
							<div className="text-sm md:text-base text-muted-foreground">
								With Sponsors
							</div>
						</div>
						<div className="bg-card border-4 border-accent-4 rounded-lg p-6 text-center">
							<Smartphone className="w-10 h-10 mx-auto mb-3 text-accent-4" />
							<div className="text-2xl md:text-3xl font-bold">
								Galaxy Flip 7
							</div>
							<div className="text-sm md:text-base text-muted-foreground">
								Grand Prize
							</div>
						</div>
					</div>
				</ViewContainer>
			</section>

			{/* F1 Track Timeline Section */}
			<section className="py-12 md:py-20">
				<ViewContainer>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-5xl font-bold mb-4">
							The Race Track
						</h2>
						<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
							Four weeks, four hackathons, one epic journey. Complete
							the full circuit to be eligible for the grand prize!
						</p>
					</div>

					{/* Timeline Track */}
					<div className="relative">
						{/* Desktop Track */}
						<div className="hidden md:block">
							<div className="relative">
								{/* Track SVG */}
								<svg
									viewBox="0 0 1000 400"
									className="w-full h-auto"
									fill="none"
								>
									{/* Track path */}
									<path
										d="M 100 200 
										   L 300 200 
										   Q 350 200 350 150 
										   L 350 100 
										   Q 350 50 400 50 
										   L 600 50 
										   Q 650 50 650 100 
										   L 650 150 
										   Q 650 200 700 200 
										   L 900 200"
										stroke="hsl(var(--accent-4))"
										strokeWidth="60"
										strokeLinecap="round"
										fill="none"
									/>
									{/* Inner track line */}
									<path
										d="M 100 200 
										   L 300 200 
										   Q 350 200 350 150 
										   L 350 100 
										   Q 350 50 400 50 
										   L 600 50 
										   Q 650 50 650 100 
										   L 650 150 
										   Q 650 200 700 200 
										   L 900 200"
										stroke="hsl(var(--background))"
										strokeWidth="40"
										strokeLinecap="round"
										strokeDasharray="20 20"
										fill="none"
									/>
									{/* Start/Finish Line */}
									<rect
										x="90"
										y="175"
										width="20"
										height="50"
										fill="white"
									/>
									<rect
										x="90"
										y="175"
										width="10"
										height="10"
										fill="black"
									/>
									<rect
										x="100"
										y="185"
										width="10"
										height="10"
										fill="black"
									/>
									<rect
										x="90"
										y="195"
										width="10"
										height="10"
										fill="black"
									/>
									<rect
										x="100"
										y="205"
										width="10"
										height="10"
										fill="black"
									/>
									<rect
										x="90"
										y="215"
										width="10"
										height="10"
										fill="black"
									/>
								</svg>

								{/* Week markers positioned along the track */}
								<div className="absolute top-1/2 left-[15%] -translate-y-1/2 transform">
									<HackathonMarker hackathon={hackathons[0]} />
								</div>
								<div className="absolute top-[10%] left-[40%] transform">
									<HackathonMarker hackathon={hackathons[1]} />
								</div>
								<div className="absolute top-[10%] right-[35%] transform">
									<HackathonMarker hackathon={hackathons[2]} />
								</div>
								<div className="absolute top-1/2 right-[5%] -translate-y-1/2 transform">
									<HackathonMarker hackathon={hackathons[3]} />
								</div>
							</div>
						</div>

						{/* Mobile Timeline */}
						<div className="md:hidden space-y-0">
							{hackathons.map((hackathon, index) => (
								<div key={hackathon.week} className="relative">
									{/* Vertical line */}
									{index < hackathons.length - 1 && (
										<div className="absolute left-6 top-16 w-1 h-full bg-accent-4" />
									)}
									<div className="flex gap-4 pb-8">
										{/* Week indicator */}
										<div
											className={cn(
												"w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 z-10",
												hackathon.status === "live"
													? "bg-green-500 text-white"
													: "bg-accent-4 text-[#0A3D71]",
											)}
										>
											W{hackathon.week}
										</div>
										{/* Content */}
										<MobileHackathonCard
											hackathon={hackathon}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</ViewContainer>
			</section>

			{/* Hackathon Cards Section */}
			<section className="py-12 md:py-20 bg-muted/30">
				<ViewContainer>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-5xl font-bold mb-4">
							February Hackathons
						</h2>
						<p className="text-lg md:text-xl text-muted-foreground">
							Register for each hackathon to participate
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{hackathons.map(hackathon => (
							<HackathonCard
								key={hackathon.week}
								hackathon={hackathon}
							/>
						))}
					</div>
				</ViewContainer>
			</section>

			{/* How to Win Section */}
			<section className="py-12 md:py-20">
				<ViewContainer>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-5xl font-bold mb-4">
							How to Win the Galaxy Flip 7
						</h2>
						<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
							It's simple! Follow these steps to be eligible for the
							grand prize draw.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
						<div className="bg-card border-4 border-accent-4 rounded-lg p-8 text-center">
							<div className="w-16 h-16 bg-accent-4 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl font-bold text-[#0A3D71]">
									1
								</span>
							</div>
							<h3 className="text-xl font-bold mb-2">Register</h3>
							<p className="text-muted-foreground">
								Sign up for each of the 4 February hackathons
								before their registration deadlines
							</p>
						</div>
						<div className="bg-card border-4 border-accent-4 rounded-lg p-8 text-center">
							<div className="w-16 h-16 bg-accent-4 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl font-bold text-[#0A3D71]">
									2
								</span>
							</div>
							<h3 className="text-xl font-bold mb-2">Build & Submit</h3>
							<p className="text-muted-foreground">
								Create and submit a project for each hackathon.
								Quality matters for hackathon prizes, but any valid
								submission counts for the draw!
							</p>
						</div>
						<div className="bg-card border-4 border-accent-4 rounded-lg p-8 text-center">
							<div className="w-16 h-16 bg-accent-4 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl font-bold text-[#0A3D71]">
									3
								</span>
							</div>
							<h3 className="text-xl font-bold mb-2">Win!</h3>
							<p className="text-muted-foreground">
								Complete all 4 hackathons and you're automatically
								entered into the random draw for the Galaxy Flip 7
							</p>
						</div>
					</div>
				</ViewContainer>
			</section>

			{/* Social Sharing Section */}
			<section className="py-12 md:py-20 bg-accent-4">
				<ViewContainer>
					<div className="text-center text-[#0A3D71]">
						<Share2 className="w-16 h-16 mx-auto mb-6" />
						<h2 className="text-3xl md:text-5xl font-bold mb-4">
							Share Your Journey
						</h2>
						<p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
							Document your Hack All February experience! Share your
							progress, learnings, and builds on social media.
						</p>
						<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
							<div className="bg-[#0A3D71] text-white px-6 py-3 rounded-lg text-xl font-bold">
								#HackAllFebruary
							</div>
							<div className="bg-[#0A3D71] text-white px-6 py-3 rounded-lg text-xl font-bold">
								@WeMakeDevs
							</div>
						</div>
						<p className="mt-6 text-base md:text-lg">
							Tag us on Twitter/X, LinkedIn, or Instagram!
						</p>
					</div>
				</ViewContainer>
			</section>

			{/* Poster Section */}
			<section className="py-12 md:py-20">
				<ViewContainer>
					<div className="max-w-4xl mx-auto">
						<Image
							src={images.poster}
							alt="Hack All February Poster"
							className="w-full h-auto rounded-xl shadow-2xl"
						/>
					</div>
				</ViewContainer>
			</section>

			{/* FAQ Section */}
			<Faq FAQS={faqs} />

			<Footer />
		</div>
	);
}

// Hackathon marker for the desktop track
function HackathonMarker({
	hackathon,
}: {
	hackathon: (typeof hackathons)[0];
}) {
	const isLive = hackathon.status === "live";
	const isComingSoon = hackathon.status === "coming_soon";

	return (
		<div className="flex flex-col items-center">
			<div
				className={cn(
					"w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-2",
					isLive
						? "bg-green-500 text-white animate-pulse"
						: "bg-gray-400 text-white",
				)}
			>
				{hackathon.week}
			</div>
			<div className="bg-card border-2 border-foreground/20 rounded-lg p-3 shadow-lg min-w-[180px] text-center">
				<div className="font-bold text-sm">{hackathon.title}</div>
				<div className="text-xs text-muted-foreground">
					{hackathon.dates}
				</div>
				{isLive && (
					<span className="inline-block mt-1 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
						Live
					</span>
				)}
				{isComingSoon && (
					<span className="inline-block mt-1 px-2 py-0.5 bg-gray-400 text-white text-xs rounded-full">
						Coming Soon
					</span>
				)}
			</div>
		</div>
	);
}

// Mobile hackathon card
function MobileHackathonCard({
	hackathon,
}: {
	hackathon: (typeof hackathons)[0];
}) {
	const isLive = hackathon.status === "live";
	const isComingSoon = hackathon.status === "coming_soon";

	return (
		<div className="bg-card border-4 border-accent-4 rounded-lg p-4 flex-1">
			<div className="flex items-start justify-between mb-2">
				<h3 className="font-bold text-lg">{hackathon.title}</h3>
				{isLive && (
					<span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
						Live
					</span>
				)}
				{isComingSoon && (
					<span className="px-2 py-0.5 bg-gray-400 text-white text-xs rounded-full">
						Coming Soon
					</span>
				)}
			</div>
			<p className="text-sm text-muted-foreground mb-2">
				{hackathon.dates}
			</p>
			<p className="text-sm mb-3">{hackathon.description}</p>
			{hackathon.registrationLink && (
				<Link
					href={hackathon.registrationLink}
					target="_blank"
					rel="noopener noreferrer"
					className={cn(
						buttonVariants({ size: "sm" }),
						"w-full text-sm",
					)}
				>
					Register Now
				</Link>
			)}
		</div>
	);
}

// Full hackathon card for the grid
function HackathonCard({
	hackathon,
}: {
	hackathon: (typeof hackathons)[0];
}) {
	const isLive = hackathon.status === "live";
	const isComingSoon = hackathon.status === "coming_soon";

	return (
		<div
			className={cn(
				"bg-card border-4 rounded-lg p-6 relative overflow-hidden",
				isLive ? "border-green-500" : "border-accent-4",
			)}
		>
			{isLive && (
				<div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-bold">
					LIVE NOW
				</div>
			)}
			{isComingSoon && (
				<div className="absolute top-0 right-0 bg-gray-400 text-white px-4 py-1 text-sm font-bold">
					COMING SOON
				</div>
			)}

			<div className="flex items-center gap-4 mb-4">
				<div
					className={cn(
						"w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl",
						isLive
							? "bg-green-500 text-white"
							: "bg-accent-4 text-[#0A3D71]",
					)}
				>
					W{hackathon.week}
				</div>
				<div>
					<h3 className="text-xl md:text-2xl font-bold">
						{hackathon.title}
					</h3>
					<p className="text-muted-foreground flex items-center gap-2">
						<CalendarIcon className="w-4 h-4" />
						{hackathon.dates}
					</p>
				</div>
			</div>

			<p className="text-muted-foreground mb-4">{hackathon.description}</p>

			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Trophy className="w-5 h-5 text-accent-4" />
					<span className="font-bold">{hackathon.prize}</span>
				</div>

				{hackathon.slug ? (
					<div className="flex gap-2">
						<Link
							href={`/hackathons/${hackathon.slug}`}
							className={cn(
								buttonVariants({ variant: "outline", size: "sm" }),
							)}
						>
							Details
						</Link>
						{hackathon.registrationLink && (
							<Link
								href={hackathon.registrationLink}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(buttonVariants({ size: "sm" }))}
							>
								Register
								<ArrowRight className="w-4 h-4 ml-1" />
							</Link>
						)}
					</div>
				) : (
					<span className="text-muted-foreground text-sm">
						Details coming soon
					</span>
				)}
			</div>
		</div>
	);
}
