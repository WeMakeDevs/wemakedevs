import HackathonStatus from "@/components/HackathonStatus";
import HackathonDate from "@/components/hackathon-content/HackathonDate";
import { DateAtom } from "@/components/hackathon-content/atoms";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CalendarIcon, Eye, Target } from "lucide-react";
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
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
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
							<span className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-400 px-4 py-1.5 rounded-full text-sm md:text-base font-semibold border border-cyan-500/30">
								<Eye className="w-4 h-4" />
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
						<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent leading-tight">
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
										"cursor-not-allowed opacity-60 bg-cyan-500 text-slate-900 px-8 py-6 text-lg",
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
										"bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-900 font-bold shadow-lg shadow-cyan-500/30 px-8 py-6 text-lg",
									)}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Target className="w-5 h-5 mr-2" />
									{cta.label}
								</Link>
							)}
						</div>
					</div>

					{/* Info card - Dossier style */}
					<div className="flex justify-center items-start lg:items-center">
						<div className="bg-slate-900/70 backdrop-blur-sm shadow-2xl rounded-2xl p-6 md:p-8 w-full max-w-sm border border-cyan-500/20 relative overflow-hidden">
							<div className="flex items-center gap-4 text-cyan-400 mb-4">
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
							<hr className="my-6 border-cyan-500/20" />
							<div>
								<span className="text-cyan-400 font-semibold text-lg flex items-center gap-2">
									<Target className="w-4 h-4" />
									Mission Rewards
								</span>
								<p className="text-2xl md:text-3xl font-bold text-slate-100 mt-1">
									$6,000+
								</p>
								<p className="text-slate-400 mt-1">
									+ exclusive agent swag
								</p>
								<p className="text-slate-400 mt-1">
									+ interview at WeMakeDevs
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
