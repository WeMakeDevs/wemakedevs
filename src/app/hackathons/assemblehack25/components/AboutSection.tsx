import { Rocket, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import { images } from "../images";

const AboutSection = () => {
	return (
		<div className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 border-b border-gray-200 overflow-hidden">
			<div className="max-w-6xl mx-auto px-4 relative z-10">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">
						<span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-800 bg-clip-text text-transparent">
							AI Agents
						</span>{" "}
						Assemble
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6 relative">
						<div className="hidden lg:block absolute -translate-y-28 left-36 opacity-30 hover:opacity-40 transition-opacity duration-500">
							<Image
								src={images.avengersImage}
								alt="Avengers Assemble"
								className="w-full h-auto drop-shadow-2xl"
							/>
						</div>

						<div className="lg:pt-28">
							<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
								AI Agents Assemble is a{" "}
								<span className="font-bold text-cyan-600">
									global showdown
								</span>{" "}
								where builders unite to create the next
								generation of intelligent agents with{" "}
								<span className="font-black text-blue-600">
									$20,000 in cash prizes
								</span>
								, interview opportunities, Google Summer of Code
								mentorship, and exclusive swag.
							</p>
							<p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
								For{" "}
								<span className="font-bold">
									7 intense days
								</span>
								, you will design agents that think, automate,
								orchestrate, and evolve. This is your chance to
								push beyond prompts, unleash your creativity,
								and build something the world has never seen.
							</p>
							<p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
								<span className="font-black text-cyan-600">
									Assemble
								</span>{" "}
								your skills,{" "}
								<span className="font-black text-blue-600">
									assemble
								</span>{" "}
								your tools,{" "}
								<span className="font-black text-cyan-600">
									assemble
								</span>{" "}
								your team and bring the future of AI agents to
								life.
							</p>
						</div>
					</div>

					<div className="space-y-6">
						<div className="bg-white rounded-2xl p-6 border-2 border-cyan-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-xl shadow-md">
									<Zap className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-black text-gray-900">
										Assemble Your Tools
									</h3>
									<p className="text-gray-500 text-sm">
										Multiple technologies unite
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								Combine{" "}
								<span className="font-bold">
									Cline, Kestra, Vercel, Oumi, and CodeRabbit
								</span>{" "}
								to build powerful AI agent systems. Each tool is
								like an Infinity Stone - powerful alone,
								unstoppable together.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-xl shadow-md">
									<Sparkles className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-black text-gray-900">
										Build the Future
									</h3>
									<p className="text-gray-500 text-sm">
										Create intelligent agents
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								Design agents that{" "}
								<span className="font-bold">
									think, automate, orchestrate, and evolve
								</span>
								. Push beyond prompts and unleash your
								creativity to build something revolutionary.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 border-2 border-indigo-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl shadow-md">
									<Rocket className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-black text-gray-900">
										Win Big
									</h3>
									<p className="text-gray-500 text-sm">
										$20,000+ in prizes
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								Compete for{" "}
								<span className="font-bold text-cyan-600">
									cash rewards
								</span>
								, exclusive swag, Google Summer of Code
								mentorship, and job interview opportunities.
								Three{" "}
								<span className="font-bold text-blue-600">
									Infinity Stone awards
								</span>{" "}
								await the best projects.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
