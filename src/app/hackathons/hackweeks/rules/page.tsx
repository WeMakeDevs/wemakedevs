import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { ViewContainer } from "@/components/ui/view-container";
import hackathonData from "../data";
import { images } from "../images";
import { Rules } from "../markdown";

const HackathonRules = async () => {
	return (
		<div className="pt-20 pb-10">
			<HackathonCoverImage src={images.cover} alt={hackathonData.title} />
			<HackathonNav slug={hackathonData.slug} page="rules" />
			<ViewContainer className="my-10">
				<HackathonContentBody>
					<Rules />
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonRules;
