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
							<span className="text-green-400">&gt;</span> Modern
							backends shouldn't require juggling frameworks,
							queues, and services. Motia unifies everything. API
							endpoints, background jobs, durable workflows, AI
							agents, streaming, and observability into one
							runtime with a single core primitive.
						</p>
						<p className="text-lg md:text-xl text-slate-200 leading-relaxed font-mono">
							<span className="text-green-400">&gt;</span> Join
							Backend Reloaded Hackathon to build next-generation
							backends that are simpler, faster, and
							production-ready from the start. Win cash prizes,
							exclusive swag, and mentorship opportunities.
						</p>
						<p className="text-lg md:text-xl text-slate-200 leading-relaxed font-mono">
							<span className="text-green-400">&gt;</span> It's
							time to build backends the way they should be:
							unified, observable, and effortless.
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
										&gt; Single Core Primitive
									</h3>
									<p className="text-slate-300 font-mono text-sm">
										Everything unified
									</p>
								</div>
							</div>
							<p className="text-slate-200 font-mono">
								Write APIs, background jobs, workflows, and AI
								agents using one primitive - Steps. Add
								observability, state management, and streaming
								without extra configuration. Reduces juggling
								between different tools and framework.
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
										Deploy with confidence
									</p>
								</div>
							</div>
							<p className="text-slate-200 font-mono">
								Built-in observability, distributed state,
								durable execution, and real-time streaming.
								Scale from prototype to production with one
								command. Resilient by default.
							</p>
						</div>

						<div className="bg-[#111c18]/90 rounded-2xl p-6 shadow-[0_10px_30px_rgba(8,12,9,0.35)] border border-green-500/20 hover:border-green-400/40 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-green-500 p-3 rounded-xl shadow-[0_0_15px_rgba(0,255,65,0.4)]">
									<Sparkles className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-slate-100 font-mono">
										&gt; Win Big
									</h3>
									<p className="text-slate-300 font-mono text-sm">
										$3,000+ in prizes
									</p>
								</div>
							</div>
							<p className="text-slate-200 font-mono">
								Compete for cash rewards, exclusive Motia swag,
								and Google Summer of Code mentorship. Top 3
								winners share $3,000+.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
