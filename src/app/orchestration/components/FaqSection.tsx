"use client";

import { ViewContainer } from "@/components/ui/view-container";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
	{
		question: "Who can join the Orchestration Challenge?",
		answer: "Everyone! Whether you're a student, a working professional, or just getting started with tech — this challenge is open to all. Beginners are absolutely welcome; no prior orchestration experience is needed.",
	},
	{
		question: "How are winners picked?",
		answer: "Winners are selected on a first-come, first-serve / rolling basis. The sooner you complete the quest and post on LinkedIn, the better your chances. We pick winners regularly, so don't wait!",
	},
	{
		question: "Is the Kestra Fundamentals course free?",
		answer: "100% free. The course, the exam, and the certification — all of it. Zero cost, zero catch. Kestra Academy is completely free to use.",
	},
	{
		question: "How long does the course take to complete?",
		answer: "The Kestra Fundamentals course is self-paced. Most people complete it in a few hours. You can do it in one sitting or spread it across a few days — totally up to you.",
	},
	{
		question: "Do I need prior experience with orchestration tools?",
		answer: "Not at all — beginners are welcome! The course starts from the basics and builds up. If you know what an API is and have written some code before, you're good to go. Even if you haven't, you'll pick it up.",
	},
	{
		question: "What do I need to post on LinkedIn exactly?",
		answer: "Share your Kestra certification on LinkedIn and tag both @WeMakeDevs and @Kestra in your post. That's your entry ticket to the giveaway. Feel free to add your thoughts about the course too!",
	},
	{
		question: "When does this challenge end?",
		answer: "The challenge runs from May 4 to May 17, 2026. Since winners are picked on a rolling basis, the earlier you complete it, the better. Follow @WeMakeDevs on socials for updates.",
	},
	{
		question: "Can I participate from any country?",
		answer: "Yes! This is a global challenge. As long as you can access Kestra Academy and LinkedIn, you're eligible to participate and win.",
	},
];

const FaqSection = () => {
	return (
		<section id="faq" className="py-20 md:py-28 scroll-mt-24 relative">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />
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
						<HelpCircle size={14} />
						The Intel
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-lg text-slate-400 max-w-xl mx-auto">
						Everything you need to know before starting your quest.
					</p>
				</motion.div>

				{/* Accordion */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="max-w-3xl mx-auto"
				>
					<Accordion.Root
						type="single"
						collapsible
						className="space-y-3"
					>
						{faqs.map(faq => (
							<Accordion.Item
								key={faq.question}
								value={faq.question}
								className="glow-card overflow-hidden group"
							>
								<Accordion.Trigger className="flex items-center justify-between w-full p-5 md:p-6 text-left hover:bg-[#161636] transition-colors">
									<span className="text-base md:text-lg font-semibold text-white pr-4">
										{faq.question}
									</span>
									<ChevronDown
										size={20}
										className="text-slate-500 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
									/>
								</Accordion.Trigger>
								<Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
									<div className="px-5 md:px-6 pb-5 md:pb-6 text-slate-400 leading-relaxed">
										{faq.answer}
									</div>
								</Accordion.Content>
							</Accordion.Item>
						))}
					</Accordion.Root>
				</motion.div>
			</ViewContainer>
		</section>
	);
};

export default FaqSection;
