import {
	ArrowDown,
	ArrowUp,
	Briefcase,
	Gift,
	Sparkles,
	Star,
	Zap,
} from "lucide-react";

const PrizesSection = () => {
	const prizes = [
		{
			id: 1,
			title: "MacBook",
			position: "1st Place",
			icon: Gift,
			color: "from-yellow-400 to-orange-500",
			bgColor: "bg-yellow-50",
			borderColor: "border-yellow-400",
			textColor: "text-yellow-600",
			description: "The ultimate development machine",
			value: "Grand Prize",
		},
		{
			id: 2,
			title: "iPhone 17",
			position: "2nd Place",
			icon: Zap,
			color: "from-blue-400 to-cyan-500",
			bgColor: "bg-blue-50",
			borderColor: "border-blue-400",
			textColor: "text-blue-600",
			description: "Latest mobile technology",
			value: "Runner-up",
		},
		{
			id: 3,
			title: "iPad",
			position: "3rd Place",
			icon: Star,
			color: "from-purple-400 to-pink-500",
			bgColor: "bg-purple-50",
			borderColor: "border-purple-400",
			textColor: "text-purple-600",
			description: "Perfect for creative work",
			value: "Third Place",
		},
		{
			id: 4,
			title: "Paid Internship",
			position: "All Winners",
			icon: Briefcase,
			color: "from-green-400 to-emerald-500",
			bgColor: "bg-green-50",
			borderColor: "border-green-400",
			textColor: "text-green-600",
			description: "Real industry experience at WeMakeDevs",
			value: "Exclusive Opportunity",
		},
	];

	return (
		<div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 relative overflow-hidden">
			{/* Background decorations */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-200/20 to-pink-200/20 rounded-full blur-3xl" />
			</div>

			<div className="max-w-7xl mx-auto px-4 relative z-10">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/20">
						<Sparkles className="w-5 h-5 text-yellow-500" />
						<span className="text-sm font-semibold text-gray-700">
							Amazing Prizes Await
						</span>
						<Sparkles className="w-5 h-5 text-yellow-500" />
					</div>
					<h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
						Incredible Rewards
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Compete for these amazing prizes while contributing to
						open source and building your skills
					</p>
				</div>

				{/* Prizes Display */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
					{prizes.map((prize, index) => {
						const IconComponent = prize.icon;
						const isLeft = index % 2 === 0;

						return (
							<div
								key={prize.id}
								className={`group relative ${isLeft ? "lg:mr-8" : "lg:ml-8"}`}
							>
								{/* Connection line for visual flow */}
								{index < prizes.length - 1 && (
									<div
										className={`hidden lg:block absolute top-1/2 ${isLeft ? "right-0" : "left-0"} w-8 h-0.5 bg-gradient-to-r ${isLeft ? "from-blue-300 to-purple-300" : "from-purple-300 to-blue-300"} transform -translate-y-1/2`}
									/>
								)}

								{/* Prize Card */}
								<div
									className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 ${prize.borderColor} hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2`}
								>
									{/* Animated background gradient */}
									<div
										className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
									/>

									{/* Position indicator */}
									<div
										className={`absolute -top-2 -right-2 w-10 h-10 ${prize.bgColor} rounded-full flex items-center justify-center shadow-lg border-2 ${prize.borderColor}`}
									>
										{prize.id === 1 && (
											<ArrowUp className="w-5 h-5 text-yellow-600" />
										)}
										{prize.id === 2 && (
											<ArrowDown className="w-5 h-5 text-blue-600" />
										)}
										{prize.id === 3 && (
											<ArrowDown className="w-5 h-5 text-purple-600" />
										)}
										{prize.id === 4 && (
											<Star className="w-5 h-5 text-green-600" />
										)}
									</div>

									<div className="relative z-10">
										{/* Icon */}
										<div
											className={`w-16 h-16 ${prize.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
										>
											<IconComponent
												className={`w-8 h-8 ${prize.textColor}`}
											/>
										</div>

										{/* Content */}
										<div className="space-y-3">
											<div>
												<h3 className="text-xl font-bold text-gray-900 mb-2">
													{prize.title}
												</h3>
												<p className="text-sm text-gray-600 leading-relaxed">
													{prize.description}
												</p>
											</div>

											<div className="flex items-center justify-between">
												<span
													className={`px-3 py-1.5 rounded-full text-xs font-semibold ${prize.bgColor} ${prize.textColor} border ${prize.borderColor}`}
												>
													{prize.position}
												</span>
												<span className="text-xs font-medium text-gray-500">
													{prize.value}
												</span>
											</div>
										</div>
									</div>

									{/* Hover effect overlay */}
									<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default PrizesSection;
