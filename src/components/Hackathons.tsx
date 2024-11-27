import {
	HackathonCard,
	HackathonCardDates,
	HackathonCardDescription,
	HackathonCardImage,
	HackathonCardTitle,
	HackathonComingSoonCard,
	HackathonLastCard,
} from "@/components/HackathonCard";
import { fetchHackathonData } from "@/lib/hackathon";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import HackathonStatus from "./HackathonStatus";
import { ViewContainer } from "./ui/view-container";

const Hackathons = async ({ className, ...props }: GeneralComponent) => {
	const hackathons = await fetchHackathonData();

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
				<div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">
					{hackathons.map(hackathon => (
						<HackathonCard
							key={hackathon.slug}
							href={`/hackathons/${hackathon.slug}`}
						>
							<HackathonCardImage
								src={hackathon.image.thumbnail}
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
								/>
							</div>
							<HackathonCardDescription>
								{hackathon.description}
							</HackathonCardDescription>
						</HackathonCard>
					))}
					{/* <HackathonComingSoonCard /> */}
				</div>
			</ViewContainer>
		</section>
	);
};

export default Hackathons;
