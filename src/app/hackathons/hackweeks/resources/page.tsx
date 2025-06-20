import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { ViewContainer } from "@/components/ui/view-container";
import hackathonData from "../data";
import { images } from "../images";
import { Resources } from "../markdown";

const HackathonResources = async () => {
	return (
		<div className="pt-20 pb-10">
			<HackathonCoverImage src={images.cover} alt={hackathonData.title} />
			<HackathonNav
				slug={hackathonData.slug}
				page="resources"
				links={hackathonData.navLinks}
				navCta={hackathonData.hackathonCtas.nav}
			/>
			<ViewContainer>
				<HackathonContentBody>
					<Resources />
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
