"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const OrchestrationBanner = () => {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) {
		return null;
	}

	return (
		<div
			className={cn(
				"fixed bottom-3 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100vw-1.5rem)] max-w-4xl",
				"rounded-xl bg-gradient-to-r from-[#002b36] via-[#0a3740] to-[#002b36] border border-[#d4af37]/25",
				"shadow-[0_0_30px_rgba(212,175,55,0.12)] backdrop-blur-sm",
				"px-4 py-3 md:px-6 md:py-3.5",
				"flex items-center gap-3 md:gap-5",
			)}
		>
			{/* Dot indicator */}
			<span className="relative flex h-2.5 w-2.5 shrink-0">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-75" />
				<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#d4af37]" />
			</span>

			{/* Text */}
			<p className="flex-1 text-sm md:text-base text-slate-200 font-medium font-title truncate">
				<span className="hidden sm:inline">
					🏴‍☠️ Pirates of the Coral-bean is live! $10,000+ in
					treasure awaits.
				</span>
				<span className="sm:hidden">
					🏴‍☠️ Coral Hackathon is live!
				</span>
			</p>

			{/* CTA */}
			<Link
				href="/hackathons/coral"
				className="shrink-0 px-4 py-1.5 md:px-5 md:py-2 rounded-lg bg-[#d4af37] text-[#002b36] text-sm font-bold hover:bg-[#e8c35a] transition-colors"
			>
				Set Sail
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
