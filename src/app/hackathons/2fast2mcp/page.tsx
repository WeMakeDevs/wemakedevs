import Faq from "@/components/Faq";
import {
	HackathonContentTitle,
	HackathonContentTitleH3,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AboutSection from "./components/AboutSection";
import HackathonHeader from "./components/Header";
import PrizesShowcase from "./components/PrizesShowcase";
import TwoFastTwoMcpSpecialTestimonial from "./components/SpecialTestimonial";
import TwoFastTwoMcpStats from "./components/Stats";
import TwoFastTwoMcpTestimonials from "./components/Testimonials";
import { DATA, faqs, navLinks, judges } from "./data";
import { images } from "./images";
import Image from "next/image";

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
					showDate={DATA.showDate}
					cta={DATA.cta}
				/>

				{/* Stats Section */}
				<ViewContainer className="mt-10">
					<HackathonContentTitle className="text-slate-100 [&>h2]:text-slate-100">
						2 Fast 2 MCP 2026 Stats
					</HackathonContentTitle>
					<TwoFastTwoMcpStats />
					<HackathonContentTitleH3 className="mt-4 text-white">
						Sponsor testimonial
					</HackathonContentTitleH3>
					<TwoFastTwoMcpSpecialTestimonial />
					<HackathonContentTitleH3 className="mt-4 text-slate-100">
						Participants testimonials
					</HackathonContentTitleH3>
				</ViewContainer>
				<TwoFastTwoMcpTestimonials />

				{/* About Content */}
				<ViewContainer className="mt-16 pb-20 bg-slate-900/30 rounded-2xl py-12 px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-orange-400 uppercase tracking-wide mb-6 text-center">
						About 2 Fast 2 MCP
					</h2>
					<div className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto text-center space-y-4">
						<p>
							In a world where AI agents need to go fast, there's only one platform that can keep up.
						</p>
						<p>
							2 Fast 2 MCP is an online hackathon bringing together tinkerers, agent builders, DevOps engineers, and SREs from around the globe.
						</p>
						<p>
							Harness the power of Archestra to run, orchestrate, secure, and observe MCP-based agents at scale.
						</p>
						<p>
							Whether you're a DevOps veteran or just getting your license to ship AI systems, this hackathon is your track to prove what you're made of.
						</p>
						<p>
							Remember: it doesn't matter if you win by an inch or a mile, winning's winning.
						</p>
						<p>
							But in this race, we reward the fastest setups and the cleanest architectures.
						</p>
					</div>
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
							<div className="text-lg text-slate-300 leading-relaxed space-y-4">
								<p>
									Archestra is a centralized, MCP-native AI platform that lets teams run, orchestrate, secure, and observe AI agents across an organization. It acts as the control plane for AI agents that use the Model Context Protocol, bringing them out of individual machines and into a shared, governed, production-ready environment. Archestra provides a unified runtime with built-in security guardrails, cost controls, observability, and a ChatGPT-style interface, so AI agents can be safely deployed, shared, and used at scale.
								</p>
								<p>
									<strong>How to use it?</strong> For hackathon participants and innovators, Archestra provides an out-of-the-box infrastructure to rapidly prototype AI solutions – you get a chat UI, hundreds of connectors, multi-LLM support, and safety mechanisms all in one package. Instead of spending time worrying about servers, security, or integration plumbing, you can focus on building the fun part of your project (the agent's logic and impact), while Archestra handles the heavy lifting of running it reliably.
								</p>
								<p>
									This allows tinkerers, agent builders, DevOps, and SREs alike to collaborate and iterate faster, unlocking AI's potential without the chaos. By using Archestra, teams can confidently say they have a centralized, secure AI platform in place, not just a cool demo, but something that could scale and slot right into a company's ecosystem the next day.
								</p>
							</div>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* Judges Section */}
			<div id="judges" className="scroll-mt-10 py-20 bg-slate-950">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-bold text-orange-400 uppercase tracking-wide mb-8">
						Judges
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
						{judges.map(judge => (
							<div
								key={judge.name}
								className="bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-orange-500/20 overflow-hidden flex flex-col items-center text-center p-6"
							>
								<div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-orange-500/30 mb-4">
									<Image
										src={images.judges[judge.imageKey]}
										alt={judge.name}
										fill
										className="object-cover"
										sizes="128px"
									/>
								</div>
								<h3 className="text-xl font-bold text-white">
									{judge.name}
								</h3>
								<p className="text-orange-400 text-sm font-medium uppercase tracking-wide">
									{judge.role}
								</p>
							</div>
						))}
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
								Evaluates how effectively the project leverages Archestra's MCP capabilities to run, orchestrate, and integrate powerful agents, while demonstrating innovative applications of the platform.
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
