"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, MapPin, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DATA, venue } from "../data";
import { images } from "../images";

const facts = [
	{
		icon: CalendarDays,
		label: "Date",
		value: venue.dateLabel,
		sub: "Doors 08:30 · drinks until 19:30",
	},
	{
		icon: MapPin,
		label: "Venue",
		value: venue.name,
		sub: `${venue.host} · ${venue.shortAddress}`,
	},
	{
		icon: Ticket,
		label: "Entry",
		value: "Free",
		sub: "Capacity capped at 300",
	},
];

const ConferenceHero = () => {
	return (
		<div className="relative overflow-x-clip">
			{/* ── Backdrop: the venue itself, dimmed so text stays readable ── */}
			<div className="absolute -top-24 inset-x-0 bottom-0 z-0 pointer-events-none overflow-hidden">
				<Image
					src={images.venue}
					alt=""
					fill
					priority
					sizes="100vw"
					className="object-cover object-center"
				/>
				{/* The photo is shot in full daylight, so it needs a heavy scrim. */}
				<div className="absolute inset-0 bg-[#08090b]/80" />
				<div className="absolute inset-0 bg-gradient-to-r from-[#08090b] via-[#08090b]/85 to-[#08090b]/55" />
				<div className="absolute inset-0 bg-gradient-to-b from-[#08090b]/70 via-transparent to-[#08090b]" />
				<div className="absolute inset-x-0 top-0 h-24 bg-[#08090b]" />
				<div className="absolute inset-x-0 top-24 h-40 bg-gradient-to-b from-[#08090b] to-transparent" />
			</div>

			<ViewContainer className="relative z-20 pt-14 md:pt-16 pb-14">
				{/* ── Event wordmark line (the "Hello San Francisco" strip) ── */}
				<motion.div
					className="flex flex-wrap items-center gap-3 mb-7"
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span className="text-lg md:text-xl font-black text-[#f5f7fa] tracking-tight">
						{DATA.greeting}
					</span>
					<span className="hidden sm:inline text-[#3c4152]">/</span>
					<span className="hidden sm:inline font-mono text-xs uppercase tracking-[0.16em] text-[#8b93a7]">
						{DATA.tagline}
					</span>
				</motion.div>

				{/* ── Eyebrow ── */}
				<motion.span
					className="inline-flex items-center gap-2 rounded-full border border-[#2be38b]/40 bg-[#2be38b]/10 px-4 py-2 font-mono text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-[#2be38b]"
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.08 }}
				>
					◆ One Day · In Person · San Francisco
				</motion.span>

				{/* ── Title ── */}
				<motion.h1
					className="mt-6 text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-[-0.035em] text-[#f5f7fa] glow-orange"
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
					<span className="text-[#e5502a]">Edition 2</span>
				</motion.h1>

				{/* ── Sub ── */}
				<motion.p
					className="mt-6 max-w-2xl text-base md:text-xl leading-relaxed text-[#c0c1c3]"
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.3 }}
				>
					{DATA.description}
				</motion.p>

				{/* ── Facts ── */}
				<motion.div
					className="mt-9 flex flex-wrap gap-3"
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.4 }}
				>
					{facts.map(fact => {
						const Icon = fact.icon;
						return (
							<div
								key={fact.label}
								className="dossier-card rounded-xl px-5 py-3.5 flex items-start gap-3"
							>
								<Icon className="w-5 h-5 text-[#ea6e4a] mt-0.5 shrink-0" />
								<div>
									<span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#2be38b]">
										{fact.label}
									</span>
									<span className="block text-[15px] font-bold text-[#f5f7fa]">
										{fact.value}
									</span>
									<span className="block text-[13px] text-[#8b93a7]">
										{fact.sub}
									</span>
								</div>
							</div>
						);
					})}
				</motion.div>

				{/* ── CTAs ── */}
				<motion.div
					className="mt-9 flex flex-wrap items-center gap-4"
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.5 }}
				>
					<Link href="#register" className="agent-btn text-lg">
						<Ticket className="w-5 h-5" />
						{DATA.cta.label}
					</Link>
					<Link
						href="#agenda"
						className="sz-ghost-btn inline-flex items-center gap-2 rounded-xl border border-[#3c4152] px-6 py-3.5 font-bold text-[#f5f7fa] transition-all duration-300 hover:border-[#5fe9ff] hover:text-[#5fe9ff]"
					>
						View the Agenda
						<ArrowUpRight className="w-5 h-5" />
					</Link>
					<span className="text-[13px] text-[#62687c] max-w-xs">
						Free entry, capacity capped at 300. Registration is now
						full &mdash; join the waitlist.
					</span>
				</motion.div>

				{/* ── Presented / sponsored by ── */}
				<motion.div
					className="mt-14 pt-8 border-t border-[#3c4152]/60 flex flex-wrap items-center gap-x-7 gap-y-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.75 }}
				>
					<span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#62687c]">
						Presented by
					</span>
					<span className="text-lg font-black text-[#f5f7fa] tracking-tight">
						WeMakeDevs
					</span>
					<span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#62687c]">
						Sponsored by
					</span>
					<span className="text-lg font-black text-[#e5502a] tracking-tight">
						SigNoz
					</span>
					<span className="text-lg font-black text-[#f5f7fa] tracking-tight">
						Bright&nbsp;Data
					</span>
				</motion.div>
			</ViewContainer>
		</div>
	);
};

export default ConferenceHero;
