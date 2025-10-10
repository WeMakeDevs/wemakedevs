import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import HackathonHeader from "./components/Header";
import IntroSection from "./components/IntroSection";
import JudgingCriteria from "./components/JudgingCriteria";
import SponsorShowcase from "./components/SponsorShowcase";
import SponsorsGrid from "./components/SponsorsGrid";
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
				<IntroSection />
			</div>
			<div id="prizes" className="scroll-mt-16">
				<SponsorShowcase />
			</div>
			<div id="sponsors" className="bg-white py-16 scroll-mt-10">
				<div className="max-w-6xl mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-800 mb-4">
							Sponsors
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Meet our amazing sponsors powering this hackathon
						</p>
					</div>
					<SponsorsGrid />
				</div>
			</div>
			<div id="judging" className="scroll-mt-10">
				<JudgingCriteria />
			</div>
			<div id="faq" className="scroll-mt-20">
				<ViewContainer>
					<Faq FAQS={faqs} />
				</ViewContainer>
			</div>
			<Banner className="flex items-center text-base md:text-lg font-medium">
				<div className="flex flex-col md:flex-row items-center justify-center">
					<span className="text-white">
						Hackathon has ended and the results will be announced
						soon!
					</span>
				</div>
			</Banner>
		</main>
	);
};

export default HackathonPage;
