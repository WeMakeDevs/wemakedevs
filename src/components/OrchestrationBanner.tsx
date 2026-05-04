import { ViewContainer } from "@/components/ui/view-container";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const OrchestrationBanner = () => {
	return (
		<section className="py-12 md:py-16 bg-gradient-to-br from-[#0a0a1a] via-[#0f1029] to-[#0a0a1a] relative overflow-hidden">
			{/* Subtle glow effects */}
			<div className="absolute top-0 left-1/3 w-[300px] h-[200px] bg-[#00cfb4]/10 rounded-full blur-[100px]" />
			<div className="absolute bottom-0 right-1/3 w-[300px] h-[200px] bg-orange-500/10 rounded-full blur-[100px]" />

			<ViewContainer className="relative z-10">
				<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
					<div className="flex-1">
						<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00cfb4]/30 bg-[#00cfb4]/10 text-[#00cfb4] text-xs font-semibold uppercase tracking-wider mb-4">
							<Sparkles size={12} />
							Live Challenge · May 4–17
						</div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
							The Kestra Orchestration Challenge
						</h2>
						<p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
							Get certified in workflow orchestration for free and
							win MacBooks, iPads, iPhones, and more. No
							pre-requisites — beginners welcome.
						</p>
					</div>
					<div className="shrink-0">
						<Link
							href="/orchestration"
							className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00cfb4] to-[#00a896] text-[#0a0a1a] font-bold text-lg hover:shadow-[0_0_30px_rgba(0,207,180,0.4)] transition-shadow"
						>
							Learn More
						</Link>
					</div>
				</div>
			</ViewContainer>
		</section>
	);
};

export default OrchestrationBanner;
