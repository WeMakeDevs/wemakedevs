import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA as hackathonData } from "../data";
import { hackfrost24Cover } from "../images";
import { Resources } from "../markdown";

const HackathonResources = async () => {
	return (
		<div className="pt-20 pb-10">
			<HackathonCoverImage
				src={hackfrost24Cover}
				alt={hackathonData.title}
			/>
			<HackathonNav slug={hackathonData.slug} page="resources" />
			<ViewContainer>
				<HackathonContentBody>
					<Resources />
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
