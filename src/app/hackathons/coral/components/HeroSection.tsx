"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CalendarIcon, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeroProps = {
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	prize: string;
	showDate?: boolean;
};

/* ═══════════════════════════════════════════════════════════════════
   The Black Pearl — Jack Sparrow's Ship (massive, detailed SVG)
   ═══════════════════════════════════════════════════════════════════ */
const BlackPearl = () => (
	<svg viewBox="0 0 480 400" fill="none" className="w-full h-full">
		{/* ── HULL ── */}
		<path
			d="M65 275 Q85 325 240 325 Q395 325 415 275 L405 262 Q370 290 240 290 Q110 290 75 262 Z"
			fill="#2a1508"
		/>
		<path
			d="M70 270 Q90 305 240 305 Q390 305 410 270"
			stroke="#d4af37"
			strokeWidth="1.2"
			fill="none"
			opacity="0.3"
		/>
		<line
			x1="110"
			y1="285"
			x2="370"
			y2="285"
			stroke="#1e0f04"
			strokeWidth="0.6"
			opacity="0.5"
		/>
		<line
			x1="115"
			y1="295"
			x2="365"
			y2="295"
			stroke="#1e0f04"
			strokeWidth="0.6"
			opacity="0.4"
		/>
		<line
			x1="120"
			y1="305"
			x2="360"
			y2="305"
			stroke="#1e0f04"
			strokeWidth="0.6"
			opacity="0.3"
		/>
		<path
			d="M80 268 Q100 282 240 282 Q380 282 400 268"
			stroke="#d4af37"
			strokeWidth="0.7"
			fill="none"
			opacity="0.15"
		/>
		{/* Stern */}
		<path d="M405 265 Q420 255 425 235 Q422 250 410 262" fill="#3d1e0a" />
		<path
			d="M410 260 Q418 252 420 240"
			stroke="#d4af37"
			strokeWidth="0.5"
			fill="none"
			opacity="0.25"
		/>

		{/* ── BOWSPRIT ── */}
		<line
			x1="65"
			y1="262"
			x2="18"
			y2="222"
			stroke="#3d2510"
			strokeWidth="3.5"
		/>
		<line
			x1="18"
			y1="222"
			x2="5"
			y2="210"
			stroke="#3d2510"
			strokeWidth="2"
		/>
		<line
			x1="18"
			y1="222"
			x2="110"
			y2="150"
			stroke="#5c3a1e"
			strokeWidth="0.4"
			opacity="0.25"
		/>

		{/* ── MAIN MAST (center, tallest) ── */}
		<line
			x1="240"
			y1="42"
			x2="240"
			y2="275"
			stroke="#3d2510"
			strokeWidth="4.5"
		/>
		<rect
			x="228"
			y="36"
			width="24"
			height="8"
			rx="2"
			fill="#3d2510"
			stroke="#d4af37"
			strokeWidth="0.5"
		/>
		{/* Main sail upper */}
		<path
			d="M243 52 Q300 82 293 155 L243 155 Z"
			fill="#fdf6e3"
			opacity="0.8"
		/>
		<path
			d="M237 52 Q180 82 187 155 L237 155 Z"
			fill="#fdf6e3"
			opacity="0.65"
		/>
		{/* Main sail lower */}
		<path
			d="M243 165 Q296 185 290 235 L243 235 Z"
			fill="#fdf6e3"
			opacity="0.7"
		/>
		<path
			d="M237 165 Q184 185 190 235 L237 235 Z"
			fill="#fdf6e3"
			opacity="0.55"
		/>
		{/* Battens */}
		<line
			x1="243"
			y1="90"
			x2="290"
			y2="90"
			stroke="#c4a35a"
			strokeWidth="0.4"
			opacity="0.25"
		/>
		<line
			x1="243"
			y1="120"
			x2="293"
			y2="120"
			stroke="#c4a35a"
			strokeWidth="0.4"
			opacity="0.25"
		/>
		<line
			x1="187"
			y1="120"
			x2="237"
			y2="120"
			stroke="#c4a35a"
			strokeWidth="0.4"
			opacity="0.2"
		/>
		<line
			x1="243"
			y1="200"
			x2="290"
			y2="200"
			stroke="#c4a35a"
			strokeWidth="0.4"
			opacity="0.2"
		/>

		{/* ── FORE MAST ── */}
		<line
			x1="140"
			y1="95"
			x2="140"
			y2="275"
			stroke="#3d2510"
			strokeWidth="3.5"
		/>
		<path
			d="M143 105 Q188 125 183 185 L143 185 Z"
			fill="#fdf6e3"
			opacity="0.7"
		/>
		<path
			d="M137 105 Q92 125 97 185 L137 185 Z"
			fill="#fdf6e3"
			opacity="0.55"
		/>
		<path
			d="M143 195 Q182 210 179 248 L143 248 Z"
			fill="#fdf6e3"
			opacity="0.6"
		/>
		<path
			d="M137 195 Q98 210 101 248 L137 248 Z"
			fill="#fdf6e3"
			opacity="0.45"
		/>

		{/* ── MIZZEN MAST (rear) ── */}
		<line
			x1="350"
			y1="108"
			x2="350"
			y2="275"
			stroke="#3d2510"
			strokeWidth="3"
		/>
		<path
			d="M353 118 Q390 133 387 188 L353 188 Z"
			fill="#fdf6e3"
			opacity="0.65"
		/>
		<path
			d="M347 118 Q310 133 313 188 L347 188 Z"
			fill="#fdf6e3"
			opacity="0.5"
		/>
		<path
			d="M353 198 Q384 210 382 242 L353 242 Z"
			fill="#fdf6e3"
			opacity="0.55"
		/>
		<path
			d="M347 198 Q316 210 318 242 L347 242 Z"
			fill="#fdf6e3"
			opacity="0.4"
		/>

		{/* ── JOLLY ROGER ── */}
		<line
			x1="240"
			y1="36"
			x2="240"
			y2="8"
			stroke="#3d2510"
			strokeWidth="2"
		/>
		<path d="M240 8 L240 0 L272 4 L240 8" fill="#0a0a0a" />
		<ellipse cx="255" cy="4" rx="4" ry="3" fill="#fdf6e3" opacity="0.7" />
		<circle cx="253" cy="3.5" r="0.8" fill="#0a0a0a" />
		<circle cx="257" cy="3.5" r="0.8" fill="#0a0a0a" />

		{/* ── RIGGING ── */}
		<line
			x1="240"
			y1="50"
			x2="185"
			y2="270"
			stroke="#5c3a1e"
			strokeWidth="0.4"
			opacity="0.2"
		/>
		<line
			x1="240"
			y1="50"
			x2="295"
			y2="270"
			stroke="#5c3a1e"
			strokeWidth="0.4"
			opacity="0.2"
		/>
		<line
			x1="240"
			y1="48"
			x2="140"
			y2="100"
			stroke="#5c3a1e"
			strokeWidth="0.4"
			opacity="0.18"
		/>
		<line
			x1="240"
			y1="48"
			x2="350"
			y2="112"
			stroke="#5c3a1e"
			strokeWidth="0.4"
			opacity="0.18"
		/>
		<line
			x1="140"
			y1="100"
			x2="35"
			y2="235"
			stroke="#5c3a1e"
			strokeWidth="0.3"
			opacity="0.12"
		/>

		{/* ── STERN LANTERNS ── */}
		<circle cx="415" cy="252" r="4" fill="#d4af37" opacity="0.5" />
		<circle cx="415" cy="252" r="9" fill="#d4af37" opacity="0.06" />
		<circle cx="405" cy="245" r="3" fill="#d4af37" opacity="0.35" />
		<circle cx="405" cy="245" r="7" fill="#d4af37" opacity="0.04" />

		{/* ── OCEAN WAVES ── */}
		<path
			d="M0 340 Q35 326 70 340 Q105 354 140 340 Q175 326 210 340 Q245 354 280 340 Q315 326 350 340 Q385 354 420 340 Q455 326 480 340"
			stroke="#2aa198"
			strokeWidth="1.8"
			fill="none"
			opacity="0.3"
		/>
		<path
			d="M0 352 Q40 340 80 352 Q120 364 160 352 Q200 340 240 352 Q280 364 320 352 Q360 340 400 352 Q440 364 480 355"
			stroke="#2aa198"
			strokeWidth="1.2"
			fill="none"
			opacity="0.18"
		/>
		<path
			d="M0 362 Q45 352 90 362 Q135 372 180 362 Q225 352 270 362 Q315 372 360 362 Q405 352 450 362 L480 366"
			stroke="#2aa198"
			strokeWidth="0.8"
			fill="none"
			opacity="0.1"
		/>
		{/* Foam */}
		<path
			d="M55 335 Q62 330 69 335"
			stroke="#fdf6e3"
			strokeWidth="0.5"
			fill="none"
			opacity="0.1"
		/>
		<path
			d="M200 335 Q207 330 214 335"
			stroke="#fdf6e3"
			strokeWidth="0.5"
			fill="none"
			opacity="0.08"
		/>
		<path
			d="M340 335 Q347 330 354 335"
			stroke="#fdf6e3"
			strokeWidth="0.5"
			fill="none"
			opacity="0.1"
		/>
	</svg>
);

