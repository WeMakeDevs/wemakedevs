"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const ProblemSolution = () => {
	return (
		<ViewContainer className="py-20">
			<div className="text-center mb-12">
				<span className="sz-eyebrow mb-6">
					Why we&apos;re doing this
				</span>
				<h2 className="text-3xl md:text-5xl font-black uppercase text-[#f5f5f5]">
					Your AI Agents Are a{" "}
					<span className="text-[#e5502a]">Black Box</span>
				</h2>
				<p className="text-lg text-[#c0c1c3] max-w-3xl mx-auto mt-4">
					AI is eating software, and nobody can see inside it.
					We&apos;re here to fix that.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
				{/* The Problem */}
				<motion.div
					className="dossier-card rounded-2xl p-8 border-l-4 border-l-[#e5484d]"
					initial={{ opacity: 0, x: -24 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="flex items-center gap-3 mb-5">
						<div className="bg-[#e5484d]/12 border border-[#e5484d]/30 p-3 rounded-xl">
							<EyeOff className="w-7 h-7 text-[#e5484d]" />
						</div>
						<h3 className="text-2xl font-black uppercase text-[#e5484d]">
							Flying Blind
						</h3>
					</div>
					<p className="text-[#d4d6da] leading-relaxed text-base md:text-lg">
						AI agents are chaining LLM calls, invoking tools,
						hitting vector DBs, and making decisions{" "}
						<span className="text-[#e5484d] font-semibold">
							autonomously
						</span>
						. But when latency spikes, costs explode, or an agent
						hallucinates in production, you&apos;re flying blind.
						You can&apos;t debug what you can&apos;t see.
					</p>
				</motion.div>

				{/* The Solution */}
				<motion.div
					className="dossier-card rounded-2xl p-8 border-l-4 border-l-[#2be38b]"
					initial={{ opacity: 0, x: 24 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					<div className="flex items-center gap-3 mb-5">
						<div className="bg-[#2be38b]/12 border border-[#2be38b]/30 p-3 rounded-xl">
							<Eye className="w-7 h-7 text-[#2be38b]" />
						</div>
						<h3 className="text-2xl font-black uppercase text-[#2be38b]">
							Total Visibility
						</h3>
					</div>
					<p className="text-[#d4d6da] leading-relaxed text-base md:text-lg">
						<span className="text-[#e5502a] font-semibold">
							SigNoz
						</span>{" "}
						gives you full visibility into every AI workflow. Trace
						each agent step, monitor token costs, and correlate LLM
						responses with downstream failures.{" "}
						<span className="text-[#2be38b] font-semibold">
							OpenTelemetry-native
						</span>
						, so your instrumentation works everywhere. One
						platform. Every AI signal.
					</p>
				</motion.div>
			</div>
		</ViewContainer>
	);
};

export default ProblemSolution;
