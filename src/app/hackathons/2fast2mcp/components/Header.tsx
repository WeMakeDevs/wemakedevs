import HackathonStatus from "@/components/HackathonStatus";
import HackathonDate from "@/components/hackathon-content/HackathonDate";
import { DateAtom } from "@/components/hackathon-content/atoms";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CalendarIcon, Zap } from "lucide-react";
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
			{/* Animated background glow - nitro blue */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl" />
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
							<span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full text-sm md:text-base font-semibold border border-orange-500/30">
								Online Hackathon
							</span>
							<Link
								href="https://www.wemakedevs.org/february"
								className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-1.5 rounded-full text-sm md:text-base font-semibold border border-red-500/30 hover:bg-red-500/30 transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								Part of Hack All February
								<ArrowUpRight className="w-4 h-4" />
							</Link>
						</div>
						<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent leading-tight">
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
										"cursor-not-allowed opacity-60 bg-orange-500 text-slate-900 px-8 py-6 text-lg",
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
										"bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold shadow-lg shadow-orange-500/30 px-8 py-6 text-lg",
									)}
									{...(cta.openInNewTab && {
										target: "_blank",
										rel: "noopener noreferrer",
									})}
								>
									<Zap className="w-5 h-5 mr-2" />
									{cta.label}
								</Link>
							)}
						</div>
					</div>

					{/* Info card */}
					<div className="flex justify-center items-start lg:items-center">
						<div className="bg-slate-900/70 backdrop-blur-sm shadow-2xl rounded-2xl p-6 md:p-8 w-full max-w-sm border border-orange-500/20">
							<div className="flex items-center gap-4 text-orange-400 mb-4">
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
							<hr className="my-6 border-orange-500/20" />
							<div>
								<span className="text-orange-400 font-semibold text-lg">
									Prizes
								</span>
								<p className="text-2xl md:text-3xl font-bold text-slate-100 mt-1">
									$10,000+
								</p>
								<p className="text-slate-400 mt-1">
									+ exclusive swag
								</p>
								<p className="text-slate-400 mt-1">
									+ job interview at Archestra.ai with the CEO
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
