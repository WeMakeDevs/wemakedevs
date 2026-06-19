// ─── Cartoon Hangover characters & Vegas props (original stylized SVG art) ─────

type SvgProps = { className?: string };

// Alan — bearded guy in shades with the baby in a chest carrier (the icon)
export const AlanCartoon = ({ className }: SvgProps) => (
	<svg
		viewBox="0 0 220 300"
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Cartoon of a bearded man in sunglasses carrying a baby"
	>
		{/* body / shirt */}
		<path
			d="M52 300 L52 198 Q52 165 90 158 L130 158 Q168 165 168 198 L168 300 Z"
			fill="#3b6e4f"
		/>
		<path d="M110 158 L96 300 L124 300 Z" fill="#2f5740" opacity="0.6" />
		{/* arms */}
		<path d="M52 200 Q30 230 36 280 L52 280 L60 210 Z" fill="#3b6e4f" />
		<path
			d="M168 200 Q190 230 184 280 L168 280 L160 210 Z"
			fill="#3b6e4f"
		/>
		{/* hands */}
		<circle cx="44" cy="278" r="13" fill="#e8b98c" />
		<circle cx="176" cy="278" r="13" fill="#e8b98c" />
		{/* neck */}
		<rect x="96" y="138" width="28" height="30" rx="8" fill="#e8b98c" />
		{/* head */}
		<circle cx="110" cy="96" r="56" fill="#f0c79b" />
		{/* ears */}
		<circle cx="56" cy="98" r="10" fill="#e8b98c" />
		<circle cx="164" cy="98" r="10" fill="#e8b98c" />
		{/* hair */}
		<path
			d="M58 78 Q60 40 110 40 Q160 40 162 78 Q150 60 110 60 Q70 60 58 78Z"
			fill="#3a2a1c"
		/>
		{/* sunglasses */}
		<rect x="66" y="86" width="36" height="22" rx="8" fill="#15121c" />
		<rect x="118" y="86" width="36" height="22" rx="8" fill="#15121c" />
		<rect x="102" y="93" width="16" height="5" fill="#15121c" />
		<rect
			x="70"
			y="90"
			width="14"
			height="6"
			rx="3"
			fill="#5b5566"
			opacity="0.7"
		/>
		{/* nose */}
		<path
			d="M108 108 Q102 122 112 124"
			fill="none"
			stroke="#d49b6a"
			strokeWidth="3"
		/>
		{/* beard */}
		<path
			d="M60 104 Q66 176 110 178 Q154 176 160 104 Q150 150 110 152 Q70 150 60 104Z"
			fill="#3a2a1c"
		/>
		<path d="M92 150 Q110 162 128 150 L128 138 L92 138 Z" fill="#7a1f2b" />
		{/* baby carrier */}
		<path d="M70 196 Q110 184 150 196 L150 208 L70 208 Z" fill="#2b3a55" />
		<rect x="80" y="200" width="60" height="58" rx="14" fill="#3f5680" />
		{/* baby head */}
		<circle cx="110" cy="206" r="24" fill="#f6cfa6" />
		<path d="M90 196 Q110 184 130 196 Q110 192 90 196Z" fill="#caa06f" />
		{/* baby eyes */}
		<circle cx="101" cy="206" r="3.4" fill="#2a2018" />
		<circle cx="119" cy="206" r="3.4" fill="#2a2018" />
		<path
			d="M103 216 Q110 221 117 216"
			fill="none"
			stroke="#b9714b"
			strokeWidth="2.4"
		/>
		{/* sunglasses on baby (because of course) */}
		<rect
			x="94"
			y="200"
			width="14"
			height="8"
			rx="3"
			fill="#15121c"
			opacity="0.85"
		/>
		<rect
			x="112"
			y="200"
			width="14"
			height="8"
			rx="3"
			fill="#15121c"
			opacity="0.85"
		/>
	</svg>
);

// Cartoon tiger (the one in the bathroom)
export const TigerCartoon = ({ className }: SvgProps) => (
	<svg
		viewBox="0 0 240 200"
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Cartoon tiger"
	>
		{/* ears */}
		<circle cx="74" cy="58" r="26" fill="#f59e0b" />
		<circle cx="166" cy="58" r="26" fill="#f59e0b" />
		<circle cx="74" cy="58" r="13" fill="#1c0f08" />
		<circle cx="166" cy="58" r="13" fill="#1c0f08" />
		{/* head */}
		<ellipse cx="120" cy="118" rx="84" ry="74" fill="#f9a825" />
		{/* cheeks */}
		<ellipse cx="86" cy="140" rx="34" ry="30" fill="#fff3e0" />
		<ellipse cx="154" cy="140" rx="34" ry="30" fill="#fff3e0" />
		<ellipse cx="120" cy="110" rx="44" ry="38" fill="#fff3e0" />
		{/* stripes */}
		<path d="M120 46 L112 78 L128 78 Z" fill="#1c0f08" />
		<path d="M150 52 L150 80 L162 70 Z" fill="#1c0f08" />
		<path d="M90 52 L90 80 L78 70 Z" fill="#1c0f08" />
		<path d="M40 110 L70 118 L42 130 Z" fill="#1c0f08" />
		<path d="M200 110 L170 118 L198 130 Z" fill="#1c0f08" />
		{/* eyes */}
		<circle cx="96" cy="104" r="12" fill="#fff" />
		<circle cx="144" cy="104" r="12" fill="#fff" />
		<circle cx="98" cy="106" r="6.5" fill="#1c0f08" />
		<circle cx="142" cy="106" r="6.5" fill="#1c0f08" />
		{/* nose + mouth */}
		<path d="M108 128 L132 128 L120 140 Z" fill="#e05a6b" />
		<path d="M120 140 L120 152" stroke="#1c0f08" strokeWidth="3" />
		<path
			d="M120 152 Q104 162 96 150"
			fill="none"
			stroke="#1c0f08"
			strokeWidth="3"
		/>
		<path
			d="M120 152 Q136 162 144 150"
			fill="none"
			stroke="#1c0f08"
			strokeWidth="3"
		/>
		{/* whiskers */}
		<path
			d="M70 132 L34 126 M72 142 L36 144"
			stroke="#1c0f08"
			strokeWidth="2"
		/>
		<path
			d="M170 132 L206 126 M168 142 L204 144"
			stroke="#1c0f08"
			strokeWidth="2"
		/>
	</svg>
);

