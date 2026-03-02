"use client";

import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { useHackathonStatus } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";

type HackathonHeaderProps = {
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	prize: string;
	showDate?: boolean;
	cta: {
		label: string;
		href: string;
		openInNewTab?: boolean;
		disabled?: boolean;
	};
};

const HackathonHeader = ({
	title,
	description,
	startDate,
	endDate,
	prize,
	showDate = true,
	cta,
}: HackathonHeaderProps) => {
	const { status, timeDifference } = useHackathonStatus(startDate, endDate);

	const gridPattern =
		"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
		});
	};

	const getTimeDisplay = (days: number, hours: number, minutes: number) => {
		if (days > 0) return `${days} days`;
		if (hours > 0) return `${hours} hours`;
		return `${minutes} minutes`;
	};

	return (
		<div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 border-b border-orange-500/10">
			<div
				className="absolute inset-0 opacity-30"
				style={{ backgroundImage: `url("${gridPattern}")` }}
			/>
			<ViewContainer className="bg-slate-900/80 backdrop-blur border border-orange-500/20 rounded-2xl p-3 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-8 bg-slate-900/80 rounded-xl border border-orange-500/10">
					<div className="col-span-1 lg:col-span-2">
						{showDate ? (
							<p
								className={cn(
									"rounded-full px-3 py-1.5 font-semibold text-sm tracking-wide w-fit border shadow-[0_0_10px_rgba(249,115,22,0.3)]",
									status === "upcoming" &&
										"bg-orange-500/20 text-orange-400 border-orange-500/50",
									status === "ongoing" &&
										"bg-orange-500/20 text-orange-400 border-orange-500/50",
									status === "ended" &&
										"bg-slate-500/20 text-slate-400 border-slate-500/50",
								)}
							>
								{status.toUpperCase()}
							</p>
						) : (
							<p className="rounded-full px-3 py-1.5 bg-orange-500/20 text-orange-400 font-semibold text-sm tracking-wide w-fit border border-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.3)]">
								COMING SOON
							</p>
						)}
						<h1 className="text-4xl md:text-6xl font-bold mt-6 text-slate-50">
							{title}
						</h1>
						<p className="text-base md:text-lg text-slate-300 font-medium leading-snug mt-4 tracking-wide">
							{description}
						</p>
						<div className="flex items-center gap-4">
							{cta.disabled ? (
								<div
									className={cn(
										"mt-4 md:mt-6 cursor-not-allowed opacity-60 px-6 py-3 rounded-lg tracking-wide border border-orange-500/30 bg-orange-500/10 text-slate-400",
									)}
								>
									{cta.label}
								</div>
							) : (
								<Link
									href={cta.href}
									className="mt-4 md:mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-orange-400/30 bg-orange-500/15 text-slate-50 tracking-wide shadow-[0_12px_25px_rgba(0,0,0,0.35)] hover:bg-orange-500/25 hover:border-orange-300 transition-all"
									target={
										cta.openInNewTab ? "_blank" : "_self"
									}
									rel={
										cta.openInNewTab
											? "noopener noreferrer"
											: undefined
									}
								>
									{cta.label}
								</Link>
							)}
						</div>
					</div>
					<div className="flex justify-center items-center">
						<div className="bg-slate-900/90 backdrop-blur-sm shadow-[0_15px_35px_rgba(0,0,0,0.45)] rounded-xl p-4 md:p-6 h-fit w-full border border-orange-500/20">
							{showDate ? (
								<>
									<div className="flex gap-4 text-center font-medium items-center">
										<CalendarIcon
											className="text-orange-400"
											size={30}
										/>
										<p className="text-lg md:text-2xl text-slate-200">
											{formatDate(startDate)} -{" "}
											{formatDate(endDate)}
										</p>
									</div>
									<div className="font-medium border border-orange-500/40 rounded-full text-sm md:text-base px-3 py-2 flex justify-center items-center w-fit gap-1 md:gap-2 mt-4 bg-orange-500/10 mx-auto text-slate-100 shadow-[0_0_12px_rgba(0,0,0,0.4)]">
										<div
											className={cn(
												"w-4 h-4 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.5)]",
												status === "upcoming" &&
													"bg-orange-400 animate-pulse",
												status === "ongoing" &&
													"bg-orange-400",
												status === "ended" &&
													"bg-slate-400",
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
										{status === "ended" &&
											"Hackathon has ended"}
									</div>
								</>
							) : (
								<>
									<div className="flex gap-4 text-center font-medium items-center justify-center">
										<CalendarIcon
											className="text-orange-400"
											size={30}
										/>
										<p className="text-lg md:text-2xl text-slate-200">
											Coming Soon
										</p>
									</div>
									<div className="font-medium border border-orange-500/40 rounded-full text-sm md:text-base px-3 py-2 flex justify-center items-center w-fit gap-1 md:gap-2 mt-4 bg-orange-500/10 mx-auto text-slate-100 shadow-[0_0_12px_rgba(0,0,0,0.4)]">
										<div className="w-4 h-4 rounded-full bg-orange-400 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
										Starting Soon
									</div>
								</>
							)}
							<hr className="my-5 border-orange-500/20" />
							<div className="flex flex-col gap-1 text-slate-200">
								<span className="text-sm uppercase tracking-wide text-orange-400">
									Prizes
								</span>
								<span className="text-lg text-slate-100">
									{prize}
								</span>
							</div>
						</div>
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonHeader;
