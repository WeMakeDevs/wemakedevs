"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { Gift, Laptop, Smartphone, Speaker, Tablet } from "lucide-react";

const prizes = [
	{
		name: "MacBook Neo",
		icon: Laptop,
		gradient: "from-[#00cfb4] to-emerald-600",
		glowColor: "rgba(0, 207, 180, 0.3)",
		description: "The ultimate dev machine for the ultimate orchestrator.",
		tier: "Legendary",
		tierColor: "text-amber-400",
	},
	{
		name: "iPad Pro",
		icon: Tablet,
		gradient: "from-purple-500 to-indigo-600",
		glowColor: "rgba(168, 85, 247, 0.3)",
		description: "Sketch your workflows, review your pipelines on the go.",
		tier: "Epic",
		tierColor: "text-purple-400",
	},
	{
		name: "iPhone 17e",
		icon: Smartphone,
		gradient: "from-orange-500 to-red-500",
		glowColor: "rgba(249, 115, 22, 0.3)",
		description: "Stay connected to your orchestration dashboards 24/7.",
		tier: "Rare",
		tierColor: "text-orange-400",
	},
	{
		name: "Bose Speakers",
		icon: Speaker,
		gradient: "from-blue-500 to-cyan-500",
		glowColor: "rgba(59, 130, 246, 0.3)",
		description: "Code to your favorite beats with premium sound quality.",
		tier: "Rare",
		tierColor: "text-blue-400",
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 40, scale: 0.95 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.5,
			delay: i * 0.12,
			ease: "easeOut" as const,
		},
	}),
};

const PrizesSection = () => {
	return (
		<section id="prizes" className="py-20 md:py-28 scroll-mt-24 relative">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />
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
						<Gift size={14} />
						The Loot Drop
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
						Claim Your Legendary Loot
					</h2>
					<p className="text-lg text-slate-400 max-w-xl mx-auto">
						Complete the quest and you could walk away with one of
						these prizes.
					</p>

					{/* Rolling basis badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.2 }}
						className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full rolling-badge text-white text-sm font-bold"
					>
						🎲 Winners Picked on a Rolling Basis
					</motion.div>
				</motion.div>

				{/* Prize cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{prizes.map((prize, i) => (
						<motion.div
							key={prize.name}
							custom={i}
							variants={cardVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							whileHover={{
								y: -8,
								transition: { duration: 0.2 },
							}}
							className="glow-card p-6 text-center group cursor-default"
							style={{
								boxShadow: `0 0 0px ${prize.glowColor}`,
							}}
						>
							{/* Tier badge */}
							<div
								className={`text-xs font-bold uppercase tracking-wider ${prize.tierColor} mb-4`}
							>
								{prize.tier}
							</div>

							{/* Icon */}
							<div
								className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${prize.gradient} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}
							>
								<prize.icon className="text-white" size={36} />
							</div>

							{/* Name */}
							<h3 className="text-xl font-bold text-white mb-2">
								{prize.name}
							</h3>

							{/* Description */}
							<p className="text-sm text-slate-400 leading-relaxed">
								{prize.description}
							</p>
						</motion.div>
					))}
				</div>
			</ViewContainer>
		</section>
	);
};

export default PrizesSection;
