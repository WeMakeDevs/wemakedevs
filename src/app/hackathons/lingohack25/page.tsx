import Faq from "@/components/Faq";
import {
	HackathonContentBody,
	HackathonContentTitle,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
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
			<div id="about" className="scroll-mt-16">
				<HackathonHeader
					title={DATA.title}
					description={DATA.description}
					startDate={DATA.startDate}
					endDate={DATA.endDate}
					prize={DATA.prize}
					cta={DATA.cta}
				/>
				<AboutSection />
			</div>
			<div id="prizes" className="scroll-mt-16">
				<PrizesShowcase />
			</div>
			<div id="sponsor" className="bg-white py-16 scroll-mt-10">
				<ViewContainer>
					<HackathonContentTitle>Sponsor</HackathonContentTitle>
					<div className="bg-stone-50 rounded-[8px] border border-stone-200 overflow-hidden shadow-md mt-6">
						<div className="flex items-center justify-between p-6 bg-stone-100 flex-col md:flex-row gap-4">
							<Image src={images.lingoLogo} alt="Lingo Logo" />
							<Link
								href="https://github.com/lingodotdev/lingo.dev"
								className="px-4 py-2 rounded-[4px] border-stone-200 border flex gap-2 items-center bg-white hover:bg-transparent transition-colors duration-300 shadow-sm"
							>
								Check out Lingo <ArrowUpRight size={16} />
							</Link>
						</div>
						<div className="p-6 text-lg text-stone-900 border-t border-stone-200">
							Lingo is an AI-powered localization platform that
							helps developers translate and manage their apps and
							websites in multiple languages, without extra
							effort. It connects directly with your existing
							tools and workflows, so you can make your product
							global faster. Whether you’re building a startup or
							scaling an open-source project, Lingo makes going
							multilingual simple, accurate, and
							developer-friendly.
						</div>
					</div>
				</ViewContainer>
			</div>
			<div id="judging" className="scroll-mt-10">
				<ViewContainer>
					<HackathonContentTitle>
						Judging Criteria
					</HackathonContentTitle>
					<HackathonContentBody>
						<ul className="list-disc list-inside space-y-3">
							<li>
								<span className="font-semibold">
									Potential Impact:
								</span>{" "}
								Evaluates how effectively the project addresses
								a meaningful problem or unlocks a valuable use
								case.
							</li>
							<li>
								<span className="font-semibold">
									Creativity & Originality:
								</span>{" "}
								Assesses the uniqueness of the idea and how
								Lingo is used in creative ways.
							</li>
							<li>
								<span className="font-semibold">
									Learning & Growth:
								</span>{" "}
								Recognizes the learning curve tackled during the
								hackathon, especially for first-time builders.
							</li>
							<li>
								<span className="font-semibold">
									Technical Implementation:
								</span>{" "}
								Reviews how well the idea was executed
								technically and the quality of integration with
								Lingo CLI.
							</li>
							<li>
								<span className="font-semibold">
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
			<div id="faq" className="scroll-mt-20">
				<ViewContainer>
					<Faq FAQS={faqs} />
				</ViewContainer>
			</div>
		</main>
	);
};

export default HackathonPage;
