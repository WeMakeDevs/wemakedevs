"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Compass, Skull, Swords } from "lucide-react";
import type { MouseEvent } from "react";

const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
	const rect = e.currentTarget.getBoundingClientRect();
	const x = ((e.clientX - rect.left) / rect.width) * 100;
	const y = ((e.clientY - rect.top) / rect.height) * 100;
	e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
	e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
};

type Voyage = {
	name: string;
	sources: string;
	description: string;
};

const enterpriseVoyages: Voyage[] = [
	{
		name: "Coding Agent Debugger",
		sources: "GitHub + Sentry + Slack + Datadog",
		description:
			"Agent joins failed CI builds with error logs, service metrics, and related team discussions to diagnose root cause in one query.",
	},
	{
		name: "AI SRE Investigator",
		sources: "PagerDuty + Datadog + GitHub + StatusGator",
		description:
			"Agent correlates high-urgency incidents with recent deploys, metrics, and third-party service status to auto-generate incident summaries.",
	},
	{
		name: "Sprint Health Dashboard",
		sources: "Linear + GitHub + Slack + Confluence",
		description:
			"Agent joins open issues with PR status, relevant threads, and project docs to show what's blocked and what's in review.",
	},
	{
		name: "Customer Escalation Agent",
		sources: "Intercom + Sentry + Grafana + Slack",
		description:
			"Agent joins open tickets with error spikes, service health dashboards, and internal discussions so support crews get full technical context without pinging engineering.",
	},
	{
		name: "Security & Compliance Monitor",
		sources: "GitHub + Slack + Notion + OSV*",
		description:
			"Agent surfaces risky access changes, secrets in commits, and cross-references them with known CVE databases and internal policy docs.",
	},
];

const personalVoyages: Voyage[] = [
	{
		name: '"What should I work on?" Assistant',
		sources: "Gmail* + Google Calendar* + Notion",
		description:
			"Agent checks your inbox, calendar, and notes to prioritise your morning.",
	},
	{
		name: "Content Creator Dashboard",
		sources: "YouTube* + Twitter* + Discord*",
		description:
			"Agent tracks your views, engagement, and community activity across platforms in one query.",
	},
	{
		name: "Open Source Maintainer's First Mate",
		sources: "GitHub + Slack",
		description:
			"Agent triages new issues, identifies duplicates, and drafts release notes from merged PRs.",
	},
	{
		name: "Personal Health Monitor",
		sources: "Apple Health* + Google Sheets* + Notion",
		description:
			"Agent correlates your sleep, steps, and workout data with mood logs to spot patterns.",
	},
	{
		name: "Study Planner Agent",
		sources: "Google Calendar* + Notion + Google Drive*",
		description:
			"Agent joins your class schedule, study notes, and assignments to tell you what's due, what to revise, and what you're behind on.",
	},
];

type TrackCardProps = {
	title: string;
	tagline: string;
	description: string;
	voyages: Voyage[];
	accentColor: string;
	borderColor: string;
	bgColor: string;
	Icon: typeof Swords;
	direction: "left" | "right";
	delay?: number;
};

const TrackCard = ({
	title,
	tagline,
	description,
	voyages,
	accentColor,
	borderColor,
	bgColor,
	Icon,
	direction,
	delay = 0,
}: TrackCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: direction === "left" ? -30 : 30 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.6, delay }}
			onMouseMove={handleMouseMove}
			className="map-card parchment-bg rounded-2xl p-8 group"
			style={{ borderWidth: 1, borderStyle: "solid", borderColor }}
		>
			<div className="relative z-10">
				<div className="flex items-center gap-4 mb-6">
					<div
						className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors"
						style={{
							backgroundColor: bgColor,
							borderColor,
							borderWidth: 1,
							borderStyle: "solid",
						}}
					>
						<Icon
							className="w-7 h-7"
							style={{ color: accentColor }}
						/>
					</div>
					<div>
						<h3 className="text-2xl font-bold text-[#fdf6e3]">
							{title}
						</h3>
						<p className="text-[#586e75] text-sm">{tagline}</p>
					</div>
				</div>

				<p className="text-[#93a1a1] leading-relaxed mb-6">
					{description}
				</p>

				<p
					className="font-semibold text-xs uppercase tracking-widest mb-4"
					style={{ color: accentColor }}
				>
					Example Voyages
				</p>
				<div className="space-y-4">
					{voyages.map(voyage => (
						<div
							key={voyage.name}
							className="flex items-start gap-3 group/item"
						>
							<Skull
								className="w-4 h-4 mt-1 shrink-0 transition-colors"
								style={{ color: `${accentColor}99` }}
							/>
							<div className="flex-1">
								<div className="flex flex-wrap items-baseline gap-x-2">
									<span className="text-[#fdf6e3] text-base font-semibold">
										{voyage.name}
									</span>
									<span className="text-[#586e75] text-sm">
										· {voyage.sources}
									</span>
								</div>
								<p className="text-[#93a1a1] text-sm leading-relaxed mt-1">
									{voyage.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

const TracksSection = () => {
	return (
		<div className="py-24 relative">
			<div className="max-w-6xl mx-auto px-4 md:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold gold-shimmer-text mb-4">
						The Treasure Map
					</h2>
					<p className="text-[#93a1a1] text-lg max-w-2xl mx-auto">
						Two paths to glory on the high seas of data. Choose your
						adventure.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<TrackCard
						title="Track 1: Build an Enterprise Agent"
						tagline="Arm your organisation with a smarter crew"
						description="Build an agent that retrieves data across multiple sources using Coral to solve a real problem for an organisation. Showcase how Coral powers it."
						voyages={enterpriseVoyages}
						accentColor="#d4af37"
						borderColor="rgba(212, 175, 55, 0.18)"
						bgColor="rgba(212, 175, 55, 0.08)"
						Icon={Swords}
						direction="left"
					/>

					<TrackCard
						title="Track 2: Build a Personal Agent"
						tagline="Every pirate needs a first mate"
						description="Build an agent that makes your personal workflow more productive. Connect the tools you use every day. Coral handles the rest."
						voyages={personalVoyages}
						accentColor="#2aa198"
						borderColor="rgba(42, 161, 152, 0.18)"
						bgColor="rgba(42, 161, 152, 0.08)"
						Icon={Compass}
						direction="right"
						delay={0.15}
					/>
				</div>

				{/* Footer note about missing sources */}
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="mt-10 max-w-3xl mx-auto"
				>
					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl border border-[#d4af37]/15 bg-[#d4af37]/[0.04]">
						<p className="text-[#93a1a1] text-sm leading-relaxed flex-1">
							<span className="text-[#d4af37] font-semibold">
								*
							</span>{" "}
							Source not built yet? Build it yourself and earn a
							special bounty!
						</p>
						<a
							href="https://withcoral.com/docs/guides/write-a-custom-source"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-[#d4af37] text-sm font-semibold whitespace-nowrap hover:text-[#e8c35a] transition-colors"
						>
							Custom Source Spec Guide
							<ArrowRight className="w-4 h-4" />
						</a>
					</div>
				</motion.div>

				{/* Scroll to bounties CTA */}
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="mt-8 text-center"
				>
					<a
						href="#special-bounties"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37] font-semibold text-sm hover:bg-[#d4af37]/15 hover:border-[#d4af37]/50 transition-all"
					>
						⚔️ See Special Bounties
						<ArrowDown className="w-4 h-4" />
					</a>
				</motion.div>
			</div>
		</div>
	);
};

export default TracksSection;
