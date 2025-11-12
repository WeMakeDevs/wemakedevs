import HackathonStatus from "@/components/HackathonStatus";
import HackathonDate from "@/components/hackathon-content/HackathonDate";
import { DateAtom } from "@/components/hackathon-content/atoms";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";

type HackathonHeaderProps = {
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	prize: string;
	showDate?: boolean; // When false, show "Coming Soon" instead of dates
	cta: {
		label: string;
		href: string;
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
	return (
		<div className="relative bg-gradient-to-br from-purple-200 to-blue-600 py-24">
			<ViewContainer className="bg-white/20 shadow-lg rounded-xl p-3">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-10 bg-white/60 shadow-md rounded-[8px]">
					<div className="col-span-1 lg:col-span-2">
						{/* TODO: When dates are confirmed, set showDate to true and this will show the status */}
						{showDate ? (
							<HackathonStatus
								className="w-fit"
								startDate={startDate}
								endDate={endDate}
							/>
						) : (
							<p className="rounded-full px-3 py-1.5 bg-accent-4 font-semibold text-sm tracking-wide w-fit">
								COMING SOON
							</p>
						)}
						<h1 className="text-4xl md:text-6xl font-bold mt-6">
							{title}
						</h1>
						<p className="text-base md:text-lg text-foreground/90 font-medium leading-snug mt-4 tracking-wide">
							{description}
						</p>
						<div className="flex items-center gap-4">
							{cta.disabled ? (
								<div
									className={cn(
										buttonVariants({
											variant: "default",
										}),
										"mt-4 md:mt-6 cursor-not-allowed opacity-60",
									)}
								>
									{cta.label}
								</div>
							) : (
								<Link
									href={cta.href}
									className={cn(
										buttonVariants({ variant: "default" }),
										"mt-4 md:mt-6 ",
									)}
									target="_blank"
									rel="noopener noreferrer"
								>
									{cta.label}
								</Link>
							)}
						</div>
					</div>
					<div className="flex justify-center items-center">
						<div className="bg-white/50 shadow-md rounded-xl p-4 md:p-6 h-fit w-full">
							{showDate ? (
								<>
									{/* TODO: When dates are confirmed, this will show the actual dates */}
									<div className="flex gap-4 text-center font-medium">
										<CalendarIcon className="" size={30} />
										<p className="text-lg md:text-2xl">
											<DateAtom date={startDate} /> -{" "}
											<DateAtom date={endDate} />
										</p>
									</div>
									<HackathonDate
										startDate={startDate}
										endDate={endDate}
									/>
								</>
							) : (
								<>
									{/* Show "Coming Soon" when dates are not available */}
									<div className="flex gap-4 text-center font-medium items-center justify-center">
										<CalendarIcon className="" size={30} />
										<p className="text-lg md:text-2xl">
											Coming Soon
										</p>
									</div>
									<div className="font-medium border border-foreground/40 rounded-full text-sm md:text-base px-3 py-2 flex justify-center items-center w-fit gap-1 md:gap-2 mt-4 bg-white mx-auto">
										<div className="w-4 h-4 rounded-full bg-accent-4" />
										Starting Soon
									</div>
								</>
							)}
							<hr className="my-5 border-foreground/40" />
							<p className="flex gap-4 items-end font-medium">
								Prizes: {prize}
							</p>
						</div>
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonHeader;
