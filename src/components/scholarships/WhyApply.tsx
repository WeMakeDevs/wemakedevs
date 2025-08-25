"use client";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import {
	Car,
	DollarSign,
	Hotel,
	Plane,
	SquareAsterisk,
	Ticket,
} from "lucide-react";
import { ViewContainer } from "../ui/view-container";
import ScholarshipCard, { type ScholarshipCardType } from "./Card";

const WhyApply = ({ className, ...props }: GeneralComponent) => {
	const whyApplyItems: ScholarshipCardType[] = [
		{
			name: "Flight to Amsterdam",
			icon: Plane,
			color: "accent-1",
			description:
				"Your round-trip flight to Amsterdam is fully covered. Just focus on the experience while we handle the journey there and back.",
		},
		{
			name: "Hotel Accommodation",
			icon: Hotel,
			color: "accent-2",
			description:
				"A comfy hotel stay is included for the entire event. Relax after each day of learning and networking.",
		},
		{
			name: "KubeCon + CloudNativeCon Europe Ticket",
			icon: Ticket,
			color: "accent-3",
			description:
				"Full access to KubeCon + CloudNativeCon Europe, including talks, workshops, and everything in between.",
		},
		{
			name: "Local Transportation",
			icon: Car,
			color: "accent-4",
			description:
				"Airport pickups, hotel transfers, and event rides are all taken care of. Your local travel in Amsterdam is covered.",
		},
		{
			name: "Visa Application Assistance",
			icon: SquareAsterisk,
			color: "accent-1",
			description:
				"Get support with your visa process, from guidance to documents, to help make approval smoother.",
		},
		{
			name: "Reimbursement of up to $2000",
			icon: DollarSign,
			color: "accent-2",
			description:
				"Claim up to $2000 back for meals, incidentals, and other trip costs. Focus on learning and networking, not expenses.",
		},
	];

	return (
		<section
			className={cn(className, "py-16 scroll-m-[100px] bg-white")}
			{...props}
			id="numbers"
		>
			<ViewContainer className="relative">
				<h2 className="text-center text-4xl md:text-5xl mx-auto">
					Why Apply?
				</h2>
				<p className="text-center text-lg text-black/80 font-medium max-w-2xl mx-auto mt-4 leading-snug">
					Aside from meeting some of the industry experts in DevOps,
					CNCF and Open Source, here are some of the benefits you get:
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 mt-12">
					{whyApplyItems.map(item => (
						<ScholarshipCard key={item.name} {...item} />
					))}
				</div>
			</ViewContainer>
		</section>
	);
};

export default WhyApply;
