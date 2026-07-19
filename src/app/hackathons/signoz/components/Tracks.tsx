"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Globe, NotebookPen, Radio } from "lucide-react";
import Link from "next/link";
import { DATA } from "../data";

type Level = "starter" | "intermediate" | "advanced";

const tracks: {
	id: string;
	title: string;
	icon: typeof Bot;
	tag: string;
	accent: string;
	bg: string;
	builds: { name: string; level: Level }[];
}[] = [
	{
		id: "01",
		title: "AI & Agent Observability",
		icon: Bot,
		tag: "Trace, monitor, and debug AI-native systems",
		accent: "#ea6e4a",
		bg: "rgba(229,80,42,0.12)",
		builds: [
			{
				name: "AI agents with E2E observability on SigNoz",
				level: "intermediate",
			},
			{
				name: "Self-hosted inference observability (vLLM)",
				level: "advanced",
			},
			{ name: "SRE Sidekick with SigNoz MCP", level: "intermediate" },
			{ name: "n8n workflows with E2E observability", level: "starter" },
			{
				name: "Self-healing infra with SigNoz metrics",
				level: "advanced",
			},
		],
	},
	{
		id: "02",
		title: "Signals & Dashboards",
		icon: Radio,
		tag: "OpenTelemetry instrumentation & Query Builder mastery",
		accent: "#ffcd56",
		bg: "rgba(255,205,86,0.12)",
		builds: [
			{
				name: "Custom OTel auto-instrumentation library",
				level: "advanced",
			},
			{ name: "Cross-signal panel for one service", level: "starter" },
			{ name: "Query Builder vs PromQL/LogQL", level: "intermediate" },
			{
				name: "Multi-cluster telemetry on one SigNoz",
				level: "advanced",
			},
			{ name: "SLO/error-budget dashboard pack", level: "intermediate" },
		],
	},
	{
		id: "03",
		title: "Build Your Own",
		icon: Globe,
		tag: "Observe anything with SigNoz",
		accent: "#2be38b",
		bg: "rgba(43,227,139,0.12)",
		builds: [
			{
				name: "Observability for a Slack/Telegram bot or IoT fleet",
				level: "starter",
			},
			{
				name: "Monitor a trading bot or data pipeline",
				level: "intermediate",
			},
			{
				name: "Bridge an unsupported data source into SigNoz",
				level: "advanced",
			},
			{
				name: "Monitor anything weird with a live dashboard",
				level: "starter",
			},
			{
				name: "Ecosystem plugin: Backstage, Terraform, or Helm chart",
				level: "advanced",
			},
		],
	},
];

const containerVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};

