import { Gift } from "lucide-react";
import Image from "next/image";
import { images } from "../images";

const PrizesShowcase = () => {
	const prizes = [
		{
			name: "The Infinity Build Award",
			prize: "$10,000",
			extras: "cash + swag + job interviews + career mentorship",
			description:
				"Use all 3 tools (Cline, Vercel, Kestra) to build a full-stack AI agent system.",
			image: images.infinityGauntlet,
			imageAlt: "Infinity Gauntlet",
			rank: 1,
			gradient: "from-yellow-400 via-amber-500 to-orange-500",
			borderColor: "border-yellow-400",
			bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50",
		},
		{
			name: "The Visionary Intelligence Award",
			prize: "$3,000",
			extras: "cash + swag + job interviews + career mentorship",
			description:
				"Best use of Oumi with open-source LLMs (LLaMA, Gemma, Mistral, Qwen, etc.).",
			image: images.ironmanHelmet,
			imageAlt: "Iron Man Helmet",
			rank: 2,
			gradient: "from-gray-300 via-slate-400 to-gray-500",
			borderColor: "border-slate-300",
			bgColor: "bg-gradient-to-br from-slate-50 to-gray-50",
		},
		{
			name: "The Captain Code Award",
			prize: "$2,000",
			extras: "cash + swag + job interviews + career mentorship",
			description:
				"Use CodeRabbit to demonstrate exceptional open-source engineering: clean PRs, documentation, modularity, OSS workflows.",
			image: images.captainAmericaShield,
			imageAlt: "Captain America Shield",
			rank: 3,
			gradient: "from-amber-600 via-orange-700 to-amber-800",
			borderColor: "border-amber-600",
			bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
		},
	];

	return (
		<div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 border-y border-gray-200 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 relative z-10">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 uppercase tracking-tight">
						<span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-800 bg-clip-text text-transparent">
							Infinity Stones
						</span>{" "}
						of Power
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Assemble the stones and claim your prize
					</p>
				</div>

				{/* Olympic Podium Style Layout */}
				<div className="flex flex-col lg:flex-row items-end justify-center gap-6 lg:gap-4">
					{/* 2nd Place - Left */}
					<div className="order-2 lg:order-1 w-full lg:w-80">
						<div
							className={`relative rounded-3xl p-6 ${prizes[1].bgColor} border-4 ${prizes[1].borderColor} transition-all hover:scale-[1.02]`}
						>
							{/* Rank Badge */}
							<div
								className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br ${prizes[1].gradient} flex items-center justify-center text-white font-black text-xl border-2 border-white`}
							>
								2
							</div>

							{/* Image - Iron Man Helmet */}
							<div className="flex justify-center mb-4">
								<Image
									src={prizes[1].image}
									alt={prizes[1].imageAlt}
									className="h-36 w-auto object-contain drop-shadow-xl"
								/>
							</div>

							<h3 className="text-lg font-bold text-center text-gray-900 mb-3">
								{prizes[1].name}
							</h3>

							<div className="text-center mb-3">
								<div className="text-3xl font-black text-slate-600">
									{prizes[1].prize}
								</div>
								<div className="text-xs text-gray-500 mt-1">
									{prizes[1].extras}
								</div>
							</div>

							<p className="text-gray-600 text-center text-sm leading-relaxed">
								{prizes[1].description}
							</p>
						</div>
					</div>

					{/* 1st Place - Center (Tallest) */}
					<div className="order-1 lg:order-2 w-full lg:w-96">
						<div
							className={`relative rounded-3xl p-8 ${prizes[0].bgColor} border-4 ${prizes[0].borderColor} transition-all hover:scale-[1.02]`}
						>
							{/* Crown/Star effect */}
							<div className="absolute -top-8 left-1/2 -translate-x-1/2">
								<div className="text-5xl animate-bounce">
									👑
								</div>
							</div>

							{/* Rank Badge */}
							<div
								className={`absolute -top-4 -right-4 w-14 h-14 rounded-full bg-gradient-to-br ${prizes[0].gradient} flex items-center justify-center text-white font-black text-2xl border-2 border-white`}
							>
								1
							</div>

							{/* Image */}
							<div className="flex justify-center mb-6 mt-4">
								<Image
									src={prizes[0].image}
									alt={prizes[0].imageAlt}
									className="h-40 w-auto object-contain drop-shadow-2xl"
								/>
							</div>

							<h3 className="text-xl font-bold text-center text-gray-900 mb-4">
								{prizes[0].name}
							</h3>

							<div className="text-center mb-4">
								<div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
									{prizes[0].prize}
								</div>
								<div className="text-sm text-gray-600 mt-2">
									{prizes[0].extras}
								</div>
							</div>

							<p className="text-gray-700 text-center leading-relaxed">
								{prizes[0].description}
							</p>
						</div>
					</div>

					{/* 3rd Place - Right */}
					<div className="order-3 w-full lg:w-80">
						<div
							className={`relative rounded-3xl p-6 ${prizes[2].bgColor} border-4 ${prizes[2].borderColor} transition-all hover:scale-[1.02]`}
						>
							{/* Rank Badge */}
							<div
								className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br ${prizes[2].gradient} flex items-center justify-center text-white font-black text-xl border-2 border-white`}
							>
								3
							</div>

							{/* Image - Bigger shield */}
							<div className="flex justify-center mb-4">
								<Image
									src={prizes[2].image}
									alt={prizes[2].imageAlt}
									className="h-36 w-auto object-contain drop-shadow-xl"
								/>
							</div>

							<h3 className="text-lg font-bold text-center text-gray-900 mb-3">
								{prizes[2].name}
							</h3>

							<div className="text-center mb-3">
								<div className="text-3xl font-black text-amber-700">
									{prizes[2].prize}
								</div>
								<div className="text-xs text-gray-500 mt-1">
									{prizes[2].extras}
								</div>
							</div>

							<p className="text-gray-600 text-center text-sm leading-relaxed">
								{prizes[2].description}
							</p>
						</div>
					</div>
				</div>

				{/* GSoC Mentorship & Social Media Raffle */}
				<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
					{/* GSoC Mentorship */}
					<div className="text-center">
						<div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-1 h-full">
							<div className="bg-white rounded-xl px-6 py-6 h-full flex flex-col">
								<div className="flex items-center justify-center mb-4">
									<Image
										src={images.gsocLogo}
										alt="Google Summer of Code"
										className="h-10 w-auto object-contain"
									/>
								</div>
								<p className="text-gray-600 flex-grow">
									<span className="font-bold text-blue-600">
										All participants
									</span>{" "}
									will receive mentorship and guidance to help
									them prepare for and apply to Google Summer
									of Code.
								</p>
							</div>
						</div>
					</div>

					{/* Social Media Raffle */}
					<div className="text-center">
						<div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-1 h-full">
							<div className="bg-white rounded-xl px-6 py-6 h-full flex flex-col">
								<div className="flex items-center justify-center gap-3 mb-3">
									<Gift className="w-6 h-6 text-purple-600" />
									<p className="text-xl font-black text-gray-900 uppercase tracking-wide">
										Social Media Raffle
									</p>
									<Gift className="w-6 h-6 text-pink-600" />
								</div>
								<p className="text-gray-600 flex-grow">
									Post about taking part in the hackathon on
									social media and tag WeMakeDevs.{" "}
									<span className="font-bold text-purple-600">
										10 raffle winners
									</span>{" "}
									will receive exclusive swag packs from our
									sponsors.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrizesShowcase;
