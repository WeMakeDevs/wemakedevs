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
				className="border border-green-500/15 bg-[#14202a]/80 px-6 py-4 md:px-8 md:py-5 rounded-2xl text-slate-100 shadow-none"
			>
				<AccordionTrigger className="text-slate-100 font-semibold">
					{question}
				</AccordionTrigger>
				<AccordionContent className="text-slate-300 leading-relaxed">
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
		<section className="bg-[#0b1114] py-20 text-slate-100 border-t border-white/5">
			<ViewContainer>
				<div className="text-center max-w-3xl mx-auto">
					<p className="font-mono text-sm uppercase tracking-[0.3em] text-green-400">
						&gt; Need Answers?
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-100">
						Frequently Asked Questions
					</h2>
					<p className="text-base md:text-lg text-slate-300 mt-4">
						Quick responses for the most common questions about
						MotiaHack 25.
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
