import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import PrizesSection from "./components/PrizesSection";
import QuestProgress from "./components/QuestProgress";
import QuestSteps from "./components/QuestSteps";
import SocialProof from "./components/SocialProof";

const OrchestrationChallengePage = () => {
	return (
		<>
			<QuestProgress />
			<HeroSection />
			<AboutSection />
			<PrizesSection />
			<SocialProof />
			<QuestSteps />
			<FaqSection />
		</>
	);
};

export default OrchestrationChallengePage;
