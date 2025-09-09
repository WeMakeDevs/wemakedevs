import {
	ScholarshipCard,
	ScholarshipCardDescription,
	ScholarshipCardImage,
	ScholarshipCardTitle,
} from "@/components/ScholarshipCard";
import { scholarships } from "@/constants/scholarships";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import { ViewContainer } from "./ui/view-container";

const Scholarships = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			className={cn(className, "mt-24 mb-16 scroll-m-[100px]")}
			id="scholarships"
			{...props}
		>
			<ViewContainer className="">
				<div className="flex justify-between flex-col items-center">
					<h2 className="text-4xl md:text-5xl">Scholarships</h2>
					<p className="max-w-2xl font-medium leading-snug mt-2 md:mt-3 text-center text-base md:text-lg">
						Supporting students in their educational journey with
						financial aid and opportunities to pursue their dreams
						in technology and innovation.
					</p>
				</div>
				<div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 auto-rows-fr">
					{scholarships.map(scholarship => (
						<ScholarshipCard
							key={scholarship.title}
							href={scholarship.url}
						>
							<ScholarshipCardImage
								src={scholarship.image}
								alt={scholarship.title}
							/>
							<ScholarshipCardTitle>
								{scholarship.title}
							</ScholarshipCardTitle>
							<ScholarshipCardDescription>
								{scholarship.description}
							</ScholarshipCardDescription>
						</ScholarshipCard>
					))}
				</div>
			</ViewContainer>
		</section>
	);
};

export default Scholarships;
