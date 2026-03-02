"use client";

import { TweetEmbed } from "@/components/TweetEmbed";
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
import Script from "next/script";
import { useEffect } from "react";
import { twoFastTwoMcpTestimonials } from "../testimonials";

declare global {
	interface Window {
		twttr?: {
			widgets: { load: (el?: HTMLElement) => void };
		};
	}
}

const TwoFastTwoMcpTestimonials = ({
	className,
	...props
}: GeneralComponent) => {
	useEffect(() => {
		if (typeof window !== "undefined" && window.twttr?.widgets) {
			window.twttr.widgets.load();
		}
	}, []);

	return (
		<section
			className={cn(className, "mt-6 pb-10 scroll-m-[100px]")}
			{...props}
			id="testimonials"
		>
			<Script
				id="twitter-widgets-2fast2mcp"
				src="https://platform.twitter.com/widgets.js"
				strategy="lazyOnload"
				onLoad={() => window.twttr?.widgets?.load()}
			/>
			<ViewContainer>
				<Carousel
					className="overflow-clip md:overflow-visible"
					opts={{
						align: "center",
						loop: true,
					}}
				>
					<CarouselContent className="h-[520px]">
						{twoFastTwoMcpTestimonials.map((item) => (
							<CarouselItem
								key={item.tweetUrl}
								className="md:basis-1/2 lg:basis-1/3"
							>
								<div className="min-h-[460px] p-5 md:p-6 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-orange-500/20 mx-auto max-w-[500px]">
									<TweetEmbed tweetUrl={item.tweetUrl} />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="border-orange-500/30 text-orange-400 hover:bg-orange-500/20" />
					<CarouselNext className="border-orange-500/30 text-orange-400 hover:bg-orange-500/20" />
				</Carousel>
			</ViewContainer>
		</section>
	);
};

export default TwoFastTwoMcpTestimonials;
