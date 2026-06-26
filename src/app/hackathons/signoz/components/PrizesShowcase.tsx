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
		className="max-h-full w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
	/>
);
const IPhoneImg = () => (
	<Image
		src={images.iphone}
		alt="Apple iPhone 17"
		className="max-h-full w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
	/>
);
const IPadImg = () => (
	<Image
		src={images.ipad}
		alt="Apple iPad"
		className="max-h-full w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
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
		className="group relative bg-[#16181d] rounded-2xl p-6 border transition-all duration-300 overflow-hidden"
		style={{ borderColor: `${accentColor}55` }}
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
				background: `${accentColor}1a`,
			}}
		>
			{place}
		</div>
		<div className="w-full h-24 mb-5 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
			{icon}
		</div>
		<h4 className="text-xl md:text-2xl font-bold text-[#f5f5f5] mb-1">
			{title}
		</h4>
		<p className="text-[#c0c1c3] text-sm">{subtitle}</p>
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
						<div className="bg-gradient-to-br from-[#ea6e4a] to-[#e5502a] p-5 rounded-2xl shadow-lg shadow-[#e5502a]/30">
							<Trophy className="w-10 h-10 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-black uppercase text-[#f5f5f5] glow-orange mb-4">
						The Bounty
					</h2>
					<p className="text-lg text-[#c0c1c3] max-w-2xl mx-auto mb-6">
						$10,000 in prizes. Complete the mission, collect the
						reward.
					</p>
					<div className="inline-flex max-w-full items-center gap-3 px-5 py-3 rounded-2xl bg-[#16181d] border border-[#ffcd56]/50 shadow-md">
						<span className="text-2xl shrink-0">🕶️</span>
						<span className="text-base md:text-xl font-bold text-[#ffcd56] text-left">
							Every member of a winning team receives the full
							prize!
						</span>
					</div>
				</div>

				<div className="space-y-8">
					{/* Main prizes */}
					<div className="relative rounded-3xl p-6 md:p-10 overflow-hidden bg-[#121317] border border-[#3c4152] shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
						<div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-[#e5502a]/15 rounded-full blur-3xl" />
						<div className="pointer-events-none absolute -bottom-20 -left-20 w-56 h-56 bg-[#2be38b]/10 rounded-full blur-3xl" />

						<div className="relative z-10">
							<div className="flex items-center gap-4 mb-10">
								<div className="bg-[#e5502a]/15 border border-[#e5502a]/40 p-3 rounded-xl">
									<Award className="w-7 h-7 text-[#ea6e4a]" />
								</div>
								<div>
									<h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f5]">
										Grand Prizes for All Team Members
									</h3>
									<p className="text-[#c0c1c3] text-sm mt-1">
										One prize per track · maximum team size
										of 4 · every member of a winning team
										gets the device
									</p>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
								<PrizeCard
									place="Track 01 · AI & Agent Observability"
									title="Apple MacBook"
									subtitle="One per team member, or the equivalent cash amount, for the best AI & agent observability build on SigNoz"
									icon={<MacBookImg />}
									accentColor="#ea6e4a"
								/>
								<PrizeCard
									place="Track 02 · Signals & Dashboards"
									title="Apple iPad"
									subtitle="One per team member, or the equivalent cash amount, for the best OpenTelemetry instrumentation & dashboard build"
									icon={<IPadImg />}
									accentColor="#ffcd56"
								/>
								<PrizeCard
									place="Track 03 · Build Your Own"
									title="Apple iPhone 17"
									subtitle="One per team member, or the equivalent cash amount, for the best build-anything project powered by SigNoz"
									icon={<IPhoneImg />}
									accentColor="#2be38b"
								/>
							</div>

							<div className="mt-8 rounded-2xl border border-[#e5502a]/40 bg-[#e5502a]/10 px-6 py-5">
								<div className="flex items-start gap-3">
									<Briefcase className="w-6 h-6 text-[#ea6e4a] shrink-0 mt-0.5" />
									<div>
										<p className="text-[#ea6e4a] font-bold text-lg">
											Top winners get job interviews at
											SigNoz
										</p>
										<p className="text-[#c0c1c3] text-sm">
											Showcase your skills directly to the
											team building the open-source
											observability platform. (Interviews
											do not guarantee a job, see the{" "}
											<Link
												href="/hackathons/signoz/rules"
												className="text-[#ffd778] underline hover:text-[#ea6e4a]"
											>
												rules
											</Link>
											.)
										</p>
									</div>
								</div>
							</div>

							{/* PR bounty */}
							<div className="mt-5 rounded-2xl border border-[#2be38b]/40 bg-[#2be38b]/10 px-6 py-5">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
									<div className="flex items-start gap-3">
										<GitPullRequest className="w-6 h-6 text-[#2be38b] shrink-0 mt-0.5" />
										<div>
											<p className="text-[#2be38b] font-bold text-lg">
												Open Source Track: $100 per PR ·
												Top 20 submissions
											</p>
											<p className="text-[#c0c1c3] text-sm">
												Find issues on the SigNoz GitHub
												repository and contribute to the
												open-source project. The top 20
												PR submissions earn $100 each.
												You can start now, no need to
												wait for the hackathon to begin.
											</p>
										</div>
									</div>
									<Link
										href="https://github.com/SigNoz/signoz/issues"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#2be38b]/50 text-[#2be38b] hover:bg-[#2be38b] hover:text-[#0b0c0e] transition-colors font-semibold text-sm shrink-0"
									>
										Browse issues
									</Link>
								</div>

								{/* How it works */}
								<div className="mt-5 pt-5 border-t border-[#2be38b]/20">
									<p className="text-[#2be38b] font-bold text-sm uppercase tracking-wide mb-3">
										How it works
									</p>
									<ol className="list-decimal list-outside space-y-2 pl-5 text-[#c0c1c3] text-sm">
										<li>
											Find an issue you want to work on in
											the SigNoz GitHub repository.
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
										<li>
											Keep it to a maximum of 5 PRs per
											person. Anyone who opens more than 5
											PRs will be banned, this keeps out
											AI-generated PR spam and gives
											everyone a fair chance to
											contribute.
										</li>
									</ol>
								</div>

								{/* Disclaimer */}
								<div className="mt-4 rounded-xl border border-[#e5484d]/40 bg-[#e5484d]/10 px-4 py-3">
									<p className="text-[#ea6d71] text-sm font-semibold">
										⚠️ Spamming the GitHub repo with
										AI-generated PRs or issues, or opening
										more than 5 PRs, will get you
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
						<div className="dossier-card rounded-2xl p-8">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-[#ffcd56] to-[#d5aa45] p-3 rounded-xl shadow-md">
									<Star className="w-6 h-6 text-[#16181d]" />
								</div>
								<h3 className="text-xl md:text-2xl font-bold text-[#ffcd56]">
									Side Track · Best Blogs
								</h3>
							</div>
							<div className="mb-5 w-[70%] mx-auto aspect-[5/2] overflow-hidden flex items-center justify-center rounded-lg drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
								<KeychronImg />
							</div>
							<p className="text-[#c0c1c3] leading-relaxed mb-6">
								Write about your build, your journey, or how
								SigNoz gives your systems total observability.
								The best blogs win a{" "}
								<span className="text-[#ffcd56] font-semibold">
									Keychron mechanical keyboard worth $120
								</span>
								.
							</p>
							<div className="flex items-center gap-3 bg-[#0b0c0e] rounded-xl px-4 py-3 border border-[#ffcd56]/25">
								<Star className="w-5 h-5 text-[#ffcd56] shrink-0" />
								<span className="font-semibold text-[#ffcd56]">
									Keychron Mechanical Keyboard ($120)
								</span>
							</div>
						</div>

						{/* Social posts */}
						<div className="dossier-card rounded-2xl p-8">
							<div className="flex items-center gap-4 mb-6">
								<div className="bg-gradient-to-br from-[#ea6e4a] to-[#e5502a] p-3 rounded-xl shadow-md">
									<Share2 className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl md:text-2xl font-bold text-[#ea6e4a]">
									Side Track · Social Buzz
								</h3>
							</div>
							<p className="text-[#c0c1c3] leading-relaxed mb-6">
								Share your progress on socials and tag{" "}
								<span className="text-[#ea6e4a] font-semibold">
									@wemakedevs
								</span>{" "}
								and{" "}
								<Link
									href="https://x.com/SigNozHQ"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#ea6e4a] font-semibold underline hover:text-[#ffd778]"
								>
									SigNoz
								</Link>
								. The top 10 social media posts get exclusive
								swag shipped to them.
							</p>
							<div className="flex items-center gap-3 bg-[#0b0c0e] rounded-xl px-4 py-3 border border-[#e5502a]/25">
								<Share2 className="w-5 h-5 text-[#ea6e4a] shrink-0" />
								<span className="font-semibold text-[#ea6e4a]">
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