/* ── SQL Console ───────────────────────────────────────────────── */
const SQLConsole = () => (
	<div className="sql-console p-4 md:p-5 text-xs md:text-sm leading-relaxed">
		<div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#d4af37]/10">
			<div className="w-2.5 h-2.5 rounded-full bg-[#cb4b16]" />
			<div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
			<div className="w-2.5 h-2.5 rounded-full bg-[#2aa198]" />
			<span className="text-[#586e75] text-[10px] ml-2 font-mono">
				coral-query.sql
			</span>
		</div>
		<div className="space-y-1">
			<p>
				<span className="sql-comment">
					-- Find root cause across 3 tools in one query
				</span>
			</p>
			<p>
				<span className="sql-keyword">SELECT</span> g.title,
				s.error_message, sl.text
			</p>
			<p>
				<span className="sql-keyword">FROM</span>{" "}
				<span className="sql-table">github.pull_requests</span> g
			</p>
			<p>
				<span className="sql-keyword">JOIN</span>{" "}
				<span className="sql-table">sentry.issues</span> s
			</p>
			<p>
				{" "}
				<span className="sql-keyword">ON</span> s.first_seen {">"}=
				g.merged_at
			</p>
			<p>
				<span className="sql-keyword">JOIN</span>{" "}
				<span className="sql-table">slack.messages</span> sl
			</p>
			<p>
				{" "}
				<span className="sql-keyword">ON</span> sl.channel ={" "}
				<span className="sql-string">&apos;#incidents&apos;</span>
			</p>
			<p>
				<span className="sql-keyword">WHERE</span> s.level ={" "}
				<span className="sql-string">&apos;fatal&apos;</span>
			</p>
			<p>
				<span className="sql-keyword">ORDER BY</span> s.first_seen{" "}
				<span className="sql-keyword">DESC</span>;
			</p>
		</div>
		<div className="mt-3 pt-2 border-t border-[#d4af37]/10 flex items-center gap-1">
			<span className="text-[#2aa198]">→</span>
			<span className="text-[#586e75] text-[10px]">
				3 sources joined. 0 glue code. 100% local.
			</span>
			<span className="cursor-blink text-[#d4af37]">▊</span>
		</div>
	</div>
);

