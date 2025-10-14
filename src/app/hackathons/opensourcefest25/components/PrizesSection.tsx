import { ArrowUp, Briefcase, Gift, Sparkles, Star } from "lucide-react";

const PrizesSection = () => {
	const topPrize = {
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
	};

	const secondRowPrizes = [
		{
			id: 2,
			title: "iPad",
			position: "2nd Place",
			icon: Star,
			color: "from-purple-400 to-pink-500",
			bgColor: "bg-purple-50",
			borderColor: "border-purple-400",
			textColor: "text-purple-600",
			description: "Perfect for creative work",
			value: "Runner-up",
		},
		{
			id: 3,
			title: "Interview at Kestra",
			position: "Top Contributors",
			icon: Briefcase,
			color: "from-green-400 to-emerald-500",
			bgColor: "bg-green-50",
			borderColor: "border-green-400",
			textColor: "text-green-600",
			description: "Exclusive interview opportunity with Kestra",
			value: "Career Opportunity",
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
					<h2 className="text-5xl font-bold mb-6">
						Incredible{" "}
						<span className="text-blue-600">Rewards</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Compete for these{" "}
						<span className="font-bold">amazing prizes</span> while
						contributing to open source and building your skills!
					</p>
				</div>

				{/* Prizes Display - Pyramid Layout */}
				<div className="space-y-8 mb-16">
					{/* First Row - Top Prize (Centered) */}
					<div className="flex justify-center">
						<div className="group relative w-full max-w-md">
							{/* Prize Card */}
							<div
								className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 ${topPrize.borderColor} hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2`}
							>
								{/* Animated background gradient */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${topPrize.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
								/>

								{/* Position indicator */}
								<div
									className={`absolute -top-3 -right-3 w-12 h-12 ${topPrize.bgColor} rounded-full flex items-center justify-center shadow-lg border-2 ${topPrize.borderColor}`}
								>
									<ArrowUp className="w-6 h-6 text-yellow-600" />
								</div>

								<div className="relative z-10">
									{/* Icon */}
									<div
										className={`w-20 h-20 ${topPrize.bgColor} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
									>
										<Gift
											className={`w-10 h-10 ${topPrize.textColor}`}
										/>
									</div>

									{/* Content */}
									<div className="space-y-3 text-center">
										<div>
											<h3 className="text-2xl font-bold text-gray-900 mb-2">
												{topPrize.title}
											</h3>
											<p className="text-sm text-gray-600 leading-relaxed">
												{topPrize.description}
											</p>
										</div>

										<div className="flex items-center justify-center gap-4">
											<span
												className={`px-4 py-2 rounded-full text-sm font-semibold ${topPrize.bgColor} ${topPrize.textColor} border ${topPrize.borderColor}`}
											>
												{topPrize.position}
											</span>
											<span className="text-sm font-medium text-gray-500">
												{topPrize.value}
											</span>
										</div>
									</div>
								</div>

								{/* Hover effect overlay */}
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
							</div>
						</div>
					</div>

					{/* Second Row - Two Prizes Side by Side */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						{secondRowPrizes.map(prize => {
							const IconComponent = prize.icon;

							return (
								<div key={prize.id} className="group relative">
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
											{prize.id === 2 && (
												<Star className="w-5 h-5 text-purple-600" />
											)}
											{prize.id === 3 && (
												<Briefcase className="w-5 h-5 text-green-600" />
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
		</div>
	);
};

export default PrizesSection;
