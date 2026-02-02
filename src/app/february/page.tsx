"use client";

import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { logo } from "@/assets/images";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import type { FaqType } from "@/types";
import { CalendarIcon } from "@radix-ui/react-icons";
import {
	ArrowRight,
	Trophy,
	Briefcase,
	Calendar,
	Flag,
	Share2,
	Award,
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
		status: "upcoming",
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
		title: "Vision Possible: Agent Protocol",
		dates: "Feb 23 - Mar 1",
		status: "upcoming",
		slug: "vision",
		description: "Build multi-modal AI agents that watch, listen, and understand video in real-time",
		prize: "$5,000+",
		registrationLink: "https://forms.gle/b8YS4J4jcR2mSnnf7",
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
			"Yes! Each hackathon is independent and has its own prizes. You can participate in any hackathon individually and win prizes specific to that event. However, to be eligible for the Galaxy Flip 7 grand prize, you must participate in all 4 hackathons. Remember, you need to register for each hackathon separately before their respective registration deadlines.",
	},
	{
		question: "What counts as a valid submission?",
		answer:
			"A valid submission means you must register for the hackathon before the deadline and submit a working project that meets the hackathon's requirements. Each hackathon has its own submission guidelines - make sure to follow them!",
	},
	{
		question: "Can I participate solo or do I need a team?",
		answer:
			"You can participate either solo or with a team of up to 4 members. Teams can change per hackathon - you don't need to have the same team members for all 4 events. You can even participate solo in some hackathons and with a team in others.",
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
			"We encourage you to share your hackathon journey on social media! Use the hashtag <span class='text-red-400 font-semibold'>#HackAllFebruary</span> and tag <span class='text-red-400 font-semibold'>@WeMakeDevs</span> on Twitter/X, LinkedIn, or Instagram. We love seeing your progress!",
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

// Custom navbar for February page
function FebruaryNavbar() {
	const navLinks = [
		{ name: "How It Works", url: "#how-it-works" },
		{ name: "Hackathons", url: "#hackathons" },
		{ name: "How to Win", url: "#how-to-win" },
		{ name: "FAQs", url: "#faq" },
	];

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-red-500/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="flex items-center gap-3">
						<Image src={logo} alt="WeMakeDevs Logo" className="w-10 h-10" />
						<span className="font-bold text-white text-lg">WeMakeDevs</span>
					</Link>
					<div className="hidden md:flex items-center gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.url}
								className="text-gray-300 hover:text-white transition-colors font-medium"
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
}

// Circle Track Component showing 4 hackathons
function CircleTrack() {
	return (
		<div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
			{/* Outer track */}
			<div className="absolute inset-0 rounded-full border-[12px] border-gray-700" />
			{/* Inner track line (dashed) */}
			<div className="absolute inset-4 rounded-full border-4 border-dashed border-gray-600" />
			{/* Racing stripe */}
			<div className="absolute inset-8 rounded-full border-2 border-red-500/50" />
			
			{/* Center content */}
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="text-center">
					<Flag className="w-12 h-12 mx-auto text-red-500 mb-2" />
					<span className="text-white font-bold text-lg">FINISH</span>
					<span className="block text-gray-400 text-sm">All 4</span>
				</div>
			</div>

			{/* Hackathon markers positioned around the circle */}
			{/* Week 1 - Top */}
			<div className="absolute -top-6 left-1/2 -translate-x-1/2">
				<TrackMarker hackathon={hackathons[0]} position="top" />
			</div>
			
			{/* Week 2 - Right */}
			<div className="absolute top-1/2 -right-6 -translate-y-1/2">
				<TrackMarker hackathon={hackathons[1]} position="right" />
			</div>
			
			{/* Week 3 - Bottom */}
			<div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
				<TrackMarker hackathon={hackathons[2]} position="bottom" />
			</div>
			
			{/* Week 4 - Left */}
			<div className="absolute top-1/2 -left-6 -translate-y-1/2">
				<TrackMarker hackathon={hackathons[3]} position="left" />
			</div>
		</div>
	);
}

function TrackMarker({ 
	hackathon, 
	position 
}: { 
	hackathon: typeof hackathons[0];
	position: "top" | "right" | "bottom" | "left";
}) {
	const isLive = hackathon.status === "live";
	const isUpcoming = hackathon.status === "upcoming";
	
	const tooltipPosition = {
		top: "top-full mt-2 left-1/2 -translate-x-1/2",
		right: "left-full ml-2 top-1/2 -translate-y-1/2",
		bottom: "bottom-full mb-2 left-1/2 -translate-x-1/2",
		left: "right-full mr-2 top-1/2 -translate-y-1/2",
	};

	return (
		<div className="relative group">
			<div
				className={cn(
					"w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center font-bold border-4 cursor-pointer transition-transform hover:scale-110",
					isLive
						? "bg-green-500 border-green-400 text-white animate-pulse"
						: isUpcoming
						? "bg-orange-500 border-orange-400 text-white"
						: "bg-gray-600 border-gray-500 text-gray-300"
				)}
			>
				<span className="text-[10px] md:text-xs">Week</span>
				<span className="text-lg md:text-xl">{hackathon.week}</span>
			</div>
			{/* Tooltip */}
			<div className={cn(
				"absolute hidden group-hover:block z-10 w-48",
				tooltipPosition[position]
			)}>
				<div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-xl">
					<div className="font-bold text-white text-sm">{hackathon.title}</div>
					<div className="text-gray-400 text-xs">{hackathon.dates}</div>
					{isLive && (
						<span className="inline-block mt-1 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
							Live
						</span>
					)}
					{isUpcoming && (
						<span className="inline-block mt-1 px-2 py-0.5 bg-orange-500 text-white text-xs rounded-full">
							Upcoming
						</span>
					)}
				</div>
			</div>
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
	const isUpcoming = hackathon.status === "upcoming";
	const isComingSoon = hackathon.status === "coming_soon";

	return (
		<div
			className={cn(
				"bg-gray-800/80 backdrop-blur-sm border-2 rounded-xl p-6 relative overflow-hidden",
				isLive ? "border-green-500" : isUpcoming ? "border-orange-500" : "border-gray-600",
			)}
		>
			{isLive && (
				<div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
					LIVE NOW
				</div>
			)}
			{isUpcoming && (
				<div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
					UPCOMING
				</div>
			)}
			{isComingSoon && (
				<div className="absolute top-0 right-0 bg-gray-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
					COMING SOON
				</div>
			)}

			<div className="flex items-center gap-4 mb-4">
				<div
					className={cn(
						"w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl border-4",
						isLive
							? "bg-green-500 border-green-400 text-white"
							: isUpcoming
							? "bg-orange-500 border-orange-400 text-white"
							: "bg-red-500 border-red-400 text-white",
					)}
				>
					W{hackathon.week}
				</div>
				<div>
					<h3 className="text-xl md:text-2xl font-bold text-white">
						{hackathon.title}
					</h3>
					<p className="text-gray-300 flex items-center gap-2">
						<CalendarIcon className="w-4 h-4" />
						{hackathon.dates}
					</p>
				</div>
			</div>

			<p className="text-gray-300 mb-4">{hackathon.description}</p>

			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Trophy className="w-5 h-5 text-yellow-400" />
					<span className="font-bold text-white">{hackathon.prize}</span>
				</div>

				{hackathon.slug ? (
					<div className="flex gap-2">
						<Link
							href={`/hackathons/${hackathon.slug}`}
							className={cn(
								buttonVariants({ variant: "outline", size: "sm" }),
								"border-gray-400 bg-white text-black hover:bg-gray-100",
							)}
						>
							Details
						</Link>
						{hackathon.registrationLink && (
							<Link
								href={hackathon.registrationLink}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants({ size: "sm" }),
									"bg-red-500 hover:bg-red-600 text-white",
								)}
							>
								Register
								<ArrowRight className="w-4 h-4 ml-1" />
							</Link>
						)}
					</div>
				) : (
					<span className="text-gray-400 text-sm">
						Details coming soon
					</span>
				)}
			</div>
		</div>
	);
}

