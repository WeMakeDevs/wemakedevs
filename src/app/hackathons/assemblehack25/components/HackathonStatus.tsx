"use client";
import { useHackathonStatus } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import type { HackathonStatusComponentInterface } from "@/types";

const HackathonStatus = ({
	className,
	startDate,
	endDate,
	...props
}: HackathonStatusComponentInterface) => {
	const { status } = useHackathonStatus(startDate, endDate);
	return (
		<div
			className={cn(
				className,
				"inline-flex items-center gap-2 rounded-full px-4 py-2 text-white font-bold text-sm uppercase tracking-wider shadow-lg",
				status === "upcoming" && "bg-orange-500",
				status === "ongoing" && "bg-green-500",
				status === "ended" && "bg-gray-500",
			)}
			{...props}
		>
			{status.toUpperCase()}
		</div>
	);
};

export default HackathonStatus;
