"use client";

import { Award, Briefcase, Gift, Star, Trophy } from "lucide-react";
import Link from "next/link";

// ─── Product Icons (clean minimal SVGs) ───────────────────────────────────────

const MacBookIcon = () => (
	<svg viewBox="0 0 120 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id="mbScreen" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#1e293b" />
				<stop offset="100%" stopColor="#0f172a" />
			</linearGradient>
			<linearGradient id="mbBody" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#64748b" />
				<stop offset="100%" stopColor="#475569" />
			</linearGradient>
		</defs>
		{/* Screen */}
		<rect x="10" y="5" width="100" height="58" rx="4" fill="url(#mbBody)" />
		<rect x="14" y="9" width="92" height="50" rx="2" fill="url(#mbScreen)" />
		{/* Apple logo hint */}
		<ellipse cx="60" cy="34" rx="6" ry="7" fill="#334155" />
		<ellipse cx="63" cy="28" rx="2" ry="3" fill="#334155" />
		{/* Base */}
		<path d="M5 63 L115 63 L118 72 C118 74 116 76 114 76 L6 76 C4 76 2 74 2 72 L5 63Z" fill="url(#mbBody)" />
		<rect x="45" y="66" width="30" height="4" rx="2" fill="#334155" />
		{/* Shine */}
		<rect x="14" y="9" width="92" height="8" rx="1" fill="white" fillOpacity="0.05" />
	</svg>
);

const IPadIcon = () => (
	<svg viewBox="0 0 70 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id="ipadBody" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#64748b" />
				<stop offset="100%" stopColor="#475569" />
			</linearGradient>
			<linearGradient id="ipadScreen" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#1e293b" />
				<stop offset="100%" stopColor="#0f172a" />
			</linearGradient>
		</defs>
		{/* Body */}
		<rect x="5" y="5" width="60" height="90" rx="6" fill="url(#ipadBody)" />
		{/* Screen */}
		<rect x="9" y="12" width="52" height="76" rx="3" fill="url(#ipadScreen)" />
		{/* Camera */}
		<circle cx="35" cy="8" r="2" fill="#334155" />
		{/* Apple logo hint */}
		<ellipse cx="35" cy="50" rx="5" ry="6" fill="#334155" />
		<ellipse cx="37" cy="45" rx="1.5" ry="2.5" fill="#334155" />
		{/* Shine */}
		<rect x="9" y="12" width="52" height="12" rx="2" fill="white" fillOpacity="0.04" />
	</svg>
);

const KeychronIcon = () => (
	<svg viewBox="0 0 140 50" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id="kbBody" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#374151" />
				<stop offset="100%" stopColor="#1f2937" />
			</linearGradient>
		</defs>
		{/* Keyboard body */}
		<rect x="5" y="10" width="130" height="35" rx="5" fill="url(#kbBody)" />
		{/* Key rows */}
		{[0, 1, 2].map((row) => (
			<g key={row}>
				{Array.from({ length: 14 }).map((_, i) => (
					<rect
						key={`${row}-${i}`}
						x={10 + i * 9}
						y={15 + row * 10}
						width="7"
						height="7"
						rx="1.5"
						fill={
							(row === 0 && i === 0) ? "#ef4444" :
							(row === 0 && i === 13) ? "#22c55e" :
							(row === 1 && i === 0) ? "#f59e0b" :
							"#4b5563"
						}
					/>
				))}
			</g>
		))}
		{/* Spacebar */}
		<rect x="35" y="38" width="50" height="5" rx="2" fill="#4b5563" />
		{/* RGB glow under */}
		<rect x="10" y="44" width="120" height="2" rx="1" fill="#a855f7" fillOpacity="0.4" />
	</svg>
);

// ─── Prize Card Component ─────────────────────────────────────────────────────

type PrizeCardProps = {
	place: string;
	title: string;
	subtitle: string;
	icon: React.ReactNode;
	accentColor: string;
	glowColor: string;
};

