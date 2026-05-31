import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA, navLinks } from "../../data";
import { images } from "../../images";
import SubpageHeader from "../SubpageHeader";
import { BlogsSection } from "../sections";

const BlogsPage = () => {
	return (
		<div className="pt-20 pb-16 min-h-screen">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav slug={DATA.slug} page="projects" links={navLinks} />

			<ViewContainer className="pt-12">
				<SubpageHeader active="blogs" />
				<BlogsSection />
			</ViewContainer>
		</div>
	);
};

export default BlogsPage;
