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

				<Reveal className="mt-8 flex justify-center">
					<a
						href="/aws/rules"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-lg border border-orange/40 bg-orange/10 px-5 py-2.5 text-sm font-semibold text-orange transition-all duration-200 hover:bg-orange hover:text-ink hover:scale-[1.03] active:scale-[0.98]"
					>
						Read the full Rules &amp; Terms
						<svg
							className="h-4 w-4"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M7 17 17 7M9 7h8v8"
							/>
						</svg>
					</a>
				</Reveal>

				<div className="mt-8 space-y-4">
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
