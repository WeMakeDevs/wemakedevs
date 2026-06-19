import Faq from "@/components/Faq";
import { HackathonNav } from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import Integrations from "./components/Integrations";
import MemoryApi from "./components/MemoryApi";
import PrizesShowcase from "./components/PrizesShowcase";
import ProblemSolution from "./components/ProblemSolution";
import Tracks from "./components/Tracks";
import { DATA, faqs, navLinks } from "./data";

const judgingCriteria = [
	{
		title: "Potential Impact",
		description:
			"How effectively does the project address a meaningful problem or unlock a valuable use case with persistent AI memory?",
	},
	{
		title: "Creativity & Innovation",
		description:
			"How unique is the idea? Does it push the boundaries of what's possible when an agent never forgets?",
	},
	{
		title: "Technical Excellence",
		description:
			"How well is the project implemented? Does it demonstrate strong engineering practices and clean, maintainable code?",
	},
	{
		title: "Best Use of Cognee",
		description:
			"How deeply and effectively does the project lean on Cognee's memory lifecycle APIs and its hybrid graph-vector memory layer?",
	},
	{
		title: "User Experience",
		description:
			"Is the project intuitive to use? Does it provide a polished experience that users would actually want to adopt?",
	},
	{
		title: "Presentation Quality",
		description:
			"How clearly is the project presented? Do the demo, README, and submission communicate the problem, solution, and impact?",
	},
];

