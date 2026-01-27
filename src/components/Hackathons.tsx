import {
	HackathonCard,
	HackathonCardDates,
	HackathonCardDescription,
	HackathonCardImage,
	HackathonCardTitle,
	HackathonComingSoonCard,
	HackathonLastCard,
} from "@/components/HackathonCard";
import { images as februaryImages } from "@/app/february/images";
import { hackathons } from "@/constants/hackathons";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import { ArrowRight, Trophy, Smartphone, Briefcase } from "lucide-react";
import Image from "next/image";
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
						<div className="bg-[#0d1117] rounded-lg p-6 md:p-8 relative overflow-hidden">
							<div className="relative flex flex-col lg:flex-row items-center gap-6">
								{/* Left Content */}
								<div className="flex-1 text-center lg:text-left z-10">
									<div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
										<span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
											NEW
										</span>
										<span className="text-accent-4 font-semibold text-sm">
											February 2026
										</span>
									</div>
									<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-title mb-3 text-white">
										Hack All February
									</h3>
									<p className="text-gray-200 text-base md:text-lg max-w-lg mb-4">
										Join all 4 February hackathons to win a{" "}
										<span className="text-accent-4 font-semibold">
											Samsung Galaxy Flip 7
										</span>{" "}
										phone worth{" "}
										<span className="text-accent-4 font-semibold">
											₹1,10,000
										</span>
										. Winner will be chosen at random.
									</p>
								<div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-5">
									<div className="flex items-center gap-2 text-sm text-gray-300">
										<Trophy className="w-4 h-4 text-accent-4" />
										<span>$40,000+ in prizes</span>
									</div>
									<div className="flex items-center gap-2 text-sm text-gray-300">
										<Briefcase className="w-4 h-4 text-accent-4" />
										<span>Job Interviews</span>
									</div>
									<div className="flex items-center gap-2 text-sm text-gray-300">
										<Smartphone className="w-4 h-4 text-accent-4" />
										<span>Galaxy Flip 7 Grand Prize</span>
									</div>
								</div>
								<span
									className={cn(
										buttonVariants(),
										"group-hover:bg-blue-800 transition-colors inline-flex",
									)}
								>
									Learn More
									<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
								</span>
							</div>
							
							{/* Right Phone Images */}
							<div className="shrink-0 w-full lg:w-[500px] xl:w-[550px] flex items-end justify-center gap-0 relative h-[300px] md:h-[350px]">
								<Image
									src={februaryImages.phone1}
									alt="Samsung Galaxy Flip 7"
									className="w-[55%] h-auto object-contain drop-shadow-2xl absolute left-0 bottom-0"
								/>
								<Image
									src={februaryImages.phone2}
									alt="Samsung Galaxy Flip 7"
									className="w-[70%] h-auto object-contain drop-shadow-2xl absolute right-0 -bottom-8"
								/>
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
