"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AtSign, Award, BookOpen, Share2 } from "lucide-react";
import { useEffect, useState } from "react";

const milestones = [
	{ id: "about", label: "Briefing", icon: BookOpen },
	{ id: "prizes", label: "Loot", icon: Award },
	{ id: "quest-steps", label: "Quest", icon: Share2 },
	{ id: "faq", label: "Intel", icon: AtSign },
];

const QuestProgress = () => {
	const [progress, setProgress] = useState(0);
	const [activeSection, setActiveSection] = useState("");
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const scrollPercent =
				docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
			setProgress(Math.min(scrollPercent, 100));

			// Show after scrolling past hero
			setVisible(scrollTop > 400);

			// Determine active section
			for (let i = milestones.length - 1; i >= 0; i--) {
				const el = document.getElementById(milestones[i].id);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 200) {
						setActiveSection(milestones[i].id);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 20 }}
					className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-1"
				>
					{/* Progress track */}
					<div
						className="relative w-1 rounded-full bg-slate-800 overflow-hidden"
						style={{ height: "160px" }}
					>
						<motion.div
							className="absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-[#00cfb4] to-purple-500 progress-bar-glow"
							style={{ height: `${progress}%` }}
							transition={{ duration: 0.1 }}
						/>
					</div>

					{/* Milestone dots */}
					<div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col justify-between h-[160px]">
						{milestones.map(m => {
							const isActive = activeSection === m.id;
							return (
								<button
									key={m.id}
									type="button"
									onClick={() => {
										const el = document.getElementById(
											m.id,
										);
										el?.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									}}
									className="group relative flex items-center"
									aria-label={`Scroll to ${m.label}`}
								>
									<div
										className={`w-3 h-3 rounded-full border-2 transition-all ${
											isActive
												? "bg-[#00cfb4] border-[#00cfb4] scale-125"
												: "bg-slate-900 border-slate-600 group-hover:border-slate-400"
										}`}
									/>
									{/* Tooltip */}
									<span
										className={`absolute right-6 whitespace-nowrap text-xs font-medium px-2 py-1 rounded bg-slate-800 border border-slate-700 transition-opacity ${
											isActive
												? "opacity-100 text-[#00cfb4]"
												: "opacity-0 group-hover:opacity-100 text-slate-400"
										}`}
									>
										{m.label}
									</span>
								</button>
							);
						})}
					</div>

					{/* Percentage */}
					<div className="mt-2 text-xs font-mono text-slate-500">
						{Math.round(progress)}%
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default QuestProgress;
