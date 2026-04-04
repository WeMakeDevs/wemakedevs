import Faq from "@/components/Faq";
import {
	HackathonContentTitle,
	HackathonContentTitleH3,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AboutSection from "./components/AboutSection";
import HackathonHeader from "./components/Header";
import PrizesShowcase from "./components/PrizesShowcase";
import VisionStats from "./components/Stats";
import VisionTestimonials from "./components/Testimonials";
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

				{/* Stats Section */}
				<ViewContainer className="mt-10">
					<HackathonContentTitle className="text-slate-100 [&>h2]:text-slate-100">
						Vision Possible 2025 Stats
					</HackathonContentTitle>
					<VisionStats />
					<HackathonContentTitleH3 className="mt-4 text-white [&_h3]:text-white">
						Participants testimonials
					</HackathonContentTitleH3>
				</ViewContainer>
				<VisionTestimonials />

				{/* About Content */}
				<ViewContainer className="mt-16 pb-20 bg-slate-900/30 rounded-2xl py-12 px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-cyan-400 uppercase tracking-wide mb-6 text-center">
						Mission Briefing
					</h2>
					<p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto text-center">
						Your mission, should you choose to accept it: Build 
						multi-modal AI agents that watch, listen, and understand 
						video in real-time. Vision Agents gives you the building 
						blocks to create intelligent, low-latency video experiences 
						powered by your models, your infrastructure, and your use 
						cases. Whether you're building security systems, sports 
						coaching AI, interactive gaming, or something we haven't 
						imagined yet - this hackathon is your proving ground. 
						This message will self-destruct... after you build something amazing.
					</p>
				</ViewContainer>

				{/* Features Section */}
				<AboutSection />

				{/* Submit Project CTA */}
				{DATA.submissionFormUrl && (
					<ViewContainer className="mt-12 pb-4">
						<Link
							href={DATA.submissionFormUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 md:p-8 rounded-2xl border-2 border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors group"
						>
							<span className="text-xl md:text-2xl font-bold text-cyan-400 group-hover:text-cyan-300">
								Submit your project →
							</span>
							<span className="text-slate-400 text-center sm:text-left">
								One person per team. Submit via the official form before the deadline.
							</span>
							<ArrowUpRight className="w-6 h-6 text-cyan-400 shrink-0" />
						</Link>
					</ViewContainer>
				)}
			</div>

			{/* Prizes Section */}
			<div id="prizes" className="scroll-mt-16 bg-slate-900/30">
				<PrizesShowcase />
			</div>

			{/* Sponsor Section */}
			<div id="sponsor" className="py-20 scroll-mt-10 bg-slate-950">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-bold text-cyan-400 uppercase tracking-wide mb-8">
						Mission Sponsor
					</h2>
					<div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-cyan-500/20 overflow-hidden">
						<div className="flex items-center justify-between p-8 border-b border-cyan-500/10 flex-col md:flex-row gap-6">
							<div className="flex items-center gap-4">
								<div className="bg-slate-800 px-6 py-3 rounded-xl border border-cyan-500/20">
									<Image
										src={images.sponsorLogo}
										alt="Vision Agents by Stream"
										width={200}
										height={50}
										className="h-10 w-auto"
									/>
								</div>
								<span className="text-slate-400 text-lg">
									Open Vision Agents by Stream
								</span>
							</div>
							<Link
								href="https://github.com/GetStream/Vision-Agents"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 rounded-xl border border-cyan-500/50 flex gap-2 items-center bg-slate-800/50 hover:bg-cyan-500/20 transition-colors duration-300 text-cyan-400 font-medium"
							>
								Access Intel <ArrowUpRight size={18} />
							</Link>
						</div>
						<div className="p-8">
							<p className="text-lg text-slate-300 leading-relaxed">
								Vision Agents is an open-source SDK by Stream for building 
								real-time Vision AI agents. It provides the building blocks 
								to create intelligent, low-latency video experiences - 
								combining vision models like YOLO, Roboflow, and Moondream 
								with LLMs like Gemini and OpenAI. With native SDK methods, 
								ultra-low latency via Stream's edge network, and support 
								for React, Android, iOS, Flutter, React Native, and Unity, 
								you have everything you need to build the next generation 
								of video AI applications. Your mission: push the boundaries 
								of what's possible with real-time video intelligence.
							</p>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* Judging Section */}
			<div id="judging" className="scroll-mt-10 py-20 bg-slate-900/30">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-bold text-cyan-400 uppercase tracking-wide mb-8">
						Mission Evaluation Criteria
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-cyan-400 mb-3">
								Potential Impact
							</h3>
							<p className="text-slate-300">
								How effectively does the project address a 
								meaningful problem or unlock a valuable use 
								case in the Vision AI space?
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-cyan-400 mb-3">
								Creativity & Innovation
							</h3>
							<p className="text-slate-300">
								How unique is the idea? Does it push the 
								boundaries of what's possible with real-time 
								video AI?
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-cyan-400 mb-3">
								Technical Excellence
							</h3>
							<p className="text-slate-300">
								How well is the project implemented? Does it 
								demonstrate mastery of Vision Agents SDK and 
								related technologies?
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-cyan-400 mb-3">
								Real-Time Performance
							</h3>
							<p className="text-slate-300">
								Does the agent truly operate in real-time? 
								Is it responsive and low-latency as Vision 
								Agents enables?
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-cyan-400 mb-3">
								User Experience
							</h3>
							<p className="text-slate-300">
								Is the agent intuitive to interact with? 
								Does it provide a seamless, polished 
								experience?
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-cyan-400 mb-3">
								Best Use of Vision Agents
							</h3>
							<p className="text-slate-300">
								How effectively does the project leverage 
								Vision Agents' capabilities - video AI, 
								low latency, native APIs, and multi-platform support?
							</p>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* FAQ Section */}
			<div id="faq" className="scroll-mt-20 py-20 bg-slate-950">
				<ViewContainer>
					<div className="[&_h2]:text-cyan-400 [&_h2]:font-bold [&_div[class*='pb-4']]:text-cyan-700 [&_div[class*='pb-4']_a]:text-cyan-700">
						<Faq FAQS={faqs} />
					</div>
				</ViewContainer>
			</div>
		</main>
	);
};

export default HackathonPage;
