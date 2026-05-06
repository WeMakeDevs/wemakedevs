"use client";

const PirateBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* Deep teal ocean base */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#001820] via-[#002b36] to-[#001a1a]" />

			{/* Grainy parchment noise texture */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* Floating SQL code (bioluminescent plankton) */}
			<div className="absolute top-[15%] left-[8%] float-code text-[#2aa198] text-xs font-mono opacity-[0.07] select-none">
				SELECT * FROM github.pull_requests
			</div>
			<div
				className="absolute top-[35%] right-[12%] float-code text-[#d4af37] text-xs font-mono opacity-[0.05] select-none"
				style={{ animationDelay: "2s" }}
			>
				JOIN slack.messages ON channel = &apos;incidents&apos;
			</div>
			<div
				className="absolute top-[55%] left-[20%] float-code text-[#2aa198] text-[10px] font-mono opacity-[0.06] select-none"
				style={{ animationDelay: "4s" }}
			>
				WHERE sentry.errors.level = &apos;fatal&apos;
			</div>
			<div
				className="absolute top-[75%] right-[25%] float-code text-[#d4af37] text-[10px] font-mono opacity-[0.04] select-none"
				style={{ animationDelay: "6s" }}
			>
				CROSS JOIN datadog.metrics
			</div>
			<div
				className="absolute top-[45%] left-[55%] float-code text-[#859900] text-[11px] font-mono opacity-[0.05] select-none"
				style={{ animationDelay: "3s" }}
			>
				GROUP BY sprint_id, assignee
			</div>

			{/* Sea mist layers */}
			<div className="absolute inset-0 mist-drift">
				<div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#002b36]/60 via-[#002b36]/20 to-transparent" />
			</div>
			<div
				className="absolute inset-0 mist-drift"
				style={{ animationDelay: "6s", animationDirection: "reverse" }}
			>
				<div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-[#001820]/40 to-transparent" />
			</div>

			{/* Compass rose */}
			<div className="absolute bottom-[6%] left-[4%] opacity-[0.04]">
				<svg width="120" height="120" viewBox="0 0 120 120" fill="none">
					<circle
						cx="60"
						cy="60"
						r="55"
						stroke="#d4af37"
						strokeWidth="1"
					/>
					<circle
						cx="60"
						cy="60"
						r="42"
						stroke="#d4af37"
						strokeWidth="0.5"
					/>
					<polygon points="60,8 55,48 60,42 65,48" fill="#d4af37" />
					<polygon
						points="60,112 55,72 60,78 65,72"
						fill="#d4af37"
						opacity="0.5"
					/>
					<polygon
						points="112,60 72,55 78,60 72,65"
						fill="#d4af37"
						opacity="0.5"
					/>
					<polygon
						points="8,60 48,55 42,60 48,65"
						fill="#d4af37"
						opacity="0.5"
					/>
					{/* Diagonal points */}
					<polygon
						points="97,23 70,50 72,55 77,52"
						fill="#d4af37"
						opacity="0.3"
					/>
					<polygon
						points="23,97 50,70 48,65 43,68"
						fill="#d4af37"
						opacity="0.3"
					/>
					<polygon
						points="97,97 70,70 72,65 77,68"
						fill="#d4af37"
						opacity="0.3"
					/>
					<polygon
						points="23,23 50,50 48,55 43,52"
						fill="#d4af37"
						opacity="0.3"
					/>
				</svg>
			</div>

			{/* Anchor */}
			<div className="absolute bottom-[12%] right-[6%] opacity-[0.04]">
				<svg width="70" height="90" viewBox="0 0 70 90" fill="none">
					<circle
						cx="35"
						cy="12"
						r="10"
						stroke="#d4af37"
						strokeWidth="2.5"
						fill="none"
					/>
					<line
						x1="35"
						y1="22"
						x2="35"
						y2="75"
						stroke="#d4af37"
						strokeWidth="2.5"
					/>
					<line
						x1="18"
						y1="35"
						x2="52"
						y2="35"
						stroke="#d4af37"
						strokeWidth="2.5"
					/>
					<path
						d="M35 75 Q18 70 10 58"
						stroke="#d4af37"
						strokeWidth="2.5"
						fill="none"
						strokeLinecap="round"
					/>
					<path
						d="M35 75 Q52 70 60 58"
						stroke="#d4af37"
						strokeWidth="2.5"
						fill="none"
						strokeLinecap="round"
					/>
					<path d="M10 58 L6 64 L15 60" fill="#d4af37" />
					<path d="M60 58 L64 64 L55 60" fill="#d4af37" />
				</svg>
			</div>

			{/* Skull and crossbones */}
			<div className="absolute top-[18%] left-[10%] opacity-[0.03]">
				<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
					<ellipse cx="30" cy="22" rx="14" ry="16" fill="#fdf6e3" />
					<ellipse cx="24" cy="20" rx="4" ry="5" fill="#002b36" />
					<ellipse cx="36" cy="20" rx="4" ry="5" fill="#002b36" />
					<path d="M28 27 L30 30 L32 27" fill="#002b36" />
					<line
						x1="8"
						y1="42"
						x2="52"
						y2="58"
						stroke="#fdf6e3"
						strokeWidth="4"
						strokeLinecap="round"
					/>
					<line
						x1="52"
						y1="42"
						x2="8"
						y2="58"
						stroke="#fdf6e3"
						strokeWidth="4"
						strokeLinecap="round"
					/>
				</svg>
			</div>

			{/* Treasure map dotted trail */}
			<div className="absolute top-[40%] left-[35%] opacity-[0.025]">
				<svg width="250" height="120" viewBox="0 0 250 120" fill="none">
					<path
						d="M0 60 Q60 20 120 60 Q180 100 250 50"
						stroke="#d4af37"
						strokeWidth="2"
						strokeDasharray="10 10"
						fill="none"
					/>
					<line
						x1="238"
						y1="38"
						x2="258"
						y2="62"
						stroke="#cb4b16"
						strokeWidth="3"
					/>
					<line
						x1="258"
						y1="38"
						x2="238"
						y2="62"
						stroke="#cb4b16"
						strokeWidth="3"
					/>
				</svg>
			</div>

			{/* Ambient glow orbs */}
			<div className="absolute top-[20%] left-[30%] w-72 h-72 bg-[#2aa198]/[0.03] rounded-full blur-[100px]" />
			<div className="absolute bottom-[25%] right-[20%] w-56 h-56 bg-[#d4af37]/[0.03] rounded-full blur-[80px]" />
			<div className="absolute top-[60%] left-[10%] w-40 h-40 bg-[#268bd2]/[0.02] rounded-full blur-[60px]" />

			{/* Coral reef silhouette at bottom */}
			<div className="absolute bottom-0 left-0 right-0 opacity-[0.035]">
				<svg
					width="100%"
					height="80"
					viewBox="0 0 1400 80"
					preserveAspectRatio="none"
					fill="none"
				>
					<path
						d="M0 80 L0 55 Q70 35 140 50 Q210 65 280 42 Q350 20 420 38 Q490 55 560 30 Q630 5 700 22 Q770 40 840 18 Q910 -5 980 15 Q1050 35 1120 20 Q1190 5 1260 25 Q1330 45 1400 35 L1400 80 Z"
						fill="#d4af37"
					/>
					<path
						d="M250 42 Q260 22 270 42"
						stroke="#b8960c"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M600 30 Q610 10 620 30"
						stroke="#b8960c"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M950 15 Q960 -5 970 15"
						stroke="#b8960c"
						strokeWidth="3"
						fill="none"
					/>
				</svg>
			</div>
		</div>
	);
};

export default PirateBackground;
