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
					<h2 className="text-3xl md:text-4xl font-bold text-sky-400 uppercase tracking-wide mb-6 text-center">
						About Automate Me If You Can
					</h2>
					<div className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto text-center space-y-4">
						<p>
							Your mission, should you choose to accept it: Build multi-modal AI agents that watch, listen, and understand your workflow.
						</p>
						<p>
							Automate Me If You Can is an online hackathon bringing together tinkerers, automation enthusiasts, and AI builders from around the globe.
						</p>
						<p>
							Harness the power of Accomplish - the open source AI desktop agent that runs locally, respects your privacy, and actually gets work done.
						</p>
						<p>
							Whether you're automating file management, document creation, browser tasks, or inventing entirely new workflows, this hackathon is your stage.
						</p>
						<p>
							Remember: The best agent is the one nobody sees working.
						</p>
						<p>
							Can they catch you if you automate everything?
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
					<h2 className="text-3xl md:text-4xl font-bold text-sky-400 uppercase tracking-wide mb-8">
						Sponsor
					</h2>
					<div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-sky-500/20 overflow-hidden">
						<div className="flex items-center justify-between p-8 border-b border-sky-500/10 flex-col md:flex-row gap-6">
							<div className="flex items-center gap-4">
								<div className="bg-gradient-to-br from-sky-500 to-amber-500 px-6 py-3 rounded-xl">
									<span className="text-2xl font-bold text-white">
										Accomplish
									</span>
								</div>
								<span className="text-slate-400 text-lg">
									Open Source AI Desktop Agent
								</span>
							</div>
							<Link
								href="https://github.com/accomplish-ai/accomplish"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 rounded-xl border border-sky-500/50 flex gap-2 items-center bg-slate-800/50 hover:bg-sky-500/20 transition-colors duration-300 text-sky-400 font-medium"
							>
								Check out Accomplish <ArrowUpRight size={18} />
							</Link>
						</div>
						<div className="p-8">
							<div className="text-lg text-slate-300 leading-relaxed space-y-4">
								<p>
									Accomplish is an open source AI desktop agent that automates file management, document creation, and browser tasks locally on your machine. Bring your own API keys (OpenAI, Anthropic, Google, xAI) or run local models via Ollama.
								</p>
								<p>
									<strong className="text-sky-400">What makes it different?</strong>
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li><strong>It runs locally:</strong> Your files stay on your machine. You decide which folders it can touch. Nothing gets sent to Accomplish or anyone else.</li>
									<li><strong>You bring your own AI:</strong> Use your own API key (OpenAI, Anthropic, etc.) or run with Ollama (no API key needed). No subscription, no upsell.</li>
									<li><strong>It's open source:</strong> Every line of code is on GitHub. MIT licensed. Change it, fork it, break it, fix it.</li>
									<li><strong>It acts, not just chats:</strong> File management, document creation, custom automations, skill learning.</li>
								</ul>
								<p>
									<strong className="text-sky-400">How to use it in the hackathon?</strong> Install the app, connect your AI (or use Ollama), give it access to the folders you want, and start automating! Ask it to summarize docs, clean folders, create reports, or build entirely new workflows. Get creative and show us what automation can really do.
								</p>
							</div>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* Judging Section */}
			<div id="judging" className="scroll-mt-10 py-20 bg-slate-900/30">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-bold text-sky-400 uppercase tracking-wide mb-8">
						Judging Criteria
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-sky-400 mb-3">
								Potential Impact
							</h3>
							<p className="text-slate-300">
								Evaluates how effectively the automation addresses
								a real problem or improves day-to-day workflows.
								Does it save time? Does it reduce tedious work?
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-sky-400 mb-3">
								Creativity & Originality
							</h3>
							<p className="text-slate-300">
								Assesses the uniqueness of the idea and how
								Accomplish is used in creative ways. Surprise us with
								automation use cases we haven't seen before!
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-sky-400 mb-3">
								Learning & Growth
							</h3>
							<p className="text-slate-300">
								Recognizes the learning curve tackled during the
								hackathon, especially for first-time AI agent
								builders. Show us your journey!
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-sky-400 mb-3">
								Technical Implementation
							</h3>
							<p className="text-slate-300">
								Reviews how well the idea was executed
								technically. Clean code, proper use of
								Accomplish features, and robust automation flows.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-sky-400 mb-3">
								Presentation & Demo
							</h3>
							<p className="text-slate-300">
								Considers how well you explain and demonstrate
								your automation. A clear video demo showing the
								before/after impact goes a long way.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-sky-400 mb-3">
								Best Use of Accomplish
							</h3>
							<p className="text-slate-300">
								Evaluates how effectively the project leverages Accomplish's capabilities - file management, document creation, browser automation, and custom skills.
							</p>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* FAQ Section */}
			<div id="faq" className="scroll-mt-20 py-20 bg-slate-950">
				<ViewContainer>
					<div className="[&_h2]:text-sky-400 [&_h2]:font-bold [&_div[class*='pb-4']]:text-sky-700 [&_div[class*='pb-4']_a]:text-sky-700">
						<Faq FAQS={faqs} />
					</div>
				</ViewContainer>
			</div>
		</main>
	);
};

export default HackathonPage;
