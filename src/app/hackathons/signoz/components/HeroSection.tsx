"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { ArrowUpRight, Radar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { images } from "../images";

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

// ─── Telemetry graph (traces fanning out) backdrop ────────────────────────────
const sigNodes = [
	{ cx: 80, cy: 190, r: 8, color: "#e5502a", delay: 0 },
	{ cx: 210, cy: 110, r: 6, color: "#ffcd56", delay: 0.35 },
	{ cx: 250, cy: 280, r: 7, color: "#2be38b", delay: 0.6 },
	{ cx: 430, cy: 160, r: 9, color: "#e5502a", delay: 0.9 },
	{ cx: 520, cy: 320, r: 5, color: "#ea6e4a", delay: 1.2 },
	{ cx: 660, cy: 180, r: 8, color: "#ffcd56", delay: 0.2 },
	{ cx: 760, cy: 80, r: 6, color: "#2be38b", delay: 0.55 },
	{ cx: 900, cy: 250, r: 7, color: "#e5502a", delay: 0.8 },
	{ cx: 1010, cy: 140, r: 9, color: "#ffcd56", delay: 1.1 },
	{ cx: 1090, cy: 350, r: 5, color: "#2be38b", delay: 0.4 },
	{ cx: 1180, cy: 200, r: 6, color: "#ea6e4a", delay: 0.7 },
];
const sigEdges = [
	{ x1: 80, y1: 190, x2: 210, y2: 110, color: "#e5502a" },
	{ x1: 80, y1: 190, x2: 250, y2: 280, color: "#e5502a" },
	{ x1: 210, y1: 110, x2: 430, y2: 160, color: "#ffcd56" },
	{ x1: 250, y1: 280, x2: 430, y2: 160, color: "#2be38b" },
	{ x1: 430, y1: 160, x2: 520, y2: 320, color: "#ea6e4a" },
	{ x1: 430, y1: 160, x2: 660, y2: 180, color: "#e5502a" },
	{ x1: 660, y1: 180, x2: 760, y2: 80, color: "#2be38b" },
	{ x1: 660, y1: 180, x2: 900, y2: 250, color: "#ffcd56" },
	{ x1: 760, y1: 80, x2: 1010, y2: 140, color: "#e5502a" },
	{ x1: 900, y1: 250, x2: 1010, y2: 140, color: "#ffcd56" },
	{ x1: 1010, y1: 140, x2: 1180, y2: 200, color: "#2be38b" },
	{ x1: 1090, y1: 350, x2: 1180, y2: 200, color: "#ea6e4a" },
];

