import {
  HackathonCoverImage,
  HackathonDate,
  HackathonNav,
} from "@/components/hackathon-content/";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import HackathonContentTitle from "@/components/hackathon-content/HackathonContentTitle";
import HackathonStatus from "@/components/HackathonStatus";
import { CustomMDX } from "@/components/mdx-remote";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { fetchHackathonData } from "@/lib/hackathon";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Link from "next/link";
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
      <ViewContainer className='my-10'>
        <div className='bg-foreground/5 border border-foreground/10 rounded-lg px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='col-span-1 lg:col-span-2'>
            <HackathonStatus
              className='w-fit'
              startDate={hackathon.startDate}
              endDate={hackathon.endDate}
            />
            <h1 className='text-4xl md:text-6xl font-bold mt-6'>
              {hackathon.title}
            </h1>
            <p className='text-base md:text-lg text-foreground/90 font-medium leading-snug mt-4 tracking-wide'>
              {hackathon.description}
            </p>
            <Link
              href={`/hackathons/${hackathon.slug}/submit`}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-4 md:mt-6"
              )}
            >
              Participate in hackathon
            </Link>
          </div>
          <div className='bg-background p-4 md:p-6'>
            <HackathonDate
              startDate={hackathon.startDate}
              endDate={hackathon.endDate}
            />
            <hr className='my-5 border-foreground/10' />
            <p className='flex gap-4 items-end'>
              Prizes worth:{" "}
              <span className='text-2xl md:text-3xl font-title font-medium'>
                {hackathon.prize}₹+
              </span>
            </p>
          </div>
        </div>
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
            {hackathon.prizes.map((prize, index) => (
              <div className='space-y-4' key={index}>
                <p className='text-lg md:text-xl font-semibold flex gap-2 items-center'>
                  <Star size={20} strokeWidth={0} fill='#ffd333' /> {prize.name}
                </p>
                <p className='text-foreground/85'>{prize.description}</p>
              </div>
            ))}
          </HackathonContentBody>
        </div>
      </ViewContainer>
    </main>
  );
};

export default HackathonPage;
