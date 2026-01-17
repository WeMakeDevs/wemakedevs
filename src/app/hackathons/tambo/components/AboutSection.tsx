import { Code2, Rocket, Sparkles, Zap } from "lucide-react";

const AboutSection = () => {
	return (
		<div className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 mt-10">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-4 rounded-2xl shadow-lg shadow-amber-500/30">
							<Zap className="w-8 h-8 text-slate-900" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent mb-6 leading-tight">
						Awaken Your UI Powers
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							In a galaxy of static interfaces, users are forced
							to learn complex applications and navigate through
							endless workflows. But the Force has awakened in the
							form of Generative UI!
						</p>
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							With Tambo, you can build React apps that
							dynamically adapt to your users. The AI decides
							which components to render based on natural language
							- like having a protocol droid that understands over
							six million forms of user intent.
						</p>
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							Whether you're a seasoned Jedi or a young Padawan,
							this hackathon gives you the power to build
							interfaces that truly respond to user needs.
						</p>
					</div>

					<div className="space-y-6">
						<div className="bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-amber-500/20 hover:border-amber-500/40 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-xl">
									<Code2 className="w-6 h-6 text-slate-900" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-amber-400">
										Build Anything
									</h3>
									<p className="text-slate-400">
										No limits on your creativity
									</p>
								</div>
							</div>
							<p className="text-slate-300">
								Create any project you want - chat interfaces,
								dashboards, AI assistants, or tools. The more
								Tambo features you use, the stronger your Force
								becomes.
							</p>
						</div>

						<div className="bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-amber-500/20 hover:border-amber-500/40 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-gradient-to-br from-purple-500 to-violet-600 p-3 rounded-xl">
									<Sparkles className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-amber-400">
										Generative UI
									</h3>
									<p className="text-slate-400">
										Powered by Tambo
									</p>
								</div>
							</div>
							<p className="text-slate-300">
								Use Tambo's React SDK to create interfaces where
								the AI chooses which components to render.
								Build apps that adapt like a true Jedi adapts to
								the situation.
							</p>
						</div>

						<div className="bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-amber-500/20 hover:border-amber-500/40 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl">
									<Rocket className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-amber-400">
										Win Prizes
									</h3>
									<p className="text-slate-400">
										$6,000+ in rewards
									</p>
								</div>
							</div>
							<p className="text-slate-300">
								Compete for galactic prizes, Tambo credits, and
								exclusive swag. Top 3 Jedi Masters take home
								$6,000 plus rewards.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
