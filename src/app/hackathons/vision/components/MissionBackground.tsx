const MissionBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* Circuit board pattern overlay */}
			<div className="absolute inset-0 opacity-5">
				<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<pattern
							id="circuit"
							x="0"
							y="0"
							width="100"
							height="100"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M10 10 L50 10 L50 30 L90 30"
								stroke="#06B6D4"
								strokeWidth="0.5"
								fill="none"
							/>
							<path
								d="M10 50 L30 50 L30 70 L70 70 L70 90"
								stroke="#06B6D4"
								strokeWidth="0.5"
								fill="none"
							/>
							<circle cx="10" cy="10" r="2" fill="#06B6D4" />
							<circle cx="50" cy="30" r="2" fill="#06B6D4" />
							<circle cx="90" cy="30" r="2" fill="#06B6D4" />
							<circle cx="30" cy="70" r="2" fill="#06B6D4" />
							<circle cx="70" cy="90" r="2" fill="#06B6D4" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#circuit)" />
				</svg>
			</div>

			{/* Scanning line effect */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30 animate-scan" />
			</div>

			{/* Surveillance camera icons scattered */}
			{/* Camera 1 - Top left */}
			<div className="absolute top-[10%] left-[5%] opacity-10">
				<svg
					width="60"
					height="40"
					viewBox="0 0 60 40"
					fill="none"
					className="transform -rotate-12"
				>
					<rect x="5" y="15" width="30" height="20" rx="3" fill="#06B6D4" />
					<circle cx="20" cy="25" r="6" fill="#0E7490" />
					<circle cx="20" cy="25" r="3" fill="#06B6D4" />
					<rect x="35" y="20" width="20" height="10" rx="2" fill="#0E7490" />
					<rect x="0" y="10" width="5" height="25" rx="1" fill="#06B6D4" />
				</svg>
			</div>

			{/* Camera 2 - Top right */}
			<div className="absolute top-[15%] right-[8%] opacity-10">
				<svg
					width="50"
					height="35"
					viewBox="0 0 60 40"
					fill="none"
					className="transform rotate-12"
				>
					<rect x="5" y="15" width="30" height="20" rx="3" fill="#06B6D4" />
					<circle cx="20" cy="25" r="6" fill="#0E7490" />
					<circle cx="20" cy="25" r="3" fill="#06B6D4" />
					<rect x="35" y="20" width="20" height="10" rx="2" fill="#0E7490" />
				</svg>
			</div>

			{/* Camera 3 - Bottom left */}
			<div className="absolute bottom-[20%] left-[10%] opacity-10">
				<svg width="45" height="30" viewBox="0 0 60 40" fill="none">
					<rect x="5" y="15" width="30" height="20" rx="3" fill="#06B6D4" />
					<circle cx="20" cy="25" r="6" fill="#0E7490" />
					<circle cx="20" cy="25" r="3" fill="#06B6D4" />
				</svg>
			</div>

			{/* Radar/scanning circles */}
			<div className="absolute top-[40%] right-[15%] opacity-15">
				<div className="relative w-32 h-32">
					<div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-ping" />
					<div className="absolute inset-4 border border-cyan-500/20 rounded-full" />
					<div className="absolute inset-8 border border-cyan-500/10 rounded-full" />
					<div className="absolute inset-[3.5rem] bg-cyan-500/20 rounded-full" />
				</div>
			</div>

			{/* Data streams */}
			<div className="absolute top-[60%] left-[80%] opacity-20 text-cyan-500 font-mono text-xs leading-relaxed">
				<div className="animate-pulse">01001010</div>
				<div className="animate-pulse delay-100">10110101</div>
				<div className="animate-pulse delay-200">01101001</div>
				<div className="animate-pulse delay-300">11010010</div>
			</div>

			<div className="absolute top-[25%] left-[2%] opacity-15 text-cyan-500 font-mono text-xs leading-relaxed">
				<div className="animate-pulse">AGENT://</div>
				<div className="animate-pulse delay-100">PROTOCOL</div>
				<div className="animate-pulse delay-200">ACTIVE</div>
			</div>

			{/* Crosshair targets */}
			<div className="absolute top-[70%] right-[25%] opacity-10">
				<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
					<circle
						cx="20"
						cy="20"
						r="15"
						stroke="#06B6D4"
						strokeWidth="1"
						fill="none"
					/>
					<circle
						cx="20"
						cy="20"
						r="8"
						stroke="#06B6D4"
						strokeWidth="1"
						fill="none"
					/>
					<line x1="20" y1="0" x2="20" y2="12" stroke="#06B6D4" strokeWidth="1" />
					<line x1="20" y1="28" x2="20" y2="40" stroke="#06B6D4" strokeWidth="1" />
					<line x1="0" y1="20" x2="12" y2="20" stroke="#06B6D4" strokeWidth="1" />
					<line x1="28" y1="20" x2="40" y2="20" stroke="#06B6D4" strokeWidth="1" />
				</svg>
			</div>

			<div className="absolute top-[30%] left-[70%] opacity-10">
				<svg width="30" height="30" viewBox="0 0 40 40" fill="none">
					<circle
						cx="20"
						cy="20"
						r="15"
						stroke="#EF4444"
						strokeWidth="1"
						fill="none"
					/>
					<circle
						cx="20"
						cy="20"
						r="8"
						stroke="#EF4444"
						strokeWidth="1"
						fill="none"
					/>
					<line x1="20" y1="0" x2="20" y2="12" stroke="#EF4444" strokeWidth="1" />
					<line x1="20" y1="28" x2="20" y2="40" stroke="#EF4444" strokeWidth="1" />
					<line x1="0" y1="20" x2="12" y2="20" stroke="#EF4444" strokeWidth="1" />
					<line x1="28" y1="20" x2="40" y2="20" stroke="#EF4444" strokeWidth="1" />
				</svg>
			</div>

			{/* World map grid dots (simplified) */}
			<div className="absolute bottom-[10%] right-[5%] opacity-10">
				<div className="grid grid-cols-8 gap-2">
					{Array.from({ length: 32 }).map((_, i) => (
						<div
							key={i}
							className={`w-1 h-1 rounded-full ${
								Math.random() > 0.5 ? "bg-cyan-500" : "bg-transparent"
							}`}
						/>
					))}
				</div>
			</div>

			{/* Glowing orbs */}
			<div className="absolute top-[50%] left-[40%] w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
			<div className="absolute bottom-[40%] right-[30%] w-48 h-48 bg-red-500/3 rounded-full blur-3xl" />
			<div className="absolute top-[20%] left-[60%] w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl" />

			{/* Corner brackets (like camera viewfinder) */}
			<div className="absolute top-8 left-8 opacity-20">
				<div className="w-8 h-8 border-l-2 border-t-2 border-cyan-500" />
			</div>
			<div className="absolute top-8 right-8 opacity-20">
				<div className="w-8 h-8 border-r-2 border-t-2 border-cyan-500" />
			</div>
			<div className="absolute bottom-8 left-8 opacity-20">
				<div className="w-8 h-8 border-l-2 border-b-2 border-cyan-500" />
			</div>
			<div className="absolute bottom-8 right-8 opacity-20">
				<div className="w-8 h-8 border-r-2 border-b-2 border-cyan-500" />
			</div>
		</div>
	);
};

export default MissionBackground;
