"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { AlanCartoon, ChickenCartoon, Dice, TigerCartoon } from "./Characters";

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
};

// ─── Memory graph (graph-vector hybrid) backdrop ──────────────────────────────
const memNodes = [
	{ cx: 80, cy: 190, r: 8, color: "#ffb800", delay: 0 },
	{ cx: 210, cy: 110, r: 6, color: "#ff2d7e", delay: 0.35 },
	{ cx: 250, cy: 280, r: 7, color: "#00e0d5", delay: 0.6 },
	{ cx: 430, cy: 160, r: 9, color: "#ffb800", delay: 0.9 },
	{ cx: 520, cy: 320, r: 5, color: "#ff2d7e", delay: 1.2 },
	{ cx: 660, cy: 180, r: 8, color: "#ffb800", delay: 0.2 },
	{ cx: 760, cy: 80, r: 6, color: "#00e0d5", delay: 0.55 },
	{ cx: 900, cy: 250, r: 7, color: "#ff2d7e", delay: 0.8 },
	{ cx: 1010, cy: 140, r: 9, color: "#ffb800", delay: 1.1 },
	{ cx: 1090, cy: 350, r: 5, color: "#00e0d5", delay: 0.4 },
	{ cx: 1180, cy: 200, r: 6, color: "#ff2d7e", delay: 0.7 },
];
const memEdges = [
	{ x1: 80, y1: 190, x2: 210, y2: 110, color: "#ffb800" },
	{ x1: 80, y1: 190, x2: 250, y2: 280, color: "#ffb800" },
	{ x1: 210, y1: 110, x2: 430, y2: 160, color: "#ff2d7e" },
	{ x1: 250, y1: 280, x2: 430, y2: 160, color: "#00e0d5" },
	{ x1: 430, y1: 160, x2: 520, y2: 320, color: "#ff2d7e" },
	{ x1: 430, y1: 160, x2: 660, y2: 180, color: "#ffb800" },
	{ x1: 660, y1: 180, x2: 760, y2: 80, color: "#00e0d5" },
	{ x1: 660, y1: 180, x2: 900, y2: 250, color: "#ff2d7e" },
	{ x1: 760, y1: 80, x2: 1010, y2: 140, color: "#ffb800" },
	{ x1: 900, y1: 250, x2: 1010, y2: 140, color: "#ff2d7e" },
	{ x1: 1010, y1: 140, x2: 1180, y2: 200, color: "#ffb800" },
	{ x1: 1090, y1: 350, x2: 1180, y2: 200, color: "#00e0d5" },
];

const MemoryGraph = () => (
	<div className="absolute inset-0 pointer-events-none overflow-hidden">
		<svg
			viewBox="0 0 1200 420"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			className="w-full h-full opacity-[0.22]"
			preserveAspectRatio="xMidYMid slice"
		>
			<defs>
				<filter
					id="memGlow"
					x="-60%"
					y="-60%"
					width="220%"
					height="220%"
				>
					<feGaussianBlur stdDeviation="4" result="b" />
					<feMerge>
						<feMergeNode in="b" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>
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
						filter="url(#memGlow)"
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
					filter="url(#memGlow)"
					style={{
						animation: `mem-pulse 2.6s ease-in-out infinite ${n.delay}s`,
						transformOrigin: `${n.cx}px ${n.cy}px`,
						transformBox: "fill-box",
					}}
				/>
			))}
			{memEdges.slice(0, 6).map((e, i) => (
				<circle
					key={`p-${e.x1}-${e.y1}-${e.x2}-${e.y2}`}
					r="3"
					fill="#ffffff"
					filter="url(#memGlow)"
				>
					<animateMotion
						dur={`${2.4 + i * 0.4}s`}
						repeatCount="indefinite"
						begin={`${0.8 + i * 0.3}s`}
						path={`M ${e.x1} ${e.y1} L ${e.x2} ${e.y2}`}
					/>
				</circle>
			))}
		</svg>
	</div>
);

