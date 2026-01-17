import { Code2, Rocket, Sparkles } from "lucide-react";

const AboutSection = () => {
	return (
		<div className="py-20 mt-10">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent mb-6 leading-tight">
						Awaken Your UI Powers
					</h2>
					<p className="text-xl text-slate-400 max-w-3xl mx-auto">
						Join the rebellion against static interfaces
					</p>
				</div>

				{/* Main content - Two columns */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					{/* Left column - Text content */}
					<div className="space-y-8">
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

					{/* Right column - Feature cards */}
					<div className="space-y-8">
						{/* Build Anything */}
						<div className="group">
							<div className="flex items-start gap-5">
								<div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-4 rounded-2xl shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
									<Code2 className="w-7 h-7 text-slate-900" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-amber-400 mb-2">
										Build Anything
									</h3>
									<p className="text-slate-400 mb-3">
										No limits on your creativity
									</p>
									<p className="text-slate-300 leading-relaxed">
										Create any project you want - chat
										interfaces, dashboards, AI assistants,
										or tools. The more Tambo features you
										use, the stronger your Force becomes.
									</p>
								</div>
							</div>
						</div>

						{/* Generative UI */}
						<div className="group">
							<div className="flex items-start gap-5">
								<div className="bg-gradient-to-br from-purple-500 to-violet-600 p-4 rounded-2xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
									<Sparkles className="w-7 h-7 text-white" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-amber-400 mb-2">
										Generative UI
									</h3>
									<p className="text-slate-400 mb-3">
										Powered by Tambo
									</p>
									<p className="text-slate-300 leading-relaxed">
										Use Tambo's React SDK to create
										interfaces where the AI chooses which
										components to render. Build apps that
										adapt like a true Jedi adapts to the
										situation.
									</p>
								</div>
							</div>
						</div>

						{/* Win Prizes */}
						<div className="group">
							<div className="flex items-start gap-5">
								<div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-2xl shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
									<Rocket className="w-7 h-7 text-white" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-amber-400 mb-2">
										Win Prizes
									</h3>
									<p className="text-slate-400 mb-3">
										$6,000+ in rewards
									</p>
									<p className="text-slate-300 leading-relaxed">
										Compete for galactic prizes and
										exclusive swag. Top 3 Jedi Masters take
										home $6,000 plus rewards.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
