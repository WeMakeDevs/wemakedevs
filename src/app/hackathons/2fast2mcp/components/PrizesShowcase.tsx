import { Briefcase, Gift, Star, Trophy } from "lucide-react";
import Link from "next/link";

const PrizesShowcase = () => {
	return (
		<div className="py-20">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-orange-500 to-red-600 p-5 rounded-2xl shadow-lg shadow-orange-500/30">
							<Trophy className="w-10 h-10 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
						Winner's Circle
					</h2>
					<p className="text-lg text-slate-400 max-w-2xl mx-auto">
						Cross the finish line and claim your victory. $10,000+
						in prizes for the fastest builders.
					</p>
				</div>

				{/* Prize Cards */}
				<div className="space-y-8">
					{/* Top 3 Winners */}
					<div className="relative rounded-3xl p-8 md:p-10 overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-orange-700">
						{/* Decorative elements */}
						<div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
						<div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

						<div className="relative z-10">
							<div className="flex items-center gap-4 mb-8">
								<div className="bg-slate-900/40 backdrop-blur-sm p-4 rounded-xl">
									<Trophy className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-white">
									Top 3 Podium Finishers
								</h3>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{/* 1st Prize */}
								<div className="bg-slate-900 rounded-2xl p-6 border border-orange-400/30 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-orange-400 font-bold text-lg">
											1st Place
										</span>
										<div className="flex items-center gap-1">
											<span className="text-2xl">🏆</span>
										</div>
									</div>
									<div className="text-4xl md:text-5xl font-bold text-orange-400">
										$5,000
									</div>
									<p className="text-slate-400 mt-2 text-sm">
										Champion of the Track
									</p>
								</div>

								{/* 2nd Prize */}
								<div className="bg-slate-900/90 rounded-2xl p-6 border border-orange-400/20 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-orange-400/90 font-bold text-lg">
											2nd Place
										</span>
										<div className="flex items-center gap-1">
											<span className="text-2xl">🥈</span>
										</div>
									</div>
									<div className="text-3xl md:text-4xl font-bold text-orange-400/90">
										$3,000
									</div>
									<p className="text-slate-400 mt-2 text-sm">
										Speed Demon
									</p>
								</div>

								{/* 3rd Prize */}
								<div className="bg-slate-900/80 rounded-2xl p-6 border border-orange-400/10 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-orange-400/80 font-bold text-lg">
											3rd Place
										</span>
										<div className="flex items-center gap-1">
											<span className="text-2xl">🥉</span>
										</div>
									</div>
									<div className="text-3xl font-bold text-orange-400/80">
										$2,000
									</div>
									<p className="text-slate-400 mt-2 text-sm">
										Road Warrior
									</p>
								</div>
							</div>

							<div className="mt-8 flex flex-wrap gap-3 justify-center">
								<span className="inline-block bg-slate-900/40 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-white border border-white/20">
									+ exclusive swag for all winners
								</span>
								<span className="inline-block bg-slate-900/40 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-white border border-white/20">
									+ job interview at Archestra.ai with the CEO
								</span>
							</div>

							<div className="mt-6 text-center">
								<Link
									href={`/hackathons/2fast2mcp/rules`}
									className="text-slate-300 hover:text-orange-400 text-sm underline transition-colors"
								>
									Check the rules for prize distribution details
								</Link>
							</div>
						</div>
					</div>

					{/* Community Rewards - Two boxes side by side */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Pit Crew Rewards */}
						<div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-orange-500/20 p-8 md:p-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-xl shadow-lg">
									<Star className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-orange-400">
									Pit Crew Rewards
								</h3>
							</div>

							<p className="text-lg text-slate-300 leading-relaxed mb-6 text-center">
								Show your support for the crew! Star the{" "}
								<Link
									href="https://github.com/archestra-ai/archestra"
									target="_blank"
									rel="noopener noreferrer"
									className="text-orange-400 hover:text-orange-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Archestra repository
								</Link>{" "}
								on GitHub and share your participation on social
								media (don't forget to tag{" "}
								<Link
									href="https://archestra.ai"
									target="_blank"
									rel="noopener noreferrer"
									className="text-orange-400 hover:text-orange-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Archestra
								</Link>
								). Top 10 posts will win swag bundles - because
								family takes care of family.
							</p>

							<div className="flex items-center gap-3 bg-slate-800/50 rounded-xl px-5 py-3 w-fit border border-orange-500/20 mx-auto">
								<Gift className="w-5 h-5 text-orange-400" />
								<span className="font-bold text-orange-400 text-lg">
									Top 10 Posts Win Swag Boxes
								</span>
							</div>
						</div>

						{/* Interview Opportunity */}
						<div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-orange-500/20 p-8 md:p-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-xl shadow-lg">
									<Briefcase className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-orange-400">
									Career Opportunities
								</h3>
							</div>

							<p className="text-lg text-slate-300 leading-relaxed mb-6 text-center">
								All winners will get the opportunity to interview for a job position at{" "}
								<Link
									href="https://archestra.ai"
									target="_blank"
									rel="noopener noreferrer"
									className="text-orange-400 hover:text-orange-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Archestra.ai
								</Link>
								{" "}with the CEO. Showcase your skills and join the team building the future of MCP-based agent orchestration!
							</p>

							<div className="flex items-center gap-3 bg-slate-800/50 rounded-xl px-5 py-3 w-fit border border-orange-500/20 mx-auto">
								<Briefcase className="w-5 h-5 text-orange-400" />
								<span className="font-bold text-orange-400 text-lg">
									Job Interview at Archestra.ai with the CEO
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
