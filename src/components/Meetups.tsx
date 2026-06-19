import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import { meetups } from "@/constants/meetups";
import { MeetupCard, MeetupLastCard } from "./MeetupCard";
import { ViewContainer } from "./ui/view-container";

const Meetups = ({ className, ...props }: GeneralComponent) => {
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
				<div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 auto-rows-fr">
					{meetups.slice(0, 2).map(meetup => (
						<MeetupCard key={meetup.title} {...meetup} />
					))}
					<MeetupLastCard />
				</div>
			</ViewContainer>
		</section>
	);
};

export default Meetups;
