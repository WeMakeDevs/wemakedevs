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
				<stop offset="0%" stopColor="#5a4632" />
				<stop offset="100%" stopColor="#3a2a1c" />
			</linearGradient>
			<linearGradient id="cgMbBody" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#cbb48f" />
				<stop offset="100%" stopColor="#a8916b" />
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
		<ellipse cx="60" cy="34" rx="6" ry="7" fill="#e7a92b" opacity="0.85" />
		<path
			d="M5 63 L115 63 L118 72 C118 74 116 76 114 76 L6 76 C4 76 2 74 2 72 L5 63Z"
			fill="url(#cgMbBody)"
		/>
		<rect x="45" y="66" width="30" height="4" rx="2" fill="#8a7350" />
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
				<stop offset="0%" stopColor="#cbb48f" />
				<stop offset="100%" stopColor="#a8916b" />
			</linearGradient>
			<linearGradient id="cgPadScreen" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#5a4632" />
				<stop offset="100%" stopColor="#3a2a1c" />
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
		<circle cx="35" cy="8" r="2" fill="#8a7350" />
		<ellipse cx="35" cy="50" rx="5" ry="6" fill="#0e8a80" opacity="0.85" />
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
		className="group relative bg-[#fffdf6] rounded-2xl p-6 border-2 transition-all duration-300 overflow-hidden"
		style={{ borderColor: `${accentColor}40` }}
	>
		<div
			className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity"
			style={{ background: accentColor }}
		/>
		<div
			className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full border"
			style={{
				color: accentColor,
				borderColor: accentColor,
				background: `${accentColor}14`,
			}}
		>
			{place}
		</div>
		<div className="w-full h-24 mb-5 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
			{icon}
		</div>
		<h4 className="text-xl md:text-2xl font-bold text-[#3a2a1c] mb-1">
			{title}
		</h4>
		<p className="text-[#6b513a] text-sm">{subtitle}</p>
		<div
			className="absolute bottom-0 left-0 right-0 h-1.5 opacity-70 group-hover:opacity-100 transition-opacity"
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
						<div className="bg-gradient-to-br from-[#e7a92b] to-[#c8901a] p-5 rounded-2xl shadow-lg shadow-[#c8901a]/30">
							<Trophy className="w-10 h-10 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-black italic uppercase text-[#c33124] glow-red mb-4">
						The Jackpot
					</h2>
					<p className="text-lg text-[#6b513a] max-w-2xl mx-auto mb-6">
						$10,000 in prizes. The house always remembers, and so
						will you.
					</p>
					<div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#fffdf6] border-2 border-[#e7a92b] shadow-md">
						<span className="text-2xl">🎰</span>
						<span className="text-lg md:text-xl font-bold text-[#c33124]">
							Every member of a winning team receives the full
							prize!
						</span>
					</div>
				</div>

				<div className="space-y-8">
					{/* Main prizes */}
					<div className="relative rounded-3xl p-6 md:p-10 overflow-hidden bg-[#fffdf6] border-2 border-[#b07d12]/25 shadow-[0_12px_30px_rgba(120,80,30,0.15)]">
						<div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-[#e7a92b]/15 rounded-full blur-3xl" />
						<div className="pointer-events-none absolute -bottom-20 -left-20 w-56 h-56 bg-[#c33124]/10 rounded-full blur-3xl" />

						<div className="relative z-10">
							<div className="flex items-center gap-4 mb-10">
								<div className="bg-[#e7a92b]/15 border border-[#e7a92b]/40 p-3 rounded-xl">
									<Award className="w-7 h-7 text-[#c8901a]" />
								</div>
								<div>
									<h3 className="text-2xl md:text-3xl font-bold text-[#3a2a1c]">
										Grand Prizes for All Team Members
									</h3>
									<p className="text-[#6b513a] text-sm mt-1">
										Maximum team size of 4
									</p>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								<PrizeCard
									place="Best Use of Open Source"
									title="Apple MacBook Neo"
									subtitle="One per team member, or the equivalent cash amount, for the best build on the open-source Cognee"
									icon={<MacBookIcon />}
									accentColor="#c33124"
								/>
								<PrizeCard
									place="Best Use of Cognee Cloud"
									title="Apple iPad"
									subtitle="One per team member, or the equivalent cash amount, for the best build on Cognee Cloud"
									icon={<IPadIcon />}
									accentColor="#0e8a80"
								/>
							</div>

							<div className="mt-8 rounded-2xl border-2 border-[#c33124]/30 bg-[#c33124]/8 px-6 py-5">
								<div className="flex items-start gap-3">
									<Briefcase className="w-6 h-6 text-[#c33124] shrink-0 mt-0.5" />
									<div>
										<p className="text-[#c33124] font-bold text-lg">
											Top winners get job interviews at
											Cognee
										</p>
										<p className="text-[#5a4632] text-sm">
											Showcase your skills directly to the
											team building the memory layer for
											AI. (Interviews do not guarantee a
											job, see the{" "}
											<Link
												href="/hackathons/cognee/rules"
												className="text-[#8a5a00] underline hover:text-[#c33124]"
											>
												rules
											</Link>
											.)
										</p>
									</div>
								</div>
							</div>

							{/* PR bounty */}
							<div className="mt-5 rounded-2xl border-2 border-[#0e8a80]/30 bg-[#0e8a80]/8 px-6 py-5">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
									<div className="flex items-start gap-3">
										<GitPullRequest className="w-6 h-6 text-[#0e8a80] shrink-0 mt-0.5" />
										<div>
											<p className="text-[#0e8a80] font-bold text-lg">
												Open Source Track: $100 per PR ·
												Top 20 submissions
											</p>
											<p className="text-[#5a4632] text-sm">
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
										className="inline-flex items-center justify-center px-4 py-2 rounded-lg border-2 border-[#0e8a80]/50 text-[#0e8a80] hover:bg-[#0e8a80] hover:text-white transition-colors font-semibold text-sm shrink-0"
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
						<div className="paper-card rounded-2xl p-8">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-[#e7a92b] to-[#c8901a] p-3 rounded-xl shadow-md">
									<Star className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl md:text-2xl font-bold text-[#c8901a]">
									Side Track · Best Blogs
								</h3>
							</div>
							<p className="text-[#5a4632] leading-relaxed mb-6">
								Write about your build, your journey, or how
								Cognee gives AI a memory. The best blogs win a{" "}
								<span className="text-[#c8901a] font-semibold">
									Keychron mechanical keyboard worth $120
								</span>
								.
							</p>
							<div className="flex items-center gap-3 bg-[#f1dcb4]/60 rounded-xl px-4 py-3 border border-[#b07d12]/25">
								<Star className="w-5 h-5 text-[#c8901a] shrink-0" />
								<span className="font-semibold text-[#8a5a00]">
									Keychron Mechanical Keyboard ($120)
								</span>
							</div>
						</div>

						{/* Social posts */}
						<div className="paper-card rounded-2xl p-8">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-[#e23b2d] to-[#c33124] p-3 rounded-xl shadow-md">
									<Share2 className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl md:text-2xl font-bold text-[#c33124]">
									Side Track · Social Buzz
								</h3>
							</div>
							<p className="text-[#5a4632] leading-relaxed mb-6">
								Share your progress on socials and tag{" "}
								<span className="text-[#c33124] font-semibold">
									@wemakedevs
								</span>{" "}
								and{" "}
								<span className="text-[#c33124] font-semibold">
									Cognee
								</span>
								. The top 10 social media posts get exclusive
								swag shipped to them.
							</p>
							<div className="flex items-center gap-3 bg-[#f1dcb4]/60 rounded-xl px-4 py-3 border border-[#c33124]/25">
								<Share2 className="w-5 h-5 text-[#c33124] shrink-0" />
								<span className="font-semibold text-[#c33124]">
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
