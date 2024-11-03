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
import { ArrowUpRight, CalendarFold, Clock, Link2 } from "lucide-react";
import Link from "next/link";
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

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return (
    <div className='pt-20'>
      <HackathonCoverImage src={hackathon.image.cover} alt={hackathon.title} />
      <HackathonNav slug={hackathon.slug} page='schedule' />
      <HackathonMain hackathon={hackathon} />
      <ViewContainer className='space-y-10 my-14'>
        <HackathonContentTitle>Hackathon Schedule</HackathonContentTitle>
        {hackathon.schedule.map((item, index) => (
          <div className='flex gap-8 items-center relative' key={index}>
            {index == 0 ? (
              <div className='absolute h-[85%] w-1 top-1/2 left-[14px] bg-[#d8e6fa] z-0'></div>
            ) : index == hackathon.schedule.length - 1 ? (
              <div className='absolute h-[50%] w-1 top-0 left-[14px] bg-[#d8e6fa] z-0'></div>
            ) : (
              <div className='absolute h-[145%] w-1 top-0 left-[14px] bg-[#d8e6fa] z-0'></div>
            )}
            <div className='rounded-full p-1.5 bg-blue-300 shadow-lg relative z-10'>
              <div className='rounded-full bg-blue-500 shadow-md h-5 w-5'></div>
            </div>
            <div className='px-6 py-4 shadow-xl ring-4 ring-blue-500/10 rounded-xl bg-black/[0.02] space-y-2'>
              <h3 className='text-xl md:text-2xl'>{item.title}</h3>
              <div className='flex gap-2 md:gap-5 items-center text-base md:text-lg font-medium flex-wrap'>
                <span className='flex gap-2 text-black/60 items-center'>
                  <CalendarFold size={20} />
                  {new Date(item.dateTime).toLocaleDateString(
                    "en-US",
                    dateOptions
                  )}
                </span>
                <span className='flex gap-2 text-black/75 items-center'>
                  <Clock size={20} />
                  {new Date(item.dateTime).toLocaleString("en-US", timeOptions)}
                </span>
                {item.link && (
                  <Link
                    href={item.link.url}
                    className='hover:underline no-underline text-blue-600 flex items-center gap-2'
                  >
                    <Link2 />
                    {item.link.name}
                  </Link>
                )}
              </div>
              <p className='max-w-2xl text-base md:text-lg font-medium'>
                {item.description && item.description}
              </p>
            </div>
          </div>
        ))}
      </ViewContainer>
    </div>
  );
};

export default HackathonSchedule;
