import Faq from "@/components/Faq";
import { HackathonNav } from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import IdeasSection from "./components/IdeasSection";
import PrizesShowcase from "./components/PrizesShowcase";
import { DATA, faqs, navLinks } from "./data";
import { images } from "./images";

const judgingCriteria = [
	{
		title: "Potential Impact",
		description:
			"How effectively does the project address a meaningful problem or unlock a valuable use case in the metadata and data management space?",
	},
	{
		title: "Creativity & Innovation",
		description:
			"How unique is the idea? Does it push the boundaries of what's possible with metadata discovery, observability, or governance?",
	},
	{
		title: "Technical Excellence",
		description:
			"How well is the project implemented? Does it demonstrate strong engineering practices and clean, maintainable code?",
	},
	{
		title: "Best Use of OpenMetadata",
		description:
			"How deeply and effectively does the project integrate with OpenMetadata's APIs, connectors, lineage, governance, or observability features?",
	},
	{
		title: "User Experience",
		description:
			"Is the project intuitive to use? Does it provide a seamless, polished experience that users would actually want to adopt?",
	},
	{
		title: "Presentation Quality",
		description:
			"How clearly is the project presented? Does the demo, README, and submission effectively communicate the problem, solution, and impact?",
	},
];

const HackathonPage = () => {
	return (
		<main className="pt-20">

			{/* ── Hero Section ──────────────────────────────────────────────────────── */}
			<div id="about" className="scroll-mt-44">
				<HeroSection
					title={DATA.title}
					description={DATA.description}
					startDate={DATA.startDate}
					endDate={DATA.endDate}
					prize={DATA.prize}
					cta={DATA.cta}
					submissionFormUrl={DATA.submissionFormUrl}
				/>
			</div>

			{/* ── Sticky Sub-page nav (Overview, Rules, Resources, Schedule) ───────── */}
			<div className="sticky top-[96px] z-[120]">
				<ViewContainer>
					<div className="openmetadata-sticky-nav rounded-xl">
						<HackathonNav
							slug={DATA.slug}
							page="overview"
							links={navLinks}
						/>
					</div>
				</ViewContainer>
			</div>

			{/* ── Mission Section (Fixing the Timeline) ────────────────────────────── */}
			<div className="bg-slate-950 retro-grid">
				<ViewContainer className="py-20">
					<div className="text-center mb-12">
						<span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
							<span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
							The Mission
						</span>
						<h2 className="text-3xl md:text-4xl font-black italic uppercase text-amber-400 mb-4">
							Fixing the Timeline of Data
						</h2>
					</div>
					<div className="glass-card rounded-2xl py-12 px-8 max-w-4xl mx-auto">
						<p className="text-lg md:text-xl text-slate-300 leading-relaxed text-center">
							OpenMetadata is an open-source unified platform for{" "}
							<span className="text-amber-400 font-semibold">data discovery</span>,{" "}
							<span className="text-purple-400 font-semibold">data observability</span>, and{" "}
							<span className="text-cyan-400 font-semibold">data governance</span>, powered by
							a central metadata repository, in-depth column-level lineage, and seamless team
							collaboration. Whether you&apos;re building MCP servers, observability tools,
							custom connectors, governance automations, or AI-powered metadata agents, this
							hackathon is your proving ground. Fire up the flux capacitor and build something
							that changes the timeline of data management forever.
						</p>
					</div>
				</ViewContainer>
			</div>

			{/* ── Ideas / Temporal Paradoxes ────────────────────────────────────────── */}
			<div id="ideas" className="scroll-mt-44 bg-slate-900/30">
				<IdeasSection />
			</div>

			{/* ── Submit CTA ────────────────────────────────────────────────────────── */}
			{DATA.submissionFormUrl && (
				<ViewContainer className="mt-12 pb-4">
					<Link
						href={DATA.submissionFormUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 md:p-8 rounded-2xl border-2 border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 transition-colors group"
					>
						<span className="text-xl md:text-2xl font-bold text-amber-400 group-hover:text-amber-300">
							Submit your project →
						</span>
						<span className="text-slate-400 text-center sm:text-left">
							One person per team. Submit via the official form before the deadline.
						</span>
						<ArrowUpRight className="w-6 h-6 text-amber-400 shrink-0" />
					</Link>
				</ViewContainer>
			)}

			{/* ── Prizes ────────────────────────────────────────────────────────────── */}
			<div id="prizes" className="scroll-mt-44 bg-slate-950">
				<PrizesShowcase />
			</div>

			{/* ── Sponsor ───────────────────────────────────────────────────────────── */}
			<div id="sponsor" className="py-20 scroll-mt-44 bg-slate-900/30">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-black italic uppercase text-amber-400 mb-8">
						Powered By
					</h2>
					<div className="glass-card rounded-2xl overflow-hidden">
						<div className="flex items-center justify-between p-8 border-b border-amber-500/10 flex-col md:flex-row gap-6">
							<div className="flex items-center gap-4">
								<div className="bg-slate-800/80 px-6 py-3 rounded-xl border border-amber-500/20">
									<Image
										src={images.sponsorLogo}
										alt="OpenMetadata"
										width={200}
										height={50}
										className="h-10 w-auto"
									/>
								</div>
								<span className="text-slate-400 text-lg">OpenMetadata by Collate</span>
							</div>
							<Link
								href="https://github.com/open-metadata"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 rounded-xl border border-amber-500/50 flex gap-2 items-center bg-slate-800/50 hover:bg-amber-500/20 transition-colors duration-300 text-amber-400 font-medium"
							>
								Visit GitHub <ArrowUpRight size={18} />
							</Link>
						</div>
						<div className="p-8">
							<p className="text-lg text-slate-300 leading-relaxed">
								OpenMetadata is an open-source unified metadata platform for data discovery,
								data observability, and data governance. It provides a central metadata
								repository, in-depth column-level lineage, seamless team collaboration, and
								robust governance capabilities. With support for 70+ connectors, automated
								data quality tests, and a powerful API-first architecture, OpenMetadata is
								the backbone of modern data teams. Your mission: push the boundaries of
								what&apos;s possible with metadata.
							</p>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* ── Judging Criteria ──────────────────────────────────────────────────── */}
			<div id="judging" className="scroll-mt-44 py-20 bg-slate-950">
				<ViewContainer>
					<div className="text-center mb-12">
						<span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
							⚖️ Evaluation Protocol
						</span>
						<h2 className="text-3xl md:text-4xl font-black italic uppercase text-amber-400">
							Judging Criteria
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{judgingCriteria.map((criterion, i) => (
							<div
								key={criterion.title}
								className="glass-card rounded-xl p-6 group hover:border-amber-500/35 transition-all duration-300"
							>
								<div className="flex items-center gap-3 mb-3">
									<span className="font-mono text-xs text-amber-600/80 bg-amber-500/10 px-2 py-0.5 rounded">
										{String(i + 1).padStart(2, "0")}
									</span>
									<h3 className="text-lg font-bold text-amber-400">{criterion.title}</h3>
								</div>
								<p className="text-slate-300 text-sm leading-relaxed">
									{criterion.description}
								</p>
							</div>
						))}
					</div>
				</ViewContainer>
			</div>

			{/* ── FAQ ───────────────────────────────────────────────────────────────── */}
			<div id="faq" className="scroll-mt-44 py-20 bg-slate-900/30">
				<ViewContainer>
					<div className="[&_h2]:text-amber-400 [&_h2]:font-bold [&_div[class*='pb-4']]:text-amber-700 [&_div[class*='pb-4']_a]:text-amber-700">
						<Faq FAQS={faqs} />
					</div>
				</ViewContainer>
			</div>
		</main>
	);
};

export default HackathonPage;
