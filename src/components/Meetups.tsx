import { cn } from "@/lib/utils";
import { GeneralComponent, MeetupData } from "@/types";
import Link from "next/link";
import { ViewContainer } from "./ui/view-container";
import { MeetupCard, MeetupLastCard } from "./MeetupCard";

import { aimlMeetup, webdevWorkshop } from "@/assets/images/meetups";

const meetupEntries: MeetupData[] = [
  {
    title: "Web Development Workshop",
    image: webdevWorkshop,
    date: "2024-11-05",
    description: "A hands-on workshop to build modern web applications.",
    url: "https://example.com/workshop",
    location: "Banglore, India",
  },
  {
    title: "AI and Machine Learning Meetup",
    image: aimlMeetup,
    date: "2024-12-10",
    description: "Join us for discussions on the latest in AI and ML.",
    url: "https://example.com/ai-meetup",
    location: "Delhi, India",
  },
];

const Hackathons = ({ className, ...props }: GeneralComponent) => {
  return (
    <section className={cn(className, "mt-24 mb-16")} {...props}>
      <ViewContainer className=''>
        <div className='flex justify-between flex-col items-center'>
          <h2 className='text-4xl md:text-5xl'>Meetups / Workshops</h2>
          <p className='max-w-2xl font-medium leading-snug mt-2 md:mt-3 text-center text-base md:text-lg'>
            Participate in our meetups where professionals, developers and
            industry leaders come together to network and talk about latest tech
            innovations.
          </p>
        </div>
        <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6'>
          {meetupEntries.map((meetup, index) => (
            <MeetupCard key={index} {...meetup} />
          ))}
          <MeetupLastCard />
        </div>
      </ViewContainer>
    </section>
  );
};

export default Hackathons;
