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
		<div className="pt-20 pb-10 bg-gradient-to-b from-[#0d0618] via-[#160a26] to-[#0d0618] min-h-screen">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<div className="sticky top-[96px] z-[120]">
				<ViewContainer>
					<div className="cognee-sticky-nav rounded-xl">
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
				<h2 className="text-3xl font-bold text-[#ffd24a] mb-8 text-center">
					The Itinerary
				</h2>
				<p className="text-center text-slate-400 mb-8 max-w-2xl mx-auto">
					Mark these dates. The hackathon runs June 29 – July 5, 2026.
					Don&apos;t miss the kickoff livestream on June 26 — try to
					remember this time.
				</p>
				<HackathonScheduleComponent schedule={schedule} />
			</ViewContainer>
		</div>
	);
};

export default HackathonSchedule;
