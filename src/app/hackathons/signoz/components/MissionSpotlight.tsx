"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const takeaways = [
	"Working instrumentation for an AI system you can take back to your own stack",
	"Straight answers on cost and latency from people running this at scale",
	"A full hands-on workshop, from zero to end-to-end traces",
	"An open observability clinic where the SigNoz team instruments your stack",
	"Breakfast, lunch and a networking hour at the venue",
	"No vendor-pitch keynotes",
];

const MissionSpotlight = () => {
	return (
		<div className="py-20">
			<ViewContainer>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
					{/* ── Copy ── */}
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					>
						<span className="sz-eyebrow">
							Agents of SigNoz · AI Observability Conference
						</span>

						<h2 className="mt-6 text-3xl md:text-[2.75rem] leading-[1.08] font-black uppercase tracking-[-0.02em] text-[#f5f7fa]">
							See Inside{" "}
							<span className="text-[#e5502a]">Everything</span>{" "}
							You Ship
						</h2>

						<div className="mt-6 space-y-4 text-base md:text-[17px] leading-relaxed text-[#c0c1c3]">
							<p>
								AI became easy to build and hard to explain. One
								request now fans out across model calls, tool
								invocations and retrieval hops, and when it
								slows, triples in cost, or quietly returns
								nonsense, the stack trace tells you nothing.
							</p>
							<p>
								This is a day with the engineers who solved that
								in production. You will see how they instrument
								agents, what they actually alert on, and what
								token spend did to their budgets. Then bring
								your own stack to the afternoon clinic and leave
								with it instrumented.
							</p>
						</div>

						<Link
							href="#schedule"
							className="sz-ghost-btn mt-8 inline-flex items-center gap-2 rounded-lg border border-[#3c4152] px-6 py-3.5 font-semibold text-[#e8eaee] transition-all hover:border-[#8b93a7] hover:text-[#f5f7fa]"
						>
							View the schedule
							<ArrowUpRight className="w-4 h-4" />
						</Link>
					</motion.div>

					{/* ── What the day gets you ── */}
					<motion.div
						className="dossier-card rounded-2xl p-8"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.7,
							delay: 0.1,
							ease: [0.16, 1, 0.3, 1],
						}}
					>
						<h3 className="text-xl font-extrabold text-[#f5f7fa]">
							What you get out of the day
						</h3>
						<ul className="mt-6 grid gap-4">
							{takeaways.map(item => (
								<li key={item} className="flex gap-3">
									<Check className="mt-1 h-4 w-4 shrink-0 text-[#2be38b]" />
									<span className="text-[15px] leading-relaxed text-[#c0c1c3]">
										{item}
									</span>
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default MissionSpotlight;