const useCountdown = (targetDate: Date) => {
	const targetTime = targetDate.getTime();
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const calculate = () => {
			const diff = targetTime - Date.now();
			if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
			return {
				days: Math.floor(diff / (1000 * 60 * 60 * 24)),
				hours: Math.floor(
					(diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
				),
				minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((diff % (1000 * 60)) / 1000),
			};
		};
		setTimeLeft(calculate());
		const interval = setInterval(() => setTimeLeft(calculate()), 1000);
		return () => clearInterval(interval);
	}, [targetTime]);

	return timeLeft;
};

const HeroSection = ({
	description,
	startDate,
	endDate,
	prize,
	showDate = true,
}: HeroProps) => {
	const startD = new Date(startDate);
	const endD = new Date(endDate);
	const now = new Date();
	const hackathonStarted = now >= startD;
	const hackathonEnded = now >= endD;
	const countdownTarget = hackathonStarted ? endD : startD;
	const countdown = useCountdown(countdownTarget);

	const status = hackathonEnded
		? "ended"
		: hackathonStarted
			? "ongoing"
			: "upcoming";

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
		});
	};

	return (
		<div className="relative min-h-[65svh] md:min-h-[72svh] overflow-hidden flex flex-col">
			{/* ═══ JACK SPARROW — hanging from rope, swinging with sword ═══ */}
			<motion.div
				className="absolute top-0 right-[12%] md:right-[15%] lg:right-[18%] z-20 pointer-events-none select-none"
				initial={{ y: "-100%", opacity: 0 }}
				animate={{ y: "0%", opacity: 1 }}
				transition={{
					duration: 1.4,
					ease: [0.16, 1, 0.3, 1],
					delay: 1.2,
				}}
			>
				<div className="jack-swing origin-top">
					<svg
						viewBox="0 0 120 320"
						fill="none"
						className="w-16 sm:w-20 md:w-24 lg:w-28"
					>
						{/* Rope */}
						<line
							x1="60"
							y1="0"
							x2="60"
							y2="95"
							stroke="#8b6914"
							strokeWidth="2.5"
						/>
						<line
							x1="60"
							y1="0"
							x2="60"
							y2="95"
							stroke="#d4af37"
							strokeWidth="1"
							opacity="0.3"
						/>

						{/* ── BANDANA / HAT ── */}
						<ellipse
							cx="60"
							cy="105"
							rx="16"
							ry="10"
							fill="#8b1a1a"
						/>
						<path d="M44 105 Q60 95 76 105" fill="#6b1010" />
						{/* Hat brim */}
						<path
							d="M40 108 Q60 115 80 108"
							stroke="#5c0e0e"
							strokeWidth="1.5"
							fill="none"
						/>
						{/* Bandana tails */}
						<path
							d="M76 105 Q82 112 85 125"
							stroke="#8b1a1a"
							strokeWidth="2"
							fill="none"
						/>
						<path
							d="M78 106 Q85 115 86 128"
							stroke="#6b1010"
							strokeWidth="1.5"
							fill="none"
						/>

						{/* ── HEAD ── */}
						<ellipse
							cx="60"
							cy="118"
							rx="14"
							ry="16"
							fill="#c4956a"
						/>
						{/* Hair / dreadlocks */}
						<path
							d="M46 115 Q42 130 40 150"
							stroke="#1a1008"
							strokeWidth="3"
							fill="none"
							strokeLinecap="round"
						/>
						<path
							d="M48 118 Q43 135 42 155"
							stroke="#2a1a0a"
							strokeWidth="2.5"
							fill="none"
							strokeLinecap="round"
						/>
						<path
							d="M74 115 Q78 130 80 150"
							stroke="#1a1008"
							strokeWidth="3"
							fill="none"
							strokeLinecap="round"
						/>
						<path
							d="M72 118 Q77 135 78 155"
							stroke="#2a1a0a"
							strokeWidth="2.5"
							fill="none"
							strokeLinecap="round"
						/>
						{/* Beard braids */}
						<path
							d="M55 132 Q53 145 50 158"
							stroke="#1a1008"
							strokeWidth="2"
							fill="none"
						/>
						<path
							d="M65 132 Q67 145 70 158"
							stroke="#1a1008"
							strokeWidth="2"
							fill="none"
						/>
						{/* Bead on beard */}
						<circle cx="50" cy="155" r="2" fill="#d4af37" />
						<circle cx="70" cy="155" r="2" fill="#d4af37" />

						{/* Eyes */}
						<ellipse
							cx="54"
							cy="116"
							rx="2.5"
							ry="2"
							fill="#1a1008"
						/>
						<ellipse
							cx="66"
							cy="116"
							rx="2.5"
							ry="2"
							fill="#1a1008"
						/>
						{/* Kohl / eyeliner */}
						<path
							d="M50 115 Q54 113 58 115"
							stroke="#0a0a0a"
							strokeWidth="0.8"
							fill="none"
						/>
						<path
							d="M62 115 Q66 113 70 115"
							stroke="#0a0a0a"
							strokeWidth="0.8"
							fill="none"
						/>
						{/* Nose */}
						<path
							d="M59 120 L60 124 L62 121"
							stroke="#a07850"
							strokeWidth="1"
							fill="none"
						/>
						{/* Mustache */}
						<path
							d="M53 126 Q60 130 67 126"
							stroke="#1a1008"
							strokeWidth="1.5"
							fill="none"
						/>
						{/* Smirk */}
						<path
							d="M54 129 Q60 133 66 128"
							stroke="#8a5a3a"
							strokeWidth="1"
							fill="none"
						/>
						{/* Gold tooth */}
						<circle cx="60" cy="130" r="1" fill="#d4af37" />

						{/* ── BODY / COAT ── */}
						{/* Torso */}
						<path
							d="M48 134 L42 200 L78 200 L72 134"
							fill="#2a1a0a"
						/>
						{/* Coat opening - white shirt */}
						<path
							d="M52 134 L50 195 L70 195 L68 134"
							fill="#e8dcc8"
							opacity="0.7"
						/>
						{/* Coat lapels */}
						<path d="M48 134 L52 134 L50 170" fill="#1a1008" />
						<path d="M72 134 L68 134 L70 170" fill="#1a1008" />
						{/* Belt / sash */}
						<rect
							x="42"
							y="175"
							width="36"
							height="8"
							rx="2"
							fill="#8b1a1a"
						/>
						<rect
							x="56"
							y="173"
							width="8"
							height="12"
							rx="1"
							fill="#d4af37"
							opacity="0.7"
						/>
						{/* Compass on belt */}
						<circle
							cx="48"
							cy="179"
							r="3"
							stroke="#d4af37"
							strokeWidth="0.8"
							fill="#2a1a0a"
						/>

						{/* ── LEFT ARM (holding rope) ── */}
						<path
							d="M48 140 Q35 155 40 95"
							stroke="#c4956a"
							strokeWidth="5"
							fill="none"
							strokeLinecap="round"
						/>
						{/* Hand gripping rope */}
						<ellipse cx="42" cy="95" rx="5" ry="4" fill="#c4956a" />
						{/* Sleeve */}
						<path
							d="M48 140 Q40 148 38 155"
							stroke="#2a1a0a"
							strokeWidth="3"
							fill="none"
						/>

						{/* ── RIGHT ARM (holding sword, extended) ── */}
						<path
							d="M72 140 Q90 150 100 170"
							stroke="#c4956a"
							strokeWidth="5"
							fill="none"
							strokeLinecap="round"
						/>
						{/* Sleeve */}
						<path
							d="M72 140 Q80 148 85 155"
							stroke="#2a1a0a"
							strokeWidth="3"
							fill="none"
						/>
						{/* Hand */}
						<ellipse
							cx="100"
							cy="172"
							rx="4"
							ry="5"
							fill="#c4956a"
						/>

						{/* ── CUTLASS SWORD ── */}
						<path
							d="M98 168 Q108 155 115 130 Q118 120 116 115"
							stroke="#c0c0c0"
							strokeWidth="2.5"
							fill="none"
							strokeLinecap="round"
						/>
						{/* Blade shine */}
						<path
							d="M100 165 Q110 150 115 132"
							stroke="#ffffff"
							strokeWidth="0.8"
							fill="none"
							opacity="0.4"
						/>
						{/* Guard */}
						<ellipse
							cx="99"
							cy="170"
							rx="6"
							ry="2.5"
							fill="#d4af37"
						/>
						{/* Pommel */}
						<circle cx="98" cy="175" r="2" fill="#d4af37" />

						{/* ── LEGS ── */}
						<path
							d="M50 200 L46 255"
							stroke="#2a1a0a"
							strokeWidth="6"
							strokeLinecap="round"
						/>
						<path
							d="M70 200 L74 255"
							stroke="#2a1a0a"
							strokeWidth="6"
							strokeLinecap="round"
						/>
						{/* Boots */}
						<path
							d="M46 255 L42 270 L35 272 L35 268 L42 265 L44 255"
							fill="#1a0e04"
						/>
						<path
							d="M74 255 L78 270 L85 272 L85 268 L78 265 L76 255"
							fill="#1a0e04"
						/>
						{/* Boot cuffs */}
						<path
							d="M43 255 Q46 252 49 255"
							stroke="#3d2510"
							strokeWidth="1.5"
							fill="none"
						/>
						<path
							d="M71 255 Q74 252 77 255"
							stroke="#3d2510"
							strokeWidth="1.5"
							fill="none"
						/>
					</svg>
				</div>
			</motion.div>

			{/* ═══ PIRATE PARROT — flying around below Jack ═══ */}
			<motion.div
				className="absolute top-[38%] right-[8%] md:right-[12%] lg:right-[15%] z-20 pointer-events-none select-none"
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, delay: 2.5 }}
			>
				<div className="parrot-fly">
					<svg
						viewBox="0 0 100 80"
						fill="none"
						className="w-14 sm:w-16 md:w-20 lg:w-24"
					>
						{/* Body */}
						<ellipse
							cx="50"
							cy="45"
							rx="14"
							ry="18"
							fill="#e53e3e"
						/>
						<ellipse
							cx="50"
							cy="45"
							rx="14"
							ry="18"
							fill="url(#parrotGrad)"
						/>
						<defs>
							<linearGradient
								id="parrotGrad"
								x1="50"
								y1="27"
								x2="50"
								y2="63"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0%" stopColor="#e53e3e" />
								<stop offset="50%" stopColor="#dd6b20" />
								<stop offset="100%" stopColor="#d69e2e" />
							</linearGradient>
						</defs>
						{/* Belly */}
						<ellipse
							cx="50"
							cy="50"
							rx="9"
							ry="12"
							fill="#fdf6e3"
							opacity="0.7"
						/>

						{/* Head */}
						<circle cx="50" cy="28" r="10" fill="#e53e3e" />
						{/* Eye */}
						<circle cx="54" cy="26" r="3" fill="#fdf6e3" />
						<circle cx="55" cy="25.5" r="1.5" fill="#1a1a1a" />
						{/* Eye ring */}
						<circle
							cx="54"
							cy="26"
							r="3.5"
							stroke="#fdf6e3"
							strokeWidth="0.5"
							fill="none"
							opacity="0.5"
						/>
						{/* Beak */}
						<path
							d="M60 28 L70 30 L65 33 L60 31 Z"
							fill="#1a1a1a"
						/>
						<path d="M60 28 L68 29 L60 30" fill="#333" />
						{/* Beak curve */}
						<path
							d="M68 29 Q71 31 65 33"
							stroke="#1a1a1a"
							strokeWidth="0.8"
							fill="none"
						/>
						{/* Head crest */}
						<path
							d="M44 22 Q40 14 45 10 Q48 16 46 22"
							fill="#e53e3e"
						/>
						<path
							d="M47 20 Q44 12 48 8 Q50 14 48 20"
							fill="#dd6b20"
						/>

						{/* Left wing (extended, flapping) */}
						<path
							d="M36 40 Q15 28 8 18 Q12 22 18 25 Q10 20 5 12 Q14 24 22 30 Q16 26 12 18 Q20 28 30 36"
							fill="#2b6cb0"
						/>
						<path
							d="M36 40 Q20 32 14 24"
							stroke="#2c5282"
							strokeWidth="0.5"
							fill="none"
							opacity="0.4"
						/>
						{/* Wing feather tips */}
						<path
							d="M8 18 Q6 15 8 12"
							stroke="#2b6cb0"
							strokeWidth="1"
							fill="none"
						/>
						<path
							d="M5 12 Q3 9 5 6"
							stroke="#2b6cb0"
							strokeWidth="1"
							fill="none"
						/>

						{/* Right wing (extended, flapping) */}
						<path
							d="M64 40 Q85 28 92 18 Q88 22 82 25 Q90 20 95 12 Q86 24 78 30 Q84 26 88 18 Q80 28 70 36"
							fill="#2b6cb0"
						/>
						<path
							d="M64 40 Q80 32 86 24"
							stroke="#2c5282"
							strokeWidth="0.5"
							fill="none"
							opacity="0.4"
						/>
						{/* Wing feather tips */}
						<path
							d="M92 18 Q94 15 92 12"
							stroke="#2b6cb0"
							strokeWidth="1"
							fill="none"
						/>
						<path
							d="M95 12 Q97 9 95 6"
							stroke="#2b6cb0"
							strokeWidth="1"
							fill="none"
						/>

						{/* Tail feathers */}
						<path
							d="M45 62 Q38 75 32 80"
							stroke="#2b6cb0"
							strokeWidth="2.5"
							fill="none"
							strokeLinecap="round"
						/>
						<path
							d="M50 63 Q48 76 45 82"
							stroke="#e53e3e"
							strokeWidth="2"
							fill="none"
							strokeLinecap="round"
						/>
						<path
							d="M55 62 Q58 75 55 80"
							stroke="#d69e2e"
							strokeWidth="2"
							fill="none"
							strokeLinecap="round"
						/>

						{/* Feet (tucked) */}
						<path
							d="M45 58 L43 64 L40 66"
							stroke="#4a5568"
							strokeWidth="1.2"
							fill="none"
						/>
						<path
							d="M55 58 L57 64 L60 66"
							stroke="#4a5568"
							strokeWidth="1.2"
							fill="none"
						/>
					</svg>
				</div>
			</motion.div>

			{/* ═══ THE BLACK PEARL — sails in from the right ═══ */}
			<motion.div
				className="absolute top-1/2 -translate-y-1/2 right-[-8%] md:right-[-3%] w-[360px] sm:w-[480px] md:w-[580px] lg:w-[720px] xl:w-[820px] z-10 pointer-events-none select-none"
				initial={{ x: "50%", opacity: 0 }}
				animate={{ x: "0%", opacity: 1 }}
				transition={{
					duration: 2.2,
					ease: [0.16, 1, 0.3, 1],
					delay: 0.3,
				}}
			>
				<div className="ship-sailing">
					<BlackPearl />
				</div>
			</motion.div>

			{/* ═══ Hero content — full width, z-20 above ship ═══ */}
			<ViewContainer className="relative z-20 flex flex-col justify-start pt-8 md:pt-12 pb-6 flex-1">
				{/* Status badges */}
				{showDate && (
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1, duration: 0.5 }}
						className="flex items-center gap-2 mb-5 flex-wrap"
					>
						<div
							className={cn(
								"inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide border",
								status === "upcoming" &&
									"bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/30",
								status === "ongoing" &&
									"bg-[#2aa198]/10 text-[#2aa198] border-[#2aa198]/30",
								status === "ended" &&
									"bg-[#586e75]/20 text-[#93a1a1] border-[#586e75]/30",
							)}
						>
							<div
								className={cn(
									"w-2 h-2 rounded-full",
									status === "upcoming" &&
										"bg-[#d4af37] animate-pulse",
									status === "ongoing" && "bg-[#2aa198]",
									status === "ended" && "bg-[#586e75]",
								)}
							/>
							{status === "upcoming" && "UPCOMING"}
							{status === "ongoing" && "SAILING NOW"}
							{status === "ended" && "VOYAGE COMPLETE"}
						</div>
						<div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide border bg-[#2aa198]/10 text-[#2aa198] border-[#2aa198]/30">
							<div className="w-2 h-2 rounded-full bg-[#2aa198]" />
							ONLINE
						</div>
					</motion.div>
				)}

				{/* Title */}
				<motion.h1
					className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight max-w-4xl"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.1 }}
				>
					<span className="gold-shimmer-text block">
						Pirates of the
					</span>
					<span className="gold-shimmer-text block">Coral-bean</span>
				</motion.h1>

				{/* Description */}
				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5, duration: 0.6 }}
					className="text-[#93a1a1] text-base md:text-lg mt-5 max-w-xl leading-relaxed"
				>
					{description}
				</motion.p>

				{/* Prize + Date info cards */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.7, duration: 0.5 }}
					className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mt-6"
				>
					<div className="border border-[#d4af37]/30 rounded-xl p-4 bg-[#002b36]/80 backdrop-blur-sm shadow-[0_0_18px_rgba(212,175,55,0.1)]">
						<div className="text-[11px] uppercase tracking-[0.18em] text-[#d4af37]/70 mb-1 font-bold">
							Treasure
						</div>
						<div className="font-bold text-lg text-[#d4af37]">
							{prize}
						</div>
					</div>
					{showDate && (
						<div className="border border-[#2aa198]/30 rounded-xl p-4 bg-[#002b36]/80 backdrop-blur-sm shadow-[0_0_18px_rgba(42,161,152,0.1)]">
							<div className="text-[11px] uppercase tracking-[0.18em] text-[#2aa198]/70 mb-1 font-bold">
								Dates
							</div>
							<div className="font-bold text-sm text-[#2aa198] flex items-center gap-2">
								<CalendarIcon size={14} />
								{formatDate(startDate)} – {formatDate(endDate)}
							</div>
						</div>
					)}
					{showDate && (
						<div className="border border-[#859900]/30 rounded-xl p-4 bg-[#002b36]/80 backdrop-blur-sm shadow-[0_0_18px_rgba(133,153,0,0.1)]">
							<div className="text-[11px] uppercase tracking-[0.18em] text-[#859900]/70 mb-1 font-bold">
								{status === "upcoming"
									? "Sets Sail In"
									: status === "ongoing"
										? "Ends In"
										: "Status"}
							</div>
							{status === "ended" ? (
								<div className="font-bold text-sm text-[#859900]">
									Voyage complete
								</div>
							) : (
								<div className="font-mono font-bold text-sm text-[#859900] flex gap-1.5">
									<span>{countdown.days}d</span>
									<span>{countdown.hours}h</span>
									<span>{countdown.minutes}m</span>
									<span>{countdown.seconds}s</span>
								</div>
							)}
						</div>
					)}
				</motion.div>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1.9, duration: 0.5 }}
					className="relative z-30 flex flex-wrap gap-3 mt-7"
				>
					<Link
						href="/hackathons/coral/projects"
						className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8960c] text-[#002b36] font-bold text-base shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 hover:scale-[1.02] transition-all duration-300"
					>
						🏴‍☠️ View Projects
					</Link>
					<Link
						href="https://git.new/coral-wemakedevs-may26"
						target="_blank"
						rel="noopener noreferrer"
						className="px-7 py-3.5 rounded-xl border border-[#586e75]/40 text-[#93a1a1] font-semibold hover:border-[#d4af37]/40 hover:text-[#d4af37] transition-all duration-300 flex items-center gap-2"
					>
						<Star size={16} /> Star Coral
					</Link>
				</motion.div>

				{/* SQL Console */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2.2, duration: 0.6 }}
					className="mt-8 max-w-lg"
				>
					<SQLConsole />
				</motion.div>
			</ViewContainer>
		</div>
	);
};

export default HeroSection;
