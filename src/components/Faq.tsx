import { cn } from "@/lib/utils";
import type { FaqType } from "@/types";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";
import { ViewContainer } from "./ui/view-container";

const Faq = ({ FAQS, className }: { FAQS: FaqType[]; className?: string }) => {
	const halfLength = Math.ceil(FAQS.length / 2);
	return (
		<section
			id="faq"
			className={cn(
				"my-14 md:my-24 scroll-m-[100px] realtive",
				className,
			)}
		>
			<ViewContainer>
				<div className="flex justify-between flex-col items-center">
					<h2 className="text-4xl md:text-5xl">
						Frequently Asked Questions
					</h2>
				</div>
				<Accordion
					type="single"
					collapsible
					className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 mt-14"
				>
					<div className="space-y-6">
						{FAQS.slice(0, halfLength).map(
							({ question, answer }, index) => (
								<AccordionItem
									key={question}
									value={`item-${index + 1}`}
									className="shadow-lg"
								>
									<AccordionTrigger>
										{question}
									</AccordionTrigger>
									<AccordionContent>
										{answer}
									</AccordionContent>
								</AccordionItem>
							),
						)}
					</div>
					<div className="space-y-6">
						{FAQS.slice(halfLength).map(
							({ question, answer }, index) => (
								<AccordionItem
									key={question}
									className="shadow-lg"
									value={`item-${halfLength + index + 1}`}
								>
									<AccordionTrigger>
										{question}
									</AccordionTrigger>
									<AccordionContent>
										{answer}
									</AccordionContent>
								</AccordionItem>
							),
						)}
					</div>
				</Accordion>
			</ViewContainer>
		</section>
	);
};

export default Faq;
