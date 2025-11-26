import { Rocket, Sparkles, Zap } from "lucide-react";

const AboutSection = () => {
	return (
		<div className="bg-gradient-to-b from-white via-blue-50 to-white py-16 border-b border-blue-200">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-2xl shadow-lg border border-blue-300">
							<Rocket className="w-8 h-8 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-mono">
						AI Agents Assemble
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed font-mono">
							AI Agents Assemble is a global showdown where
							builders unite to create the next generation of
							intelligent agents with $20,000 in cash prizes,
							interview opportunities, Google Summer of Code
							mentorship, and exclusive swag.
						</p>
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed font-mono">
							For 7 intense days, you will design agents that
							think, automate, orchestrate, and evolve. This is
							your chance to push beyond prompts, unleash your
							creativity, and build something the world has never
							seen.
						</p>
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed font-mono">
							Assemble your skills, assemble your tools, assemble
							your team and bring the future of AI agents to life.
						</p>
					</div>

					<div className="space-y-6">
						<div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200 hover:border-blue-300 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl shadow-md">
									<Zap className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-900 font-mono">
										Assemble Your Tools
									</h3>
									<p className="text-gray-500 font-mono text-sm">
										Multiple technologies unite
									</p>
								</div>
							</div>
							<p className="text-gray-700 font-mono">
								Combine Cline, Kestra, Vercel, Oumi, and
								CodeRabbit to build powerful AI agent systems.
								Each tool is like an Infinity Stone - powerful
								alone, unstoppable together.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-200 hover:border-purple-300 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-gradient-to-br from-purple-500 to-violet-600 p-3 rounded-xl shadow-md">
									<Sparkles className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-900 font-mono">
										Build the Future
									</h3>
									<p className="text-gray-500 font-mono text-sm">
										Create intelligent agents
									</p>
								</div>
							</div>
							<p className="text-gray-700 font-mono">
								Design agents that think, automate, orchestrate,
								and evolve. Push beyond prompts and unleash your
								creativity to build something revolutionary.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-gradient-to-br from-cyan-500 to-blue-400 p-3 rounded-xl shadow-md">
									<Rocket className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-900 font-mono">
										Win Big
									</h3>
									<p className="text-gray-500 font-mono text-sm">
										$20,000+ in prizes
									</p>
								</div>
							</div>
							<p className="text-gray-700 font-mono">
								Compete for cash rewards, exclusive swag, Google
								Summer of Code mentorship, and job interview
								opportunities. Three Infinity Stone awards await
								the best projects.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
