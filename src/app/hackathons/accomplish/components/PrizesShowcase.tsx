import { Briefcase, Gift, Star, Trophy } from "lucide-react";
import Link from "next/link";

const PrizesShowcase = () => {
	return (
		<div className="py-20">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-sky-500 to-amber-500 p-5 rounded-2xl shadow-lg shadow-sky-500/30">
							<Trophy className="w-10 h-10 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 via-amber-400 to-sky-500 bg-clip-text text-transparent mb-4">
						The Bounty
					</h2>
					<p className="text-lg text-slate-400 max-w-2xl mx-auto">
						The FBI put a bounty on Frank's head. We're putting one on yours. $2,500+ in prizes for the top 5 automations.
					</p>
				</div>

				{/* Prize Cards */}
				<div className="space-y-8">
					{/* Top 5 Winners */}
					<div className="relative rounded-3xl p-8 md:p-10 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-amber-600">
						{/* Decorative elements */}
						<div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
						<div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

						<div className="relative z-10">
							<div className="flex items-center justify-center gap-4 mb-6">
								<div className="bg-slate-900/40 backdrop-blur-sm p-4 rounded-xl">
									<Trophy className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-white">
									Top 5 Most Wanted
								</h3>
							</div>

							<p className="text-2xl md:text-3xl font-bold text-amber-400 text-center mb-8">
								5 winners · $500 each (cash)
							</p>

							<div className="flex flex-wrap gap-3 justify-center">
								<span className="inline-block bg-slate-900/40 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-white border border-white/20">
									+ exclusive swag for all winners
								</span>
								<span className="inline-block bg-slate-900/40 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-white border border-white/20">
									+ job interview at Accomplish.ai
								</span>
							</div>
						</div>
					</div>

					{/* Community Rewards - Two boxes side by side */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* GitHub Star Rewards */}
						<div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-sky-500/20 p-8 md:p-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-sky-500 to-amber-500 p-4 rounded-xl shadow-lg">
									<Star className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-sky-400">
									Swag Giveaway
								</h3>
							</div>

							<p className="text-lg text-slate-300 leading-relaxed mb-6 text-center">
								Star the{" "}
								<Link
									href="https://github.com/accomplish-ai/accomplish"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sky-400 hover:text-sky-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Accomplish GitHub repo
								</Link>{" "}
								and register for the hackathon. 10 lucky winners who star the repo will get{" "}
								<span className="text-amber-400 font-semibold">swag boxes shipped to them!</span>
							</p>

							<div className="flex items-center gap-3 bg-slate-800/50 rounded-xl px-5 py-3 w-fit border border-sky-500/20 mx-auto">
								<Gift className="w-5 h-5 text-sky-400" />
								<span className="font-bold text-sky-400 text-lg">
									10 Lucky Winners Get Swag Boxes
								</span>
							</div>
						</div>

						{/* Interview Opportunity */}
						<div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-sky-500/20 p-8 md:p-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-sky-500 to-amber-500 p-4 rounded-xl shadow-lg">
									<Briefcase className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-sky-400">
									Career Opportunity
								</h3>
							</div>

							<p className="text-lg text-slate-300 leading-relaxed mb-6 text-center">
								All top 5 winners get a job interview at{" "}
								<Link
									href="https://accomplish.ai"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sky-400 hover:text-sky-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Accomplish.ai
								</Link>
								. Frank impersonated his way into every job. You can actually earn yours by showing off your skills!
							</p>

							<div className="flex items-center gap-3 bg-slate-800/50 rounded-xl px-5 py-3 w-fit border border-sky-500/20 mx-auto">
								<Briefcase className="w-5 h-5 text-sky-400" />
								<span className="font-bold text-sky-400 text-lg">
									Job Interview at Accomplish.ai
								</span>
							</div>
						</div>
					</div>

					{/* Register CTA */}
					<div className="mt-12 text-center">
						<Link
							href="https://forms.gle/GRpyeRt8Gsm3r72V8"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-amber-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 transition-all duration-300"
						>
							Register
							<span className="text-xl">✈️</span>
						</Link>
						<p className="text-slate-400 mt-4">
							Think you can automate your way to the top? Prove it.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrizesShowcase;
