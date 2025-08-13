import {
	HackathonCoverImage,
	HackathonNav,
	HackathonScheduleComponent,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA, navLinks, schedule } from "../data";
import { images } from "../images";

const HackathonRules = async () => {
	return (
		<div className="pt-20 pb-10">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav slug={DATA.slug} page="schedule" links={navLinks} />
			<ViewContainer className="my-14">
				<HackathonScheduleComponent schedule={schedule} />
			</ViewContainer>
		</div>
	);
};

export default HackathonRules;
