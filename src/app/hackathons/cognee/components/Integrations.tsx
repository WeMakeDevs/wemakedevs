"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Network, Workflow } from "lucide-react";
import Link from "next/link";

const integrations = [
	{
		icon: Network,
		audience: "LangGraph Developers",
		color: "#c33124",
		body: "Use cognee-integration-langgraph to easily spin up session-isolated memory tools for your graphs.",
		pkg: "cognee-integration-langgraph",
		href: "https://github.com/topoteretes/cognee",
	},
	{
		icon: Workflow,
		audience: "Workflow Automation (n8n)",
		color: "#e0762a",
		body: "Drop in n8n-nodes-cognee to build never-forget AI workflows without writing backend code.",
		pkg: "n8n-nodes-cognee",
		href: "https://github.com/topoteretes/cognee",
	},
	{
		icon: Code2,
		audience: "Claude Code & Cursor Users",
		color: "#0e8a80",
		body: "Build plugins or use the Model Context Protocol (MCP) server so your favorite IDE agents have local project memory.",
		pkg: "cognee MCP server",
		href: "https://docs.cognee.ai",
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
						from scratch. Leverage Cognee&apos;s plug-and-play
						integrations and ship faster.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{integrations.map((it, i) => {
						const Icon = it.icon;
						return (
							<motion.div
								key={it.audience}
								className="paper-card rounded-2xl p-6 flex flex-col"
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
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
									{it.audience}
								</h3>
								<p className="text-[#5a4632] text-sm leading-relaxed mb-5 flex-1">
									{it.body}
								</p>
								<div className="flex items-center justify-between gap-2">
									<code className="font-mono text-xs text-[#6b513a] bg-[#f1dcb4]/70 border border-[#b07d12]/25 rounded px-2 py-1 truncate">
										{it.pkg}
									</code>
									<Link
										href={it.href}
										target="_blank"
										rel="noopener noreferrer"
										className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold hover:underline"
										style={{ color: it.color }}
									>
										Docs{" "}
										<ArrowUpRight className="w-4 h-4" />
									</Link>
								</div>
							</motion.div>
						);
					})}
				</div>
			</ViewContainer>
		</div>
	);
};

export default Integrations;
