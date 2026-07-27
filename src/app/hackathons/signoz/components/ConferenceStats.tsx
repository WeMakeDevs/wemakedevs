import { ViewContainer } from "@/components/ui/view-container";
import { stats } from "../data";

const ConferenceStats = () => {
	return (
		<div className="py-16">
			<ViewContainer>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-[#3c4152]/60 bg-[#3c4152]/60">
					{stats.map(stat => (
						<div
							key={stat.label}
							className="bg-[#101116] px-6 py-8 text-center"
						>
							<div className="text-4xl md:text-5xl font-black leading-none tracking-[-0.03em] text-[#2be38b] glow-green">
								{stat.value}
							</div>
							<div className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#62687c]">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</ViewContainer>
		</div>
	);
};

export default ConferenceStats;
