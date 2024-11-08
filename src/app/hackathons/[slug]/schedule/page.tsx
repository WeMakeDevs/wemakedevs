import {
  HackathonCoverImage,
  HackathonNav,
} from "@/components/hackathon-content";
import { HackathonScheduleComponent } from "@/components/hackathon-content";
import HackathonMain from "@/components/hackathon-content/HackathonMain";
import { ViewContainer } from "@/components/ui/view-container";
import { fetchHackathonData } from "@/lib/hackathon";
import { notFound } from "next/navigation";

const HackathonSchedule = async ({ params }: { params: { slug: string } }) => {
  const hackathons = await fetchHackathonData();
  const hackathon = hackathons.find(
    (hackathon) => hackathon.slug == params.slug
  );

  if (!hackathon) notFound();

  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return (
    <div className='pt-20'>
      <HackathonCoverImage src={hackathon.image.cover} alt={hackathon.title} />
      <HackathonNav slug={hackathon.slug} page='schedule' />
      <HackathonMain hackathon={hackathon} />
      <ViewContainer className='my-14'>
        <HackathonScheduleComponent schedule={hackathon.schedule} />
      </ViewContainer>
    </div>
  );
};

export default HackathonSchedule;
