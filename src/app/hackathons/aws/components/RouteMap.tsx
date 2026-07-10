"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Node = {
	id: string;
	cx: number;
	cy: number;
	label: string;
	lx: number;
	ly: number;
	anchor: "start" | "middle" | "end";
	arc: string;
};

const NODES: Node[] = [
	{ id: "delhi", cx: 190, cy: 180, label: "DELHI", lx: 190, ly: 165, anchor: "middle", arc: "M 190 180 Q 435 50 680 160" },
	{ id: "mumbai", cx: 150, cy: 240, label: "MUMBAI", lx: 140, ly: 255, anchor: "end", arc: "M 150 240 Q 415 60 680 160" },
	{ id: "hyderabad", cx: 190, cy: 270, label: "HYDERABAD", lx: 202, ly: 274, anchor: "start", arc: "M 190 270 Q 435 80 680 160" },
	{ id: "bangalore", cx: 180, cy: 310, label: "BANGALORE", lx: 168, ly: 325, anchor: "end", arc: "M 180 310 Q 430 90 680 160" },
	{ id: "chennai", cx: 210, cy: 320, label: "CHENNAI", lx: 222, ly: 335, anchor: "start", arc: "M 210 320 Q 445 90 680 160" },
];

export default function RouteMap() {
	const [active, setActive] = useState<string | null>(null);

	return (
		<section id="map" className="relative py-20 sm:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal className="text-center">
					<p className="font-mono text-xs uppercase tracking-[0.3em] text-orange">
						The Journey
					</p>
					<h2 className="mt-3 font-heading font-extrabold text-heading text-3xl sm:text-4xl tracking-tight">
						From India&apos;s hubs to Las Vegas
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-body">
						Five hybrid hackathons across India, and a sponsored trip to Las
						Vegas for the top teams. Hover or tap a city to trace the route.
					</p>
				</Reveal>

				<Reveal className="relative mt-12 w-full max-w-4xl mx-auto p-4 bg-[#121316]/50 rounded-2xl border border-white/[0.06] backdrop-blur-md shadow-2xl">
					<div
						className="absolute inset-0 pointer-events-none rounded-2xl blur-[80px]"
						style={{
							background:
								"radial-gradient(circle at 50% 40%, rgba(255,153,0,0.08), transparent 60%)",
						}}
					/>
					<svg
						viewBox="0 0 800 450"
						className="w-full h-auto relative z-10"
						role="img"
						aria-label="Route map from Indian cities to Las Vegas"
					>
						<defs>
							<filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
								<feGaussianBlur stdDeviation="6" result="blur" />
								<feComposite in="SourceGraphic" in2="blur" operator="over" />
							</filter>
							<linearGradient id="gradient-arc" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#FF9900" stopOpacity="0.2" />
								<stop offset="50%" stopColor="#B8422E" stopOpacity="0.8" />
								<stop offset="100%" stopColor="#FF9900" stopOpacity="1" />
							</linearGradient>
						</defs>

						{/* Tech grid */}
						<g stroke="rgba(255,255,255,0.02)" strokeWidth={1}>
							<path d="M 0 50 L 800 50 M 0 100 L 800 100 M 0 150 L 800 150 M 0 200 L 800 200 M 0 250 L 800 250 M 0 300 L 800 300 M 0 350 L 800 350 M 0 400 L 800 400" />
							<path d="M 100 0 L 100 450 M 200 0 L 200 450 M 300 0 L 300 450 M 400 0 L 400 450 M 500 0 L 500 450 M 600 0 L 600 450 M 700 0 L 700 450" />
						</g>

						{/* Continent wireframes */}
						<path d="M 120 180 L 190 140 L 240 180 L 210 320 L 180 310 Z" fill="rgba(255,153,0,0.015)" stroke="rgba(255,153,0,0.06)" strokeWidth={1} strokeDasharray="4 4" />
						<path d="M 640 110 L 690 140 L 680 200 L 630 180 Z" fill="rgba(255,153,0,0.015)" stroke="rgba(255,153,0,0.06)" strokeWidth={1} strokeDasharray="4 4" />

						{/* Base + animated arcs */}
						{NODES.map((n) => (
							<path key={`base-${n.id}`} d={n.arc} className="flight-path-base" />
						))}
						{NODES.map((n) => (
							<path
								key={`anim-${n.id}`}
								d={n.arc}
								className="flight-path-animated"
								strokeWidth={active === n.id ? 4 : 2.5}
								opacity={!active || active === n.id ? 0.85 : 0.15}
							/>
						))}

						{/* City nodes */}
						{NODES.map((n) => (
							<g
								key={n.id}
								className={`map-node${active === n.id ? " is-active" : ""}`}
								onMouseEnter={() => setActive(n.id)}
								onMouseLeave={() => setActive(null)}
								onClick={() => setActive((c) => (c === n.id ? null : n.id))}
							>
								<circle cx={n.cx} cy={n.cy} r={10} className="pulse-ring" />
								<circle cx={n.cx} cy={n.cy} r={5} fill="#B8422E" className="node-dot" />
								<text x={n.lx} y={n.ly} textAnchor={n.anchor} className="city-label">
									{n.label}
								</text>
							</g>
						))}

						{/* Las Vegas */}
						<g className="map-node">
							<circle cx={680} cy={160} r={25} className="pulse-ring" style={{ animationDuration: "1.5s" }} />
							<circle cx={680} cy={160} r={15} className="pulse-ring" style={{ animationDelay: "0.5s" }} />
							<circle cx={680} cy={160} r={8} fill="#FF9900" filter="url(#glow-orange)" />
							<circle cx={680} cy={160} r={3} fill="#FFFFFF" />
							<text x={680} y={130} textAnchor="middle" className="city-label" style={{ fill: "#FF9900", fontWeight: 700, letterSpacing: "1px" }}>
								LAS VEGAS
							</text>
							<text x={680} y={142} textAnchor="middle" className="city-label" style={{ fontSize: "8px", fill: "#FFFFFF", opacity: 0.8 }}>
								FLY OUT PRIZE
							</text>
						</g>
					</svg>

					<p className="relative z-10 mt-2 text-center text-xs font-mono text-ash">
						{active
							? `Tracing route: ${active.charAt(0).toUpperCase() + active.slice(1)} to Las Vegas`
							: "Hover or tap a city to trace its route"}
					</p>
				</Reveal>
			</div>
		</section>
	);
}
