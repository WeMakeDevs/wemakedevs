import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { HackathonScheduleComponent } from "@/components/hackathon-content";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { DATA as hackathonData } from "../data";
import { hackfrost24Cover } from "../images";

const HackathonSchedule = async () => {
	return (
		<div className="pt-20">
			<HackathonCoverImage
				src={hackfrost24Cover}
				alt={hackathonData.title}
			/>
			<HackathonNav slug={hackathonData.slug} page="schedule" />
			<ViewContainer className="my-14">
				<HackathonScheduleComponent schedule={hackathonData.schedule} />
				{hackathonData.googleCalendarLink && (
					<Link
						href={hackathonData.googleCalendarLink}
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
