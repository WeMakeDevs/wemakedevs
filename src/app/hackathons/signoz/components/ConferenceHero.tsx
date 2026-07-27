"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DATA, venue } from "../data";
import { images } from "../images";
import { BrightDataLogo, SigNozLogo } from "./BrandLogos";

const facts = [
	{ icon: CalendarDays, value: venue.dateLabel },
	{ icon: MapPin, value: `${venue.name}, San Francisco` },
];

const ConferenceHero = () => {
	return (
		<div className="relative overflow-x-clip">
			{/* ── Backdrop: the venue itself, dimmed hard so the copy stays legible ── */}
			<div className="absolute -top-24 inset-x-0 bottom-0 z-0 pointer-events-none overflow-hidden">
				<Image
					src={images.venue}
					alt=""
					fill
					priority
					sizes="100vw"
					className="object-cover object-center"
				/>
				{/* Flat knock-down first, then a directional scrim behind the copy. */}
				<div className="absolute inset-0 bg-[#08090b]/55" />
				<div className="absolute inset-0 bg-gradient-to-r from-[#08090b]/95 via-[#08090b]/75 to-[#08090b]/35" />
				<div className="absolute inset-0 bg-gradient-to-b from-[#08090b]/70 via-transparent to-[#08090b]" />
				<div className="absolute inset-x-0 top-0 h-24 bg-[#08090b]" />
				<div className="absolute inset-x-0 top-24 h-24 bg-gradient-to-b from-[#08090b] to-transparent" />
			</div>

			<ViewContainer className="relative z-20 pt-14 md:pt-16 pb-14">
				{/* ── Event wordmark line (the "Hello San Francisco" strip) ── */}
				<motion.div
					className="flex flex-wrap items-center gap-3 mb-7"
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span className="text-lg md:text-xl font-bold text-[#f5f7fa] tracking-tight">
						{DATA.greeting}
					</span>
					<span className="hidden sm:inline text-[#3c4152]">/</span>
					<span className="hidden sm:inline font-mono text-xs uppercase tracking-[0.16em] text-[#8b93a7]">
						{DATA.tagline}
					</span>
				</motion.div>

				{/* ── Eyebrow ── */}
				<motion.span
					className="inline-flex items-center gap-2.5 rounded-full border border-[#3c4152] bg-[#101116]/70 px-4 py-2 font-mono text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[#c7ccd6] backdrop-blur-sm"
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.08 }}
				>
					<span className="h-1.5 w-1.5 rounded-full bg-[#e5502a]" />
					One Day · In Person · San Francisco
				</motion.span>

				{/* ── Title ── */}
				<motion.h1
					className="mt-6 text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-[-0.035em] text-[#f5f7fa]"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						delay: 0.15,
						ease: [0.16, 1, 0.3, 1],
					}}
				>
					Agents of SigNoz
					<br />
					<span className="text-[#e5502a]">Edition II</span>
				</motion.h1>

				{/* ── Sub ── */}
				<motion.p
					className="mt-6 max-w-2xl text-base md:text-xl leading-relaxed text-[#d4d7dd]"
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.3 }}
				>
					{DATA.description}
				</motion.p>

				{/* ── Date & venue, then the two actions ── */}
				<motion.div
					className="mt-10 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center"
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.4 }}
				>
					{facts.map(fact => {
						const Icon = fact.icon;
						return (
							<div
								key={fact.value}
								className="inline-flex items-center gap-2.5 self-start rounded-lg border border-[#2f3441] bg-[#0e1014]/80 px-4 py-2.5 backdrop-blur-sm"
							>
								<Icon className="h-4 w-4 shrink-0 text-[#8b93a7]" />
								<span className="text-[14.5px] font-semibold text-[#e8eaee]">
									{fact.value}
								</span>
							</div>
						);
					})}
				</motion.div>

				<motion.div
					className="mt-7 flex flex-wrap items-center gap-3.5"
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.5 }}
				>
					<Link href="#register" className="agent-btn">
						{DATA.cta.label}
					</Link>
					<Link
						href="#schedule"
						className="sz-ghost-btn inline-flex items-center gap-2 rounded-lg border border-[#3c4152] px-6 py-3.5 font-semibold text-[#e8eaee] transition-all hover:border-[#8b93a7] hover:text-[#f5f7fa]"
					>
						View the Schedule
						<ArrowUpRight className="h-4 w-4" />
					</Link>
				</motion.div>

				{/* ── Presented / sponsored by ── */}
				<motion.div
					className="mt-14 pt-8 border-t border-[#3c4152]/60 flex flex-wrap items-center gap-x-8 gap-y-5"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.75 }}
				>
					<div className="flex items-center gap-3.5">
						<span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#62687c]">
							Presented by
						</span>
						<span className="text-lg font-bold text-[#f5f7fa] tracking-tight">
							WeMakeDevs
						</span>
					</div>

					<div className="flex flex-wrap items-center gap-x-7 gap-y-4">
						<span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#62687c]">
							Sponsored by
						</span>
						<SigNozLogo className="text-lg font-bold tracking-tight text-[#f5f7fa]" />
						<BrightDataLogo className="h-[22px] w-auto text-[#f5f7fa]" />
					</div>
				</motion.div>
			</ViewContainer>
		</div>
	);
};

export default ConferenceHero;
