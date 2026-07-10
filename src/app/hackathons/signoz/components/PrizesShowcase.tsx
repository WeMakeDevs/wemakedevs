"use client";

import {
	ArrowUpRight,
	Award,
	Briefcase,
	CalendarCheck,
	Share2,
	Star,
	Trophy,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DATA } from "../data";
import { images } from "../images";

// ─── Product images ───────────────────────────────────────────────────────────
const MacBookImg = () => (
	<Image
		src={images.macbook}
		alt="Apple MacBook Air"
		className="max-h-full w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
	/>
);
const IPhoneImg = () => (
	<Image
		src={images.iphone}
		alt="Apple iPhone Air"
		className="max-h-full w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
	/>
);
const IPadImg = () => (
	<Image
		src={images.ipad}
		alt="Apple iPad Air"
		className="max-h-full w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
	/>
);
const AirPodsImg = () => (
	<Image
		src={images.airpods}
		alt="Apple AirPods Pro 3"
		className="max-h-full w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
	/>
);
const BeatsImg = () => (
	<Image
		src={images.beats}
		alt="Beats Powerbeats Pro 2"
		className="max-h-full w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
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
		className="mib-glass-bg group relative rounded-2xl p-6 border transition-all duration-300 overflow-hidden hover:-translate-y-1"
		style={{ borderColor: `${accentColor}55` }}
	>
		<div
			className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity"
			style={{ background: accentColor }}
		/>
		<div
			className="inline-block text-xs font-bold px-3 py-1 rounded-full border mb-5"
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
						$20,000 in prizes. Complete the mission, collect the
						reward.
					</p>
					<div className="inline-flex max-w-full items-center gap-3 px-5 py-3 rounded-2xl mib-glass-bg border border-[#ffcd56]/50 shadow-md">
						<span className="text-2xl shrink-0">🕶️</span>
						<span className="text-base md:text-xl font-bold text-[#ffcd56] text-left">
							Every member of a winning team receives the full
							prize!
						</span>
					</div>
				</div>

				<div className="space-y-8">
					{/* Pre-event prize · Best Blogs (highlighted first) */}
					<div className="relative rounded-3xl p-6 md:p-10 overflow-hidden mib-glass-bg border-2 border-[#ffcd56]/60 shadow-[0_18px_44px_rgba(255,205,86,0.18)]">
						<div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-[#ffcd56]/20 rounded-full blur-3xl" />
						<div className="relative z-10 flex flex-col md:flex-row gap-8 md:items-center">
							<div className="flex-1">
								<div className="inline-flex items-center gap-2 bg-[#ffcd56]/12 border border-[#ffcd56]/50 text-[#ffcd56] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-5">
									<Star className="w-3.5 h-3.5" /> Pre-Event
									Prize · Best Blogs
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f5] mb-3">
									Kick things off with the blog challenge
								</h3>
								<p className="text-[#c0c1c3] leading-relaxed mb-6">
									Write about your build, your journey, or how
									SigNoz gives your systems total
									observability. The more detailed, the
									better. You have until{" "}
									<span className="text-[#ffcd56] font-semibold">
										{DATA.blogWinnersDate}
									</span>{" "}
									to write and submit your blog, and the best
									blogs win your choice of{" "}
									<span className="text-[#ffcd56] font-semibold">
										AirPods Pro 3 or Beats Powerbeats Pro 2
									</span>
									.
								</p>
								<div className="flex flex-wrap gap-3 mb-6">
									<div className="flex items-center gap-3 bg-[#0b0c0e] rounded-xl px-4 py-3 border border-[#ffcd56]/25">
										<Star className="w-5 h-5 text-[#ffcd56] shrink-0" />
										<span className="font-semibold text-[#ffcd56]">
											AirPods Pro 3 or Beats Powerbeats
											Pro 2
										</span>
									</div>
									<div className="flex items-center gap-3 bg-[#0b0c0e] rounded-xl px-4 py-3 border border-[#ffcd56]/25">
										<CalendarCheck className="w-5 h-5 text-[#ffcd56] shrink-0" />
										<span className="font-semibold text-[#ffcd56]">
											Winners announced{" "}
											{DATA.blogWinnersDate}
										</span>
									</div>
								</div>
								<Link
									href={DATA.blogSubmissionUrl || "#"}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ffcd56] to-[#d5aa45] hover:opacity-90 transition-opacity text-[#16181d] font-bold shadow-md"
								>
									Submit Your Blog
									<ArrowUpRight className="w-5 h-5" />
								</Link>
							</div>
							<div className="w-full md:w-80 shrink-0 h-52 flex items-center justify-center gap-4">
								<AirPodsImg />
								<BeatsImg />
							</div>
						</div>
					</div>

					{/* Main prizes */}
					<div className="relative rounded-3xl p-6 md:p-10 overflow-hidden mib-glass-bg border border-[#3c4152] shadow-[0_18px_44px_rgba(0,0,0,0.6)]">
						<div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-[#e5502a]/15 rounded-full blur-3xl" />
						<div className="pointer-events-none absolute -bottom-20 -left-20 w-56 h-56 bg-[#2be38b]/10 rounded-full blur-3xl" />

						<div className="relative z-10">
							<div className="flex items-center gap-4 mb-10">
								<div className="bg-[#e5502a]/15 border border-[#e5502a]/40 p-3 rounded-xl">
									<Award className="w-7 h-7 text-[#ea6e4a]" />
								</div>
								<div>
									<h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f5]">
										Get the Apple Air Ecosystem
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
									title="MacBook Air"
									subtitle="One per team member, or the equivalent cash amount, for the best AI & agent observability build on SigNoz"
									icon={<MacBookImg />}
									accentColor="#ea6e4a"
								/>
								<PrizeCard
									place="Track 02 · Signals & Dashboards"
									title="iPad Air"
									subtitle="One per team member, or the equivalent cash amount, for the best OpenTelemetry instrumentation & dashboard build"
									icon={<IPadImg />}
									accentColor="#ffcd56"
								/>
								<PrizeCard
									place="Track 03 · Build Your Own"
									title="iPhone Air"
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
											Top blogs get job interviews at
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
							. The top 10 social media posts get exclusive swag
							shipped to them.
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
	);
};

export default PrizesShowcase;
