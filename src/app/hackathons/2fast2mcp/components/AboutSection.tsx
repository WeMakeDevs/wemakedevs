import { Code2, Rocket, Zap } from "lucide-react";

const AboutSection = () => {
	return (
		<div className="py-20 mt-10">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
						Floor It to Victory
					</h2>
					<p className="text-xl text-slate-400 max-w-3xl mx-auto">
						Run powerful MCP-based agents that go from 0 to deployed in record time.
					</p>
				</div>

				{/* Main content - Two columns */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					{/* Left column - Text content */}
					<div className="space-y-8">
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							In a world where AI agents are becoming the new standard, teams need platforms that can keep up with the pace. Enter Archestra, your pit crew for running, orchestrating, and scaling MCP-based agents at speed.
						</p>
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							The Model Context Protocol (MCP) is changing how AI agents interact with tools, data, and systems. Archestra brings those agents out of individual machines and into a centralized, governed, production-ready environment, with built-in security, observability, and cost control.
						</p>
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							Whether you're a seasoned DevOps engineer, an SRE automating platforms, or a tinkerer experimenting with intelligent agents, this hackathon is your track to prove what you can ship, operate, and scale, not just demo.
						</p>
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							This isn't about how much you can build.
						</p>
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							It's about how cleanly you can run AI at full throttle.
						</p>
					</div>

					{/* Right column - Feature cards */}
					<div className="space-y-8">
						{/* Build Fast */}
						<div className="group">
							<div className="flex items-start gap-5">
								<div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-2xl shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
									<Zap className="w-7 h-7 text-white" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-orange-400 mb-2">
										Build Fast
									</h3>
									<p className="text-slate-400 mb-3">
										No NOS required
									</p>
									<p className="text-slate-300 leading-relaxed">
										Archestra accelerates MCP server
										development with intuitive APIs and
										seamless deployment. Go from idea to
										production faster than a quarter-mile
										run.
									</p>
								</div>
							</div>
						</div>

						{/* MCP Power */}
						<div className="group">
							<div className="flex items-start gap-5">
								<div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-2xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
									<Code2 className="w-7 h-7 text-white" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-orange-400 mb-2">
										MCP Power
									</h3>
									<p className="text-slate-400 mb-3">
										Powered by Archestra
									</p>
									<p className="text-slate-300 leading-relaxed">
										Build Model Context Protocol servers
										that give AI agents the tools they need.
										Create custom integrations, data
										pipelines, and intelligent
										orchestration.
									</p>
								</div>
							</div>
						</div>

						{/* Win Big */}
						<div className="group">
							<div className="flex items-start gap-5">
								<div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-shadow">
									<Rocket className="w-7 h-7 text-white" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-orange-400 mb-2">
										Win Big
									</h3>
									<p className="text-slate-400 mb-3">
										$10,000+ in prizes
									</p>
									<p className="text-slate-300 leading-relaxed">
										Cross the finish line and take home
										serious prizes. Top 3 racers split
										$10,000 plus exclusive swag. Because in
										this family, we reward excellence.
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
