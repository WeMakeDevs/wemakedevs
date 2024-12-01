"use client";
import { useHackathonStatus } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import type { HackathonDateInterface } from "@/types";
import { CalendarIcon } from "lucide-react";

const HackathonDate = ({
	startDate,
	endDate,
	className,
	...props
}: HackathonDateInterface) => {
	const { status, timeDifference } = useHackathonStatus(startDate, endDate);

	const options = {
		day: "numeric" as const,
		month: "short" as const,
		// hour: "2-digit" as const,
		// minute: "2-digit" as const,
		hour12: true, // Set to false if you prefer 24-hour format
	};

	return (
		<div className={cn(className, "font-medium")} {...props}>
			<div className="flex gap-4 text-center">
				<CalendarIcon className="" size={30} />
				<p className="text-lg md:text-2xl">
					{new Date(startDate).toLocaleString("en-GB", options)} -{" "}
					{new Date(endDate).toLocaleString("en-GB", options)}
				</p>
			</div>
			<div className="border border-foreground/40 rounded-full text-sm md:text-base px-3 py-2 flex justify-center items-center w-fit gap-1 md:gap-2 mt-4 bg-white">
				<div
					className={cn(
						"w-4 h-4 rounded-full",
						status === "ongoing" && "bg-[#23a394]",
						status === "upcoming" && "bg-[#ee5b24]",
						status === "ended" && "bg-foreground/40",
					)}
				/>
				{status === "upcoming" &&
					`Starts in ${
						timeDifference.daysStartToNow > 0
							? `${timeDifference.daysStartToNow} days and`
							: ""
					} ${timeDifference.hoursStartToNow} hours`}

				{status === "ongoing" &&
					`Ends in ${
						timeDifference.daysEndToNow > 0
							? `${timeDifference.daysEndToNow} days and ${timeDifference.hoursEndToNow} hours`
							: `${timeDifference.hoursEndToNow} hours`
					}`}

				{status === "ended" && "Hackathon has ended"}
			</div>
		</div>
	);
};

export default HackathonDate;
