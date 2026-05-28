"use client";
import type { NumbersShowcaseType } from "@/types";
import { cn } from "@/lib/utils";
import CountUp from "react-countup";
import { Code, Globe, Trophy, Users } from "lucide-react";

const numbers: NumbersShowcaseType[] = [
	{
		name: "Prizes worth",
		number: 6000,
		icon: Trophy,
		color: "accent-1",
		prefix: "$",
		suffix: "+",
	},
	{
		name: "Participants",
		number: 7000,
		icon: Users,
		color: "accent-2",
		suffix: "+",
	},
	{
		name: "Project submissions",
		number: 400,
		icon: Code,
		color: "accent-3",
		suffix: "+",
	},
	{
		name: "Countries",
		number: 20,
		icon: Globe,
		color: "accent-4",
		suffix: "+",
	},
];

const TamboStats = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-6 mb-12">
			{numbers.map((item, index) => {
				const Icon = item.icon;
				return (
					<div
						key={item.name}
						className={cn(
							"group bg-slate-900/80 backdrop-blur-sm shadow-[0_15px_35px_rgba(0,0,0,0.45)] border border-amber-500/20 rounded-xl p-5 pb-4 relative overflow-clip hover:border-amber-400/40 transition-colors",
						)}
					>
						<div
							className={cn(
								"duration-300 z-0 absolute bottom-0 left-0 w-full h-full transition-transform origin-top group-hover:origin-bottom scale-y-0 group-hover:scale-y-100",
								index % 4 === 0 && "bg-accent-1",
								index % 4 === 1 && "bg-accent-2",
								index % 4 === 2 && "bg-accent-3",
								index % 4 === 3 && "bg-accent-4",
							)}
						/>
						<Icon className="opacity-80 z-10 text-amber-400" size={28} />
						<div className="mt-6 md:mt-12 group-hover:-translate-y-4 transition-transform">
							<h3 className="font-medium relative z-10 text-slate-200">
								{item.name}
							</h3>
							<p className="relative text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-title font-medium mt-3 z-10 break-words overflow-wrap-anywhere text-slate-100">
								{item.prefix && <span>{item.prefix}</span>}
								<CountUp
									end={item.number}
									start={0}
									suffix={item.suffix || "+"}
									enableScrollSpy
								>
									{({ countUpRef }) => <span ref={countUpRef} />}
								</CountUp>
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TamboStats;
