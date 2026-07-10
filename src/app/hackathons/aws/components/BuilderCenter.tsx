"use client";

import { useEffect, useRef, useState } from "react";
import { builderSteps } from "../data";
import Reveal from "./Reveal";

const topics = [
	{ label: "Generative AI", d: "M5 3v4M3 5h4M13 3l2.5 6.5L22 12l-6.5 2.5L13 21l-2.5-6.5L4 12l6.5-2.5L13 3z" },
	{ label: "Serverless", d: "M13 2 4.5 12.5H11l-1 7.5L18.5 9.5H12l1-7.5z" },
	{ label: "Security", d: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" },
	{ label: "Machine Learning", d: "M12 3v3M12 18v3M3 12h3M18 12h3" },
];

const stepIcons: Record<string, React.ReactNode> = {
	LEARN: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5C10.5 5 8 4.5 4 5v13c4-.5 6.5 0 8 1.5 1.5-1.5 4-2 8-1.5V5c-4-.5-6.5 0-8 1.5z" />,
	BUILD: <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.6 2.6-2.4-2.4 2.6-2.6z" />,
	SHARE: (
		<>
			<circle cx="18" cy="5" r="3" />
			<circle cx="6" cy="12" r="3" />
			<circle cx="18" cy="19" r="3" />
			<path strokeLinecap="round" d="M8.6 10.6l6.8-4M8.6 13.4l6.8 4" />
		</>
	),
	GROW: <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M21 7h-5M21 7v5" />,
};

export default function BuilderCenter() {
	const [voted, setVoted] = useState(false);
	const [votes, setVotes] = useState(342);
	const [step, setStep] = useState(1);
	const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

	const upvote = () => {
		setVoted((v) => {
			setVotes((n) => n + (v ? -1 : 1));
			return !v;
		});
	};

	useEffect(() => {
		if (typeof IntersectionObserver === "undefined") return;
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						const n = Number((e.target as HTMLElement).dataset.step);
						if (n) setStep(n);
					}
				});
			},
			{ rootMargin: "-45% 0px -45% 0px", threshold: 0 },
		);
		stepRefs.current.forEach((el) => el && io.observe(el));
		return () => io.disconnect();
	}, []);

	return (
		<section id="builder" className="relative py-20 sm:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal className="max-w-3xl">
					<p className="font-mono text-xs uppercase tracking-[0.3em] text-orange">
						Beyond the Hackathon
					</p>
					<h2 className="mt-3 font-heading font-extrabold text-heading text-3xl sm:text-4xl tracking-tight leading-tight">
						Elevate Your Cloud Journey: The AWS Builder Center
					</h2>
					<p className="mt-4 text-lg text-body">
						Don&apos;t just write code. Join a global developer movement, build
						your permanent cloud portfolio, learn from industry experts, and
						direct-line your feedback to AWS product teams.
					</p>
				</Reveal>

				<div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Verified Cloud Portfolio */}
					<Reveal className="glass rounded-2xl p-6 transition-all duration-300 hover:border-orange/50 hover:shadow-[0_0_30px_-8px_rgba(255,153,0,0.35)]">
						<div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
							<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
								<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20a7.5 7.5 0 0115 0" />
							</svg>
						</div>
						<h3 className="mt-5 font-heading text-xl font-bold text-heading tracking-tight">
							Verified Cloud Portfolio
						</h3>
						<p className="mt-3 text-sm text-body leading-relaxed">
							Claim a free, lifetime AWS Builder ID and a custom profile alias (
							<span className="font-mono text-orange break-all">@youralias</span>
							). Your shareable dashboard auto-tracks projects, tutorials, and
							proof-of-work.
						</p>
						<div className="mt-5 rounded-xl border border-hair/10 bg-panel p-4">
							<div className="flex items-center gap-4">
								<div className="relative shrink-0">
									<div className="h-14 w-14 rounded-full bg-gradient-to-br from-orange to-rust flex items-center justify-center font-heading font-black text-ink text-lg">
										AB
									</div>
									<span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-orange border-2 border-panel" />
								</div>
								<div className="min-w-0">
									<p className="font-heading font-bold text-heading text-sm truncate">Alex Builder</p>
									<p className="font-mono text-[11px] text-orange truncate">@alexbuilds</p>
									<p className="font-mono text-[10px] text-ash mt-0.5">AWS Builder ID · Verified</p>
								</div>
								<div className="ml-auto shrink-0 rounded-md bg-white p-1.5">
									<svg viewBox="0 0 40 40" className="h-12 w-12" shapeRendering="crispEdges" fill="#0B0C0E">
										<path d="M0 0h12v12H0zM4 4v4h4V4z" fillRule="evenodd" />
										<path d="M28 0h12v12H28zM32 4v4h4V4z" fillRule="evenodd" />
										<path d="M0 28h12v12H0zM4 32v4h4v-4z" fillRule="evenodd" />
										<rect x="16" y="0" width="4" height="4" />
										<rect x="20" y="4" width="4" height="4" />
										<rect x="16" y="8" width="4" height="4" />
										<rect x="24" y="16" width="4" height="4" />
										<rect x="16" y="16" width="4" height="4" />
										<rect x="20" y="20" width="4" height="4" />
										<rect x="0" y="16" width="4" height="4" />
										<rect x="8" y="20" width="4" height="4" />
										<rect x="28" y="20" width="4" height="4" />
										<rect x="36" y="16" width="4" height="4" />
										<rect x="16" y="28" width="4" height="4" />
										<rect x="24" y="28" width="4" height="4" />
										<rect x="20" y="32" width="4" height="4" />
										<rect x="28" y="32" width="4" height="4" />
										<rect x="36" y="28" width="4" height="4" />
										<rect x="32" y="24" width="4" height="4" />
									</svg>
								</div>
							</div>
							<div className="mt-3 flex items-center justify-between border-t border-hair/10 pt-3">
								<span className="font-mono text-[10px] text-ash">CERTS · 12</span>
								<span className="font-mono text-[10px] text-ash">ARTICLES · 8</span>
								<span className="font-mono text-[10px] text-ash">RANK · GOLD</span>
							</div>
						</div>
					</Reveal>

					{/* No-Cost Learning */}
					<Reveal className="glass rounded-2xl p-6 transition-all duration-300 hover:border-orange/50 hover:shadow-[0_0_30px_-8px_rgba(255,153,0,0.35)]">
						<div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
							<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.42A12 12 0 0112 21a12 12 0 01-6.16-10.42L12 14z" />
							</svg>
						</div>
						<h3 className="mt-5 font-heading text-xl font-bold text-heading tracking-tight">
							No-Cost Hands-On Learning
						</h3>
						<p className="mt-3 text-sm text-body leading-relaxed">
							Unrestricted access to 600+ interactive courses, workshops, and
							cloud games like Cloud Quest. Deploy real serverless, ML, and
							security architectures with no credit card required.
						</p>
						<div className="mt-5 flex flex-wrap gap-2">
							{topics.map((t) => (
								<span key={t.label} className="inline-flex items-center gap-1.5 rounded-lg border border-hair/10 bg-panel px-3 py-1.5 text-xs font-mono text-body">
									<svg className="h-3.5 w-3.5 text-orange" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d={t.d} />
									</svg>
									{t.label}
								</span>
							))}
						</div>
						<p className="mt-4 font-mono text-xs text-ash">
							600+ interactive courses · $0 · No credit card
						</p>
					</Reveal>

					{/* Wishlist */}
					<Reveal className="glass rounded-2xl p-6 transition-all duration-300 hover:border-orange/50 hover:shadow-[0_0_30px_-8px_rgba(255,153,0,0.35)]">
						<div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
							<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l3 8 4-16 3 8h4" />
							</svg>
						</div>
						<h3 className="mt-5 font-heading text-xl font-bold text-heading tracking-tight">
							The Wishlist
						</h3>
						<p className="mt-3 text-sm text-body leading-relaxed">
							A direct portal to submit ideas, upvote community concepts, and
							influence AWS product roadmaps. Your hands-on feedback reaches real
							engineering teams.
						</p>
						<div className="mt-5 rounded-xl border border-hair/10 bg-panel p-4">
							<div className="flex items-center justify-between">
								<span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-orange">
									Feature Request
								</span>
								<span className="font-mono text-[10px] text-ash">#WL-2048</span>
							</div>
							<p className="mt-3 font-heading font-semibold text-heading text-sm leading-snug">
								Add one-click multi-region failover to Lambda
							</p>
							<p className="mt-1 text-xs text-ash">
								Submitted by <span className="font-mono text-body">@cloudnova</span> · Under review
							</p>
							<div className="mt-4 flex items-center gap-3">
								<button
									type="button"
									onClick={upvote}
									className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 ${voted ? "border-orange bg-orange/15 text-orange" : "border-hair/15 text-body hover:border-orange/60 hover:text-orange"}`}
								>
									<svg className={`h-4 w-4 transition-transform ${voted ? "-translate-y-0.5" : ""}`} fill={voted ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
									</svg>
									{voted ? "Upvoted" : "Upvote"}
								</button>
								<span className="font-mono text-sm text-heading">
									{votes} <span className="text-ash">votes</span>
								</span>
							</div>
						</div>
					</Reveal>
				</div>

				{/* Scroll-driven stepper */}
				<Reveal className="mt-24 text-center">
					<h3 className="font-heading font-extrabold text-heading text-2xl sm:text-3xl tracking-tight">
						Learn. Build. Share. Grow.
					</h3>
					<p className="mx-auto mt-3 max-w-2xl text-body">
						Become an AWS community member and sharpen your cloud and AI skills
						with hands on projects.
					</p>
				</Reveal>

				<div className="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
					{/* Sticky vertical rail */}
					<div className="hidden lg:block sticky top-24 self-start">
						<ol className="relative">
							{builderSteps.map((s, idx) => {
								const n = idx + 1;
								const on = step >= n;
								const active = step === n;
								return (
									<li key={s.key} className="relative flex gap-5">
										<div className="flex flex-col items-center">
											<button
												type="button"
												onClick={() =>
													stepRefs.current[idx]?.scrollIntoView({
														behavior: "smooth",
														block: "center",
													})
												}
												className={`relative z-10 shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 bg-panel transition-all duration-300 ${on ? "border-orange text-orange" : "border-line text-ash"} ${active ? "shadow-[0_0_20px_-4px_rgba(255,153,0,0.7)] scale-105" : ""}`}
												aria-label={s.key}
											>
												<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
													{stepIcons[s.key]}
												</svg>
											</button>
											{idx < builderSteps.length - 1 && (
												<span className="relative my-1 w-0.5 flex-1 min-h-[70px] overflow-hidden rounded-full bg-line">
													<span
														className="absolute inset-x-0 top-0 bg-gradient-to-b from-orange to-rust transition-all duration-500"
														style={{ height: step > n ? "100%" : "0%" }}
													/>
												</span>
											)}
										</div>
										<div className="pb-10 pt-3">
											<p className={`font-heading font-bold tracking-wide transition-colors ${active ? "text-orange" : "text-heading"}`}>
												{s.key}
											</p>
										</div>
									</li>
								);
							})}
						</ol>
					</div>

					{/* Scrolling step cards */}
					<div>
						{builderSteps.map((s, idx) => {
							const n = idx + 1;
							const active = step === n;
							return (
								<div
									key={s.key}
									data-step={n}
									ref={(el) => {
										stepRefs.current[idx] = el;
									}}
									className="min-h-[64vh] flex items-center"
								>
									<div
										className={`w-full glass rounded-2xl p-7 sm:p-8 transition-all duration-500 ${active ? "opacity-100 border-orange/40" : "opacity-45"}`}
									>
										<div className="flex items-center gap-4">
											<span
												className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${active ? "bg-orange/15 text-orange" : "bg-panel text-ash"}`}
											>
												<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
													{stepIcons[s.key]}
												</svg>
											</span>
											<div>
												<p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ash">
													Step 0{n}
												</p>
												<p className="font-heading text-2xl font-bold text-heading tracking-tight">
													{s.key}
												</p>
											</div>
										</div>
										<p className="mt-5 text-lg text-body leading-relaxed">{s.desc}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
