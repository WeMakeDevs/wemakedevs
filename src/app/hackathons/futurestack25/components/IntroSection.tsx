import { Sparkles, Trophy, Zap } from "lucide-react";

const IntroSection = () => {
	return (
		<div className="bg-gray-50 py-16">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<div className="bg-blue-600 p-4 rounded-2xl shadow-lg">
							<Sparkles className="w-8 h-8 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
						Our{" "}
						<span className="text-blue-600">Biggest Hackathon</span>{" "}
						Yet
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
							<span className="font-bold text-gray-800">
								FutureStack GenAI hackathon
							</span>{" "}
							is our biggest hackathon yet, bringing together
							builders from around the world to learn, create, and
							push the limits of what's possible with AI and
							cloud-native tech.
						</p>
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
							With incredible prizes, exclusive learning
							opportunities, and direct connections to leading
							engineers, FutureStack is more than just a
							competition: it's your chance to launch projects,
							land interviews, and get noticed by some of the
							biggest names in tech.
						</p>
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
							Whether you're here to explore new tools, sharpen
							your skills, or take your idea to the next level,
							this hackathon gives you the stage to make it
							happen. Join developers worldwide in building the
							future with cutting-edge AI and cloud technologies
							from Cerebras, Meta, and Docker.
						</p>
					</div>

					<div className="space-y-6">
						<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-orange-500 p-3 rounded-xl">
									<Zap className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-800">
										Build & Innovate
									</h3>
									<p className="text-gray-600">
										Create with cutting-edge AI
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								Leverage the world's fastest AI chips,
								open-source LLMs, and industry-standard
								containerization to build something amazing.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-blue-500 p-3 rounded-xl">
									<Trophy className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-800">
										Win Big
									</h3>
									<p className="text-gray-600">
										$15,000+ in prizes
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								Compete for cash prizes, interview opportunities
								at top tech companies, and exclusive swag packs.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-purple-500 p-3 rounded-xl">
									<Sparkles className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-800">
										Connect & Learn
									</h3>
									<p className="text-gray-600">
										Network with industry leaders
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								Get direct access to engineers from Cerebras,
								Meta, and Docker through workshops and mentoring
								sessions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IntroSection;
