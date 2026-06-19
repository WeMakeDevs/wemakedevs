"use client";
import { cn } from "@/lib/utils";
import type { NumbersShowcaseType } from "@/types";
import { Code, Globe, Trophy, Users } from "lucide-react";
import CountUp from "react-countup";

const numbers: NumbersShowcaseType[] = [
	{
		name: "Participants",
		number: 5000,
		icon: Users,
		color: "accent-1",
		suffix: "+",
	},
	{
		name: "Prizes worth",
		number: 10000,
		icon: Trophy,
		color: "accent-2",
		prefix: "$",
	},
	{
		name: "Days to build",
		number: 7,
		icon: Code,
		color: "accent-3",
	},
	{
		name: "Countries",
		number: 20,
		icon: Globe,
		color: "accent-4",
		suffix: "+",
	},
];

const CogneeStats = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-6 mb-12">
			{numbers.map((item, index) => {
				const Icon = item.icon;
				return (
					<div
						key={item.name}
						className={cn(
							"group bg-[#160a26]/80 backdrop-blur-sm shadow-[0_15px_35px_rgba(0,0,0,0.45)] border border-[#ffb800]/20 rounded-xl p-5 pb-4 relative overflow-clip hover:border-[#ff2d7e]/45 transition-colors",
						)}
					>
						<div
							className={cn(
								"duration-300 z-0 absolute bottom-0 left-0 w-full h-full transition-transform origin-top group-hover:origin-bottom scale-y-0 group-hover:scale-y-100",
								index % 4 === 0 && "bg-[#ffb800]",
								index % 4 === 1 && "bg-[#ff2d7e]",
								index % 4 === 2 && "bg-[#00e0d5]",
								index % 4 === 3 && "bg-[#9d4edd]",
							)}
						/>
						<Icon
							className="opacity-80 z-10 text-[#ffd24a]"
							size={28}
						/>
						<div className="mt-6 md:mt-12 group-hover:-translate-y-4 transition-transform">
							<h3 className="font-mono font-medium relative z-10 text-slate-200 group-hover:text-[#160a26]">
								{item.name}
							</h3>
							<p className="relative text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-title font-medium mt-3 z-10 break-words text-slate-100 group-hover:text-[#160a26]">
								{item.prefix && <span>{item.prefix}</span>}
								<CountUp
									end={item.number}
									start={0}
									suffix={item.suffix || ""}
									enableScrollSpy
								>
									{({ countUpRef }) => (
										<span ref={countUpRef} />
									)}
								</CountUp>
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CogneeStats;
