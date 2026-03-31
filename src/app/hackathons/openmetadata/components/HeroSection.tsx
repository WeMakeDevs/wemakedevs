"use client";

import HackathonStatus from "@/components/HackathonStatus";
import { ViewContainer } from "@/components/ui/view-container";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarDays, Zap } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

type HeroSectionProps = {
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	prize: string;
	cta: {
		label: string;
		href: string;
		disabled?: boolean;
		openInNewTab?: boolean;
	};
};

// ─── Neon DeLorean SVG ────────────────────────────────────────────────────────
const NeonDeLorean = () => (
	<svg
		viewBox="0 0 640 240"
		xmlns="http://www.w3.org/2000/svg"
		className="w-full h-full"
		aria-label="Neon DeLorean time machine"
	>
		<defs>
			<filter id="oGlow" x="-30%" y="-30%" width="160%" height="160%">
				<feGaussianBlur stdDeviation="2.5" result="b" />
				<feMerge>
					<feMergeNode in="b" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
			<filter id="pGlow" x="-40%" y="-40%" width="180%" height="180%">
				<feGaussianBlur stdDeviation="4" result="b" />
				<feMerge>
					<feMergeNode in="b" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
			<filter id="cGlow" x="-40%" y="-40%" width="180%" height="180%">
				<feGaussianBlur stdDeviation="3.5" result="b" />
				<feMerge>
					<feMergeNode in="b" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
		</defs>

		{/* ── Body – main chassis ── */}
		<path
			d="M82,162 L65,138 L72,110 L128,95 L228,84 L262,58 L312,52 L396,52 L436,68 L452,90 L472,98 L518,103 L524,162 Z"
			stroke="#FF9D00"
			strokeWidth="2.2"
			fill="rgba(8,12,24,0.82)"
			filter="url(#oGlow)"
		/>
		{/* Lower body sill */}
		<path
			d="M82,162 L82,148 L128,140 L248,134 L384,134 L458,138 L524,143 L524,162"
			stroke="#FF9D00"
			strokeWidth="1.4"
			fill="none"
			opacity="0.45"
		/>

		{/* ── Windshield ── */}
		<path
			d="M228,84 L262,58 L312,52 L312,87 L262,91 L228,93 Z"
			stroke="#FF9D00"
			strokeWidth="1.4"
			fill="rgba(255,157,0,0.04)"
			filter="url(#oGlow)"
		/>
		{/* ── Rear window ── */}
		<path
			d="M396,52 L436,68 L444,90 L396,88 Z"
			stroke="#FF9D00"
			strokeWidth="1.4"
			fill="rgba(255,157,0,0.04)"
			filter="url(#oGlow)"
		/>

		{/* Roof bar */}
		<line x1="312" y1="52" x2="396" y2="52" stroke="#FF9D00" strokeWidth="3" filter="url(#oGlow)" />

		{/* ── Gull-wing doors (slightly open) ── */}
		<path
			d="M262,91 L244,36 L282,24 L312,52"
			stroke="#b400e4"
			strokeWidth="2"
			fill="rgba(180,0,228,0.07)"
			filter="url(#pGlow)"
		/>
		<path
			d="M396,52 L414,26 L448,36 L436,68"
			stroke="#b400e4"
			strokeWidth="2"
			fill="rgba(180,0,228,0.07)"
			filter="url(#pGlow)"
		/>

		{/* ── Headlights ── */}
		<rect
			x="66" y="117" width="22" height="13" rx="2"
			stroke="#FF9D00" strokeWidth="1.5"
			fill="rgba(255,220,100,0.55)" filter="url(#oGlow)"
		/>
		{/* Headlight beam */}
		<path
			d="M64,117 L10,104 L8,116 L64,128"
			fill="rgba(255,220,100,0.07)"
			stroke="#FF9D00" strokeWidth="0.5" opacity="0.6"
		/>

		{/* ── Tail lights ── */}
		<rect
			x="514" y="110" width="14" height="28" rx="2"
			stroke="#ff3333" strokeWidth="1.5"
			fill="rgba(255,50,50,0.45)" filter="url(#cGlow)"
		/>

		{/* ── Front wheel ── */}
		<circle cx="164" cy="172" r="34" stroke="#FF9D00" strokeWidth="2.5" fill="rgba(8,12,24,0.92)" filter="url(#oGlow)" />
		<circle cx="164" cy="172" r="22" stroke="#FF9D00" strokeWidth="1" fill="none" opacity="0.45" />
		<circle cx="164" cy="172" r="9" stroke="#FF9D00" strokeWidth="1.5" fill="rgba(255,157,0,0.18)" />
		<line x1="164" y1="138" x2="164" y2="206" stroke="#FF9D00" strokeWidth="0.9" opacity="0.3" />
		<line x1="130" y1="172" x2="198" y2="172" stroke="#FF9D00" strokeWidth="0.9" opacity="0.3" />
		<line x1="140" y1="148" x2="188" y2="196" stroke="#FF9D00" strokeWidth="0.7" opacity="0.2" />
		<line x1="188" y1="148" x2="140" y2="196" stroke="#FF9D00" strokeWidth="0.7" opacity="0.2" />

		{/* ── Rear wheel ── */}
		<circle cx="438" cy="172" r="34" stroke="#FF9D00" strokeWidth="2.5" fill="rgba(8,12,24,0.92)" filter="url(#oGlow)" />
		<circle cx="438" cy="172" r="22" stroke="#FF9D00" strokeWidth="1" fill="none" opacity="0.45" />
		<circle cx="438" cy="172" r="9" stroke="#FF9D00" strokeWidth="1.5" fill="rgba(255,157,0,0.18)" />
		<line x1="438" y1="138" x2="438" y2="206" stroke="#FF9D00" strokeWidth="0.9" opacity="0.3" />
		<line x1="404" y1="172" x2="472" y2="172" stroke="#FF9D00" strokeWidth="0.9" opacity="0.3" />
		<line x1="414" y1="148" x2="462" y2="196" stroke="#FF9D00" strokeWidth="0.7" opacity="0.2" />
		<line x1="462" y1="148" x2="414" y2="196" stroke="#FF9D00" strokeWidth="0.7" opacity="0.2" />

		{/* ── OUTATIME license plate ── */}
		<rect x="258" y="143" width="80" height="18" rx="2" stroke="#FF9D00" strokeWidth="1" fill="rgba(8,12,24,0.92)" />
		<text x="263" y="156" fontFamily="monospace" fontSize="8" fill="#FF9D00" letterSpacing="1.5" fontWeight="bold">
			OUTATIME
		</text>

		{/* ── Flux capacitor (rear roof) ── */}
		<path d="M494,80 L510,68 L526,80" stroke="#00ffff" strokeWidth="2.5" fill="none" filter="url(#cGlow)" />
		<circle cx="510" cy="68" r="5" fill="#00ffff" filter="url(#cGlow)" />
		<line x1="510" y1="68" x2="510" y2="52" stroke="#00ffff" strokeWidth="2" filter="url(#cGlow)" />

		{/* ── Time-travel lightning trails ── */}
		<path d="M528,95 L556,84 L552,90 L578,82" stroke="#00ffff" strokeWidth="1.8" fill="none" opacity="0.85" filter="url(#cGlow)" />
		<path d="M528,112 L558,106 L554,112 L580,107" stroke="#b400e4" strokeWidth="1.8" fill="none" opacity="0.75" filter="url(#pGlow)" />
		<path d="M528,130 L552,124 L548,130 L572,125" stroke="#FF9D00" strokeWidth="1.2" fill="none" opacity="0.65" filter="url(#oGlow)" />
		<path d="M528,148 L548,144 L544,149 L564,146" stroke="#FF9D00" strokeWidth="0.9" fill="none" opacity="0.4" />

		{/* ── Hover glow under car ── */}
		<path d="M195,207 Q350,200 505,207" stroke="#00ffff" strokeWidth="1.2" fill="none" opacity="0.45" filter="url(#cGlow)" />
		<path d="M230,212 Q350,205 470,212" stroke="#00ffff" strokeWidth="0.6" fill="none" opacity="0.22" filter="url(#cGlow)" />
	</svg>
);

