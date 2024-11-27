import { cn } from "@/lib/utils";
import type { GeneralComponent, MeetupData } from "@/types";
import Link from "next/link";
import { MeetupCard, MeetupComingSoonCard, MeetupLastCard } from "./MeetupCard";
import { ViewContainer } from "./ui/view-container";

import { openSourceConnectMeetup } from "@/assets/images/meetups";

const meetupEntries: MeetupData[] = [
	{
		title: "Open Source Connect",
		image: openSourceConnectMeetup,
		date: "2024-12-13",
		description:
			"Explore open source and tech with expert talks, networking, pizza, drinks, and swag!",
		url: "https://lu.ma/v0dhix0t",
		location: "The Circle-Huda City Center, Gurgaon",
	},
];

const Hackathons = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			id="meetups"
			className={cn(className, "mt-24 mb-16 scroll-m-[100px]")}
			{...props}
		>
			<ViewContainer className="">
				<div className="flex justify-between flex-col items-center">
					<h2 className="text-4xl md:text-5xl">Meetups</h2>
					<p className="max-w-2xl font-medium leading-snug mt-2 md:mt-3 text-center text-base md:text-lg">
						Participate in our meetups where professionals,
						developers and industry leaders come together to network
						and talk about latest tech innovations.
					</p>
				</div>
				<div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">
					{meetupEntries.map(meetup => (
						<MeetupCard key={meetup.title} {...meetup} />
					))}
				</div>
			</ViewContainer>
		</section>
	);
};

export default Hackathons;
