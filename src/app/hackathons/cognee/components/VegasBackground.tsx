const VegasBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* ── Night sky gradient ── */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#160a26] via-[#0d0618] to-[#1a0b2e]" />

			{/* ── Ambient neon blobs ── */}
			<div className="absolute top-[6%] left-[12%] w-[520px] h-[520px] rounded-full bg-[#ff2d7e]/[0.07] blur-[130px]" />
			<div className="absolute top-[24%] right-[8%] w-[420px] h-[420px] rounded-full bg-[#ffb800]/[0.07] blur-[110px]" />
			<div className="absolute bottom-[8%] left-[38%] w-[600px] h-[320px] rounded-full bg-[#00e0d5]/[0.05] blur-[130px]" />

			{/* ── Star field ── */}
			<svg
				aria-hidden="true"
				className="absolute inset-0 w-full h-full opacity-70"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1920 1080"
				preserveAspectRatio="xMidYMid slice"
			>
				{Array.from({ length: 60 }).map((_, i) => {
					const x = (i * 137) % 1920;
					const y = (i * 213) % 520;
					const r = (i % 3) * 0.5 + 0.7;
					const tints = ["#ffffff", "#ffd24a", "#80f5ea", "#ff8ab8"];
					return (
						<circle
							key={`star-${x}-${y}-${r}`}
							cx={x}
							cy={y}
							r={r}
							fill={tints[i % 4]}
							opacity={0.4 + (i % 5) * 0.1}
						/>
					);
				})}
			</svg>

			{/* ── Vegas skyline silhouette ── */}
			<svg
				aria-hidden="true"
				className="absolute bottom-0 left-0 right-0 w-full opacity-[0.4]"
				height="320"
				viewBox="0 0 1920 320"
				preserveAspectRatio="xMidYMax slice"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g fill="#241338">
					<rect x="0" y="180" width="120" height="140" />
					<rect x="130" y="120" width="80" height="200" />
					<rect x="150" y="80" width="12" height="44" />
					<rect x="225" y="210" width="140" height="110" />
					<polygon points="380,220 430,120 480,220" />
					<rect x="430" y="220" width="20" height="100" />
					<rect x="500" y="150" width="100" height="170" />
					<rect x="620" y="200" width="160" height="120" />
					<rect x="800" y="100" width="70" height="220" />
					<rect x="828" y="60" width="14" height="44" />
					<rect x="890" y="190" width="150" height="130" />
					<polygon points="1060,200 1110,110 1160,200" />
					<rect x="1110" y="200" width="18" height="120" />
					<rect x="1190" y="150" width="120" height="170" />
					<rect x="1330" y="210" width="150" height="110" />
					<rect x="1500" y="120" width="90" height="200" />
					<rect x="1535" y="78" width="12" height="44" />
					<rect x="1610" y="190" width="170" height="130" />
					<rect x="1800" y="150" width="120" height="170" />
				</g>
				{/* lit windows */}
				<g fill="#ffd24a" opacity="0.6">
					{Array.from({ length: 80 }).map((_, i) => {
						const x = 20 + ((i * 71) % 1880);
						const y = 150 + ((i * 53) % 150);
						return (
							<rect
								key={`win-${x}-${y}`}
								x={x}
								y={y}
								width="6"
								height="9"
								opacity={i % 3 === 0 ? 0.8 : 0.35}
							/>
						);
					})}
				</g>
			</svg>

			{/* ── Sweeping searchlight ── */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-0 left-0 h-full w-[18%] bg-gradient-to-r from-transparent via-[#ffb800]/[0.06] to-transparent light-sweep" />
			</div>

			{/* ── Telemetry / memory text ── */}
			<div className="absolute top-[22%] left-[3%] opacity-[0.13] text-[#ff8ab8] font-mono text-xs leading-relaxed">
				<div className="animate-pulse">remember()</div>
				<div
					className="animate-pulse"
					style={{ animationDelay: "0.4s" }}
				>
					recall()
				</div>
				<div
					className="animate-pulse"
					style={{ animationDelay: "0.8s" }}
				>
					context://infinite
				</div>
			</div>
			<div className="absolute bottom-[18%] right-[5%] opacity-[0.13] text-[#80f5ea] font-mono text-xs leading-relaxed text-right">
				<div className="animate-pulse">GRAPH + VECTOR</div>
				<div
					className="animate-pulse"
					style={{ animationDelay: "0.3s" }}
				>
					NO MORE AMNESIA
				</div>
				<div
					className="animate-pulse"
					style={{ animationDelay: "0.6s" }}
				>
					SELF-HOSTED
				</div>
			</div>

			{/* ── Corner brackets ── */}
			<div className="absolute top-6 left-6 opacity-[0.18]">
				<div className="w-8 h-8 border-l-2 border-t-2 border-[#ffb800]" />
			</div>
			<div className="absolute top-6 right-6 opacity-[0.18]">
				<div className="w-8 h-8 border-r-2 border-t-2 border-[#ffb800]" />
			</div>
			<div className="absolute bottom-6 left-6 opacity-[0.18]">
				<div className="w-8 h-8 border-l-2 border-b-2 border-[#ffb800]" />
			</div>
			<div className="absolute bottom-6 right-6 opacity-[0.18]">
				<div className="w-8 h-8 border-r-2 border-b-2 border-[#ffb800]" />
			</div>
		</div>
	);
};

export default VegasBackground;
