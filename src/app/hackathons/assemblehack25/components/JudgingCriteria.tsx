import {
	Code,
	Lightbulb,
	Palette,
	Presentation,
	Target,
	TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { images } from "../images";

const JudgingCriteria = () => {
	const criteria = [
		{
			icon: Target,
			title: "Potential Impact",
			description:
				"Evaluates how effectively the project addresses a meaningful problem or unlocks a valuable real-world use case.",
			iconBg: "bg-red-500",
			cardBg: "bg-red-50",
			border: "border-red-200",
		},
		{
			icon: Lightbulb,
			title: "Creativity & Originality",
			description:
				"Assesses the uniqueness of the idea, novelty in approach, and how creatively sponsor technologies (Cline, Vercel, Kestra, Oumi, CodeRabbit) are applied.",
			iconBg: "bg-blue-500",
			cardBg: "bg-blue-50",
			border: "border-blue-200",
		},
		{
			icon: Code,
			title: "Technical Implementation",
			description:
				"Reviews how well the project was executed technically, whether it functions as intended, and the quality of integration with required sponsor technologies.",
			iconBg: "bg-cyan-500",
			cardBg: "bg-cyan-50",
			border: "border-cyan-200",
		},
		{
			icon: TrendingUp,
			title: "Learning & Growth",
			description:
				"Recognizes the progress made during the hackathon, especially for first-time builders or teams pushing themselves with new tools or concepts.",
			iconBg: "bg-green-500",
			cardBg: "bg-green-50",
			border: "border-green-200",
		},
		{
			icon: Palette,
			title: "Aesthetics & User Experience",
			description:
				"Considers how intuitive, user-friendly, and polished the final project is, particularly if it has a frontend or user interaction layer.",
			iconBg: "bg-purple-500",
			cardBg: "bg-purple-50",
			border: "border-purple-200",
		},
		{
			icon: Presentation,
			title: "Presentation & Communication",
			description:
				"Evaluates the clarity of the README, the quality of the demo video, and how effectively the team communicates their idea and results.",
			iconBg: "bg-violet-500",
			cardBg: "bg-violet-50",
			border: "border-violet-200",
		},
	];

	return (
		<div className="relative bg-gradient-to-b from-white via-gray-50/50 to-white py-16 border-y border-gray-200 overflow-hidden">
			{/* Comic-style dotted background - very light */}
			<div
				className="absolute inset-0 opacity-[0.05]"
				style={{
					backgroundImage: `url(${images.dottedGrid.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>

			{/* Floating Iron Man - Left side */}
			<div className="hidden lg:block absolute left-0 top-1/4 -translate-x-1/4 opacity-15 hover:opacity-30 transition-opacity duration-500">
				<Image
					src={images.ironmanFlying}
					alt="Iron Man Flying"
					className="w-64 h-auto drop-shadow-2xl"
				/>
			</div>

			{/* Floating Thor Hammer - Right side */}
			<div className="hidden lg:block absolute right-8 bottom-1/4 opacity-15 hover:opacity-30 transition-opacity duration-500 rotate-12">
				<Image
					src={images.thorHammer}
					alt="Thor's Hammer"
					className="w-32 h-auto drop-shadow-2xl"
				/>
			</div>

			{/* Floating Iron Man Helmet - Top right */}
			<div className="hidden lg:block absolute right-16 top-16 opacity-10 hover:opacity-20 transition-opacity duration-500">
				<Image
					src={images.ironmanHelmet}
					alt="Iron Man Helmet"
					className="w-24 h-auto drop-shadow-xl"
				/>
			</div>

			<div className="max-w-6xl mx-auto px-4 relative z-10">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
						Judging Criteria
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto font-mono">
						Your projects will be evaluated based on these six key
						dimensions
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{criteria.map(criterion => {
						const IconComponent = criterion.icon;
						return (
							<div
								key={criterion.title}
								className={`${criterion.cardBg} rounded-2xl p-6 border-2 ${criterion.border} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm`}
							>
								<div className="flex items-center gap-4 mb-4">
									<div
										className={`${criterion.iconBg} p-3 rounded-xl shadow-md`}
									>
										<IconComponent className="w-6 h-6 text-white" />
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-bold text-gray-900 leading-tight">
											{criterion.title}
										</h3>
									</div>
								</div>
								<p className="text-gray-700 leading-relaxed text-sm">
									{criterion.description}
								</p>
							</div>
						);
					})}
				</div>

				<div className="mt-12 text-center relative">
					{/* Small floating shield near pro tip */}
					<div className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 opacity-15">
						<Image
							src={images.captainAmericaShield}
							alt="Shield"
							className="w-20 h-auto"
						/>
					</div>

					<div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-1">
						<div className="bg-white rounded-xl px-8 py-6">
							<h3 className="text-2xl font-black text-gray-900 mb-4 uppercase">
								Pro Tip
							</h3>
							<p className="text-lg text-gray-700 max-w-3xl mx-auto">
								Focus on creating a project that not only works
								well technically but also solves a real problem
								and provides a great user experience. The best
								projects often excel in multiple criteria!
								<span className="font-bold text-blue-600">
									{" "}
									Assemble your skills and tools to maximize
									your impact.
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JudgingCriteria;
