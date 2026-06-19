"use client";

import {
	Award,
	Briefcase,
	GitPullRequest,
	Share2,
	Star,
	Trophy,
} from "lucide-react";
import Link from "next/link";

// ─── Product icons ────────────────────────────────────────────────────────────
const MacBookIcon = () => (
	<svg
		viewBox="0 0 120 80"
		className="w-full h-full"
		fill="none"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<linearGradient id="cgMbScreen" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#2a1840" />
				<stop offset="100%" stopColor="#160a26" />
			</linearGradient>
			<linearGradient id="cgMbBody" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#8b7aa8" />
				<stop offset="100%" stopColor="#5a4a78" />
			</linearGradient>
		</defs>
		<rect
			x="10"
			y="5"
			width="100"
			height="58"
			rx="4"
			fill="url(#cgMbBody)"
		/>
		<rect
			x="14"
			y="9"
			width="92"
			height="50"
			rx="2"
			fill="url(#cgMbScreen)"
		/>
		<ellipse cx="60" cy="34" rx="6" ry="7" fill="#ffb800" opacity="0.7" />
		<path
			d="M5 63 L115 63 L118 72 C118 74 116 76 114 76 L6 76 C4 76 2 74 2 72 L5 63Z"
			fill="url(#cgMbBody)"
		/>
		<rect x="45" y="66" width="30" height="4" rx="2" fill="#3a2a55" />
	</svg>
);
const IPadIcon = () => (
	<svg
		viewBox="0 0 70 100"
		className="w-full h-full"
		fill="none"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<linearGradient id="cgPadBody" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#8b7aa8" />
				<stop offset="100%" stopColor="#5a4a78" />
			</linearGradient>
			<linearGradient id="cgPadScreen" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#2a1840" />
				<stop offset="100%" stopColor="#160a26" />
			</linearGradient>
		</defs>
		<rect
			x="5"
			y="5"
			width="60"
			height="90"
			rx="6"
			fill="url(#cgPadBody)"
		/>
		<rect
			x="9"
			y="12"
			width="52"
			height="76"
			rx="3"
			fill="url(#cgPadScreen)"
		/>
		<circle cx="35" cy="8" r="2" fill="#3a2a55" />
		<ellipse cx="35" cy="50" rx="5" ry="6" fill="#21e6c1" opacity="0.7" />
	</svg>
);
const KeychronIcon = () => (
	<svg
		viewBox="0 0 140 50"
		className="w-full h-full"
		fill="none"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<linearGradient id="cgKbBody" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#3a2a55" />
				<stop offset="100%" stopColor="#241338" />
			</linearGradient>
		</defs>
		<rect
			x="5"
			y="10"
			width="130"
			height="35"
			rx="5"
			fill="url(#cgKbBody)"
		/>
		{[0, 1, 2].map(row => (
			<g key={`kb-row-${row}`}>
				{Array.from({ length: 14 }).map((_, i) => {
					const kx = 10 + i * 9;
					const ky = 15 + row * 10;
					return (
						<rect
							key={`kb-${kx}-${ky}`}
							x={kx}
							y={ky}
							width="7"
							height="7"
							rx="1.5"
							fill={
								row === 0 && i === 0
									? "#ff2d7e"
									: row === 0 && i === 13
										? "#21e6c1"
										: row === 1 && i === 0
											? "#ffb800"
											: "#6b5a8a"
							}
						/>
					);
				})}
			</g>
		))}
		<rect x="35" y="38" width="50" height="5" rx="2" fill="#6b5a8a" />
		<rect
			x="10"
			y="44"
			width="120"
			height="2"
			rx="1"
			fill="#ff2d7e"
			fillOpacity="0.5"
		/>
	</svg>
);

type PrizeCardProps = {
	place: string;
	title: string;
	subtitle: string;
	icon: React.ReactNode;
	accentColor: string;
};

const PrizeCard = ({
	place,
	title,
	subtitle,
	icon,
	accentColor,
}: PrizeCardProps) => (
	<div
		className="group relative bg-[#160a26]/90 rounded-2xl p-6 border border-[#ffb800]/20 hover:border-[#ff2d7e]/40 transition-all duration-300 overflow-hidden"
		style={{ boxShadow: `0 0 40px ${accentColor}14` }}
	>
		<div
			className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"
			style={{ background: accentColor }}
		/>
		<div
			className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full border"
			style={{
				color: accentColor,
				borderColor: accentColor,
				background: `${accentColor}18`,
			}}
		>
			{place}
		</div>
		<div className="w-full h-24 mb-5 flex items-center justify-center opacity-90 group-hover:scale-105 transition-all duration-300">
			{icon}
		</div>
		<h4 className="text-xl md:text-2xl font-bold text-white mb-1">
			{title}
		</h4>
		<p className="text-slate-400 text-sm">{subtitle}</p>
		<div
			className="absolute bottom-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
			style={{
				background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
			}}
		/>
	</div>
);

