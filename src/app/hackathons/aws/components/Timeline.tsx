"use client";

import { useEffect, useRef, useState } from "react";
import { cityCoords, timeline } from "../data";
import Reveal from "./Reveal";

const CITY_IDS = ["delhi", "mumbai", "hyderabad", "bangalore", "chennai"] as const;
const S = 2.6;

const captions: Record<string, string> = {
	all: "All six host cities across India",
	bangalore: "Bangalore, stop 01",
	delhi: "Delhi, stop 02",
	mumbai: "Mumbai, stop 03",
	hyderabad: "Hyderabad, stop 04",
	chennai: "Chennai, stop 05",
	vegas: "Fly out prize, India to Las Vegas",
};

const markerLabels: Record<string, [number, number, string, "start" | "middle" | "end", number, number]> = {
	// cx, cy, label, anchor, lx, ly
	delhi: [188, 150, "DELHI", "middle", 188, 138],
	mumbai: [128, 262, "MUMBAI", "end", 120, 266],
	hyderabad: [182, 288, "HYDERABAD", "start", 192, 285],
	bangalore: [172, 350, "BANGALORE", "end", 164, 365],
	chennai: [205, 342, "CHENNAI", "start", 214, 356],
};

export default function Timeline() {
	const [active, setActive] = useState<string>("all");
	const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

	useEffect(() => {
		if (typeof IntersectionObserver === "undefined") return;
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						const city = (e.target as HTMLElement).dataset.city;
						if (city) setActive(city);
					}
				});
			},
			{ rootMargin: "-45% 0px -45% 0px", threshold: 0 },
		);
		stepRefs.current.forEach((el) => el && io.observe(el));
		return () => io.disconnect();
	}, []);

	const coords = cityCoords[active];
	const zoomTransform = coords
		? `translate(${200 - S * coords[0]}px, ${230 - S * coords[1]}px) scale(${S})`
		: "translate(0px, 0px) scale(1)";
	const allOn = active === "all" || active === "vegas";

	return (
		<section id="hubs" className="relative py-20 sm:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal className="text-center">
					<p className="font-mono text-xs uppercase tracking-[0.3em] text-orange">
						The Circuit
					</p>
					<h2 className="mt-3 font-heading font-extrabold text-heading text-3xl sm:text-4xl tracking-tight">
						Six cities. One cross country journey.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-body">
						Every stop is a hybrid hackathon, so you can build on the ground or
						join fully online. Scroll to follow the route across India.
					</p>
				</Reveal>

				<div className="relative mt-14 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
					{/* Sticky map */}
					<div className="sticky top-16 lg:top-24 z-20 mb-10 lg:mb-0 lg:self-start">
						<div className="relative glass rounded-2xl p-4 sm:p-6 overflow-hidden">
							<div
								className="absolute inset-0 pointer-events-none rounded-2xl blur-[80px]"
								style={{
									background:
										"radial-gradient(circle at 55% 45%, rgba(255,153,0,0.08), transparent 60%)",
								}}
							/>
							<svg
								id="india-map"
								className={`relative z-10 w-full h-auto max-h-[62vh]${active === "vegas" ? " show-vegas" : ""}`}
								viewBox="0 0 400 460"
								role="img"
								aria-label="Map of India highlighting the host cities"
							>
								<defs>
									<filter id="glow-city" x="-40%" y="-40%" width="180%" height="180%">
										<feGaussianBlur stdDeviation="4" result="b" />
										<feComposite in="SourceGraphic" in2="b" operator="over" />
									</filter>
									<linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
										<stop offset="0%" stopColor="#FF9900" />
										<stop offset="100%" stopColor="#B8422E" />
									</linearGradient>
								</defs>

								<g id="india-zoom" style={{ transform: zoomTransform }}>
									<path
										className="india-land"
										d="M175 52 C205 44 232 58 244 86 C258 96 280 92 292 112 C286 140 262 150 262 176 C266 214 258 258 232 306 C216 344 200 384 184 414 C176 428 168 424 162 408 C150 372 140 342 126 302 C112 262 96 232 102 200 C108 168 122 150 122 120 C126 92 150 60 175 52 Z"
									/>
									{CITY_IDS.map((id) => {
										const [cx, cy, label, anchor, lx, ly] = markerLabels[id];
										const on = allOn || active === id;
										const dim = !allOn && active !== id;
										return (
											<g
												key={id}
												className={`cm${on ? " on" : ""}${dim ? " dim" : ""}`}
											>
												<circle className="ring" cx={cx} cy={cy} r={9} />
												<circle className="dot" cx={cx} cy={cy} r={5} />
												<text className="lbl" x={lx} y={ly} textAnchor={anchor}>
													{label}
												</text>
											</g>
										);
									})}
								</g>

								<g className="vegas-layer">
									<path className="vegas-arc" d="M188 150 Q 300 40 360 70" />
									<circle cx={360} cy={70} r={7} fill="#FF9900" filter="url(#glow-city)" />
									<circle cx={360} cy={70} r={2.5} fill="#FFFFFF" />
									<text
										x={360}
										y={52}
										textAnchor="middle"
										fontFamily="'JetBrains Mono', monospace"
										fontSize={9}
										fontWeight={700}
										fill="#FF9900"
									>
										LAS VEGAS
									</text>
								</g>
							</svg>
							<p className="relative z-10 mt-3 text-center text-xs font-mono text-ash">
								{captions[active]}
							</p>
						</div>
					</div>

					{/* Steps */}
					<div>
						{timeline.map((stop, i) => (
							<div
								key={stop.id}
								data-city={stop.id}
								ref={(el) => {
									stepRefs.current[i] = el;
								}}
								className={`tl-step flex items-center ${stop.id === "all" ? "min-h-[62vh]" : "min-h-[70vh]"} ${active === stop.id ? "active" : ""}`}
							>
								{stop.finale ? (
									<div className="tl-card w-full finale-card rounded-2xl bg-gradient-to-br from-[#15171c] to-[#241611] p-6 sm:p-7 shadow-[0_0_20px_rgba(255,153,0,0.15)]">
										<div className="flex items-center justify-between">
											<span className="inline-flex items-center gap-1.5 rounded-full bg-orange px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-ink">
												<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" d="M2 12s5 6 10 6 10 6 10 6M22 2l-9.5 9.5" />
												</svg>
												The final stop, fly out prize
											</span>
											<span className="font-mono text-xs text-orange">{stop.stop}</span>
										</div>
										<h3 className="mt-4 font-heading text-2xl font-black text-white tracking-tight">{stop.city}</h3>
										<p className="mt-1 text-sm text-orange/90">{stop.subtitle}</p>
										<p className="mt-3 font-mono text-sm font-bold text-orange">{stop.date}</p>
										<p className="mt-4 text-sm text-slate-300 leading-relaxed">{stop.blurb}</p>
										<ul className="mt-5 space-y-2 text-sm text-slate-200">
											{stop.tags?.map((t) => (
												<li key={t} className="flex items-center gap-2">
													<svg className="h-4 w-4 text-orange shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" d="M20 6 9 17l-5-5" />
													</svg>
													{t}
												</li>
											))}
										</ul>
									</div>
								) : (
									<div className="tl-card w-full glass rounded-2xl p-6 sm:p-7">
										{stop.id === "all" ? (
											<>
												<span className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-orange">
													{stop.subtitle}
												</span>
												<h3 className="mt-4 font-heading text-2xl font-bold text-heading tracking-tight">{stop.city}</h3>
												<p className="mt-3 text-body leading-relaxed">{stop.blurb}</p>
											</>
										) : (
											<>
												<div className="flex items-center justify-between">
													<span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 border border-orange/30 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-orange">
														Hybrid, online plus on site
													</span>
													<span className="font-mono text-xs text-ash">{stop.stop}</span>
												</div>
												<h3 className="mt-4 font-heading text-2xl font-bold text-heading tracking-tight">{stop.city}</h3>
												<p className="mt-1 text-sm text-ash">{stop.subtitle}</p>
												<p className="mt-3 font-mono text-sm text-orange">{stop.date}</p>
												<p className="mt-4 text-body leading-relaxed">{stop.blurb}</p>
												<div className="mt-5 flex flex-wrap gap-2">
													{stop.tags?.map((t) => (
														<span key={t} className="rounded-lg border border-hair/10 bg-panel px-3 py-1.5 text-xs font-mono text-body">
															{t}
														</span>
													))}
												</div>
											</>
										)}
									</div>
								)}
							</div>
						))}
					</div>
				</div>

				<Reveal className="mt-8 text-center">
					<a
						href="#register"
						className="inline-flex items-center gap-2 rounded-lg bg-orange px-7 py-3.5 font-semibold text-ink shadow-lg shadow-orange/25 transition-all duration-200 hover:bg-rust hover:text-white hover:scale-[1.03] active:scale-[0.98]"
					>
						Register Now
						<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
						</svg>
					</a>
				</Reveal>
			</div>
		</section>
	);
}
