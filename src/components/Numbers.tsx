"use client";
import { cn } from "@/lib/utils";
import type { GeneralComponent, numbersType } from "@/types";
import { CircleDollarSign, Globe, Handshake, Users } from "lucide-react";
import CountUp from "react-countup";
import { ViewContainer } from "./ui/view-container";

const Numbers = ({ className, ...props }: GeneralComponent) => {
	const numbers: numbersType = [
		{
			name: "Community of",
			number: 150000,
			icon: Users,
			color: "accent-1",
		},
		{
			name: "Prices in $ worth",
			number: 40000,
			icon: CircleDollarSign,
			color: "accent-2",
		},
		{
			name: "Partners",
			number: 100,
			icon: Handshake,
			color: "accent-3",
		},
		{
			name: "Countries",
			number: 14,
			icon: Globe,
			color: "accent-4",
		},
	];

	return (
		<section
			className={cn(className, "my-16 scroll-m-[100px]")}
			{...props}
			id="numbers"
		>
			<ViewContainer className="relative">
				<h2 className="text-center text-4xl md:text-5xl mx-auto">
					Numbers Say It All
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-12">
					{numbers.map((item, index) => (
						<div
							className="group bg-white shadow-lg hover:shadow-xl transition-shadow border border-foreground/10 rounded-xl p-5 pb-4 relative group overflow-clip"
							key={index}
						>
							<div
								className={`duration-300 z-0 absolute bottom-0 left-0 w-full h-full transition-transform origin-top group-hover:origin-bottom scale-y-0 group-hover:scale-y-100 bg-${item.color}`}
							/>
							<item.icon className="opacity-80 z-10" size={28} />
							<div className="mt-6 md:mt-12 group-hover:-translate-y-4 transition-transform">
								<h3 className="font-body font-medium relative z-10">
									{item.name}
								</h3>
								<p className="relative text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-title font-medium mt-3 z-10">
									<CountUp
										end={item.number}
										start={0}
										suffix="+"
										enableScrollSpy
									>
										{({ countUpRef }) => (
											<span ref={countUpRef} />
										)}
									</CountUp>
								</p>
							</div>
						</div>
					))}
				</div>
			</ViewContainer>
		</section>
	);
};

export default Numbers;
