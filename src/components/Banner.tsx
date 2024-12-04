"use client";

import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import { X } from "lucide-react";
import { useState } from "react";

const Banner = ({ className, children, ...props }: GeneralComponent) => {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) {
		return null;
	}

	const handleClose = () => {
		setIsVisible(false);
	};

	return (
		<div
			className={cn(
				className,
				"banner-width bottom-2 mb-2 left-1/2 -translate-x-1/2 sticky py-4 z-[1000] text-center font-medium font-title bg-gradient-to-br from-[#3d467e] to-[#1a2047] text-white flex gap-4 px-4 rounded-xl",
			)}
			style={{ position: "fixed" }}
			{...props}
		>
			<div className="grow text-[#dee1ff]">{children}</div>
			<X onClick={handleClose} className="hover:cursor-pointer" />
		</div>
	);
};

export default Banner;
