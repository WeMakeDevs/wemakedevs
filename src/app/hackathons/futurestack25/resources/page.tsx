import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA, navLinks } from "../data";
import { images } from "../images";
import { Resources } from "../markdown";

const HackathonResources = async () => {
	return (
		<div className="pt-20 pb-10">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav
				slug={DATA.slug}
				page="resources"
				links={navLinks}
				navCta={{
					label: "Results will be announced soon!",
					href: DATA.cta.href,
					openInNewTab: DATA.cta.openInNewTab,
					disabled: true,
				}}
			/>
			<ViewContainer>
				<Resources />
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
