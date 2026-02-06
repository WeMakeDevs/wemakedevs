import {
	HackathonContentTitle,
	HackathonContentTitleH3,
} from "@/components/hackathon-content";
import { HackathonCoverImage } from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FaqSection";
import HackathonHeader from "./components/Header";
import JudgingCriteria from "./components/JudgingCriteria";
import PrizesShowcase from "./components/PrizesShowcase";
import SponsorsShowcase from "./components/SponsorsShowcase";
import AssembleSpecialTestimonial from "./components/SpecialTestimonial";
import AssembleHackStats from "./components/Stats";
import AssembleTestimonials from "./components/Testimonials";
import SecondaryNavbar from "./components/navbars/SecondaryNavbar";
import { DATA, faqs, navLinks } from "./data";
import { images } from "./images";

const HackathonPage = () => {
	return (
		<main className="pt-20 bg-white">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<SecondaryNavbar
				slug={DATA.slug}
				page="overview"
				links={navLinks}
			/>
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
				<ViewContainer className="mt-10">
					<HackathonContentTitle>
						AI Agents Assemble 2025 Stats
					</HackathonContentTitle>
					<AssembleHackStats />
					<AssembleSpecialTestimonial />
					<HackathonContentTitleH3 className="mt-4">
						Participants testimonials
					</HackathonContentTitleH3>
				</ViewContainer>
				<AssembleTestimonials />
				<AboutSection />
			</div>
			<div id="prizes" className="scroll-mt-16">
				<PrizesShowcase />
			</div>
			<div id="sponsors" className="scroll-mt-10">
				<SponsorsShowcase />
			</div>
			<div id="judging" className="scroll-mt-10">
				<JudgingCriteria />
			</div>
			<div id="faq" className="scroll-mt-20">
				<FaqSection FAQS={faqs} />
			</div>
		</main>
	);
};

export default HackathonPage;
