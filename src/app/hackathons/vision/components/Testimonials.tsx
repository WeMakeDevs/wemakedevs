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
import { visionTestimonials } from "../testimonials";

const VisionTestimonials = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			className={cn(className, "mt-6 pb-10 scroll-m-[100px]")}
			{...props}
			id="testimonials"
		>
			<ViewContainer>
				<Carousel
					className="overflow-clip md:overflow-visible"
					opts={{
						align: "center",
						loop: true,
					}}
				>
					<CarouselContent className="h-[520px]">
						{visionTestimonials.map((item, index) => (
							<CarouselItem
								key={`${item.name}-${index}`}
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
					<CarouselPrevious className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20" />
					<CarouselNext className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20" />
				</Carousel>
			</ViewContainer>
		</section>
	);
};

export default VisionTestimonials;
