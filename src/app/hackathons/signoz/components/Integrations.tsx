"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import {
	ArrowUpRight,
	Boxes,
	Code2,
	SlidersHorizontal,
	TerminalSquare,
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
		name: "OpenTelemetry SDKs",
		color: "#e5502a",
		body: "Auto-instrument apps in Python, JS, Go, Java, and more. Point the OTLP exporter at SigNoz and signals start flowing.",
		links: [
			{
				label: "Instrumentation guides",
				href: "https://signoz.io/docs/instrumentation/",
			},
		],
	},
	{
		icon: TerminalSquare,
		name: "SigNoz MCP",
		color: "#ffcd56",
		body: "Give your IDE agent or SRE copilot live access to your telemetry through the SigNoz MCP server.",
		links: [
			{
				label: "MCP docs",
				href: "https://signoz.io/docs/",
			},
		],
	},
	{
		icon: Workflow,
		name: "n8n & Workflows",
		color: "#2be38b",
		body: "Wire end-to-end observability into n8n automations and event-driven workflows without custom backends.",
		links: [
			{
				label: "Integrations",
				href: "https://signoz.io/docs/integrations/",
			},
		],
	},
	{
		icon: Boxes,
		name: "Kubernetes & Infra",
		color: "#ea6e4a",
		body: "Ship logs, metrics, and traces from K8s, Docker, and cloud infra with the OpenTelemetry Collector and Helm charts.",
		links: [
			{
				label: "K8s setup",
				href: "https://signoz.io/docs/tutorial/kubernetes-infra-metrics/",
			},
		],
	},
];

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
						Wire up your stack, plug into your favorite tools, and
						ship instrumented systems faster.
					</p>
				</div>

				{/* Setup highlight */}
				<motion.div
					className="max-w-6xl mx-auto mb-8"
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

				{/* Integration cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
					{integrations.map((it, i) => {
						const Icon = it.icon;
						return (
							<motion.div
								key={it.name}
								className="dossier-card rounded-2xl p-6 flex flex-col"
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
									className="text-lg font-bold mb-3"
									style={{ color: it.color }}
								>
									{it.name}
								</h3>
								<p className="text-[#c0c1c3] text-sm leading-relaxed mb-5 flex-1">
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

				<div className="text-center mt-10">
					<Link
						href="https://signoz.io/docs/integrations/"
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
