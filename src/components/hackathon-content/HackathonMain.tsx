import { cn } from "@/lib/utils";
import type { HackathonData } from "@/types";
import Link from "next/link";
import HackathonStatus from "../HackathonStatus";
import { buttonVariants } from "../ui/button";
import { ViewContainer } from "../ui/view-container";
import HackathonDate from "./HackathonDate";

const HackathonMain = ({ hackathon }: { hackathon: HackathonData }) => {
	return (
		<div className="relative bg-gradient-to-br from-blue-200 to-blue-600 py-24">
			<ViewContainer className="bg-white/20 shadow-lg rounded-xl p-3">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-10 bg-white/60 shadow-md rounded-[8px]">
					<div className="col-span-1 lg:col-span-2">
						<HackathonStatus
							className="w-fit"
							startDate={hackathon.startDate}
							endDate={hackathon.endDate}
						/>
						<h1 className="text-4xl md:text-6xl font-bold mt-6">
							{hackathon.title}
						</h1>
						<p className="text-base md:text-lg text-foreground/90 font-medium leading-snug mt-4 tracking-wide">
							{hackathon.description}
						</p>
						<Link
							href={hackathon.registrationLink}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								buttonVariants({ variant: "default" }),
								"mt-4 md:mt-6",
							)}
						>
							Register
						</Link>
					</div>
					<div className="flex justify-center items-center">
						<div className="bg-white/50 shadow-md rounded-xl p-4 md:p-6 h-fit w-full">
							<HackathonDate
								startDate={hackathon.startDate}
								endDate={hackathon.endDate}
							/>
							<hr className="my-5 border-foreground/40" />
							<p className="flex gap-4 items-end font-medium">
								Prizes worth:{" "}
								<span className="text-2xl md:text-3xl font-title font-bold">
									{hackathon.prize}$+
								</span>
							</p>
						</div>
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonMain;
