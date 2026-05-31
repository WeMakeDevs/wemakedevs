import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA, navLinks } from "../../data";
import { images } from "../../images";
import SubpageHeader from "../SubpageHeader";
import { PrsSection } from "../sections";

const PrsPage = () => {
	return (
		<div className="pt-20 pb-16 min-h-screen">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav slug={DATA.slug} page="projects" links={navLinks} />

			<ViewContainer className="pt-12">
				<SubpageHeader active="prs" />
				<PrsSection />
			</ViewContainer>
		</div>
	);
};

export default PrsPage;
