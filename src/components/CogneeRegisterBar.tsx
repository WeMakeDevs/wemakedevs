"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const COGNEE_REGISTER_URL = "https://forms.gle/aGefvBfYfAMux5sL9";

const CogneeRegisterBar = () => {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) {
		return null;
	}

	return (
		<div
			className={cn(
				"fixed bottom-3 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100vw-1.5rem)] max-w-4xl",
				"rounded-xl bg-gradient-to-r from-[#c33124] via-[#e0762a] to-[#e7a92b] border-2 border-[#f6c453]",
				"shadow-[0_8px_30px_rgba(195,49,36,0.35)]",
				"px-4 py-3 md:px-6 md:py-3.5",
				"flex items-center gap-3 md:gap-5",
			)}
		>
			{/* Dot indicator */}
			<span className="relative flex h-2.5 w-2.5 shrink-0">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
				<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
			</span>

			{/* Text */}
			<p className="flex-1 text-sm md:text-base text-white font-semibold font-title truncate">
				<span className="hidden sm:inline">
					🎰 The Hangover Part AI hackathon is open! Build AI that
					doesn&apos;t forget. $10,000 in prizes.
				</span>
				<span className="sm:hidden">
					🎰 The Hangover Part AI hackathon is open!
				</span>
			</p>

			{/* CTA */}
			<Link
				href={COGNEE_REGISTER_URL}
				target="_blank"
				rel="noopener noreferrer"
				className="shrink-0 px-4 py-1.5 md:px-5 md:py-2 rounded-lg bg-white text-[#c33124] text-sm font-bold hover:bg-[#fff1d6] transition-colors"
			>
				Register Now
			</Link>

			{/* Close */}
			<button
				type="button"
				onClick={() => setIsVisible(false)}
				className="shrink-0 text-white/70 hover:text-white transition-colors"
				aria-label="Dismiss banner"
			>
				<X size={18} />
			</button>
		</div>
	);
};

export default CogneeRegisterBar;
