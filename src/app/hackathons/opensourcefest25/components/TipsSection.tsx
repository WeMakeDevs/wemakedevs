import {
	AlertCircle,
	BookOpen,
	CheckCircle,
	Code,
	GitBranch,
	MessageSquare,
	Search,
	Users,
} from "lucide-react";

const TipsSection = () => {
	const tips = [
		{
			icon: MessageSquare,
			title: "Join the Community",
			description:
				"Get started by joining the Kestra Slack community and introducing yourself in the #introductions channel.",
			details: [
				"Join the Kestra Slack community",
				"Introduce yourself in #introductions",
				"Use the right channels for the right purpose",
				"Don't spam or send introductions anywhere else",
			],
			color: "from-blue-500 to-blue-600",
			bgColor: "bg-blue-50",
			borderColor: "border-blue-200",
		},
		{
			icon: Search,
			title: "Ask Good Questions",
			description:
				"Before asking, search the docs, issues, or Slack history to see if it's already answered.",
			details: [
				"Search docs, issues, or Slack history first",
				"Be specific: include what you tried and what didn't work",
				"Share relevant links or code snippets",
				"Never share full logs or screenshots unless necessary",
			],
			color: "from-green-500 to-green-600",
			bgColor: "bg-green-50",
			borderColor: "border-green-200",
		},
		{
			icon: GitBranch,
			title: "Get Assigned to Issues",
			description:
				"Always check if the issue is already assigned before starting work.",
			details: [
				"Check if the issue is already assigned",
				"Comment explaining how you plan to solve it",
				"Tag MartinRst and wrussell1999 to request assignment",
				"Wait until it's assigned before starting work",
			],
			color: "from-purple-500 to-purple-600",
			bgColor: "bg-purple-50",
			borderColor: "border-purple-200",
		},
		{
			icon: Code,
			title: "Pull Request Guidelines",
			description:
				"Follow proper PR guidelines to ensure your contributions are accepted.",
			details: [
				"Don't open PRs unless assigned to the related issue",
				"Every PR must be linked to an existing issue",
				"PRs without assigned issues result in permanent ban",
				"Follow the project's coding standards",
			],
			color: "from-orange-500 to-orange-600",
			bgColor: "bg-orange-50",
			borderColor: "border-orange-200",
		},
		{
			icon: BookOpen,
			title: "Opening New Issues",
			description:
				"You're encouraged to open issues if you find bugs or have ideas, but keep them meaningful.",
			details: [
				"Open issues for bugs or meaningful ideas",
				"Don't open issues just for participation",
				"Don't submit spam or low-effort issues",
				"Fake issues lead to permanent ban",
			],
			color: "from-red-500 to-red-600",
			bgColor: "bg-red-50",
			borderColor: "border-red-200",
		},
		{
			icon: Users,
			title: "Code of Conduct",
			description:
				"We're a community that values respect, collaboration, and inclusion.",
			details: [
				"Be kind and patient with everyone",
				"Remember that everyone is learning",
				"Report harassment or discrimination immediately",
				"Contact moderators at contact@wemakedevs.org",
			],
			color: "from-indigo-500 to-indigo-600",
			bgColor: "bg-indigo-50",
			borderColor: "border-indigo-200",
		},
	];

	return (
		<div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-800 mb-4">
						Contribution Tips
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Follow these guidelines to make meaningful contributions
						and avoid common mistakes
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{tips.map((tip, index) => {
						const IconComponent = tip.icon;
						return (
							<div
								key={tip.title}
								className={`${tip.bgColor} rounded-2xl p-6 border-2 ${tip.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
							>
								<div className="flex items-center gap-4 mb-4">
									<div
										className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tip.color} flex items-center justify-center shadow-md`}
									>
										<IconComponent className="w-6 h-6 text-white" />
									</div>
									<h3 className="text-xl font-bold text-gray-800">
										{tip.title}
									</h3>
								</div>
								<p className="text-gray-700 mb-4 leading-relaxed">
									{tip.description}
								</p>
								<ul className="space-y-2">
									{tip.details.map(detail => (
										<li
											key={detail}
											className="flex items-start gap-2"
										>
											<CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
											<span className="text-sm text-gray-600">
												{detail}
											</span>
										</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>

				{/* Important Notice */}
				<div className="mt-12 max-w-4xl mx-auto">
					<div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-6">
						<div className="flex items-start gap-4">
							<AlertCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
							<div>
								<h3 className="text-lg font-bold text-gray-800 mb-2">
									Important Notice
								</h3>
								<p className="text-gray-700 leading-relaxed">
									Any PR without an assigned issue or any
									fake/irrelevant issues will result in a{" "}
									<strong>
										permanent ban from all WeMakeDevs events
									</strong>
									, no exceptions. We take this seriously to
									maintain the quality of our community and
									the projects we support.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TipsSection;
