"use client";

import { useState } from "react";
import { faqs } from "../data";
import Reveal from "./Reveal";

export default function Faq() {
	const [open, setOpen] = useState<number | null>(null);

	return (
		<section id="faqs" className="relative py-20 sm:py-28">
			<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
				<Reveal className="text-center">
					<p className="font-mono text-xs uppercase tracking-[0.3em] text-orange">
						Got Questions?
					</p>
					<h2 className="mt-3 font-heading font-extrabold text-heading text-3xl sm:text-4xl tracking-tight">
						Frequently Asked
					</h2>
				</Reveal>

				<div className="mt-12 space-y-4">
					{faqs.map((faq, i) => {
						const isOpen = open === i;
						return (
							<Reveal key={faq.q}>
								<div
									className={`glass rounded-xl overflow-hidden transition-colors ${isOpen ? "border-orange/50" : ""}`}
								>
									<button
										type="button"
										onClick={() => setOpen(isOpen ? null : i)}
										className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
									>
										<span className="font-heading font-semibold text-heading">
											{faq.q}
										</span>
										<svg
											className={`h-5 w-5 shrink-0 text-orange transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											viewBox="0 0 24 24"
										>
											<path strokeLinecap="round" d="M12 5v14M5 12h14" />
										</svg>
									</button>
									<div
										className="overflow-hidden transition-all duration-300"
										style={{ maxHeight: isOpen ? 240 : 0 }}
									>
										<p className="px-6 pb-5 text-sm text-body leading-relaxed">
											{faq.a}
										</p>
									</div>
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
