import {
	Code,
	Lightbulb,
	Palette,
	Presentation,
	Target,
	TrendingUp,
} from "lucide-react";

const JudgingCriteria = () => {
	const criteria = [
		{
			icon: Target,
			title: "Potential Impact",
			description:
				"Evaluates how effectively the project addresses a meaningful problem or unlocks a valuable real-world use case.",
			iconBg: "bg-red-500",
			cardBg: "bg-red-50",
		},
		{
			icon: Lightbulb,
			title: "Creativity & Originality",
			description:
				"Assesses the uniqueness of the idea, novelty in approach, and how creatively sponsor technologies are applied.",
			iconBg: "bg-yellow-500",
			cardBg: "bg-yellow-50",
		},
		{
			icon: Code,
			title: "Technical Implementation",
			description:
				"Reviews how well the project was executed technically, whether it functions as intended, and the quality of integration with required sponsor technologies (Cerebras, Meta, Docker).",
			iconBg: "bg-blue-500",
			cardBg: "bg-blue-50",
		},
		{
			icon: TrendingUp,
			title: "Learning & Growth",
			description:
				"Recognizes the progress made during the hackathon, especially for first-time builders or teams pushing themselves with new tools or concepts.",
			iconBg: "bg-green-500",
			cardBg: "bg-green-50",
		},
		{
			icon: Palette,
			title: "Aesthetics & User Experience",
			description:
				"Considers how intuitive, user-friendly, and polished the final project is, particularly if it has a frontend or user interaction layer.",
			iconBg: "bg-purple-500",
			cardBg: "bg-purple-50",
		},
		{
			icon: Presentation,
			title: "Presentation & Communication",
			description:
				"Evaluates the clarity of the README, the quality of the demo video, and how effectively the team communicates their idea and results.",
			iconBg: "bg-indigo-500",
			cardBg: "bg-indigo-50",
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
