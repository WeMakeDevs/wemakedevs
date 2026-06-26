import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonScheduleComponent from "@/components/hackathon-content/HackathonScheduleComponent";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA, navLinks, schedule } from "../data";
import { images } from "../images";

const HackathonSchedule = async () => {
	return (
		<div className="pt-20 pb-10 bg-gradient-to-b from-[#0b0c0e] via-[#0e1014] to-[#0b0c0e] min-h-screen">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<div className="sticky top-[96px] z-[120]">
				<ViewContainer>
					<div className="signoz-sticky-nav rounded-xl">
						<HackathonNav
							slug={DATA.slug}
							page="schedule"
							links={navLinks}
						/>
					</div>
				</ViewContainer>
			</div>
			<ViewContainer className="my-14">
				<h2 className="text-3xl font-bold text-[#f5f5f5] glow-orange mb-8 text-center">
					Mission Timeline
				</h2>
				<p className="text-center text-[#c0c1c3] mb-8 max-w-2xl mx-auto">
					Mark these dates. The hackathon runs July 20 – July 26,
					2026. Don&apos;t miss the kickoff livestream on July 20.
				</p>
				<HackathonScheduleComponent schedule={schedule} />
			</ViewContainer>
		</div>
	);
};

export default HackathonSchedule;
