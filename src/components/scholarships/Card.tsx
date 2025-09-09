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
				"group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden",
				className,
			)}
			{...props}
		>
			{/* Background icon with subtle styling */}
			<div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
				<Icon className="size-24 text-primary" strokeWidth={1} />
			</div>

			{/* Content */}
			<div className="relative z-10 space-y-4">
				{/* Icon header */}
				<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
					<Icon className="size-6 text-primary" strokeWidth={2} />
				</div>

				{/* Title */}
				<h3 className="text-xl font-bold text-gray-900 leading-tight">
					{name}
				</h3>

				{/* Description */}
				<p className="text-gray-600 leading-relaxed">{description}</p>
			</div>
		</div>
	);
};

export default ScholarshipCard;
