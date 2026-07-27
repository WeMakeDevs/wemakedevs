import { ViewContainer } from "@/components/ui/view-container";
import { type ScheduleKind, schedule, scheduleLegend, venue } from "../data";

const kindStyles: Record<
	ScheduleKind,
	{ border: string; dot: string; time: string }
> = {
	main: {
		border: "border-l-[#e5502a]",
		dot: "bg-[#e5502a]",
		time: "text-[#ea6e4a]",
	},
	work: {
		border: "border-l-[#ffcd56]",
		dot: "bg-[#ffcd56]",
		time: "text-[#ffcd56]",
	},
	clinic: {
		border: "border-l-[#7f9dc9]",
		dot: "bg-[#7f9dc9]",
		time: "text-[#9fc0ff]",
	},
	break: {
		border: "border-l-[#62687c]",
		dot: "bg-[#62687c]",
		time: "text-[#8b93a7]",
	},
};

const Schedule = () => {
	return (
		<div className="py-20">
			<ViewContainer>
				<div className="max-w-2xl mb-10">
					<span className="sz-eyebrow">Schedule</span>
					<h2 className="mt-6 text-3xl md:text-5xl font-black uppercase text-[#f5f7fa]">
						{venue.dateLabel}
					</h2>
				</div>

				{/* Legend */}
				<div className="flex flex-wrap gap-5 mb-7">
					{scheduleLegend.map(item => (
						<span
							key={item.kind}
							className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#c0c1c3]"
						>
							<span
								className={`h-2.5 w-2.5 shrink-0 rounded-full ${kindStyles[item.kind].dot}`}
							/>
							{item.label}
						</span>
					))}
				</div>

				{/* Slots */}
				<div className="grid gap-2.5">
					{schedule.map(slot => {
						const style = kindStyles[slot.kind];
						return (
							<div
								key={`${slot.time}-${slot.title}`}
								className={`grid grid-cols-[64px_1fr] md:grid-cols-[96px_1fr] gap-4 md:gap-5 items-start rounded-xl border border-[#3c4152]/60 border-l-[3px] ${style.border} ${
									slot.kind === "break"
										? "bg-[#0b0c0e]"
										: "bg-[#101116]"
								} px-5 py-4`}
							>
								<div
									className={`font-mono text-[13px] md:text-sm font-bold pt-0.5 ${style.time}`}
								>
									{slot.time}
								</div>
								<div>
									{slot.format && (
										<span className="mb-1.5 inline-block rounded bg-[#3c4152]/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#c0c1c3]">
											{slot.format}
										</span>
									)}
									<div className="text-[15px] md:text-base font-bold text-[#f5f7fa]">
										{slot.title}
									</div>
									{slot.who && (
										<div className="mt-1 text-[13.5px] text-[#c0c1c3]">
											{slot.who}
										</div>
									)}
									{slot.duration && (
										<div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[#62687c]">
											{slot.duration}
										</div>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</ViewContainer>
		</div>
	);
};

export default Schedule;
