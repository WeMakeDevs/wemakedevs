import { Gift, Star, Trophy } from "lucide-react";

const PrizesShowcase = () => {
	return (
		<div className="bg-white py-20 mt-8">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-16">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-purple-500 to-blue-600 p-4 rounded-2xl shadow-lg">
							<Trophy className="w-8 h-8 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
						Prizes & Rewards
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Compete for amazing prizes and showcase your backend
						innovation
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8">
					{/* Top 3 Winners (three cards) */}
					<div className="relative rounded-2xl shadow-xl p-8 text-white overflow-hidden bg-gradient-to-br from-purple-500 via-purple-600 to-blue-700 group hover:shadow-2xl transition-all duration-300">
						{/* subtle graphic accents */}
						<div className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
						<div className="pointer-events-none absolute -bottom-8 -left-8 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
						<div className="relative z-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
									<Trophy className="w-8 h-8" />
								</div>
								<h3 className="text-2xl font-bold text-white">
									Top 3 Winners
								</h3>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								{/* 1st */}
								<div className="bg-white text-gray-900 rounded-xl p-5 shadow-md">
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-semibold text-purple-600">
											1st Prize
										</span>
										<div className="flex items-center gap-1 text-purple-600">
											<Trophy className="w-4 h-4" />
										</div>
									</div>
									<div className="text-3xl md:text-5xl font-bold">
										$1,500
									</div>
								</div>
								{/* 2nd */}
								<div className="bg-white/95 text-gray-900 rounded-xl p-5 shadow-md">
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-semibold text-purple-600">
											2nd Prize
										</span>
										<div className="flex items-center gap-1 text-purple-600 opacity-90">
											<Trophy className="w-4 h-4" />
										</div>
									</div>
									<div className="text-3xl md:text-4xl font-bold">
										$1,000
									</div>
								</div>
								{/* 3rd */}
								<div className="bg-white/90 text-gray-900 rounded-xl p-5 shadow-md">
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-semibold text-purple-600">
											3rd Prize
										</span>
										<div className="flex items-center gap-1 text-purple-600 opacity-80">
											<Trophy className="w-4 h-4" />
										</div>
									</div>
									<div className="text-3xl font-bold">
										$500
									</div>
								</div>
							</div>
							<div className="mt-6">
								<p className="text-white/90 mb-2 font-medium">
									For every winner:
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-[6px] font-medium border border-white/30">
										swag
									</span>
									<span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-[6px] font-medium border border-white/30">
										Google Summer of Code mentorship
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Community Rewards */}
					<div className="bg-gradient-to-br from-purple-50 to-blue-100 rounded-2xl border-2 border-purple-200 shadow-lg p-8 h-full flex flex-col">
						<div className="flex items-center gap-4 mb-6">
							<div className="bg-gradient-to-br from-purple-500 to-blue-600 p-4 rounded-xl shadow-md">
								<Star className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-2xl font-bold text-gray-800">
								Community Rewards
							</h3>
						</div>
						<div className="flex-grow">
							<p className="text-gray-700 leading-relaxed mb-4">
								Star the{" "}
								<a
									href="https://git.new/kunal-motia"
									target="_blank"
									rel="noopener noreferrer"
									className="text-purple-600 hover:text-purple-700 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Motia repository
								</a>{" "}
								on GitHub and share your participation on social
								media (don't forget to tag{" "}
								<a
									href="https://motia.dev"
									target="_blank"
									rel="noopener noreferrer"
									className="text-purple-600 hover:text-purple-700 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Motia
								</a>
								). Top 10 posts will win Motia credits and swag
								bundles.
							</p>
							<div className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2 w-fit border border-purple-200">
								<Gift className="w-4 h-4 text-purple-600" />
								<span className="font-semibold text-gray-800 rounded-[6px]">
									Top 10 Posts Win Prizes
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrizesShowcase;
