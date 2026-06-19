"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ScheduleElement } from "@/types";
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
	schedule: CompatibleSchedule | ScheduleElement[] | CompatibleSchedule;
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
				const baseDate = item.time
					? new Date(item.time)
					: new Date(day.date);
				const localDateKey = baseDate.toDateString();
				const localDateLabel = baseDate.toLocaleDateString(undefined, {
					day: "2-digit",
					month: "short",
				});

				if (!dateMap.has(localDateKey)) {
					dateMap.set(localDateKey, {
						date: localDateKey,
						label: localDateLabel,
						items: [],
					});
				}
				dateMap.get(localDateKey)?.items.push(item);
			}
		}

		const sortedGroups = Array.from(dateMap.values()).sort(
			(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
		);
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

	if (!isLoaded) {
		return (
			<div className="flex justify-center items-center py-20">
				<div className="text-lg text-slate-400">
					Shuffling the deck...
				</div>
			</div>
		);
	}

	const currentGroup = groupedSchedule[selectedDate];

	return (
		<div>
			<div className="flex justify-center gap-4 mb-6 flex-wrap">
				{groupedSchedule.map((group, index) => (
					<button
						key={group.date}
						className={cn(
							buttonVariants(),
							"focus:outline-none",
							selectedDate === index
								? "bg-gradient-to-r from-[#ffb800] to-[#ff2d7e] text-[#160a26] hover:opacity-90"
								: "bg-[#241338] text-[#ffd24a] hover:bg-[#2e1845] border border-[#ffb800]/30",
						)}
						onClick={() => setSelectedDate(index)}
						type="button"
					>
						{group.label}
					</button>
				))}
			</div>

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
								{totalItems > 1 && (
									<>
										{index === 0 && (
											<div className="absolute h-[100%] w-1 top-1/2 left-[14px] bg-[#ffb800]/30 z-0" />
										)}
										{index === totalItems - 1 &&
											index > 0 && (
												<div className="absolute h-[50%] w-1 top-0 left-[14px] bg-[#ffb800]/30 z-0" />
											)}
										{index > 0 &&
											index < totalItems - 1 && (
												<div className="absolute h-[145%] w-1 top-0 left-[14px] bg-[#ffb800]/30 z-0" />
											)}
									</>
								)}

								<div className="rounded-full p-1.5 bg-[#ffb800]/50 shadow-lg shadow-[#ffb800]/30 relative z-10">
									<div className="rounded-full bg-gradient-to-br from-[#ffb800] to-[#ff2d7e] shadow-md h-5 w-5" />
								</div>

								{isTextItem ? (
									<div className="flex-1">
										<p className="text-lg font-body font-medium md:text-xl text-slate-300">
											{item.title}
										</p>
									</div>
								) : (
									<div className="px-4 py-2 ring-2 ring-[#ffb800]/20 w-full hover:ring-[#ff2d7e]/40 transition-all bg-[#241338]/50 rounded-lg">
										<h3 className="text-lg font-body font-semibold md:text-xl text-[#ffd24a]">
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
																	className="text-[#ffd24a] hover:text-[#ffb800]"
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
														className="hover:underline no-underline text-[#ffd24a] flex items-center gap-2 uppercase"
														target="_blank"
														rel="noopener noreferrer"
													>
														<Link2 size={16} />
														{item.link.name}
													</Link>
												))}
										</div>
										{item.description && (
											<p className="max-w-2xl text-base md:text-lg font-medium leading-snug mt-2 text-slate-400">
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

			<div className="text-center mt-8 text-sm text-slate-500">
				Times are displayed in your local timezone
			</div>
		</div>
	);
};

export default HackathonScheduleComponent;
