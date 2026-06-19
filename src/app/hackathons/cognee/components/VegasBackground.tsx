const VegasBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* ── Desert daytime sky → sand gradient ── */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#bfe3ec] via-[#f3e2c0] to-[#f1d9ab]" />

			{/* ── Warm haze blobs ── */}
			<div className="absolute top-[8%] left-[10%] w-[520px] h-[520px] rounded-full bg-[#ffd98a]/40 blur-[120px]" />
			<div className="absolute top-[18%] right-[6%] w-[440px] h-[440px] rounded-full bg-[#ffb36b]/30 blur-[120px]" />

			{/* ── Blazing desert sun ── */}
			<div className="absolute top-[6%] right-[12%]">
				<div className="relative">
					<svg
						aria-hidden="true"
						className="sun-spin opacity-60"
						width="280"
						height="280"
						viewBox="0 0 280 280"
						xmlns="http://www.w3.org/2000/svg"
					>
						{Array.from({ length: 24 }).map((_, i) => {
							const angle = (i * 360) / 24;
							return (
								<line
									key={`ray-${angle}`}
									x1="140"
									y1="140"
									x2="140"
									y2="18"
									stroke="#ffcf66"
									strokeWidth="6"
									strokeLinecap="round"
									transform={`rotate(${angle} 140 140)`}
								/>
							);
						})}
					</svg>
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ffe082] to-[#ff9e3d] shadow-[0_0_80px_30px_rgba(255,200,90,0.45)]" />
					</div>
				</div>
			</div>

			{/* ── Heat-haze shimmer sweep ── */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-0 left-0 h-full w-[22%] bg-gradient-to-r from-transparent via-white/25 to-transparent light-sweep" />
			</div>

			{/* ── Desert dunes + Vegas strip silhouette ── */}
			<svg
				aria-hidden="true"
				className="absolute bottom-0 left-0 right-0 w-full"
				height="360"
				viewBox="0 0 1920 360"
				preserveAspectRatio="xMidYMax slice"
				xmlns="http://www.w3.org/2000/svg"
			>
				{/* far dunes */}
				<path
					d="M0 200 Q480 130 960 190 T1920 170 L1920 360 L0 360 Z"
					fill="#e6c88a"
					opacity="0.55"
				/>
				{/* distant strip buildings on the dune */}
				<g fill="#d9b878" opacity="0.6">
					<rect x="240" y="150" width="46" height="70" />
					<rect x="300" y="120" width="30" height="100" />
					<polygon points="1180,150 1215,96 1250,150" />
					<rect x="1215" y="150" width="10" height="70" />
					<rect x="1480" y="130" width="54" height="90" />
				</g>
				{/* near dune */}
				<path
					d="M0 280 Q560 220 1100 270 T1920 250 L1920 360 L0 360 Z"
					fill="#dcb163"
					opacity="0.85"
				/>
				{/* road */}
				<path
					d="M880 360 L1010 300 L1080 300 L1150 360 Z"
					fill="#b9924a"
					opacity="0.7"
				/>
				<rect
					x="952"
					y="318"
					width="10"
					height="14"
					fill="#fff3d0"
					opacity="0.7"
				/>
				<rect
					x="980"
					y="340"
					width="12"
					height="16"
					fill="#fff3d0"
					opacity="0.7"
				/>
			</svg>

			{/* ── Cacti silhouettes ── */}
			<svg
				aria-hidden="true"
				className="absolute bottom-[2%] left-[3%] w-16 md:w-24 opacity-70"
				viewBox="0 0 60 90"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g fill="#7e9a4e">
					<rect x="25" y="20" width="10" height="70" rx="5" />
					<path d="M25 45 H14 a6 6 0 0 0 -6 6 v10 a6 6 0 0 0 6 6 h0 V57 h11 Z" />
					<path d="M35 38 H46 a6 6 0 0 1 6 6 v14 a6 6 0 0 1 -6 6 h0 V50 h-11 Z" />
				</g>
			</svg>
			<svg
				aria-hidden="true"
				className="absolute bottom-[1%] right-[5%] w-12 md:w-20 opacity-70"
				viewBox="0 0 60 90"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g fill="#6f8a44">
					<rect x="25" y="14" width="10" height="76" rx="5" />
					<path d="M25 50 H14 a6 6 0 0 0 -6 6 v8 a6 6 0 0 0 6 6 V62 h11 Z" />
				</g>
			</svg>

			{/* ── Drifting clouds ── */}
			<svg
				aria-hidden="true"
				className="absolute top-[10%] left-[18%] w-40 opacity-70 float-bob"
				viewBox="0 0 120 50"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g fill="#fffdf6">
					<ellipse cx="40" cy="32" rx="34" ry="16" />
					<ellipse cx="68" cy="26" rx="26" ry="18" />
					<ellipse cx="22" cy="30" rx="20" ry="13" />
				</g>
			</svg>
		</div>
	);
};

export default VegasBackground;
