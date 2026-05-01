const WaveDivider = () => (
	<div className="wave-divider overflow-hidden h-8 md:h-12 relative opacity-20">
		<svg
			viewBox="0 0 2400 40"
			className="absolute top-0 left-0 w-[200%] h-full"
			preserveAspectRatio="none"
		>
			<path
				d="M0 20 Q150 5 300 20 Q450 35 600 20 Q750 5 900 20 Q1050 35 1200 20 Q1350 5 1500 20 Q1650 35 1800 20 Q1950 5 2100 20 Q2250 35 2400 20"
				fill="none"
				stroke="#d4af37"
				strokeWidth="1.5"
			/>
		</svg>
	</div>
);

export default WaveDivider;
