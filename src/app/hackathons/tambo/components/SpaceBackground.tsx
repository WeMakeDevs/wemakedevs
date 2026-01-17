const SpaceBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* Star field */}
			<div className="absolute inset-0">
				{/* Small stars */}
				<div className="absolute w-1 h-1 bg-white rounded-full top-[5%] left-[10%] animate-pulse opacity-60" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[15%] left-[25%] opacity-40" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[8%] left-[45%] animate-pulse opacity-70" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[65%] opacity-50" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[12%] left-[80%] animate-pulse opacity-60" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[25%] left-[15%] opacity-40" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[30%] left-[55%] animate-pulse opacity-50" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[35%] left-[90%] opacity-70" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[40%] left-[5%] animate-pulse opacity-40" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[45%] left-[35%] opacity-60" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[50%] left-[70%] animate-pulse opacity-50" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[55%] left-[20%] opacity-40" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[60%] left-[85%] animate-pulse opacity-70" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[65%] left-[40%] opacity-50" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[70%] left-[60%] animate-pulse opacity-60" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[75%] left-[10%] opacity-40" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[80%] left-[75%] animate-pulse opacity-50" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[85%] left-[30%] opacity-70" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[90%] left-[50%] animate-pulse opacity-40" />
				<div className="absolute w-1 h-1 bg-white rounded-full top-[95%] left-[95%] opacity-60" />

				{/* Medium stars */}
				<div className="absolute w-1.5 h-1.5 bg-amber-200 rounded-full top-[10%] left-[30%] animate-pulse opacity-80" />
				<div className="absolute w-1.5 h-1.5 bg-amber-200 rounded-full top-[35%] left-[75%] opacity-70" />
				<div className="absolute w-1.5 h-1.5 bg-amber-200 rounded-full top-[60%] left-[15%] animate-pulse opacity-60" />
				<div className="absolute w-1.5 h-1.5 bg-amber-200 rounded-full top-[85%] left-[60%] opacity-80" />

				{/* Larger glowing stars */}
				<div className="absolute w-2 h-2 bg-amber-400 rounded-full top-[22%] left-[50%] animate-pulse shadow-lg shadow-amber-400/50" />
				<div className="absolute w-2 h-2 bg-cyan-400 rounded-full top-[55%] left-[88%] animate-pulse shadow-lg shadow-cyan-400/50" />
				<div className="absolute w-2 h-2 bg-purple-400 rounded-full top-[78%] left-[22%] animate-pulse shadow-lg shadow-purple-400/50" />
			</div>

			{/* Spaceship 1 - X-Wing style (top right area) */}
			<div className="absolute top-[15%] right-[8%] opacity-30">
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					className="transform rotate-[-30deg]"
				>
					<path
						d="M20 5L25 15H35L25 20L20 35L15 20L5 15H15L20 5Z"
						fill="#f59e0b"
						opacity="0.8"
					/>
					<circle cx="20" cy="18" r="3" fill="#fbbf24" />
				</svg>
			</div>

			{/* Spaceship 2 - TIE Fighter style (left side) */}
			<div className="absolute top-[45%] left-[5%] opacity-25">
				<svg width="35" height="35" viewBox="0 0 35 35" fill="none">
					<rect x="2" y="10" width="4" height="15" fill="#64748b" />
					<rect x="29" y="10" width="4" height="15" fill="#64748b" />
					<circle
						cx="17.5"
						cy="17.5"
						r="8"
						fill="#475569"
						stroke="#64748b"
						strokeWidth="2"
					/>
					<line
						x1="6"
						y1="17.5"
						x2="9.5"
						y2="17.5"
						stroke="#64748b"
						strokeWidth="2"
					/>
					<line
						x1="25.5"
						y1="17.5"
						x2="29"
						y2="17.5"
						stroke="#64748b"
						strokeWidth="2"
					/>
				</svg>
			</div>

			{/* Spaceship 3 - Millennium Falcon style (bottom right) */}
			<div className="absolute bottom-[20%] right-[12%] opacity-20">
				<svg width="50" height="30" viewBox="0 0 50 30" fill="none">
					<ellipse cx="25" cy="15" rx="20" ry="12" fill="#64748b" />
					<ellipse cx="25" cy="15" rx="15" ry="8" fill="#475569" />
					<circle cx="35" cy="15" r="4" fill="#94a3b8" />
					<rect x="5" y="12" width="8" height="6" rx="2" fill="#475569" />
				</svg>
			</div>

			{/* Alien 1 - Friendly alien (middle left) */}
			<div className="absolute top-[65%] left-[3%] opacity-25">
				<svg width="30" height="40" viewBox="0 0 30 40" fill="none">
					<ellipse cx="15" cy="12" rx="12" ry="10" fill="#22c55e" />
					<ellipse cx="9" cy="10" rx="4" ry="5" fill="#0f172a" />
					<ellipse cx="21" cy="10" rx="4" ry="5" fill="#0f172a" />
					<ellipse cx="9" cy="10" rx="2" ry="2.5" fill="#4ade80" />
					<ellipse cx="21" cy="10" rx="2" ry="2.5" fill="#4ade80" />
					<path d="M10 18 Q15 22 20 18" stroke="#0f172a" strokeWidth="2" fill="none" />
					<line x1="5" y1="3" x2="8" y2="6" stroke="#22c55e" strokeWidth="2" />
					<line x1="25" y1="3" x2="22" y2="6" stroke="#22c55e" strokeWidth="2" />
					<ellipse cx="15" cy="30" rx="8" ry="8" fill="#22c55e" />
				</svg>
			</div>

			{/* Alien 2 - Small UFO with alien (top left) */}
			<div className="absolute top-[30%] left-[88%] opacity-20">
				<svg width="45" height="30" viewBox="0 0 45 30" fill="none">
					<ellipse cx="22.5" cy="20" rx="20" ry="8" fill="#6366f1" />
					<ellipse cx="22.5" cy="20" rx="15" ry="5" fill="#818cf8" />
					<ellipse cx="22.5" cy="12" rx="8" ry="8" fill="#a5b4fc" opacity="0.6" />
					<ellipse cx="20" cy="10" rx="2" ry="3" fill="#0f172a" />
					<ellipse cx="25" cy="10" rx="2" ry="3" fill="#0f172a" />
					{/* UFO lights */}
					<circle cx="10" cy="22" r="2" fill="#fbbf24" className="animate-pulse" />
					<circle cx="22.5" cy="24" r="2" fill="#fbbf24" className="animate-pulse" />
					<circle cx="35" cy="22" r="2" fill="#fbbf24" className="animate-pulse" />
				</svg>
			</div>

			{/* Planet/Moon in the distance */}
			<div className="absolute top-[8%] right-[25%] opacity-15">
				<div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 shadow-inner" />
			</div>

			{/* Distant nebula glow */}
			<div className="absolute top-[40%] left-[60%] w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
			<div className="absolute bottom-[30%] left-[20%] w-48 h-48 bg-amber-500/5 rounded-full blur-3xl" />
		</div>
	);
};

export default SpaceBackground;
