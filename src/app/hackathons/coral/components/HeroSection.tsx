"use client";

import { useHackathonStatus } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CalendarIcon, Github, Star } from "lucide-react";
import Link from "next/link";

type HeroProps = {
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	prize: string;
	showDate?: boolean;
	cta: {
		label: string;
		href: string;
		openInNewTab?: boolean;
		disabled?: boolean;
	};
};

/* ── Floating Pirate Ship SVG ──────────────────────────────────── */
const PirateShip = () => (
	<svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
		{/* Hull */}
		<path d="M30 110 Q40 130 100 130 Q160 130 170 110 L165 105 Q150 118 100 118 Q50 118 35 105 Z" fill="#5c3a1e" />
		<path d="M35 108 Q45 120 100 120 Q155 120 165 108" stroke="#d4af37" strokeWidth="1.5" fill="none" opacity="0.6" />
		{/* Hull planks */}
		<line x1="50" y1="115" x2="150" y2="115" stroke="#4a2e14" strokeWidth="0.5" opacity="0.4" />
		<line x1="55" y1="122" x2="145" y2="122" stroke="#4a2e14" strokeWidth="0.5" opacity="0.3" />
		{/* Main mast */}
		<line x1="100" y1="25" x2="100" y2="110" stroke="#3d2510" strokeWidth="3" />
		{/* Crow's nest */}
		<rect x="92" y="22" width="16" height="5" rx="1.5" fill="#5c3a1e" stroke="#d4af37" strokeWidth="0.5" />
		{/* Main sail */}
		<path d="M102 30 Q130 50 125 80 L102 80 Z" fill="#fdf6e3" opacity="0.85" />
		<path d="M98 30 Q70 50 75 80 L98 80 Z" fill="#fdf6e3" opacity="0.7" />
		{/* Sail cross pattern */}
		<line x1="102" y1="45" x2="122" y2="45" stroke="#d4af37" strokeWidth="0.5" opacity="0.3" />
		<line x1="102" y1="60" x2="124" y2="60" stroke="#d4af37" strokeWidth="0.5" opacity="0.3" />
		{/* Skull on sail */}
		<circle cx="112" cy="55" r="6" fill="none" stroke="#002b36" strokeWidth="1" opacity="0.2" />
		{/* Jolly Roger flag */}
		<line x1="100" y1="25" x2="100" y2="12" stroke="#3d2510" strokeWidth="2" />
		<path d="M100 12 L100 5 L120 8.5 L100 12" fill="#1a1a1a" />
		<circle cx="109" cy="8.5" r="1.5" fill="#fdf6e3" opacity="0.8" />
		{/* Fore mast */}
		<line x1="60" y1="50" x2="60" y2="110" stroke="#3d2510" strokeWidth="2" />
		<path d="M62 55 Q78 65 75 85 L62 85 Z" fill="#fdf6e3" opacity="0.7" />
		{/* Bowsprit */}
		<line x1="30" y1="105" x2="10" y2="90" stroke="#3d2510" strokeWidth="2" />
		{/* Stern lantern */}
		<circle cx="170" cy="100" r="3" fill="#d4af37" opacity="0.6" />
		<circle cx="170" cy="100" r="6" fill="#d4af37" opacity="0.1" />
		{/* Water line */}
		<path d="M15 135 Q40 128 65 135 Q90 142 115 135 Q140 128 165 135 Q190 142 200 138" stroke="#2aa198" strokeWidth="1" fill="none" opacity="0.3" />
		<path d="M0 140 Q25 133 50 140 Q75 147 100 140 Q125 133 150 140 Q175 147 200 143" stroke="#2aa198" strokeWidth="0.8" fill="none" opacity="0.2" />
	</svg>
);

/* ── SQL Console with typewriter effect ────────────────────────── */
const SQLConsole = () => (
	<div className="sql-console p-4 md:p-5 text-xs md:text-sm leading-relaxed max-w-lg mx-auto lg:mx-0">
		<div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#d4af37]/10">
			<div className="w-2.5 h-2.5 rounded-full bg-[#cb4b16]" />
			<div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
			<div className="w-2.5 h-2.5 rounded-full bg-[#2aa198]" />
			<span className="text-[#586e75] text-[10px] ml-2 font-mono">coral-query.sql</span>
		</div>
		<div className="space-y-1">
			<p><span className="sql-comment">-- Find root cause across 3 tools in one query</span></p>
			<p><span className="sql-keyword">SELECT</span> g.title, s.error_message, sl.text</p>
			<p><span className="sql-keyword">FROM</span> <span className="sql-table">github.pull_requests</span> g</p>
			<p><span className="sql-keyword">JOIN</span> <span className="sql-table">sentry.issues</span> s</p>
			<p>  <span className="sql-keyword">ON</span> s.first_seen {'>'}= g.merged_at</p>
			<p><span className="sql-keyword">JOIN</span> <span className="sql-table">slack.messages</span> sl</p>
			<p>  <span className="sql-keyword">ON</span> sl.channel = <span className="sql-string">&apos;#incidents&apos;</span></p>
			<p><span className="sql-keyword">WHERE</span> s.level = <span className="sql-string">&apos;fatal&apos;</span></p>
			<p><span className="sql-keyword">ORDER BY</span> s.first_seen <span className="sql-keyword">DESC</span>;</p>
		</div>
		<div className="mt-3 pt-2 border-t border-[#d4af37]/10 flex items-center gap-1">
			<span className="text-[#2aa198]">→</span>
			<span className="text-[#586e75] text-[10px]">3 sources joined. 0 glue code. 100% local.</span>
			<span className="cursor-blink text-[#d4af37]">▊</span>
		</div>
	</div>
);

