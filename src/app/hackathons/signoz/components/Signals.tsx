"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { Activity, GitBranch, ScrollText, TriangleAlert } from "lucide-react";

const signals = [
	{
		fn: "Traces",
		icon: GitBranch,
		color: "#e5502a",
		desc: "Follow every request across services and agent steps. See exactly where latency hides with distributed tracing built on OpenTelemetry.",
	},
	{
		fn: "Metrics",
		icon: Activity,
		color: "#2be38b",
		desc: "Track latency, throughput, error rates, token costs, and custom business metrics with the Query Builder, PromQL, or ClickHouse SQL.",
	},
	{
		fn: "Logs",
		icon: ScrollText,
		color: "#ffcd56",
		desc: "Ingest logs at scale and correlate them with traces and metrics in a single pane, so a spike always tells you its story.",
	},
	{
		fn: "Alerts & Exceptions",
		icon: TriangleAlert,
		color: "#ea6e4a",
		desc: "Set alerts on any signal and catch exceptions before users do. The agency gets notified the moment something goes dark.",
	},
];

const Signals = () => {
	return (
		<div className="py-20">
			<ViewContainer>
				<div className="text-center mb-12">
					<span className="inline-flex items-center gap-2 bg-[#2be38b]/10 border border-[#2be38b]/30 text-[#2be38b] px-5 py-2 rounded-full text-sm font-semibold mb-6">
						📡 One Platform, Every Signal
					</span>
					<h2 className="text-3xl md:text-5xl font-black uppercase text-[#f5f5f5] glow-orange">
						One Stop Observability Platform. Total Recall.
					</h2>
					<p className="text-lg text-[#c0c1c3] max-w-3xl mx-auto mt-4">
						SigNoz helps you observe every signal your systems and
						agents emit, such as traces, metrics, logs, and token
						costs, on one open platform.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
					{/* Signals */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{signals.map((op, i) => {
							const Icon = op.icon;
							return (
								<motion.div
									key={op.fn}
									className="dossier-card rounded-2xl p-5"
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
									<div className="mb-2">
										<span
											className="font-bold text-lg"
											style={{ color: op.color }}
										>
											{op.fn}
										</span>
									</div>
									<p className="text-[#c0c1c3] text-sm leading-relaxed">
										{op.desc}
									</p>
								</motion.div>
							);
						})}
					</div>

					{/* Demo video */}
					<motion.div
						className="rounded-2xl overflow-hidden border border-[#3c4152] mib-glass-bg shadow-[0_18px_40px_rgba(0,0,0,0.6)]"
						initial={{ opacity: 0, scale: 0.96 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="flex items-center gap-2 px-4 py-3 border-b border-[#3c4152] bg-[#0e0f13]/80">
							<span className="w-3 h-3 rounded-full bg-[#e5484d]" />
							<span className="w-3 h-3 rounded-full bg-[#ffcd56]" />
							<span className="w-3 h-3 rounded-full bg-[#2be38b]" />
							<span className="ml-3 font-mono text-xs text-[#62687c]">
								agents-of-signoz.mov
							</span>
						</div>
						<video
							className="w-full h-auto block"
							autoPlay
							muted
							loop
							playsInline
							preload="metadata"
						>
							<source
								src="/hackathons/signoz/movie.mov"
								type="video/quicktime"
							/>
						</video>
					</motion.div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default Signals;