// Cartoon rooster / chicken
export const ChickenCartoon = ({ className }: SvgProps) => (
	<svg
		viewBox="0 0 180 200"
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Cartoon rooster"
	>
		{/* body */}
		<ellipse cx="92" cy="120" rx="58" ry="56" fill="#f5f5f5" />
		{/* tail */}
		<path d="M150 90 Q188 70 178 130 Q166 110 150 120Z" fill="#3a2a1c" />
		<path d="M150 100 Q184 100 168 150 Q156 128 144 132Z" fill="#7a4a2b" />
		{/* head */}
		<circle cx="64" cy="74" r="32" fill="#ffffff" />
		{/* comb */}
		<path
			d="M48 46 Q52 30 60 44 Q66 28 74 44 Q82 30 86 48 L48 50Z"
			fill="#e23b3b"
		/>
		{/* wattle */}
		<path d="M56 100 Q52 116 64 116 Q70 110 64 100Z" fill="#e23b3b" />
		{/* beak */}
		<path d="M36 76 L14 82 L36 90 Z" fill="#f6a623" />
		{/* eye */}
		<circle cx="58" cy="70" r="6" fill="#1c0f08" />
		<circle cx="60" cy="68" r="2" fill="#fff" />
		{/* wing */}
		<path d="M92 110 Q120 112 120 140 Q104 132 92 138Z" fill="#d8d8d8" />
		{/* legs */}
		<path
			d="M78 174 L78 192 M70 192 L86 192"
			stroke="#f6a623"
			strokeWidth="4"
		/>
		<path
			d="M104 174 L104 192 M96 192 L112 192"
			stroke="#f6a623"
			strokeWidth="4"
		/>
	</svg>
);

// Spinning poker chip
export const PokerChip = ({ className }: SvgProps) => (
	<svg
		viewBox="0 0 100 100"
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Poker chip"
	>
		<circle cx="50" cy="50" r="46" fill="#ff2d7e" />
		<circle
			cx="50"
			cy="50"
			r="46"
			fill="none"
			stroke="#fff"
			strokeWidth="5"
			strokeDasharray="11 15"
		/>
		<circle
			cx="50"
			cy="50"
			r="30"
			fill="none"
			stroke="#fff"
			strokeWidth="3"
		/>
		<circle cx="50" cy="50" r="20" fill="#160a26" />
		<text
			x="50"
			y="58"
			textAnchor="middle"
			fontFamily="Arial Black, Arial"
			fontWeight="900"
			fontSize="20"
			fill="#ffd24a"
		>
			AI
		</text>
	</svg>
);

// Pair of dice
export const Dice = ({ className }: SvgProps) => (
	<svg
		viewBox="0 0 140 90"
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Dice"
	>
		<g transform="rotate(-12 40 50)">
			<rect x="10" y="20" width="54" height="54" rx="12" fill="#fff" />
			<circle cx="26" cy="36" r="6" fill="#ff2d7e" />
			<circle cx="48" cy="36" r="6" fill="#ff2d7e" />
			<circle cx="37" cy="47" r="6" fill="#ff2d7e" />
			<circle cx="26" cy="58" r="6" fill="#ff2d7e" />
			<circle cx="48" cy="58" r="6" fill="#ff2d7e" />
		</g>
		<g transform="rotate(10 100 50)">
			<rect x="74" y="26" width="52" height="52" rx="12" fill="#fff" />
			<circle cx="100" cy="52" r="6.5" fill="#160a26" />
		</g>
	</svg>
);

// Martini glass
export const Martini = ({ className }: SvgProps) => (
	<svg
		viewBox="0 0 100 120"
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Cocktail glass"
	>
		<path d="M16 22 L84 22 L52 64 Z" fill="#21e6c1" opacity="0.85" />
		<path d="M16 22 L84 22 L78 30 L22 30 Z" fill="#9ff5e6" />
		<rect x="49" y="62" width="4" height="42" fill="#cbb4ff" />
		<rect x="30" y="104" width="42" height="6" rx="3" fill="#cbb4ff" />
		<circle cx="64" cy="40" r="6" fill="#ff2d7e" />
		<line x1="64" y1="40" x2="40" y2="14" stroke="#fff" strokeWidth="2" />
	</svg>
);
