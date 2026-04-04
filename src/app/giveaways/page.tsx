import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Navbar from "@/components/Navbar";
import { ViewContainer } from "@/components/ui/view-container";
import { Gift, PartyPopper, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import jitenIpad from "./images/jiten-ipad.png";
import priyankaRayban from "./images/priyanka-rayban.png";
import mohitRayban from "./images/mohit-rayban.png";
import vaniRayban from "./images/vani-rayban.png";

export const metadata: Metadata = {
	title: "Giveaways | WeMakeDevs",
	description:
		"Win exciting prizes from WeMakeDevs! We regularly give away iPads, Meta Ray-Ban Smart Glasses, and more to our community members.",
};

const pastWinners = [
	{
		image: jitenIpad,
		name: "Jiten Purswani",
		prize: "Apple iPad",
		worth: "₹50,000",
	},
	{
		image: priyankaRayban,
		name: "Priyanka",
		prize: "Meta Ray-Ban Smart Glasses",
		worth: "₹40,000",
	},
	{
		image: mohitRayban,
		name: "Mohit Bisht",
		prize: "Meta Ray-Ban Smart Glasses",
		worth: "₹40,000",
	},
	{
		image: vaniRayban,
		name: "Vani Chitkara",
		prize: "Meta Ray-Ban Smart Glasses",
		worth: "₹40,000",
	},
];

const GiveawaysPage = () => {
	return (
		<div className="min-h-screen bg-slate-950">
			<Navbar />

			{/* Hero */}
			<section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
				<div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
				<div className="absolute top-32 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
				<ViewContainer className="relative z-10 text-center space-y-6">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mx-auto">
						<Gift size={16} />
						<span>No active giveaway right now</span>
					</div>
					<h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
						Giveaways
					</h1>
					<p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
						We regularly give away{" "}
						<span className="text-amber-400 font-semibold">
							iPads
						</span>
						,{" "}
						<span className="text-emerald-400 font-semibold">
							Meta Ray-Ban Smart Glasses
						</span>
						, and more to our community members.
					</p>
					<p className="text-lg text-slate-400 max-w-xl mx-auto">
						Subscribe to the newsletter below to be the first to
						know when the next giveaway drops.
					</p>
				</ViewContainer>
			</section>

			{/* Section Navigation */}
			<nav className="sticky top-16 z-20 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
				<ViewContainer>
					<div className="flex items-center justify-center gap-8 py-3">
						<a
							href="#how-it-works"
							className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
						>
							How It Works
						</a>
						<a
							href="#past-winners"
							className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
						>
							Past Winners
						</a>
						<a
							href="#join"
							className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
						>
							Join
						</a>
						<Link
							href="/hackathons"
							className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
						>
							Hackathons
						</Link>
					</div>
				</ViewContainer>
			</nav>

			{/* How It Works */}
			<section id="how-it-works" className="py-16 bg-slate-900/40 scroll-mt-28">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
						How It Works
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
						<div className="text-center space-y-4">
							<div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto">
								<Bell
									className="text-emerald-400"
									size={28}
								/>
							</div>
							<h3 className="text-xl font-semibold text-white">
								Stay Updated
							</h3>
							<p className="text-slate-400">
								Join the newsletter and follow us on socials to
								catch giveaway announcements the moment they
								go live.
							</p>
						</div>
						<div className="text-center space-y-4">
							<div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto">
								<Gift
									className="text-amber-400"
									size={28}
								/>
							</div>
							<h3 className="text-xl font-semibold text-white">
								Participate
							</h3>
							<p className="text-slate-400">
								Each giveaway has simple entry requirements
								usually filling a survey, attending an
								event, or engaging with the community.
							</p>
						</div>
						<div className="text-center space-y-4">
							<div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto">
								<PartyPopper
									className="text-purple-400"
									size={28}
								/>
							</div>
							<h3 className="text-xl font-semibold text-white">
								Win Prizes
							</h3>
							<p className="text-slate-400">
								Winners are picked and announced publicly.
								Prizes are shipped worldwide at no cost to
								you.
							</p>
						</div>
					</div>
				</ViewContainer>
			</section>

			{/* Past Winners */}
			<section id="past-winners" className="py-16 md:py-24 scroll-mt-28">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
						Past Winners
					</h2>
					<p className="text-slate-400 text-center text-lg mb-12 max-w-xl mx-auto">
						Real people, real prizes. Here are some of our lucky
						community members.
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{pastWinners.map((winner) => (
							<div
								key={winner.name}
								className="group relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900/60 hover:border-emerald-500/30 transition-colors"
							>
								<div className="relative aspect-[3/4] overflow-hidden">
									<Image
										src={winner.image}
										alt={`${winner.name} ${winner.prize}`}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-500"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
									/>
								</div>
								<div className="p-4 space-y-1">
									<h3 className="text-lg font-semibold text-white">
										{winner.name}
									</h3>
									<p className="text-emerald-400 text-sm font-medium">
										{winner.prize}
									</p>
									<p className="text-slate-500 text-xs">
										Worth {winner.worth}
									</p>
								</div>
							</div>
						))}
					</div>
				</ViewContainer>
			</section>

			{/* Newsletter */}
			<Newsletter />

			<Footer />
		</div>
	);
};

export default GiveawaysPage;
