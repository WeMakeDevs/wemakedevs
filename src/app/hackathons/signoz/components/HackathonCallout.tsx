import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const pills = [
	"Runs alongside the talks",
	"Teams up to 4",
	"Solo entries welcome",
	"Free to enter",
	"Live judging",
];

const HackathonCallout = () => {
	return (
		<div className="pb-20">
			<ViewContainer>
				<div className="rounded-3xl border border-[#2be38b]/40 bg-gradient-to-br from-[#2be38b]/10 to-[#5fe9ff]/[0.07] p-8 md:p-10">
					<h3 className="text-2xl md:text-4xl font-black uppercase tracking-[-0.02em] text-[#f5f7fa]">
						There&apos;s a hackathon inside the conference
					</h3>
					<p className="mt-4 max-w-2xl text-base md:text-[17px] leading-relaxed text-[#c0c1c3]">
						A hackathon runs in its own room while the talks are on,
						with the observability clinic at 16:15 where the SigNoz
						team helps you instrument whatever you brought.
						Optional, free, and open to solo builders as well as
						teams. Every project has to use or integrate with SigNoz
						&mdash; beyond that, the brief is wide open.
					</p>

					<div className="mt-6 flex flex-wrap gap-2.5">
						{pills.map(pill => (
							<span
								key={pill}
								className="rounded-full border border-[#3c4152] bg-[#101116] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#c0c1c3]"
							>
								{pill}
							</span>
						))}
					</div>

					<div className="mt-8 flex flex-wrap gap-3">
						<Link
							href="#tracks"
							className="inline-flex items-center gap-2 rounded-xl bg-[#2be38b] px-6 py-3 font-bold text-[#04120c] transition-opacity hover:opacity-90"
						>
							See the tracks
							<ArrowUpRight className="h-4 w-4" />
						</Link>
						<Link
							href="/hackathons/signoz/rules"
							className="sz-ghost-btn inline-flex items-center gap-2 rounded-xl border border-[#3c4152] px-6 py-3 font-bold text-[#f5f7fa] transition-all hover:border-[#5fe9ff] hover:text-[#5fe9ff]"
						>
							Read the rules
						</Link>
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonCallout;
