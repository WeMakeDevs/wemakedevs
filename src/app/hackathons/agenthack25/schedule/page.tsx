import {
	HackathonCoverImage,
	HackathonNav,
	HackathonScheduleComponent,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { DATA, navLinks, schedule } from "../data";
import { images } from "../images";

const HackathonRules = async () => {
	return (
		<div className="pt-20 pb-10">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav slug={DATA.slug} page="schedule" links={navLinks} />
			<ViewContainer className="my-14">
				<HackathonScheduleComponent schedule={schedule} />
				{DATA.googleCalendarLink && (
					<Link
						href={DATA.googleCalendarLink}
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

export default HackathonRules;
