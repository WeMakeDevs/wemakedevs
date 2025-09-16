import { Code, Lightbulb, Palette, Target, TrendingUp } from "lucide-react";

const JudgingCriteria = () => {
	const criteria = [
		{
			icon: Target,
			title: "Potential Impact",
			description:
				"Evaluates how effectively the agent or solution addresses a meaningful problem or unlocks a valuable use case.",
			iconBg: "bg-red-500",
			cardBg: "bg-red-50",
		},
		{
			icon: Lightbulb,
			title: "Creativity & Originality",
			description:
				"Assesses the uniqueness of the agent idea, the novelty in how tools are connected, or how Portia is used in unexpected ways.",
			iconBg: "bg-yellow-500",
			cardBg: "bg-yellow-50",
		},
		{
			icon: TrendingUp,
			title: "Learning & Growth",
			description:
				"Recognizes the learning curve tackled during the hackathon, especially for first-time builders or teams experimenting with AI/automation.",
			iconBg: "bg-green-500",
			cardBg: "bg-green-50",
		},
		{
			icon: Code,
			title: "Implementation of the Idea",
			description:
				"Reviews how well the idea was executed technically, does the agent function as intended, and does it make good use of sponsor technologies?",
			iconBg: "bg-blue-500",
			cardBg: "bg-blue-50",
		},
		{
			icon: Palette,
			title: "Aesthetics & UX",
			description:
				"Considers how intuitive and user-friendly the final experience is, especially if the project has a frontend or user interaction layer.",
			iconBg: "bg-purple-500",
			cardBg: "bg-purple-50",
		},
	];

	return (
		<div className="bg-white py-16">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-800 mb-4">
						Judging Criteria
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Your projects will be evaluated based on these five key
						dimensions
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{criteria.map((criterion, index) => {
						const IconComponent = criterion.icon;
						return (
							<div
								key={criterion.title}
								className={`${criterion.cardBg} rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
							>
								<div className="flex items-center gap-4 mb-4">
									<div
										className={`${criterion.iconBg} p-3 rounded-xl shadow-md`}
									>
										<IconComponent className="w-6 h-6 text-white" />
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-bold text-gray-800 leading-tight">
											{criterion.title}
										</h3>
									</div>
								</div>
								<p className="text-gray-700 leading-relaxed">
									{criterion.description}
								</p>
							</div>
						);
					})}
				</div>

				<div className="mt-12 text-center">
					<div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-200">
						<h3 className="text-2xl font-bold text-gray-800 mb-4">
							Pro Tip
						</h3>
						<p className="text-lg text-gray-700 max-w-3xl mx-auto">
							Focus on creating a project that not only works well
							technically but also solves a real problem and
							provides a great user experience. The best projects
							often excel in multiple criteria!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JudgingCriteria;
