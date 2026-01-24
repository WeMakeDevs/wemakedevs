"use client";
import NumberCard from "@/components/NumberCard";
import type { NumbersShowcaseType } from "@/types";
import { Code, Globe, Trophy, Users } from "lucide-react";

const numbers: NumbersShowcaseType[] = [
	{
		name: "Prizes in $ worth",
		number: 20000,
		icon: Trophy,
		color: "accent-1",
		prefix: "$",
	},
	{
		name: "Participants",
		number: 6000,
		icon: Users,
		color: "accent-2",
	},
	{
		name: "Project submissions",
		number: 500,
		color: "accent-3",
		icon: Code,
	},
	{
		name: "Countries",
		number: 20,
		icon: Globe,
		color: "accent-4",
	},
];

const AssembleHackStats = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-6 mb-12">
			{numbers.map(item => (
				<NumberCard key={item.name} {...item} />
			))}
		</div>
	);
};

export default AssembleHackStats;
