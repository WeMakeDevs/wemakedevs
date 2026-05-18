"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SURVEY_URL =
	"https://docs.google.com/forms/d/e/1FAIpQLScdzzDGwhJfolzsCd2rUT6dgIbWdt1vhsOOdg15my1JM-IWsQ/viewform";

const OrchestrationBanner = () => {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) {
		return null;
	}

	return (
		<div
			className={cn(
				"fixed bottom-3 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100vw-1.5rem)] max-w-4xl",
				"rounded-xl bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 border border-emerald-400/30",
				"shadow-[0_0_30px_rgba(52,211,153,0.15)] backdrop-blur-sm",
				"px-4 py-3 md:px-6 md:py-3.5",
				"flex items-center gap-3 md:gap-5",
			)}
		>
			{/* Dot indicator */}
			<span className="relative flex h-2.5 w-2.5 shrink-0">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
				<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
			</span>

			{/* Text */}
			<p className="flex-1 text-sm md:text-base text-slate-200 font-medium font-title truncate">
				<span className="hidden sm:inline">
					🎁 Tell us which AI tools you use, win Air Jordans,
					Keychron Keyboard, or MX Master 3.
				</span>
				<span className="sm:hidden">
					🎁 1-min AI tools survey, win premium gear!
				</span>
			</p>

			{/* CTA */}
			<Link
				href={SURVEY_URL}
				target="_blank"
				rel="noopener noreferrer"
				className="shrink-0 px-4 py-1.5 md:px-5 md:py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-amber-400 text-slate-950 text-sm font-bold hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-shadow"
			>
				Take Survey
			</Link>

			{/* Close */}
			<button
				type="button"
				onClick={() => setIsVisible(false)}
				className="shrink-0 text-slate-500 hover:text-slate-300 transition-colors"
				aria-label="Dismiss banner"
			>
				<X size={18} />
			</button>
		</div>
	);
};

export default OrchestrationBanner;
