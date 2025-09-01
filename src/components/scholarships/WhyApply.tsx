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
			className={cn(className, "py-20 scroll-m-[100px] bg-white")}
			{...props}
			id="whats-covered"
		>
			<ViewContainer className="relative">
				<div className="text-center space-y-6 mb-16">
					<h2 className="text-4xl md:text-5xl font-bold font-title">
						What it covers
					</h2>
					<p className="text-lg text-black/70 font-medium max-w-3xl mx-auto leading-relaxed">
						From connecting with leaders in DevOps, CNCF, and open
						source, to gaining hands-on insights that can shape your
						career, here's what you'll get:
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{whyApplyItems.map(item => (
						<ScholarshipCard key={item.name} {...item} />
					))}
				</div>
			</ViewContainer>
		</section>
	);
};

export default WhyApply;
