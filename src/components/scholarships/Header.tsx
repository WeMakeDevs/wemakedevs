"use client";

import { kubeconImages } from "@/assets/images/kubecon";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ViewContainer } from "../ui/view-container";

const Header = ({ className, ...props }: GeneralComponent) => {
	const [emblaRef] = useEmblaCarousel(
		{
			loop: true,
			align: "start",
			skipSnaps: false,
		},
		[Autoplay({ delay: 2000, stopOnInteraction: false })],
	);

	return (
		<header
			{...props}
			className={cn(
				className,
				"pb-16 lg:pb-24 pt-20 lg:pt-36 min-h-[80vh] lg:min-h-[70vh] xl:min-h-[60vh] bg-white",
			)}
		>
			<ViewContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
				{/* Content Section */}
				<div className="space-y-6">
					<h1 className="font-title text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
						Win a fully sponsored trip to KubeCon Amsterdam!
					</h1>
					<div className="space-y-4">
						<p className="text-base font-medium text-balance text-gray-700">
							Our scholarship program is here to open doors for
							individuals who may not otherwise get the chance to
							attend major industry events. Whether based on
							diversity or financial need, we want to support
							passionate builders and contributors in joining the
							global tech community.
							<br />
							Recipients will receive complimentary passes to
							leading conferences. Awards are granted based on a
							combination of need and potential impact, with
							applications carefully reviewed by a diverse panel
							of community members.
						</p>
					</div>
					<p className="border border-gray-300 px-4 py-2 rounded-full inline-block text-gray-700">
						23 - 26 March, 2026
					</p>
					<Link
						href="#apply"
						className={cn(
							buttonVariants(),
							"bg-primary hover:bg-gray-800 text-white flex items-center gap-2 w-fit transition-colors",
						)}
					>
						Apply now
						<ArrowRightIcon size={18} />
					</Link>
				</div>

				{/* Carousel Section */}
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex gap-6">
						{kubeconImages.map((src, i) => (
							<div
								className="flex-[0_0_100%] min-w-0"
								key={`${src}-${
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									i
								}`}
							>
								<Image
									src={src}
									alt={`Slide ${i + 1}`}
									className="w-full h-80 object-cover rounded-lg"
								/>
							</div>
						))}
					</div>
				</div>
			</ViewContainer>
		</header>
	);
};

export default Header;
