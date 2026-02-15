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
							Frank Abagnale forged checks, faked identities, and flew across the world - all because he refused to do things the hard way.
						</p>
						<p>
							This hackathon is your chance to channel that same energy. Not for fraud, obviously - but for automating all the tedious, repetitive tasks that eat up your day.
						</p>
						<p>
							<strong className="text-sky-400">Accomplish</strong> is the open source AI coworker that lives on your desktop. It reads your files, creates documents, browses the web, organizes your folders, and handles the boring stuff so you don't have to. It runs locally on your machine, and every action is shown and approved before it runs.
						</p>
						<p>
							Your challenge: <strong className="text-amber-400">use Accomplish to automate something real in your life</strong>. The more creative, the more useful, the more impressive the before-and-after - the more likely you are to walk away with INR 10,000 and a job interview (10 winners for this track).
						</p>
						<p>
							Or <strong className="text-sky-400">start your open source journey as a contributor</strong>: pick an issue with the{" "}
							<Link
								href="https://github.com/accomplish-ai/accomplish/issues?q=is%3Aissue%20state%3Aopen%20label%3Afeb_hackathon"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sky-400 hover:text-sky-300 font-semibold underline decoration-2 underline-offset-2"
							>
								feb_hackathon
							</Link>{" "}
							label, get your PR merged, and be one of 10 winners to earn INR 10,000 each.
						</p>
						<p className="text-sky-400 font-semibold text-2xl mt-6">
							They can't catch you if you've already automated everything.
						</p>
					</div>
				</ViewContainer>
			</div>

			{/* Tips: Meet Your New AI Coworker + How to Pull Off the Perfect Con */}
			<div id="tips" className="scroll-mt-16 bg-slate-950">
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
									Open Source AI Desktop Coworker
								</span>
							</div>
							<div className="flex gap-3">
								<Link
									href="https://www.accomplish.ai"
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-3 rounded-xl border border-sky-500/50 flex gap-2 items-center bg-slate-800/50 hover:bg-sky-500/20 transition-colors duration-300 text-sky-400 font-medium"
								>
									Website <ArrowUpRight size={18} />
								</Link>
								<Link
									href="https://github.com/accomplish-ai/accomplish"
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-3 rounded-xl border border-sky-500/50 flex gap-2 items-center bg-slate-800/50 hover:bg-sky-500/20 transition-colors duration-300 text-sky-400 font-medium"
								>
									GitHub <ArrowUpRight size={18} />
								</Link>
							</div>
						</div>
						<div className="p-8">
							<div className="text-lg text-slate-300 leading-relaxed space-y-4">
								<p>
									Accomplish is the open source AI coworker that lives on your desktop. It's an AI computer-use app that runs on your computer. You can ask it to perform any browsing task, rename and organize files based on their contents, generate or rewrite documents, or scan a folder and summarize what's inside.
								</p>
								<p>
									It can also create calendar entries from meeting notes, draft follow-up documents, or prepare a folder for a project by setting up files and structure. Nothing leaves your machine unless you allow it, and every action is shown and approved before it runs.
								</p>
								<p>
									<strong className="text-sky-400">Why developers love it:</strong>
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li><strong>100% open source:</strong> MIT licensed. Every line of code is on GitHub.</li>
									<li><strong>Runs locally:</strong> Your files never leave your machine. You control access.</li>
									<li><strong>Bring your own AI:</strong> Use xAI, OpenAI, Anthropic, Google Gemini, DeepSeek, or local models via Ollama. No subscriptions.</li>
									<li><strong>It acts, not just chats:</strong> File management, document creation, browser automation, custom skills.</li>
								</ul>
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
								Real-World Impact
							</h3>
							<p className="text-slate-300">
								Does this automation solve a real problem? Does it save actual time? We want to see boring, tedious tasks vanish. The more practical, the better.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-sky-400 mb-3">
								Creativity & Originality
							</h3>
							<p className="text-slate-300">
								Frank forged checks that even banks couldn't detect. Show us something we haven't seen before. Unexpected, clever, and uniquely you.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-sky-400 mb-3">
								Learning & Growth
							</h3>
							<p className="text-slate-300">
								First time using Accomplish? That's great - we love seeing the learning journey. Show us what you figured out and how you grew.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-sky-400 mb-3">
								Technical Execution
							</h3>
							<p className="text-slate-300">
								How well did you pull it off? Clean implementation, good use of Accomplish features, and a workflow that actually works reliably.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-sky-400 mb-3">
								Demo & Presentation
							</h3>
							<p className="text-slate-300">
								Show us the before and after. A 3-minute video that clearly demonstrates the problem, the solution, and the magic moment where Accomplish takes over.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-sky-400 mb-3">
								Best Use of Accomplish
							</h3>
							<p className="text-slate-300">
								How deeply did you leverage Accomplish? File management, document creation, browser automation, custom skills - the more you use, the more impressed we'll be.
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
