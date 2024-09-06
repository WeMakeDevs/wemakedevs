import {
  HackathonCoverImage,
  HackathonNav,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import HackathonContentTitle from "@/components/hackathon-content/HackathonContentTitle";
import { CustomMDX } from "@/components/mdx-remote";
import { ViewContainer } from "@/components/ui/view-container";
import { fetchHackathonData } from "@/lib/hackathon";
import { notFound } from "next/navigation";

const HackathonRules = async ({ params }: { params: { slug: string } }) => {
  const hackathons = await fetchHackathonData();
  const hackathon = hackathons.find(
    (hackathon) => hackathon.slug == params.slug,
  );

  if (!hackathon) notFound();

  return (
    <div>
      <HackathonCoverImage src={hackathon.image.cover} alt={hackathon.title} />
      <HackathonNav slug={hackathon.slug} page="rules" />
      <ViewContainer className="">
        <HackathonContentTitle>Rules of the hackathon</HackathonContentTitle>
        <HackathonContentBody>
          <CustomMDX source={hackathon.rules} />
        </HackathonContentBody>
      </ViewContainer>
    </div>
  );
};

export default HackathonRules;
