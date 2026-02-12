const CatchMeBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* Dark gradient base - vintage 60s tones */}
			<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

			{/* Paper/vintage texture overlay */}
			<div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

			{/* Pan Am-style airplane - top right */}
			<div className="absolute top-[8%] right-[8%] opacity-[0.06]">
				<svg width="140" height="55" viewBox="0 0 140 55" fill="none">
					{/* Fuselage */}
					<ellipse cx="70" cy="28" rx="60" ry="10" fill="#38bdf8" />
					{/* Wings */}
					<path d="M45 28 L30 8 L80 8 L65 28" fill="#38bdf8" opacity="0.7" />
					<path d="M45 28 L30 48 L80 48 L65 28" fill="#38bdf8" opacity="0.7" />
					{/* Tail */}
					<path d="M120 28 L135 10 L140 10 L130 28" fill="#38bdf8" />
					<path d="M120 28 L135 46 L140 46 L130 28" fill="#38bdf8" opacity="0.5" />
					{/* Cockpit */}
					<ellipse cx="15" cy="28" rx="8" ry="7" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
					{/* Contrail */}
					<line x1="130" y1="28" x2="170" y2="28" stroke="#38bdf8" strokeWidth="1.5" opacity="0.3" strokeDasharray="6 4" />
				</svg>
			</div>

			{/* Fake check / bank note - top left */}
			<div className="absolute top-[18%] left-[5%] opacity-[0.07] rotate-[-8deg]">
				<svg width="160" height="70" viewBox="0 0 160 70" fill="none">
					<rect x="2" y="2" width="156" height="66" rx="3" stroke="#fbbf24" strokeWidth="2" fill="none" />
					{/* Check pattern border */}
					<rect x="6" y="6" width="148" height="58" rx="2" stroke="#fbbf24" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
					{/* Bank name */}
					<rect x="15" y="12" width="60" height="6" fill="#fbbf24" opacity="0.4" />
					{/* Pay to line */}
					<text x="15" y="30" fill="#fbbf24" fontSize="5" opacity="0.5">PAY TO THE ORDER OF</text>
					<line x1="15" y1="38" x2="120" y2="38" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />
					{/* Amount box */}
					<rect x="125" y="28" width="25" height="14" stroke="#fbbf24" strokeWidth="1" fill="none" opacity="0.4" />
					<text x="130" y="38" fill="#fbbf24" fontSize="7" opacity="0.5">$$$</text>
					{/* Signature line */}
					<line x1="80" y1="55" x2="145" y2="55" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />
					{/* MICR numbers at bottom */}
					<text x="15" y="62" fill="#fbbf24" fontSize="5" opacity="0.3" fontFamily="monospace">⑆012345⑆ ⑈67890⑈ 1234</text>
				</svg>
			</div>

			{/* Wanted poster style - middle right */}
			<div className="absolute top-[50%] right-[5%] opacity-[0.05] rotate-[3deg]">
				<svg width="100" height="120" viewBox="0 0 100 120" fill="none">
					<rect x="2" y="2" width="96" height="116" stroke="#fbbf24" strokeWidth="2" fill="none" />
					<text x="50" y="20" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">WANTED</text>
					{/* Portrait placeholder */}
					<rect x="25" y="28" width="50" height="50" fill="#fbbf24" opacity="0.15" />
					<text x="50" y="55" textAnchor="middle" fill="#fbbf24" fontSize="6" opacity="0.4">?</text>
					<text x="50" y="92" textAnchor="middle" fill="#fbbf24" fontSize="6">FOR AUTOMATING</text>
					<text x="50" y="102" textAnchor="middle" fill="#fbbf24" fontSize="6">EVERYTHING</text>
					<text x="50" y="114" textAnchor="middle" fill="#fbbf24" fontSize="5" opacity="0.5">REWARD: $500</text>
				</svg>
			</div>

			{/* Pilot wings badge - middle left */}
			<div className="absolute top-[42%] left-[4%] opacity-[0.06]">
				<svg width="100" height="40" viewBox="0 0 100 40" fill="none">
					{/* Wings */}
					<path d="M50 20 L5 15 L5 20 L50 25" fill="#38bdf8" opacity="0.6" />
					<path d="M50 20 L95 15 L95 20 L50 25" fill="#38bdf8" opacity="0.6" />
					{/* Center shield */}
					<circle cx="50" cy="20" r="10" stroke="#38bdf8" strokeWidth="2" fill="none" />
					<text x="50" y="24" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">A</text>
				</svg>
			</div>

			{/* Globe with flight path - center background */}
			<div className="absolute top-[28%] left-1/2 -translate-x-1/2 opacity-[0.03]">
				<svg width="400" height="400" viewBox="0 0 400 400" fill="none">
					<circle cx="200" cy="200" r="180" stroke="#38bdf8" strokeWidth="2" fill="none" />
					<ellipse cx="200" cy="200" rx="180" ry="60" stroke="#38bdf8" strokeWidth="1" fill="none" />
					<ellipse cx="200" cy="200" rx="180" ry="120" stroke="#38bdf8" strokeWidth="1" fill="none" />
					<ellipse cx="200" cy="200" rx="60" ry="180" stroke="#38bdf8" strokeWidth="1" fill="none" />
					<ellipse cx="200" cy="200" rx="120" ry="180" stroke="#38bdf8" strokeWidth="1" fill="none" />
					<line x1="200" y1="20" x2="200" y2="380" stroke="#38bdf8" strokeWidth="1" />
					<line x1="20" y1="200" x2="380" y2="200" stroke="#38bdf8" strokeWidth="1" />
				</svg>
			</div>

			{/* Dotted flight path with cities */}
			<div className="absolute top-[22%] left-[15%] opacity-[0.08]">
				<svg width="350" height="100" viewBox="0 0 350 100" fill="none">
					<path
						d="M0 75 Q80 10 175 50 Q270 90 350 25"
						stroke="#fbbf24"
						strokeWidth="2"
						fill="none"
						strokeDasharray="8 5"
					/>
					{/* City markers */}
					<circle cx="0" cy="75" r="4" fill="#fbbf24" />
					<circle cx="175" cy="50" r="4" fill="#fbbf24" />
					<circle cx="350" cy="25" r="4" fill="#fbbf24" />
				</svg>
			</div>

			{/* Boarding pass - bottom left */}
			<div className="absolute bottom-[18%] left-[3%] opacity-[0.04] rotate-[-5deg]">
				<svg width="160" height="65" viewBox="0 0 160 65" fill="none">
					<rect x="0" y="0" width="160" height="65" rx="3" stroke="#38bdf8" strokeWidth="2" fill="none" />
					{/* Tear line */}
					<line x1="120" y1="0" x2="120" y2="65" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 2" />
					{/* Airline text */}
					<rect x="8" y="5" width="45" height="8" fill="#38bdf8" opacity="0.3" />
					{/* FROM / TO */}
					<text x="10" y="25" fill="#38bdf8" fontSize="5" opacity="0.5">FROM</text>
					<text x="10" y="35" fill="#38bdf8" fontSize="9" fontWeight="bold" opacity="0.6">BOR</text>
					<text x="60" y="25" fill="#38bdf8" fontSize="5" opacity="0.5">TO</text>
					<text x="60" y="35" fill="#38bdf8" fontSize="9" fontWeight="bold" opacity="0.6">FRE</text>
					{/* Plane icon between */}
					<path d="M45 30 L52 28 L55 30 L52 32 L45 30" fill="#38bdf8" opacity="0.5" />
					{/* Seat / Gate */}
					<text x="10" y="50" fill="#38bdf8" fontSize="4" opacity="0.4">SEAT 1A</text>
					<text x="10" y="58" fill="#38bdf8" fontSize="4" opacity="0.4">GATE 42</text>
					{/* Barcode on stub */}
					<g transform="translate(125, 15)">
						{[...Array(10)].map((_, i) => (
							<rect
								key={i}
								x={i * 3}
								y="0"
								width={i % 2 === 0 ? 2 : 1}
								height="30"
								fill="#38bdf8"
								opacity="0.3"
							/>
						))}
					</g>
				</svg>
			</div>

			{/* Passport stamps */}
			<div className="absolute bottom-[12%] right-[15%] opacity-[0.06] rotate-[12deg]">
				<svg width="80" height="80" viewBox="0 0 80 80" fill="none">
					<circle cx="40" cy="40" r="36" stroke="#fbbf24" strokeWidth="2.5" fill="none" />
					<circle cx="40" cy="40" r="30" stroke="#fbbf24" strokeWidth="0.8" fill="none" />
					<text x="40" y="30" textAnchor="middle" fill="#fbbf24" fontSize="6" fontWeight="bold">AUTOMATED</text>
					<text x="40" y="42" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">FEB 26</text>
					<text x="40" y="55" textAnchor="middle" fill="#fbbf24" fontSize="5">HACKATHON</text>
				</svg>
			</div>

			{/* Typewriter keys aesthetic - bottom center */}
			<div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 opacity-[0.04]">
				<div className="flex gap-3">
					{['A', 'U', 'T', 'O', 'M', 'A', 'T', 'E'].map((letter, i) => (
						<div key={i} className="w-8 h-8 rounded-full border-2 border-amber-400 flex items-center justify-center">
							<span className="text-amber-400 font-mono text-sm font-bold">{letter}</span>
						</div>
					))}
				</div>
			</div>

			{/* Glow effects */}
			<div className="absolute top-[20%] left-[30%] w-64 h-64 bg-sky-500/5 rounded-full blur-3xl" />
			<div className="absolute bottom-[30%] right-[25%] w-48 h-48 bg-amber-500/5 rounded-full blur-3xl" />
			<div className="absolute top-[50%] right-[40%] w-32 h-32 bg-sky-400/5 rounded-full blur-3xl" />

			{/* Vintage film strip edges */}
			<div className="absolute left-0 top-0 bottom-0 w-4 opacity-[0.03]">
				{[...Array(30)].map((_, i) => (
					<div key={i} className="w-3 h-4 bg-amber-400 rounded-sm mb-4 ml-0.5" />
				))}
			</div>
			<div className="absolute right-0 top-0 bottom-0 w-4 opacity-[0.03]">
				{[...Array(30)].map((_, i) => (
					<div key={i} className="w-3 h-4 bg-amber-400 rounded-sm mb-4 ml-0.5" />
				))}
			</div>
		</div>
	);
};

export default CatchMeBackground;
