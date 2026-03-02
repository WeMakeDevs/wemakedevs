import Faq from "@/components/Faq";
import {
	HackathonContentBody,
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
import TamboStats from "./components/Stats";
import TamboSpecialTestimonial from "./components/SpecialTestimonial";
import TamboTestimonials from "./components/Testimonials";
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
					showDate={DATA.showDate}
					cta={DATA.cta}
				/>

				{/* Stats Section */}
				<ViewContainer className="mt-10">
					<HackathonContentTitle className="text-slate-100 [&>h2]:text-slate-100">
						The UI Strikes Back 2026 Stats
					</HackathonContentTitle>
					<TamboStats />
					<HackathonContentTitleH3 className="mt-4 text-white [&_h3]:text-white">
						Sponsor testimonial
					</HackathonContentTitleH3>
					<TamboSpecialTestimonial />
					<HackathonContentTitleH3 className="mt-4 text-white [&_h3]:text-white">
						Participants testimonials
					</HackathonContentTitleH3>
				</ViewContainer>
				<TamboTestimonials />

				{/* About Content */}
				<ViewContainer className="mt-16 pb-20 bg-slate-900/30 rounded-2xl py-12 px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-amber-400 uppercase tracking-wide mb-6 text-center">
						About The UI Strikes Back
					</h2>
					<p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto text-center">
						A long time ago in a galaxy far, far away... developers
						struggled with static UIs that couldn't adapt to their
						users. But a new hope has emerged! The UI Strikes Back
						is a galactic online hackathon that brings together
						developers, builders, and innovators from across the
						universe. Harness the power of Tambo's Generative UI SDK
						to build React applications where the AI decides which
						components to render based on natural language
						conversations. Whether you're a Jedi Master of code or a
						Padawan just beginning your journey, this hackathon is
						your chance to join the Rebel Alliance of innovative
						developers building the future of user interfaces.
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
					<h2 className="text-3xl md:text-4xl font-bold text-amber-400 uppercase tracking-wide mb-8">
						Sponsors
					</h2>
					<div className="space-y-8">
						<div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-amber-500/20 overflow-hidden">
							<div className="flex items-center justify-between p-8 border-b border-amber-500/10 flex-col md:flex-row gap-6">
								<div className="flex items-center gap-4">
									<div className="bg-gradient-to-br from-amber-500 to-yellow-600 px-6 py-3 rounded-xl">
										<span className="text-2xl font-bold text-slate-900">
											Tambo
										</span>
									</div>
									<span className="text-slate-400 text-lg">
										Generative UI SDK for React
									</span>
								</div>
								<Link
									href="https://github.com/tambo-ai/tambo"
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-3 rounded-xl border border-amber-500/50 flex gap-2 items-center bg-slate-800/50 hover:bg-amber-500/20 transition-colors duration-300 text-amber-400 font-medium"
								>
									Check out Tambo <ArrowUpRight size={18} />
								</Link>
							</div>
							<div className="p-8">
								<p className="text-lg text-slate-300 leading-relaxed">
									Tambo is a Generative UI SDK for React. Register
									your components, and the AI decides which ones
									to render based on natural language
									conversations. Users shouldn't have to learn
									your app - Generative UI shows the right
									components based on what someone is trying to
									do. Whether you're building a startup or scaling
									an enterprise application, Tambo makes creating
									adaptive, AI-powered interfaces simple and
									developer-friendly. Join the Rebel Alliance and
									build UIs that truly respond to user intent!
								</p>
							</div>
						</div>

						<div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-amber-500/20 overflow-hidden">
							<div className="flex items-center justify-between p-8 border-b border-amber-500/10 flex-col md:flex-row gap-6">
								<div className="flex items-center gap-4">
									<div className="bg-[#BFFF00] p-2 rounded-xl">
										<Image
											src={images.charlieLogo}
											alt="Charlie Logo"
											width={48}
											height={48}
											className="rounded-lg"
										/>
									</div>
									<span className="text-slate-400 text-lg">
										The Coding Agent OS
									</span>
								</div>
								<Link
									href="https://charlielabs.ai/tambo-hackathon/"
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-3 rounded-xl border border-amber-500/50 flex gap-2 items-center bg-slate-800/50 hover:bg-amber-500/20 transition-colors duration-300 text-amber-400 font-medium"
								>
									Claim Free Credits <ArrowUpRight size={18} />
								</Link>
							</div>
							<div className="p-8">
								<p className="text-lg text-slate-300 leading-relaxed mb-4">
									Build and ship your project with Charlie — get an autonomous TypeScript engineer in your GitHub repo. Charlie can implement new features end-to-end, create ship-ready PRs that match your repo's style and conventions, and iterate based on your feedback.
								</p>
								<p className="text-lg text-amber-400 font-semibold">
									Get 10,000 credits ($500 of value) — more than enough for the hackathon and beyond!
								</p>
							</div>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* Judging Section */}
			<div id="judging" className="scroll-mt-10 py-20 bg-slate-900/30">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-bold text-amber-400 uppercase tracking-wide mb-8">
						Judging Criteria
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								Potential Impact
							</h3>
							<p className="text-slate-300">
								Evaluates how effectively the project addresses
								a meaningful problem or unlocks a valuable use
								case.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								Creativity & Originality
							</h3>
							<p className="text-slate-300">
								Assesses the uniqueness of the idea and how
								Tambo is used in creative ways.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								Learning & Growth
							</h3>
							<p className="text-slate-300">
								Recognizes the learning curve tackled during the
								hackathon, especially for first-time builders.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								Technical Implementation
							</h3>
							<p className="text-slate-300">
								Reviews how well the idea was executed
								technically and the quality of integration with
								Tambo SDK.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								Aesthetics & UX
							</h3>
							<p className="text-slate-300">
								Considers how intuitive and user-friendly the
								final experience is, especially if the project
								has a frontend.
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								Best Use Case of Tambo
							</h3>
							<p className="text-slate-300">
								Evaluates how effectively the project leverages
								Tambo's Generative UI capabilities to solve
								real-world problems and demonstrate innovative
								applications of the SDK.
							</p>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* FAQ Section */}
			<div id="faq" className="scroll-mt-20 py-20 bg-slate-950">
				<ViewContainer>
					<div className="[&_h2]:text-amber-400 [&_h2]:font-bold [&_div[class*='pb-4']]:text-orange-700 [&_div[class*='pb-4']_a]:text-orange-700">
						<Faq FAQS={faqs} />
					</div>
				</ViewContainer>
			</div>
		</main>
	);
};

export default HackathonPage;