// ─── Data Lineage Trails ───────────────────────────────────────────────────────
const lineageNodes = [
	{ cx: 70, cy: 180, r: 8, color: "#FF9D00", delay: 0 },
	{ cx: 195, cy: 115, r: 6, color: "#b400e4", delay: 0.35 },
	{ cx: 230, cy: 265, r: 7, color: "#00ffff", delay: 0.6 },
	{ cx: 415, cy: 155, r: 9, color: "#FF9D00", delay: 0.9 },
	{ cx: 490, cy: 305, r: 5, color: "#b400e4", delay: 1.2 },
	{ cx: 640, cy: 175, r: 8, color: "#FF9D00", delay: 0.2 },
	{ cx: 725, cy: 75, r: 6, color: "#00ffff", delay: 0.55 },
	{ cx: 855, cy: 240, r: 7, color: "#b400e4", delay: 0.8 },
	{ cx: 975, cy: 135, r: 9, color: "#FF9D00", delay: 1.1 },
	{ cx: 1045, cy: 345, r: 5, color: "#00ffff", delay: 0.4 },
	{ cx: 1140, cy: 195, r: 6, color: "#b400e4", delay: 0.7 },
];

const lineageEdges = [
	{ x1: 70, y1: 180, x2: 195, y2: 115, color: "#FF9D00" },
	{ x1: 70, y1: 180, x2: 230, y2: 265, color: "#FF9D00" },
	{ x1: 195, y1: 115, x2: 415, y2: 155, color: "#b400e4" },
	{ x1: 230, y1: 265, x2: 415, y2: 155, color: "#00ffff" },
	{ x1: 415, y1: 155, x2: 490, y2: 305, color: "#b400e4" },
	{ x1: 415, y1: 155, x2: 640, y2: 175, color: "#FF9D00" },
	{ x1: 640, y1: 175, x2: 725, y2: 75, color: "#00ffff" },
	{ x1: 640, y1: 175, x2: 855, y2: 240, color: "#b400e4" },
	{ x1: 725, y1: 75, x2: 975, y2: 135, color: "#FF9D00" },
	{ x1: 855, y1: 240, x2: 975, y2: 135, color: "#b400e4" },
	{ x1: 975, y1: 135, x2: 1140, y2: 195, color: "#FF9D00" },
	{ x1: 1045, y1: 345, x2: 1140, y2: 195, color: "#00ffff" },
	{ x1: 490, y1: 305, x2: 1045, y2: 345, color: "#b400e4" },
];

