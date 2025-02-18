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
		<p
			className={cn(
				className,
				"rounded-full px-3 py-1.5 bg-primary font-semibold text-sm tracking-wide",
				status === "upcoming" && "bg-accent-4",
				status === "ongoing" && "bg-accent-2",
				status === "ended" && "bg-foreground/10",
			)}
			{...props}
		>
			{status.toUpperCase()}
		</p>
	);
};

export default HackathonStatus;
