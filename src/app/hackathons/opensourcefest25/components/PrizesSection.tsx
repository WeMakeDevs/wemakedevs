import { Sparkles } from "lucide-react";
import Image from "next/image";
import { images } from "../images";

const PrizesSection = () => {
	return (
		<div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 relative overflow-hidden">
			{/* Background decorations */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-200/20 to-pink-200/20 rounded-full blur-3xl" />
			</div>

			<div className="max-w-6xl mx-auto px-4 relative z-10">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/20">
						<Sparkles className="w-5 h-5 text-yellow-500" />
						<span className="text-sm font-semibold text-gray-700">
							Interview at Kestra
						</span>
						<Sparkles className="w-5 h-5 text-yellow-500" />
					</div>
					<h2 className="text-5xl font-bold mb-6">
						Incredible <span className="text-blue-600">Reward</span>
					</h2>
				</div>

				{/* Prizes Display */}
				<div className="space-y-8">
					{/* Top Prize Card */}
					<div className="flex justify-center">
						<div className="group relative w-full max-w-2xl">
							<div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-green-400 hover:shadow-3xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 overflow-visible md:h-48">
								{/* Animated background gradient */}
								<div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500" />

								<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full gap-6">
									{/* Text content */}
									<div className="flex-1 text-center lg:text-left lg:pr-8">
										<h3 className="text-xl lg:text-[28px] font-bold text-gray-900 mb-4 font-body">
											Best Contributors
										</h3>
										<span className="inline-block px-5 py-2 bg-green-100 text-green-800 md:text-lg font-bold rounded-full border-2 border-green-200 font-title uppercase tracking-wider">
											Interview at Kestra
										</span>
									</div>

									{/* Image */}
									<div className="relative order-first lg:order-last">
										<Image
											src={images.briefcaseImage.src}
											alt="Interview at Kestra"
											width={200}
											height={200}
											className="object-contain transform rotate-12 group-hover:rotate-6 transition-transform duration-300 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
											style={{
												transform:
													"translateX(0px) translateY(0px) rotate(12deg) scale(1.1)",
											}}
										/>
									</div>
								</div>

								{/* Hover effect overlay */}
								<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrizesSection;
