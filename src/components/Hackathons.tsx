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
import { ArrowRight, Trophy, Smartphone } from "lucide-react";
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

				{/* Hack All February Banner */}
				<Link
					href="/february"
					className="block my-10 group"
				>
					<div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0A3D71] via-[#1a5a9e] to-[#0A3D71] p-1">
						<div className="bg-card rounded-lg p-6 md:p-8 relative overflow-hidden">
							{/* Background decoration */}
							<div className="absolute top-0 right-0 w-64 h-64 bg-accent-4/10 rounded-full -translate-y-1/2 translate-x-1/2" />
							<div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-4/10 rounded-full translate-y-1/2 -translate-x-1/2" />
							
							<div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
								<div className="flex-1 text-center md:text-left">
									<div className="flex items-center justify-center md:justify-start gap-2 mb-2">
										<span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
											NEW
										</span>
										<span className="text-accent-4 font-semibold text-sm">
											February 2026
										</span>
									</div>
									<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-title mb-2">
										Hack All February
									</h3>
									<p className="text-muted-foreground text-base md:text-lg max-w-xl">
										Join all 4 February hackathons to win a{" "}
										<span className="text-accent-4 font-semibold">
											Samsung Galaxy Flip 7
										</span>{" "}
										worth ₹1,10,000!
									</p>
									<div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
										<div className="flex items-center gap-2 text-sm">
											<Trophy className="w-4 h-4 text-accent-4" />
											<span>$40,000+ in prizes</span>
										</div>
										<div className="flex items-center gap-2 text-sm">
											<Smartphone className="w-4 h-4 text-accent-4" />
											<span>Galaxy Flip 7 Grand Prize</span>
										</div>
									</div>
								</div>
								<div className="shrink-0">
									<span
										className={cn(
											buttonVariants(),
											"group-hover:bg-blue-800 transition-colors",
										)}
									>
										Learn More
										<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
									</span>
								</div>
							</div>
						</div>
					</div>
				</Link>

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
