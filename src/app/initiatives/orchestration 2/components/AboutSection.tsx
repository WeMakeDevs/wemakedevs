"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { Cpu, GitBranch, Shield, Workflow } from "lucide-react";

const features = [
	{
		icon: Workflow,
		title: "Workflow Orchestration",
		description:
			"Coordinate complex pipelines across microservices, APIs, and data systems with declarative YAML.",
		color: "text-[#00cfb4]",
		borderColor: "border-[#00cfb4]/20",
		bgColor: "bg-[#00cfb4]/10",
	},
	{
		icon: GitBranch,
		title: "Open Source Standard",
		description:
			"Kestra is the open-source industry standard for orchestration, trusted by thousands of developers worldwide.",
		color: "text-purple-400",
		borderColor: "border-purple-500/20",
		bgColor: "bg-purple-500/10",
	},
	{
		icon: Shield,
		title: "Official Certification",
		description:
			"Earn a recognized credential that proves your orchestration skills to employers and the community.",
		color: "text-orange-400",
		borderColor: "border-orange-500/20",
		bgColor: "bg-orange-500/10",
	},
	{
		icon: Cpu,
		title: "Become the Architect",
		description:
			"Stop just writing code. Learn to design the systems that connect everything together.",
		color: "text-blue-400",
		borderColor: "border-blue-500/20",
		bgColor: "bg-blue-500/10",
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutSection = () => {
	return (
		<section id="about" className="py-20 md:py-28 scroll-mt-24 relative">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00cfb4]/[0.02] to-transparent" />
			<ViewContainer className="relative z-10">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">
						The Briefing
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
						Why Workflow Orchestration?
					</h2>
					<p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
						In modern dev, writing code is the easy part. The real
						challenge? Managing the flow between services, APIs, and
						data pipelines. That&apos;s where orchestration comes
						in, and where{" "}
						<span className="text-[#00cfb4] font-medium">
							Kestra
						</span>{" "}
						makes it seamless. New to this?{" "}
						<span className="text-white font-medium">
							Beginners are absolutely welcome
						</span>
						. The course starts from zero.
					</p>
				</motion.div>

				{/* Feature cards */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
				>
					{features.map(feature => (
						<motion.div
							key={feature.title}
							variants={itemVariants}
							className="glow-card p-6 md:p-8 group hover:bg-[#161636] transition-colors"
						>
							<div
								className={`w-12 h-12 rounded-xl ${feature.bgColor} ${feature.borderColor} border flex items-center justify-center mb-5`}
							>
								<feature.icon
									className={feature.color}
									size={24}
								/>
							</div>
							<h3 className="text-xl font-bold text-white mb-3">
								{feature.title}
							</h3>
							<p className="text-slate-400 leading-relaxed">
								{feature.description}
							</p>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom message */}
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="text-center text-slate-500 mt-12 text-base"
				>
					This isn&apos;t a sales pitch. It&apos;s a skill that makes
					you a better engineer.
				</motion.p>
			</ViewContainer>
		</section>
	);
};

export default AboutSection;
