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
	cta: {
		label: string;
		href: string;
	};
};

const HackathonHeader = ({
	title,
	description,
	startDate,
	endDate,
	prize,
	cta,
}: HackathonHeaderProps) => {
	return (
		<div className="relative bg-gradient-to-br from-purple-200 via-blue-200 to-indigo-600 py-24">
			<ViewContainer className="bg-white/20 shadow-lg rounded-xl p-3">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-10 bg-white/60 shadow-md rounded-[8px]">
					<div className="col-span-1 lg:col-span-2">
						<HackathonStatus
							className="w-fit"
							startDate={startDate}
							endDate={endDate}
						/>
						<h1 className="text-4xl md:text-6xl font-bold mt-6 text-gray-800">
							{title}
						</h1>
						<p className="text-base md:text-lg text-foreground/90 font-medium leading-snug mt-4 tracking-wide">
							{description}
						</p>
						<div className="flex items-center gap-4">
							<Link
								href={cta.href}
								className={cn(
									buttonVariants({ variant: "default" }),
									"mt-4 md:mt-6",
								)}
								target="_blank"
								rel="noopener noreferrer"
							>
								{cta.label}
							</Link>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<div className="bg-white/50 shadow-md rounded-xl p-4 md:p-6 h-fit w-full">
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
							<hr className="my-5 border-foreground/40" />
							<p className="flex gap-4 items-end font-medium">
								Apple MacBook, Apple iPad & Interview at Kestra!
							</p>
						</div>
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonHeader;
