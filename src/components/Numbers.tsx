"use client";
import { cn } from "@/lib/utils";
import type { GeneralComponent, numbersType } from "@/types";
import { CircleDollarSign, Globe, Handshake, Users } from "lucide-react";
import NumberCard from "./NumberCard";
import { ViewContainer } from "./ui/view-container";

const Numbers = ({ className, ...props }: GeneralComponent) => {
	const numbers: numbersType = [
		{
			name: "Community of",
			number: 200000,
			icon: Users,
			color: "accent-1",
		},
		{
			name: "Prizes",
			number: 300,
			icon: CircleDollarSign,
			color: "accent-2",
			prefix: "$",
			suffix: "k+",
		},
		{
			name: "Partners",
			number: 100,
			icon: Handshake,
			color: "accent-3",
		},
		{
			name: "Countries",
			number: 30,
			icon: Globe,
			color: "accent-4",
		},
	];

	return (
		<section
			className={cn(className, "mt-8 mb-16 scroll-m-[100px]")}
			{...props}
			id="numbers"
		>
		<ViewContainer className="relative">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
					{numbers.map(item => (
						<NumberCard key={item.name} {...item} />
					))}
				</div>
			</ViewContainer>
		</section>
	);
};

export default Numbers;
