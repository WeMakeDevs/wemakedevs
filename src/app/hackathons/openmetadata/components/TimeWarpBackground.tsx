const TimeWarpBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* Perspective grid floor, retro-futuristic */}
			<div className="absolute bottom-0 left-0 right-0 h-[40%] opacity-[0.06]">
				<svg
					width="100%"
					height="100%"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient
							id="gridFade"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
							<stop offset="40%" stopColor="#F59E0B" stopOpacity="0.5" />
							<stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
						</linearGradient>
						<pattern
							id="horizLines"
							x="0"
							y="0"
							width="100%"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<line
								x1="0"
								y1="19"
								x2="100%"
								y2="19"
								stroke="url(#gridFade)"
								strokeWidth="0.5"
							/>
						</pattern>
					</defs>
					{Array.from({ length: 20 }).map((_, i) => (
						<line
							key={`v-${i}`}
							x1={`${(i + 1) * 5}%`}
							y1="0"
							x2={`${50 + (((i + 1) * 5 - 50) * 0.3)}%`}
							y2="100%"
							stroke="#F59E0B"
							strokeWidth="0.4"
							opacity="0.5"
						/>
					))}
					<rect width="100%" height="100%" fill="url(#horizLines)" />
				</svg>
			</div>

			{/* Time-warp scan line */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-40 animate-time-warp shadow-[0_0_15px_3px_rgba(245,158,11,0.4)]" />
			</div>

			{/* Lightning bolt, top right */}
			<div className="absolute top-[8%] right-[12%] opacity-[0.08] animate-lightning">
				<svg width="60" height="120" viewBox="0 0 60 120" fill="none">
					<path
						d="M35 0 L15 50 L30 50 L10 120 L50 45 L32 45 Z"
						fill="#F59E0B"
					/>
				</svg>
			</div>

			{/* Lightning bolt, bottom left */}
			<div className="absolute bottom-[15%] left-[8%] opacity-[0.06] animate-lightning" style={{ animationDelay: "4s" }}>
				<svg width="40" height="80" viewBox="0 0 60 120" fill="none">
					<path
						d="M35 0 L15 50 L30 50 L10 120 L50 45 L32 45 Z"
						fill="#3B82F6"
					/>
				</svg>
			</div>

			{/* Flux capacitor glow, center */}
			<div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]">
				<div className="relative w-40 h-40">
					<div className="absolute inset-0 border-2 border-amber-500/40 rounded-full" />
					<div className="absolute inset-4 border border-amber-500/30 rounded-full" />
					<div className="absolute inset-8 border border-amber-500/20 rounded-full" />
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-500/60 rounded-full shadow-[0_0_20px_5px_rgba(245,158,11,0.3)]" />
					{/* Y-shaped lines */}
					<svg
						className="absolute inset-0"
						width="160"
						height="160"
						viewBox="0 0 160 160"
					>
						<line x1="80" y1="80" x2="80" y2="20" stroke="#F59E0B" strokeWidth="1.5" opacity="0.5" />
						<line x1="80" y1="80" x2="30" y2="130" stroke="#F59E0B" strokeWidth="1.5" opacity="0.5" />
						<line x1="80" y1="80" x2="130" y2="130" stroke="#F59E0B" strokeWidth="1.5" opacity="0.5" />
					</svg>
				</div>
			</div>

			{/* "88 MPH" text, top left */}
			<div className="absolute top-[20%] left-[3%] opacity-[0.12] text-amber-500 font-mono text-xs leading-relaxed">
				<div className="animate-pulse">88 MPH</div>
				<div className="animate-pulse" style={{ animationDelay: "0.5s" }}>1.21 GW</div>
				<div className="animate-pulse" style={{ animationDelay: "1s" }}>FLUX://</div>
			</div>

			{/* Clock tower, right side */}
			<div className="absolute top-[55%] right-[5%] opacity-[0.06]">
				<svg width="50" height="80" viewBox="0 0 50 80" fill="none">
					<rect x="15" y="30" width="20" height="50" fill="#F59E0B" />
					<polygon points="25,0 5,30 45,30" fill="#F59E0B" />
					<circle cx="25" cy="50" r="8" stroke="#0F172A" strokeWidth="2" fill="none" />
					<line x1="25" y1="50" x2="25" y2="44" stroke="#0F172A" strokeWidth="1.5" />
					<line x1="25" y1="50" x2="30" y2="50" stroke="#0F172A" strokeWidth="1.5" />
				</svg>
			</div>

			{/* Data stream, bottom right */}
			<div className="absolute bottom-[12%] right-[8%] opacity-[0.15] text-amber-500 font-mono text-xs leading-relaxed">
				<div className="animate-pulse">METADATA</div>
				<div className="animate-pulse" style={{ animationDelay: "0.3s" }}>DISCOVERY</div>
				<div className="animate-pulse" style={{ animationDelay: "0.6s" }}>LINEAGE</div>
				<div className="animate-pulse" style={{ animationDelay: "0.9s" }}>GOVERN</div>
			</div>

			{/* Glowing orbs */}
			<div className="absolute top-[50%] left-[30%] w-72 h-72 bg-amber-500/[0.04] rounded-full blur-3xl" />
			<div className="absolute top-[20%] right-[20%] w-48 h-48 bg-blue-500/[0.03] rounded-full blur-3xl" />
			<div className="absolute bottom-[30%] left-[60%] w-40 h-40 bg-amber-400/[0.03] rounded-full blur-2xl" />

			{/* Corner brackets, viewfinder / time-circuit display frame */}
			<div className="absolute top-8 left-8 opacity-20">
				<div className="w-8 h-8 border-l-2 border-t-2 border-amber-500" />
			</div>
			<div className="absolute top-8 right-8 opacity-20">
				<div className="w-8 h-8 border-r-2 border-t-2 border-amber-500" />
			</div>
			<div className="absolute bottom-8 left-8 opacity-20">
				<div className="w-8 h-8 border-l-2 border-b-2 border-amber-500" />
			</div>
			<div className="absolute bottom-8 right-8 opacity-20">
				<div className="w-8 h-8 border-r-2 border-b-2 border-amber-500" />
			</div>
		</div>
	);
};

export default TimeWarpBackground;
