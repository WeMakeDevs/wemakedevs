"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ScheduleElement } from "@/types";
import { SiLinkedin, SiSlack } from "@icons-pack/react-simple-icons";
import { Clock, Link2, Youtube } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

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
		links?: Array<{
			platform: string;
			url: string;
		}>;
	}>;
}

type CompatibleSchedule = Array<
	Pick<ScheduleElement, "date" | "items"> & {
		items: Array<
			ScheduleElement["items"][number] & {
				links?: Array<{
					platform: string;
					url: string;
				}>;
			}
		>;
	}
>;

const HackathonScheduleComponent = ({
	schedule,
}: {
	schedule: CompatibleSchedule | ScheduleElement[];
}) => {
	const [selectedDate, setSelectedDate] = useState(0);
	const [groupedSchedule, setGroupedSchedule] = useState<GroupedSchedule[]>(
		[],
	);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const dateMap = new Map<string, GroupedSchedule>();

		for (const day of schedule as CompatibleSchedule) {
			for (const item of day.items) {
				if (item.time) {
					const eventDate = new Date(item.time);
					const localDateKey = eventDate.toDateString();
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

		const sortedGroups = Array.from(dateMap.values()).sort((a, b) => {
			const dateA = new Date(a.date).getTime();
			const dateB = new Date(b.date).getTime();
			return dateA - dateB;
		});

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

	if (!isLoaded) {
		return (
			<div className="flex justify-center items-center py-20">
				<div className="text-lg text-slate-400">
					Loading schedule...
				</div>
			</div>
		);
	}

	const currentGroup = groupedSchedule[selectedDate];

	return (
		<div>
			{/* Date selector buttons */}
			<div className="flex justify-center gap-4 mb-6 flex-wrap">
				{groupedSchedule.map((group, index) => (
					<button
						key={group.date}
						className={cn(
							buttonVariants(),
							"focus:outline-none",
							selectedDate === index
								? "bg-gradient-to-r from-amber-500 to-amber-700 text-white hover:from-amber-400 hover:to-amber-600"
								: "bg-[#0c1a2e] text-amber-400 hover:bg-[#132236] border border-amber-500/30",
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
						const isTextItem =
							!item.link && !item.time && !item.links;
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
											<div className="absolute h-[100%] w-1 top-1/2 left-[14px] bg-amber-500/30 z-0" />
										)}
										{index === totalItems - 1 &&
											index > 0 && (
												<div className="absolute h-[50%] w-1 top-0 left-[14px] bg-amber-500/30 z-0" />
											)}
										{index > 0 &&
											index < totalItems - 1 && (
												<div className="absolute h-[145%] w-1 top-0 left-[14px] bg-amber-500/30 z-0" />
											)}
									</>
								)}

								{/* Timeline dot */}
								<div className="rounded-full p-1.5 bg-amber-500/50 shadow-lg shadow-amber-500/30 relative z-10">
									<div className="rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-md h-5 w-5" />
								</div>

								{/* Event content */}
								{isTextItem ? (
									<div className="flex-1">
										<p className="text-lg font-body font-medium md:text-xl text-slate-300">
											{item.title}
										</p>
									</div>
								) : (
									<div className="px-4 py-2 ring-2 ring-amber-500/20 w-full hover:ring-amber-500/40 transition-all bg-[#0c1a2e]/50 rounded-lg">
										<h3 className="text-lg font-body font-semibold md:text-xl text-amber-400">
											{item.title}
										</h3>

										<div className="flex gap-2 md:gap-5 items-center font-medium flex-wrap mt-2">
											{item.time && (
												<span className="flex gap-2 text-slate-400 items-center">
													<Clock size={16} />
													{formatLocalTime(item.time)}
												</span>
											)}
											{("links" in item &&
												Array.isArray(item.links) &&
												item.links.length > 0 && (
													<div className="flex items-center gap-3">
														{item.links.map(
															(l, idx) => (
																<Link
																	key={`${l.platform}-${idx}`}
																	href={l.url}
																	className="text-amber-400 hover:text-amber-300"
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
																	  "slack" ? (
																		<SiSlack
																			size={
																				18
																			}
																		/>
																	) : l.platform ===
																	  "linkedin" ? (
																		<SiLinkedin
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
															),
														)}
													</div>
												)) ||
												(item.link && (
													<Link
														href={item.link.url}
														className="hover:underline no-underline text-amber-400 flex items-center gap-2 uppercase"
														target="_blank"
														rel="noopener noreferrer"
													>
														<Link2 size={16} />
														{item.link.name}
													</Link>
												))}
										</div>

										{item.description && (
											<p className="max-w-2xl text-base md:text-lg font-medium leading-snug md:leading-snug mt-2 text-slate-400">
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
			<div className="text-center mt-8 text-sm text-slate-500">
				Times are displayed in your local timezone
			</div>
		</div>
	);
};

export default HackathonScheduleComponent;
