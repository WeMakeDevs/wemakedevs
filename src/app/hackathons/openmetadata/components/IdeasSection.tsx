"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import {
	Bot,
	Eye,
	MessageSquare,
	Plug,
	Shield,
	Wrench,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
	brain: <Bot className="w-7 h-7 text-slate-900" />,
	eye: <Eye className="w-7 h-7 text-slate-900" />,
	plug: <Plug className="w-7 h-7 text-slate-900" />,
	wrench: <Wrench className="w-7 h-7 text-slate-900" />,
	message: <MessageSquare className="w-7 h-7 text-slate-900" />,
	shield: <Shield className="w-7 h-7 text-slate-900" />,
};

const paradoxes = [
	{
		id: "T-01",
		title: "MCP Ecosystem & AI Agents",
		icon: "brain",
		description:
			"Build MCP servers, AI agents, or intelligent assistants that interact with OpenMetadata's APIs. Think auto-classification, smart data discovery, or natural language metadata queries.",
		gradient: "from-violet-500 to-purple-600",
		shadowColor: "shadow-violet-500/30",
		borderGlow: "hover:shadow-[0_0_24px_rgba(139,92,246,0.3)]",
		label: "Paradox #T-01",
	},
	{
		id: "T-02",
		title: "Data Observability",
		icon: "eye",
		description:
			"Create monitoring dashboards, data quality alert systems, anomaly detection tools, or pipeline health monitors that leverage OpenMetadata's observability features.",
		gradient: "from-blue-500 to-cyan-600",
		shadowColor: "shadow-blue-500/30",
		borderGlow: "hover:shadow-[0_0_24px_rgba(59,130,246,0.3)]",
		label: "Paradox #T-02",
	},
	{
		id: "T-03",
		title: "Connectors & Ingestion",
		icon: "plug",
		description:
			"Build new connectors for data sources, improve ingestion frameworks, create ETL integrations, or extend metadata ingestion to new platforms and databases.",
		gradient: "from-green-500 to-emerald-600",
		shadowColor: "shadow-green-500/30",
		borderGlow: "hover:shadow-[0_0_24px_rgba(34,197,94,0.3)]",
		label: "Paradox #T-03",
	},
	{
		id: "T-04",
		title: "Developer Tooling & CI/CD",
		icon: "wrench",
		description:
			"Build CLI tools, GitHub Actions, CI/CD integrations, IDE plugins, or developer-facing utilities that make working with metadata effortless.",
		gradient: "from-amber-500 to-orange-600",
		shadowColor: "shadow-amber-500/30",
		borderGlow: "hover:shadow-[0_0_24px_rgba(245,158,11,0.3)]",
		label: "Paradox #T-04",
	},
	{
		id: "T-05",
		title: "Community & Comms Apps",
		icon: "message",
		description:
			"Build Slack bots, notification systems, collaboration tools, or community dashboards that leverage OpenMetadata to keep teams informed and aligned.",
		gradient: "from-pink-500 to-rose-600",
		shadowColor: "shadow-pink-500/30",
		borderGlow: "hover:shadow-[0_0_24px_rgba(236,72,153,0.3)]",
		label: "Paradox #T-05",
	},
	{
		id: "T-06",
		title: "Governance & Classification",
		icon: "shield",
		description:
			"Build governance automation, auto-tagging, PII detection, compliance tools, or policy enforcement systems powered by OpenMetadata's classification capabilities.",
		gradient: "from-red-500 to-rose-600",
		shadowColor: "shadow-red-500/30",
		borderGlow: "hover:shadow-[0_0_24px_rgba(239,68,68,0.3)]",
		label: "Paradox #T-06",
	},
];

const containerVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const IdeasSection = () => {
	return (
		<div className="py-20">
			<ViewContainer>
				{/* Section Header */}
				<div className="text-center mb-16">
					<motion.div
						className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"
						initial={{ opacity: 0, y: -12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
						6 Temporal Paradoxes Detected
					</motion.div>

					<motion.h2
						className="text-4xl md:text-5xl font-black italic uppercase bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent mb-4"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.55, delay: 0.1 }}
					>
						Choose Your Timeline
					</motion.h2>

					<motion.p
						className="text-lg text-slate-400 max-w-3xl mx-auto mb-4"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.55, delay: 0.2 }}
					>
						Six alternative realities have fractured the data timeline. Each is an
						unsolved paradox waiting for a time traveler to fix it. Pick your reality,
						build your solution, and restore order to the metadata universe.
					</motion.p>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<Link
							href="https://github.com/orgs/open-metadata/projects/107/views/1"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 mt-2 text-amber-400 hover:text-amber-300 font-semibold underline decoration-2 underline-offset-4 transition-colors"
						>
							View all project ideas on GitHub →
						</Link>
					</motion.div>
				</div>

				{/* Paradox Cards */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
				>
					{paradoxes.map((p) => (
						<motion.div
							key={p.id}
							variants={cardVariants}
							className={`group relative rounded-2xl border border-slate-700/50 p-6 transition-all duration-300 ${p.borderGlow} cursor-default overflow-hidden glass-card`}
						>
							{/* Corner tag */}
							<div className="absolute top-3 right-3">
								<span className="font-mono text-[9px] text-slate-500 tracking-widest">{p.label}</span>
							</div>

							{/* Subtle corner glow on hover */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent" />

							<div className="flex items-start gap-4 mb-4">
								<div
									className={`bg-gradient-to-br ${p.gradient} p-3 rounded-xl shadow-lg ${p.shadowColor} group-hover:scale-110 transition-transform duration-300 shrink-0`}
								>
									{iconMap[p.icon]}
								</div>
								<h3 className="text-xl font-bold text-amber-400 mt-1 leading-tight">
									{p.title}
								</h3>
							</div>
							<p className="text-slate-300 leading-relaxed text-sm md:text-base">
								{p.description}
							</p>
						</motion.div>
					))}
				</motion.div>

				{/* CTA */}
				<motion.div
					className="mt-12 text-center"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<Link
						href="https://github.com/orgs/open-metadata/projects/107/views/1"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-amber-500/10 border-2 border-amber-500/30 hover:bg-amber-500/20 transition-all duration-300 text-amber-400 font-bold text-lg hover:shadow-[0_0_24px_rgba(245,158,11,0.2)]"
					>
						<span>⚡</span>
						Browse All Paradoxes on the Project Board
					</Link>
				</motion.div>
			</ViewContainer>
		</div>
	);
};

export default IdeasSection;
