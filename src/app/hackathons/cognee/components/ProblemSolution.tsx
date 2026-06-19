"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { BrainCircuit, GlassWater } from "lucide-react";

const ProblemSolution = () => {
	return (
		<ViewContainer className="py-20">
			<div className="text-center mb-12">
				<span className="inline-flex items-center gap-2 bg-[#c33124]/10 border border-[#c33124]/30 text-[#c33124] px-5 py-2 rounded-full text-sm font-semibold mb-6">
					<span className="w-2 h-2 bg-[#c33124] rounded-full bulb-flicker" />
					Why we&apos;re doing this
				</span>
				<h2 className="text-3xl md:text-5xl font-black italic uppercase text-[#c33124] glow-red">
					Your AI Has a Hangover
				</h2>
				<p className="text-lg text-[#6b513a] max-w-3xl mx-auto mt-4">
					It wakes up every morning with no memory of last night.
					We&apos;re here to fix that.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
				{/* The Problem */}
				<motion.div
					className="paper-card rounded-2xl p-8 border-l-4 border-l-[#c33124]"
					initial={{ opacity: 0, x: -24 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="flex items-center gap-3 mb-5">
						<div className="bg-[#c33124]/12 border border-[#c33124]/30 p-3 rounded-xl">
							<GlassWater className="w-7 h-7 text-[#c33124]" />
						</div>
						<h3 className="text-2xl font-black italic uppercase text-[#c33124]">
							The Problem
						</h3>
					</div>
					<p className="text-[#4a3624] leading-relaxed text-base md:text-lg">
						When you call an LLM, every request is{" "}
						<span className="text-[#c33124] font-semibold">
							stateless
						</span>
						. It doesn&apos;t remember what happened in the last
						session, and it quickly spills out of its context
						window. So your agent forgets the groom, loses the plot,
						and wakes up on the roof asking{" "}
						<span className="italic text-[#b07d12]">
							&ldquo;where&apos;s my context?&rdquo;
						</span>
					</p>
				</motion.div>

				{/* The Solution */}
				<motion.div
					className="paper-card rounded-2xl p-8 border-l-4 border-l-[#0e8a80]"
					initial={{ opacity: 0, x: 24 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					<div className="flex items-center gap-3 mb-5">
						<div className="bg-[#0e8a80]/12 border border-[#0e8a80]/30 p-3 rounded-xl">
							<BrainCircuit className="w-7 h-7 text-[#0e8a80]" />
						</div>
						<h3 className="text-2xl font-black italic uppercase text-[#0e8a80]">
							The Solution
						</h3>
					</div>
					<p className="text-[#4a3624] leading-relaxed text-base md:text-lg">
						Use{" "}
						<span className="text-[#0e8a80] font-semibold">
							Cognee
						</span>{" "}
						to build AI that does not forget. Give your agents a
						permanent, self-hosted,{" "}
						<span className="text-[#b07d12] font-semibold">
							hybrid graph-vector memory layer
						</span>{" "}
						so they can learn, adapt, and carry context across
						infinite sessions. No more amnesia. No more &ldquo;what
						happened last night?&rdquo;
					</p>
				</motion.div>
			</div>
		</ViewContainer>
	);
};

export default ProblemSolution;
