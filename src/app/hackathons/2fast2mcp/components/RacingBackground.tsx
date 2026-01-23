const RacingBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* Dark gradient base */}
			<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

			{/* Racing stripes - diagonal */}
			<div className="absolute inset-0 opacity-[0.03]">
				<div className="absolute top-0 left-0 w-full h-full">
					{/* Racing stripe pattern */}
					<div className="absolute top-0 left-[10%] w-8 h-[200%] bg-orange-500 transform -rotate-45 -translate-y-1/2" />
					<div className="absolute top-0 left-[20%] w-4 h-[200%] bg-orange-500 transform -rotate-45 -translate-y-1/2" />
					<div className="absolute top-0 left-[80%] w-8 h-[200%] bg-orange-500 transform -rotate-45 -translate-y-1/2" />
					<div className="absolute top-0 left-[90%] w-4 h-[200%] bg-orange-500 transform -rotate-45 -translate-y-1/2" />
				</div>
			</div>

			{/* Checkered flag pattern - top right */}
			<div className="absolute -top-10 -right-10 opacity-[0.04] transform rotate-12">
				<svg width="200" height="200" viewBox="0 0 200 200">
					{[...Array(10)].map((_, row) =>
						[...Array(10)].map((_, col) => (
							<rect
								key={`${row}-${col}`}
								x={col * 20}
								y={row * 20}
								width="20"
								height="20"
								fill={(row + col) % 2 === 0 ? "#fff" : "transparent"}
							/>
						))
					)}
				</svg>
			</div>

			{/* Checkered flag pattern - bottom left */}
			<div className="absolute -bottom-10 -left-10 opacity-[0.04] transform -rotate-12">
				<svg width="200" height="200" viewBox="0 0 200 200">
					{[...Array(10)].map((_, row) =>
						[...Array(10)].map((_, col) => (
							<rect
								key={`${row}-${col}`}
								x={col * 20}
								y={row * 20}
								width="20"
								height="20"
								fill={(row + col) % 2 === 0 ? "#fff" : "transparent"}
							/>
						))
					)}
				</svg>
			</div>

			{/* Speed lines - left side */}
			<div className="absolute left-0 top-1/4 opacity-10">
				<div className="w-32 h-0.5 bg-gradient-to-r from-orange-500 to-transparent mb-4" />
				<div className="w-24 h-0.5 bg-gradient-to-r from-orange-500 to-transparent mb-3 ml-4" />
				<div className="w-40 h-0.5 bg-gradient-to-r from-orange-500 to-transparent mb-4" />
				<div className="w-20 h-0.5 bg-gradient-to-r from-orange-500 to-transparent ml-8" />
			</div>

			{/* Speed lines - right side */}
			<div className="absolute right-0 top-2/3 opacity-10">
				<div className="w-32 h-0.5 bg-gradient-to-l from-orange-500 to-transparent mb-4" />
				<div className="w-24 h-0.5 bg-gradient-to-l from-orange-500 to-transparent mb-3 mr-4" />
				<div className="w-40 h-0.5 bg-gradient-to-l from-orange-500 to-transparent mb-4" />
				<div className="w-20 h-0.5 bg-gradient-to-l from-orange-500 to-transparent mr-8" />
			</div>

			{/* Car silhouette 1 - Racing sports car (top right) */}
			<div className="absolute top-[15%] right-[8%] opacity-[0.08]">
				<svg width="80" height="35" viewBox="0 0 80 35" fill="none">
					{/* Car body */}
					<path
						d="M10 25 L20 25 L25 18 L50 15 L65 18 L75 20 L75 28 L5 28 L5 25 Z"
						fill="#f97316"
					/>
					{/* Windows */}
					<path
						d="M28 18 L35 14 L48 14 L55 18 Z"
						fill="#1e293b"
					/>
					{/* Wheels */}
					<circle cx="18" cy="28" r="6" fill="#1e293b" />
					<circle cx="62" cy="28" r="6" fill="#1e293b" />
					<circle cx="18" cy="28" r="3" fill="#64748b" />
					<circle cx="62" cy="28" r="3" fill="#64748b" />
					{/* Speed lines */}
					<line x1="0" y1="20" x2="8" y2="20" stroke="#f97316" strokeWidth="1" opacity="0.6" />
					<line x1="0" y1="24" x2="5" y2="24" stroke="#f97316" strokeWidth="1" opacity="0.4" />
				</svg>
			</div>

			{/* Car silhouette 2 - Muscle car (middle left) */}
			<div className="absolute top-[45%] left-[3%] opacity-[0.06]">
				<svg width="90" height="40" viewBox="0 0 90 40" fill="none">
					{/* Car body */}
					<path
						d="M8 28 L15 28 L18 22 L30 18 L60 18 L72 22 L85 25 L85 32 L5 32 L5 28 Z"
						fill="#f97316"
					/>
					{/* Hood scoop */}
					<rect x="35" y="16" width="15" height="3" rx="1" fill="#ea580c" />
					{/* Windows */}
					<path
						d="M32 18 L40 12 L58 12 L66 18 Z"
						fill="#1e293b"
					/>
					{/* Wheels */}
					<circle cx="22" cy="32" r="7" fill="#1e293b" />
					<circle cx="70" cy="32" r="7" fill="#1e293b" />
					<circle cx="22" cy="32" r="4" fill="#64748b" />
					<circle cx="70" cy="32" r="4" fill="#64748b" />
				</svg>
			</div>

			{/* Car silhouette 3 - Tuner car (bottom right) */}
			<div className="absolute bottom-[20%] right-[5%] opacity-[0.05]">
				<svg width="85" height="38" viewBox="0 0 85 38" fill="none">
					{/* Car body - lower, sportier */}
					<path
						d="M5 26 L15 26 L20 20 L28 16 L58 16 L68 20 L78 24 L80 30 L3 30 L3 26 Z"
						fill="#f97316"
					/>
					{/* Spoiler */}
					<rect x="70" y="14" width="12" height="2" rx="1" fill="#ea580c" />
					<rect x="74" y="14" width="2" height="6" fill="#ea580c" />
					{/* Windows */}
					<path
						d="M30 16 L38 10 L55 10 L62 16 Z"
						fill="#1e293b"
					/>
					{/* Wheels */}
					<circle cx="20" cy="30" r="6" fill="#1e293b" />
					<circle cx="65" cy="30" r="6" fill="#1e293b" />
					<circle cx="20" cy="30" r="3" fill="#64748b" />
					<circle cx="65" cy="30" r="3" fill="#64748b" />
				</svg>
			</div>

			{/* Nitro flame effect - subtle */}
			<div className="absolute top-[30%] left-[15%] opacity-[0.08]">
				<svg width="40" height="20" viewBox="0 0 40 20" fill="none">
					<ellipse cx="8" cy="10" rx="8" ry="6" fill="#3b82f6" />
					<ellipse cx="20" cy="10" rx="12" ry="4" fill="#60a5fa" opacity="0.7" />
					<ellipse cx="35" cy="10" rx="5" ry="2" fill="#93c5fd" opacity="0.5" />
				</svg>
			</div>

			{/* Road/track marks */}
			<div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 opacity-[0.05]">
				<div className="flex gap-8">
					<div className="w-16 h-2 bg-white rounded" />
					<div className="w-16 h-2 bg-white rounded" />
					<div className="w-16 h-2 bg-white rounded" />
					<div className="w-16 h-2 bg-white rounded" />
					<div className="w-16 h-2 bg-white rounded" />
				</div>
			</div>

			{/* Tire marks / skid marks */}
			<div className="absolute top-[60%] right-[20%] opacity-[0.03]">
				<svg width="100" height="50" viewBox="0 0 100 50" fill="none">
					<path
						d="M5 45 Q30 40 50 25 Q70 10 95 5"
						stroke="#1e293b"
						strokeWidth="8"
						fill="none"
						strokeLinecap="round"
					/>
					<path
						d="M5 50 Q30 45 50 30 Q70 15 95 10"
						stroke="#1e293b"
						strokeWidth="6"
						fill="none"
						strokeLinecap="round"
					/>
				</svg>
			</div>

			{/* Glow effects */}
			<div className="absolute top-[20%] left-[30%] w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
			<div className="absolute bottom-[30%] right-[25%] w-48 h-48 bg-red-500/5 rounded-full blur-3xl" />
			<div className="absolute top-[50%] right-[40%] w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />

			{/* Tachometer/speedometer subtle outline */}
			<div className="absolute bottom-[5%] right-[3%] opacity-[0.04]">
				<svg width="100" height="60" viewBox="0 0 100 60" fill="none">
					<path
						d="M10 55 A40 40 0 0 1 90 55"
						stroke="#f97316"
						strokeWidth="3"
						fill="none"
					/>
					{/* Tick marks */}
					<line x1="15" y1="48" x2="20" y2="52" stroke="#f97316" strokeWidth="2" />
					<line x1="30" y1="35" x2="35" y2="40" stroke="#f97316" strokeWidth="2" />
					<line x1="50" y1="28" x2="50" y2="34" stroke="#f97316" strokeWidth="2" />
					<line x1="70" y1="35" x2="65" y2="40" stroke="#f97316" strokeWidth="2" />
					<line x1="85" y1="48" x2="80" y2="52" stroke="#f97316" strokeWidth="2" />
					{/* Needle */}
					<line x1="50" y1="55" x2="75" y2="35" stroke="#ef4444" strokeWidth="2" />
				</svg>
			</div>
		</div>
	);
};

export default RacingBackground;
