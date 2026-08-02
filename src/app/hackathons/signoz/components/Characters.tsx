// ─── "Men in Black" agency props (original stylized SVG art) ──────────────────

type SvgProps = { className?: string };

// The neuralyzer — the agency's memory-wiping device (here it reveals, not wipes)
export const Neuralyzer = ({ className }: SvgProps) => (
	<svg
		viewBox="0 0 160 70"
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Neuralyzer device"
	>
		{/* barrel */}
		<rect x="30" y="26" width="96" height="18" rx="9" fill="#c7ccd6" />
		<rect x="30" y="26" width="96" height="9" rx="4.5" fill="#eef1f6" />
		{/* rings */}
		<rect x="48" y="22" width="6" height="26" rx="2" fill="#62687c" />
		<rect x="66" y="22" width="6" height="26" rx="2" fill="#62687c" />
		<rect x="84" y="22" width="6" height="26" rx="2" fill="#62687c" />
		{/* emitter glow */}
		<circle cx="126" cy="35" r="14" fill="#2be38b" opacity="0.25" />
		<circle cx="126" cy="35" r="8" fill="#2be38b" />
		<circle cx="126" cy="35" r="3.5" fill="#eafff4" />
		{/* end cap */}
		<rect x="20" y="29" width="12" height="12" rx="3" fill="#3c4152" />
	</svg>
);

// Agent in black suit + sunglasses (head + shoulders)
export const AgentCartoon = ({ className }: SvgProps) => (
	<svg
		viewBox="0 0 200 240"
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Cartoon of an agent in a black suit and sunglasses"
	>
		{/* suit shoulders */}
		<path
			d="M30 240 L30 196 Q30 168 70 160 L130 160 Q170 168 170 196 L170 240 Z"
			fill="#16181d"
		/>
		{/* shirt */}
		<path d="M84 162 L100 240 L116 162 Z" fill="#f5f5f5" />
		{/* lapels */}
		<path d="M84 162 L100 200 L82 196 Z" fill="#0b0c0e" />
		<path d="M116 162 L100 200 L118 196 Z" fill="#0b0c0e" />
		{/* tie */}
		<path d="M100 168 L94 182 L100 230 L106 182 Z" fill="#e5502a" />
		{/* neck */}
		<rect x="88" y="138" width="24" height="28" rx="7" fill="#d8a87f" />
		{/* head */}
		<circle cx="100" cy="96" r="48" fill="#e8b98c" />
		{/* ears */}
		<circle cx="54" cy="98" r="9" fill="#d8a87f" />
		<circle cx="146" cy="98" r="9" fill="#d8a87f" />
		{/* hair */}
		<path
			d="M54 80 Q56 46 100 46 Q144 46 146 80 Q132 64 100 64 Q68 64 54 80Z"
			fill="#1c150f"
		/>
		{/* sunglasses */}
		<rect x="62" y="88" width="32" height="20" rx="7" fill="#0b0c0e" />
		<rect x="106" y="88" width="32" height="20" rx="7" fill="#0b0c0e" />
		<rect x="94" y="94" width="12" height="5" fill="#0b0c0e" />
		<rect
			x="66"
			y="92"
			width="12"
			height="5"
			rx="2"
			fill="#2be38b"
			opacity="0.55"
		/>
		{/* nose + mouth */}
		<path
			d="M98 110 Q92 122 102 124"
			fill="none"
			stroke="#c98f63"
			strokeWidth="3"
		/>
		<path
			d="M88 132 Q100 140 112 132"
			fill="none"
			stroke="#9c6a45"
			strokeWidth="3"
		/>
		{/* earpiece */}
		<path
			d="M146 100 Q156 110 152 132"
			fill="none"
			stroke="#62687c"
			strokeWidth="3"
		/>
		<circle cx="152" cy="98" r="4" fill="#3c4152" />
	</svg>
);

// Little alien (the scum of the universe SigNoz helps you observe)
export const Alien = ({ className }: SvgProps) => (
	<svg
		viewBox="0 0 140 170"
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Cartoon alien"
	>
		{/* body */}
		<ellipse cx="70" cy="128" rx="34" ry="32" fill="#3fae6e" />
		{/* head */}
		<ellipse cx="70" cy="70" rx="46" ry="54" fill="#52c483" />
		<ellipse cx="70" cy="64" rx="38" ry="46" fill="#62d693" />
		{/* big eyes */}
		<ellipse
			cx="52"
			cy="70"
			rx="13"
			ry="19"
			fill="#0b0c0e"
			transform="rotate(-12 52 70)"
		/>
		<ellipse
			cx="88"
			cy="70"
			rx="13"
			ry="19"
			fill="#0b0c0e"
			transform="rotate(12 88 70)"
		/>
		<circle cx="50" cy="64" r="3.5" fill="#eafff4" />
		<circle cx="86" cy="64" r="3.5" fill="#eafff4" />
		{/* mouth */}
		<path
			d="M58 104 Q70 112 82 104"
			fill="none"
			stroke="#2c7a4f"
			strokeWidth="3"
		/>
		{/* antennae */}
		<path
			d="M54 24 Q48 6 38 8"
			fill="none"
			stroke="#52c483"
			strokeWidth="4"
		/>
		<path
			d="M86 24 Q92 6 102 8"
			fill="none"
			stroke="#52c483"
			strokeWidth="4"
		/>
		<circle cx="37" cy="8" r="5" fill="#2be38b" />
		<circle cx="103" cy="8" r="5" fill="#2be38b" />
		{/* arms */}
		<path
			d="M40 120 Q20 128 18 146"
			fill="none"
			stroke="#3fae6e"
			strokeWidth="7"
			strokeLinecap="round"
		/>
		<path
			d="M100 120 Q120 128 122 146"
			fill="none"
			stroke="#3fae6e"
			strokeWidth="7"
			strokeLinecap="round"
		/>
	</svg>
);

// Agency badge / shield
export const AgencyBadge = ({ className }: SvgProps) => (
	<svg
		viewBox="0 0 100 110"
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Agency badge"
	>
		<path
			d="M50 4 L92 20 V52 C92 80 74 98 50 106 C26 98 8 80 8 52 V20 Z"
			fill="#16181d"
			stroke="#e5502a"
			strokeWidth="3"
		/>
		<path
			d="M50 22 L72 30 V52 C72 68 62 78 50 84 C38 78 28 68 28 52 V30 Z"
			fill="rgba(229,80,42,0.12)"
			stroke="#ffcd56"
			strokeWidth="2"
		/>
		<circle cx="50" cy="52" r="8" fill="#ffcd56" />
		<text
			x="50"
			y="98"
			textAnchor="middle"
			fontFamily="Arial Black, Arial"
			fontWeight="900"
			fontSize="11"
			fill="#f5f5f5"
		>
			SIG
		</text>
	</svg>
);
