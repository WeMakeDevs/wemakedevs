"use client";

import { DATA } from "../data";
import { motion } from "framer-motion";
import { Anchor, BookOpen, Gift, Heart, Megaphone, Trophy, Users, Video } from "lucide-react";
import Link from "next/link";

const fadeUp = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1, y: 0,
		transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
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
						$10,000+ in gold doubloons and bounties for the bravest pirates on the data seas.
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
						<div className="flex items-center gap-3 mb-8">
							<Trophy className="w-7 h-7 text-[#d4af37]" />
							<h3 className="text-2xl md:text-3xl font-bold text-[#fdf6e3]">
								Captain&apos;s Bounty
							</h3>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{[
								{ place: "Pirate King", amount: "$5,000", rank: "1st Place", emoji: "👑" },
								{ place: "First Mate", amount: "$3,000", rank: "2nd Place", emoji: "🏴‍☠️" },
								{ place: "Quartermaster", amount: "$2,000", rank: "3rd Place", emoji: "⚓" },
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
										<span className="text-[#d4af37] font-bold">{p.place}</span>
										<span className="text-2xl">{p.emoji}</span>
									</div>
									<div className="text-3xl md:text-4xl font-bold text-[#d4af37]">{p.amount}</div>
									<p className="text-[#586e75] text-sm mt-1">{p.rank}</p>
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

				{/* Social Sharing */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.5 }}
					className="parchment-bg rounded-2xl border border-[#d4af37]/10 p-8 mb-8"
				>
					<div className="flex items-center gap-3 mb-4">
						<Gift className="w-6 h-6 text-[#d4af37]" />
						<h3 className="text-xl font-bold text-[#fdf6e3]">Early Bird Swag: Top 10 Social Sharers</h3>
					</div>
					<p className="text-[#93a1a1] mb-4">
						Register and share on social media (LinkedIn / X / HackerNews / Reddit) tagging Coral.
					</p>
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4af37]/5 border border-[#d4af37]/10 text-[#d4af37] font-semibold text-sm">
						<Gift size={16} /> Top 10 Posts → Swag Box 📦
					</div>
				</motion.div>

				{/* Special Bounties */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.5 }}
					className="text-center mb-8"
				>
					<h3 className="text-2xl font-bold text-[#d4af37]">⚔️ Special Bounties</h3>
					<p className="text-[#586e75] mt-2">Beyond the main prizes, earn extra treasure through these challenges.</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					{[
						{
							icon: Megaphone, color: "#d4af37", title: "Discord Showcase + Social Post",
							desc: "Share your project in Discord #how-i-coral + at least one social platform with screenshots.",
							reward: "🏆 Best 50 showcases → Claude Max 5x 1-month vouchers or $100 cash",
						},
						{
							icon: Anchor, color: "#2aa198", title: 'Build "Wanted" Source Specs',
							desc: "We'll share a list of 10 \"wanted\" new sources (Hubspot, Asana, Zendesk, Airtable, etc.).",
							reward: "🐠 Best per source → $200 cash + $50 donation to sea life charity",
						},
						{
							icon: Video, color: "#859900", title: '"Before & After" Demo Videos',
							desc: "Record a max 3-min video: building without Coral vs. with Coral.",
							reward: "🎬 Top 3 → $50 Amazon voucher + featured on Kunal's YouTube",
						},
						{
							icon: BookOpen, color: "#6c71c4", title: 'End-to-End "How to Build X" Guides',
							desc: 'Write a 2-3 page reproducible guide, e.g. "I built a dashboard with Claude Code + Coral."',
							reward: "📝 Best guides → Keychron mechanical keyboard / AirPods",
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
									<Icon size={20} style={{ color: bounty.color }} />
									<h4 className="text-lg font-bold text-[#fdf6e3]">{bounty.title}</h4>
								</div>
								<p className="text-[#586e75] text-sm mb-3">{bounty.desc}</p>
								<div className="px-3 py-2 rounded-lg bg-[#002b36] border border-[#d4af37]/8 text-sm font-medium" style={{ color: bounty.color }}>
									{bounty.reward}
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Referral */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-40px" }}
					transition={{ duration: 0.5 }}
					className="parchment-bg rounded-xl border border-[#cb4b16]/10 p-6 mb-12"
				>
					<div className="flex items-center gap-3 mb-3">
						<Users size={20} className="text-[#cb4b16]" />
						<h4 className="text-lg font-bold text-[#fdf6e3]">Recruit Yer Crew: Referral Bounty</h4>
					</div>
					<p className="text-[#586e75] text-sm mb-3">Refer 5 people who register AND submit a project.</p>
					<div className="px-3 py-2 rounded-lg bg-[#002b36] border border-[#cb4b16]/10 text-[#cb4b16] text-sm font-medium">
						🎲 Lucky draw for 5 Claude Pro 3-month vouchers
					</div>
				</motion.div>

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
						{DATA.cta.disabled ? "This hackathon has ended. Thank you for sailing with us!" : "Ready to set sail? Register and start building!"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default PrizesShowcase;