const DataLineageTrails = () => (
	<div className="absolute inset-0 pointer-events-none overflow-hidden">
		<svg
			viewBox="0 0 1200 420"
			xmlns="http://www.w3.org/2000/svg"
			className="w-full h-full opacity-[0.19]"
			preserveAspectRatio="xMidYMid slice"
		>
			<defs>
				<filter id="nodeGlow" x="-60%" y="-60%" width="220%" height="220%">
					<feGaussianBlur stdDeviation="5" result="b" />
					<feMerge>
						<feMergeNode in="b" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
				<filter id="edgeGlow" x="-5%" y="-60%" width="110%" height="220%">
					<feGaussianBlur stdDeviation="1.5" result="b" />
					<feMerge>
						<feMergeNode in="b" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>

			{/* Edges */}
			{lineageEdges.map((e, i) => {
				const len = Math.round(Math.hypot(e.x2 - e.x1, e.y2 - e.y1));
				return (
					<line
						key={`e-${i}`}
						x1={e.x1} y1={e.y1}
						x2={e.x2} y2={e.y2}
						stroke={e.color}
						strokeWidth="1.5"
						filter="url(#edgeGlow)"
						strokeDasharray={len}
						strokeDashoffset={len}
						style={{ animation: `drawLineage 1.6s ease forwards ${0.6 + i * 0.12}s` }}
					/>
				);
			})}

			{/* Nodes */}
			{lineageNodes.map((n, i) => (
				<g key={`n-${i}`}>
					<circle cx={n.cx} cy={n.cy} r={n.r + 10} fill={n.color} opacity={0.12} filter="url(#nodeGlow)" />
					<circle
						cx={n.cx} cy={n.cy} r={n.r}
						fill={n.color}
						filter="url(#nodeGlow)"
						style={{ animation: `pulseNode 2.4s ease-in-out infinite ${n.delay}s`, transformOrigin: `${n.cx}px ${n.cy}px`, transformBox: "fill-box" }}
					/>
					<circle cx={n.cx} cy={n.cy} r={n.r * 0.35} fill="rgba(8,12,24,0.85)" />
				</g>
			))}

			{/* Traveling data pulses */}
			{lineageEdges.slice(0, 7).map((e, i) => (
				<circle key={`p-${i}`} r="3.5" fill="#ffffff" filter="url(#nodeGlow)" opacity="0.9">
					<animateMotion
						dur={`${2.2 + i * 0.45}s`}
						repeatCount="indefinite"
						begin={`${0.8 + i * 0.35}s`}
						path={`M ${e.x1} ${e.y1} L ${e.x2} ${e.y2}`}
					/>
				</circle>
			))}
		</svg>
	</div>
);

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = ({ title, description, startDate, endDate, cta }: HeroSectionProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

	const carX = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
	const carY = useTransform(scrollYProgress, [0, 0.6, 1], ["0%", "-7%", "-12%"]);
	const carOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.12]);
	const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

	const titleWords = title.split(" ");

	const startD = new Date(startDate);
	const endD = new Date(endDate);
	const dateLabel = `${startD.toLocaleString("en-US", {
		month: "short",
		day: "numeric",
	})} - ${endD.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;

	return (
		<div ref={containerRef} className="relative min-h-[100svh] overflow-hidden flex flex-col">

			{/* Parallax star layer */}
			<motion.div style={{ y: starsY }} className="absolute inset-0 pointer-events-none z-0">
				<div className="hero-star-field" />
			</motion.div>

			{/* Data lineage background */}
			<DataLineageTrails />

			{/* Flying DeLorean */}
			<motion.div
				className="absolute top-10 md:top-12 right-0 w-[280px] sm:w-[400px] md:w-[500px] lg:w-[620px] z-10 pointer-events-none"
				style={{ x: carX, y: carY, opacity: carOpacity }}
			>
				<motion.div
					initial={{ x: "110%", opacity: 0, rotate: -2 }}
					animate={{ x: "0%", opacity: 1, rotate: 0 }}
					transition={{ duration: 1.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
				>
					<NeonDeLorean />
				</motion.div>
			</motion.div>

			{/* Hero content */}
			<ViewContainer className="relative z-20 flex flex-col justify-center pt-24 md:pt-28 pb-16 flex-1">

				{/* Status badges */}
				<motion.div
					className="mb-5 flex items-center gap-2 overflow-x-auto"
					initial={{ opacity: 0, y: -18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1.0 }}
				>
					<HackathonStatus className="w-fit shrink-0" startDate={startDate} endDate={endDate} />
					<span className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-amber-500/30 backdrop-blur-sm whitespace-nowrap shrink-0">
						<Zap className="w-3.5 h-3.5" />
						Online Hackathon
					</span>
				</motion.div>

				{/* Title — staggered word entrance */}
				<div className="mb-5 max-w-[580px] lg:max-w-[660px]">
					{titleWords.map((word, wi) => (
						<span key={wi} className="inline-block overflow-hidden mr-3 mb-1">
							<motion.span
								className="inline-block font-black italic uppercase leading-none tracking-tight"
								style={{
									fontSize: "clamp(2.6rem, 7.5vw, 5.2rem)",
									background:
										wi % 2 === 0
											? "linear-gradient(135deg, #FF9D00 0%, #FFD000 55%, #FF6B00 100%)"
											: "linear-gradient(135deg, #e040fb 0%, #b400e4 55%, #8B5CF6 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
									filter: "drop-shadow(0 0 28px rgba(255,157,0,0.5))",
								}}
								initial={{ y: "108%", opacity: 0 }}
								animate={{ y: "0%", opacity: 1 }}
								transition={{ duration: 0.65, delay: 1.1 + wi * 0.11, ease: [0.16, 1, 0.3, 1] }}
							>
								{word}
							</motion.span>
						</span>
					))}
				</div>

				{/* Description */}
				<motion.p
					className="text-base md:text-lg text-slate-300 max-w-lg leading-relaxed mb-7"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 1.65 }}
				>
					{description}
				</motion.p>

				{/* Clean details: Date + Prizes */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7 max-w-2xl"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 1.9 }}
				>
					<div className="border border-amber-500/45 rounded-xl p-4 bg-black/60 backdrop-blur-sm shadow-[0_0_18px_rgba(245,158,11,0.18)]">
						<div className="text-[11px] uppercase tracking-[0.18em] text-amber-500/80 mb-2 font-bold">
							Hackathon Dates
						</div>
						<div
							className="font-mono text-sm md:text-base font-bold text-amber-300"
							style={{ textShadow: "0 0 8px rgba(252,211,77,0.7)" }}
						>
							{dateLabel}
						</div>
					</div>
					<div className="border border-emerald-500/45 rounded-xl p-4 bg-black/60 backdrop-blur-sm shadow-[0_0_18px_rgba(16,185,129,0.2)]">
						<div className="text-[11px] uppercase tracking-[0.18em] text-emerald-500/80 mb-2 font-bold">
							Prizes (All Team Members)
						</div>
						<div
							className="font-mono text-sm md:text-base font-bold text-emerald-300"
							style={{ textShadow: "0 0 8px rgba(110,231,183,0.65)" }}
						>
							MacBook Neo, iPad, Keychron
						</div>
					</div>
				</motion.div>

				{/* Flux Capacitor CTA */}
				<motion.div
					className="flex items-center gap-4 flex-wrap"
					initial={{ opacity: 0, scale: 0.88 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 2.2 }}
				>
					{cta.disabled ? (
						<div className="flux-capacitor-btn opacity-60 cursor-not-allowed pointer-events-none">
							<Zap className="w-5 h-5" />
							{cta.label}
						</div>
					) : (
						<Link
							href={cta.href}
							target={cta.openInNewTab ? "_blank" : undefined}
							rel={cta.openInNewTab ? "noopener noreferrer" : undefined}
							className="flux-capacitor-btn"
						>
							<Zap className="w-5 h-5" />
							{cta.label}
						</Link>
					)}
					<div className="flex items-center gap-2 text-slate-400 text-sm">
						<CalendarDays className="w-4 h-4 text-amber-500/60" />
						<span>Apr 17–26, 2026 · Online</span>
					</div>
				</motion.div>
			</ViewContainer>
		</div>
	);
};

export default HeroSection;