const HeroSection = ({ title, description, startDate, endDate, prize, showDate = true, cta }: HeroProps) => {
	const { status, timeDifference } = useHackathonStatus(startDate, endDate);

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
	};

	const getTimeDisplay = (days: number, hours: number, minutes: number) => {
		if (days > 0) return `${days} days`;
		if (hours > 0) return `${hours} hours`;
		return `${minutes} minutes`;
	};

	return (
		<section className="relative min-h-[90vh] flex items-center overflow-hidden sea-mist">
			{/* Animated ship */}
			<div className="absolute top-4 md:top-8 right-[2%] md:right-[5%] w-32 md:w-48 lg:w-56 ship-bob opacity-60 md:opacity-70 z-0">
				<PirateShip />
			</div>

			<div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left: Title + CTA */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						{/* Status badge */}
						{showDate && (
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.3, duration: 0.5 }}
								className={cn(
									"inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide border mb-6",
									status === "upcoming" && "bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/30",
									status === "ongoing" && "bg-[#2aa198]/10 text-[#2aa198] border-[#2aa198]/30",
									status === "ended" && "bg-[#586e75]/20 text-[#93a1a1] border-[#586e75]/30",
								)}
							>
								<div className={cn(
									"w-2 h-2 rounded-full",
									status === "upcoming" && "bg-[#d4af37] animate-pulse",
									status === "ongoing" && "bg-[#2aa198]",
									status === "ended" && "bg-[#586e75]",
								)} />
								{status === "upcoming" && "UPCOMING"}
								{status === "ongoing" && "SAILING NOW"}
								{status === "ended" && "VOYAGE COMPLETE"}
							</motion.div>
						)}

						{/* Title */}
						<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
							<span className="gold-shimmer-text block">
								Pirates of the
							</span>
							<span className="gold-shimmer-text block">
								Coral-bean
							</span>
							<span className="block text-[#93a1a1] text-xl md:text-2xl lg:text-3xl font-medium mt-3 tracking-normal">
								Dead Men Tell No SQL
							</span>
						</h1>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 0.6 }}
							className="text-[#93a1a1] text-base md:text-lg mt-6 max-w-xl leading-relaxed"
						>
							{description}
						</motion.p>

						{/* Prize callout */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7, duration: 0.5 }}
							className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/5 pulse-gold"
						>
							<span className="text-2xl">💰</span>
							<div>
								<p className="text-[#d4af37] font-bold text-lg">{prize} IN PRIZES</p>
								<p className="text-[#586e75] text-xs">+ bounties, swag, and special rewards</p>
							</div>
						</motion.div>

						{/* CTAs */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.9, duration: 0.5 }}
							className="flex flex-wrap gap-3 mt-8"
						>
							{cta.disabled ? (
								<div className="px-7 py-3.5 rounded-xl bg-[#586e75]/20 text-[#586e75] font-semibold cursor-not-allowed">
									{cta.label}
								</div>
							) : (
								<Link
									href={cta.href}
									target={cta.openInNewTab ? "_blank" : "_self"}
									rel={cta.openInNewTab ? "noopener noreferrer" : undefined}
									className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8960c] text-[#002b36] font-bold text-base shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 hover:scale-[1.02] transition-all duration-300"
								>
									🏴‍☠️ {cta.label}
								</Link>
							)}
							<Link
								href="https://github.com/withcoral/coral"
								target="_blank"
								rel="noopener noreferrer"
								className="px-7 py-3.5 rounded-xl border border-[#586e75]/40 text-[#93a1a1] font-semibold hover:border-[#d4af37]/40 hover:text-[#d4af37] transition-all duration-300 flex items-center gap-2"
							>
								<Star size={16} /> Star Coral
							</Link>
						</motion.div>

						{/* Date + countdown */}
						{showDate && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1.1, duration: 0.5 }}
								className="flex items-center gap-3 mt-6 text-[#586e75] text-sm"
							>
								<CalendarIcon size={16} className="text-[#d4af37]" />
								<span className="text-[#93a1a1]">{formatDate(startDate)} – {formatDate(endDate)}</span>
								<span className="text-[#586e75]">·</span>
								{status === "upcoming" && (
									<span className="text-[#d4af37]">
										Sets sail in {getTimeDisplay(timeDifference.daysStartToNow, timeDifference.hoursStartToNow, timeDifference.minutesStartToNow)}
									</span>
								)}
								{status === "ongoing" && (
									<span className="text-[#2aa198]">
										Ends in {getTimeDisplay(timeDifference.daysEndToNow, timeDifference.hoursEndToNow, timeDifference.minutesEndToNow)}
									</span>
								)}
								{status === "ended" && <span>Voyage complete</span>}
							</motion.div>
						)}
					</motion.div>

					{/* Right: SQL Console */}
					<motion.div
						initial={{ opacity: 0, x: 60 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
						className="hidden lg:block"
					>
						<SQLConsole />
					</motion.div>
				</div>

				{/* Mobile SQL Console */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.6 }}
					className="lg:hidden mt-10"
				>
					<SQLConsole />
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
