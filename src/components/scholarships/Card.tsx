"use client";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import type { IconType } from "@icons-pack/react-simple-icons";

export type ScholarshipCardType = {
	name: string;
	icon: IconType;
	color: string;
	description: string;
};

export type ScholarshipCardProps = GeneralComponent & ScholarshipCardType;

const ScholarshipCard = ({
	name,
	icon: Icon,
	color,
	className,
	description,
	...props
}: ScholarshipCardProps) => {
	return (
		<div
			className={cn(
				"group p-6 rounded-[10px] bg-white shadow-xl relative overflow-hidden flex flex-col gap-4 justify-between border-accent-4 border-2",
				className,
			)}
			{...props}
		>
			<Icon
				className="absolute -bottom-4 -right-10 opacity-40 size-40 -rotate-12 text-accent-4 group-hover:rotate-0 transition-transform"
				strokeWidth={1.5}
			/>
			<h3 className="text-lg md:text-2xl font-semibold leading-snug">
				{name}
			</h3>
			<p className="leading-snug text-black/80 font-medium text-lg">
				{description}
			</p>
		</div>
	);
};

export default ScholarshipCard;