const Tracks = () => {
	return (
		<div className="py-20">
			<ViewContainer>
				<div className="text-center mb-14">
					<motion.div
						className="inline-flex items-center gap-2 bg-[#2be38b]/10 border border-[#2be38b]/30 text-[#2be38b] px-5 py-2 rounded-full text-sm font-semibold mb-6"
						initial={{ opacity: 0, y: -12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						⬢ Three Tracks
					</motion.div>

					<motion.h2
						className="text-3xl md:text-5xl font-black uppercase text-[#f5f5f5] glow-orange mb-4"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.55, delay: 0.1 }}
					>
						Pick Your Mission
					</motion.h2>

					<motion.p
						className="text-lg text-[#c0c1c3] max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.55, delay: 0.2 }}
					>
						Three tracks, one platform. Choose the track that fits
						your skills, or bring your own idea. Every project must
						use or integrate with{" "}
						<Link
							href={DATA.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#ea6e4a] underline hover:text-[#ffd778]"
						>
							SigNoz
						</Link>
						. The example builds below are{" "}
						<span className="text-[#ea6e4a] font-semibold">
							inspiration only
						</span>
						, not requirements.
					</motion.p>
				</div>

				{/* ── Project submission callout ────────────────────────── */}
				<motion.div
					className="mb-12 rounded-2xl border border-[#ffcd56]/30 bg-[#ffcd56]/8 p-6 md:p-8"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<div className="flex flex-col md:flex-row md:items-center gap-6">
						<div className="flex items-start gap-4 flex-1">
							<div className="w-12 h-12 shrink-0 rounded-xl grid place-items-center border border-[#ffcd56]/40 bg-[#ffcd56]/12 text-[#ffcd56]">
								<NotebookPen className="w-6 h-6" />
							</div>
							<div>
								<h3 className="text-xl font-bold text-[#ffcd56] mb-1">
									Submission form coming soon
								</h3>
								<p className="text-[#c0c1c3] leading-relaxed">
									The project submission form will be updated
									soon. For now, just start building across any
									of the three tracks. Not sure how to present
									your work? Read the{" "}
									<Link
										href="/hackathons/signoz/blog-guide"
										className="text-[#ffd778] underline hover:text-[#ea6e4a]"
									>
										blog guide
									</Link>{" "}
									in the meantime.
								</p>
							</div>
						</div>
						<span className="shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[#ffcd56]/40 bg-[#ffcd56]/10 text-[#ffcd56] font-bold">
							Form updated soon
						</span>
					</div>

					{/* Disclaimer */}
					<div className="mt-6 pt-6 border-t border-[#ffcd56]/20 text-[#c0c1c3] leading-relaxed text-sm">
						<p>
							<span className="text-[#ffcd56] font-semibold">
								A kind note on the write-up:
							</span>{" "}
							Publish your blog on a proper blogging platform,{" "}
							<span className="text-[#ffcd56] font-semibold">
								Medium
							</span>
							,{" "}
							<span className="text-[#ffcd56] font-semibold">
								Dev.to
							</span>
							, or{" "}
							<span className="text-[#ffcd56] font-semibold">
								Substack
							</span>{" "}
							are all great choices. A{" "}
							<span className="text-[#f5f5f5] font-semibold">
								LinkedIn social post is not a blog
							</span>
							, so please don&apos;t submit one. Put genuine effort
							into it. AI slop and rushed, low-effort blogs will not
							win any prizes. We want to hear about your real
							experience, what you built, what broke, and what you
							learned along the way.
						</p>
					</div>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
				>
					{tracks.map(t => {
						const Icon = t.icon;
						return (
							<motion.div
								key={t.id}
								variants={cardVariants}
								className="group relative rounded-2xl p-6 cursor-default overflow-hidden dossier-card flex flex-col"
							>
								<div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#62687c] font-bold mb-3">
									Track {t.id}
								</div>
								<div
									className="w-12 h-12 rounded-xl grid place-items-center mb-4 border border-[#3c4152]"
									style={{
										background: t.bg,
										color: t.accent,
									}}
								>
									<Icon className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-bold text-[#f5f5f5] mb-1">
									{t.title}
								</h3>
								<p
									className="text-sm font-semibold mb-4"
									style={{ color: t.accent }}
								>
									{t.tag}
								</p>
								<div className="text-[11px] uppercase tracking-[0.14em] text-[#62687c] font-bold mb-2">
									Example builds
								</div>
								<div className="flex-1">
									{t.builds.map(b => (
										<div
											key={b.name}
											className="flex items-start gap-2 py-2.5 border-t border-[#23262e]"
										>
											<span className="text-[#d4d6da] text-sm leading-snug flex-1">
												{b.name}
											</span>
										</div>
									))}
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				<div className="text-center mt-10">
					<Link
						href="https://github.com/orgs/SigNoz/projects/65"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#e5502a]/10 border border-[#e5502a]/40 hover:bg-[#e5502a]/20 transition-colors text-[#ea6e4a] font-bold"
					>
						Browse all project ideas on GitHub{" "}
						<ArrowUpRight className="w-5 h-5" />
					</Link>
				</div>
			</ViewContainer>
		</div>
	);
};

export default Tracks;
