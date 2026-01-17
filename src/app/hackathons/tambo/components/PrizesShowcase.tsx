import { Gift, Star, Trophy } from "lucide-react";
import Link from "next/link";

const PrizesShowcase = () => {
	return (
		<div className="py-20">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-5 rounded-2xl shadow-lg shadow-amber-500/30">
							<Trophy className="w-10 h-10 text-slate-900" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent mb-4">
						Galactic Prizes & Rewards
					</h2>
					<p className="text-lg text-slate-400 max-w-2xl mx-auto">
						Compete for legendary prizes and showcase your mastery
						of the Generative UI Force
					</p>
				</div>

				{/* Prize Cards */}
				<div className="space-y-8">
					{/* Top 3 Winners */}
					<div className="relative rounded-3xl p-8 md:p-10 overflow-hidden bg-gradient-to-br from-amber-600 via-amber-700 to-yellow-800">
						{/* Decorative elements */}
						<div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
						<div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

						<div className="relative z-10">
							<div className="flex items-center gap-4 mb-8">
								<div className="bg-slate-900/40 backdrop-blur-sm p-4 rounded-xl">
									<Trophy className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-white">
									Top 3 Jedi Masters
								</h3>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{/* 1st Prize */}
								<div className="bg-slate-900 rounded-2xl p-6 border border-amber-400/30 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-amber-400 font-bold text-lg">
											Grand Master
										</span>
										<Trophy className="w-6 h-6 text-amber-400" />
									</div>
									<div className="text-4xl md:text-5xl font-bold text-amber-400">
										$3,000
									</div>
								</div>

								{/* 2nd Prize */}
								<div className="bg-slate-900/90 rounded-2xl p-6 border border-amber-400/20 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-amber-400/90 font-bold text-lg">
											Jedi Knight
										</span>
										<Trophy className="w-5 h-5 text-amber-400/90" />
									</div>
									<div className="text-3xl md:text-4xl font-bold text-amber-400/90">
										$2,000
									</div>
								</div>

								{/* 3rd Prize */}
								<div className="bg-slate-900/80 rounded-2xl p-6 border border-amber-400/10 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-amber-400/80 font-bold text-lg">
											Padawan Elite
										</span>
										<Trophy className="w-5 h-5 text-amber-400/80" />
									</div>
									<div className="text-3xl font-bold text-amber-400/80">
										$1,000
									</div>
								</div>
							</div>

							<div className="mt-8">
								<span className="inline-block bg-slate-900/40 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-white border border-white/20">
									+ exclusive swag for all winners
								</span>
							</div>
						</div>
					</div>

					{/* Community Rewards */}
					<div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-amber-500/20 p-8 md:p-10">
						<div className="flex items-center gap-4 mb-6">
							<div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-4 rounded-xl shadow-lg">
								<Star className="w-8 h-8 text-slate-900" />
							</div>
							<h3 className="text-2xl md:text-3xl font-bold text-amber-400">
								Rebel Alliance Rewards
							</h3>
						</div>

						<p className="text-lg text-slate-300 leading-relaxed mb-6 max-w-3xl" style={{ wordBreak: 'normal', overflowWrap: 'normal' }}>
							Join the Rebel Alliance! Star the{" "}
							<Link
								href="https://github.com/tambo-ai/tambo"
								target="_blank"
								rel="noopener noreferrer"
								className="text-amber-400 hover:text-amber-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								style={{ display: 'inline' }}
							>
								Tambo repository
							</Link>{" "}
							on GitHub and share your participation on social media (don't forget to tag{" "}
							<Link
								href="https://tambo.co"
								target="_blank"
								rel="noopener noreferrer"
								className="text-amber-400 hover:text-amber-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								style={{ display: 'inline' }}
							>
								Tambo
							</Link>
							). Top 10 posts will win swag bundles.
						</p>

						<div className="flex items-center gap-3 bg-slate-800/50 rounded-xl px-5 py-3 w-fit border border-amber-500/20">
							<Gift className="w-5 h-5 text-amber-400" />
							<span className="font-bold text-amber-400 text-lg">
								Top 10 Posts Win Swag Boxes
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrizesShowcase;
