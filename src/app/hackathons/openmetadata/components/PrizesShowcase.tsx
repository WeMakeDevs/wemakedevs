import { Award, Briefcase, Gift, Star, Trophy } from "lucide-react";
import Link from "next/link";

const PrizesShowcase = () => {
	return (
		<div className="py-20">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-amber-500 to-orange-600 p-5 rounded-2xl shadow-lg shadow-amber-500/30">
							<Trophy className="w-10 h-10 text-slate-900" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent mb-4">
						Temporal Treasures
					</h2>
					<p className="text-lg text-slate-400 max-w-2xl mx-auto">
						The best time travelers get rewarded. Every team member takes home a prize.
					</p>
				</div>

				{/* Prize Cards */}
				<div className="space-y-8">
					{/* Top Prizes */}
					<div className="relative rounded-3xl p-8 md:p-10 overflow-hidden bg-gradient-to-br from-amber-600 via-amber-700 to-orange-800">
						<div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
						<div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

						<div className="relative z-10">
							<div className="flex items-center gap-4 mb-8">
								<div className="bg-slate-900/40 backdrop-blur-sm p-4 rounded-xl">
									<Award className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-white">
									Top Prizes
								</h3>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{/* 1st Place */}
								<div className="bg-slate-900 rounded-2xl p-6 border border-amber-400/30 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-amber-400 font-bold text-lg">
											1st Place
										</span>
										<Trophy className="w-6 h-6 text-amber-400" />
									</div>
									<div className="text-3xl md:text-4xl font-bold text-amber-400">
										MacBook Neo
									</div>
									<p className="text-slate-400 mt-2 text-sm">
										For every team member
									</p>
								</div>

								{/* 2nd Place */}
								<div className="bg-slate-900/90 rounded-2xl p-6 border border-amber-400/20 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-amber-400/90 font-bold text-lg">
											2nd Place
										</span>
										<span className="text-xl">🏆</span>
									</div>
									<div className="text-3xl md:text-4xl font-bold text-amber-400/90">
										iPad
									</div>
									<p className="text-slate-400 mt-2 text-sm">
										For every team member
									</p>
								</div>

								{/* 3rd Place */}
								<div className="bg-slate-900/80 rounded-2xl p-6 border border-amber-400/10 shadow-xl">
									<div className="flex items-center justify-between mb-4">
										<span className="text-amber-400/80 font-bold text-lg">
											3rd Place
										</span>
										<span className="text-xl">🎯</span>
									</div>
									<div className="text-3xl font-bold text-amber-400/80">
										Exclusive Swag Kit
									</div>
									<p className="text-slate-400 mt-2 text-sm">
										For every team member
									</p>
								</div>
							</div>

							<div className="mt-8 flex flex-wrap gap-3 justify-center">
								<span className="inline-block bg-slate-900/40 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-white border border-white/20">
									+ job interviews with Team Collate
								</span>
							</div>
						</div>
					</div>

					{/* Side Quest & Career */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Side Quest */}
						<div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-amber-500/20 p-8 md:p-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-amber-500 to-orange-600 p-4 rounded-xl shadow-lg">
									<Star className="w-8 h-8 text-slate-900" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-amber-400">
									Side Quest
								</h3>
							</div>

							<p className="text-lg text-slate-300 leading-relaxed mb-6 text-center">
								Star the{" "}
								<Link
									href="https://github.com/open-metadata/OpenMetadata"
									target="_blank"
									rel="noopener noreferrer"
									className="text-amber-400 hover:text-amber-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									OpenMetadata repository
								</Link>{" "}
								on GitHub and share your participation on social media.
								Top 10 random participants will receive swag boxes sent to them!
							</p>

							<div className="flex items-center gap-3 bg-slate-800/50 rounded-xl px-5 py-3 w-fit border border-amber-500/20 mx-auto">
								<Gift className="w-5 h-5 text-amber-400" />
								<span className="font-bold text-amber-400 text-lg">
									10 Random Winners Get Swag Boxes
								</span>
							</div>
						</div>

						{/* Career Opportunities */}
						<div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-amber-500/20 p-8 md:p-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-amber-500 to-orange-600 p-4 rounded-xl shadow-lg">
									<Briefcase className="w-8 h-8 text-slate-900" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-amber-400">
									Career Opportunities
								</h3>
							</div>

							<p className="text-lg text-slate-300 leading-relaxed mb-6 text-center">
								Top winners will get job interview opportunities with{" "}
								<Link
									href="https://www.getcollate.io"
									target="_blank"
									rel="noopener noreferrer"
									className="text-amber-400 hover:text-amber-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Team Collate
								</Link>
								, the company behind OpenMetadata. Showcase your metadata skills
								and build your future career!
							</p>

							<div className="flex items-center gap-3 bg-slate-800/50 rounded-xl px-5 py-3 w-fit border border-amber-500/20 mx-auto">
								<Briefcase className="w-5 h-5 text-amber-400" />
								<span className="font-bold text-amber-400 text-lg">
									Interview with Team Collate
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