const PrizeCard = ({ place, title, subtitle, icon, accentColor, glowColor }: PrizeCardProps) => (
	<div
		className="group relative bg-slate-900/90 rounded-2xl p-6 border border-slate-700/60 hover:border-amber-500/40 transition-all duration-300 overflow-hidden"
		style={{ boxShadow: `0 0 40px ${glowColor}` }}
	>
		{/* Ambient glow */}
		<div
			className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"
			style={{ background: accentColor }}
		/>

		{/* Place badge */}
		<div
			className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full border"
			style={{ color: accentColor, borderColor: accentColor, background: `${accentColor}15` }}
		>
			{place}
		</div>

		{/* Product illustration */}
		<div className="w-full h-24 mb-5 flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
			{icon}
		</div>

		{/* Text */}
		<h4 className="text-xl md:text-2xl font-bold text-white mb-1">{title}</h4>
		<p className="text-slate-400 text-sm">{subtitle}</p>

		{/* Bottom accent line */}
		<div
			className="absolute bottom-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
			style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
		/>
	</div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const PrizesShowcase = () => {
	return (
		<div className="py-20">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-amber-500 to-orange-600 p-5 rounded-2xl shadow-lg shadow-amber-500/30">
							<Trophy className="w-10 h-10 text-slate-900" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent mb-4">
						Temporal Treasures
					</h2>
					<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
						The best time travelers get rewarded.
					</p>
					{/* Highlighted banner */}
					<div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 via-emerald-500/15 to-emerald-500/20 border-2 border-emerald-400/50 shadow-[0_0_30px_rgba(52,211,153,0.25)]">
						<span className="text-2xl">🎁</span>
						<span className="text-lg md:text-xl font-bold text-emerald-300" style={{ textShadow: "0 0 12px rgba(110,231,183,0.5)" }}>
							Every team member receives the full prize!
						</span>
					</div>
				</div>

				{/* Prize Cards Grid */}
				<div className="space-y-8">
					{/* Main Prizes */}
					<div className="relative rounded-3xl p-6 md:p-10 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800 border border-amber-500/20">
						{/* Ambient glows */}
						<div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
						<div className="pointer-events-none absolute -bottom-20 -left-20 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl" />

						<div className="relative z-10">
							{/* Header */}
							<div className="flex items-center gap-4 mb-10">
								<div className="bg-amber-500/15 border border-amber-500/30 p-3 rounded-xl">
									<Award className="w-7 h-7 text-amber-400" />
								</div>
								<div>
									<h3 className="text-2xl md:text-3xl font-bold text-white">
										Prizes for All Team Members
									</h3>
									<p className="text-slate-400 text-sm mt-1">Maximum team size of 4</p>
								</div>
							</div>

							{/* Prize Cards */}
							<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
								<PrizeCard
									place="1st Place"
									title="Apple MacBook Neo"
									subtitle="The ultimate machine for developers"
									icon={<MacBookIcon />}
									accentColor="#fbbf24"
									glowColor="rgba(251, 191, 36, 0.08)"
								/>
								<PrizeCard
									place="2nd Place"
									title="Apple iPad"
									subtitle="Power meets portability"
									icon={<IPadIcon />}
									accentColor="#a78bfa"
									glowColor="rgba(167, 139, 250, 0.08)"
								/>
								<PrizeCard
									place="3rd Place"
									title="Keychron Mechanical Keyboards"
									subtitle="Premium mechanical typing"
									icon={<KeychronIcon />}
									accentColor="#34d399"
									glowColor="rgba(52, 211, 153, 0.08)"
								/>
							</div>

							{/* Bonus badges */}
							<div className="mt-10 flex flex-wrap gap-3 justify-center">
								<span className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-amber-300 border border-amber-500/30">
									<Briefcase className="w-4 h-4" />
									Job interviews at Collate
								</span>
								<span className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-emerald-300 border border-emerald-500/30">
									<Award className="w-4 h-4" />
									Participation certificates for all
								</span>
							</div>

							<div className="mt-5 rounded-2xl border border-cyan-500/40 bg-cyan-500/10 px-6 py-5 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.16)]">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
									<div className="flex items-start gap-3">
										<span className="text-xl">💻</span>
										<div>
											<p className="text-cyan-300 font-bold text-lg">
												Contribution Track: $100 per merged PR
											</p>
											<p className="text-cyan-100/90 text-sm">
												Solve any OpenMetadata issue labeled{" "}
												<span className="font-semibold">good-first-issue</span> and get your PR merged.
											</p>
										</div>
									</div>
									<Link
										href="https://github.com/open-metadata/OpenMetadata/issues?q=is%3Aissue%20state%3Aopen%20label%3Agood-first-issue"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-cyan-300/40 text-cyan-200 hover:text-white hover:bg-cyan-500/20 transition-colors font-semibold text-sm"
									>
										View good-first-issues
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Side Quest & Career */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Side Quest */}
						<div className="glass-card rounded-2xl p-8">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-xl shadow-lg">
									<Star className="w-6 h-6 text-slate-900" />
								</div>
								<h3 className="text-xl md:text-2xl font-bold text-amber-400">
									Side Quest
								</h3>
							</div>

							<p className="text-slate-300 leading-relaxed mb-6">
								Star the{" "}
								<Link
									href="https://github.com/open-metadata/OpenMetadata"
									target="_blank"
									rel="noopener noreferrer"
									className="text-amber-400 hover:text-amber-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									OpenMetadata repository
								</Link>{" "}
								on GitHub and share your participation on social media.
							</p>

							<div className="flex items-center gap-3 bg-slate-800/60 rounded-xl px-4 py-3 border border-amber-500/20">
								<Gift className="w-5 h-5 text-amber-400 shrink-0" />
								<span className="font-semibold text-amber-400">
									10 Random Winners Get Swag Boxes
								</span>
							</div>
						</div>

						{/* Career Opportunities */}
						<div className="glass-card rounded-2xl p-8">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-xl shadow-lg">
									<Briefcase className="w-6 h-6 text-slate-900" />
								</div>
								<h3 className="text-xl md:text-2xl font-bold text-amber-400">
									Career Opportunities
								</h3>
							</div>

							<p className="text-slate-300 leading-relaxed mb-6">
								Top winners get job interview opportunities with{" "}
								<Link
									href="https://www.getcollate.io"
									target="_blank"
									rel="noopener noreferrer"
									className="text-amber-400 hover:text-amber-300 font-semibold underline decoration-2 underline-offset-2 transition-colors"
								>
									Collate
								</Link>
								, the company behind OpenMetadata.
							</p>

							<div className="flex items-center gap-3 bg-slate-800/60 rounded-xl px-4 py-3 border border-amber-500/20">
								<Briefcase className="w-5 h-5 text-amber-400 shrink-0" />
								<span className="font-semibold text-amber-400">
									Interview at Collate
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrizesShowcase;
