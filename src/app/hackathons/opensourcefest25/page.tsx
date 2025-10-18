import Faq from "@/components/Faq";
import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonHeader from "./components/Header";
import IntroSection from "./components/IntroSection";
import PrizesSection from "./components/PrizesSection";
import Register from "./components/Register";
import SideQuest from "./components/SideQuest";
import Timeline from "./components/Timeline";
import TipsSection from "./components/TipsSection";
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
				<PrizesSection />
			</div>
			<div className="scroll-mt-16 bg-gray-50 py-16">
				<div className="max-w-6xl mx-auto px-4">
					<SideQuest />
				</div>
			</div>
			<div id="timeline" className="scroll-mt-16">
				<Timeline />
			</div>
			<div id="tips" className="scroll-mt-16">
				<TipsSection />
			</div>
			<div id="register" className="scroll-mt-16">
				<Register />
			</div>
			<div id="faq" className="scroll-mt-20">
				<Faq FAQS={faqs} />
			</div>
		</main>
	);
};

export default HackathonPage;
