import BuilderCenter from "./components/BuilderCenter";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import LiveSessions from "./components/LiveSessions";
import Newsletter from "./components/Newsletter";
import Timeline from "./components/Timeline";

export default function AwsHackathonPage() {
	return (
		<main>
			<Hero />
			<Timeline />
			<BuilderCenter />
			<LiveSessions />
			<Newsletter />
			<Faq />
		</main>
	);
}
