const CatchMeBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* Dark gradient base - vintage blue tones */}
			<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

			{/* Paper texture overlay */}
			<div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

			{/* Airplane silhouette - top right */}
			<div className="absolute top-[10%] right-[10%] opacity-[0.06]">
				<svg width="120" height="60" viewBox="0 0 120 60" fill="none">
					{/* Airplane body */}
					<path
						d="M10 30 L40 30 L50 20 L90 30 L100 25 L110 30 L100 35 L90 30 L50 40 L40 30 L10 30"
						fill="#38bdf8"
					/>
					{/* Wings */}
					<path
						d="M50 30 L70 15 L75 15 L60 30"
						fill="#38bdf8"
					/>
					<path
						d="M50 30 L70 45 L75 45 L60 30"
						fill="#38bdf8"
					/>
					{/* Tail */}
					<path
						d="M95 30 L100 20 L105 20 L100 30"
						fill="#38bdf8"
					/>
					{/* Contrail */}
					<line x1="0" y1="30" x2="10" y2="30" stroke="#38bdf8" strokeWidth="2" opacity="0.3" strokeDasharray="4 4" />
				</svg>
			</div>

			{/* Passport stamp - top left */}
			<div className="absolute top-[20%] left-[8%] opacity-[0.08] rotate-[-15deg]">
				<svg width="100" height="100" viewBox="0 0 100 100" fill="none">
					<circle cx="50" cy="50" r="45" stroke="#fbbf24" strokeWidth="3" fill="none" />
					<circle cx="50" cy="50" r="38" stroke="#fbbf24" strokeWidth="1" fill="none" />
					<text x="50" y="35" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold">APPROVED</text>
					<text x="50" y="55" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">AUTOMATE</text>
					<text x="50" y="70" textAnchor="middle" fill="#fbbf24" fontSize="6">FEB 2026</text>
					<line x1="20" y1="80" x2="80" y2="80" stroke="#fbbf24" strokeWidth="1" />
				</svg>
			</div>

			{/* Another passport stamp - bottom right */}
			<div className="absolute bottom-[15%] right-[12%] opacity-[0.06] rotate-[10deg]">
				<svg width="80" height="80" viewBox="0 0 80 80" fill="none">
					<rect x="5" y="5" width="70" height="70" stroke="#38bdf8" strokeWidth="2" fill="none" />
					<rect x="10" y="10" width="60" height="60" stroke="#38bdf8" strokeWidth="1" fill="none" />
					<text x="40" y="35" textAnchor="middle" fill="#38bdf8" fontSize="7" fontWeight="bold">MISSION</text>
					<text x="40" y="50" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">ACCEPTED</text>
				</svg>
			</div>

			{/* ID Card silhouette - middle left */}
			<div className="absolute top-[45%] left-[3%] opacity-[0.05]">
				<svg width="100" height="70" viewBox="0 0 100 70" fill="none">
					<rect x="2" y="2" width="96" height="66" rx="4" stroke="#fbbf24" strokeWidth="2" fill="none" />
					{/* Photo placeholder */}
					<rect x="8" y="12" width="25" height="30" fill="#fbbf24" opacity="0.3" />
					{/* Text lines */}
					<line x1="40" y1="15" x2="90" y2="15" stroke="#fbbf24" strokeWidth="2" />
					<line x1="40" y1="25" x2="85" y2="25" stroke="#fbbf24" strokeWidth="2" />
					<line x1="40" y1="35" x2="80" y2="35" stroke="#fbbf24" strokeWidth="2" />
					{/* Barcode */}
					<g transform="translate(10, 50)">
						{[...Array(15)].map((_, i) => (
							<rect
								key={i}
								x={i * 5}
								y="0"
								width={i % 3 === 0 ? 3 : 2}
								height="12"
								fill="#fbbf24"
							/>
						))}
					</g>
				</svg>
			</div>

			{/* Globe/World map outline - center background */}
			<div className="absolute top-[30%] left-1/2 -translate-x-1/2 opacity-[0.03]">
				<svg width="400" height="400" viewBox="0 0 400 400" fill="none">
					<circle cx="200" cy="200" r="180" stroke="#38bdf8" strokeWidth="2" fill="none" />
					{/* Latitude lines */}
					<ellipse cx="200" cy="200" rx="180" ry="60" stroke="#38bdf8" strokeWidth="1" fill="none" />
					<ellipse cx="200" cy="200" rx="180" ry="120" stroke="#38bdf8" strokeWidth="1" fill="none" />
					{/* Longitude lines */}
					<ellipse cx="200" cy="200" rx="60" ry="180" stroke="#38bdf8" strokeWidth="1" fill="none" />
					<ellipse cx="200" cy="200" rx="120" ry="180" stroke="#38bdf8" strokeWidth="1" fill="none" />
					<line x1="200" y1="20" x2="200" y2="380" stroke="#38bdf8" strokeWidth="1" />
					<line x1="20" y1="200" x2="380" y2="200" stroke="#38bdf8" strokeWidth="1" />
				</svg>
			</div>

			{/* Flight path dotted line */}
			<div className="absolute top-[25%] left-[20%] opacity-[0.08]">
				<svg width="300" height="100" viewBox="0 0 300 100" fill="none">
					<path
						d="M0 80 Q75 20 150 50 Q225 80 300 30"
						stroke="#fbbf24"
						strokeWidth="2"
						fill="none"
						strokeDasharray="8 4"
					/>
					{/* Location markers */}
					<circle cx="0" cy="80" r="4" fill="#fbbf24" />
					<circle cx="150" cy="50" r="4" fill="#fbbf24" />
					<circle cx="300" cy="30" r="4" fill="#fbbf24" />
				</svg>
			</div>

			{/* Boarding pass element - bottom left */}
			<div className="absolute bottom-[20%] left-[5%] opacity-[0.04] rotate-[-5deg]">
				<svg width="150" height="60" viewBox="0 0 150 60" fill="none">
					<rect x="0" y="0" width="150" height="60" rx="2" stroke="#38bdf8" strokeWidth="2" fill="none" />
					{/* Perforation line */}
					<line x1="110" y1="0" x2="110" y2="60" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 2" />
					{/* Text placeholders */}
					<rect x="5" y="5" width="40" height="8" fill="#38bdf8" opacity="0.3" />
					<rect x="5" y="18" width="60" height="6" fill="#38bdf8" opacity="0.2" />
					<rect x="5" y="28" width="50" height="6" fill="#38bdf8" opacity="0.2" />
					{/* Small plane icon */}
					<path d="M120 20 L130 25 L140 20 L130 30 L120 20" fill="#38bdf8" opacity="0.5" />
				</svg>
			</div>

			{/* Checkmark / Verified stamp */}
			<div className="absolute top-[60%] right-[20%] opacity-[0.05]">
				<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
					<circle cx="30" cy="30" r="28" stroke="#22c55e" strokeWidth="3" fill="none" />
					<path d="M18 30 L26 38 L42 22" stroke="#22c55e" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</div>

			{/* Robot/AI Agent icon - representing automation */}
			<div className="absolute bottom-[35%] right-[8%] opacity-[0.06]">
				<svg width="70" height="80" viewBox="0 0 70 80" fill="none">
					{/* Head */}
					<rect x="15" y="15" width="40" height="35" rx="5" stroke="#38bdf8" strokeWidth="2" fill="none" />
					{/* Eyes */}
					<circle cx="27" cy="30" r="5" fill="#38bdf8" />
					<circle cx="43" cy="30" r="5" fill="#38bdf8" />
					{/* Antenna */}
					<line x1="35" y1="15" x2="35" y2="5" stroke="#38bdf8" strokeWidth="2" />
					<circle cx="35" cy="5" r="3" fill="#fbbf24" />
					{/* Body */}
					<rect x="20" y="50" width="30" height="25" rx="3" stroke="#38bdf8" strokeWidth="2" fill="none" />
					{/* Arms */}
					<line x1="20" y1="60" x2="10" y2="65" stroke="#38bdf8" strokeWidth="2" />
					<line x1="50" y1="60" x2="60" y2="65" stroke="#38bdf8" strokeWidth="2" />
				</svg>
			</div>

			{/* Glow effects */}
			<div className="absolute top-[20%] left-[30%] w-64 h-64 bg-sky-500/5 rounded-full blur-3xl" />
			<div className="absolute bottom-[30%] right-[25%] w-48 h-48 bg-amber-500/5 rounded-full blur-3xl" />
			<div className="absolute top-[50%] right-[40%] w-32 h-32 bg-sky-400/5 rounded-full blur-3xl" />

			{/* Vintage film grain effect */}
			<div className="absolute inset-0 opacity-[0.015]">
				<div className="w-full h-full bg-gradient-to-br from-amber-100/20 via-transparent to-sky-100/20" />
			</div>
		</div>
	);
};

export default CatchMeBackground;