const HeroSection = ({
	title,
	description,
	cta,
	submissionFormUrl,
}: HeroSectionProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});
	const crewY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
	const crewOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.1]);

	return (
		<div
			ref={containerRef}
			className="relative min-h-[78svh] md:min-h-[82svh] overflow-hidden flex flex-col"
		>
			<MemoryGraph />

			{/* ── Floating cartoon crew (right side) ── */}
			<motion.div
				style={{ y: crewY, opacity: crewOpacity }}
				className="absolute inset-0 pointer-events-none z-10 hidden lg:block"
			>
				<motion.div
					className="absolute top-[14%] right-[6%] w-[230px] xl:w-[280px] float-bob"
					initial={{ x: 120, opacity: 0, rotate: 4 }}
					animate={{ x: 0, opacity: 1, rotate: 0 }}
					transition={{
						duration: 1.4,
						ease: [0.16, 1, 0.3, 1],
						delay: 0.4,
					}}
				>
					<AlanCartoon className="w-full h-auto drop-shadow-[0_0_30px_rgba(255,184,0,0.35)]" />
				</motion.div>
				<motion.div
					className="absolute bottom-[16%] right-[30%] w-[150px] xl:w-[180px] float-bob"
					style={{ animationDelay: "1.2s" }}
					initial={{ y: 80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.2, delay: 1 }}
				>
					<TigerCartoon className="w-full h-auto drop-shadow-[0_0_26px_rgba(255,45,126,0.35)]" />
				</motion.div>
				<motion.div
					className="absolute top-[20%] right-[33%] w-[90px] xl:w-[110px] float-bob"
					style={{ animationDelay: "0.6s" }}
					initial={{ y: -60, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.2, delay: 1.3 }}
				>
					<ChickenCartoon className="w-full h-auto drop-shadow-[0_0_20px_rgba(0,224,213,0.3)]" />
				</motion.div>
			</motion.div>

			<ViewContainer className="relative z-20 flex flex-col justify-center pt-16 md:pt-20 pb-10 flex-1">
				{/* Marquee tag */}
				<motion.div
					className="inline-flex items-center gap-2 self-start bg-[#ff2d7e]/15 border border-[#ff2d7e]/40 text-[#ff8ab8] px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"
					initial={{ opacity: 0, y: -12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span className="w-2 h-2 bg-[#ff2d7e] rounded-full neon-flicker" />
					WeMakeDevs × Cognee · June 29 – July 5, 2026
				</motion.div>

				{/* Neon title */}
				<motion.div
					className="mb-5 max-w-4xl"
					initial={{ opacity: 0, scale: 0.85, y: 30 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{
						duration: 0.9,
						delay: 0.2,
						ease: [0.16, 1, 0.3, 1],
					}}
				>
					<h1 className="font-black italic uppercase leading-[0.92] tracking-tight">
						<span className="block text-4xl md:text-6xl text-[#ffd24a] glow-gold neon-pulse">
							The Hangover
						</span>
						<span className="block text-5xl md:text-7xl text-[#ff2d7e] glow-pink">
							Part AI
						</span>
					</h1>
					<p className="mt-3 text-xl md:text-2xl font-bold text-[#21e6c1] glow-cyan tracking-wide">
						Where&apos;s My Context?
					</p>
				</motion.div>

				{/* Description */}
				<motion.p
					className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed mb-7"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.6 }}
				>
					{description}
				</motion.p>

				{/* Prize + dates */}
				<motion.div
					className="mb-7"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.8 }}
				>
					<div className="flex items-baseline gap-3 mb-4">
						<span
							className="text-5xl md:text-7xl font-black text-[#ffd24a]"
							style={{
								textShadow:
									"0 0 40px rgba(255,184,0,0.6), 0 0 80px rgba(255,45,126,0.3)",
							}}
						>
							$10,000
						</span>
						<span className="text-lg md:text-xl text-slate-300 font-medium">
							in prizes + job interviews at Cognee
						</span>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
						<div className="border border-[#ffb800]/45 rounded-xl p-4 bg-black/55 backdrop-blur-sm shadow-[0_0_18px_rgba(255,184,0,0.18)]">
							<div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb800]/80 mb-1 font-bold">
								Dates
							</div>
							<div className="font-mono text-sm font-bold text-[#ffd24a]">
								Jun 29 – Jul 5, 2026
							</div>
						</div>
						<div className="border border-[#00e0d5]/45 rounded-xl p-4 bg-black/55 backdrop-blur-sm shadow-[0_0_18px_rgba(0,224,213,0.18)]">
							<div className="text-[11px] uppercase tracking-[0.18em] text-[#00e0d5]/80 mb-1 font-bold">
								The Mission
							</div>
							<div className="font-mono text-sm font-bold text-[#21e6c1]">
								Build AI that doesn&apos;t forget
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
					{submissionFormUrl && (
						<Link
							href={submissionFormUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#ffb800]/50 text-[#ffd24a] font-bold hover:bg-[#ffb800]/15 transition-all duration-300 text-base"
						>
							Submit Project
							<ArrowUpRight className="w-5 h-5" />
						</Link>
					)}
					<Dice className="w-20 h-auto opacity-80 hidden sm:block" />
				</motion.div>
			</ViewContainer>
		</div>
	);
};

export default HeroSection;
