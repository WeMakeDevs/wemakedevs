"use client";

import { Award, Briefcase, Share2, Star, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
const LegoFerrariImg = () => (
	<Image
		src={images.legoFerrari}
		alt="LEGO Ferrari SF-24 set"
		className="max-h-full w-auto object-contain"
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
						</div>
					</div>

					{/* Best use of AWS */}
					<div className="relative rounded-3xl p-6 md:p-10 overflow-hidden mib-glass-bg border border-[#ff9900]/30 shadow-[0_18px_44px_rgba(0,0,0,0.6)]">
						<div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-[#ff9900]/12 rounded-full blur-3xl" />
						<div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
							<div className="flex-1">
								<div className="flex items-center gap-4 mb-6">
									<div className="bg-[#232f3e] border border-[#ff9900]/40 px-4 py-3 rounded-xl">
										<Image
											src={images.awsWhite}
											alt="AWS"
											className="h-7 w-auto"
										/>
									</div>
									<div>
										<h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f5]">
											Best Use of AWS
										</h3>
										<p className="text-[#c0c1c3] text-sm mt-1">
											Plus $100 in free credits for every
											participant
										</p>
									</div>
								</div>

								<p className="text-lg text-[#c0c1c3]">
									The team with the{" "}
									<span className="text-[#ff9900] font-bold">
										best use of AWS
									</span>{" "}
									wins an{" "}
									<span className="text-[#ff9900] font-bold">
										Amazon Echo Dot for every team member
									</span>
									. Sign up to the{" "}
									<Link
										href="https://bit.ly/aws-wmd"
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#ffd778] underline hover:text-[#ff9900]"
									>
										AWS Builder Center
									</Link>{" "}
									and build with AWS to be eligible.
								</p>
							</div>

							<div className="shrink-0 w-full md:w-60 h-44 flex items-center justify-center">
								<Image
									src={images.echoDot}
									alt="Amazon Echo Dot"
									className="max-h-full w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
								/>
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
							<div className="mb-5 w-full mx-auto h-52 flex items-center justify-center rounded-lg drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
								<LegoFerrariImg />
							</div>
							<p className="text-[#c0c1c3] leading-relaxed mb-6">
								Write about your build, your journey, or how
								SigNoz gives your systems total observability.
								Blogs must be published on the{" "}
								<Link
									href="https://bit.ly/aws-wmd"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#ffd778] underline hover:text-[#ffcd56]"
								>
									AWS Builder Center
								</Link>{" "}
								to qualify. The best blogs win a{" "}
								<span className="text-[#ffcd56] font-semibold">
									LEGO Ferrari SF-24 set worth $250
								</span>
								.
							</p>
							<div className="flex items-center gap-3 bg-[#0b0c0e] rounded-xl px-4 py-3 border border-[#ffcd56]/25">
								<Star className="w-5 h-5 text-[#ffcd56] shrink-0" />
								<span className="font-semibold text-[#ffcd56]">
									LEGO Ferrari SF-24 Set ($250)
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
