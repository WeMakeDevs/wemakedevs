import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ViewContainer } from "@/components/ui/view-container";
import { SiLinkedin } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cogneeTestimonials } from "../testimonials";

const CogneeTestimonials = () => {
	return (
		<section id="testimonials" className="py-20 scroll-mt-44">
			<ViewContainer>
				<div className="text-center mb-12">
					<span className="inline-flex items-center gap-2 bg-[#c33124]/10 border border-[#c33124]/30 text-[#c33124] px-5 py-2 rounded-full text-sm font-semibold mb-6">
						💬 From the Builders
					</span>
					<h2 className="text-3xl md:text-4xl font-black italic uppercase text-[#c33124] glow-red">
						What Participants Are Saying
					</h2>
				</div>

				<Carousel
					className="overflow-clip md:overflow-visible"
					opts={{ align: "start", loop: true }}
				>
					<CarouselContent className="items-stretch">
						{cogneeTestimonials.map(item => (
							<CarouselItem
								key={item.url}
								className="md:basis-1/2 lg:basis-1/3"
							>
								<Link
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
									className="group paper-card rounded-2xl p-6 h-full flex flex-col gap-5 hover:border-[#c33124]/40 transition-colors"
								>
									<SiLinkedin
										size={24}
										className="text-[#0e8a80] shrink-0"
									/>
									<p className="text-[#5a4632] leading-relaxed grow">
										{item.quote}
									</p>
									<span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c33124] opacity-80 group-hover:opacity-100 transition-opacity">
										Read on LinkedIn
										<ArrowUpRight size={16} />
									</span>
								</Link>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="border-[#c33124]/30 text-[#c33124] hover:bg-[#c33124]/10" />
					<CarouselNext className="border-[#c33124]/30 text-[#c33124] hover:bg-[#c33124]/10" />
				</Carousel>
			</ViewContainer>
		</section>
	);
};

export default CogneeTestimonials;
