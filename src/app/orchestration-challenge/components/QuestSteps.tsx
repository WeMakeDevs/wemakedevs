"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import {
	AtSign,
	Award,
	BookOpen,
	ChevronRight,
	ExternalLink,
	Share2,
} from "lucide-react";
import Link from "next/link";

const steps = [
	{
		number: 1,
		title: "Complete the Course",
		description:
			"Head to Kestra Academy and complete the Kestra Fundamentals course. It's 100% free and self-paced.",
		icon: BookOpen,
		color: "text-[#00cfb4]",
		bgColor: "bg-[#00cfb4]/10",
		borderColor: "border-[#00cfb4]/30",
		link: {
			label: "Go to Kestra Academy",
			url: "https://academy.kestra.io/kestra-fundamentals",
		},
	},
	{
		number: 2,
		title: "Pass the Exam",
		description:
			"Take the certification exam at the end of the course. Pass it and earn your Official Kestra Certification.",
		icon: Award,
		color: "text-purple-400",
		bgColor: "bg-purple-500/10",
		borderColor: "border-purple-500/30",
	},
	{
		number: 3,
		title: "Post on LinkedIn",
		description:
			"Share your shiny new certificate on LinkedIn. Show the world you've leveled up your orchestration skills.",
		icon: Share2,
		color: "text-orange-400",
		bgColor: "bg-orange-500/10",
		borderColor: "border-orange-500/30",
	},
	{
		number: 4,
		title: "Tag & Enter",
		description:
			"Tag @WeMakeDevs and @Kestra in your LinkedIn post to officially enter the giveaway. That's it!",
		icon: AtSign,
		color: "text-blue-400",
		bgColor: "bg-blue-500/10",
		borderColor: "border-blue-500/30",
	},
];

const stepVariants = {
	hidden: { opacity: 0, x: -30 },
	visible: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			delay: i * 0.15,
		},
	}),
};

const QuestSteps = () => {
	return (
		<section
			id="quest-steps"
			className="py-20 md:py-28 scroll-mt-24 relative"
		>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00cfb4]/[0.02] to-transparent" />
			<ViewContainer className="relative z-10">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">
						The Quest Steps
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
						How to Win
					</h2>
					<p className="text-lg text-slate-400 max-w-xl mx-auto">
						Four steps. That&apos;s all it takes to complete this
						quest and enter the loot drop.
					</p>
				</motion.div>

				{/* Steps */}
				<div className="max-w-3xl mx-auto space-y-6">
					{steps.map((step, i) => (
						<motion.div
							key={step.number}
							custom={i}
							variants={stepVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							className="glow-card p-6 md:p-8 flex gap-5 md:gap-8 items-start group hover:bg-[#161636] transition-colors"
						>
							{/* Step number + icon */}
							<div className="flex-shrink-0">
								<div
									className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${step.bgColor} ${step.borderColor} border flex items-center justify-center relative`}
								>
									<step.icon
										className={step.color}
										size={28}
									/>
									{/* Step number badge */}
									<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
										<span className="text-xs font-bold text-white">
											{step.number}
										</span>
									</div>
								</div>
							</div>

							{/* Content */}
							<div className="flex-1 min-w-0">
								<h3 className="text-lg md:text-xl font-bold text-white mb-2">
									{step.title}
								</h3>
								<p className="text-slate-400 leading-relaxed mb-3">
									{step.description}
								</p>
								{step.link && (
									<Link
										href={step.link.url}
										target="_blank"
										rel="noopener noreferrer"
										className={`inline-flex items-center gap-2 text-sm font-medium ${step.color} hover:underline`}
									>
										{step.link.label}
										<ExternalLink size={14} />
									</Link>
								)}
							</div>

							{/* Arrow indicator */}
							<div className="hidden md:flex items-center self-center">
								<ChevronRight
									className="text-slate-700 group-hover:text-slate-500 transition-colors"
									size={24}
								/>
							</div>
						</motion.div>
					))}
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="text-center mt-12"
				>
					<Link
						href="https://academy.kestra.io/kestra-fundamentals"
						target="_blank"
						rel="noopener noreferrer"
						className="glow-btn inline-flex items-center gap-2"
					>
						Begin Your Quest
						<ExternalLink size={18} />
					</Link>
				</motion.div>
			</ViewContainer>
		</section>
	);
};

export default QuestSteps;
