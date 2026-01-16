"use client";

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
import ContributorCard from "./ContributorCard";
import { contributors } from "../contributors";

const ContributorStories = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			className={cn(className, "py-16 scroll-m-[100px] bg-gradient-to-br from-indigo-50 to-blue-50")}
			{...props}
			id="contributor-stories"
		>
			<ViewContainer>
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Contributor Stories
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Hear from developers who made meaningful contributions to Kestra during the Open Source Fest
					</p>
				</div>
				<Carousel
					className="overflow-clip md:overflow-visible"
					opts={{
						align: "center",
						loop: true,
					}}
				>
					<CarouselContent className="h-[520px]">
						{contributors.map((contributor, index) => (
							<CarouselItem
								key={`${contributor.firstName}-${contributor.lastName}`}
								className="md:basis-1/2 lg:basis-1/3"
							>
								<ContributorCard
									contributor={contributor}
									className={cn(
										index % 4 === 0 && "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200",
										index % 4 === 1 && "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
										index % 4 === 2 && "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
										index % 4 === 3 && "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
									)}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</ViewContainer>
		</section>
	);
};

export default ContributorStories;
