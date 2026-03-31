const TimeWarpBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

			{/* ── Deep space ambient glow ── */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#040610] via-[#080d1a] to-[#0a0e20]" />

			{/* ── Large ambient nebula-like blobs ── */}
			<div className="absolute top-[5%] left-[15%] w-[500px] h-[500px] rounded-full bg-purple-900/[0.06] blur-[120px]" />
			<div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-amber-900/[0.07] blur-[100px]" />
			<div className="absolute bottom-[10%] left-[40%] w-[600px] h-[300px] rounded-full bg-blue-900/[0.05] blur-[120px]" />

			{/* ── Perspective grid floor ── */}
			<div className="absolute bottom-0 left-0 right-0 h-[42%] opacity-[0.065]">
				<svg
					width="100%"
					height="100%"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient id="gridFadeV" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
							<stop offset="35%" stopColor="#F59E0B" stopOpacity="0.4" />
							<stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
						</linearGradient>
						<linearGradient id="gridFadeH" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
							<stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
						</linearGradient>
					</defs>

					{/* Horizontal grid lines */}
					{Array.from({ length: 18 }).map((_, i) => (
						<line
							key={`h-${i}`}
							x1="0"
							y1={`${(i + 1) * 5.5}%`}
							x2="100%"
							y2={`${(i + 1) * 5.5}%`}
							stroke="#F59E0B"
							strokeWidth="0.5"
							opacity={0.2 + i * 0.04}
						/>
					))}

					{/* Vanishing-point vertical lines */}
					{Array.from({ length: 22 }).map((_, i) => (
						<line
							key={`v-${i}`}
							x1={`${(i + 1) * 4.5}%`}
							y1="0"
							x2={`${50 + ((i + 1) * 4.5 - 50) * 0.28}%`}
							y2="100%"
							stroke="#F59E0B"
							strokeWidth="0.4"
							opacity="0.55"
						/>
					))}
				</svg>
			</div>

			{/* ── Time-warp scan line ── */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-35 animate-time-warp shadow-[0_0_18px_4px_rgba(245,158,11,0.45)]" />
			</div>

			{/* ── Static star field (SVG) ── */}
			<svg
				className="absolute inset-0 w-full h-full opacity-70"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1920 1080"
				preserveAspectRatio="xMidYMid slice"
			>
				{/* Row 1 */}
				<circle cx="52"   cy="64"   r="1"   fill="white" opacity="0.75" />
				<circle cx="183"  cy="28"   r="1.4" fill="white" opacity="0.6"  />
				<circle cx="324"  cy="91"   r="1"   fill="white" opacity="0.65" />
				<circle cx="451"  cy="18"   r="1.2" fill="white" opacity="0.5"  />
				<circle cx="602"  cy="72"   r="1"   fill="white" opacity="0.7"  />
				<circle cx="748"  cy="44"   r="1.5" fill="white" opacity="0.55" />
				<circle cx="901"  cy="19"   r="1"   fill="white" opacity="0.65" />
				<circle cx="1054" cy="82"   r="1.2" fill="white" opacity="0.6"  />
				<circle cx="1205" cy="38"   r="1"   fill="white" opacity="0.7"  />
				<circle cx="1358" cy="67"   r="1.5" fill="white" opacity="0.5"  />
				<circle cx="1503" cy="24"   r="1"   fill="white" opacity="0.65" />
				<circle cx="1654" cy="56"   r="1.2" fill="white" opacity="0.55" />
				<circle cx="1801" cy="41"   r="1"   fill="white" opacity="0.7"  />

				{/* Row 2 */}
				<circle cx="91"   cy="208"  r="1.2" fill="white" opacity="0.55" />
				<circle cx="242"  cy="182"  r="1"   fill="white" opacity="0.65" />
				<circle cx="381"  cy="221"  r="1.4" fill="white" opacity="0.5"  />
				<circle cx="524"  cy="170"  r="1"   fill="white" opacity="0.75" />
				<circle cx="671"  cy="211"  r="1"   fill="white" opacity="0.6"  />
				<circle cx="823"  cy="189"  r="1.5" fill="white" opacity="0.65" />
				<circle cx="965"  cy="232"  r="1"   fill="white" opacity="0.45" />
				<circle cx="1113" cy="176"  r="1.2" fill="white" opacity="0.7"  />
				<circle cx="1264" cy="215"  r="1"   fill="white" opacity="0.55" />
				<circle cx="1412" cy="187"  r="1.4" fill="white" opacity="0.65" />
				<circle cx="1563" cy="207"  r="1"   fill="white" opacity="0.5"  />
				<circle cx="1715" cy="195"  r="1"   fill="white" opacity="0.6"  />

				{/* Row 3 */}
				<circle cx="123"  cy="381"  r="1"   fill="white" opacity="0.6"  />
				<circle cx="280"  cy="352"  r="1.5" fill="white" opacity="0.5"  />
				<circle cx="434"  cy="401"  r="1"   fill="white" opacity="0.65" />
				<circle cx="585"  cy="373"  r="1.2" fill="white" opacity="0.55" />
				<circle cx="738"  cy="393"  r="1"   fill="white" opacity="0.75" />
				<circle cx="881"  cy="361"  r="1"   fill="white" opacity="0.5"  />
				<circle cx="1043" cy="410"  r="1.4" fill="white" opacity="0.65" />
				<circle cx="1191" cy="378"  r="1"   fill="white" opacity="0.6"  />
				<circle cx="1344" cy="397"  r="1"   fill="white" opacity="0.55" />
				<circle cx="1491" cy="368"  r="1.5" fill="white" opacity="0.7"  />
				<circle cx="1643" cy="388"  r="1"   fill="white" opacity="0.5"  />
				<circle cx="1793" cy="375"  r="1.2" fill="white" opacity="0.65" />

				{/* Amber/warm tinted stars */}
				<circle cx="165"  cy="532"  r="1.5" fill="#FFD080" opacity="0.6"  />
				<circle cx="637"  cy="193"  r="1.5" fill="#FFD080" opacity="0.5"  />
				<circle cx="1192" cy="487"  r="1.8" fill="#FFD080" opacity="0.55" />
				<circle cx="1734" cy="312"  r="1.5" fill="#FFD080" opacity="0.45" />

				{/* Cyan tinted stars */}
				<circle cx="432"  cy="145"  r="1.5" fill="#80E8FF" opacity="0.5"  />
				<circle cx="892"  cy="465"  r="1.5" fill="#80E8FF" opacity="0.55" />
				<circle cx="1384" cy="228"  r="1.8" fill="#80E8FF" opacity="0.45" />

				{/* Purple tinted stars */}
				<circle cx="712"  cy="304"  r="1.5" fill="#D060FF" opacity="0.45" />
				<circle cx="1156" cy="132"  r="1.5" fill="#D060FF" opacity="0.4"  />
				<circle cx="1621" cy="421"  r="1.5" fill="#D060FF" opacity="0.5"  />
			</svg>

			{/* ── Lightning bolts ── */}
			<div className="absolute top-[8%] right-[12%] opacity-[0.08] animate-lightning">
				<svg width="60" height="120" viewBox="0 0 60 120" fill="none">
					<path d="M35 0 L15 50 L30 50 L10 120 L50 45 L32 45 Z" fill="#F59E0B" />
				</svg>
			</div>
			<div className="absolute bottom-[18%] left-[8%] opacity-[0.07] animate-lightning" style={{ animationDelay: "4s" }}>
				<svg width="40" height="80" viewBox="0 0 60 120" fill="none">
					<path d="M35 0 L15 50 L30 50 L10 120 L50 45 L32 45 Z" fill="#3B82F6" />
				</svg>
			</div>

			{/* ── Flux capacitor glow mark ── */}
			<div className="absolute top-[38%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]">
				<div className="relative w-44 h-44">
					<div className="absolute inset-0 border-2 border-amber-500/50 rounded-full" />
					<div className="absolute inset-4 border border-amber-500/35 rounded-full" />
					<div className="absolute inset-8 border border-amber-500/25 rounded-full" />
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-500/70 rounded-full shadow-[0_0_20px_6px_rgba(245,158,11,0.4)]" />
					<svg className="absolute inset-0" width="176" height="176" viewBox="0 0 176 176">
						<line x1="88" y1="88" x2="88" y2="22" stroke="#F59E0B" strokeWidth="1.5" opacity="0.55" />
						<line x1="88" y1="88" x2="34" y2="142" stroke="#F59E0B" strokeWidth="1.5" opacity="0.55" />
						<line x1="88" y1="88" x2="142" y2="142" stroke="#F59E0B" strokeWidth="1.5" opacity="0.55" />
					</svg>
				</div>
			</div>

			{/* ── Telemetry text ── */}
			<div className="absolute top-[22%] left-[3%] opacity-[0.14] text-amber-500 font-mono text-xs leading-relaxed">
				<div className="animate-pulse">88 MPH</div>
				<div className="animate-pulse" style={{ animationDelay: "0.5s" }}>1.21 GW</div>
				<div className="animate-pulse" style={{ animationDelay: "1s" }}>FLUX://</div>
			</div>
			<div className="absolute bottom-[14%] right-[8%] opacity-[0.14] text-amber-500 font-mono text-xs leading-relaxed text-right">
				<div className="animate-pulse">METADATA</div>
				<div className="animate-pulse" style={{ animationDelay: "0.3s" }}>DISCOVERY</div>
				<div className="animate-pulse" style={{ animationDelay: "0.6s" }}>LINEAGE</div>
				<div className="animate-pulse" style={{ animationDelay: "0.9s" }}>GOVERN</div>
			</div>

			{/* ── Clock tower (right) ── */}
			<div className="absolute top-[55%] right-[5%] opacity-[0.07]">
				<svg width="50" height="80" viewBox="0 0 50 80" fill="none">
					<rect x="15" y="30" width="20" height="50" fill="#F59E0B" />
					<polygon points="25,0 5,30 45,30" fill="#F59E0B" />
					<circle cx="25" cy="50" r="8" stroke="#0F172A" strokeWidth="2" fill="none" />
					<line x1="25" y1="50" x2="25" y2="44" stroke="#0F172A" strokeWidth="1.5" />
					<line x1="25" y1="50" x2="30" y2="50" stroke="#0F172A" strokeWidth="1.5" />
				</svg>
			</div>

			{/* ── Viewfinder corner brackets ── */}
			<div className="absolute top-6 left-6 opacity-[0.18]">
				<div className="w-8 h-8 border-l-2 border-t-2 border-amber-500" />
			</div>
			<div className="absolute top-6 right-6 opacity-[0.18]">
				<div className="w-8 h-8 border-r-2 border-t-2 border-amber-500" />
			</div>
			<div className="absolute bottom-6 left-6 opacity-[0.18]">
				<div className="w-8 h-8 border-l-2 border-b-2 border-amber-500" />
			</div>
			<div className="absolute bottom-6 right-6 opacity-[0.18]">
				<div className="w-8 h-8 border-r-2 border-b-2 border-amber-500" />
			</div>
		</div>
	);
};

export default TimeWarpBackground;
