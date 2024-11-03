import {
  HackathonContentTitleH3,
  HackathonCoverImage,
  HackathonNav,
} from "@/components/hackathon-content/";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import HackathonContentTitle from "@/components/hackathon-content/HackathonContentTitle";
import HackathonMain from "@/components/hackathon-content/HackathonMain";
import { CustomMDX } from "@/components/mdx-remote";
import { ViewContainer } from "@/components/ui/view-container";
import { fetchHackathonData } from "@/lib/hackathon";
import { Star } from "lucide-react";
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
    <main className='pt-20'>
      <HackathonCoverImage src={hackathon.image.cover} alt={hackathon.title} />
      <HackathonNav slug={hackathon.slug} page='overview' />
      <HackathonMain hackathon={hackathon} />
      <ViewContainer className=''>
        {/* MDX File information renders from here */}
        <div className=''>
          <HackathonContentTitle>Hackathon Overview</HackathonContentTitle>
          <HackathonContentBody>
            <CustomMDX source={hackathon.about} />
          </HackathonContentBody>
          <HackathonContentTitle id='requirements'>
            Requirements
          </HackathonContentTitle>
          <HackathonContentBody>
            <CustomMDX source={hackathon.requirements} />
          </HackathonContentBody>
          <HackathonContentTitle>Prizes</HackathonContentTitle>
          <HackathonContentBody className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='space-y-8'>
              <HackathonContentTitleH3>General Prizes</HackathonContentTitleH3>
              {hackathon.prizes.general.map((prize, index) => (
                <div className='space-y-4' key={index}>
                  <p className='text-lg md:text-xl font-semibold flex gap-2 items-center'>
                    <Star
                      size={20}
                      strokeWidth={0}
                      fill='#ffd333'
                      className='shrink-0'
                    />{" "}
                    <div className='flex flex-wrap gap-2 items-center'>
                      {prize.name} -
                      <span className='px-2 py-1 bg-blue-600 text-white rounded-[4px]'>
                        {prize.prize}
                      </span>
                    </div>
                  </p>
                  <p className='text-foreground/85'>{prize.description}</p>
                </div>
              ))}
            </div>
            <div className='space-y-8'>
              <HackathonContentTitleH3>Special Prizes</HackathonContentTitleH3>
              {hackathon.prizes.special.map((prize, index) => (
                <div className='space-y-4' key={index}>
                  <p className='text-lg md:text-xl font-semibold flex gap-2 items-center'>
                    <Star
                      size={20}
                      strokeWidth={0}
                      fill='#ffd333'
                      className='shrink-0'
                    />{" "}
                    <div className='flex flex-wrap gap-2 items-center'>
                      {prize.name} -
                      <span className='px-2 py-1 bg-blue-600 text-white rounded-[4px]'>
                        {prize.prize}
                      </span>
                    </div>
                  </p>
                  <p className='text-foreground/85'>{prize.description}</p>
                </div>
              ))}
            </div>
          </HackathonContentBody>
        </div>
      </ViewContainer>
    </main>
  );
};

export default HackathonPage;
