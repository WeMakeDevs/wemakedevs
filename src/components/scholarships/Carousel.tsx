"use client";

import { kubeconImages } from "@/assets/images/kubecon";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ViewContainer } from "../ui/view-container";

const Carousel = () => {
	const [emblaRef] = useEmblaCarousel(
		{
			loop: true,
			align: "start",
			skipSnaps: false,
		},
		[Autoplay({ delay: 2000, stopOnInteraction: false })],
	);

	return (
		<div className="pt-5 pb-10 bg-white">
			<ViewContainer>
				<h2 className="text-4xl md:text-5xl font-bold font-title text-center">
					A glimpse of the event
				</h2>
				<div className="overflow-hidden mt-10" ref={emblaRef}>
					<div className="flex gap-6">
						{kubeconImages.map((src, i) => (
							<div
								className="flex-[0_0_100%] md:flex-[0_0_33%] min-w-0"
								key={`${src}-${
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									i
								}`}
							>
								<Image
									src={src}
									alt={`Slide ${i + 1}`}
									className="w-96 object-cover"
								/>
							</div>
						))}
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default Carousel;
