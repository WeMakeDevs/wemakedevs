import HackathonStatus from "@/components/HackathonStatus";
import HackathonDate from "@/components/hackathon-content/HackathonDate";
import { DateAtom } from "@/components/hackathon-content/atoms";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CalendarIcon, Sparkles, Trophy } from "lucide-react";
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
		openInNewTab?: boolean;
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
		<div className="relative py-20 md:py-28 overflow-hidden">
			{/* Animated background glow */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-3xl" />
			</div>

			<ViewContainer className="relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
					{/* Main content */}
					<div className="col-span-1 lg:col-span-2">
						<HackathonStatus
							className="w-fit mb-6"
							startDate={startDate}
							endDate={endDate}
						/>
						<div className="flex items-center gap-3 mb-4 flex-wrap">
							<span className="inline-block bg-sky-500/20 text-sky-400 px-4 py-1.5 rounded-full text-sm md:text-base font-semibold border border-sky-500/30">
								Online Hackathon
							</span>
							<Link
								href="https://www.wemakedevs.org/february"
								className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-sm md:text-base font-semibold border border-amber-500/30 hover:bg-amber-500/30 transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								Hack All February - Week 3
								<ArrowUpRight className="w-4 h-4" />
							</Link>
						</div>
						<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-sky-400 via-amber-400 to-sky-500 bg-clip-text text-transparent leading-tight">
							{title}
						</h1>
						<p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mt-6 max-w-2xl">
							{description}
						</p>
						<div className="flex items-center gap-4 mt-8">
							{cta.disabled ? (
								<div
									className={cn(
										buttonVariants({
											variant: "default",
											size: "lg",
										}),
										"cursor-not-allowed opacity-60 bg-sky-500 text-slate-900 px-8 py-6 text-lg",
									)}
								>
									{cta.label}
								</div>
							) : (
								<Link
									href={cta.href}
									className={cn(
										buttonVariants({
											variant: "default",
											size: "lg",
										}),
										"bg-gradient-to-r from-sky-500 to-amber-500 hover:from-sky-400 hover:to-amber-400 text-white font-bold shadow-lg shadow-sky-500/30 px-8 py-6 text-lg",
									)}
									target={cta.openInNewTab ? "_blank" : "_self"}
									rel={cta.openInNewTab ? "noopener noreferrer" : undefined}
								>
									<Sparkles className="w-5 h-5 mr-2" />
									{cta.label}
								</Link>
							)}
						</div>
					</div>

					{/* Info card */}
					<div className="flex justify-center items-start lg:items-center">
						<div className="bg-slate-900/70 backdrop-blur-sm shadow-2xl rounded-2xl p-6 md:p-8 w-full max-w-sm border border-sky-500/20">
							<div className="flex items-center gap-4 text-sky-400 mb-4">
								<CalendarIcon size={28} />
								<p className="text-xl md:text-2xl font-bold">
									<DateAtom date={startDate} /> -{" "}
									<DateAtom date={endDate} />
								</p>
							</div>
							<HackathonDate
								startDate={startDate}
								endDate={endDate}
							/>
							<hr className="my-6 border-sky-500/20" />
							<div className="rounded-xl bg-gradient-to-br from-amber-500/20 via-sky-500/15 to-amber-500/20 border border-amber-400/30 p-4">
								<div className="flex items-center gap-2 mb-3">
									<Trophy className="w-5 h-5 text-amber-400" />
									<span className="text-amber-400 font-bold text-sm uppercase tracking-wide">
										Prizes
									</span>
								</div>
								<p className="text-xl md:text-2xl font-bold text-white leading-tight">
									$3000 cash + job interviews
								</p>
								<p className="text-sky-300 font-semibold mt-2 text-sm flex items-center gap-1.5">
									Top 20 winners · INR 10,000 each
								</p>
							</div>
						</div>
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonHeader;
