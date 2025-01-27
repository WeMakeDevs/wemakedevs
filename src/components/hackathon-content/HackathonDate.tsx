"use client";
import { useHackathonStatus } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import type { HackathonDateInterface } from "@/types";

const HackathonDate = ({
	startDate,
	endDate,
	className,
	...props
}: HackathonDateInterface) => {
	const { status, timeDifference } = useHackathonStatus(startDate, endDate);

	const getTimeDisplay = (days: number, hours: number, minutes: number) => {
		if (days > 0) return `${days} days`;
		if (hours > 0) return `${hours} hours`;
		return `${minutes} minutes`;
	};

	return (
		<div
			className={cn(
				className,
				"font-medium border border-foreground/40 rounded-full text-sm md:text-base px-3 py-2 flex justify-center items-center w-fit gap-1 md:gap-2 mt-4 bg-white",
			)}
			{...props}
		>
			<div
				className={cn(
					"w-4 h-4 rounded-full",
					status === "ongoing" && "bg-[#23a394]",
					status === "upcoming" && "bg-[#ee5b24]",
					status === "ended" && "bg-foreground/40",
				)}
			/>
			{status === "upcoming" &&
				`Starts in ${getTimeDisplay(
					timeDifference.daysStartToNow,
					timeDifference.hoursStartToNow,
					timeDifference.minutesStartToNow,
				)}`}

			{status === "ongoing" &&
				`Ends in ${getTimeDisplay(
					timeDifference.daysEndToNow,
					timeDifference.hoursEndToNow,
					timeDifference.minutesEndToNow,
				)}`}

			{status === "ended" && "Hackathon has ended"}
		</div>
	);
};

export default HackathonDate;
