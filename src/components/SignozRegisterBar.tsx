"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SIGNOZ_REGISTER_URL = "https://forms.gle/uxaLXAXmtKwz8uYh9";

const SignozRegisterBar = () => {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) {
		return null;
	}

	return (
		<div
			className={cn(
				"fixed bottom-3 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100vw-1.5rem)] max-w-4xl",
				"rounded-xl bg-gradient-to-r from-[#16181d] via-[#1c1f26] to-[#0e0f13] border border-[#5fe9ff]/40",
				"shadow-[0_8px_30px_rgba(0,0,0,0.5)]",
				"px-4 py-3 md:px-6 md:py-3.5",
				"flex items-center gap-3 md:gap-5",
			)}
		>
			{/* Dot indicator */}
			<span className="relative flex h-2.5 w-2.5 shrink-0">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5fe9ff] opacity-75" />
				<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#5fe9ff]" />
			</span>

			{/* Text */}
			<p className="flex-1 text-sm md:text-base text-[#f5f7fa] font-semibold font-title truncate">
				<span className="hidden sm:inline">
					🕶️ Agents of SigNoz hackathon is open! See inside everything
					you ship. $10,000 in prizes.
				</span>
				<span className="sm:hidden">
					🕶️ Agents of SigNoz hackathon is open!
				</span>
			</p>

			{/* CTA */}
			<Link
				href={SIGNOZ_REGISTER_URL}
				target="_blank"
				rel="noopener noreferrer"
				className="shrink-0 px-4 py-1.5 md:px-5 md:py-2 rounded-lg bg-[#e5502a] text-white text-sm font-bold hover:bg-[#c4421f] transition-colors border border-[#ffcd56]/50"
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

export default SignozRegisterBar;
