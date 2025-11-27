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
	const gridPattern =
		"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff41' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

	return (
		<div className="relative bg-gradient-to-br from-[#050807] via-[#0c1317] to-[#101c24] py-24 border-b border-white/5">
			<div
				className="absolute inset-0 opacity-30"
				style={{ backgroundImage: `url("${gridPattern}")` }}
			/>
			<ViewContainer className="bg-[#0b1214]/80 backdrop-blur border border-white/10 rounded-2xl p-3 shadow-[0_25px_60px_rgba(3,8,10,0.55)]">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-8 bg-[#0e161a]/80 rounded-xl border border-white/5">
					<div className="col-span-1 lg:col-span-2">
						{showDate ? (
							<HackathonStatus
								className="w-fit"
								startDate={startDate}
								endDate={endDate}
							/>
						) : (
							<p className="rounded-full px-3 py-1.5 bg-green-500/20 text-green-400 font-mono font-semibold text-sm tracking-wide w-fit border border-green-500/50 shadow-[0_0_10px_rgba(0,255,65,0.3)]">
								&gt; COMING SOON
							</p>
						)}
						<h1 className="text-4xl md:text-6xl font-bold mt-6 text-slate-50 font-mono">
							<span className="text-green-400 mr-3">&gt;</span>
							{title}
						</h1>
						<p className="text-base md:text-lg text-slate-300 font-medium leading-snug mt-4 tracking-wide">
							{description}
						</p>
						<div className="flex items-center gap-4">
							{cta.disabled ? (
								<div
									className={cn(
										"mt-4 md:mt-6 cursor-not-allowed opacity-60 px-6 py-3 rounded-lg font-mono tracking-wide border border-white/15 bg-white/5 text-slate-400",
									)}
								>
									{cta.label}
								</div>
							) : (
								<Link
									href={cta.href}
									className="mt-4 md:mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-green-400/30 bg-[#17252b] text-slate-50 font-mono tracking-wide shadow-[0_12px_25px_rgba(0,0,0,0.35)] hover:bg-[#1f3037] hover:border-green-300 transition-all"
									target={
										cta.openInNewTab ? "_blank" : "_self"
									}
									rel={
										cta.openInNewTab
											? "noopener noreferrer"
											: undefined
									}
								>
									<span className="text-green-300">&gt;</span>
									{cta.label}
								</Link>
							)}
						</div>
					</div>
					<div className="flex justify-center items-center">
						<div className="bg-[#0c1418]/90 backdrop-blur-sm shadow-[0_15px_35px_rgba(0,0,0,0.45)] rounded-xl p-4 md:p-6 h-fit w-full border border-white/10">
							{showDate ? (
								<>
									<div className="flex gap-4 text-center font-medium">
										<CalendarIcon
											className="text-green-300"
											size={30}
										/>
										<p className="text-lg md:text-2xl text-slate-200 font-mono">
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
										<CalendarIcon
											className="text-green-300"
											size={30}
										/>
										<p className="text-lg md:text-2xl text-slate-200 font-mono">
											Coming Soon
										</p>
									</div>
									<div className="font-mono font-medium border border-green-500/40 rounded-full text-sm md:text-base px-3 py-2 flex justify-center items-center w-fit gap-1 md:gap-2 mt-4 bg-green-500/10 mx-auto text-slate-100 shadow-[0_0_12px_rgba(0,0,0,0.4)]">
										<div className="w-4 h-4 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(0,255,65,0.5)]" />
										&gt; Starting Soon
									</div>
								</>
							)}
							<hr className="my-5 border-white/10" />
							<div className="flex flex-col gap-1 font-mono text-slate-200">
								<span className="text-sm uppercase tracking-wide text-green-300">
									&gt; Prizes
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
