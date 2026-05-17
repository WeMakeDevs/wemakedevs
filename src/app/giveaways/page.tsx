import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { ViewContainer } from "@/components/ui/view-container";
import {
	ArrowUpRight,
	Bell,
	Calendar,
	Gift,
	PartyPopper,
	Sparkles,
	Trophy,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GiveawaysNavbar from "./components/GiveawaysNavbar";

import ayaanImage from "./images/Ayaan.png";
import aiToolsPoster from "./images/ai-tools.jpg";
import ipadGiveawayPoster from "./images/iPad-april-2026.jpeg";
import jitenIpad from "./images/jiten-ipad.png";
import mohitRayban from "./images/mohit-rayban.png";
import priyankaRayban from "./images/priyanka-rayban.png";
import vaniRayban from "./images/vani-rayban.png";

export const metadata: Metadata = {
	title: "Giveaways | WeMakeDevs",
	description:
		"Win exciting prizes from WeMakeDevs! Take our AI tools survey for a chance to win Nike Air Jordans, Logitech MX Master 3 Mouse, or a Keychron Keyboard.",
};

// Survey URL for the AI tools giveaway
const AI_TOOLS_SURVEY_URL = "https://forms.gle/qU7eA2qnQ6eWYtRV7";

const pastWinners = [
	{
		image: ayaanImage,
		name: "Ayaan",
		prize: "Apple iPad",
		worth: "₹50,000",
	},
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
			<GiveawaysNavbar />

			{/* Hero + Live Giveaway */}
			<section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
				<div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
				<div className="absolute top-32 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
				<ViewContainer className="relative z-10 space-y-12">
					{/* Title */}
					<div className="text-center space-y-6">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mx-auto">
							<Sparkles size={16} />
							<span>Live Giveaway</span>
						</div>
						<h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
							Giveaways
						</h1>
					</div>

					{/* Live AI Tools Survey Giveaway */}
					<div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 bg-gradient-to-br from-emerald-950/60 via-slate-900 to-amber-950/40">
						<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-amber-500/10" />
						<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
							{/* Poster */}
							<div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10">
								<Image
									src={aiToolsPoster}
									alt="AI Tools Survey Giveaway - Win Nike Air Jordans, Logitech MX Master 3, or a Keychron Keyboard"
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 50vw"
									priority
								/>
							</div>

							{/* Details */}
							<div className="flex flex-col justify-center space-y-6">
								<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 text-emerald-400 text-xs font-semibold uppercase tracking-wider w-fit">
									<span className="relative flex h-2 w-2">
										<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
										<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
									</span>
									Live Now
								</div>

								<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
									Tell us which{" "}
									<span className="text-emerald-400">
										AI tools
									</span>{" "}
									you use, win premium gear
								</h2>

								<p className="text-lg text-slate-300 leading-relaxed">
									Fill out a quick survey about the AI tools
									you use and how you use them. It takes just{" "}
									<span className="text-white font-semibold">
										1 minute
									</span>
									, and we&apos;ll pick{" "}
									<span className="text-white font-semibold">
										3 random winners
									</span>{" "}
									to receive premium gear.
								</p>

								<div className="space-y-3">
									<div className="flex items-start gap-3 text-slate-400">
										<Trophy
											size={18}
											className="text-amber-400 shrink-0 mt-0.5"
										/>
										<span>
											<span className="text-white font-semibold">
												Nike Air Jordans
											</span>{" "}
											· 1 winner
										</span>
									</div>
									<div className="flex items-start gap-3 text-slate-400">
										<Trophy
											size={18}
											className="text-amber-400 shrink-0 mt-0.5"
										/>
										<span>
											<span className="text-white font-semibold">
												Logitech MX Master 3 Mouse
											</span>{" "}
											· 1 winner
										</span>
									</div>
									<div className="flex items-start gap-3 text-slate-400">
										<Trophy
											size={18}
											className="text-amber-400 shrink-0 mt-0.5"
										/>
										<span>
											<span className="text-white font-semibold">
												Keychron Keyboard
											</span>{" "}
											· 1 winner
										</span>
									</div>
								</div>

								<div className="flex items-center gap-3 text-slate-400">
									<Calendar
										size={18}
										className="text-emerald-400 shrink-0"
									/>
									<span>
										3 random winners picked from all entries
									</span>
								</div>

								<Link
									href={AI_TOOLS_SURVEY_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-400 text-slate-950 font-bold text-lg w-fit hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] transition-shadow"
								>
									Take the 1-min Survey
									<ArrowUpRight size={20} />
								</Link>

								<p className="text-sm text-slate-400 mt-1">
									One submission per person.
								</p>
							</div>
						</div>
					</div>

					{/* Past iPad giveaway (ended) */}
					<div className="relative rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-900/60">
						<div className="relative z-10 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 p-6 md:p-8 items-center">
							<div className="relative aspect-[3/4] max-w-[240px] mx-auto lg:mx-0 rounded-2xl overflow-hidden opacity-70">
								<Image
									src={ipadGiveawayPoster}
									alt="Apple iPad giveaway (ended)"
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 280px"
								/>
							</div>
							<div className="space-y-4">
								<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-500/40 bg-slate-500/15 text-slate-400 text-xs font-semibold uppercase tracking-wider w-fit">
									<span className="relative flex h-2 w-2">
										<span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500" />
									</span>
									Ended
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-white">
									Apple iPad worth ₹50,000
								</h3>
								<p className="text-slate-400">
									Winner announced on{" "}
									<span className="text-white font-medium">
										26th April 2026
									</span>
									. Thanks to everyone who participated!
								</p>
							</div>
						</div>
					</div>
				</ViewContainer>
			</section>

			{/* How It Works */}
			<section
				id="how-it-works"
				className="py-16 bg-slate-900/40 scroll-mt-28"
			>
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
						How It Works
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
						<div className="text-center space-y-4">
							<div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto">
								<Bell className="text-emerald-400" size={28} />
							</div>
							<h3 className="text-xl font-semibold text-white">
								Stay Updated
							</h3>
							<p className="text-slate-400">
								Join the newsletter and follow us on socials to
								catch giveaway announcements the moment they go
								live.
							</p>
						</div>
						<div className="text-center space-y-4">
							<div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto">
								<Gift className="text-amber-400" size={28} />
							</div>
							<h3 className="text-xl font-semibold text-white">
								Participate
							</h3>
							<p className="text-slate-400">
								Each giveaway has simple entry requirements
								usually filling a survey, attending an event, or
								engaging with the community.
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
								Prizes are shipped worldwide at no cost to you.
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
						{pastWinners.map(winner => (
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
