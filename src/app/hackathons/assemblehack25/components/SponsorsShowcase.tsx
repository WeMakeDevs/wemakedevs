import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DATA } from "../data";
import { images } from "../images";

const SponsorsShowcase = () => {
	const sponsors = DATA.sponsors;

	// Map sponsors to their corresponding symbols
	const sponsorSymbols = [
		images.ironmanSymbol, // Cline
		images.captainAmericaSymbol, // Kestra
		images.spiderManSymbol, // Vercel
		images.hulkSymbol, // Oumi
		images.deadpoolSymbol, // CodeRabbit
	];

	const stoneColors = [
		{
			border: "border-blue-200",
		},
		{
			border: "border-purple-200",
		},
		{
			border: "border-cyan-200",
		},
		{
			border: "border-red-200",
		},
		{
			border: "border-green-200",
		},
	];

	return (
		<div className="relative bg-gradient-to-b from-white via-cyan-50/30 to-white py-16 border-y border-gray-200 overflow-hidden">
			{/* Subtle dotted circle background */}
			<div
				className="absolute inset-0 opacity-[0.04]"
				style={{
					backgroundImage: `url(${images.dottedCircle.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>

			<div className="max-w-7xl mx-auto px-4 relative z-10">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
						The{" "}
						<span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
							Sponsor Stones
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Five powerful technologies assemble to power your AI
						agents
					</p>
				</div>

				{/* 3 + 2 Layout */}
				<div className="relative">
					{/* First row: 3 sponsors */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
						{sponsors.slice(0, 3).map((sponsor, index) => {
							const stoneColor = stoneColors[index];
							const symbol = sponsorSymbols[index];
							return (
								<div
									key={sponsor.name}
									className={`relative rounded-2xl overflow-hidden bg-white border-2 ${stoneColor.border} shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
								>
									<div className="p-6 relative z-10">
										<div className="flex items-center justify-between mb-4">
											<div className="w-12 h-12 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center">
												<Image
													src={symbol}
													alt="Hero Symbol"
													className="w-10 h-10 object-contain"
												/>
											</div>
											<Link
												href={sponsor.url}
												target="_blank"
												rel="noopener noreferrer"
												className="px-3 py-1.5 rounded-full border border-gray-300 flex gap-1 items-center bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors text-xs font-bold"
											>
												<ArrowUpRight
													size={12}
													className="text-gray-500"
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

										<h3 className="text-lg font-bold text-center text-gray-900 mb-2">
											{sponsor.name}
										</h3>

										<p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">
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
								const symbol = sponsorSymbols[index + 3];
								return (
									<div
										key={sponsor.name}
										className={`relative rounded-2xl overflow-hidden bg-white border-2 ${stoneColor.border} shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
									>
										<div className="p-6 relative z-10">
											<div className="flex items-center justify-between mb-4">
												<div className="w-12 h-12 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center">
													<Image
														src={symbol}
														alt="Hero Symbol"
														className="w-10 h-10 object-contain"
													/>
												</div>
												<Link
													href={sponsor.url}
													target="_blank"
													rel="noopener noreferrer"
													className="px-3 py-1.5 rounded-full border border-gray-300 flex gap-1 items-center bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors text-xs font-bold"
												>
													<ArrowUpRight
														size={12}
														className="text-gray-500"
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

											<h3 className="text-lg font-bold text-center text-gray-900 mb-2">
												{sponsor.name}
											</h3>

											<p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">
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
					<div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-1">
						<div className="bg-white rounded-xl px-8 py-6">
							<h3 className="text-2xl font-black text-gray-900 uppercase mb-3">
								Assemble The Stones
							</h3>
							<p className="text-gray-700 text-lg max-w-3xl mx-auto">
								Combine these powerful technologies to create
								unprecedented AI agent systems. Each stone
								brings unique capabilities -{" "}
								<span className="font-bold text-cyan-600">
									together they're unstoppable
								</span>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SponsorsShowcase;
