import { ArrowUpRight, Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DATA } from "../data";

const SponsorsShowcase = () => {
	const sponsors = DATA.sponsors;
	const stoneColors = [
		{
			bg: "from-blue-500 to-cyan-500",
			border: "border-blue-400/50",
			name: "Power",
		},
		{
			bg: "from-purple-500 to-violet-600",
			border: "border-purple-400/50",
			name: "Space",
		},
		{
			bg: "from-cyan-500 to-blue-400",
			border: "border-cyan-400/50",
			name: "Reality",
		},
		{
			bg: "from-red-500 to-pink-500",
			border: "border-red-400/50",
			name: "Soul",
		},
		{
			bg: "from-green-500 to-emerald-500",
			border: "border-green-400/50",
			name: "Time",
		},
	];

	return (
		<div className="bg-gradient-to-b from-white via-blue-50 to-white py-16 border-y border-blue-200">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-2xl shadow-lg border border-blue-300">
							<Gem className="w-8 h-8 text-white" />
						</div>
					</div>
					<h2 className="text-4xl font-bold text-gray-900 mb-4 font-mono">
						The Infinity Stones
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto font-mono">
						Five powerful technologies assemble to power your AI
						agents
					</p>
				</div>

				{/* 3 + 2 Layout: First row with 3, second row with 2 center-aligned */}
				<div className="relative">
					{/* First row: 3 sponsors */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
						{sponsors.slice(0, 3).map((sponsor, index) => {
							const stoneColor = stoneColors[index];
							return (
								<div
									key={sponsor.name}
									className="relative rounded-2xl shadow-lg overflow-hidden bg-white group transition-all duration-300 border border-blue-200 hover:border-blue-300"
								>
									<div
										className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${stoneColor.bg} rounded-full blur-2xl opacity-10 group-hover:opacity-15 transition-opacity`}
									/>

									<div className="p-6 relative z-10">
										<div className="flex items-center justify-between mb-4">
											<div
												className={`bg-gradient-to-br ${stoneColor.bg} p-3 rounded-full border-2 ${stoneColor.border} shadow-md`}
											>
												<Gem className="w-5 h-5 text-white" />
											</div>
											<Link
												href={sponsor.url}
												target="_blank"
												rel="noopener noreferrer"
												className="px-3 py-1.5 rounded-lg border border-blue-500 flex gap-1 items-center bg-blue-500 hover:bg-blue-600 text-white transition-colors shadow-sm font-mono text-xs"
											>
												<ArrowUpRight
													size={12}
													className="text-white"
												/>
											</Link>
										</div>

										<div className="mb-4 flex justify-center">
											<Image
												src={sponsor.logo}
												alt={`${sponsor.name} Logo`}
												className="max-h-12 w-auto object-contain"
											/>
										</div>

										<h3 className="text-lg font-bold text-center text-gray-900 font-mono mb-2">
											{sponsor.name}
										</h3>

										<p className="text-gray-700 leading-relaxed font-mono text-xs border-t border-blue-200 pt-3">
											{sponsor.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>

					{/* Second row: 2 sponsors center-aligned */}
					<div className="flex justify-center">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
							{sponsors.slice(3).map((sponsor, index) => {
								const stoneColor = stoneColors[index + 3];
								return (
									<div
										key={sponsor.name}
										className="relative rounded-2xl shadow-lg overflow-hidden bg-white group transition-all duration-300 border border-blue-200 hover:border-blue-300"
									>
										<div
											className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${stoneColor.bg} rounded-full blur-2xl opacity-10 group-hover:opacity-15 transition-opacity`}
										/>

										<div className="p-6 relative z-10">
											<div className="flex items-center justify-between mb-4">
												<div
													className={`bg-gradient-to-br ${stoneColor.bg} p-3 rounded-full border-2 ${stoneColor.border} shadow-md`}
												>
													<Gem className="w-5 h-5 text-white" />
												</div>
												<Link
													href={sponsor.url}
													target="_blank"
													rel="noopener noreferrer"
													className="px-3 py-1.5 rounded-lg border border-blue-500 flex gap-1 items-center bg-blue-500 hover:bg-blue-600 text-white transition-colors shadow-sm font-mono text-xs"
												>
													<ArrowUpRight
														size={12}
														className="text-white"
													/>
												</Link>
											</div>

											<div className="mb-4 flex justify-center">
												<Image
													src={sponsor.logo}
													alt={`${sponsor.name} Logo`}
													className="max-h-12 w-auto object-contain"
												/>
											</div>

											<h3 className="text-lg font-bold text-center text-gray-900 font-mono mb-2">
												{sponsor.name}
											</h3>

											<p className="text-gray-700 leading-relaxed font-mono text-xs border-t border-blue-200 pt-3">
												{sponsor.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				{/* Assemble Message */}
				<div className="text-center mt-12">
					<div className="bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
						<h3 className="text-2xl font-bold text-blue-700 font-mono mb-4">
							ASSEMBLE THE STONES
						</h3>
						<p className="text-gray-700 font-mono text-lg max-w-3xl mx-auto">
							Combine these powerful technologies to create
							unprecedented AI agent systems. Each stone brings
							unique capabilities - together they're unstoppable.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SponsorsShowcase;
