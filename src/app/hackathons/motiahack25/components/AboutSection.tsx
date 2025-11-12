import { Code, Rocket, Sparkles } from "lucide-react";

const AboutSection = () => {
	return (
		<div className="bg-gray-50 py-16">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-purple-600 to-blue-600 p-4 rounded-2xl shadow-lg">
							<Rocket className="w-8 h-8 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
						Backend Reloaded
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
							Gone are the days of juggling countless services,
							frameworks, and queues just to make your backend
							work. With Motia, APIs, background jobs, scheduled
							tasks, and AI agents all live in one powerful
							runtime, unified, observable, and production-ready
							from day one.
						</p>
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
							Join Backend Reloaded Hackathon to build the next
							generation of backends, showcase your creativity,
							and win exciting prizes, cash rewards, and exclusive
							Motia swag.
						</p>
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
							It's time to rethink how backends are built; faster,
							simpler, and smarter.
						</p>
					</div>

					<div className="space-y-6">
						<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-purple-500 p-3 rounded-xl">
									<Code className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-800">
										Unified Runtime
									</h3>
									<p className="text-gray-600">
										One platform for everything
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								Build APIs, background jobs, scheduled tasks,
								and AI agents all in one powerful runtime. No
								more juggling multiple services and frameworks.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-blue-500 p-3 rounded-xl">
									<Rocket className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-800">
										Production Ready
									</h3>
									<p className="text-gray-600">
										From day one
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								With full observability, scalability, and
								resiliency built-in, your backend is
								production-ready from the start. Deploy with one
								command.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-orange-500 p-3 rounded-xl">
									<Sparkles className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-800">
										Win Prizes
									</h3>
									<p className="text-gray-600">
										$3,000+ in rewards
									</p>
								</div>
							</div>
							<p className="text-gray-700">
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
