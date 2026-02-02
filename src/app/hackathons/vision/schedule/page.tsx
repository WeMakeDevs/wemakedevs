import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import HackathonScheduleComponent from "../components/HackathonScheduleComponent";
import { DATA, navLinks, schedule } from "../data";
import { images } from "../images";

const HackathonSchedule = async () => {
	return (
		<div className="pt-20 pb-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav
				slug={DATA.slug}
				page="schedule"
				links={navLinks}
				navCta={{
					label: DATA.cta.label,
					href: DATA.cta.href,
					openInNewTab: DATA.cta.openInNewTab,
					disabled: DATA.cta.disabled,
				}}
			/>
			<ViewContainer className="my-14">
				<h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
					Mission Timeline
				</h2>
				<p className="text-center text-slate-400 mb-8 max-w-2xl mx-auto">
					Mark these dates, Agent. The mission runs from February 23 to March 1, 2026. 
					Don't miss the kickoff livestream on Feb 23 at 4 PM GMT.
				</p>
				<HackathonScheduleComponent schedule={schedule} />
			</ViewContainer>
		</div>
	);
};

export default HackathonSchedule;
