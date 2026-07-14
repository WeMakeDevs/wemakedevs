"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
	type SponsorTestimonialItem,
	sponsorTestimonials,
} from "./sponsorTestimonials";

function SponsorTestimonialCard({
	item,
	className,
}: {
	item: SponsorTestimonialItem;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"flex-shrink-0 w-[320px] md:w-[380px] rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur border border-border shadow-lg p-5 md:p-6 flex flex-col",
				className,
			)}
		>
			<Image
				src={item.logo}
				alt={item.company}
				className="w-20 h-10 object-contain object-left mb-4"
			/>
			<p className="text-sm md:text-base font-medium text-foreground/90 flex-1 line-clamp-4">
				&quot;{item.quote}&quot;
			</p>
			<div className="flex items-center gap-3 mt-4 pt-3 border-t border-border/50">
				<Image
					src={item.authorImage}
					alt={item.author}
					className="w-10 h-10 rounded-full object-cover"
				/>
				<div>
					<p className="font-semibold text-foreground text-sm">{item.author}</p>
					<p className="text-xs text-muted-foreground">{item.company}</p>
				</div>
			</div>
		</div>
	);
}

export default function SponsorTestimonialsScroll() {
	return (
		<section
			className="relative py-8 md:py-10 overflow-hidden"
			aria-label="Sponsor testimonials"
		>
			{/* Edge fade masks */}
			<div
				className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 bg-gradient-to-r from-background to-transparent"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 bg-gradient-to-l from-background to-transparent"
				aria-hidden
			/>
			<div className="flex gap-6 w-max motion-safe:animate-sponsor-scroll">
				{sponsorTestimonials.map((item, index) => (
					<SponsorTestimonialCard key={`${item.company}-${index}`} item={item} />
				))}
				{/* Duplicate set for seamless loop */}
				{sponsorTestimonials.map((item, index) => (
					<SponsorTestimonialCard key={`${item.company}-dup-${index}`} item={item} />
				))}
			</div>
		</section>
	);
}
