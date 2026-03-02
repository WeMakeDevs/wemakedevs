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
import { accomplishTestimonials } from "../testimonials";

const AccomplishTestimonials = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			className={cn(className, "mt-6 pb-10 scroll-m-[100px] bg-slate-950")}
			{...props}
			id="testimonials"
		>
			<ViewContainer>
				<h2 className="text-3xl md:text-4xl font-bold text-sky-400 uppercase tracking-wide mb-8 text-center">
					What Participants Built
				</h2>
				<Carousel
					className="overflow-clip md:overflow-visible"
					opts={{
						align: "center",
						loop: true,
					}}
				>
					<CarouselContent className="h-[520px]">
						{accomplishTestimonials.map((item, index) => (
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
					<CarouselPrevious className="text-slate-100 border-slate-700 hover:bg-slate-800" />
					<CarouselNext className="text-slate-100 border-slate-700 hover:bg-slate-800" />
				</Carousel>
			</ViewContainer>
		</section>
	);
};

export default AccomplishTestimonials;
