import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { CustomMDX } from "@/components/mdx-remote";
import { ViewContainer } from "@/components/ui/view-container";
import { fetchHackathonData } from "@/lib/hackathon";
import { notFound } from "next/navigation";
import { Rules } from "../markdown";

const HackathonRules = async () => {
	const hackathons = await fetchHackathonData();
	const hackathon = hackathons.find(
		hackathon => hackathon.slug === "hackfrost24",
	);

	if (!hackathon) notFound();

	return (
		<div className="pt-20 pb-10">
			<HackathonCoverImage
				src={hackathon.image.cover}
				alt={hackathon.title}
			/>
			<HackathonNav slug={hackathon.slug} page="rules" />
			<ViewContainer className="my-10">
				<HackathonContentBody>
					{/* <CustomMDX source={hackathon.rules} /> */}
					<Rules />
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonRules;
