"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronDown, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import boseImg from "../images/bose.png";
import ipadImg from "../images/ipad.png";
import iphoneImg from "../images/iphone.png";
import macbookImg from "../images/macbook.png";

const floatingProducts = [
	{
		src: macbookImg,
		alt: "MacBook Neo",
		className: "absolute left-[2%] top-[18%] w-28 sm:w-36 md:w-44 lg:w-52",
		delay: 0,
		y: [0, -18, 0],
		rotate: [-3, 2, -3],
	},
	{
		src: boseImg,
		alt: "Bose Speakers",
		className:
			"absolute left-[4%] bottom-[16%] w-24 sm:w-28 md:w-36 lg:w-44",
		delay: 1.5,
		y: [0, 14, 0],
		rotate: [2, -2, 2],
	},
	{
		src: ipadImg,
		alt: "iPad Pro",
		className: "absolute right-[2%] top-[20%] w-24 sm:w-32 md:w-40 lg:w-48",
		delay: 0.8,
		y: [0, -14, 0],
		rotate: [3, -1, 3],
	},
	{
		src: iphoneImg,
		alt: "iPhone 17e",
		className:
			"absolute right-[6%] bottom-[18%] w-20 sm:w-24 md:w-32 lg:w-36",
		delay: 2,
		y: [0, 16, 0],
		rotate: [-2, 3, -2],
	},
];

const HeroSection = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
			{/* Background effects */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00cfb4]/5 rounded-full blur-[120px]" />
				<div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
				<div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[80px]" />
			</div>

			{/* Floating product images */}
			<div className="absolute inset-0 pointer-events-none hidden md:block">
				{floatingProducts.map(product => (
					<motion.div
						key={product.alt}
						className={product.className}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{
							opacity: 0.25,
							scale: 1,
							y: product.y,
							rotate: product.rotate,
						}}
						transition={{
							opacity: { duration: 1, delay: product.delay },
							scale: { duration: 1, delay: product.delay },
							y: {
								duration: 6,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
								delay: product.delay,
							},
							rotate: {
								duration: 8,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
								delay: product.delay,
							},
						}}
						whileHover={{ opacity: 0.5, scale: 1.05 }}
					>
						<Image
							src={product.src}
							alt={product.alt}
							className="w-full h-auto drop-shadow-[0_0_30px_rgba(0,207,180,0.15)]"
							priority
						/>
					</motion.div>
				))}
			</div>

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
					className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed"
				>
					Learn workflow orchestration, earn an{" "}
					<span className="text-[#00cfb4] font-semibold">
						official Kestra certification
					</span>
					, and win a MacBook, iPad, iPhone &amp; more.
				</motion.p>

				{/* Prizes highlight */}
				<motion.p
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.25 }}
					className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10"
				>
					<span className="glow-text-orange text-orange-400">
						Prizes worth $4,000
					</span>
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
