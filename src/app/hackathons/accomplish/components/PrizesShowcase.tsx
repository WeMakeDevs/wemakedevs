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
						The FBI put a bounty on Frank's head. We're putting one on yours. <span className="text-amber-400 font-semibold">$3000 cash, 30 winners</span> + interview opportunities.
					</p>
				</div>

				{/* Prize Cards */}
				<div className="space-y-8">
					{/* 30 Total Winners - highlight at top */}
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
									30 Total Winners
								</h3>
							</div>

							<p className="text-2xl md:text-3xl font-bold text-amber-400 text-center mb-6">
								$3000 cash, 30 winners + interview opportunities
							</p>

							<p className="text-slate-200 text-center mb-6">
								Two tracks. One person can win both.
							</p>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
								<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center">
									<p className="font-bold text-white mb-1">10 winners · $100 each</p>
									<p className="text-slate-200 text-sm">
										Highlight: showcase how you used Accomplish to automate your task
									</p>
								</div>
								<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center">
									<p className="font-bold text-white mb-1">Top 20 · $100 each</p>
									<p className="text-slate-200 text-sm">
										Open source: get your PR merged
									</p>
								</div>
							</div>

							<div className="flex flex-wrap gap-3 justify-center">
								<span className="inline-block bg-slate-900/40 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-white border border-white/20">
									One person can win both tracks
								</span>
								<span className="inline-block bg-slate-900/40 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-white border border-white/20">
									+ job interview at Accomplish.ai
								</span>
							</div>
						</div>
					</div>

					{/* Two tracks in detail - side by side */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* 10 winners: Showcase how you used Accomplish to automate your task */}
						<div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-amber-500/30 p-8 md:p-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-amber-500 to-orange-500 p-4 rounded-xl shadow-lg">
									<Trophy className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-amber-400">
									Showcase How You Used Accomplish to Automate Your Task
								</h3>
							</div>

							<p className="text-lg text-slate-300 leading-relaxed mb-6 text-center">
								10 winners (highlight track) are chosen for showcasing how they used Accomplish to automate their task. Build something useful, record your demo, and win{" "}
								<span className="text-amber-400 font-semibold">$100 each</span> + job interview at Accomplish.ai.
							</p>

							<div className="flex items-center gap-3 bg-slate-800/50 rounded-xl px-5 py-3 w-fit border border-amber-500/30 mx-auto">
								<Gift className="w-5 h-5 text-amber-400" />
								<span className="font-bold text-amber-400 text-lg">
									10 winners · $100 each
								</span>
							</div>
						</div>

						{/* Top 20: Get your PR merged (open source) */}
						<div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-amber-500/30 p-8 md:p-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-amber-500 to-orange-500 p-4 rounded-xl shadow-lg">
									<Star className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-amber-400">
									Start Your Open Source Journey
								</h3>
							</div>

							<p className="text-lg text-slate-300 leading-relaxed mb-6 text-center">
								Top 20 (open source track) for contributors.{" "}
								<Link
									href="https://github.com/accomplish-ai/accomplish/issues?q=is%3Aissue%20state%3Aopen%20label%3Afeb_hackathon"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sky-400 hover:text-sky-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Pick an issue with the label <code className="text-amber-400 bg-slate-800 px-1.5 py-0.5 rounded">feb_hackathon</code>
								</Link>
								, get your PR merged, and win{" "}
								<span className="text-amber-400 font-semibold">$100 each</span> + job interview at Accomplish.ai. One person can win both this and the highlight track.
							</p>

							<div className="flex items-center gap-3 bg-slate-800/50 rounded-xl px-5 py-3 w-fit border border-amber-500/30 mx-auto">
								<Gift className="w-5 h-5 text-amber-400" />
								<span className="font-bold text-amber-400 text-lg">
									Top 20 · $100 each
								</span>
							</div>
						</div>
					</div>

					{/* Community Rewards - Two boxes side by side */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Social Share Swag Giveaway */}
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
								After you register, share on socials and tag{" "}
								<span className="text-sky-400 font-semibold">@wemakedevs</span> and{" "}
								<span className="text-sky-400 font-semibold">@Accomplish_ai</span>. Share your
								experience, what you build, and more. 10 lucky winners will get{" "}
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
								All top winners get a job interview at{" "}
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
