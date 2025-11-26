import { Gem, Trophy } from "lucide-react";
import { DATA } from "../data";

const PrizesShowcase = () => {
	const prizes = DATA.prizes.winning;
	const stoneColors = [
		{
			bg: "from-blue-500 to-cyan-500",
			border: "border-blue-400/50",
			glow: "rgba(59, 130, 246, 0.4)",
			shadow: "rgba(59, 130, 246, 0.2)",
		}, // Blue - Infinity Build
		{
			bg: "from-purple-500 to-violet-600",
			border: "border-purple-400/50",
			glow: "rgba(139, 92, 246, 0.4)",
			shadow: "rgba(139, 92, 246, 0.2)",
		}, // Purple - Visionary Intelligence
		{
			bg: "from-cyan-500 to-blue-400",
			border: "border-cyan-400/50",
			glow: "rgba(6, 182, 212, 0.4)",
			shadow: "rgba(6, 182, 212, 0.2)",
		}, // Cyan - Captain Code
	];

	return (
		<div className="bg-gradient-to-b from-white via-blue-50 to-white py-20 border-y border-blue-200">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-16">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-2xl shadow-lg border border-blue-300">
							<Trophy className="w-8 h-8 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight font-mono">
						Infinity Stones of Power
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto font-mono">
						Assemble the stones and claim your prize
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{prizes.map((prize, index) => {
						const stoneColor = stoneColors[index];
						return (
							<div
								key={prize.name}
								className="relative rounded-2xl shadow-xl p-8 text-white overflow-hidden bg-white group transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl"
								style={{
									boxShadow: `0_20px_45px_rgba(0,0,0,0.1), 0_0_30px_${stoneColor.shadow}`,
								}}
							>
								{/* Infinity Stone Glow Effect */}
								<div
									className={`pointer-events-none absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br ${stoneColor.bg} rounded-full blur-3xl opacity-20`}
								/>
								<div
									className={`pointer-events-none absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br ${stoneColor.bg} rounded-full blur-3xl opacity-15`}
								/>

								<div className="relative z-10">
									{/* Infinity Stone Icon */}
									<div className="flex justify-center mb-6">
										<div
											className={`bg-gradient-to-br ${stoneColor.bg} p-6 rounded-full border-2 ${stoneColor.border} shadow-lg`}
											style={{
												boxShadow: `0 0 25px ${stoneColor.glow}, inset 0 0 20px rgba(255,255,255,0.1)`,
											}}
										>
											<Gem className="w-12 h-12 text-white" />
										</div>
									</div>

									<h3 className="text-2xl font-bold text-center text-gray-900 font-mono mb-4">
										{prize.name}
									</h3>

									<div className="bg-gray-50 rounded-xl p-5 mb-4 border border-gray-200">
										<div className="text-center">
											<div className="text-3xl md:text-4xl font-bold font-mono text-blue-600 mb-2">
												{prize.prize
													.split("+")[0]
													.trim()}
											</div>
											<div className="text-sm text-gray-600 font-mono">
												{prize.prize
													.split("+")
													.slice(1)
													.map((part, i) => (
														<span
															key={`${prize.name}-${part.trim()}-${i}`}
														>
															{part.trim()}
															{i <
																prize.prize
																	.split("+")
																	.slice(1)
																	.length -
																	1 && (
																<span> + </span>
															)}
														</span>
													))}
											</div>
										</div>
									</div>

									<p className="text-gray-700 text-center leading-relaxed font-mono text-sm">
										{prize.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				{/* Assemble Message */}
				<div className="mt-12 text-center">
					<div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
						<p className="text-xl font-bold text-blue-700 font-mono mb-2">
							ASSEMBLE YOUR POWER
						</p>
						<p className="text-gray-600 font-mono">
							Combine multiple sponsor technologies to maximize
							your chances of winning
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrizesShowcase;
