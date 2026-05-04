"use client";

import {
	InitiativeCard,
	InitiativeCardDescription,
	InitiativeCardImage,
	InitiativeCardTitle,
} from "@/components/InitiativeCard";
import { initiatives } from "@/constants/initiatives";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ViewContainer } from "./ui/view-container";

const Initiatives = ({ className, ...props }: GeneralComponent) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(false);

	const checkScroll = useCallback(() => {
		const el = scrollRef.current;
		if (!el) return;
		setCanScrollLeft(el.scrollLeft > 2);
		setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
	}, []);

	useEffect(() => {
		checkScroll();
		const el = scrollRef.current;
		if (!el) return;
		el.addEventListener("scroll", checkScroll, { passive: true });
		window.addEventListener("resize", checkScroll);
		return () => {
			el.removeEventListener("scroll", checkScroll);
			window.removeEventListener("resize", checkScroll);
		};
	}, [checkScroll]);

	const scroll = (direction: "left" | "right") => {
		const el = scrollRef.current;
		if (!el) return;
		const amount = 380;
		el.scrollBy({
			left: direction === "left" ? -amount : amount,
			behavior: "smooth",
		});
	};

	return (
		<section
			className={cn(className, "mt-24 mb-16 scroll-m-[100px]")}
			id="initiatives"
			{...props}
		>
			<ViewContainer>
				<div className="flex justify-between flex-col items-center">
					<h2 className="text-4xl md:text-5xl">Initiatives</h2>
					<p className="max-w-2xl font-medium leading-snug mt-2 md:mt-3 text-center text-base md:text-lg">
						Supporting students in their educational journey with
						financial aid and opportunities to pursue their dreams
						in technology and innovation.
					</p>
				</div>
			</ViewContainer>

			<div className="relative max-w-[100vw] overflow-hidden">
				{/* Left arrow */}
				{canScrollLeft && (
					<button
						type="button"
						onClick={() => scroll("left")}
						className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-accent transition-colors"
						aria-label="Scroll left"
					>
						<ChevronLeft size={20} />
					</button>
				)}

				{/* Right arrow */}
				{canScrollRight && (
					<button
						type="button"
						onClick={() => scroll("right")}
						className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-accent transition-colors"
						aria-label="Scroll right"
					>
						<ChevronRight size={20} />
					</button>
				)}

				{/* Fade edges */}
				{canScrollLeft && (
					<div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-[1] pointer-events-none" />
				)}
				{canScrollRight && (
					<div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-[1] pointer-events-none" />
				)}

				{/* Scrollable row */}
				<div
					ref={scrollRef}
					className="my-10 overflow-x-auto overscroll-x-contain scrollbar-thin pb-4 px-5 lg:px-[max(1.25rem,calc((100vw-1200px)/2))]"
				>
					<div className="flex gap-6 w-max">
						{initiatives.map(initiative => (
							<div
								key={initiative.title}
								className="w-[320px] md:w-[360px] shrink-0"
							>
								<InitiativeCard href={initiative.url}>
									<InitiativeCardImage
										src={initiative.image}
										alt={initiative.title}
									/>
									<InitiativeCardTitle>
										{initiative.title}
									</InitiativeCardTitle>
									<InitiativeCardDescription>
										{initiative.description}
									</InitiativeCardDescription>
								</InitiativeCard>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Initiatives;
