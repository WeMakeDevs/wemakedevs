import { ViewContainer } from "@/components/ui/view-container";
import Image from "next/image";
import steveImg from "../images/steve.jpg";

const OpenMetadataSponsorTestimonial = () => {
	return (
		<section className="py-16 md:py-20">
			<ViewContainer>
				<div className="text-center mb-10">
					<span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
						💬 Sponsor Testimonial
					</span>
					<h2 className="text-3xl md:text-4xl font-black italic uppercase text-amber-400">
						Word from the Sponsor
					</h2>
				</div>

				<div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto relative">
					{/* Decorative quote mark */}
					<span
						aria-hidden="true"
						className="absolute top-4 left-6 text-7xl md:text-9xl font-black text-amber-400/20 leading-none select-none"
					>
						“
					</span>

					<div className="relative space-y-5 text-base md:text-lg leading-relaxed text-slate-200 font-mono">
						<p>
							We had a great time working with WeMakeDevs on our
							OpenMetadata hackathon! WeMakeDevs has built out a
							great community of knowledgeable and enthusiastic
							developers that brought some great ideas and new
							perspectives on how to build with our growing
							open-source semantic context layer.
						</p>
						<p>
							The hackathon had a great turnout of new
							contributors to OpenMetadata, and we are looking
							forward to working with WeMakeDevs again!
						</p>
					</div>

					<div className="flex items-center gap-4 mt-8 pt-6 border-t border-amber-500/15">
						<Image
							src={steveImg}
							alt="Steve Wooledge, CMO at Collate"
							className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-amber-500/50 object-cover shrink-0"
						/>
						<div>
							<p className="text-lg font-bold text-slate-100 font-mono">
								Steve Wooledge
							</p>
							<p className="text-sm font-medium text-amber-400 font-mono">
								CMO, Collate
							</p>
						</div>
					</div>
				</div>
			</ViewContainer>
		</section>
	);
};

export default OpenMetadataSponsorTestimonial;
