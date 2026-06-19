import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import PrizesSection from "./components/PrizesSection";
import QuestProgress from "./components/QuestProgress";
import QuestSteps from "./components/QuestSteps";

const OrchestrationChallengePage = () => {
	return (
		<>
			<QuestProgress />
			<HeroSection />
			<AboutSection />
			<PrizesSection />
			<QuestSteps />
			<FaqSection />
		</>
	);
};

export default OrchestrationChallengePage;
