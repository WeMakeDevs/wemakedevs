import TestimonialCard from "@/components/TestimonialCard";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import { openMetadataTestimonials } from "../testimonials";

const OpenMetadataTestimonials = ({
	className,
	...props
}: GeneralComponent) => {
	return (
		<section
			className={cn(className, "py-16 scroll-m-[100px]")}
			id="testimonials"
			{...props}
		>
			<ViewContainer>
				<div className="text-center mb-10">
					<span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
						⚡ Signals from the Timeline
					</span>
					<h2 className="text-3xl md:text-4xl font-black italic uppercase text-amber-400">
						What Participants Said
					</h2>
				</div>
				<Carousel
					className="overflow-clip md:overflow-visible"
					opts={{
						align: "center",
						loop: true,
					}}
				>
					<CarouselContent className="h-[520px]">
						{openMetadataTestimonials.map((item, index) => (
							<CarouselItem
								key={item.name}
								className="md:basis-1/2 lg:basis-1/3"
							>
								<TestimonialCard
									{...item}
									className={cn(
										"min-h-[460px] p-5 md:p-6",
										index % 4 === 0 && "bg-accent-1",
										index % 4 === 1 && "bg-accent-2",
										index % 4 === 2 && "bg-accent-3",
										index % 4 === 3 && "bg-accent-4",
									)}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="border-amber-500/30 text-amber-400 hover:bg-amber-500/20" />
					<CarouselNext className="border-amber-500/30 text-amber-400 hover:bg-amber-500/20" />
				</Carousel>
			</ViewContainer>
		</section>
	);
};

export default OpenMetadataTestimonials;
