import Faq from "@/components/Faq";
import {
	HackathonContentBody,
	HackathonContentTitle,
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
		<main className="pt-20">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav slug={DATA.slug} page="overview" links={navLinks} />
			<div id="about" className="scroll-mt-16">
				<HackathonHeader
					title={DATA.title}
					description={DATA.description}
					startDate={DATA.startDate}
					endDate={DATA.endDate}
					prize={DATA.prize}
					showDate={DATA.showDate}
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
							<Image
								src={images.motiaLogo}
								alt="Motia Logo"
								className="w-36"
							/>
							<Link
								href="https://motia.dev"
								className="px-4 py-2 rounded-[4px] border-stone-200 border flex gap-2 items-center bg-white hover:bg-transparent transition-colors duration-300 shadow-sm"
							>
								Check out Motia <ArrowUpRight size={16} />
							</Link>
						</div>
						<div className="p-6 text-lg text-stone-900 border-t border-stone-200">
							Motia is the single backend runtime where API
							endpoints, background jobs, scheduled tasks, and AI
							agents written in any language, are all unified in
							workflows, with full observability, scalability and
							resiliency. Build, automate, and evolve all on one
							platform with one command line to quickly deploy to
							production.
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
								Evaluates how effectively the project solves a
								real-world backend or workflow problem, from
								automating processes to scaling production
								systems with ease.
							</li>
							<li>
								<span className="font-semibold">
									Creativity & Originality:
								</span>{" "}
								Assesses the uniqueness of the idea and how
								creatively Motia's unified backend runtime is
								used to combine APIs, background jobs, tasks, or
								AI agents in new ways.
							</li>
							<li>
								<span className="font-semibold">
									Learning & Growth:
								</span>{" "}
								Recognizes the learning journey and
								problem-solving mindset demonstrated, especially
								for participants exploring backend automation or
								multi-language workflows for the first time.
							</li>
							<li>
								<span className="font-semibold">
									Technical Implementation:
								</span>{" "}
								Reviews how well the project was executed
								technically, including code quality, use of
								Motia CLI, efficiency of workflows, scalability,
								and integration depth across services.
							</li>
							<li>
								<span className="font-semibold">
									User Experience & Design:
								</span>{" "}
								Considers how intuitive and polished the
								end-to-end experience is, whether it's a
								developer-friendly backend dashboard, API
								interface, or any visual element supporting the
								workflow.
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
