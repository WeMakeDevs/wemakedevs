import {
  HackathonCard,
  HackathonCardTitle,
  HackathonCardDates,
  HackathonCardImage,
  HackathonCardDescription,
} from "@/components/HackathonCard";
import { fetchHackathonData } from "@/lib/hackathon";
import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";
import Link from "next/link";
import { ViewContainer } from "./ui/view-container";
import HackathonStatus from "./HackathonStatus";

const Hackathons = async ({ className, ...props }: GeneralComponent) => {
  const hackathons = await fetchHackathonData();

  return (
    <section
      className={cn(className, "mt-24 mb-16")}
      id='hackathons'
      {...props}
    >
      <ViewContainer className=''>
        <div className='flex justify-between flex-col md:flex-row items-center'>
          <h2 className='text-4xl md:text-5xl'>Hackathons</h2>
          <Link
            href='/hackathons'
            className='font-title underline hover:no-underline'
          >
            See all hackathons
          </Link>
        </div>
        <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {hackathons.map((hackathon, index) => (
            <HackathonCard key={index} href={`/hackathons/${hackathon.slug}`}>
              <HackathonCardImage
                src={hackathon.image.thumbnail}
                alt={hackathon.title}
              />
              <HackathonCardTitle>{hackathon.title}</HackathonCardTitle>
              <div className='flex justify-between items-center'>
                <HackathonStatus
                  startDate={hackathon.startDate}
                  endDate={hackathon.endDate}
                />
                <HackathonCardDates
                  startDate={hackathon.startDate}
                  endDate={hackathon.endDate}
                />
              </div>
              <HackathonCardDescription>
                {hackathon.description}
              </HackathonCardDescription>
            </HackathonCard>
          ))}
        </div>
      </ViewContainer>
    </section>
  );
};

export default Hackathons;
