import Faq from "@/components/Faq";
import {
	HackathonContentBody,
	HackathonContentTitle,
	HackathonContentTitleH3,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import HackathonHeader from "./components/Header";
import IntroSection from "./components/IntroSection";
import JudgingCriteria from "./components/JudgingCriteria";
import FutureStackSpecialTestimonial from "./components/SpecialTestimonial";
import SponsorShowcase from "./components/SponsorShowcase";
import SponsorsGrid from "./components/SponsorsGrid";
import FutureStackStats from "./components/Stats";
import FutureStackTestimonials from "./components/Testimonials";
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
				<ViewContainer className="">
					<HackathonContentBody>
						The FutureStack GenAI hackathon was our biggest
						hackathon yet, bringing together builders from around
						the world to learn, create, and push the limits of what
						was possible with AI and cloud-native tech. With
						incredible prizes, exclusive learning opportunities, and
						direct connections to leading engineers, FutureStack was
						more than just a competition, it was a chance to launch
						projects, land interviews, and get noticed by some of
						the biggest names in tech. Participants came to explore
						new tools, sharpen their skills, or take their ideas to
						the next level, the hackathon gave them the stage to
						make it happen. Developers worldwide joined in building
						the future with cutting-edge AI and cloud technologies
						from Cerebras, Meta, and Docker.
					</HackathonContentBody>
					<HackathonContentTitle>
						FutureStack 2025 Stats
					</HackathonContentTitle>
					<HackathonContentTitleH3 className="mt-8">
						FutureStack in numbers
					</HackathonContentTitleH3>
					<FutureStackStats />
					<FutureStackSpecialTestimonial />
					<HackathonContentTitleH3 className="mt-12">
						Participants testimonials
					</HackathonContentTitleH3>
					<FutureStackTestimonials />
				</ViewContainer>
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
		</main>
	);
};

export default HackathonPage;