const HackathonPage = () => {
	return (
		<main className="pt-20">
			{/* ── Hero ──────────────────────────────────────────────────────────── */}
			<div id="about" className="scroll-mt-44">
				<HeroSection
					title={DATA.title}
					description={DATA.description}
					prize={DATA.prize}
					cta={DATA.cta}
					submissionFormUrl={DATA.submissionFormUrl}
				/>
			</div>

			{/* ── Sticky sub-page nav ───────────────────────────────────────────── */}
			<div className="sticky top-[96px] z-[120]">
				<ViewContainer>
					<div className="cognee-sticky-nav rounded-xl">
						<HackathonNav
							slug={DATA.slug}
							page="overview"
							links={navLinks}
						/>
					</div>
				</ViewContainer>
			</div>

			{/* ── Prizes ────────────────────────────────────────────────────────── */}
			<div id="prizes" className="scroll-mt-44 bg-[#f1dcb4]/60">
				<PrizesShowcase />
			</div>

			{/* ── Why we're doing this (Problem / Solution) ─────────────────────── */}
			<div id="why" className="scroll-mt-44 bg-[#f7ead0]">
				<ProblemSolution />
			</div>

			{/* ── Sponsor ───────────────────────────────────────────────────────── */}
			<div id="sponsor" className="py-20 scroll-mt-44 bg-[#f1dcb4]/60">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-black italic uppercase text-[#c33124] glow-red mb-8">
						Powered By Cognee
					</h2>
					<div className="paper-card rounded-2xl overflow-hidden">
						<div className="flex items-center justify-between p-8 border-b border-[#b07d12]/15 flex-col md:flex-row gap-6">
							<div className="flex items-center gap-4">
								<div className="bg-[#fff8ea] px-6 py-3 rounded-xl border border-[#b07d12]/25">
									<span className="text-2xl font-black italic text-[#0e8a80]">
										cognee
									</span>
								</div>
								<span className="text-[#6b513a] text-lg">
									The memory layer for AI agents
								</span>
							</div>
							<div className="flex flex-wrap items-center gap-3">
								<Link
									href="https://github.com/topoteretes/cognee"
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-3 rounded-xl flex gap-2 items-center bg-gradient-to-r from-[#e23b2d] to-[#c33124] hover:opacity-90 transition-opacity duration-300 text-white font-bold border-2 border-[#f6c453] shadow-md"
								>
									<Star size={18} className="fill-white" />{" "}
									Star Cognee on GitHub
								</Link>
							</div>
						</div>
						<div className="p-8">
							<p className="text-lg text-[#5a4632] leading-relaxed">
								Cognee is an open-source, self-hosted memory
								layer for AI agents. It turns text, files, and
								URLs into a hybrid graph-vector knowledge store,
								so your agents can{" "}
								<span className="text-[#c33124] font-semibold">
									remember
								</span>
								,{" "}
								<span className="text-[#0e8a80] font-semibold">
									recall
								</span>
								,{" "}
								<span className="text-[#e0762a] font-semibold">
									improve
								</span>
								, and{" "}
								<span className="text-[#b07d12] font-semibold">
									forget
								</span>
								, carrying context across infinite sessions.
								Your mission: build AI that doesn&apos;t wake up
								in Vegas with no memory of last night.
							</p>

							{/* Cognee Cloud free credit offer */}
							<div className="mt-6 rounded-2xl border-2 border-[#0e8a80]/30 bg-[#0e8a80]/8 px-6 py-5">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
									<div className="flex items-start gap-3">
										<span className="text-2xl">🎁</span>
										<div>
											<p className="text-[#0e8a80] font-bold text-lg">
												Free Cognee Cloud Developer plan
												($35 value)
											</p>
											<p className="text-[#5a4632] text-sm">
												Sign up to Cognee Cloud for free
												and unlock the Developer plan
												with code{" "}
												<code className="font-mono font-bold text-[#8a5a00] bg-[#b07d12]/15 border border-[#b07d12]/30 rounded px-1.5 py-0.5">
													COGNEE-35
												</code>{" "}
												for free access.
											</p>
										</div>
									</div>
									<Link
										href="https://platform.cognee.ai/sign-in"
										target="_blank"
										rel="noopener noreferrer"
										className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#0e8a80] to-[#0c736b] text-white font-bold hover:opacity-90 transition-opacity"
									>
										Claim free credit{" "}
										<ArrowUpRight size={18} />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* ── Core Memory Lifecycle APIs ────────────────────────────────────── */}
			<div id="apis" className="scroll-mt-44 bg-[#f7ead0] desert-grid">
				<MemoryApi />
			</div>

			{/* ── What can you build (examples) ─────────────────────────────────── */}
			<div id="ideas" className="scroll-mt-44 bg-[#f1dcb4]/60">
				<Tracks />
			</div>

			{/* ── Ecosystem Integrations ────────────────────────────────────────── */}
			<div className="bg-[#f7ead0] desert-grid">
				<Integrations />
			</div>

			{/* ── Judging Criteria ──────────────────────────────────────────────── */}
			<div id="judging" className="scroll-mt-44 py-20 bg-[#f1dcb4]/60">
				<ViewContainer>
					<div className="text-center mb-12">
						<span className="inline-flex items-center gap-2 bg-[#c33124]/10 border border-[#c33124]/30 text-[#c33124] px-5 py-2 rounded-full text-sm font-semibold mb-6">
							⚖️ How You&apos;re Judged
						</span>
						<h2 className="text-3xl md:text-4xl font-black italic uppercase text-[#c33124] glow-red">
							Judging Criteria
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{judgingCriteria.map((criterion, i) => (
							<div
								key={criterion.title}
								className="paper-card rounded-xl p-6 group"
							>
								<div className="flex items-center gap-3 mb-3">
									<span className="font-mono text-xs text-[#8a5a00] bg-[#b07d12]/12 px-2 py-0.5 rounded">
										{String(i + 1).padStart(2, "0")}
									</span>
									<h3 className="text-lg font-bold text-[#c33124]">
										{criterion.title}
									</h3>
								</div>
								<p className="text-[#5a4632] text-sm leading-relaxed">
									{criterion.description}
								</p>
							</div>
						))}
					</div>
				</ViewContainer>
			</div>

			{/* ── FAQ ───────────────────────────────────────────────────────────── */}
			<div id="faq" className="scroll-mt-44 py-20 bg-[#f7ead0]">
				<ViewContainer>
					<div className="[&_h2]:text-[#c33124] [&_h2]:font-bold">
						<Faq FAQS={faqs} />
					</div>
				</ViewContainer>
			</div>
		</main>
	);
};

export default HackathonPage;
