import BuilderCenter from "./components/BuilderCenter";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import LiveSessions from "./components/LiveSessions";
import Newsletter from "./components/Newsletter";
import RouteMap from "./components/RouteMap";
import Timeline from "./components/Timeline";

export default function AwsHackathonPage() {
	return (
		<main>
			<Hero />
			<RouteMap />
			<Timeline />
			<BuilderCenter />
			<LiveSessions />
			<Newsletter />
			<Faq />
		</main>
	);
}