const PrizesShowcase = () => {
	return (
		<div className="py-20">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-[#ffb800] to-[#ff8a00] p-5 rounded-2xl shadow-lg shadow-[#ffb800]/30">
							<Trophy className="w-10 h-10 text-[#160a26]" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-black italic uppercase text-[#ffd24a] glow-gold mb-4">
						The Jackpot
					</h2>
					<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
						$10,000 in prizes. The house always remembers — and so
						will you.
					</p>
					<div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#ffb800]/20 via-[#ff2d7e]/15 to-[#00e0d5]/20 border-2 border-[#ffb800]/50 shadow-[0_0_30px_rgba(255,184,0,0.22)]">
						<span className="text-2xl">🎰</span>
						<span className="text-lg md:text-xl font-bold text-[#ffd24a]">
							Every member of a winning team receives the full
							prize!
						</span>
					</div>
				</div>

				<div className="space-y-8">
					{/* Main prizes */}
					<div className="relative rounded-3xl p-6 md:p-10 overflow-hidden bg-gradient-to-br from-[#160a26] via-[#160a26]/95 to-[#1a0b2e] border border-[#ffb800]/20">
						<div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-[#ffb800]/10 rounded-full blur-3xl" />
						<div className="pointer-events-none absolute -bottom-20 -left-20 w-56 h-56 bg-[#ff2d7e]/10 rounded-full blur-3xl" />

						<div className="relative z-10">
							<div className="flex items-center gap-4 mb-10">
								<div className="bg-[#ffb800]/15 border border-[#ffb800]/30 p-3 rounded-xl">
									<Award className="w-7 h-7 text-[#ffd24a]" />
								</div>
								<div>
									<h3 className="text-2xl md:text-3xl font-bold text-white">
										Grand Prizes for All Team Members
									</h3>
									<p className="text-slate-400 text-sm mt-1">
										Maximum team size of 4
									</p>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								<PrizeCard
									place="Best Use of Open Source"
									title="Apple MacBook Neo"
									subtitle="One per team member · for the best build on the open-source Cognee"
									icon={<MacBookIcon />}
									accentColor="#ffb800"
								/>
								<PrizeCard
									place="Best Use of Cognee Cloud"
									title="Apple iPad"
									subtitle="One per team member · for the best build on Cognee Cloud"
									icon={<IPadIcon />}
									accentColor="#21e6c1"
								/>
							</div>

							<div className="mt-8 rounded-2xl border border-[#ff2d7e]/40 bg-[#ff2d7e]/10 px-6 py-5 backdrop-blur-sm shadow-[0_0_30px_rgba(255,45,126,0.16)]">
								<div className="flex items-start gap-3">
									<Briefcase className="w-6 h-6 text-[#ff8ab8] shrink-0 mt-0.5" />
									<div>
										<p className="text-[#ff8ab8] font-bold text-lg">
											Top winners get job interviews at
											Cognee
										</p>
										<p className="text-slate-300 text-sm">
											Showcase your skills directly to the
											team building the memory layer for
											AI. (Interviews do not guarantee a
											job — see the{" "}
											<Link
												href="/hackathons/cognee/rules"
												className="text-[#ffb800] underline hover:text-[#ffd24a]"
											>
												rules
											</Link>
											.)
										</p>
									</div>
								</div>
							</div>

							{/* PR bounty */}
							<div className="mt-5 rounded-2xl border border-[#00e0d5]/40 bg-[#00e0d5]/10 px-6 py-5 backdrop-blur-sm shadow-[0_0_30px_rgba(0,224,213,0.16)]">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
									<div className="flex items-start gap-3">
										<GitPullRequest className="w-6 h-6 text-[#21e6c1] shrink-0 mt-0.5" />
										<div>
											<p className="text-[#21e6c1] font-bold text-lg">
												Open Source Track: $100 per PR ·
												Top 20 submissions
											</p>
											<p className="text-slate-300 text-sm">
												Find issues on the Cognee GitHub
												repository and contribute to the
												open-source project. The top 20
												PR submissions earn $100 each.
											</p>
										</div>
									</div>
									<Link
										href="https://github.com/topoteretes/cognee/issues"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#00e0d5]/40 text-[#21e6c1] hover:text-white hover:bg-[#00e0d5]/20 transition-colors font-semibold text-sm shrink-0"
									>
										Browse issues
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Side tracks */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Best blogs */}
						<div className="glass-card rounded-2xl p-8">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-[#ffb800] to-[#ff8a00] p-3 rounded-xl shadow-lg">
									<Star className="w-6 h-6 text-[#160a26]" />
								</div>
								<h3 className="text-xl md:text-2xl font-bold text-[#ffd24a]">
									Side Track · Best Blogs
								</h3>
							</div>
							<div className="w-full h-16 mb-5 flex items-center justify-start opacity-90">
								<div className="w-40">
									<KeychronIcon />
								</div>
							</div>
							<p className="text-slate-300 leading-relaxed mb-6">
								Write about your build, your journey, or how
								Cognee gives AI a memory. The best blogs win a{" "}
								<span className="text-[#ffd24a] font-semibold">
									Keychron mechanical keyboard worth $120
								</span>
								.
							</p>
							<div className="flex items-center gap-3 bg-[#160a26]/60 rounded-xl px-4 py-3 border border-[#ffb800]/20">
								<Star className="w-5 h-5 text-[#ffd24a] shrink-0" />
								<span className="font-semibold text-[#ffd24a]">
									Keychron Mechanical Keyboard ($120)
								</span>
							</div>
						</div>

						{/* Social posts */}
						<div className="glass-card rounded-2xl p-8">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-[#ff2d7e] to-[#9d4edd] p-3 rounded-xl shadow-lg">
									<Share2 className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl md:text-2xl font-bold text-[#ff8ab8]">
									Side Track · Social Buzz
								</h3>
							</div>
							<p className="text-slate-300 leading-relaxed mb-6">
								Share your progress on socials and tag{" "}
								<span className="text-[#ff8ab8] font-semibold">
									@wemakedevs
								</span>{" "}
								and{" "}
								<span className="text-[#ff8ab8] font-semibold">
									Cognee
								</span>
								. The top 10 social media posts get exclusive
								swag shipped to them.
							</p>
							<div className="flex items-center gap-3 bg-[#160a26]/60 rounded-xl px-4 py-3 border border-[#ff2d7e]/20">
								<Share2 className="w-5 h-5 text-[#ff8ab8] shrink-0" />
								<span className="font-semibold text-[#ff8ab8]">
									Top 10 Posts → Exclusive Swag
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
