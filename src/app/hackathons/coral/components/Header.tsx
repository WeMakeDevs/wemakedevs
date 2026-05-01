"use client";

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

const CoralHeader = ({
	title,
	description,
	startDate,
	endDate,
	prize,
	showDate = true,
	cta,
}: HackathonHeaderProps) => {
	const { status, timeDifference } = useHackathonStatus(startDate, endDate);

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
		<div className="relative bg-gradient-to-br from-[#0a0f1e] via-[#0c1a2e] to-[#071520] py-24 border-b border-amber-500/10">
			{/* Treasure map grid pattern */}
			<div
				className="absolute inset-0 opacity-20"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
				}}
			/>
			<ViewContainer className="bg-[#0c1a2e]/80 backdrop-blur border border-amber-500/20 rounded-2xl p-3 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-8 bg-[#0a0f1e]/80 rounded-xl border border-amber-500/10">
					<div className="col-span-1 lg:col-span-2">
						{showDate ? (
							<p
								className={cn(
									"rounded-full px-3 py-1.5 font-semibold text-sm tracking-wide w-fit border shadow-[0_0_10px_rgba(251,191,36,0.3)]",
									status === "upcoming" &&
										"bg-amber-500/20 text-amber-400 border-amber-500/50",
									status === "ongoing" &&
										"bg-emerald-500/20 text-emerald-400 border-emerald-500/50",
									status === "ended" &&
										"bg-slate-500/20 text-slate-400 border-slate-500/50",
								)}
							>
								{status === "upcoming" && "⚓ UPCOMING"}
								{status === "ongoing" && "🏴‍☠️ SAILING NOW"}
								{status === "ended" && "🏁 VOYAGE COMPLETE"}
							</p>
						) : (
							<p className="rounded-full px-3 py-1.5 bg-amber-500/20 text-amber-400 font-semibold text-sm tracking-wide w-fit border border-amber-500/50 shadow-[0_0_10px_rgba(251,191,36,0.3)]">
								🗺️ CHARTING COURSE
							</p>
						)}
						<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-6 text-slate-50 leading-tight">
							<span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
								Pirates of the Coral-bean
							</span>
							<br />
							<span className="text-2xl md:text-3xl lg:text-4xl text-slate-300">
								Dead Men Tell No SQL
							</span>
						</h1>
						<p className="text-base md:text-lg text-slate-300 font-medium leading-snug mt-4 tracking-wide">
							{description}
						</p>
						<div className="flex items-center gap-4 flex-wrap">
							{cta.disabled ? (
								<div className="mt-4 md:mt-6 cursor-not-allowed opacity-60 px-6 py-3 rounded-lg tracking-wide border border-amber-500/30 bg-amber-500/10 text-slate-400">
									{cta.label}
								</div>
							) : (
								<Link
									href={cta.href}
									className="mt-4 md:mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-amber-400/30 bg-amber-500/15 text-slate-50 tracking-wide shadow-[0_12px_25px_rgba(0,0,0,0.35)] hover:bg-amber-500/25 hover:border-amber-300 transition-all"
									target={
										cta.openInNewTab ? "_blank" : "_self"
									}
									rel={
										cta.openInNewTab
											? "noopener noreferrer"
											: undefined
									}
								>
									🏴‍☠️ {cta.label}
								</Link>
							)}
							<Link
								href="https://github.com/withcoral/coral"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-4 md:mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 bg-slate-800/50 text-slate-300 tracking-wide hover:bg-slate-700/50 hover:border-slate-500 transition-all"
							>
								⭐ Star Coral on GitHub
							</Link>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<div className="bg-[#0a0f1e]/90 backdrop-blur-sm shadow-[0_15px_35px_rgba(0,0,0,0.45)] rounded-xl p-4 md:p-6 h-fit w-full border border-amber-500/20">
							{showDate ? (
								<>
									<div className="flex gap-4 text-center font-medium items-center">
										<CalendarIcon
											className="text-amber-400"
											size={30}
										/>
										<p className="text-lg md:text-2xl text-slate-200">
											{formatDate(startDate)} -{" "}
											{formatDate(endDate)}
										</p>
									</div>
									<div className="font-medium border border-amber-500/40 rounded-full text-sm md:text-base px-3 py-2 flex justify-center items-center w-fit gap-1 md:gap-2 mt-4 bg-amber-500/10 mx-auto text-slate-100 shadow-[0_0_12px_rgba(0,0,0,0.4)]">
										<div
											className={cn(
												"w-4 h-4 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.5)]",
												status === "upcoming" &&
													"bg-amber-400 animate-pulse",
												status === "ongoing" &&
													"bg-emerald-400",
												status === "ended" &&
													"bg-slate-400",
											)}
										/>
										{status === "upcoming" &&
											`Sets sail in ${getTimeDisplay(
												timeDifference.daysStartToNow,
												timeDifference.hoursStartToNow,
												timeDifference.minutesStartToNow,
											)}`}
										{status === "ongoing" &&
											`Voyage ends in ${getTimeDisplay(
												timeDifference.daysEndToNow,
												timeDifference.hoursEndToNow,
												timeDifference.minutesEndToNow,
											)}`}
										{status === "ended" &&
											"The voyage has ended"}
									</div>
								</>
							) : (
								<>
									<div className="flex gap-4 text-center font-medium items-center justify-center">
										<CalendarIcon
											className="text-amber-400"
											size={30}
										/>
										<p className="text-lg md:text-2xl text-slate-200">
											Coming Soon
										</p>
									</div>
									<div className="font-medium border border-amber-500/40 rounded-full text-sm md:text-base px-3 py-2 flex justify-center items-center w-fit gap-1 md:gap-2 mt-4 bg-amber-500/10 mx-auto text-slate-100 shadow-[0_0_12px_rgba(0,0,0,0.4)]">
										<div className="w-4 h-4 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
										Charting Course
									</div>
								</>
							)}
							<hr className="my-5 border-amber-500/20" />
							<div className="flex flex-col gap-1 text-slate-200">
								<span className="text-sm uppercase tracking-wide text-amber-400">
									💰 Treasure
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

export default CoralHeader;
