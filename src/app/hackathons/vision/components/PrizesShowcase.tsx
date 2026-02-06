import { Award, Briefcase, Gift, Star, Trophy } from "lucide-react";
import Link from "next/link";

const PrizesShowcase = () => {
	return (
		<div className="py-20">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-5 rounded-2xl shadow-lg shadow-cyan-500/30">
							<Trophy className="w-10 h-10 text-slate-900" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent mb-4">
						Mission Rewards
					</h2>
					<p className="text-lg text-slate-400 max-w-2xl mx-auto">
						Complete your mission and earn elite status with substantial rewards
					</p>
				</div>

				{/* Prize Cards */}
				<div className="space-y-8">
					{/* Top 3 Winners */}
					<div className="relative rounded-3xl p-8 md:p-10 overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-teal-800">
						{/* Decorative elements */}
						<div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
						<div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

						<div className="relative z-10">
							<div className="flex items-center gap-4 mb-8">
								<div className="bg-slate-900/40 backdrop-blur-sm p-4 rounded-xl">
									<Award className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-white">
									Elite Agent Rewards
								</h3>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{/* 1st Place */}
								<div className="bg-slate-900 rounded-2xl p-6 border border-cyan-400/30 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-cyan-400 font-bold text-lg">
											Mission Commander
										</span>
										<Trophy className="w-6 h-6 text-cyan-400" />
									</div>
									<div className="text-4xl md:text-5xl font-bold text-cyan-400">
										$2,000
									</div>
									<p className="text-slate-400 mt-2 text-sm">
										1st Place
									</p>
								</div>

								{/* 2nd Place */}
								<div className="bg-slate-900/90 rounded-2xl p-6 border border-cyan-400/20 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-cyan-400/90 font-bold text-lg">
											Senior Agent
										</span>
										<span className="text-xl">🎯</span>
									</div>
									<div className="text-3xl md:text-4xl font-bold text-cyan-400/90">
										$1,500
									</div>
									<p className="text-slate-400 mt-2 text-sm">
										2nd Place
									</p>
								</div>

								{/* 3rd Place */}
								<div className="bg-slate-900/80 rounded-2xl p-6 border border-cyan-400/10 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-cyan-400/80 font-bold text-lg">
											Field Operative
										</span>
										<span className="text-xl">🕵️</span>
									</div>
									<div className="text-3xl font-bold text-cyan-400/80">
										$500
									</div>
									<p className="text-slate-400 mt-2 text-sm">
										3rd Place
									</p>
								</div>
							</div>

							<div className="mt-8 flex flex-wrap gap-3 justify-center">
								<span className="inline-block bg-slate-900/40 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-white border border-white/20">
									+ exclusive agent swag
								</span>
								<span className="inline-block bg-slate-900/40 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-white border border-white/20">
									+ interview at WeMakeDevs
								</span>
							</div>
						</div>
					</div>

					{/* Community Rewards - Two boxes side by side */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Intel Network Rewards */}
						<div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-cyan-500/20 p-8 md:p-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-4 rounded-xl shadow-lg">
									<Star className="w-8 h-8 text-slate-900" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
									Intel Network Rewards
								</h3>
							</div>

							<p className="text-lg text-slate-300 leading-relaxed mb-6 text-center">
								Join the network! Star the{" "}
								<Link
									href="https://github.com/GetStream/Vision-Agents"
									target="_blank"
									rel="noopener noreferrer"
									className="text-cyan-400 hover:text-cyan-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Vision Agents repository
								</Link>{" "}
								on GitHub and share your mission progress on social media (						tag{" "}
								<Link
									href="https://twitter.com/getabordfn"
									target="_blank"
									rel="noopener noreferrer"
									className="text-cyan-400 hover:text-cyan-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									@VisionAgents
								</Link>
								). Top 10 intel reports win swag bundles.
							</p>

							<div className="flex items-center gap-3 bg-slate-800/50 rounded-xl px-5 py-3 w-fit border border-cyan-500/20 mx-auto">
								<Gift className="w-5 h-5 text-cyan-400" />
								<span className="font-bold text-cyan-400 text-lg">
									Top 10 Posts Win Swag
								</span>
							</div>
						</div>

						{/* Career Opportunities */}
						<div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-cyan-500/20 p-8 md:p-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-4 rounded-xl shadow-lg">
									<Briefcase className="w-8 h-8 text-slate-900" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
									Career Opportunities
								</h3>
							</div>

							<p className="text-lg text-slate-300 leading-relaxed mb-6 text-center">
								Outstanding agents may be recruited for positions at{" "}
								<Link
									href="https://www.wemakedevs.org"
									target="_blank"
									rel="noopener noreferrer"
									className="text-cyan-400 hover:text-cyan-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									WeMakeDevs
								</Link>
								. Showcase your vision AI skills and join the team building the future of real-time video!
							</p>

							<div className="flex items-center gap-3 bg-slate-800/50 rounded-xl px-5 py-3 w-fit border border-cyan-500/20 mx-auto">
								<Briefcase className="w-5 h-5 text-cyan-400" />
								<span className="font-bold text-cyan-400 text-lg">
									Join the WeMakeDevs Team
								</span>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default PrizesShowcase;
