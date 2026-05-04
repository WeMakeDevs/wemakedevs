"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const recentCompleters = [
	{ name: "Arjun S.", time: "2 hours ago", avatar: "AS" },
	{ name: "Priya M.", time: "5 hours ago", avatar: "PM" },
	{ name: "David K.", time: "8 hours ago", avatar: "DK" },
	{ name: "Sneha R.", time: "12 hours ago", avatar: "SR" },
	{ name: "Alex T.", time: "1 day ago", avatar: "AT" },
	{ name: "Fatima Z.", time: "1 day ago", avatar: "FZ" },
	{ name: "Rahul P.", time: "2 days ago", avatar: "RP" },
	{ name: "Maria L.", time: "2 days ago", avatar: "ML" },
	{ name: "Vikram J.", time: "3 days ago", avatar: "VJ" },
	{ name: "Chen W.", time: "3 days ago", avatar: "CW" },
	{ name: "Ananya B.", time: "4 days ago", avatar: "AB" },
	{ name: "James O.", time: "4 days ago", avatar: "JO" },
];

// Duplicate for seamless loop
const marqueeItems = [...recentCompleters, ...recentCompleters];

const SocialProof = () => {
	return (
		<section className="py-16 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a] via-transparent to-[#0a0a1a] z-10 pointer-events-none" />

			<ViewContainer className="relative z-20 mb-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
						<Award size={14} />
						Recent Quest Completers
					</div>
				</motion.div>
			</ViewContainer>

			{/* Marquee */}
			<div className="relative">
				<div className="flex animate-marquee w-max">
					{marqueeItems.map((person, i) => (
						<div
							key={`${person.avatar}-${i}`}
							className="flex items-center gap-3 px-5 py-3 mx-2 rounded-xl bg-slate-900/60 border border-slate-800 whitespace-nowrap"
						>
							{/* Avatar */}
							<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00cfb4] to-purple-500 flex items-center justify-center text-xs font-bold text-black shrink-0">
								{person.avatar}
							</div>
							<div className="flex flex-col">
								<span className="text-sm font-medium text-white flex items-center gap-1.5">
									{person.name}
									<CheckCircle
										size={12}
										className="text-[#00cfb4]"
									/>
								</span>
								<span className="text-xs text-slate-500">
									{person.time}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SocialProof;
