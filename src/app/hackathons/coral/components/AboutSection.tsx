"use client";

import { motion } from "framer-motion";
import { Compass, Database, Lock, Zap } from "lucide-react";

const features = [
	{
		icon: Database,
		title: "Query Anything as SQL",
		description: "Any API, database, or file becomes a SQL table. No custom integrations needed.",
		color: "#d4af37",
	},
	{
		icon: Zap,
		title: "Cross-Source Joins",
		description: "Join GitHub + Slack + Sentry in a single query. Coral handles auth, pagination, and rate limits.",
		color: "#2aa198",
	},
	{
		icon: Lock,
		title: "100% Local",
		description: "Credentials, data, and usage history never leave your machine. No ETL, no warehouse.",
		color: "#859900",
	},
	{
		icon: Compass,
		title: "CLI or MCP",
		description: "Run Coral from the command line or through MCP. Schema learning and caching built in.",
		color: "#268bd2",
	},
];

const fadeUp = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
	}),
};

const AboutSection = () => {
	return (
		<div className="py-24 relative">
			<div className="max-w-6xl mx-auto px-4 md:px-8">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold gold-shimmer-text mb-4">
						Why Set Sail?
					</h2>
					<p className="text-[#93a1a1] text-lg max-w-3xl mx-auto leading-relaxed">
						In a world where AI agents need data from every corner
						of the seven seas, there&apos;s only one tool that lets
						them query it all as SQL.
					</p>
				</motion.div>

				{/* Description */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="max-w-4xl mx-auto text-center mb-20"
				>
					<div className="parchment-bg rounded-2xl border border-[#d4af37]/10 p-8 md:p-12 space-y-4 text-[#93a1a1] text-base md:text-lg leading-relaxed">
						<p>
							Building agents with MCP servers, CLI tools, and API
							wrappers? Every data source is a separate voyage.
							Your agent hops between them one at a time, stuffing
							the context window with raw responses, burning
							tokens at every port.
						</p>
						<p>
							<strong className="text-[#d4af37]">Coral</strong>{" "}
							gives your agent one map for all the seas. One SQL
							query. Multiple sources. Cross-source JOINs. Auth,
							pagination, rate limits, all handled below deck. The
							data resolves inside Coral, not inside your
							agent&apos;s head.
						</p>
						<p className="text-[#d4af37]/80 italic font-medium pt-2">
							One install. One query language. $10,000+ in
							treasure. ☠️
						</p>
					</div>
				</motion.div>

				{/* Feature cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{features.map((feature, i) => {
						const Icon = feature.icon;
						return (
							<motion.div
								key={feature.title}
								custom={i}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: "-60px" }}
								variants={fadeUp}
								className="group parchment-bg rounded-xl border border-[#d4af37]/10 p-6 hover:border-[#d4af37]/25 transition-all duration-300"
							>
								<div
									className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
									style={{ backgroundColor: `${feature.color}15`, border: `1px solid ${feature.color}30` }}
								>
									<Icon size={22} style={{ color: feature.color }} />
								</div>
								<h3 className="text-[#fdf6e3] font-bold text-lg mb-2">{feature.title}</h3>
								<p className="text-[#586e75] text-sm leading-relaxed">{feature.description}</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
