"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, BrainCircuit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { images } from "../images";
import { Dice } from "./Characters";

type HeroSectionProps = {
	title: string;
	description: string;
	prize: string;
	cta: {
		label: string;
		href: string;
		disabled?: boolean;
		openInNewTab?: boolean;
	};
	submissionFormUrl?: string;
	submissionsClosed?: boolean;
};

// ─── Memory graph (graph-vector hybrid) backdrop ──────────────────────────────
const memNodes = [
	{ cx: 80, cy: 190, r: 8, color: "#c33124", delay: 0 },
	{ cx: 210, cy: 110, r: 6, color: "#e7a92b", delay: 0.35 },
	{ cx: 250, cy: 280, r: 7, color: "#0e8a80", delay: 0.6 },
	{ cx: 430, cy: 160, r: 9, color: "#c33124", delay: 0.9 },
	{ cx: 520, cy: 320, r: 5, color: "#e0762a", delay: 1.2 },
	{ cx: 660, cy: 180, r: 8, color: "#e7a92b", delay: 0.2 },
	{ cx: 760, cy: 80, r: 6, color: "#0e8a80", delay: 0.55 },
	{ cx: 900, cy: 250, r: 7, color: "#c33124", delay: 0.8 },
	{ cx: 1010, cy: 140, r: 9, color: "#e7a92b", delay: 1.1 },
	{ cx: 1090, cy: 350, r: 5, color: "#0e8a80", delay: 0.4 },
	{ cx: 1180, cy: 200, r: 6, color: "#e0762a", delay: 0.7 },
];
const memEdges = [
	{ x1: 80, y1: 190, x2: 210, y2: 110, color: "#c33124" },
	{ x1: 80, y1: 190, x2: 250, y2: 280, color: "#c33124" },
	{ x1: 210, y1: 110, x2: 430, y2: 160, color: "#e7a92b" },
	{ x1: 250, y1: 280, x2: 430, y2: 160, color: "#0e8a80" },
	{ x1: 430, y1: 160, x2: 520, y2: 320, color: "#e0762a" },
	{ x1: 430, y1: 160, x2: 660, y2: 180, color: "#c33124" },
	{ x1: 660, y1: 180, x2: 760, y2: 80, color: "#0e8a80" },
	{ x1: 660, y1: 180, x2: 900, y2: 250, color: "#e7a92b" },
	{ x1: 760, y1: 80, x2: 1010, y2: 140, color: "#c33124" },
	{ x1: 900, y1: 250, x2: 1010, y2: 140, color: "#e7a92b" },
	{ x1: 1010, y1: 140, x2: 1180, y2: 200, color: "#0e8a80" },
	{ x1: 1090, y1: 350, x2: 1180, y2: 200, color: "#e0762a" },
];

const MemoryGraph = () => (
	<div className="absolute inset-0 pointer-events-none overflow-hidden">
		<svg
			viewBox="0 0 1200 420"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			className="w-full h-full opacity-[0.18]"
			preserveAspectRatio="xMidYMid slice"
		>
			{memEdges.map((e, i) => {
				const len = Math.round(Math.hypot(e.x2 - e.x1, e.y2 - e.y1));
				return (
					<line
						key={`e-${e.x1}-${e.y1}-${e.x2}-${e.y2}`}
						x1={e.x1}
						y1={e.y1}
						x2={e.x2}
						y2={e.y2}
						stroke={e.color}
						strokeWidth="1.5"
						strokeDasharray={len}
						strokeDashoffset={len}
						style={{
							animation: `drawEdge 1.6s ease forwards ${0.5 + i * 0.12}s`,
						}}
					/>
				);
			})}
			{memNodes.map(n => (
				<circle
					key={`n-${n.cx}-${n.cy}`}
					cx={n.cx}
					cy={n.cy}
					r={n.r}
					fill={n.color}
					style={{
						animation: `mem-pulse 2.6s ease-in-out infinite ${n.delay}s`,
						transformOrigin: `${n.cx}px ${n.cy}px`,
						transformBox: "fill-box",
					}}
				/>
			))}
		</svg>
	</div>
);

