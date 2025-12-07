import { Gift, Star, Trophy } from "lucide-react";

const PrizesShowcase = () => {
	return (
		<div className="bg-[#0b1114] py-20 border-y border-white/5">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-16">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-green-500 to-emerald-400 p-4 rounded-2xl shadow-[0_12px_30px_rgba(6,13,9,0.35)] border border-green-400/40">
							<Trophy className="w-8 h-8 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 leading-tight font-mono">
						<span className="text-green-400">&gt;</span> Prizes &
						Rewards
					</h2>
					<p className="text-lg text-slate-300 max-w-2xl mx-auto font-mono">
						Compete for amazing prizes and showcase your backend
						innovation
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8">
					{/* Top 3 Winners (three cards) */}
					<div className="relative rounded-2xl shadow-[0_20px_45px_rgba(9,18,15,0.5)] p-8 text-white overflow-hidden bg-[#111c18]/95 group transition-all duration-300 border border-green-500/20 hover:border-green-400/40">
						{/* subtle graphic accents */}
						<div className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 bg-green-500/15 rounded-full blur-3xl" />
						<div className="pointer-events-none absolute -bottom-8 -left-8 w-40 h-40 bg-green-500/15 rounded-full blur-3xl" />
						<div className="relative z-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-green-500/15 backdrop-blur-sm p-4 rounded-xl border border-green-400/40 shadow-[0_0_15px_rgba(0,255,65,0.25)]">
									<Trophy className="w-8 h-8 text-green-200" />
								</div>
								<h3 className="text-2xl font-bold text-slate-100 font-mono">
									&gt; Top 3 Winners
								</h3>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								{/* 1st */}
								<div className="bg-[#0d1511] text-green-200 rounded-xl p-5 shadow-[0_15px_25px_rgba(4,8,6,0.45)] border border-green-500/40">
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-semibold text-green-400 font-mono">
											&gt; 1st Prize
										</span>
										<div className="flex items-center gap-1 text-green-400">
											<Trophy className="w-4 h-4" />
										</div>
									</div>
									<div className="text-3xl md:text-5xl font-bold font-mono text-slate-100">
										$1,500
									</div>
								</div>
								{/* 2nd */}
								<div className="bg-[#0d1511]/95 text-green-200 rounded-xl p-5 shadow-[0_15px_25px_rgba(4,8,6,0.4)] border border-green-500/30">
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-semibold text-green-400 font-mono">
											&gt; 2nd Prize
										</span>
										<div className="flex items-center gap-1 text-green-400 opacity-90">
											<Trophy className="w-4 h-4" />
										</div>
									</div>
									<div className="text-3xl md:text-4xl font-bold font-mono text-slate-100">
										$1,000
									</div>
								</div>
								{/* 3rd */}
								<div className="bg-[#0d1511]/90 text-green-200 rounded-xl p-5 shadow-[0_15px_25px_rgba(4,8,6,0.35)] border border-green-500/25">
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-semibold text-green-400 font-mono">
											&gt; 3rd Prize
										</span>
										<div className="flex items-center gap-1 text-green-400 opacity-80">
											<Trophy className="w-4 h-4" />
										</div>
									</div>
									<div className="text-3xl font-bold font-mono text-slate-100">
										$500
									</div>
								</div>
							</div>
							<div className="mt-6">
								<p className="text-slate-200 mb-2 font-medium font-mono">
									&gt; For every winner:
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-[6px] font-medium border border-green-400/50 text-green-100 font-mono shadow-[0_0_10px_rgba(0,255,65,0.2)]">
										Exclusive swag boxes
									</span>
									<span className="bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-[6px] font-medium border border-green-400/50 text-green-100 font-mono shadow-[0_0_10px_rgba(0,255,65,0.2)]">
										Google Summer of Code mentorship
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Community Rewards */}
					<div className="bg-gradient-to-br from-[#10161c] to-[#112130] rounded-2xl border border-green-500/25 shadow-[0_20px_40px_rgba(9,18,15,0.45)] p-8 h-full flex flex-col">
						<div className="flex items-center gap-4 mb-6">
							<div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.4)] border border-green-400/50">
								<Star className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-2xl font-bold text-slate-100 font-mono">
								&gt; Community Rewards
							</h3>
						</div>
						<div className="flex-grow">
							<p className="text-slate-200 leading-relaxed mb-4 font-mono">
								<span className="text-green-400">&gt;</span>{" "}
								Star the{" "}
								<a
									href="https://git.new/kunal-motia"
									target="_blank"
									rel="noopener noreferrer"
									className="text-green-200 hover:text-green-100 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Motia repository
								</a>{" "}
								on GitHub and share your participation on social
								media (don't forget to tag{" "}
								<a
									href="https://motia.dev"
									target="_blank"
									rel="noopener noreferrer"
									className="text-green-200 hover:text-green-100 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Motia
								</a>
								). Top 10 posts will win Motia credits and swag
								bundles.
							</p>
							<div className="flex items-center gap-2 bg-green-500/15 rounded-lg px-4 py-2 w-fit border border-green-400/30 shadow-[0_0_12px_rgba(0,255,65,0.18)]">
								<Gift className="w-4 h-4 text-green-200" />
								<span className="font-semibold text-slate-100 rounded-[6px] font-mono">
									&gt; Top 10 Posts Win Prizes
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
