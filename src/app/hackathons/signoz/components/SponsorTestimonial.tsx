import { ViewContainer } from "@/components/ui/view-container";
import Image from "next/image";
import { images } from "../images";

const Highlight = ({ children }: { children: React.ReactNode }) => (
	<span className="text-[#ffd778] font-semibold">{children}</span>
);

const SponsorTestimonial = () => {
	return (
		<section className="py-16 md:py-20">
			<ViewContainer>
				<div className="text-center mb-10">
					<span className="inline-flex items-center gap-2 bg-[#2be38b]/10 border border-[#2be38b]/30 text-[#2be38b] px-5 py-2 rounded-full text-sm font-semibold mb-6">
						💬 Sponsor Testimonial
					</span>
					<h2 className="text-3xl md:text-4xl font-black uppercase text-[#f5f5f5] glow-orange">
						Word From{" "}
						<span className="normal-case text-[#e5502a]">
							SigNoz
						</span>
					</h2>
				</div>

				<figure className="dossier-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto relative">
					{/* Decorative quote mark */}
					<span
						aria-hidden="true"
						className="absolute top-4 left-6 text-7xl md:text-9xl font-black text-[#e5502a]/20 leading-none select-none"
					>
						&ldquo;
					</span>

					<blockquote className="relative space-y-5 text-base md:text-lg leading-relaxed text-[#c0c1c3]">
						<p>
							Working with WeMakeDevs on the &lsquo;Agents of
							SigNoz&rsquo; hackathon{" "}
							<Highlight>
								delivered amazing results with minimal
								operational overhead
							</Highlight>{" "}
							for our team. The main thing we were looking for was
							community building cool projects which focused on
							agentic workflows with SigNoz.
						</p>
						<p>
							WeMakeDevs through its global reach ensured
							participation from{" "}
							<Highlight>
								thousands of developers across the world
							</Highlight>{" "}
							which also resulted in us{" "}
							<Highlight>trending worldwide on GitHub</Highlight>.
							We got over{" "}
							<Highlight>400+ projects submitted</Highlight>,
							social shares and high turnout in both online +
							offline (happened in SF) hackathons.{" "}
							<Highlight>
								Highly recommend partnering with them.
							</Highlight>
						</p>
					</blockquote>

					<figcaption className="flex items-center gap-4 mt-8 pt-6 border-t border-[#3c4152]">
						<Image
							src={images.ankit}
							alt="Ankit Anand, Founding Growth Lead at SigNoz"
							className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#e5502a]/50 object-cover shrink-0"
						/>
						<div>
							<p className="text-lg font-bold text-[#f5f5f5]">
								Ankit Anand
							</p>
							<p className="text-sm font-medium text-[#ea6e4a]">
								Founding Growth Lead, SigNoz
							</p>
						</div>
					</figcaption>
				</figure>
			</ViewContainer>
		</section>
	);
};

export default SponsorTestimonial;
