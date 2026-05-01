"use client";

import { motion } from "framer-motion";
import { Anchor, Ship, Skull, Waves } from "lucide-react";
import type { MouseEvent } from "react";

const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
	const rect = e.currentTarget.getBoundingClientRect();
	const x = ((e.clientX - rect.left) / rect.width) * 100;
	const y = ((e.clientY - rect.top) / rect.height) * 100;
	e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
	e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
};

const agentExamples = [
	{ name: "Coding Agent Debugger", detail: "GitHub + Sentry + Slack" },
	{ name: "AI SRE Investigator", detail: "PagerDuty + GitHub + Datadog" },
	{ name: "Sprint Health Dashboard", detail: "Linear + GitHub + Slack" },
	{ name: "Customer Escalation Agent", detail: "Support + Sentry + Slack" },
	{ name: "Security Monitor", detail: "GitHub + Slack + Notion" },
];

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
						Two paths to glory on the high seas of data. Choose your adventure.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Track 1: Build an Agent */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.6 }}
						onMouseMove={handleMouseMove}
						className="map-card parchment-bg rounded-2xl border border-[#d4af37]/15 p-8 group"
					>
						<div className="relative z-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-14 h-14 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center group-hover:bg-[#d4af37]/15 transition-colors">
									<Ship className="w-7 h-7 text-[#d4af37]" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-[#fdf6e3]">
										Track 1: Build an Agent
									</h3>
									<p className="text-[#586e75] text-sm">Captain your own data vessel</p>
								</div>
							</div>

							<p className="text-[#93a1a1] leading-relaxed mb-6">
								Build an agent for a real use case that retrieves data across multiple sources using Coral.
								Describe how you did it and what makes it great, ideally showcasing Coral&apos;s power.
							</p>

							<p className="text-[#d4af37] font-semibold text-xs uppercase tracking-widest mb-4">
								Example Voyages
							</p>
							<div className="space-y-2.5">
								{agentExamples.map((ex) => (
									<div key={ex.name} className="flex items-start gap-3 group/item">
										<Skull className="w-3.5 h-3.5 text-[#d4af37]/60 mt-1 shrink-0 group-hover/item:text-[#d4af37] transition-colors" />
										<div>
											<span className="text-[#fdf6e3] text-sm font-medium">{ex.name}</span>
											<span className="text-[#586e75] text-sm ml-2">{ex.detail}</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</motion.div>

					{/* Track 2: Build a Source Connector */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.6, delay: 0.15 }}
						onMouseMove={handleMouseMove}
						className="map-card parchment-bg rounded-2xl border border-[#2aa198]/15 p-8 group"
					>
						<div className="relative z-10">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-14 h-14 rounded-xl bg-[#2aa198]/10 border border-[#2aa198]/20 flex items-center justify-center group-hover:bg-[#2aa198]/15 transition-colors">
									<Anchor className="w-7 h-7 text-[#2aa198]" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-[#fdf6e3]">
										Track 2: Build a Source Connector
									</h3>
									<p className="text-[#586e75] text-sm">Expand the Coral reef</p>
								</div>
							</div>

							<p className="text-[#93a1a1] leading-relaxed mb-6">
								Connect any API you wish Coral supported. Build a custom Coral source for an API that
								doesn&apos;t exist yet. This is a high-value contribution that grows the sources ecosystem.
							</p>

							<p className="text-[#2aa198] font-semibold text-xs uppercase tracking-widest mb-4">
								How to get started
							</p>
							<div className="space-y-2.5">
								<div className="flex items-start gap-3">
									<Waves className="w-3.5 h-3.5 text-[#2aa198]/60 mt-1 shrink-0" />
									<span className="text-[#93a1a1] text-sm">
										Follow the{" "}
										<a href="https://withcoral.com/docs/guides/write-a-custom-source" target="_blank" rel="noopener noreferrer" className="text-[#2aa198] underline decoration-[#2aa198]/30 hover:decoration-[#2aa198] transition-colors">
											custom source guide
										</a>{" "}in the Coral docs
									</span>
								</div>
								<div className="flex items-start gap-3">
									<Waves className="w-3.5 h-3.5 text-[#2aa198]/60 mt-1 shrink-0" />
									<span className="text-[#93a1a1] text-sm">
										Describe how you built it and what challenges you solved
									</span>
								</div>
								<div className="flex items-start gap-3">
									<Waves className="w-3.5 h-3.5 text-[#2aa198]/60 mt-1 shrink-0" />
									<span className="text-[#93a1a1] text-sm">
										Bonus: build a &quot;wanted&quot; source (Hubspot, Asana, Zendesk, Airtable, etc.) for extra bounty prizes
									</span>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default TracksSection;
