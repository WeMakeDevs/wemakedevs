// ─── Ambient page backdrop — clean, minimal, professional ────────────────────

const SignozBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* ── Deep base gradient ── */}
			<div className="absolute inset-0 bg-[#08090b]" />
			<div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10] via-[#08090b] to-[#070709]" />

			{/* ── Soft signature ambient glows (sparingly) ── */}
			<div className="absolute -top-[12%] right-[6%] w-[640px] h-[640px] rounded-full bg-[#e5502a]/10 blur-[180px]" />
			<div className="absolute top-[42%] -left-[6%] w-[560px] h-[560px] rounded-full bg-[#5fe9ff]/[0.06] blur-[190px]" />

			{/* ── Whisper-fine blueprint grid ── */}
			<div className="absolute inset-0 agency-grid opacity-[0.35]" />

			{/* ── Slow radar sweep (top-right, subtle metallic/cyan) ── */}
			<div className="absolute top-[9%] right-[7%] hidden md:block">
				<svg
					aria-hidden="true"
					className="radar-spin opacity-[0.18]"
					width="260"
					height="260"
					viewBox="0 0 220 220"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="110"
						cy="110"
						r="100"
						fill="none"
						stroke="#c7ccd6"
						strokeWidth="1"
						opacity="0.5"
					/>
					<circle
						cx="110"
						cy="110"
						r="66"
						fill="none"
						stroke="#c7ccd6"
						strokeWidth="1"
						opacity="0.35"
					/>
					<circle
						cx="110"
						cy="110"
						r="32"
						fill="none"
						stroke="#c7ccd6"
						strokeWidth="1"
						opacity="0.35"
					/>
					<path
						d="M110 110 L110 10 A100 100 0 0 1 200 90 Z"
						fill="#5fe9ff"
						opacity="0.1"
					/>
					<line
						x1="110"
						y1="110"
						x2="110"
						y2="10"
						stroke="#5fe9ff"
						strokeWidth="1.5"
						opacity="0.55"
					/>
				</svg>
			</div>

			{/* ── Focusing vignette — keeps the edges clean & premium ── */}
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(120% 90% at 50% 30%, transparent 55%, rgba(5,5,7,0.55) 85%, #050507 100%)",
				}}
			/>
		</div>
	);
};

export default SignozBackground;
