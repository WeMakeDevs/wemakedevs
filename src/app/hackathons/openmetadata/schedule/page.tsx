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
			<div className="sticky top-[96px] z-[90]">
				<ViewContainer>
					<div className="openmetadata-sticky-nav rounded-xl overflow-hidden">
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
					</div>
				</ViewContainer>
			</div>
			<ViewContainer className="my-14">
				<h2 className="text-3xl font-bold text-amber-400 mb-8 text-center">
					Time Circuits
				</h2>
				<p className="text-center text-slate-400 mb-8 max-w-2xl mx-auto">
					Mark these dates, time traveler. The hackathon runs April 17–26, 2026.
					Don&apos;t miss the kickoff livestream on April 13 at 4 PM BST.
				</p>
				<HackathonScheduleComponent schedule={schedule} />
			</ViewContainer>
		</div>
	);
};

export default HackathonSchedule;
