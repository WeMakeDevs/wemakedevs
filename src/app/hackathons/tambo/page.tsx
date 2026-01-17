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
import { DATA, faqs, navLinks } from "./data";
import { images } from "./images";

const HackathonPage = () => {
	return (
		<main className="pt-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
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
			<div id="about" className="scroll-mt-16 [&_h2]:text-amber-400">
				<HackathonHeader
					title={DATA.title}
					description={DATA.description}
					startDate={DATA.startDate}
					endDate={DATA.endDate}
					prize={DATA.prize}
					cta={DATA.cta}
				/>
				<ViewContainer className="mt-10">
					<HackathonContentTitle className="text-amber-400">
						About The UI Strikes Back
					</HackathonContentTitle>
					<HackathonContentBody className="text-slate-300">
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
					</HackathonContentBody>
					<AboutSection />
				</ViewContainer>
			</div>
			<div id="prizes" className="scroll-mt-16">
				<PrizesShowcase />
			</div>
			<div
				id="sponsor"
				className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 scroll-mt-10 [&_h2]:text-amber-400"
			>
				<ViewContainer>
					<HackathonContentTitle className="text-amber-400">
						Sponsor
					</HackathonContentTitle>
					<div className="bg-slate-800/50 rounded-[8px] border border-amber-500/30 overflow-hidden shadow-lg shadow-amber-500/10 mt-6">
						<div className="flex items-center justify-between p-6 bg-gradient-to-r from-slate-800 to-slate-700 flex-col md:flex-row gap-4">
							<div className="flex items-center gap-3">
								<div className="bg-amber-500/20 p-3 rounded-lg border border-amber-500/30">
									<span className="text-2xl font-bold text-amber-400">
										Tambo
									</span>
								</div>
							</div>
							<Link
								href="https://github.com/tambo-ai/tambo"
								className="px-4 py-2 rounded-[4px] border-amber-500/50 border flex gap-2 items-center bg-slate-900 hover:bg-amber-500/20 transition-colors duration-300 shadow-sm text-amber-400"
							>
								Check out Tambo <ArrowUpRight size={16} />
							</Link>
						</div>
						<div className="p-6 text-lg text-slate-300 border-t border-amber-500/20">
							Tambo is a Generative UI SDK for React. Register
							your components, and the AI decides which ones to
							render based on natural language conversations.
							Users shouldn't have to learn your app - Generative
							UI shows the right components based on what someone
							is trying to do. Whether you're building a startup
							or scaling an enterprise application, Tambo makes
							creating adaptive, AI-powered interfaces simple and
							developer-friendly. Join the Rebel Alliance and
							build UIs that truly respond to user intent!
						</div>
					</div>
				</ViewContainer>
			</div>
			<div
				id="judging"
				className="scroll-mt-10 bg-gradient-to-b from-slate-900 to-slate-950 py-16 [&_h2]:text-amber-400"
			>
				<ViewContainer>
					<HackathonContentTitle className="text-amber-400">
						Judging Criteria
					</HackathonContentTitle>
					<HackathonContentBody className="text-slate-300">
						<ul className="list-disc list-inside space-y-3">
							<li>
								<span className="font-semibold text-amber-400">
									Potential Impact:
								</span>{" "}
								Evaluates how effectively the project addresses
								a meaningful problem or unlocks a valuable use
								case.
							</li>
							<li>
								<span className="font-semibold text-amber-400">
									Creativity & Originality:
								</span>{" "}
								Assesses the uniqueness of the idea and how
								Tambo is used in creative ways.
							</li>
							<li>
								<span className="font-semibold text-amber-400">
									Learning & Growth:
								</span>{" "}
								Recognizes the learning curve tackled during the
								hackathon, especially for first-time builders.
							</li>
							<li>
								<span className="font-semibold text-amber-400">
									Technical Implementation:
								</span>{" "}
								Reviews how well the idea was executed
								technically and the quality of integration with
								Tambo SDK.
							</li>
							<li>
								<span className="font-semibold text-amber-400">
									Aesthetics & UX:
								</span>{" "}
								Considers how intuitive and user-friendly the
								final experience is, especially if the project
								has a frontend.
							</li>
						</ul>
					</HackathonContentBody>
				</ViewContainer>
			</div>
			<div id="faq" className="scroll-mt-20 bg-slate-950 py-16">
				<ViewContainer>
					<div className="[&_h2]:text-amber-400 [&_h2]:font-bold">
						<Faq FAQS={faqs} />
					</div>
				</ViewContainer>
			</div>
		</main>
	);
};

export default HackathonPage;
