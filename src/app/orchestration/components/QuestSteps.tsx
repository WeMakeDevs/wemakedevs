"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import {
	AlertTriangle,
	Award,
	BookOpen,
	ChevronRight,
	ClipboardEdit,
	ExternalLink,
	Hash,
} from "lucide-react";

const steps = [
	{
		number: 1,
		title: "Register",
		icon: ClipboardEdit,
		color: "text-[#00cfb4]",
		bgColor: "bg-[#00cfb4]/10",
		borderColor: "border-[#00cfb4]/30",
		content: "register-step",
	},
	{
		number: 2,
		title: "Sign Up to the Academy",
		icon: BookOpen,
		color: "text-purple-400",
		bgColor: "bg-purple-500/10",
		borderColor: "border-purple-500/30",
		content: "academy-step",
	},
	{
		number: 3,
		title: "Get Certified",
		description:
			"Complete the course material and pass the certification exam. You will earn your Official Kestra Certification. Add it to the Certificates section on your LinkedIn profile.",
		icon: Award,
		color: "text-orange-400",
		bgColor: "bg-orange-500/10",
		borderColor: "border-orange-500/30",
	},
	{
		number: 4,
		title: "Share on Socials",
		description:
			"Post about your certification on social media using #KestraAcademy. That is your entry into the giveaway!",
		icon: Hash,
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
					className="text-center mb-8"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">
						The Quest Steps
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
						How to Win
					</h2>
					<p className="text-xl text-slate-400 max-w-xl mx-auto">
						Four steps. That&apos;s all it takes to complete this
						quest and enter the loot drop.
					</p>
				</motion.div>

				{/* Urgency callout */}
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="max-w-3xl mx-auto mb-10"
				>
					<div className="flex items-start gap-4 p-5 rounded-xl bg-orange-500/5 border border-orange-500/20">
						<AlertTriangle
							className="text-orange-400 shrink-0 mt-0.5"
							size={22}
						/>
						<div>
							<p className="text-white font-semibold mb-1">
								First come, first served!
							</p>
							<p className="text-slate-400 text-base leading-relaxed">
								We pick winners at random on a rolling basis.
								The sooner you finish the course and post on
								socials, the more draws you&apos;re in for.
								Don&apos;t sleep on it. Complete the course
								ASAP!
							</p>
						</div>
					</div>
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
									<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
										<span className="text-xs font-bold text-white">
											{step.number}
										</span>
									</div>
								</div>
							</div>

							{/* Content */}
							<div className="flex-1 min-w-0">
								<h3 className="text-xl md:text-2xl font-bold text-white mb-2">
									{step.title}
								</h3>
								{step.content === "register-step" ? (
									<p className="text-slate-400 leading-relaxed">
										Fill out the{" "}
										<a
											href="https://forms.gle/veQSZHHVG49firuj9"
											target="_blank"
											rel="noopener noreferrer"
											className="text-[#00cfb4] font-medium underline underline-offset-2 hover:text-[#00e6c8] transition-colors"
										>
											registration form
										</a>{" "}
										to enter the challenge. It only takes a
										minute.
									</p>
								) : step.content === "academy-step" ? (
									<p className="text-slate-400 leading-relaxed">
										Head to Kestra Academy and{" "}
										<a
											href="https://academy.kestra.io/kestra-fundamentals"
											target="_blank"
											rel="noopener noreferrer"
											className="text-[#00cfb4] font-medium underline underline-offset-2 hover:text-[#00e6c8] transition-colors"
										>
											sign up for the Kestra Fundamentals
											course
										</a>
										. It is 100% free, self-paced, and
										beginner-friendly.
									</p>
								) : (
									<p className="text-slate-400 leading-relaxed">
										{step.description}
									</p>
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
					<a
						href="https://forms.gle/veQSZHHVG49firuj9"
						target="_blank"
						rel="noopener noreferrer"
						className="glow-btn inline-flex items-center gap-2"
					>
						Register Now
						<ExternalLink size={18} />
					</a>
				</motion.div>
			</ViewContainer>
		</section>
	);
};

export default QuestSteps;
