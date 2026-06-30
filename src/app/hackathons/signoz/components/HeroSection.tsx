"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { motion } from "framer-motion";
import { ArrowUpRight, Radar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { images } from "../images";

type HeroSectionProps = {
	title: string;
	description: string;
	prize: string;
	cta: {
		label: string;
		href: string;
		disabled?: boolean;
		openInNewTab?: boolean;
	};
	submissionFormUrl?: string;
};

const HeroSection = ({
	title,
	description,
	cta,
	submissionFormUrl,
}: HeroSectionProps) => {
	return (
		<div className="relative overflow-x-clip">
			{/* ── Hero background image (extends up behind the navbar) ── */}
			<div className="absolute -top-24 inset-x-0 bottom-0 z-0 pointer-events-none overflow-hidden">
				<Image
					src={images.background}
					alt=""
					fill
					priority
					sizes="100vw"
					className="object-cover object-center"
				/>
				{/* blend the background into the page — keep image visible, fade for text & page */}
				<div className="absolute inset-0 bg-gradient-to-r from-[#08090b]/90 via-[#08090b]/35 to-transparent" />
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08090b]" />
				{/* solid black behind the navbar, then a smooth fade into the image */}
				<div className="absolute inset-x-0 top-0 h-24 bg-[#08090b]" />
				<div className="absolute inset-x-0 top-24 h-40 bg-gradient-to-b from-[#08090b] to-transparent" />
			</div>

			<ViewContainer className="relative z-20 pt-16 md:pt-20 pb-12">
				<div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
					{/* ── Left column ── */}
					<div>
						{/* Title */}
						<motion.div
							className="mb-4"
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.9,
								delay: 0.15,
								ease: [0.16, 1, 0.3, 1],
							}}
						>
							<Image
								src={images.title}
								alt={title}
								priority
								className="w-full max-w-lg h-auto mib-title-glow"
							/>
						</motion.div>

						<motion.div
							className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-5"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.65, delay: 0.4 }}
						>
							<span className="text-5xl md:text-7xl font-black text-[#e5502a] glow-orange">
								$10,000
							</span>
							<span className="text-lg md:text-xl text-[#c0c1c3] font-semibold">
								in prizes + job interviews at SigNoz
							</span>
						</motion.div>

						<motion.p
							className="text-base md:text-lg text-[#c0c1c3] max-w-xl leading-relaxed mb-7"
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.65, delay: 0.55 }}
						>
							{description}
						</motion.p>

						{/* Dates + Register */}
						<motion.div
							className="mb-7"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.65, delay: 0.7 }}
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
								<div className="dossier-card rounded-xl px-5 py-4 flex flex-col justify-center">
									<div className="text-xs uppercase tracking-[0.18em] text-[#e5502a] mb-1.5 font-bold">
										Dates
									</div>
									<div className="font-mono text-base md:text-lg font-bold text-[#f5f5f5]">
										Jul 20 – Jul 26, 2026
									</div>
								</div>
								{cta.disabled ? (
									<div className="agent-btn justify-center text-center text-base opacity-60 cursor-not-allowed pointer-events-none">
										<Radar className="w-5 h-5" />
										{cta.label}
									</div>
								) : (
									<Link
										href={cta.href}
										target={
											cta.openInNewTab
												? "_blank"
												: undefined
										}
										rel={
											cta.openInNewTab
												? "noopener noreferrer"
												: undefined
										}
										className="agent-btn justify-center text-center text-base"
									>
										<Radar className="w-5 h-5" />
										{cta.label}
									</Link>
								)}
							</div>
						</motion.div>

						{/* Secondary CTA */}
						{submissionFormUrl && (
							<motion.div
								className="flex items-center gap-4 flex-wrap"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.9 }}
							>
								<Link
									href={submissionFormUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="mib-ghost-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#3c4152] text-[#f5f7fa] font-bold hover:border-[#5fe9ff] hover:text-[#5fe9ff] transition-all duration-300 text-base"
								>
									Submit Project
									<ArrowUpRight className="w-5 h-5" />
								</Link>
							</motion.div>
						)}
					</div>

					{/* ── Right column: hero image ── */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.5,
							ease: [0.16, 1, 0.3, 1],
						}}
						className="mib-hero-frame"
					>
						<Image
							src={images.hero}
							alt={title}
							priority
							className="mib-hero-img w-full h-auto lg:scale-[1.28] origin-center"
						/>
					</motion.div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HeroSection;
