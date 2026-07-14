"use client";

import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import { Globe, Handshake, UserPlus, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import {
	type SponsorTestimonialItem,
	sponsorTestimonials,
} from "./sponsorTestimonials";
import { buttonVariants } from "./ui/button";
import { NavContainer } from "./ui/nav-container";

const stats: {
	value: number;
	suffix: string;
	label: string;
	icon: LucideIcon;
}[] = [
	{ value: 200, suffix: "k", label: "Members", icon: Users },
	{ value: 120, suffix: "k+", label: "Signups", icon: UserPlus },
	{ value: 40, suffix: "+", label: "Countries", icon: Globe },
	{ value: 60, suffix: "+", label: "Partners", icon: Handshake },
];

const midpoint = Math.ceil(sponsorTestimonials.length / 2);
const columnA = sponsorTestimonials.slice(0, midpoint);
const columnB = sponsorTestimonials.slice(midpoint);

function HeroTestimonialCard({ item }: { item: SponsorTestimonialItem }) {
	return (
		<figure className="rounded-2xl bg-white border border-zinc-200 shadow-sm p-5 dark:bg-slate-900 dark:border-slate-800">
			<Image
				src={item.logo}
				alt={item.company}
				className="h-8 w-auto max-w-[120px] object-contain object-left mb-3"
			/>
			<blockquote className="text-sm leading-relaxed text-slate-600 line-clamp-3 dark:text-slate-300">
				&quot;{item.quote}&quot;
			</blockquote>
			<figcaption className="mt-4 flex items-center gap-2.5">
				<Image
					src={item.authorImage}
					alt={item.author}
					className="h-8 w-8 rounded-full object-cover"
				/>
				<div className="leading-tight">
					<p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
						{item.author}
					</p>
					<p className="text-[11px] text-slate-500">{item.company}</p>
				</div>
			</figcaption>
		</figure>
	);
}

function MarqueeColumn({
	items,
	className,
}: {
	items: SponsorTestimonialItem[];
	className?: string;
}) {
	return (
		<div
			className={cn(
				"flex flex-col gap-5 animate-vertical-scroll hover:[animation-play-state:paused]",
				className,
			)}
		>
			{items.map((item, index) => (
				<HeroTestimonialCard key={`${item.company}-${index}`} item={item} />
			))}
			{/* Duplicate set for a seamless infinite loop */}
			{items.map((item, index) => (
				<HeroTestimonialCard key={`${item.company}-dup-${index}`} item={item} />
			))}
		</div>
	);
}

const Header = ({ className, ...props }: GeneralComponent) => {
	return (
		<header {...props} className={cn(className, "pb-10 lg:pb-14 pt-20 lg:pt-32")}>
			<NavContainer>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* ── Left column: copy, CTAs, stats ── */}
					<div className="text-center lg:text-left">
						<h1 className="font-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white">
							Hosting the world&apos;s most{" "}
							<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
								engaging
							</span>{" "}
							hackathons
						</h1>

						<p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
							Trusted by enterprises and startups alike to accelerate
							developer GTM and scale tool adoption by thousands.
						</p>

						<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Link
								href="#join"
								className={cn(
									buttonVariants({ variant: "default" }),
									"px-7 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg",
								)}
							>
								Join our community
							</Link>
							<Link
								href="#hackathons"
								className={cn(
									buttonVariants({ variant: "outline" }),
									"px-7 py-4 transition-all hover:-translate-y-0.5 hover:border-foreground",
								)}
							>
								Events
							</Link>
						</div>

						<dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 max-w-lg mx-auto lg:mx-0">
							{stats.map(({ value, suffix, label, icon: Icon }) => (
								<div
									key={label}
									className="flex flex-col items-center lg:items-start"
								>
									<span className="mb-2.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
										<Icon size={18} strokeWidth={2} />
									</span>
									<dt className="sr-only">{label}</dt>
									<dd className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
										<CountUp
											end={value}
											suffix={suffix}
											duration={2.5}
											enableScrollSpy
											scrollSpyOnce
										/>
									</dd>
									<p className="mt-1.5 text-xs tracking-wider text-slate-500 uppercase font-medium">
										{label}
									</p>
								</div>
							))}
						</dl>
					</div>

					{/* ── Right column: dual vertical testimonial marquee ── */}
					<div className="relative h-[560px] lg:h-[760px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
							<MarqueeColumn items={columnA} />
							<MarqueeColumn
								items={columnB}
								className="hidden sm:flex [animation-duration:52s]"
							/>
						</div>
					</div>
				</div>
			</NavContainer>
		</header>
	);
};

export default Header;
