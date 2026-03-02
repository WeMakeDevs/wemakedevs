import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SiX } from "@icons-pack/react-simple-icons";
import { tamboTestimonials } from "../testimonials";

const TamboTestimonials = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			className={cn(className, "mt-6 pb-10 scroll-m-[100px]")}
			{...props}
			id="testimonials"
		>
			<ViewContainer>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{tamboTestimonials.map((item) => (
						<Link
							key={item.tweetUrl}
							href={item.tweetUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-between gap-4 p-6 rounded-xl bg-slate-900/60 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 hover:bg-slate-800/60 transition-colors duration-300 group"
						>
							<div className="flex items-center gap-3 min-w-0">
								<SiX className="w-6 h-6 text-amber-400 shrink-0" />
								<span className="font-medium text-slate-200 truncate">
									@{item.handle}
								</span>
							</div>
							<span className="flex items-center gap-1 text-amber-400 font-medium text-sm shrink-0 group-hover:gap-2 transition-all">
								View tweet
								<ArrowUpRight size={16} />
							</span>
						</Link>
					))}
				</div>
			</ViewContainer>
		</section>
	);
};

export default TamboTestimonials;
