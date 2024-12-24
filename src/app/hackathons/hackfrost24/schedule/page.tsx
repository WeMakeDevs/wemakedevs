import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { HackathonScheduleComponent } from "@/components/hackathon-content";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { fetchHackathonData } from "@/lib/hackathon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

const HackathonSchedule = async () => {
	const hackathons = await fetchHackathonData();
	const hackathon = hackathons.find(
		hackathon => hackathon.slug === "hackfrost24",
	);

	if (!hackathon) notFound();

	return (
		<div className="pt-20">
			<HackathonCoverImage
				src={hackathon.image.cover}
				alt={hackathon.title}
			/>
			<HackathonNav slug={hackathon.slug} page="schedule" />
			<ViewContainer className="my-14">
				<HackathonScheduleComponent schedule={hackathon.schedule} />
				{hackathon.googleCalendarLink && (
					<Link
						href={hackathon.googleCalendarLink}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							buttonVariants(),
							"flex items-center gap-2 w-fit mx-auto mt-10",
						)}
					>
						Add to calendar
					</Link>
				)}
			</ViewContainer>
		</div>
	);
};

export default HackathonSchedule;
