"use client";

import { motion } from "framer-motion";
import {
	Anchor,
	BookOpen,
	Gift,
	Megaphone,
	Sparkles,
	Trophy,
	Users,
} from "lucide-react";
import Link from "next/link";
import { DATA } from "../data";

const fadeUp = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
			ease: [0.4, 0, 0.2, 1] as const,
		},
	}),
};

const PrizesShowcase = () => {
	return (
		<div className="py-24">
			<div className="max-w-6xl mx-auto px-4 md:px-8">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/20 mb-6">
						<Trophy className="w-8 h-8 text-[#d4af37]" />
					</div>
					<h2 className="text-3xl md:text-5xl font-bold gold-shimmer-text mb-4">
						The Treasure Chest
					</h2>
					<p className="text-[#93a1a1] text-lg max-w-2xl mx-auto">
						$10,000+ in gold doubloons and bounties for the bravest
						pirates on the data seas.
					</p>
					<p className="text-[#d4af37]/90 text-base md:text-lg max-w-2xl mx-auto mt-4">
						🎓 Top winners also get a personal mentorship session
						with{" "}
						<a
							href="https://www.linkedin.com/in/kunal-kushwaha"
							target="_blank"
							rel="noopener noreferrer"
							className="underline underline-offset-2 hover:text-[#e8c35a] transition-colors"
						>
							Kunal Kushwaha
						</a>
						.
					</p>
				</motion.div>

				{/* Top 3 Winners */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.6 }}
					className="relative rounded-2xl p-8 md:p-10 overflow-hidden bg-gradient-to-br from-[#3d2a00] via-[#2a1d00] to-[#1a1200] border border-[#d4af37]/20 mb-8"
				>
					<div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-[80px]" />
					<div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-[60px]" />

					<div className="relative z-10">
						<div className="flex items-center gap-3 mb-2">
							<Trophy className="w-7 h-7 text-[#d4af37]" />
							<h3 className="text-2xl md:text-3xl font-bold text-[#fdf6e3]">
								Captain&apos;s Bounty
							</h3>
						</div>
						<p className="text-[#93a1a1] text-sm mb-6">
							One winning crew per track. Each crew can have up to
							4 members.
						</p>

						{/* Prominent everyone-wins callout */}
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37] text-sm font-semibold mb-8">
							<Users size={14} />
							<span>
								Every teammate gets their own prize. No
								splitting treasure!
							</span>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{[
								{
									place: "Track 1: Enterprise Agent",
									amount: "MacBook Neo",
									rank: "Best Enterprise Agent Winners",
									detail: "One MacBook Neo for every teammate (up to 4)",
									emoji: "⚔️",
								},
								{
									place: "Track 2: Personal Agent",
									amount: "Apple iPad",
									rank: "Best Personal Agent Winners",
									detail: "One Apple iPad for every teammate (up to 4)",
									emoji: "🧭",
								},
							].map((p, i) => (
								<motion.div
									key={p.place}
									custom={i}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={fadeUp}
									className="parchment-bg rounded-xl p-6 border border-[#d4af37]/15 hover:border-[#d4af37]/30 transition-all"
								>
									<div className="flex items-center justify-between mb-3">
										<span className="text-[#d4af37] font-bold">
											{p.place}
										</span>
										<span className="text-2xl">
											{p.emoji}
										</span>
									</div>
									<div className="text-3xl md:text-4xl font-bold text-[#d4af37]">
										{p.amount}
									</div>
									<p className="text-[#586e75] text-sm mt-1">
										{p.rank}
									</p>
									<p className="text-[#d4af37]/80 text-xs mt-3 flex items-center gap-1.5">
										<Users size={12} />
										{p.detail}
									</p>
								</motion.div>
							))}
						</div>

						<div className="mt-6 text-center">
							<span className="inline-block px-5 py-2 rounded-full text-sm font-medium text-[#d4af37]/80 border border-[#d4af37]/15 bg-[#d4af37]/5">
								+ exclusive swag for all winners
							</span>
						</div>
					</div>
				</motion.div>

				{/* Early Bird Random Draw Highlight */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.5 }}
					className="relative overflow-hidden rounded-2xl border border-[#2aa198]/30 bg-gradient-to-br from-[#002b36] via-[#0a3740] to-[#002b36] p-6 md:p-8 mb-8"
				>
					<div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 bg-[#2aa198]/15 rounded-full blur-[80px]" />
					<div className="pointer-events-none absolute -bottom-12 -left-12 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-[60px]" />

					<div className="relative flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8">
						<div className="shrink-0 flex items-center gap-3">
							<div className="w-12 h-12 rounded-xl bg-[#2aa198]/15 border border-[#2aa198]/30 flex items-center justify-center">
								<Sparkles className="w-6 h-6 text-[#2aa198]" />
							</div>
							<div className="inline-flex md:hidden items-center px-2.5 py-1 rounded-full border border-[#2aa198]/30 bg-[#2aa198]/10 text-[#2aa198] text-xs font-semibold uppercase tracking-wider">
								Early Bird · Register Now
							</div>
						</div>
						<div className="flex-1 min-w-0">
							<div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2aa198]/30 bg-[#2aa198]/10 text-[#2aa198] text-xs font-semibold uppercase tracking-wider mb-3">
								Early Bird · Register Now
							</div>
							<h3 className="text-xl md:text-2xl font-bold text-[#fdf6e3] mb-2">
								Register early, win before the voyage even
								begins!
							</h3>
							<p className="text-[#93a1a1] text-sm md:text-base leading-relaxed">
								Form your team and register by{" "}
								<span className="text-white font-semibold">
									May 18th
								</span>
								. One random team picked will receive{" "}
								<span className="text-[#d4af37] font-semibold">
									₹5,000 / $50 Amazon Gift Card per teammate
								</span>{" "}
								(up to 4 members). Fair winds to the early
								birds!
							</p>
						</div>
						<div className="shrink-0 w-full md:w-auto">
							<Link
								href={DATA.cta.href}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center w-full md:w-auto gap-2 px-5 py-3 rounded-lg bg-[#d4af37] text-[#002b36] font-bold text-sm hover:bg-[#e8c35a] transition-colors whitespace-nowrap"
							>
								Register Now →
							</Link>
						</div>
					</div>
				</motion.div>

				{/* Special Bounties */}
				<motion.div
					id="special-bounties"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.5 }}
					className="text-center mb-8 scroll-mt-44"
				>
					<h3 className="text-2xl font-bold text-[#d4af37]">
						⚔️ Special Bounties
					</h3>
					<p className="text-[#586e75] mt-2">
						Beyond the main prizes, earn extra treasure through
						these challenges.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					{[
						{
							icon: Gift,
							color: "#d4af37",
							title: "Early Bird Swag: 10 Lucky Social Sharers",
							desc: (
								<>
									Register early and share on social media
									(LinkedIn / X) tagging Coral. 10 random
									pirates will be picked from everyone who
									spread the word and get a swag box shipped
									to them.
								</>
							),
							reward: "📦 10 Random Posts → Coral Swag Box",
							link: null,
						},
						{
							icon: Megaphone,
							color: "#d4af37",
							title: "Tell the Tale: Discord Showcase + Social Post",
							desc: (
								<>
									Share your voyage in the{" "}
									<a
										href="https://withcoral.com/discord"
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#d4af37] underline underline-offset-2 hover:text-[#e8c35a] transition-colors"
									>
										Coral Discord
									</a>{" "}
									<code className="px-1.5 py-0.5 rounded bg-[#002b36] text-[#d4af37] text-xs font-mono">
										#how-i-coral
									</code>{" "}
									with screenshots and a write-up, then post
									it on at least one social platform (LinkedIn
									/ X) tagging{" "}
									<a
										href="https://www.linkedin.com/company/withcoral"
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#d4af37] underline underline-offset-2 hover:text-[#e8c35a] transition-colors"
									>
										Coral
									</a>
									. Show the world what you plundered.
								</>
							),
							reward: (
								<>
									🏆 Best 50 showcases → Claude Max 5x
									1-month vouchers. Top entries will be
									highlighted on{" "}
									<a
										href="https://www.youtube.com/@KunalKushwaha"
										target="_blank"
										rel="noopener noreferrer"
										className="underline underline-offset-2 hover:text-[#e8c35a] transition-colors"
									>
										Kunal Kushwaha&apos;s YouTube channel
									</a>{" "}
									(870,000+ subscribers).
								</>
							),
							link: null,
						},
						{
							icon: Anchor,
							color: "#2aa198",
							title: "Chart New Waters: Build a Source Spec",
							desc: (
								<>
									Need a source that doesn&apos;t exist yet?
									Build it. Any new source spec that gets
									reviewed and accepted by the Coral crew
									earns a bounty, whether it&apos;s from the
									track examples above (Gmail, Google
									Calendar, Discord, LinkedIn) or something
									completely new. Every new source grows the
									reef.
								</>
							),
							reward: "🐠 Best per source → $100 cash + $50 donation to sea life charity",
							link: {
								label: "How to write a custom source spec",
								href: "https://withcoral.com/docs/guides/write-a-custom-source",
							},
						},
						{
							icon: BookOpen,
							color: "#6c71c4",
							title: 'Captain\'s Log: End-to-End "How to Build X" Guides',
							desc: (
								<>
									Write a 2-3 page reproducible guide (a blog
									post) that any pirate can follow. e.g.{" "}
									<em>
										&quot;I built a customer success
										dashboard with Claude Code + Coral,
										here&apos;s the route.&quot;
									</em>{" "}
									Make sure it&apos;s published as a blog
									that&apos;s shareable.
								</>
							),
							reward: "⌨️ Best guides → Keychron mechanical keyboard",
							link: null,
						},
					].map((bounty, i) => {
						const Icon = bounty.icon;
						return (
							<motion.div
								key={bounty.title}
								custom={i}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: "-40px" }}
								variants={fadeUp}
								className="parchment-bg rounded-xl border border-[#d4af37]/8 p-6 hover:border-[#d4af37]/20 transition-all"
							>
								<div className="flex items-center gap-3 mb-3">
									<Icon
										size={20}
										style={{ color: bounty.color }}
									/>
									<h4 className="text-lg font-bold text-[#fdf6e3]">
										{bounty.title}
									</h4>
								</div>
								<p className="text-[#586e75] text-sm mb-3 leading-relaxed">
									{bounty.desc}
								</p>
								{bounty.link && (
									<Link
										href={bounty.link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1.5 mb-3 text-sm font-medium hover:underline"
										style={{ color: bounty.color }}
									>
										<BookOpen size={14} />
										{bounty.link.label} →
									</Link>
								)}
								<div
									className="px-3 py-2 rounded-lg bg-[#002b36] border border-[#d4af37]/8 text-sm font-medium"
									style={{ color: bounty.color }}
								>
									{bounty.reward}
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* CTA */}
				<div className="text-center">
					{DATA.cta.disabled ? (
						<div className="inline-flex items-center gap-3 px-8 py-4 bg-[#586e75]/20 text-[#586e75] font-bold text-lg rounded-xl cursor-not-allowed">
							Submissions closed 🏴‍☠️
						</div>
					) : (
						<Link
							href="https://forms.gle/dxBPLK17A8dXwp64A"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8960c] text-[#002b36] font-bold text-lg rounded-xl shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 hover:scale-[1.02] transition-all duration-300"
						>
							Join the Crew 🏴‍☠️
						</Link>
					)}
					<p className="text-[#586e75] mt-4 text-sm">
						{DATA.cta.disabled
							? "This hackathon has ended. Thank you for sailing with us!"
							: "Ready to set sail? Register and start building!"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default PrizesShowcase;
