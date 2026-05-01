const PirateBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* Deep ocean gradient base */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0c1a2e] to-[#071520]" />

			{/* Subtle ocean texture overlay */}
			<div className="absolute inset-0 opacity-[0.04]">
				<svg width="100%" height="100%">
					<defs>
						<pattern
							id="waves"
							x="0"
							y="0"
							width="200"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M0 10 Q25 0 50 10 Q75 20 100 10 Q125 0 150 10 Q175 20 200 10"
								fill="none"
								stroke="#fbbf24"
								strokeWidth="1"
							/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#waves)" />
				</svg>
			</div>

			{/* Pirate ship silhouette */}
			<div className="absolute top-[12%] right-[6%] opacity-[0.07]">
				<svg
					width="120"
					height="100"
					viewBox="0 0 120 100"
					fill="none"
				>
					{/* Hull */}
					<path
						d="M15 70 Q20 85 60 85 Q100 85 105 70 L100 65 Q90 75 60 75 Q30 75 20 65 Z"
						fill="#fbbf24"
					/>
					{/* Mast */}
					<line
						x1="60"
						y1="20"
						x2="60"
						y2="75"
						stroke="#fbbf24"
						strokeWidth="3"
					/>
					{/* Sail */}
					<path
						d="M62 25 Q80 35 75 55 L62 55 Z"
						fill="#fbbf24"
						opacity="0.7"
					/>
					<path
						d="M58 25 Q40 35 45 55 L58 55 Z"
						fill="#fbbf24"
						opacity="0.5"
					/>
					{/* Crow's nest */}
					<rect
						x="55"
						y="18"
						width="10"
						height="4"
						rx="1"
						fill="#fbbf24"
					/>
					{/* Flag */}
					<path
						d="M60 18 L60 8 L75 13 L60 18"
						fill="#fbbf24"
						opacity="0.8"
					/>
					{/* Skull on flag */}
					<circle cx="67" cy="13" r="2" fill="#0a0f1e" />
				</svg>
			</div>

			{/* Compass rose */}
			<div className="absolute bottom-[8%] left-[5%] opacity-[0.05]">
				<svg
					width="100"
					height="100"
					viewBox="0 0 100 100"
					fill="none"
				>
					<circle
						cx="50"
						cy="50"
						r="45"
						stroke="#fbbf24"
						strokeWidth="1.5"
						fill="none"
					/>
					<circle
						cx="50"
						cy="50"
						r="35"
						stroke="#fbbf24"
						strokeWidth="0.5"
						fill="none"
					/>
					{/* N */}
					<polygon
						points="50,8 46,40 50,35 54,40"
						fill="#fbbf24"
					/>
					{/* S */}
					<polygon
						points="50,92 46,60 50,65 54,60"
						fill="#fbbf24"
						opacity="0.6"
					/>
					{/* E */}
					<polygon
						points="92,50 60,46 65,50 60,54"
						fill="#fbbf24"
						opacity="0.6"
					/>
					{/* W */}
					<polygon
						points="8,50 40,46 35,50 40,54"
						fill="#fbbf24"
						opacity="0.6"
					/>
				</svg>
			</div>

			{/* Treasure chest */}
			<div className="absolute top-[45%] left-[3%] opacity-[0.06]">
				<svg
					width="80"
					height="60"
					viewBox="0 0 80 60"
					fill="none"
				>
					{/* Chest body */}
					<rect
						x="10"
						y="25"
						width="60"
						height="30"
						rx="3"
						fill="#fbbf24"
					/>
					{/* Chest lid */}
					<path
						d="M10 25 Q40 5 70 25"
						fill="#d97706"
					/>
					{/* Lock */}
					<circle cx="40" cy="35" r="5" fill="#0a0f1e" />
					<rect
						x="38"
						y="35"
						width="4"
						height="8"
						rx="1"
						fill="#0a0f1e"
					/>
					{/* Gold coins spilling */}
					<circle cx="75" cy="45" r="4" fill="#fcd34d" opacity="0.5" />
					<circle cx="78" cy="52" r="3" fill="#fcd34d" opacity="0.4" />
					<circle cx="5" cy="50" r="3" fill="#fcd34d" opacity="0.3" />
				</svg>
			</div>

			{/* Skull and crossbones */}
			<div className="absolute top-[20%] left-[12%] opacity-[0.04]">
				<svg
					width="60"
					height="60"
					viewBox="0 0 60 60"
					fill="none"
				>
					{/* Skull */}
					<ellipse cx="30" cy="22" rx="14" ry="16" fill="#fbbf24" />
					{/* Eyes */}
					<ellipse cx="24" cy="20" rx="4" ry="5" fill="#0a0f1e" />
					<ellipse cx="36" cy="20" rx="4" ry="5" fill="#0a0f1e" />
					{/* Nose */}
					<path d="M28 27 L30 30 L32 27" fill="#0a0f1e" />
					{/* Jaw */}
					<path
						d="M20 32 Q30 40 40 32"
						stroke="#0a0f1e"
						strokeWidth="2"
						fill="none"
					/>
					{/* Crossbones */}
					<line
						x1="8"
						y1="42"
						x2="52"
						y2="58"
						stroke="#fbbf24"
						strokeWidth="4"
						strokeLinecap="round"
					/>
					<line
						x1="52"
						y1="42"
						x2="8"
						y2="58"
						stroke="#fbbf24"
						strokeWidth="4"
						strokeLinecap="round"
					/>
				</svg>
			</div>

			{/* Anchor */}
			<div className="absolute bottom-[15%] right-[8%] opacity-[0.05]">
				<svg
					width="60"
					height="80"
					viewBox="0 0 60 80"
					fill="none"
				>
					{/* Ring */}
					<circle
						cx="30"
						cy="10"
						r="8"
						stroke="#fbbf24"
						strokeWidth="3"
						fill="none"
					/>
					{/* Shaft */}
					<line
						x1="30"
						y1="18"
						x2="30"
						y2="65"
						stroke="#fbbf24"
						strokeWidth="3"
					/>
					{/* Cross bar */}
					<line
						x1="15"
						y1="30"
						x2="45"
						y2="30"
						stroke="#fbbf24"
						strokeWidth="3"
					/>
					{/* Flukes */}
					<path
						d="M30 65 Q15 60 8 50"
						stroke="#fbbf24"
						strokeWidth="3"
						fill="none"
						strokeLinecap="round"
					/>
					<path
						d="M30 65 Q45 60 52 50"
						stroke="#fbbf24"
						strokeWidth="3"
						fill="none"
						strokeLinecap="round"
					/>
					{/* Fluke tips */}
					<path
						d="M8 50 L5 55 L12 52"
						fill="#fbbf24"
					/>
					<path
						d="M52 50 L55 55 L48 52"
						fill="#fbbf24"
					/>
				</svg>
			</div>

			{/* Sword */}
			<div className="absolute top-[60%] right-[15%] opacity-[0.04] transform rotate-45">
				<svg
					width="20"
					height="100"
					viewBox="0 0 20 100"
					fill="none"
				>
					{/* Blade */}
					<path
						d="M10 0 L13 60 L10 65 L7 60 Z"
						fill="#fbbf24"
					/>
					{/* Guard */}
					<rect
						x="2"
						y="65"
						width="16"
						height="4"
						rx="2"
						fill="#d97706"
					/>
					{/* Handle */}
					<rect
						x="7"
						y="69"
						width="6"
						height="20"
						rx="2"
						fill="#92400e"
					/>
					{/* Pommel */}
					<circle cx="10" cy="93" r="4" fill="#d97706" />
				</svg>
			</div>

			{/* Ocean bubbles */}
			<div className="absolute bottom-[25%] left-[25%] opacity-[0.06]">
				<svg
					width="40"
					height="60"
					viewBox="0 0 40 60"
					fill="none"
				>
					<circle
						cx="10"
						cy="50"
						r="6"
						stroke="#06b6d4"
						strokeWidth="1"
						fill="none"
					/>
					<circle
						cx="25"
						cy="35"
						r="4"
						stroke="#06b6d4"
						strokeWidth="1"
						fill="none"
					/>
					<circle
						cx="15"
						cy="20"
						r="3"
						stroke="#06b6d4"
						strokeWidth="1"
						fill="none"
					/>
					<circle
						cx="30"
						cy="10"
						r="2"
						stroke="#06b6d4"
						strokeWidth="1"
						fill="none"
					/>
				</svg>
			</div>

			{/* Map dotted trail */}
			<div className="absolute top-[35%] left-[40%] opacity-[0.03]">
				<svg
					width="200"
					height="100"
					viewBox="0 0 200 100"
					fill="none"
				>
					<path
						d="M0 50 Q50 20 100 50 Q150 80 200 50"
						stroke="#fbbf24"
						strokeWidth="2"
						strokeDasharray="8 8"
						fill="none"
					/>
					{/* X marks the spot */}
					<line
						x1="190"
						y1="40"
						x2="210"
						y2="60"
						stroke="#ef4444"
						strokeWidth="3"
					/>
					<line
						x1="210"
						y1="40"
						x2="190"
						y2="60"
						stroke="#ef4444"
						strokeWidth="3"
					/>
				</svg>
			</div>

			{/* Glow effects */}
			<div className="absolute top-[20%] left-[30%] w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
			<div className="absolute bottom-[30%] right-[25%] w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
			<div className="absolute top-[50%] right-[40%] w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl" />
			<div className="absolute bottom-[10%] left-[50%] w-56 h-56 bg-amber-600/4 rounded-full blur-3xl" />

			{/* Coral reef silhouette */}
			<div className="absolute bottom-0 left-0 right-0 opacity-[0.04]">
				<svg
					width="100%"
					height="80"
					viewBox="0 0 1200 80"
					preserveAspectRatio="none"
					fill="none"
				>
					<path
						d="M0 80 L0 60 Q50 40 100 55 Q150 70 200 50 Q250 30 300 45 Q350 60 400 40 Q450 20 500 35 Q550 50 600 30 Q650 10 700 25 Q750 40 800 20 Q850 0 900 15 Q950 30 1000 20 Q1050 10 1100 30 Q1150 50 1200 40 L1200 80 Z"
						fill="#fbbf24"
					/>
					{/* Coral branches */}
					<path
						d="M200 50 Q210 30 220 50"
						stroke="#f59e0b"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M500 35 Q510 15 520 35"
						stroke="#f59e0b"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M800 20 Q810 0 820 20"
						stroke="#f59e0b"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M350 45 L355 25 L360 45"
						stroke="#f59e0b"
						strokeWidth="2"
						fill="none"
					/>
					<path
						d="M650 25 L655 5 L660 25"
						stroke="#f59e0b"
						strokeWidth="2"
						fill="none"
					/>
					<path
						d="M950 15 L955 -5 L960 15"
						stroke="#f59e0b"
						strokeWidth="2"
						fill="none"
					/>
				</svg>
			</div>

			{/* Kraken tentacle hint */}
			<div className="absolute top-[70%] right-0 opacity-[0.03]">
				<svg
					width="60"
					height="120"
					viewBox="0 0 60 120"
					fill="none"
				>
					<path
						d="M50 0 Q40 30 55 50 Q30 70 45 90 Q35 110 50 120"
						stroke="#06b6d4"
						strokeWidth="8"
						fill="none"
						strokeLinecap="round"
					/>
					<circle cx="50" cy="0" r="4" fill="#06b6d4" />
				</svg>
			</div>
		</div>
	);
};

export default PirateBackground;
