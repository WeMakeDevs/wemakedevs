import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import HackathonContentTitle from "@/components/hackathon-content/HackathonContentTitle";
import HackathonMain from "@/components/hackathon-content/HackathonMain";
import { CustomMDX } from "@/components/mdx-remote";
import { ViewContainer } from "@/components/ui/view-container";
import { fetchHackathonData } from "@/lib/hackathon";
import { notFound } from "next/navigation";
import { DATA as hackathonData } from "../data";
import { Resources } from "../markdown";

const HackathonResources = async () => {
	const hackathons = await fetchHackathonData();
	const hackathon = hackathons.find(
		hackathon => hackathon.slug === "hackfrost24",
	);

	if (!hackathon) notFound();

	return (
		<div className="pt-20 pb-10">
			<HackathonCoverImage
				src={hackathon.image.cover}
				alt={hackathonData.title}
			/>
			<HackathonNav slug={hackathonData.slug} page="resources" />
			<ViewContainer>
				<HackathonContentBody>
					{/* <CustomMDX source={hackathon.resources} /> */}
					<Resources />
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
