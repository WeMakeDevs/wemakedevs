"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ScheduleElement } from "@/types";
import { SiDiscord } from "@icons-pack/react-simple-icons";
import { Clock, Link2, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";
import type {
	FuturestackScheduleElement,
	FuturestackScheduleItem,
	FuturestackScheduleLink,
} from "../types";

interface GroupedSchedule {
	date: string;
	label: string;
	items: Array<{
		title: string;
		description?: string;
		time?: string;
		link?: {
			name: string;
			url: string;
		};
	}>;
}

// Local structural type that is compatible with both global ScheduleElement and FuturestackScheduleElement
type CompatibleSchedule = Array<
	Pick<ScheduleElement, "date" | "items"> & {
		items: Array<
			ScheduleElement["items"][number] &
				FuturestackScheduleElement["items"][number]
		>;
	}
>;

const HackathonScheduleComponent = ({
	schedule,
}: {
	schedule:
		| CompatibleSchedule
		| ScheduleElement[]
		| FuturestackScheduleElement[];
}) => {
	const [selectedDate, setSelectedDate] = useState(0);
	const [groupedSchedule, setGroupedSchedule] = useState<GroupedSchedule[]>(
		[],
	);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// Group events by user's local date
		const grouped: GroupedSchedule[] = [];
		const dateMap = new Map<string, GroupedSchedule>();

		// Process all events and group by local date
		for (const day of schedule as CompatibleSchedule) {
			for (const item of day.items) {
				if (item.time) {
					const eventDate = new Date(item.time);
					const localDateKey = eventDate.toDateString(); // e.g., "Sat Sep 28 2025"
					const localDateLabel = eventDate.toLocaleDateString(
						undefined,
						{
							day: "2-digit",
							month: "short",
						},
					);

					if (!dateMap.has(localDateKey)) {
						dateMap.set(localDateKey, {
							date: localDateKey,
							label: localDateLabel,
							items: [],
						});
					}

					const group = dateMap.get(localDateKey);
					if (group) {
						group.items.push(item);
					}
				} else {
					// For items without time, use original date grouping
					const originalDate = new Date(day.date);
					const localDateKey = originalDate.toDateString();
					const localDateLabel = originalDate.toLocaleDateString(
						undefined,
						{
							day: "2-digit",
							month: "short",
						},
					);

					if (!dateMap.has(localDateKey)) {
						dateMap.set(localDateKey, {
							date: localDateKey,
							label: localDateLabel,
							items: [],
						});
					}

					const group = dateMap.get(localDateKey);
					if (group) {
						group.items.push(item);
					}
				}
			}
		}

		// Convert to array and sort by date
		const sortedGroups = Array.from(dateMap.values()).sort((a, b) => {
			const dateA = new Date(a.date).getTime();
			const dateB = new Date(b.date).getTime();
			return dateA - dateB;
		});

		// Sort items within each group by time
		for (const group of sortedGroups) {
			group.items.sort((a, b) => {
				if (!a.time && !b.time) return 0;
				if (!a.time) return 1;
				if (!b.time) return -1;
				return new Date(a.time).getTime() - new Date(b.time).getTime();
			});
		}

		setGroupedSchedule(sortedGroups);
		setIsLoaded(true);
	}, [schedule]);

	const formatLocalTime = (timeString: string) => {
		const date = new Date(timeString);
		return date.toLocaleTimeString(undefined, {
			hour: "numeric",
			minute: "2-digit",
			hour12: true,
			timeZoneName: "short",
		});
	};

	const handleDateClick = (index: number) => {
		setSelectedDate(index);
	};

	// Show loading state until client-side rendering is complete
	if (!isLoaded) {
		return (
			<div className="flex justify-center items-center py-20">
				<div className="text-lg text-gray-600">Loading schedule...</div>
			</div>
		);
	}

	const currentGroup = groupedSchedule[selectedDate];

	return (
		<div className="">
			{/* Date selector buttons */}
			<div className="flex justify-center gap-4 mb-6 flex-wrap">
				{groupedSchedule.map((group, index) => (
					<button
						key={group.date}
						className={cn(
							buttonVariants(),
							"focus:outline-none hover:text-white",
							selectedDate === index
								? "bg-blue-500 text-white"
								: "bg-gray-200 text-gray-700",
						)}
						onClick={() => handleDateClick(index)}
						type="button"
					>
						{group.label}
					</button>
				))}
			</div>

			{/* Events for selected date */}
			{currentGroup && (
				<div className="space-y-8 max-w-3xl mx-auto mt-10">
					{currentGroup.items.map((item, index) => {
						const isTextItem = !item.link && !item.time;
						const totalItems = currentGroup.items.length;

						return (
							<div
								className="flex gap-8 items-center relative"
								key={`${item.title}-${index}`}
							>
								{/* Timeline connector line */}
								{totalItems > 1 && (
									<>
										{index === 0 && (
											<div className="absolute h-[100%] w-1 top-1/2 left-[14px] bg-[#d8e6fa] z-0" />
										)}
										{index === totalItems - 1 &&
											index > 0 && (
												<div className="absolute h-[50%] w-1 top-0 left-[14px] bg-[#d8e6fa] z-0" />
											)}
										{index > 0 &&
											index < totalItems - 1 && (
												<div className="absolute h-[145%] w-1 top-0 left-[14px] bg-[#d8e6fa] z-0" />
											)}
									</>
								)}

								{/* Timeline dot */}
								<div className="rounded-full p-1.5 bg-blue-300 shadow-lg relative z-10">
									<div className="rounded-full bg-blue-500 shadow-md h-5 w-5" />
								</div>

								{/* Event content */}
								{isTextItem ? (
									// Simple text item
									<div className="flex-1">
										<p className="text-lg font-body font-medium md:text-xl text-black/75">
											{item.title}
										</p>
									</div>
								) : (
									// Event with time and/or link
									<div className="px-4 py-2 ring-2 ring-black/5 w-full hover:ring-accent-4 transition-all">
										<h3 className="text-lg font-body font-semibold md:text-xl">
											{item.title}
										</h3>

										<div className="flex gap-2 md:gap-5 items-center font-medium flex-wrap mt-2">
											{item.time && (
												<span className="flex gap-2 text-black/75 items-center">
													<Clock size={16} />
													{formatLocalTime(item.time)}
												</span>
											)}
											{/* Multiple platform links (FutureStack-specific) */}
											{("links" in item &&
												Array.isArray(
													(
														item as FuturestackScheduleItem
													).links,
												) && (
													<div className="flex items-center gap-3">
														{(
															(
																item as FuturestackScheduleItem
															)
																.links as FuturestackScheduleLink[]
														).map((l, idx) => (
															<Link
																key={`${l.platform}-${idx}`}
																href={l.url}
																className="text-blue-600 hover:text-blue-700"
																target="_blank"
																rel="noopener noreferrer"
																title={
																	l.platform
																}
															>
																{l.platform ===
																"youtube" ? (
																	<Youtube
																		size={
																			18
																		}
																	/>
																) : l.platform ===
																	"linkedin" ? (
																	<Linkedin
																		size={
																			18
																		}
																	/>
																) : l.platform ===
																	"discord" ? (
																	<SiDiscord
																		size={
																			18
																		}
																	/>
																) : (
																	<Link2
																		size={
																			16
																		}
																	/>
																)}
															</Link>
														))}
													</div>
												)) ||
												// Backward-compatible single link
												(item.link && (
													<Link
														href={item.link.url}
														className="hover:underline no-underline text-blue-600 flex items-center gap-2 uppercase"
														target="_blank"
														rel="noopener noreferrer"
													>
														<Link2 size={16} />
														{item.link.name}
													</Link>
												))}
										</div>

										{item.description && (
											<p className="max-w-2xl text-base md:text-lg font-medium leading-snug md:leading-snug mt-2 text-black/75">
												{item.description}
											</p>
										)}
									</div>
								)}
							</div>
						);
					})}
				</div>
			)}

			{/* Timezone note */}
			<div className="text-center mt-8 text-sm text-gray-600">
				Times are displayed in your local timezone
			</div>
		</div>
	);
};

export default HackathonScheduleComponent;
