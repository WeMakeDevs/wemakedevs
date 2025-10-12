import { Calendar, FileText, Rocket, Target, TrendingUp } from "lucide-react";

const Timeline = () => {
	const milestones = [
		{
			date: "13th October",
			title: "Kickoff! Start using Kestra",
			description:
				"Start using Kestra, explore the project, and pick your first good issues. We'll guide you on how to make your first contribution and get comfortable with the workflow.",
			icon: Rocket,
			color: "from-purple-500 to-purple-600",
			bgColor: "bg-purple-50",
			borderColor: "border-purple-200",
		},
		{
			date: "20th October",
			title: "Keep the momentum going",
			description:
				"Continue contributing to open issues, improve your existing PRs, and connect with maintainers or mentors for feedback and ideas.",
			icon: TrendingUp,
			color: "from-blue-500 to-blue-600",
			bgColor: "bg-blue-50",
			borderColor: "border-blue-200",
		},
		{
			date: "27th October",
			title: "Deepen your impact",
			description:
				"Take on slightly bigger tasks, help others in the community, and share what you've learned. This is your chance to go beyond 'just contributing' and build confidence as an open source developer.",
			icon: Target,
			color: "from-green-500 to-green-600",
			bgColor: "bg-green-50",
			borderColor: "border-green-200",
		},
		{
			date: "3rd November",
			title: "Wrap-up & submissions",
			description:
				"Write a short blog post about your journey, what you learned, and your experience with Kestra. Submit it to be eligible for prizes and recognition. (The submission form will be emailed to everyone who registers)",
			icon: FileText,
			color: "from-orange-500 to-orange-600",
			bgColor: "bg-orange-50",
			borderColor: "border-orange-200",
		},
	];

	return (
		<div className="bg-white py-16">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-800 mb-4">
						Event Timeline
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Follow this 4-week journey to become a confident open
						source contributor
					</p>
				</div>

				<div className="relative">
					{/* Timeline line */}
					<div
						className="absolute left-[30px] top-0 w-1 bg-gradient-to-b from-purple-200 via-blue-300 to-orange-200 rounded-full hidden md:block"
						style={{ height: "calc(100% + 4rem)" }}
					/>

					<div className="space-y-12">
						{milestones.map((milestone, index) => {
							const IconComponent = milestone.icon;
							return (
								<div
									key={milestone.date}
									className="relative flex items-start gap-8"
								>
									{/* Icon */}
									<div className="relative z-10 flex-shrink-0">
										<div
											className={`w-16 h-16 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center shadow-lg`}
										>
											<IconComponent className="w-8 h-8 text-white" />
										</div>
									</div>

									{/* Content */}
									<div className="flex-1 min-w-0">
										<div
											className={`${milestone.bgColor} rounded-2xl p-8 border-2 ${milestone.borderColor} shadow-lg hover:shadow-xl transition-all duration-300`}
										>
											<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
												<div className="flex items-center gap-3 mb-2 md:mb-0">
													<Calendar className="w-5 h-5 text-gray-600" />
													<span className="text-lg font-semibold text-gray-700">
														{milestone.date}
													</span>
												</div>
												<div className="text-sm text-gray-500">
													Week {index + 1}
												</div>
											</div>
											<h3 className="text-2xl font-bold text-gray-800 mb-4">
												{milestone.title}
											</h3>
											<p className="text-lg text-gray-700 leading-relaxed">
												{milestone.description}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
						<h3 className="text-2xl font-bold mb-4 text-white">
							Ready to Start Your Journey?
						</h3>
						<p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
							Join thousands of developers learning to contribute
							to open source the right way
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="https://kestra.io/slack"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
							>
								Join Kestra Slack
							</a>
							<a
								href="https://kestra.io/docs/getting-started"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors border border-white/30"
							>
								Get Started
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
