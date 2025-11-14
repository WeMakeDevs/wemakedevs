import { Code, Rocket, Sparkles } from "lucide-react";

const AboutSection = () => {
	return (
		<div className="bg-gradient-to-b from-[#080c08] via-[#0c1313] to-[#101a20] py-16 border-b border-green-500/15">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-green-500 to-emerald-500 p-4 rounded-2xl shadow-[0_12px_30px_rgba(6,13,9,0.35)] border border-green-400/40">
							<Rocket className="w-8 h-8 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight font-mono">
						<span className="text-green-400">&gt;</span> Backend
						Reloaded
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<p className="text-lg md:text-xl text-slate-200 leading-relaxed font-mono">
							<span className="text-green-400">&gt;</span> Gone
							are the days of juggling countless services,
							frameworks, and queues just to make your backend
							work. With Motia, APIs, background jobs, scheduled
							tasks, and AI agents all live in one powerful
							runtime, unified, observable, and production-ready
							from day one.
						</p>
						<p className="text-lg md:text-xl text-slate-200 leading-relaxed font-mono">
							<span className="text-green-400">&gt;</span> Join
							Backend Reloaded Hackathon to build the next
							generation of backends, showcase your creativity,
							and win exciting prizes, cash rewards, and exclusive
							Motia swag.
						</p>
						<p className="text-lg md:text-xl text-slate-200 leading-relaxed font-mono">
							<span className="text-green-400">&gt;</span> It's
							time to rethink how backends are built; faster,
							simpler, and smarter.
						</p>
					</div>

					<div className="space-y-6">
						<div className="bg-[#111c18]/90 rounded-2xl p-6 shadow-[0_10px_30px_rgba(8,12,9,0.35)] border border-green-500/20 hover:border-green-400/40 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-green-500 p-3 rounded-xl shadow-[0_0_15px_rgba(0,255,65,0.4)]">
									<Code className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-slate-100 font-mono">
										&gt; Unified Runtime
									</h3>
									<p className="text-slate-300 font-mono text-sm">
										One platform for everything
									</p>
								</div>
							</div>
							<p className="text-slate-200 font-mono">
								Build APIs, background jobs, scheduled tasks,
								and AI agents all in one powerful runtime. No
								more juggling multiple services and frameworks.
							</p>
						</div>

						<div className="bg-[#111c18]/90 rounded-2xl p-6 shadow-[0_10px_30px_rgba(8,12,9,0.35)] border border-green-500/20 hover:border-green-400/40 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-green-600 p-3 rounded-xl shadow-[0_0_15px_rgba(0,255,65,0.4)]">
									<Rocket className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-slate-100 font-mono">
										&gt; Production Ready
									</h3>
									<p className="text-slate-300 font-mono text-sm">
										From day one
									</p>
								</div>
							</div>
							<p className="text-slate-200 font-mono">
								With full observability, scalability, and
								resiliency built-in, your backend is
								production-ready from the start. Deploy with one
								command.
							</p>
						</div>

						<div className="bg-[#111c18]/90 rounded-2xl p-6 shadow-[0_10px_30px_rgba(8,12,9,0.35)] border border-green-500/20 hover:border-green-400/40 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-green-500 p-3 rounded-xl shadow-[0_0_15px_rgba(0,255,65,0.4)]">
									<Sparkles className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-slate-100 font-mono">
										&gt; Win Prizes
									</h3>
									<p className="text-slate-300 font-mono text-sm">
										$3,000+ in rewards
									</p>
								</div>
							</div>
							<p className="text-slate-200 font-mono">
								Compete for cash prizes, Motia swag, and Google
								Summer of Code mentorship. Top 3 winners take
								home $3,000+ plus rewards.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
