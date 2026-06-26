"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { ArrowUpRight, Plug, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

const Integrations = () => {
	return (
		<div className="py-20">
			<ViewContainer>
				<div className="text-center mb-12">
					<span className="inline-flex items-center gap-2 bg-[#ffcd56]/10 border border-[#ffcd56]/30 text-[#ffcd56] px-5 py-2 rounded-full text-sm font-semibold mb-6">
						🔌 OpenTelemetry-Native
					</span>
					<h2 className="text-3xl md:text-5xl font-black uppercase text-[#f5f5f5] glow-orange">
						Don&apos;t Build It Alone
					</h2>
					<p className="text-lg text-[#c0c1c3] max-w-3xl mx-auto mt-4">
						You don&apos;t have to write collectors from scratch.
						There are integrations with cloud providers, tools, and
						more, so you can wire up your stack, plug into your
						favorite services, and ship instrumented systems faster.
					</p>
				</div>

				<div className="max-w-4xl mx-auto space-y-6">
					{/* Setup highlight */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<div className="rounded-2xl border border-[#3c4152] bg-[#16181d] p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-[0_8px_22px_rgba(0,0,0,0.4)]">
							<div className="flex items-start gap-4">
								<div className="bg-[#ffcd56]/15 border border-[#ffcd56]/40 p-3 rounded-xl shrink-0">
									<SlidersHorizontal className="w-6 h-6 text-[#ffcd56]" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-[#ffcd56] mb-1">
										Self-host or SigNoz Cloud
									</h3>
									<p className="text-[#c0c1c3] text-sm leading-relaxed">
										Run SigNoz yourself with Docker or
										Kubernetes, or spin up SigNoz Cloud and
										start ingesting telemetry in minutes.
									</p>
								</div>
							</div>
							<Link
								href="https://signoz.io/docs/install/"
								target="_blank"
								rel="noopener noreferrer"
								className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#ea6e4a] to-[#e5502a] text-white font-bold hover:opacity-90 transition-opacity"
							>
								Install overview{" "}
								<ArrowUpRight className="w-4 h-4" />
							</Link>
						</div>
					</motion.div>

					{/* Integrations list highlight */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<div className="rounded-2xl border border-[#2be38b]/40 bg-[#2be38b]/8 p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-[0_8px_22px_rgba(0,0,0,0.4)]">
							<div className="flex items-start gap-4">
								<div className="bg-[#2be38b]/15 border border-[#2be38b]/40 p-3 rounded-xl shrink-0">
									<Plug className="w-6 h-6 text-[#2be38b]" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-[#2be38b] mb-1">
										Integrations with cloud providers, tools
										&amp; more
									</h3>
									<p className="text-[#c0c1c3] text-sm leading-relaxed">
										Connect SigNoz to AWS, GCP, and Azure,
										databases, message queues, web
										frameworks, and dozens of other tools.
										Browse the full integrations list to
										find yours.
									</p>
								</div>
							</div>
							<Link
								href="https://signoz.io/docs/integrations/integrations-list/"
								target="_blank"
								rel="noopener noreferrer"
								className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#2be38b] to-[#1fae6a] text-[#0b0c0e] font-bold hover:opacity-90 transition-opacity"
							>
								View integrations{" "}
								<ArrowUpRight className="w-4 h-4" />
							</Link>
						</div>
					</motion.div>
				</div>

				<div className="text-center mt-10">
					<Link
						href="https://signoz.io/docs/integrations/integrations-list/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#e5502a]/10 border border-[#e5502a]/40 hover:bg-[#e5502a]/20 transition-colors text-[#ea6e4a] font-bold"
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