export default function FebruaryPage() {
	return (
		<div className="min-h-screen bg-gray-950 relative overflow-hidden">
			{/* F1/Racing Background Graphics */}
			<div className="fixed inset-0 pointer-events-none">
				{/* Racing stripes */}
				<div className="absolute top-0 left-0 w-full h-full">
					<div className="absolute top-0 left-[10%] w-1 h-full bg-gradient-to-b from-red-500/20 via-red-500/5 to-transparent" />
					<div className="absolute top-0 left-[20%] w-0.5 h-full bg-gradient-to-b from-red-500/10 via-transparent to-transparent" />
					<div className="absolute top-0 right-[10%] w-1 h-full bg-gradient-to-b from-red-500/20 via-red-500/5 to-transparent" />
					<div className="absolute top-0 right-[20%] w-0.5 h-full bg-gradient-to-b from-red-500/10 via-transparent to-transparent" />
				</div>
				
				{/* Checkered pattern at corners */}
				<div className="absolute top-0 left-0 w-32 h-32 opacity-10">
					<div className="grid grid-cols-4 grid-rows-4 w-full h-full">
						{[...Array(16)].map((_, i) => (
							<div
								key={i}
								className={cn(
									"w-full h-full",
									(Math.floor(i / 4) + i) % 2 === 0 ? "bg-white" : "bg-transparent"
								)}
							/>
						))}
					</div>
				</div>
				<div className="absolute top-0 right-0 w-32 h-32 opacity-10">
					<div className="grid grid-cols-4 grid-rows-4 w-full h-full">
						{[...Array(16)].map((_, i) => (
							<div
								key={i}
								className={cn(
									"w-full h-full",
									(Math.floor(i / 4) + i) % 2 === 0 ? "bg-white" : "bg-transparent"
								)}
							/>
						))}
					</div>
				</div>
				
				{/* Speed lines */}
				<div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
				<div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
				<div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
				<div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
				
				{/* Gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-transparent to-gray-950/80" />
			</div>

			<FebruaryNavbar />

			{/* Banner Section */}
			<section className="pt-20 md:pt-24 relative z-10">
				<ViewContainer>
					<div className="rounded-xl overflow-hidden">
						<Image
							src={images.banner}
							alt="Hack All February - Win a Samsung Galaxy Flip 7"
							className="w-full h-auto object-cover"
							priority
						/>
					</div>
				</ViewContainer>
			</section>

			{/* Hero Section with Title + Stats on Left, Circle Track on Right */}
			<section id="how-it-works" className="py-12 md:py-20 relative z-10">
				<ViewContainer>
					<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
						{/* Left Side - Title, Subtitle, Stats */}
						<div className="flex-1 text-center lg:text-left">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
								Hack All February
							</h1>
							<p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
								Join all 4 February hackathons to win a{" "}
								<span className="text-red-400 font-semibold">
									Samsung Galaxy Flip 7
								</span>{" "}
								phone worth{" "}
								<span className="text-red-400 font-semibold">
									₹1,10,000
								</span>
								. Winner will be chosen at random.
							</p>

							{/* Stats Grid - 2x2 */}
							<div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 mb-8">
								<div className="bg-gray-800/80 backdrop-blur-sm border-2 border-red-500/50 rounded-xl p-5 text-center">
									<Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
									<div className="text-2xl font-bold text-white">$40,000+</div>
									<div className="text-sm text-gray-300">Cash Prizes</div>
								</div>
								<div className="bg-gray-800/80 backdrop-blur-sm border-2 border-red-500/50 rounded-xl p-5 text-center">
									<CalendarIcon className="w-8 h-8 mx-auto mb-2 text-red-400" />
									<div className="text-2xl font-bold text-white">4 Online</div>
									<div className="text-sm text-gray-300">Hackathons</div>
								</div>
								<div className="bg-gray-800/80 backdrop-blur-sm border-2 border-red-500/50 rounded-xl p-5 text-center">
									<Briefcase className="w-8 h-8 mx-auto mb-2 text-blue-400" />
									<div className="text-xl font-bold text-white">Job Interviews</div>
									<div className="text-sm text-gray-300">With Top AI Companies</div>
								</div>
								<div className="bg-gray-800/80 backdrop-blur-sm border-2 border-red-500/50 rounded-xl p-5 text-center">
									<Award className="w-8 h-8 mx-auto mb-2 text-purple-400" />
									<div className="text-xl font-bold text-white">Certificates</div>
									<div className="text-sm text-gray-300">For All Participants</div>
								</div>
							</div>

							{/* Register Now Button */}
							<div className="flex justify-center lg:justify-start">
								<Link
									href="#hackathons"
									className={cn(
										buttonVariants({ size: "lg" }),
										"bg-red-500 hover:bg-red-600 text-white font-bold shadow-lg shadow-red-500/30 px-8 py-6 text-lg",
									)}
								>
									Register Now
									<ArrowRight className="w-5 h-5 ml-2" />
								</Link>
							</div>
						</div>

						{/* Right Side - Circle Track */}
						<div className="flex-shrink-0">
							<CircleTrack />
						</div>
					</div>
				</ViewContainer>
			</section>

			{/* Sponsors Section */}
			<section className="py-12 md:py-20 relative z-10">
				<ViewContainer>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
							Our Sponsors
						</h2>
						<p className="text-lg md:text-xl text-gray-300">
							Powering Hack All February with amazing prizes and opportunities
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
						{/* Week 1 - Tambo */}
						<Link
							href="https://tambo.co"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white hover:bg-gray-100 border border-gray-200 hover:border-red-500/50 rounded-xl p-6 w-full flex flex-col items-center justify-center transition-all duration-300 group"
						>
							<span className="text-xs text-gray-500 mb-2">Week 1</span>
							<Image
								src={images.week1Logo}
								alt="Tambo"
								className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
							/>
						</Link>

						{/* Week 2 - Archestra */}
						<Link
							href="https://archestra.ai"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white hover:bg-gray-100 border border-gray-200 hover:border-red-500/50 rounded-xl p-6 w-full flex flex-col items-center justify-center transition-all duration-300 group"
						>
							<span className="text-xs text-gray-500 mb-2">Week 2</span>
							<Image
								src={images.week2Logo}
								alt="Archestra"
								className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
							/>
						</Link>

						{/* Week 3 - Openwork */}
						<Link
							href="https://openwork.me"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white hover:bg-gray-100 border border-gray-200 hover:border-red-500/50 rounded-xl p-6 w-full flex flex-col items-center justify-center transition-all duration-300 group"
						>
							<span className="text-xs text-gray-500 mb-2">Week 3</span>
							<Image
								src={images.week3Logo}
								alt="Openwork"
								className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
							/>
						</Link>

						{/* Week 4 - Vision Agents */}
						<Link
							href="https://github.com/GetStream/Vision-Agents/?utm_source=hackathon&utm_medium=devrel&utm_campaign=wemakedevs"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white hover:bg-gray-100 border border-gray-200 hover:border-red-500/50 rounded-xl p-6 w-full flex flex-col items-center justify-center transition-all duration-300 group"
						>
							<span className="text-xs text-gray-500 mb-2">Week 4</span>
							<Image
								src={images.week4Logo}
								alt="Vision Agents"
								className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
							/>
						</Link>
					</div>
				</ViewContainer>
			</section>

			{/* Hackathon Cards Section */}
			<section id="hackathons" className="py-12 md:py-20 relative z-10">
				<ViewContainer>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
							February Hackathons
						</h2>
						<p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
							You must register separately for each hackathon to participate. You can participate solo or with a team of up to 4 members. Teams can change per hackathon - you don't need to have the same team members for all 4 events. You can even participate solo in some hackathons and with a team in others.
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
			<section id="how-to-win" className="py-12 md:py-20 relative z-10">
				<ViewContainer>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
							How to Win the Galaxy Flip 7
						</h2>
						<p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
							It's simple! Follow these steps to be eligible for the
							grand prize draw.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
						<div className="bg-gray-800/80 backdrop-blur-sm border-2 border-red-500/50 rounded-xl p-8 text-center">
							<div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl font-bold text-white">1</span>
							</div>
							<h3 className="text-xl font-bold text-white mb-2">Register</h3>
							<p className="text-gray-300">
								Sign up for each of the 4 February hackathons
								before their registration deadlines
							</p>
						</div>
						<div className="bg-gray-800/80 backdrop-blur-sm border-2 border-red-500/50 rounded-xl p-8 text-center">
							<div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl font-bold text-white">2</span>
							</div>
							<h3 className="text-xl font-bold text-white mb-2">Build & Submit</h3>
							<p className="text-gray-300">
								Create and submit a project for each hackathon.
								You don't have to be a winner to enter the raffle.
							</p>
						</div>
						<div className="bg-gray-800/80 backdrop-blur-sm border-2 border-red-500/50 rounded-xl p-8 text-center">
							<div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl font-bold text-white">3</span>
							</div>
							<h3 className="text-xl font-bold text-white mb-2">Win!</h3>
							<p className="text-gray-300">
								Complete all 4 hackathons and you're automatically
								entered into the random draw for the Galaxy Flip 7
							</p>
						</div>
					</div>
				</ViewContainer>
			</section>

			{/* Share on Socials Section */}
			<section className="py-12 md:py-20 relative z-10">
				<ViewContainer>
					<div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 md:p-12 text-center">
						<Share2 className="w-14 h-14 mx-auto mb-6 text-white" />
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Share Your Journey
						</h2>
						<p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
							Document your Hack All February experience! Share your progress, 
							learnings, and builds on social media. Use the hashtag and tag us!
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
							<div className="bg-white text-gray-900 px-6 py-3 rounded-lg text-xl font-bold shadow-lg">
								#HackAllFebruary
							</div>
							<div className="bg-white text-gray-900 px-6 py-3 rounded-lg text-xl font-bold shadow-lg">
								@WeMakeDevs
							</div>
						</div>
						<p className="text-white/80">
							Tag us on Twitter/X, LinkedIn, or Instagram!
						</p>
					</div>
				</ViewContainer>
			</section>

			{/* FAQ Section */}
			<section id="faq" className="relative z-10">
				<div className="bg-gray-900/80 backdrop-blur-sm py-12 md:py-20">
					<ViewContainer>
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
								Frequently Asked Questions
							</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{faqs.map((faq, index) => (
								<details
									key={index}
									className="group bg-gray-800/80 border border-gray-700 rounded-xl overflow-hidden h-fit"
								>
									<summary className="flex items-center justify-between cursor-pointer p-5 text-white font-semibold text-base hover:bg-gray-700/50 transition-colors">
										{faq.question}
										<span className="ml-4 text-red-400 group-open:rotate-180 transition-transform flex-shrink-0">
											▼
										</span>
									</summary>
									<div className="px-5 pb-5 text-gray-300 text-sm" 
										dangerouslySetInnerHTML={{ __html: faq.answer }} 
									/>
								</details>
							))}
						</div>
					</ViewContainer>
				</div>
			</section>

			{/* Footer */}
			<div className="relative z-10">
				<Footer />
			</div>

			<Banner className="flex items-center text-base md:text-lg font-medium">
				<div className="flex flex-col md:flex-row items-center justify-center">
					<span className="text-white">
						Week 1 is LIVE! Register now for "The UI Strikes Back" hackathon - $6,000+ in prizes!{" "}
					</span>
					<Link
						href="https://forms.gle/PG5jppKYjwky4BFUA"
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							buttonVariants(),
							"mt-4 md:mt-0 md:ml-8 px-3 py-2 bg-white hover:bg-white/80 text-[#1a2047] w-full md:w-fit",
						)}
					>
						Register Now
					</Link>
				</div>
			</Banner>
		</div>
	);
}
