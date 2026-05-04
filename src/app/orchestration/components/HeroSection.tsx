"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronDown, Users, Zap } from "lucide-react";
import Link from "next/link";

const FloatingParticles = () => (
	<div className="absolute inset-0 overflow-hidden pointer-events-none">
		{["p1", "p2", "p3", "p4", "p5"].map((id, i) => (
			<div
				key={id}
				className="particle absolute w-2 h-2 rounded-full bg-[#00cfb4]/30"
				style={{
					left: `${15 + i * 18}%`,
					top: `${20 + i * 12}%`,
				}}
			/>
		))}
	</div>
);

const HeroSection = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
			{/* Background effects */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00cfb4]/5 rounded-full blur-[120px]" />
				<div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
				<div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[80px]" />
			</div>

			<FloatingParticles />

			<div className="relative z-10 text-center px-5 max-w-5xl mx-auto">
				{/* Date & Beginners badges */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="flex flex-wrap items-center justify-center gap-3 mb-8"
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium">
						<Calendar size={14} />
						<span>May 4 – 17, 2026</span>
					</div>
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium">
						<Users size={14} />
						<span>Beginners Welcome</span>
					</div>
				</motion.div>

				{/* Title */}
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
				>
					<span className="text-white">The </span>
					<span className="glow-text text-[#00cfb4]">Kestra</span>
					<br />
					<span className="text-white">Orchestration </span>
					<span className="glow-text-orange text-orange-400">
						Challenge
					</span>
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
				>
					Learn workflow orchestration, earn an{" "}
					<span className="text-[#00cfb4] font-semibold">
						official Kestra certification
					</span>
					, and win a MacBook, iPad, iPhone &amp; more.
				</motion.p>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					<Link
						href="#quest-steps"
						className="glow-btn inline-flex items-center gap-2"
					>
						<Zap size={20} />
						Start the Quest
					</Link>
					<Link
						href="#about"
						className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition-all font-medium"
					>
						Learn More
						<ChevronDown size={18} />
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
