// ─── Men in Black "night-ops surveillance" backdrop for Agents of SigNoz ──────

const stars = [
	{ cx: 120, cy: 80, r: 1.4 },
	{ cx: 280, cy: 140, r: 1 },
	{ cx: 460, cy: 60, r: 1.8 },
	{ cx: 640, cy: 120, r: 1.1 },
	{ cx: 820, cy: 70, r: 1.5 },
	{ cx: 1010, cy: 150, r: 1 },
	{ cx: 1180, cy: 90, r: 1.6 },
	{ cx: 1360, cy: 60, r: 1.2 },
	{ cx: 1540, cy: 130, r: 1.4 },
	{ cx: 1720, cy: 80, r: 1 },
	{ cx: 200, cy: 260, r: 1 },
	{ cx: 540, cy: 300, r: 1.3 },
	{ cx: 900, cy: 280, r: 1 },
	{ cx: 1280, cy: 320, r: 1.5 },
	{ cx: 1640, cy: 290, r: 1.1 },
];

const SignozBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* ── Night-ops sky gradient ── */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#08090b] via-[#0b0c0e] to-[#101116]" />

			{/* ── Surveillance grid ── */}
			<div className="absolute inset-0 agency-grid opacity-50" />

			{/* ── Signature orange + sparing neuralyzer-cyan ambient glows ── */}
			<div className="absolute top-[6%] right-[8%] w-[520px] h-[520px] rounded-full bg-[#e5502a]/12 blur-[150px]" />
			<div className="absolute top-[34%] left-[2%] w-[460px] h-[460px] rounded-full bg-[#5fe9ff]/8 blur-[160px]" />
			<div className="absolute bottom-[10%] right-[20%] w-[380px] h-[380px] rounded-full bg-[#2be38b]/7 blur-[150px]" />

			{/* ── Star field ── */}
			<svg
				aria-hidden="true"
				className="absolute inset-0 w-full h-full opacity-70"
				viewBox="0 0 1920 400"
				preserveAspectRatio="xMidYMin slice"
				xmlns="http://www.w3.org/2000/svg"
			>
				{stars.map(s => (
					<circle
						key={`star-${s.cx}-${s.cy}`}
						cx={s.cx}
						cy={s.cy}
						r={s.r}
						fill="#f5f5f5"
						style={{
							animation: `sig-pulse ${3 + (s.cx % 4)}s ease-in-out infinite ${(s.cy % 10) / 5}s`,
							transformOrigin: `${s.cx}px ${s.cy}px`,
							transformBox: "fill-box",
						}}
					/>
				))}
			</svg>

			{/* ── Rotating radar dish (top-right) ── */}
			<div className="absolute top-[8%] right-[12%]">
				<svg
					aria-hidden="true"
					className="radar-spin opacity-40"
					width="220"
					height="220"
					viewBox="0 0 220 220"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="110"
						cy="110"
						r="100"
						fill="none"
						stroke="#2be38b"
						strokeWidth="1"
						opacity="0.4"
					/>
					<circle
						cx="110"
						cy="110"
						r="66"
						fill="none"
						stroke="#2be38b"
						strokeWidth="1"
						opacity="0.3"
					/>
					<circle
						cx="110"
						cy="110"
						r="32"
						fill="none"
						stroke="#2be38b"
						strokeWidth="1"
						opacity="0.3"
					/>
					<path
						d="M110 110 L110 10 A100 100 0 0 1 200 90 Z"
						fill="#2be38b"
						opacity="0.12"
					/>
					<line
						x1="110"
						y1="110"
						x2="110"
						y2="10"
						stroke="#2be38b"
						strokeWidth="1.5"
						opacity="0.6"
					/>
				</svg>
			</div>

			{/* ── Heat / scan shimmer sweep ── */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-0 left-0 h-full w-[18%] bg-gradient-to-r from-transparent via-[#5fe9ff]/8 to-transparent scan-sweep" />
			</div>

			{/* ── City skyline silhouette (the agency watches over the city) ── */}
			<svg
				aria-hidden="true"
				className="absolute bottom-0 left-0 right-0 w-full"
				height="340"
				viewBox="0 0 1920 340"
				preserveAspectRatio="xMidYMax slice"
				xmlns="http://www.w3.org/2000/svg"
			>
				{/* far skyline */}
				<g fill="#15171d" opacity="0.9">
					<rect x="0" y="200" width="120" height="140" />
					<rect x="140" y="160" width="80" height="180" />
					<rect x="240" y="210" width="100" height="130" />
					<rect x="360" y="140" width="60" height="200" />
					<rect x="440" y="190" width="120" height="150" />
					<rect x="580" y="120" width="70" height="220" />
					<rect x="670" y="180" width="110" height="160" />
					<rect x="800" y="150" width="90" height="190" />
					<rect x="910" y="100" width="50" height="240" />
					<rect x="980" y="170" width="120" height="170" />
					<rect x="1120" y="140" width="80" height="200" />
					<rect x="1220" y="195" width="110" height="145" />
					<rect x="1350" y="130" width="70" height="210" />
					<rect x="1440" y="175" width="120" height="165" />
					<rect x="1580" y="150" width="90" height="190" />
					<rect x="1690" y="115" width="60" height="225" />
					<rect x="1770" y="185" width="150" height="155" />
				</g>
				{/* lit windows */}
				<g fill="#ffd778" opacity="0.55">
					<rect x="372" y="160" width="8" height="10" />
					<rect x="392" y="180" width="8" height="10" />
					<rect x="600" y="140" width="8" height="10" />
					<rect x="620" y="170" width="8" height="10" />
					<rect x="926" y="120" width="8" height="10" />
					<rect x="926" y="150" width="8" height="10" />
					<rect x="1140" y="160" width="8" height="10" />
					<rect x="1370" y="150" width="8" height="10" />
					<rect x="1706" y="135" width="8" height="10" />
				</g>
				{/* a couple of red alert beacons */}
				<circle
					cx="935"
					cy="100"
					r="3.5"
					fill="#e5484d"
					className="alert-blink"
				/>
				<circle
					cx="615"
					cy="120"
					r="3"
					fill="#e5484d"
					className="alert-blink"
				/>
			</svg>

			{/* ── Subtle neuralyzer flash overlay ── */}
			<div className="absolute inset-0 bg-[#5fe9ff]/8 neuralyze-flash" />
		</div>
	);
};

export default SignozBackground;
