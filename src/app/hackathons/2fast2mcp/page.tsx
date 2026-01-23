import Faq from "@/components/Faq";
import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AboutSection from "./components/AboutSection";
import HackathonHeader from "./components/Header";
import PrizesShowcase from "./components/PrizesShowcase";
import { DATA, faqs, navLinks } from "./data";
import { images } from "./images";

const HackathonPage = () => {
	return (
		<main className="pt-20">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav
				slug={DATA.slug}
				page="overview"
				links={navLinks}
				navCta={{
					label: DATA.cta.label,
					href: DATA.cta.href,
					openInNewTab: DATA.cta.openInNewTab,
					disabled: DATA.cta.disabled,
				}}
			/>

			{/* Hero Section */}
			<div id="about" className="scroll-mt-16 bg-slate-950">
				<HackathonHeader
					title={DATA.title}
					description={DATA.description}
					startDate={DATA.startDate}
					endDate={DATA.endDate}
					prize={DATA.prize}
					cta={DATA.cta}
				/>

				{/* About Content */}
				<ViewContainer className="mt-16 pb-20 bg-slate-900/30 rounded-2xl py-12 px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-orange-400 uppercase tracking-wide mb-6 text-center">
						About 2 Fast 2 MCP
					</h2>
					<p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto text-center">
						In a world where AI agents need to go fast, there's only
						one platform that can keep up. 2 Fast 2 MCP is an online
						hackathon that brings together tinkerers, agent
						builders, DevOps engineers, and SREs from around the
						globe. Harness the power of Archestra to build MCP
						(Model Context Protocol) servers and intelligent agent
						orchestration systems. Whether you're a veteran of the
						DevOps scene or just getting your license to build,
						this hackathon is your track to prove what you're made
						of. Remember: it doesn't matter if you win by an inch or
						a mile - winning's winning. But in this race, we reward
						the fastest AND the most innovative!
					</p>
				</ViewContainer>

				{/* Features Section */}
				<AboutSection />
			</div>

			{/* Prizes Section */}
			<div id="prizes" className="scroll-mt-16 bg-slate-900/30">
				<PrizesShowcase />
			</div>

			{/* Sponsor Section */}
			<div id="sponsor" className="py-20 scroll-mt-10 bg-slate-950">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-bold text-orange-400 uppercase tracking-wide mb-8">
						Sponsor
					</h2>
					<div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-orange-500/20 overflow-hidden">
						<div className="flex items-center justify-between p-8 border-b border-orange-500/10 flex-col md:flex-row gap-6">
							<div className="flex items-center gap-4">
								<div className="bg-gradient-to-br from-orange-500 to-red-600 px-6 py-3 rounded-xl">
									<span className="text-2xl font-bold text-white">
										Archestra
									</span>
								</div>
								<span className="text-slate-400 text-lg">
									MCP Server Platform
								</span>
							</div>
							<Link
								href="https://github.com/archestra-ai/archestra"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 rounded-xl border border-orange-500/50 flex gap-2 items-center bg-slate-800/50 hover:bg-orange-500/20 transition-colors duration-300 text-orange-400 font-medium"
							>
								Check out Archestra <ArrowUpRight size={18} />
							</Link>
						</div>
						<div className="p-8">
							<p className="text-lg text-slate-300 leading-relaxed">
								Archestra is your pit crew for building,
								deploying, and managing MCP servers at scale.
								The Model Context Protocol enables AI agents to
								securely connect to external tools, data
								sources, and services. With Archestra, you get a
								complete platform for creating powerful MCP
								integrations - from simple tool servers to
								complex multi-agent orchestration systems.
								Whether you're building internal automation,
								customer-facing AI features, or experimental
								agent architectures, Archestra gives you the
								horsepower to go from idea to production at
								breakneck speed. Join the crew and build the
								future of AI agent infrastructure!
							</p>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* Judging Section */}
			<div id="judging" className="scroll-mt-10 py-20 bg-slate-900/30">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-bold text-orange-400 uppercase tracking-wide mb-8">
						Judging Criteria
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-orange-400 mb-3">
								Potential Impact
							</h3>
							<p className="text-slate-300">
								Evaluates how effectively the project addresses
								a meaningful problem or unlocks a valuable use
								case for MCP servers and agent orchestration.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-orange-400 mb-3">
								Creativity & Originality
							</h3>
							<p className="text-slate-300">
								Assesses the uniqueness of the idea and how
								Archestra is used in creative ways to solve
								problems.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-orange-400 mb-3">
								Learning & Growth
							</h3>
							<p className="text-slate-300">
								Recognizes the learning curve tackled during the
								hackathon, especially for first-time MCP
								builders.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-orange-400 mb-3">
								Technical Implementation
							</h3>
							<p className="text-slate-300">
								Reviews how well the idea was executed
								technically and the quality of integration with
								Archestra platform.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-orange-400 mb-3">
								Aesthetics & UX
							</h3>
							<p className="text-slate-300">
								Considers how intuitive and user-friendly the
								final experience is, especially if the project
								has a frontend or CLI interface.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-orange-400 mb-3">
								Best Use of Archestra
							</h3>
							<p className="text-slate-300">
								Evaluates how effectively the project leverages
								Archestra's MCP capabilities to build powerful
								agent integrations and demonstrate innovative
								applications of the platform.
							</p>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* FAQ Section */}
			<div id="faq" className="scroll-mt-20 py-20 bg-slate-950">
				<ViewContainer>
					<div className="[&_h2]:text-orange-400 [&_h2]:font-bold [&_div[class*='pb-4']]:text-orange-700 [&_div[class*='pb-4']_a]:text-orange-700">
						<Faq FAQS={faqs} />
					</div>
				</ViewContainer>
			</div>
		</main>
	);
};

export default HackathonPage;
