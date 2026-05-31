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
		<div className="pt-20 pb-10 bg-gradient-to-b from-[#0a0f1e] via-[#0c1a2e] to-[#0a0f1e] min-h-screen">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav
				slug={DATA.slug}
				page="schedule"
				links={navLinks}
				navCta={{
					label: DATA.projectsCta.label,
					href: DATA.projectsCta.href,
					openInNewTab: DATA.projectsCta.openInNewTab,
					disabled: DATA.projectsCta.disabled,
				}}
			/>
			<ViewContainer className="my-14">
				<h2 className="text-3xl font-bold text-amber-400 mb-8 text-center">
					🗺️ Voyage Schedule
				</h2>
				<HackathonScheduleComponent schedule={schedule} />
			</ViewContainer>
		</div>
	);
};

export default HackathonSchedule;
