"use client";
import { cn } from "@/lib/utils";
import type { NumbersShowcaseCardType } from "@/types";
import CountUp from "react-countup";

const NumberCard = ({
	name,
	number,
	icon: Icon,
	color,
	prefix,
	suffix,
	className,
	...props
}: NumbersShowcaseCardType) => {
	return (
		<div
			className={cn(
				"group bg-white shadow-lg hover:shadow-xl transition-shadow border border-foreground/10 rounded-xl p-5 pb-4 relative group overflow-clip",
				className,
			)}
			key={name}
			{...props}
		>
			<div
				className={`duration-300 z-0 absolute bottom-0 left-0 w-full h-full transition-transform origin-top group-hover:origin-bottom scale-y-0 group-hover:scale-y-100 bg-${color}`}
			/>
			<Icon className="opacity-80 z-10" size={28} />
			<div className="mt-6 md:mt-12 group-hover:-translate-y-4 transition-transform">
				<h3 className="font-body font-medium relative z-10">{name}</h3>
				<p className="relative text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-title font-medium mt-3 z-10 break-words overflow-wrap-anywhere">
					{prefix && <span>{prefix}</span>}
					<CountUp end={number} start={0} suffix={suffix || "+"} enableScrollSpy>
						{({ countUpRef }) => <span ref={countUpRef} />}
					</CountUp>
				</p>
			</div>
		</div>
	);
};

export default NumberCard;
