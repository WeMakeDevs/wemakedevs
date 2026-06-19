"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import {
	ArrowUpRight,
	Boxes,
	Code2,
	SlidersHorizontal,
	SquareTerminal,
	Workflow,
} from "lucide-react";
import Link from "next/link";

type IntegrationLink = { label: string; href: string };

const integrations: {
	icon: typeof Code2;
	name: string;
	color: string;
	body: string;
	links: IntegrationLink[];
}[] = [
	{
		icon: Code2,
		name: "Claude Code",
		color: "#c33124",
		body: "Give Claude Code local project memory so your IDE agent never forgets your codebase.",
		links: [
			{
				label: "Setup guide",
				href: "https://github.com/topoteretes/cognee-integrations/tree/main/integrations/claude-code",
			},
		],
	},
	{
		icon: SquareTerminal,
		name: "Codex",
		color: "#b07d12",
		body: "Add a persistent memory layer to Codex so it carries context across every session.",
		links: [
			{
				label: "Setup guide",
				href: "https://github.com/topoteretes/cognee-integrations/tree/main/integrations/codex",
			},
		],
	},
	{
		icon: Workflow,
		name: "n8n",
		color: "#0e8a80",
		body: "Build never-forget AI workflows in n8n without writing any backend code.",
		links: [
			{
				label: "Setup guide",
				href: "https://github.com/topoteretes/cognee-integrations/tree/main/integrations/n8n",
			},
		],
	},
	{
		icon: Boxes,
		name: "OpenClaw",
		color: "#e0762a",
		body: "Drop Cognee memory into OpenClaw with the official npm package or ready-made skills.",
		links: [
			{
				label: "npm package",
				href: "https://www.npmjs.com/package/@cognee/cognee-openclaw",
			},
			{
				label: "Skills guide",
				href: "https://github.com/topoteretes/cognee-integrations/tree/main/integrations/openclaw-skills",
			},
		],
	},
];

const Integrations = () => {
	return (
		<div className="py-20">
			<ViewContainer>
				<div className="text-center mb-12">
					<span className="inline-flex items-center gap-2 bg-[#0e8a80]/10 border border-[#0e8a80]/30 text-[#0e8a80] px-5 py-2 rounded-full text-sm font-semibold mb-6">
						🔌 Plug-and-Play
					</span>
					<h2 className="text-3xl md:text-5xl font-black italic uppercase text-[#c33124] glow-red">
						Don&apos;t Build It Alone
					</h2>
					<p className="text-lg text-[#6b513a] max-w-3xl mx-auto mt-4">
						You don&apos;t have to build custom agent frameworks
						from scratch. Wire up your stack, plug into your
						favorite tools, and ship faster.
					</p>
				</div>

				{/* Setup & Configuration highlight */}
				<motion.div
					className="max-w-6xl mx-auto mb-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<div className="rounded-2xl border-2 border-[#b07d12]/30 bg-[#fffdf6] p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-[0_8px_22px_rgba(120,80,30,0.12)]">
						<div className="flex items-start gap-4">
							<div className="bg-[#b07d12]/15 border border-[#b07d12]/40 p-3 rounded-xl shrink-0">
								<SlidersHorizontal className="w-6 h-6 text-[#b07d12]" />
							</div>
							<div>
								<h3 className="text-xl font-bold text-[#8a5a00] mb-1">
									Setup &amp; Configuration
								</h3>
								<p className="text-[#5a4632] text-sm leading-relaxed">
									Configure your LLM providers, vector stores,
									graph stores, and everything else you need
									to run Cognee your way.
								</p>
							</div>
						</div>
						<Link
							href="https://docs.cognee.ai/setup-configuration/overview"
							target="_blank"
							rel="noopener noreferrer"
							className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#e7a92b] to-[#c8901a] text-white font-bold hover:opacity-90 transition-opacity"
						>
							Configuration overview{" "}
							<ArrowUpRight className="w-4 h-4" />
						</Link>
					</div>
				</motion.div>

				{/* Integration cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
					{integrations.map((it, i) => {
						const Icon = it.icon;
						return (
							<motion.div
								key={it.name}
								className="paper-card rounded-2xl p-6 flex flex-col"
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.08 }}
							>
								<div
									className="inline-flex p-3 rounded-xl mb-4 w-fit"
									style={{
										background: `${it.color}18`,
										border: `1px solid ${it.color}55`,
									}}
								>
									<Icon
										className="w-6 h-6"
										style={{ color: it.color }}
									/>
								</div>
								<h3
									className="text-xl font-bold mb-3"
									style={{ color: it.color }}
								>
									{it.name}
								</h3>
								<p className="text-[#5a4632] text-sm leading-relaxed mb-5 flex-1">
									{it.body}
								</p>
								<div className="flex flex-wrap gap-x-4 gap-y-2">
									{it.links.map(l => (
										<Link
											key={l.href}
											href={l.href}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1 text-sm font-semibold hover:underline"
											style={{ color: it.color }}
										>
											{l.label}{" "}
											<ArrowUpRight className="w-4 h-4" />
										</Link>
									))}
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* View all integrations */}
				<div className="text-center mt-10">
					<Link
						href="https://github.com/topoteretes/cognee-integrations/tree/main/integrations"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#c33124]/10 border-2 border-[#c33124]/30 hover:bg-[#c33124]/20 transition-colors text-[#c33124] font-bold"
					>
						See all integrations &amp; guides{" "}
						<ArrowUpRight className="w-5 h-5" />
					</Link>
				</div>
			</ViewContainer>
		</div>
	);
};

export default Integrations;
