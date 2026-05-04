"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import Image from "next/image";
import boseImg from "../images/bose.png";
import ipadImg from "../images/ipad.png";
import iphoneImg from "../images/iphone.png";
import macbookImg from "../images/macbook.png";

const prizes = [
	{
		name: "MacBook Neo",
		image: macbookImg,
		gradient: "from-[#00cfb4] to-emerald-600",
		glowColor: "rgba(0, 207, 180, 0.3)",
		borderGlow: "hover:border-[#00cfb4]/40",
		description: "The ultimate dev machine for the ultimate orchestrator.",
		tier: "Legendary",
		tierColor: "text-amber-400",
		tierBg: "bg-amber-400/10 border-amber-400/20",
	},
	{
		name: "iPad Pro",
		image: ipadImg,
		gradient: "from-purple-500 to-indigo-600",
		glowColor: "rgba(168, 85, 247, 0.3)",
		borderGlow: "hover:border-purple-500/40",
		description: "Sketch your workflows, review your pipelines on the go.",
		tier: "Epic",
		tierColor: "text-purple-400",
		tierBg: "bg-purple-400/10 border-purple-400/20",
	},
	{
		name: "iPhone 17e",
		image: iphoneImg,
		gradient: "from-orange-500 to-red-500",
		glowColor: "rgba(249, 115, 22, 0.3)",
		borderGlow: "hover:border-orange-500/40",
		description: "Stay connected to your orchestration dashboards 24/7.",
		tier: "Rare",
		tierColor: "text-orange-400",
		tierBg: "bg-orange-400/10 border-orange-400/20",
	},
	{
		name: "Bose Speakers",
		image: boseImg,
		gradient: "from-blue-500 to-cyan-500",
		glowColor: "rgba(59, 130, 246, 0.3)",
		borderGlow: "hover:border-blue-500/40",
		description: "Code to your favorite beats with premium sound quality.",
		tier: "Rare",
		tierColor: "text-blue-400",
		tierBg: "bg-blue-400/10 border-blue-400/20",
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
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
						<span className="glow-text-orange text-orange-400">
							Prizes worth $4,000
						</span>
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
							className={`glow-card p-6 text-center group cursor-default transition-colors ${prize.borderGlow}`}
						>
							{/* Tier badge */}
							<div
								className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${prize.tierColor} ${prize.tierBg} border mb-4`}
							>
								{prize.tier}
							</div>

							{/* Product image */}
							<div className="relative w-full aspect-square mb-5 flex items-center justify-center">
								<div
									className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}
								/>
								<Image
									src={prize.image}
									alt={prize.name}
									width={200}
									height={200}
									className="relative z-10 object-contain w-4/5 h-4/5 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
								/>
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