const TelemetryGraph = () => (
	<div className="absolute inset-0 pointer-events-none overflow-hidden">
		<svg
			viewBox="0 0 1200 420"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			className="w-full h-full opacity-[0.22]"
			preserveAspectRatio="xMidYMid slice"
		>
			{sigEdges.map((e, i) => {
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
			{sigNodes.map(n => (
				<circle
					key={`n-${n.cx}-${n.cy}`}
					cx={n.cx}
					cy={n.cy}
					r={n.r}
					fill={n.color}
					style={{
						animation: `sig-pulse 2.6s ease-in-out infinite ${n.delay}s`,
						transformOrigin: `${n.cx}px ${n.cy}px`,
						transformBox: "fill-box",
					}}
				/>
			))}
		</svg>
	</div>
);

const QueryTerminal = () => (
	<motion.div
		className="rounded-2xl overflow-hidden border border-[#3c4152] bg-[#121317] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
		initial={{ opacity: 0, y: 30 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
	>
		<div className="flex items-center gap-2 px-4 py-3 border-b border-[#3c4152] bg-[#16181d]">
			<span className="w-3 h-3 rounded-full bg-[#e5484d]" />
			<span className="w-3 h-3 rounded-full bg-[#ffcd56]" />
			<span className="w-3 h-3 rounded-full bg-[#2be38b]" />
			<span className="ml-3 font-mono text-xs text-[#62687c]">
				mission-brief.sql · SigNoz Query Builder
			</span>
		</div>
		<pre className="p-5 overflow-x-auto text-[13px] leading-[1.85] font-mono">
			<code>
				<span className="text-[#62687c]">
					-- P99 latency by operation for an AI agent
				</span>
				{"\n"}
				<span className="text-[#ea6e4a]">SELECT</span>
				{"\n  serviceName,\n  name "}
				<span className="text-[#ea6e4a]">AS</span>
				{" operation,\n  "}
				<span className="text-[#2be38b]">quantile</span>
				{"(0.99)(durationNano) / "}
				<span className="text-[#ffcd56]">1e6</span>{" "}
				<span className="text-[#ea6e4a]">AS</span>
				{" p99_ms,\n  "}
				<span className="text-[#2be38b]">count</span>
				{"() "}
				<span className="text-[#ea6e4a]">AS</span>
				{" total_spans\n"}
				<span className="text-[#ea6e4a]">FROM</span>
				{" signoz_traces.distributed_signoz_index_v3\n"}
				<span className="text-[#ea6e4a]">WHERE</span>
				{" serviceName = "}
				<span className="text-[#ffcd56]">'agent-orchestrator'</span>
				{"\n  "}
				<span className="text-[#ea6e4a]">AND</span>
				{" timestamp > "}
				<span className="text-[#2be38b]">now</span>
				{"() - "}
				<span className="text-[#ea6e4a]">INTERVAL</span>{" "}
				<span className="text-[#ffcd56]">1</span>
				{" HOUR\n"}
				<span className="text-[#ea6e4a]">GROUP BY</span>
				{" serviceName, name\n"}
				<span className="text-[#ea6e4a]">ORDER BY</span>
				{" p99_ms "}
				<span className="text-[#ea6e4a]">DESC LIMIT</span>{" "}
				<span className="text-[#ffcd56]">10</span>
				{";"}
			</code>
		</pre>
		<div className="px-5 py-3 border-t border-[#3c4152] font-mono text-xs text-[#62687c]">
			→ SigNoz Query Builder.{" "}
			<span className="text-[#2be38b]">
				Real query. 0 vendor lock-in.
			</span>{" "}
			▊
		</div>
	</motion.div>
);

const HeroSection = ({
	title,
	description,
	cta,
	submissionFormUrl,
}: HeroSectionProps) => {
	return (
		<div className="relative overflow-hidden">
			<TelemetryGraph />

			<ViewContainer className="relative z-20 pt-16 md:pt-20 pb-12">
				<div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
					{/* ── Left column ── */}
					<div>
						<motion.span
							className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#2be38b] border border-[#3c4152] bg-[#16181d] px-4 py-1.5 rounded-full mb-6"
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<span className="w-2 h-2 rounded-full bg-[#2be38b] shadow-[0_0_10px_#2be38b]" />
							Online + In-person · San Francisco
						</motion.span>

						{/* Title image */}
						<motion.div
							className="mb-6 w-full max-w-[560px]"
							initial={{ opacity: 0, scale: 0.9, y: 24 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							transition={{
								duration: 0.9,
								delay: 0.15,
								ease: [0.16, 1, 0.3, 1],
							}}
						>
							<Image
								src={images.title}
								alt="Agents of SigNoz"
								className="w-full h-auto drop-shadow-[0_10px_30px_rgba(229,80,42,0.3)]"
								priority
							/>
						</motion.div>

						<motion.p
							className="text-xl font-semibold text-[#e5502a] mb-4"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.45 }}
						>
							Observe your AI solutions using SigNoz
						</motion.p>

						<motion.p
							className="text-base md:text-lg text-[#c0c1c3] max-w-xl leading-relaxed mb-7"
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.65, delay: 0.55 }}
						>
							{description}
						</motion.p>

						{/* Prize + dates */}
						<motion.div
							className="mb-7"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.65, delay: 0.7 }}
						>
							<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
								<span className="text-5xl md:text-7xl font-black text-[#e5502a] glow-orange">
									$10,000
								</span>
								<span className="text-lg md:text-xl text-[#c0c1c3] font-semibold">
									in prizes + job interviews at SigNoz
								</span>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
								<div className="dossier-card rounded-xl p-4">
									<div className="text-[11px] uppercase tracking-[0.18em] text-[#e5502a] mb-1 font-bold">
										Dates
									</div>
									<div className="font-mono text-sm font-bold text-[#f5f5f5]">
										Jul 20 – Jul 26, 2026
									</div>
								</div>
								<div className="dossier-card rounded-xl p-4">
									<div className="text-[11px] uppercase tracking-[0.18em] text-[#2be38b] mb-1 font-bold">
										The Mission
									</div>
									<div className="font-mono text-sm font-bold text-[#f5f5f5]">
										See inside everything you ship
									</div>
								</div>
							</div>
						</motion.div>

						{/* CTA */}
						<motion.div
							className="flex items-center gap-4 flex-wrap"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.9 }}
						>
							{cta.disabled ? (
								<div className="agent-btn opacity-60 cursor-not-allowed pointer-events-none">
									<Radar className="w-5 h-5" />
									{cta.label}
								</div>
							) : (
								<Link
									href={cta.href}
									target={
										cta.openInNewTab ? "_blank" : undefined
									}
									rel={
										cta.openInNewTab
											? "noopener noreferrer"
											: undefined
									}
									className="agent-btn"
								>
									<Radar className="w-5 h-5" />
									{cta.label}
								</Link>
							)}
							{submissionFormUrl && (
								<Link
									href={submissionFormUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#3c4152] text-[#f5f5f5] font-bold hover:border-[#e5502a] hover:text-[#ea6e4a] transition-all duration-300 text-base"
								>
									Submit Project
									<ArrowUpRight className="w-5 h-5" />
								</Link>
							)}
						</motion.div>
					</div>

					{/* ── Right column: query terminal ── */}
					<QueryTerminal />
				</div>
			</ViewContainer>
		</div>
	);
};

export default HeroSection;
