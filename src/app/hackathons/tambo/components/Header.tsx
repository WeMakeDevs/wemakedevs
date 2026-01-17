import HackathonStatus from "@/components/HackathonStatus";
import HackathonDate from "@/components/hackathon-content/HackathonDate";
import { DateAtom } from "@/components/hackathon-content/atoms";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import { CalendarIcon, Sparkles } from "lucide-react";
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
		disabled?: boolean;
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
		<div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30 py-24 overflow-hidden">
			{/* Star Wars inspired background elements */}
			<div className="absolute inset-0 overflow-hidden">
				{/* Stars effect */}
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
				{/* Animated glow lines */}
				<div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent" />
				<div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-500/10 to-transparent" />
			</div>

			<ViewContainer className="relative z-10 bg-slate-900/40 backdrop-blur-sm shadow-lg shadow-amber-500/10 rounded-xl p-3 border border-amber-500/20">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-10 bg-slate-900/60 shadow-md rounded-[8px] border border-amber-500/10">
					<div className="col-span-1 lg:col-span-2">
						<HackathonStatus
							className="w-fit"
							startDate={startDate}
							endDate={endDate}
						/>
						<h1 className="text-4xl md:text-6xl font-bold mt-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
							{title}
						</h1>
						<p className="text-base md:text-lg text-slate-300 font-medium leading-snug mt-4 tracking-wide">
							{description}
						</p>
						<div className="flex items-center gap-4">
							{cta.disabled ? (
								<div
									className={cn(
										buttonVariants({
											variant: "default",
										}),
										"mt-4 md:mt-6 cursor-not-allowed opacity-60 bg-amber-500 text-slate-900",
									)}
								>
									{cta.label}
								</div>
							) : (
								<Link
									href={cta.href}
									className={cn(
										buttonVariants({ variant: "default" }),
										"mt-4 md:mt-6 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-900 font-semibold shadow-lg shadow-amber-500/30",
									)}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Sparkles className="w-4 h-4 mr-2" />
									{cta.label}
								</Link>
							)}
						</div>
					</div>
					<div className="flex justify-center items-center">
						<div className="bg-slate-800/80 shadow-lg shadow-amber-500/10 rounded-xl p-4 md:p-6 h-fit w-full border border-amber-500/20">
							<div className="flex gap-4 text-center font-medium text-amber-400">
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
							<hr className="my-5 border-amber-500/30" />
							<p className="flex gap-4 items-end font-medium text-slate-300">
								<span className="text-amber-400">Prizes:</span>{" "}
								$6,000 + Tambo credits + exclusive swag
							</p>
						</div>
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonHeader;
