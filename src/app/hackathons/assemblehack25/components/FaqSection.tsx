"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ViewContainer } from "@/components/ui/view-container";
import type { FaqType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { images } from "../images";

const FaqSection = ({ FAQS }: { FAQS: FaqType[] }) => {
	const halfLength = Math.ceil(FAQS.length / 2);

	const renderColumn = (items: FaqType[], offset: number) =>
		items.map(({ question, answer }, index) => (
			<AccordionItem
				key={question}
				value={`item-${offset + index + 1}`}
				className="border-2 border-indigo-100 bg-white px-6 py-4 md:px-8 md:py-5 rounded-2xl text-gray-900 shadow-md hover:shadow-lg transition-all"
			>
				<AccordionTrigger className="text-gray-900 font-bold">
					{question}
				</AccordionTrigger>
				<AccordionContent className="text-gray-600 leading-relaxed">
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
		<section className="relative bg-gradient-to-b from-white via-indigo-50/30 to-white py-20 text-gray-900 border-t border-gray-200 overflow-hidden">
			{/* Single floating Iron Man Mask on right */}
			<div className="hidden lg:block absolute right-0 top-1/3 translate-x-1/4 opacity-15 hover:opacity-30 transition-opacity duration-500">
				<Image
					src={images.ironmanMask}
					alt="Iron Man Mask"
					className="w-64 h-auto drop-shadow-2xl"
				/>
			</div>

			<ViewContainer className="relative z-10">
				<div className="text-center max-w-3xl mx-auto">
					<p className="text-sm uppercase tracking-[0.3em] text-indigo-600 font-bold">
						Need Answers?
					</p>
					<h2 className="text-4xl md:text-5xl font-black mt-4 text-gray-900 uppercase tracking-tight">
						Frequently Asked Questions
					</h2>
					<p className="text-base md:text-lg text-gray-600 mt-4">
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

				{/* Discord call-to-action */}
				<div className="mt-12 text-center">
					<div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 border-2 border-indigo-200 shadow-lg">
						<span className="text-2xl">🦸</span>
						<p className="text-gray-700 font-medium">
							Still have questions?{" "}
							<Link
								href="https://discord.gg/wemakedevs"
								target="_blank"
								rel="noopener noreferrer"
								className="font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
							>
								Join our Discord
							</Link>{" "}
							and ask the community!
						</p>
						<span className="text-2xl">🦸‍♀️</span>
					</div>
				</div>
			</ViewContainer>
		</section>
	);
};

export default FaqSection;
