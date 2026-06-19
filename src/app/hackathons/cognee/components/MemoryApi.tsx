"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { Brain, RefreshCw, Search, Trash2 } from "lucide-react";

const operations = [
	{
		fn: "remember()",
		icon: Brain,
		color: "#c33124",
		desc: "Ingest text, files, and URLs and permanently structure them into the knowledge graph.",
	},
	{
		fn: "recall()",
		icon: Search,
		color: "#0e8a80",
		desc: "Query memory, Cognee automatically routes the search between semantic similarity and deep graph traversals.",
	},
	{
		fn: "improve()",
		alias: "memify",
		icon: RefreshCw,
		color: "#e0762a",
		desc: "Run post-ingestion enrichment, prune stale nodes, and adapt weights based on user feedback.",
	},
	{
		fn: "forget()",
		icon: Trash2,
		color: "#b07d12",
		desc: "Surgically prune or delete datasets when they're no longer needed.",
	},
];

const codeSample = `import cognee

# 1. Give your agent a memory
await cognee.remember("Doug is the groom. The wedding is Sunday.")
await cognee.remember(file="vegas_receipts.pdf")

# 2. Ask it anything, across infinite sessions
answer = await cognee.recall("Where is Doug?")

# 3. Let the memory get smarter over time
await cognee.improve()   # a.k.a. memify

# 4. Surgically forget what no longer matters
await cognee.forget(dataset="last_nights_mistakes")`;

const MemoryApi = () => {
	return (
		<div className="py-20">
			<ViewContainer>
				<div className="text-center mb-12">
					<span className="inline-flex items-center gap-2 bg-[#b07d12]/10 border border-[#b07d12]/30 text-[#8a5a00] px-5 py-2 rounded-full text-sm font-semibold mb-6">
						🧠 The Core Memory Lifecycle
					</span>
					<h2 className="text-3xl md:text-5xl font-black italic uppercase text-[#c33124] glow-red">
						Four Operations. Total Recall.
					</h2>
					<p className="text-lg text-[#6b513a] max-w-3xl mx-auto mt-4">
						Cognee&apos;s memory API is dead simple. If The Wolfpack
						had this, they&apos;d have found Doug in one line of
						code.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
					{/* Operations */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{operations.map((op, i) => {
							const Icon = op.icon;
							return (
								<motion.div
									key={op.fn}
									className="paper-card rounded-2xl p-5"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: i * 0.1,
									}}
								>
									<div
										className="inline-flex p-3 rounded-xl mb-3"
										style={{
											background: `${op.color}18`,
											border: `1px solid ${op.color}55`,
										}}
									>
										<Icon
											className="w-6 h-6"
											style={{ color: op.color }}
										/>
									</div>
									<div className="flex items-baseline gap-2 mb-2">
										<code
											className="font-mono text-lg font-bold"
											style={{ color: op.color }}
										>
											{op.fn}
										</code>
										{op.alias && (
											<span className="text-xs font-mono text-[#9a8569]">
												/ {op.alias}
											</span>
										)}
									</div>
									<p className="text-[#5a4632] text-sm leading-relaxed">
										{op.desc}
									</p>
								</motion.div>
							);
						})}
					</div>

					{/* Code window (dark terminal for contrast) */}
					<motion.div
						className="rounded-2xl overflow-hidden border-2 border-[#b07d12]/30 bg-[#241712] shadow-[0_14px_32px_rgba(120,80,30,0.25)]"
						initial={{ opacity: 0, scale: 0.96 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#1a110d]">
							<span className="w-3 h-3 rounded-full bg-[#e23b2d]" />
							<span className="w-3 h-3 rounded-full bg-[#e7a92b]" />
							<span className="w-3 h-3 rounded-full bg-[#0e8a80]" />
							<span className="ml-3 font-mono text-xs text-[#d8c4a8]">
								wheres_my_context.py
							</span>
						</div>
						<pre className="p-5 overflow-x-auto text-[13px] leading-relaxed font-mono text-[#f3e7d2]">
							<code>{codeSample}</code>
						</pre>
					</motion.div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default MemoryApi;
