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
import { assemblehackTestimonials } from "../testimonials";

const AssembleTestimonials = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			className={cn(
				className,
				"mt-6 pb-10 scroll-m-[100px] bg-gradient-to-b from-gray-50 to-white",
			)}
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
						{assemblehackTestimonials.map((item, index) => (
							<CarouselItem
								key={item.name}
								className="md:basis-1/2 lg:basis-1/3"
							>
								<TestimonialCard
									{...item}
									className={cn(
										"min-h-[460px] p-5 md:p-6 border-2 shadow-lg",
										index % 4 === 0 &&
											"bg-gradient-to-br from-cyan-50 to-white border-cyan-200",
										index % 4 === 1 &&
											"bg-gradient-to-br from-blue-50 to-white border-blue-200",
										index % 4 === 2 &&
											"bg-gradient-to-br from-indigo-50 to-white border-indigo-200",
										index % 4 === 3 &&
											"bg-gradient-to-br from-purple-50 to-white border-purple-200",
									)}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="text-gray-700 border-gray-300 hover:bg-cyan-50 hover:border-cyan-300" />
					<CarouselNext className="text-gray-700 border-gray-300 hover:bg-cyan-50 hover:border-cyan-300" />
				</Carousel>
			</ViewContainer>
		</section>
	);
};

export default AssembleTestimonials;