const HeroSection = ({
	title,
	description,
	cta,
	submissionFormUrl,
	submissionsClosed,
}: HeroSectionProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});
	const crewOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.1]);

	// Fade the bottom (waist cutout) and the left edge (cut-off arm) into the background
	const blendMask = {
		WebkitMaskImage:
			"linear-gradient(to bottom, black 74%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%)",
		maskImage:
			"linear-gradient(to bottom, black 74%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%)",
		WebkitMaskComposite: "source-in",
		maskComposite: "intersect",
	} as const;

	return (
		<div
			ref={containerRef}
			className="relative min-h-[80svh] md:min-h-[84svh] overflow-hidden flex flex-col"
		>
			<MemoryGraph />

			{/* ── The Wolfpack team photo (right side, waist cutout blended into the sand) ── */}
			<motion.div
				style={{ opacity: crewOpacity }}
				className="absolute bottom-0 right-0 w-[54%] max-w-[760px] z-[5] hidden lg:block pointer-events-none"
			>
				<motion.div
					initial={{ x: 80, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						duration: 1.2,
						ease: [0.16, 1, 0.3, 1],
						delay: 0.4,
					}}
				>
					<Image
						src={images.background}
						alt="The Wolfpack"
						className="w-full h-auto object-contain object-bottom drop-shadow-[0_18px_30px_rgba(120,80,30,0.4)]"
						style={blendMask}
						priority
					/>
				</motion.div>
			</motion.div>

			<ViewContainer className="relative z-20 flex flex-col justify-center pt-16 md:pt-20 pb-10 flex-1">
				{/* Title image */}
				<motion.div
					className="mb-8 md:mb-10 w-full max-w-[560px] lg:max-w-[680px]"
					initial={{ opacity: 0, scale: 0.85, y: 30 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{
						duration: 0.9,
						delay: 0.2,
						ease: [0.16, 1, 0.3, 1],
					}}
				>
					<Image
						src={images.title}
						alt="The Hangover Part AI: Where's My Context?"
						className="w-full h-auto"
						priority
					/>
				</motion.div>

				{/* Description */}
				<motion.p
					className="text-base md:text-lg text-[#5a4632] max-w-xl leading-relaxed mb-7"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.65 }}
				>
					{(() => {
						const phrase = "Build AI that doesn't forget";
						const idx = description.indexOf(phrase);
						if (idx === -1) return description;
						return (
							<>
								{description.slice(0, idx)}
								<strong className="font-bold text-[#3a2a1c]">
									{phrase}
								</strong>
								{description.slice(idx + phrase.length)}
							</>
						);
					})()}
				</motion.p>

				{/* Prize + dates */}
				<motion.div
					className="mb-7"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.8 }}
				>
					<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
						<span className="text-5xl md:text-7xl font-black text-[#c33124] glow-red">
							$10,000
						</span>
						<span className="text-lg md:text-xl text-[#5a4632] font-semibold">
							in prizes + job interviews at Cognee
						</span>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
						<div className="paper-card rounded-xl p-4">
							<div className="text-[11px] uppercase tracking-[0.18em] text-[#c33124] mb-1 font-bold">
								Dates
							</div>
							<div className="font-mono text-sm font-bold text-[#3a2a1c]">
								Jun 29 – Jul 5, 2026
							</div>
						</div>
						<div className="paper-card rounded-xl p-4">
							<div className="text-[11px] uppercase tracking-[0.18em] text-[#0e8a80] mb-1 font-bold">
								The Mission
							</div>
							<div className="font-mono text-sm font-bold text-[#3a2a1c]">
								Give your AI a memory
							</div>
						</div>
					</div>
				</motion.div>

				{/* CTA */}
				<motion.div
					className="flex items-center gap-4 flex-wrap"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 1 }}
				>
					{cta.disabled ? (
						<div className="vegas-btn opacity-60 cursor-not-allowed pointer-events-none">
							<BrainCircuit className="w-5 h-5" />
							{cta.label}
						</div>
					) : (
						<Link
							href={cta.href}
							target={cta.openInNewTab ? "_blank" : undefined}
							rel={
								cta.openInNewTab
									? "noopener noreferrer"
									: undefined
							}
							className="vegas-btn"
						>
							<BrainCircuit className="w-5 h-5" />
							{cta.label}
						</Link>
					)}
					{submissionFormUrl &&
						(submissionsClosed ? (
							<div
								aria-disabled="true"
								className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#c33124]/30 text-[#c33124]/60 font-bold cursor-not-allowed opacity-60 pointer-events-none text-base"
							>
								Submissions Closed
							</div>
						) : (
							<Link
								href={submissionFormUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#c33124]/50 text-[#c33124] font-bold hover:bg-[#c33124]/10 transition-all duration-300 text-base"
							>
								Submit Project
								<ArrowUpRight className="w-5 h-5" />
							</Link>
						))}
					<Dice className="w-20 h-auto hidden sm:block drop-shadow-[0_6px_12px_rgba(120,80,30,0.25)]" />
				</motion.div>

				{/* Team photo for small screens (in-flow, blended at the bottom) */}
				<motion.div
					className="lg:hidden mt-10 flex justify-center"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<Image
						src={images.background}
						alt="The Wolfpack"
						className="w-full max-w-xs sm:max-w-sm h-auto object-contain drop-shadow-[0_14px_24px_rgba(120,80,30,0.4)]"
						style={blendMask}
					/>
				</motion.div>
			</ViewContainer>
		</div>
	);
};

export default HeroSection;
