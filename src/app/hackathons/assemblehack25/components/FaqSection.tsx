"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ViewContainer } from "@/components/ui/view-container";
import type { FaqType } from "@/types";

const FaqSection = ({ FAQS }: { FAQS: FaqType[] }) => {
	const halfLength = Math.ceil(FAQS.length / 2);

	const renderColumn = (items: FaqType[], offset: number) =>
		items.map(({ question, answer }, index) => (
			<AccordionItem
				key={question}
				value={`item-${offset + index + 1}`}
				className="border border-blue-200 bg-white px-6 py-4 md:px-8 md:py-5 rounded-2xl text-gray-900 shadow-none"
			>
				<AccordionTrigger className="text-gray-900 font-semibold font-mono">
					{question}
				</AccordionTrigger>
				<AccordionContent className="text-gray-600 leading-relaxed font-mono">
					<div
						// biome-ignore lint/security/noDangerouslySetInnerHtml: Hackathon FAQ content is curated
						dangerouslySetInnerHTML={{
							__html: answer,
						}}
					/>
				</AccordionContent>
			</AccordionItem>
		));

	return (
		<section className="bg-gradient-to-b from-white via-blue-50 to-white py-20 text-gray-900 border-t border-blue-200">
			<ViewContainer>
				<div className="text-center max-w-3xl mx-auto">
					<p className="font-mono text-sm uppercase tracking-[0.3em] text-blue-600">
						Need Answers?
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 font-mono">
						Frequently Asked Questions
					</h2>
					<p className="text-base md:text-lg text-gray-600 mt-4 font-mono">
						Quick responses for the most common questions about AI
						Agents Assemble.
					</p>
				</div>
				<Accordion
					type="single"
					collapsible
					className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-14"
				>
					<div className="space-y-6">
						{renderColumn(FAQS.slice(0, halfLength), 0)}
					</div>
					<div className="space-y-6">
						{renderColumn(FAQS.slice(halfLength), halfLength)}
					</div>
				</Accordion>
			</ViewContainer>
		</section>
	);
};

export default FaqSection;
