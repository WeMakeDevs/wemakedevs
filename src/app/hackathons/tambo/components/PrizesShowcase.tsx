import { Gift, Sparkles, Star, Trophy } from "lucide-react";

const PrizesShowcase = () => {
	return (
		<div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 mt-8">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-16">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-4 rounded-2xl shadow-lg shadow-amber-500/30">
							<Trophy className="w-8 h-8 text-slate-900" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent mb-4 leading-tight">
						Galactic Prizes & Rewards
					</h2>
					<p className="text-lg text-slate-400 max-w-2xl mx-auto">
						Compete for legendary prizes and showcase your mastery
						of the Generative UI Force
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8">
					{/* Top 3 Winners (three cards) */}
					<div className="relative rounded-2xl shadow-xl p-8 text-white overflow-hidden bg-gradient-to-br from-amber-600 via-amber-700 to-yellow-800 group hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300">
						{/* subtle graphic accents */}
						<div className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
						<div className="pointer-events-none absolute -bottom-8 -left-8 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
						<div className="relative z-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-slate-900/30 backdrop-blur-sm p-4 rounded-xl border border-white/30">
									<Trophy className="w-8 h-8" />
								</div>
								<h3 className="text-2xl font-bold text-white">
									Top 3 Jedi Masters
								</h3>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								{/* 1st */}
								<div className="bg-slate-900 text-white rounded-xl p-5 shadow-md border border-amber-500/30">
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-semibold text-amber-400">
											Grand Master
										</span>
										<div className="flex items-center gap-1 text-amber-400">
											<Trophy className="w-4 h-4" />
										</div>
									</div>
									<div className="text-3xl md:text-5xl font-bold text-amber-400">
										$3,000
									</div>
								</div>
								{/* 2nd */}
								<div className="bg-slate-900/95 text-white rounded-xl p-5 shadow-md border border-amber-500/20">
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-semibold text-amber-400">
											Jedi Knight
										</span>
										<div className="flex items-center gap-1 text-amber-400 opacity-90">
											<Trophy className="w-4 h-4" />
										</div>
									</div>
									<div className="text-3xl md:text-4xl font-bold text-amber-400/90">
										$2,000
									</div>
								</div>
								{/* 3rd */}
								<div className="bg-slate-900/90 text-white rounded-xl p-5 shadow-md border border-amber-500/10">
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-semibold text-amber-400">
											Padawan Elite
										</span>
										<div className="flex items-center gap-1 text-amber-400 opacity-80">
											<Trophy className="w-4 h-4" />
										</div>
									</div>
									<div className="text-3xl font-bold text-amber-400/80">
										$1,000
									</div>
								</div>
							</div>
							<div className="flex flex-wrap gap-2 mt-6">
								<span className="bg-slate-900/30 backdrop-blur-sm px-4 py-2 rounded-[6px] font-medium border border-white/30">
									+ Tambo credits
								</span>
								<span className="bg-slate-900/30 backdrop-blur-sm px-4 py-2 rounded-[6px] font-medium border border-white/30">
									+ exclusive swag
								</span>
							</div>
						</div>
					</div>

					{/* Community Rewards */}
					<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-amber-500/30 shadow-lg shadow-amber-500/10 p-8 h-full flex flex-col">
						<div className="flex items-center gap-4 mb-6">
							<div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-4 rounded-xl shadow-md">
								<Star className="w-8 h-8 text-slate-900" />
							</div>
							<h3 className="text-2xl font-bold text-amber-400">
								Rebel Alliance Rewards
							</h3>
						</div>
						<div className="flex-grow">
							<p className="text-slate-300 leading-relaxed mb-4">
								Join the Rebel Alliance! Star the{" "}
								<a
									href="https://github.com/tambo-ai/tambo"
									target="_blank"
									rel="noopener noreferrer"
									className="text-amber-400 hover:text-amber-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Tambo repository
								</a>{" "}
								on GitHub and share your participation on social
								media (don't forget to tag{" "}
								<a
									href="https://tambo.co"
									target="_blank"
									rel="noopener noreferrer"
									className="text-amber-400 hover:text-amber-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Tambo
								</a>
								). Top 10 posts will win Tambo credits and swag
								bundles.
							</p>
							<div className="flex items-center gap-2 bg-slate-900/60 rounded-lg px-4 py-2 w-fit border border-amber-500/30">
								<Gift className="w-4 h-4 text-amber-400" />
								<span className="font-semibold text-amber-400 rounded-[6px]">
									Top 10 Posts Win Prizes
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
