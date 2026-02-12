import { Bot, Rocket, Zap } from "lucide-react";

const AboutSection = () => {
	return (
		<div className="py-20 mt-10">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 via-amber-400 to-sky-500 bg-clip-text text-transparent mb-6 leading-tight">
						Your Mission Briefing
					</h2>
					<p className="text-xl text-slate-400 max-w-3xl mx-auto">
						Automate your world with AI agents that run locally, respect your privacy, and get real work done.
					</p>
				</div>

				{/* Main content - Two columns */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					{/* Left column - Text content */}
					<div className="space-y-8">
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							In a world where repetitive tasks steal your time, there's only one solution: automation. But not just any automation - intelligent AI agents that understand context, learn your patterns, and work alongside you.
						</p>
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							Accomplish is your open source AI desktop agent that reads your files, creates documents, and automates repetitive knowledge work. It runs locally on your machine, using your own API keys or local models via Ollama.
						</p>
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							Your mission: use Accomplish to automate your day-to-day tasks. Get creative! Organize messy folders, generate reports, automate browser workflows, or build something we haven't even imagined yet.
						</p>
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
							The best automations will be rewarded. Can you catch the prize?
						</p>
						<p className="text-lg md:text-xl text-sky-400 font-semibold leading-relaxed">
							Remember: They can't catch you if you automate everything first.
						</p>
					</div>

					{/* Right column - Feature cards */}
					<div className="space-y-8">
						{/* Local First */}
						<div className="group">
							<div className="flex items-start gap-5">
								<div className="bg-gradient-to-br from-sky-500 to-sky-600 p-4 rounded-2xl shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-shadow">
									<Zap className="w-7 h-7 text-white" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-sky-400 mb-2">
										Runs Locally
									</h3>
									<p className="text-slate-400 mb-3">
										Privacy first, always
									</p>
									<p className="text-slate-300 leading-relaxed">
										Your files stay on your machine. You decide which folders it can touch. Nothing gets sent to Accomplish or anyone else - your data, your rules.
									</p>
								</div>
							</div>
						</div>

						{/* Bring Your Own AI */}
						<div className="group">
							<div className="flex items-start gap-5">
								<div className="bg-gradient-to-br from-amber-500 to-orange-500 p-4 rounded-2xl shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
									<Bot className="w-7 h-7 text-white" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-sky-400 mb-2">
										Bring Your Own AI
									</h3>
									<p className="text-slate-400 mb-3">
										Use any model you want
									</p>
									<p className="text-slate-300 leading-relaxed">
										Use your own API keys from OpenAI, Anthropic, Google, xAI, or run completely free with Ollama using local models. No subscription, no upsell - it's a tool, not a service.
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
									<h3 className="text-2xl font-bold text-sky-400 mb-2">
										Win Big
									</h3>
									<p className="text-slate-400 mb-3">
										$2,500+ in prizes
									</p>
									<p className="text-slate-300 leading-relaxed">
										Top 5 agents take home $500 each plus exclusive swag and a job interview at Accomplish.ai. Show us your best automation heist!
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
