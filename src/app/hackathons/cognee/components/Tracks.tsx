"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import {
	Bot,
	GraduationCap,
	Headphones,
	Search,
	Sparkles,
	Workflow,
} from "lucide-react";
import Link from "next/link";

const tracks = [
	{
		id: "01",
		title: "Personal Memory Agents",
		icon: Bot,
		description:
			"Assistants that remember every conversation, preference, and decision across infinite sessions. Your AI finally stops asking the same question twice.",
		gradient: "from-[#e23b2d] to-[#c33124]",
	},
	{
		id: "02",
		title: "Research & Knowledge Copilots",
		icon: Search,
		description:
			"Ingest papers, docs, and the web into a living knowledge graph, then recall answers with deep graph traversals. Think Andrej Karpathy Wiki, but yours.",
		gradient: "from-[#e7a92b] to-[#c8901a]",
	},
	{
		id: "03",
		title: "Never-Forget Workflows",
		icon: Workflow,
		description:
			"Automations and pipelines that carry context between runs. Build agents that learn from yesterday and act smarter today.",
		gradient: "from-[#0e8a80] to-[#0c736b]",
	},
	{
		id: "04",
		title: "Self-Improving Agents",
		icon: Sparkles,
		description:
			"Use improve()/memify to enrich memory and adapt weights from feedback so your agent gets sharper the more it's used.",
		gradient: "from-[#e0762a] to-[#cf5f1c]",
	},
	{
		id: "05",
		title: "Support & Customer Memory",
		icon: Headphones,
		description:
			"Support bots that remember a customer's full history, past tickets, and context, no more 'can you repeat your account number?'",
		gradient: "from-[#c33124] to-[#e0762a]",
	},
	{
		id: "06",
		title: "Learning & Tutoring Tools",
		icon: GraduationCap,
		description:
			"Tutors that track what a learner already knows, adapt to their pace, and build a personalized knowledge map over time.",
		gradient: "from-[#0e8a80] to-[#e7a92b]",
	},
];

const containerVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};

const Tracks = () => {
	return (
		<div className="py-20">
			<ViewContainer>
				<div className="text-center mb-14">
					<motion.div
						className="inline-flex items-center gap-2 bg-[#b07d12]/10 border border-[#b07d12]/30 text-[#8a5a00] px-5 py-2 rounded-full text-sm font-semibold mb-6"
						initial={{ opacity: 0, y: -12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<span className="w-2 h-2 bg-[#b07d12] rounded-full bulb-flicker" />
						What Can You Build?
					</motion.div>

					<motion.h2
						className="text-3xl md:text-5xl font-black italic uppercase text-[#c33124] glow-red mb-4"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.55, delay: 0.1 }}
					>
						The Theme Is Open. Anything Goes.
					</motion.h2>

					<motion.p
						className="text-lg text-[#6b513a] max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.55, delay: 0.2 }}
					>
						Build{" "}
						<span className="text-[#c33124] font-semibold">
							anything you want
						</span>
						: agents, apps, tools, games, automations, as long as
						you use{" "}
						<Link
							href="https://github.com/topoteretes/cognee"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#8a5a00] underline hover:text-[#c33124]"
						>
							Cognee
						</Link>{" "}
						for memory. The examples below are just inspiration to
						get the ideas flowing. They are{" "}
						<span className="text-[#c33124] font-semibold">
							examples only
						</span>
						, not requirements.
					</motion.p>
				</div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
				>
					{tracks.map(t => {
						const Icon = t.icon;
						return (
							<motion.div
								key={t.id}
								variants={cardVariants}
								className="group relative rounded-2xl p-6 cursor-default overflow-hidden paper-card"
							>
								<div className="absolute top-3 right-3">
									<span className="font-mono text-[10px] text-[#b09475] tracking-widest">
										EXAMPLE #{t.id}
									</span>
								</div>
								<div className="flex items-start gap-4 mb-4">
									<div
										className={`bg-gradient-to-br ${t.gradient} p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0`}
									>
										<Icon className="w-7 h-7 text-white" />
									</div>
									<h3 className="text-lg font-bold text-[#c33124] mt-1 leading-tight">
										{t.title}
									</h3>
								</div>
								<p className="text-[#5a4632] leading-relaxed text-sm md:text-base">
									{t.description}
								</p>
							</motion.div>
						);
					})}
				</motion.div>

				<motion.p
					className="text-center text-[#6b513a] mt-10 max-w-2xl mx-auto"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					Got a wilder idea? Even better. Surprise us, the only rule
					is that Cognee powers the memory.
				</motion.p>
			</ViewContainer>
		</div>
	);
};

export default Tracks;
