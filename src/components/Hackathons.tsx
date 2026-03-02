import {
	HackathonCard,
	HackathonCardDates,
	HackathonCardDescription,
	HackathonCardImage,
	HackathonCardTitle,
	HackathonComingSoonCard,
	HackathonLastCard,
} from "@/components/HackathonCard";
import { hackathons } from "@/constants/hackathons";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import Link from "next/link";
import HackathonStatus from "./HackathonStatus";
import { buttonVariants } from "./ui/button";
import { ViewContainer } from "./ui/view-container";

const Hackathons = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			className={cn(className, "mt-24 mb-16 scroll-m-[100px]")}
			id="hackathons"
			{...props}
		>
			<ViewContainer className="">
				<div className="flex justify-between flex-col items-center">
					<h2 className="text-4xl md:text-5xl">Hackathons</h2>
					<p className="max-w-2xl font-medium leading-snug mt-2 md:mt-3 text-center text-base md:text-lg">
						Join in our hackathons with your team of programmers,
						designers and other tech enthusiasts to collaborate &
						build fascinating projects.
					</p>
				</div>

				<div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 auto-rows-fr">
					{hackathons.slice(0, 2).map(hackathon => (
						<HackathonCard
							key={hackathon.slug}
							href={hackathon.slug}
							hrefType={hackathon.hrefType}
						>
							<HackathonCardImage
								src={hackathon.thumbnail}
								alt={hackathon.title}
							/>
							<HackathonCardTitle>
								{hackathon.title}
							</HackathonCardTitle>
							<div className="flex justify-between items-center">
								<HackathonStatus
									startDate={hackathon.startDate}
									endDate={hackathon.endDate}
								/>
								<HackathonCardDates
									startDate={hackathon.startDate}
									endDate={hackathon.endDate}
									showDate={hackathon.showDate}
								/>
							</div>
							<HackathonCardDescription>
								{hackathon.description}
							</HackathonCardDescription>
						</HackathonCard>
					))}
					<HackathonLastCard />
				</div>
			</ViewContainer>
		</section>
	);
};

export default Hackathons;
