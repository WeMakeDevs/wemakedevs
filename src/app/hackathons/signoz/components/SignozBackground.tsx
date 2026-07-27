// ─── Ambient page backdrop ────────────────────────────────────────────────────
// Static, low-contrast layers only: a deep neutral base, two very soft colour
// washes and a fine blueprint grid. Nothing moves, so it reads as a printed
// surface rather than an effect.

const SignozBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* ── Deep neutral base ── */}
			<div className="absolute inset-0 bg-[#0a0b0d]" />
			<div className="absolute inset-0 bg-gradient-to-b from-[#0e1013] via-[#0a0b0d] to-[#08090b]" />

			{/* ── Two soft colour washes, well below the copy ── */}
			<div className="absolute -top-[18%] right-[-8%] h-[720px] w-[720px] rounded-full bg-[#e5502a]/[0.055] blur-[200px]" />
			<div className="absolute top-[48%] left-[-12%] h-[640px] w-[640px] rounded-full bg-[#7f9dc9]/[0.05] blur-[210px]" />

			{/* ── Fine blueprint grid ── */}
			<div className="absolute inset-0 agency-grid opacity-40" />

			{/* ── Faint overhead light, so the top of the page lifts slightly ── */}
			<div
				className="absolute inset-x-0 top-0 h-[55vh]"
				style={{
					background:
						"radial-gradient(70% 100% at 50% 0%, rgba(199,204,214,0.045), transparent 70%)",
				}}
			/>

			{/* ── Vignette to settle the edges ── */}
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(125% 95% at 50% 32%, transparent 58%, rgba(6,6,8,0.5) 86%, #060608 100%)",
				}}
			/>
		</div>
	);
};

export default SignozBackground;
