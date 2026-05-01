"use client";

import { useHackathonStatus } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CalendarIcon, Star } from "lucide-react";
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

/* ── The Black Pearl — Jack Sparrow's Ship ─────────────────────── */
const BlackPearl = () => (
	<svg viewBox="0 0 440 380" fill="none" className="w-full h-full">
		{/* ═══ HULL ═══ */}
		<path d="M60 260 Q80 310 220 310 Q360 310 380 260 L370 248 Q340 275 220 275 Q100 275 70 248 Z" fill="#2a1508" />
		<path d="M65 255 Q85 290 220 290 Q355 290 375 255" stroke="#d4af37" strokeWidth="1.2" fill="none" opacity="0.35" />
		{/* Hull planks */}
		<line x1="100" y1="270" x2="340" y2="270" stroke="#1e0f04" strokeWidth="0.6" opacity="0.5" />
		<line x1="110" y1="280" x2="330" y2="280" stroke="#1e0f04" strokeWidth="0.6" opacity="0.4" />
		<line x1="115" y1="290" x2="325" y2="290" stroke="#1e0f04" strokeWidth="0.6" opacity="0.3" />
		{/* Hull gold trim */}
		<path d="M75 252 Q90 268 220 268 Q350 268 365 252" stroke="#d4af37" strokeWidth="0.8" fill="none" opacity="0.2" />
		{/* Stern decoration */}
		<path d="M370 250 Q385 240 390 220 Q388 235 375 248" fill="#3d1e0a" />
		<path d="M375 245 Q382 238 385 228" stroke="#d4af37" strokeWidth="0.6" fill="none" opacity="0.3" />

		{/* ═══ BOWSPRIT ═══ */}
		<line x1="60" y1="248" x2="15" y2="210" stroke="#3d2510" strokeWidth="3.5" />
		<line x1="15" y1="210" x2="5" y2="200" stroke="#3d2510" strokeWidth="2" />
		{/* Bowsprit rigging */}
		<line x1="15" y1="210" x2="100" y2="140" stroke="#5c3a1e" strokeWidth="0.5" opacity="0.3" />

		{/* ═══ MAIN MAST (center, tallest) ═══ */}
		<line x1="220" y1="40" x2="220" y2="260" stroke="#3d2510" strokeWidth="4.5" />
		{/* Crow's nest */}
		<rect x="208" y="35" width="24" height="8" rx="2" fill="#3d2510" stroke="#d4af37" strokeWidth="0.5" />
		{/* Main sail (large) */}
		<path d="M223 50 Q280 80 272 145 L223 145 Z" fill="#fdf6e3" opacity="0.8" />
		<path d="M217 50 Q160 80 168 145 L217 145 Z" fill="#fdf6e3" opacity="0.65" />
		{/* Lower main sail */}
		<path d="M223 155 Q275 175 270 220 L223 220 Z" fill="#fdf6e3" opacity="0.7" />
		<path d="M217 155 Q165 175 170 220 L217 220 Z" fill="#fdf6e3" opacity="0.55" />
		{/* Sail battens */}
		<line x1="223" y1="80" x2="268" y2="80" stroke="#c4a35a" strokeWidth="0.4" opacity="0.3" />
		<line x1="223" y1="110" x2="272" y2="110" stroke="#c4a35a" strokeWidth="0.4" opacity="0.3" />
		<line x1="168" y1="110" x2="217" y2="110" stroke="#c4a35a" strokeWidth="0.4" opacity="0.25" />
		<line x1="223" y1="185" x2="270" y2="185" stroke="#c4a35a" strokeWidth="0.4" opacity="0.25" />
		{/* Skull watermark on main sail */}
		<ellipse cx="245" cy="95" rx="12" ry="14" fill="none" stroke="#002b36" strokeWidth="0.8" opacity="0.08" />

		{/* ═══ FORE MAST ═══ */}
		<line x1="130" y1="90" x2="130" y2="260" stroke="#3d2510" strokeWidth="3.5" />
		{/* Fore sail */}
		<path d="M133 100 Q175 120 170 175 L133 175 Z" fill="#fdf6e3" opacity="0.7" />
		<path d="M127 100 Q85 120 90 175 L127 175 Z" fill="#fdf6e3" opacity="0.55" />
		{/* Lower fore sail */}
		<path d="M133 185 Q170 200 167 235 L133 235 Z" fill="#fdf6e3" opacity="0.6" />
		<path d="M127 185 Q90 200 93 235 L127 235 Z" fill="#fdf6e3" opacity="0.45" />

		{/* ═══ MIZZEN MAST (rear) ═══ */}
		<line x1="320" y1="100" x2="320" y2="260" stroke="#3d2510" strokeWidth="3" />
		{/* Mizzen sail */}
		<path d="M323 110 Q358 125 355 175 L323 175 Z" fill="#fdf6e3" opacity="0.65" />
		<path d="M317 110 Q282 125 285 175 L317 175 Z" fill="#fdf6e3" opacity="0.5" />
		{/* Lower mizzen */}
		<path d="M323 185 Q352 198 350 228 L323 228 Z" fill="#fdf6e3" opacity="0.55" />
		<path d="M317 185 Q288 198 290 228 L317 228 Z" fill="#fdf6e3" opacity="0.4" />

		{/* ═══ JOLLY ROGER FLAG ═══ */}
		<line x1="220" y1="35" x2="220" y2="8" stroke="#3d2510" strokeWidth="2" />
		<path d="M220 8 L220 0 L250 4 L220 8" fill="#0a0a0a" />
		{/* Skull on flag */}
		<ellipse cx="234" cy="4" rx="3.5" ry="3" fill="#fdf6e3" opacity="0.7" />
		<circle cx="232.5" cy="3.5" r="0.8" fill="#0a0a0a" />
		<circle cx="235.5" cy="3.5" r="0.8" fill="#0a0a0a" />

		{/* ═══ RIGGING ═══ */}
		{/* Shrouds - main mast */}
		<line x1="220" y1="50" x2="170" y2="255" stroke="#5c3a1e" strokeWidth="0.4" opacity="0.25" />
		<line x1="220" y1="50" x2="270" y2="255" stroke="#5c3a1e" strokeWidth="0.4" opacity="0.25" />
		{/* Stays */}
		<line x1="220" y1="45" x2="130" y2="95" stroke="#5c3a1e" strokeWidth="0.4" opacity="0.2" />
		<line x1="220" y1="45" x2="320" y2="105" stroke="#5c3a1e" strokeWidth="0.4" opacity="0.2" />
		<line x1="130" y1="95" x2="30" y2="220" stroke="#5c3a1e" strokeWidth="0.3" opacity="0.15" />

		{/* ═══ STERN LANTERNS ═══ */}
		<circle cx="380" cy="238" r="4" fill="#d4af37" opacity="0.5" />
		<circle cx="380" cy="238" r="8" fill="#d4af37" opacity="0.08" />
		<circle cx="370" cy="232" r="3" fill="#d4af37" opacity="0.35" />
		<circle cx="370" cy="232" r="6" fill="#d4af37" opacity="0.06" />

		{/* ═══ OCEAN WAVES ═══ */}
		<path d="M0 320 Q30 308 60 320 Q90 332 120 320 Q150 308 180 320 Q210 332 240 320 Q270 308 300 320 Q330 332 360 320 Q390 308 420 320 Q440 328 440 330" stroke="#2aa198" strokeWidth="1.5" fill="none" opacity="0.25" />
		<path d="M0 330 Q35 318 70 330 Q105 342 140 330 Q175 318 210 330 Q245 342 280 330 Q315 318 350 330 Q385 342 420 330 L440 335" stroke="#2aa198" strokeWidth="1" fill="none" opacity="0.15" />
		<path d="M0 340 Q40 330 80 340 Q120 350 160 340 Q200 330 240 340 Q280 350 320 340 Q360 330 400 340 L440 345" stroke="#2aa198" strokeWidth="0.8" fill="none" opacity="0.1" />
		{/* Wave foam */}
		<path d="M50 315 Q55 312 60 315" stroke="#fdf6e3" strokeWidth="0.5" fill="none" opacity="0.1" />
		<path d="M180 315 Q185 312 190 315" stroke="#fdf6e3" strokeWidth="0.5" fill="none" opacity="0.08" />
		<path d="M310 315 Q315 312 320 315" stroke="#fdf6e3" strokeWidth="0.5" fill="none" opacity="0.1" />
	</svg>
);

