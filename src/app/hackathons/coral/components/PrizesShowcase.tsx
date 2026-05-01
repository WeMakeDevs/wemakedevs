import { DATA } from "../data";
import {
	Anchor,
	BookOpen,
	Gift,
	Heart,
	Megaphone,
	Trophy,
	Users,
	Video,
} from "lucide-react";
import Link from "next/link";

const PrizesShowcase = () => {
	return (
		<div className="py-20">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-amber-500 to-amber-700 p-5 rounded-2xl shadow-lg shadow-amber-500/30">
							<Trophy className="w-10 h-10 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-4">
						The Treasure Chest
					</h2>
					<p className="text-lg text-slate-400 max-w-2xl mx-auto">
						$10,000+ in gold doubloons and bounties for the bravest
						pirates on the data seas.
					</p>
				</div>

				<div className="space-y-8">
					{/* Top 3 Winners */}
					<div className="relative rounded-3xl p-8 md:p-10 overflow-hidden bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900">
						<div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-yellow-400/15 rounded-full blur-3xl" />
						<div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl" />

						<div className="relative z-10">
							<div className="flex items-center gap-4 mb-8">
								<div className="bg-[#0a0f1e]/40 backdrop-blur-sm p-4 rounded-xl">
									<Trophy className="w-8 h-8 text-yellow-300" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-yellow-200">
									🏴‍☠️ Captain&apos;s Bounty: Top 3 Winners
								</h3>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{/* 1st Place */}
								<div className="bg-[#0a0f1e] rounded-2xl p-6 border border-amber-400/30 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-amber-300 font-bold text-lg">
											Pirate King
										</span>
										<span className="text-3xl">👑</span>
									</div>
									<div className="text-4xl md:text-5xl font-bold text-amber-300">
										$5,000
									</div>
									<p className="text-slate-400 mt-2 text-sm">
										1st Place
									</p>
								</div>

								{/* 2nd Place */}
								<div className="bg-[#0a0f1e]/90 rounded-2xl p-6 border border-amber-400/20 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-amber-400/90 font-bold text-lg">
											First Mate
										</span>
										<span className="text-3xl">🏴‍☠️</span>
									</div>
									<div className="text-3xl md:text-4xl font-bold text-amber-400/90">
										$3,000
									</div>
									<p className="text-slate-400 mt-2 text-sm">
										2nd Place
									</p>
								</div>

								{/* 3rd Place */}
								<div className="bg-[#0a0f1e]/80 rounded-2xl p-6 border border-amber-400/10 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-amber-400/80 font-bold text-lg">
											Quartermaster
										</span>
										<span className="text-3xl">⚓</span>
									</div>
									<div className="text-3xl font-bold text-amber-400/80">
										$2,000
									</div>
									<p className="text-slate-400 mt-2 text-sm">
										3rd Place
									</p>
								</div>
							</div>

							<div className="mt-8 flex flex-wrap gap-3 justify-center">
								<span className="inline-block bg-[#0a0f1e]/40 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-yellow-200 border border-yellow-300/20">
									+ exclusive swag for all winners
								</span>
							</div>
						</div>
					</div>

					{/* Social Sharing Reward */}
					<div className="bg-[#0c1a2e]/60 backdrop-blur-sm rounded-3xl border border-amber-500/20 p-8 md:p-10">
						<div className="flex items-center gap-4 mb-6">
							<div className="bg-gradient-to-br from-amber-500 to-amber-700 p-4 rounded-xl shadow-lg">
								<Gift className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-2xl md:text-3xl font-bold text-amber-400">
								🎁 Early Bird Swag: Top 10 Social Sharers
							</h3>
						</div>
						<p className="text-lg text-slate-300 leading-relaxed mb-6">
							Register and share your participation on social
							media (LinkedIn / X / HackerNews / Reddit) tagging
							Coral. The top 10 posts win exclusive swag boxes!
						</p>
						<div className="flex items-center gap-3 bg-[#0a0f1e]/50 rounded-xl px-5 py-3 w-fit border border-amber-500/20">
							<Gift className="w-5 h-5 text-amber-400" />
							<span className="font-bold text-amber-400 text-lg">
								Top 10 Posts → Swag Box 📦
							</span>
						</div>
					</div>

					{/* Special Bounties Grid */}
					<h3 className="text-2xl md:text-3xl font-bold text-amber-400 text-center mt-12 mb-2">
						⚔️ Special Bounties
					</h3>
					<p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
						Beyond the main prizes, earn extra treasure through
						these special challenges.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Discord Showcase */}
						<div className="bg-[#0c1a2e]/60 backdrop-blur-sm rounded-2xl border border-amber-500/15 p-6 hover:border-amber-500/30 transition-all">
							<div className="flex items-center gap-3 mb-4">
								<Megaphone className="w-6 h-6 text-amber-400" />
								<h4 className="text-xl font-bold text-amber-400">
									Discord Showcase + Social Post
								</h4>
							</div>
							<p className="text-slate-300 text-sm leading-relaxed mb-4">
								Share your project in Discord{" "}
								<span className="text-amber-400 font-mono">
									#how-i-coral
								</span>{" "}
								+ at least one social platform (LinkedIn / X /
								HackerNews / Reddit) with screenshots and
								descriptions of what you built and why Coral was
								useful.
							</p>
							<div className="bg-[#0a0f1e]/50 rounded-lg px-4 py-3 border border-amber-500/10">
								<p className="text-amber-300 font-semibold">
									🏆 Best 50 showcases → Claude Max 5x
									1-month vouchers or $100 cash
								</p>
							</div>
						</div>

						{/* New Source Specs */}
						<div className="bg-[#0c1a2e]/60 backdrop-blur-sm rounded-2xl border border-cyan-500/15 p-6 hover:border-cyan-500/30 transition-all">
							<div className="flex items-center gap-3 mb-4">
								<Anchor className="w-6 h-6 text-cyan-400" />
								<h4 className="text-xl font-bold text-cyan-400">
									Build &quot;Wanted&quot; Source Specs
								</h4>
							</div>
							<p className="text-slate-300 text-sm leading-relaxed mb-4">
								We&apos;ll share a list of 10 &quot;wanted&quot;
								new sources (Hubspot, Asana, Zendesk, Airtable,
								etc.). Build the best source spec for each.
							</p>
							<div className="bg-[#0a0f1e]/50 rounded-lg px-4 py-3 border border-cyan-500/10">
								<p className="text-cyan-300 font-semibold flex items-center gap-2">
									<Heart className="w-4 h-4" />
									Best per source → $200 cash + $50 donation
									to sea life charity 🐠
								</p>
							</div>
						</div>

						{/* Before & After Videos */}
						<div className="bg-[#0c1a2e]/60 backdrop-blur-sm rounded-2xl border border-emerald-500/15 p-6 hover:border-emerald-500/30 transition-all">
							<div className="flex items-center gap-3 mb-4">
								<Video className="w-6 h-6 text-emerald-400" />
								<h4 className="text-xl font-bold text-emerald-400">
									&quot;Before & After&quot; Demo Videos
								</h4>
							</div>
							<p className="text-slate-300 text-sm leading-relaxed mb-4">
								Record a max 3-min video showing building an
								agent without Coral (APIs/CLIs/MCPs) vs. with
								Coral to highlight the advantages.
							</p>
							<div className="bg-[#0a0f1e]/50 rounded-lg px-4 py-3 border border-emerald-500/10">
								<p className="text-emerald-300 font-semibold">
									🎬 Top 3 → $50 Amazon voucher + featured on
									Kunal&apos;s YouTube
								</p>
							</div>
						</div>

						{/* How-to Guides */}
						<div className="bg-[#0c1a2e]/60 backdrop-blur-sm rounded-2xl border border-purple-500/15 p-6 hover:border-purple-500/30 transition-all">
							<div className="flex items-center gap-3 mb-4">
								<BookOpen className="w-6 h-6 text-purple-400" />
								<h4 className="text-xl font-bold text-purple-400">
									End-to-End &quot;How to Build X&quot; Guides
								</h4>
							</div>
							<p className="text-slate-300 text-sm leading-relaxed mb-4">
								Write a 2-3 page reproducible guide, e.g.
								&quot;I built a customer success dashboard with
								Claude Code + Coral, here&apos;s how.&quot;
							</p>
							<div className="bg-[#0a0f1e]/50 rounded-lg px-4 py-3 border border-purple-500/10">
								<p className="text-purple-300 font-semibold">
									📝 Best guides → Keychron mechanical
									keyboard / AirPods
								</p>
							</div>
						</div>

						{/* Referral Program */}
						<div className="bg-[#0c1a2e]/60 backdrop-blur-sm rounded-2xl border border-rose-500/15 p-6 hover:border-rose-500/30 transition-all md:col-span-2">
							<div className="flex items-center gap-3 mb-4">
								<Users className="w-6 h-6 text-rose-400" />
								<h4 className="text-xl font-bold text-rose-400">
									Recruit Yer Crew: Referral Bounty
								</h4>
							</div>
							<p className="text-slate-300 text-sm leading-relaxed mb-4">
								Refer 5 people who register AND submit a
								project. You&apos;ll be entered into a lucky
								draw.
							</p>
							<div className="bg-[#0a0f1e]/50 rounded-lg px-4 py-3 border border-rose-500/10">
								<p className="text-rose-300 font-semibold">
									🎲 Lucky draw for 5 Claude Pro 3-month
									vouchers
								</p>
							</div>
						</div>
					</div>

					{/* Submit CTA */}
					<div className="mt-12 text-center">
						{DATA.cta.disabled ? (
							<div
								className="inline-flex items-center gap-3 px-8 py-4 bg-slate-600/50 text-slate-400 font-bold text-lg rounded-xl cursor-not-allowed opacity-75"
								aria-disabled="true"
							>
								Submissions closed
								<span className="text-xl">🏴‍☠️</span>
							</div>
						) : (
							<Link
								href="https://forms.gle/dxBPLK17A8dXwp64A"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300"
							>
								Join the Crew
								<span className="text-xl">🏴‍☠️</span>
							</Link>
						)}
						<p className="text-slate-400 mt-4">
							{DATA.cta.disabled
								? "This hackathon has ended. Thank you for sailing with us!"
								: "Ready to set sail? Register and start building!"}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrizesShowcase;
