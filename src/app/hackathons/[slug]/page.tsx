import { HackathonCoverImage, HackathonDate, HackathonNav } from "@/components/hackathon-content/";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import HackathonContentTitle from "@/components/hackathon-content/HackathonContentTitle";
import { HackathonCardStatus } from "@/components/HackathonCard";
import { CustomMDX } from "@/components/mdx-remote";
import { ViewContainer } from "@/components/ui/view-container";
import { fetchHackathonData } from "@/lib/hackathon";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  let hackathons = await fetchHackathonData();

  return hackathons.map((hackathon) => ({
    slug: hackathon.slug,
  }));
}

const HackathonPage = async ({ params }: { params: { slug: string } }) => {
  let hackathons = await fetchHackathonData();
  let hackathon = hackathons.find((hackathon) => hackathon.slug == params.slug);

  if (!hackathon) notFound();

  return (
    <main>
      <HackathonCoverImage src={hackathon.image.cover} alt={hackathon.title} />
      <HackathonNav slug={hackathon.slug} page="overview" />
      <ViewContainer>
        <div className={cn("")} >
          <div className="bg-foreground/5 border border-foreground/10 rounded-lg px-6 py-8">
            <HackathonCardStatus className="w-fit" status={hackathon.status} />
            <h1 className="text-4xl md:text-6xl font-bold mt-6">{hackathon.title}</h1>
            <p className="text-base md:text-lg text-foreground/90 font-medium leading-snug mt-4 tracking-wide">
              {hackathon.description}
            </p>
            <HackathonDate startDate={hackathon.startDate} endDate={hackathon.endDate} />
            <p className="">Prizes worth: {hackathon.prize}₹+</p>
          </div>
          {/* MDX File information renders from here */}
          <div className="">
            <HackathonContentTitle>Hackathon Overview</HackathonContentTitle>
            <HackathonContentBody>
              <CustomMDX source={hackathon.about} />
            </HackathonContentBody>
            <HackathonContentTitle>Requirements</HackathonContentTitle>
            <HackathonContentBody>
              <CustomMDX source={hackathon.requirements} />
            </HackathonContentBody>
          </div>
        </div>
      </ViewContainer>
    </main>
  );
};

export default HackathonPage;