/* ── SQL Console ───────────────────────────────────────────────── */
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

const HeroSection = ({ description, startDate, endDate, prize, showDate = true, cta }: HeroProps) => {
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
		<section className="relative min-h-[85vh] flex items-center overflow-hidden sea-mist">
			{/* ═══ THE BLACK PEARL — sails in from the left ═══ */}
			<motion.div
				initial={{ x: "-60%", opacity: 0 }}
				animate={{ x: "0%", opacity: 1 }}
				transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
				className="absolute -left-[5%] md:left-0 bottom-[2%] md:bottom-[5%] w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[48vw] max-w-[700px] z-0 ship-sailing pointer-events-none select-none"
			>
				<BlackPearl />
			</motion.div>

			{/* Content — pushed to the right so it sits beside the ship */}
			<div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
					{/* Spacer for ship on large screens */}
					<div className="hidden lg:block lg:col-span-5" />

					{/* Right side: Title + CTA + SQL Console */}
					<div className="lg:col-span-7">
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.8 }}
						>
							{/* Status badge */}
							{showDate && (
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 1.1, duration: 0.5 }}
									className={cn(
										"inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide border mb-5",
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
							<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
								<span className="gold-shimmer-text block">Pirates of the</span>
								<span className="gold-shimmer-text block">Coral-bean</span>
								<span className="block text-[#93a1a1] text-lg md:text-2xl lg:text-3xl font-medium mt-2 tracking-normal">
									Dead Men Tell No SQL
								</span>
							</h1>

							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1.3, duration: 0.6 }}
								className="text-[#93a1a1] text-base md:text-lg mt-5 max-w-xl leading-relaxed"
							>
								{description}
							</motion.p>

							{/* Prize callout */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.5, duration: 0.5 }}
								className="mt-5 inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/5 pulse-gold"
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
								transition={{ delay: 1.7, duration: 0.5 }}
								className="flex flex-wrap gap-3 mt-6"
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
									transition={{ delay: 1.9, duration: 0.5 }}
									className="flex flex-wrap items-center gap-3 mt-5 text-[#586e75] text-sm"
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

							{/* SQL Console */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 2, duration: 0.6 }}
								className="mt-8"
							>
								<SQLConsole />
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
