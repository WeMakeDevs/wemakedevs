"use client";

import {
	Award,
	Briefcase,
	GitPullRequest,
	Share2,
	Star,
	Trophy,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { images } from "../images";

// ─── Product images ───────────────────────────────────────────────────────────
const MacBookImg = () => (
	<Image
		src={images.macbook}
		alt="Apple MacBook"
		className="max-h-full w-auto object-contain drop-shadow-[0_8px_16px_rgba(120,80,30,0.25)]"
	/>
);
const IPhoneImg = () => (
	<Image
		src={images.iphone}
		alt="Apple iPhone 17"
		className="max-h-full w-auto object-contain drop-shadow-[0_8px_16px_rgba(120,80,30,0.25)]"
	/>
);
const KeychronImg = () => (
	<Image
		src={images.keychron}
		alt="Keychron mechanical keyboard"
		className="w-full h-full object-cover object-center"
	/>
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
					<div className="inline-flex max-w-full items-center gap-3 px-5 py-3 rounded-2xl bg-[#fffdf6] border-2 border-[#e7a92b] shadow-md">
						<span className="text-2xl shrink-0">🎰</span>
						<span className="text-base md:text-xl font-bold text-[#c33124] text-left">
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
									icon={<MacBookImg />}
									accentColor="#c33124"
								/>
								<PrizeCard
									place="Best Use of Cognee Cloud"
									title="Apple iPhone 17"
									subtitle="One per team member, or the equivalent cash amount, for the best build on Cognee Cloud"
									icon={<IPhoneImg />}
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
												You can start now, no need to
												wait for the hackathon to begin.
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

								{/* How it works */}
								<div className="mt-5 pt-5 border-t border-[#0e8a80]/20">
									<p className="text-[#0e8a80] font-bold text-sm uppercase tracking-wide mb-3">
										How it works
									</p>
									<ol className="list-decimal list-outside space-y-2 pl-5 text-[#5a4632] text-sm">
										<li>
											Find an issue you want to work on in
											the Cognee GitHub repository.
										</li>
										<li>
											Comment on the issue saying
											you&apos;d like to work on it and
											tag the maintainers.
										</li>
										<li>
											Wait until the issue is assigned to
											you.
										</li>
										<li>
											Work on it and submit a pull
											request. Do not spam the maintainers
											to review it, they will get to it.
										</li>
									</ol>
								</div>

								{/* Disclaimer */}
								<div className="mt-4 rounded-xl border border-[#c33124]/30 bg-[#c33124]/8 px-4 py-3">
									<p className="text-[#c33124] text-sm font-semibold">
										⚠️ Spamming the GitHub repo with
										AI-generated PRs or issues will get you
										permanently banned from WeMakeDevs
										events and disqualified.
									</p>
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
							<div className="mb-5 w-[70%] mx-auto aspect-[5/2] overflow-hidden flex items-center justify-center drop-shadow-[0_8px_16px_rgba(120,80,30,0.2)]">
								<KeychronImg />
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
								<Link
									href="https://x.com/cognee_"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#c33124] font-semibold underline hover:text-[#931f15]"
								>
									Cognee
								</Link>
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
