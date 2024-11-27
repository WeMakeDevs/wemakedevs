// This file is kept as it is for future references

import { cn } from "@/lib/utils";
import type { HackathonData } from "@/types";
import Link from "next/link";
import HackathonStatus from "../HackathonStatus";
import { buttonVariants } from "../ui/button";
import HackathonDate from "./HackathonDate";

const HackathonMain = ({ hackathon }: { hackathon: HackathonData }) => {
	return (
		<div className="bg-foreground/5 border border-foreground/10 rounded-lg px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">
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
					href={`/hackathons/${hackathon.slug}/submit`}
					className={cn(
						buttonVariants({ variant: "outline" }),
						"mt-4 md:mt-6",
					)}
				>
					Register for Hackathon
				</Link>
			</div>
			<div className="bg-background p-4 md:p-6">
				<HackathonDate
					startDate={hackathon.startDate}
					endDate={hackathon.endDate}
				/>
				<hr className="my-5 border-foreground/10" />
				<p className="flex gap-4 items-end font-medium">
					Prizes worth:{" "}
					<span className="text-2xl md:text-3xl font-title font-bold">
						{hackathon.prize}$+
					</span>
				</p>
			</div>
		</div>
	);
};

export default HackathonMain;
