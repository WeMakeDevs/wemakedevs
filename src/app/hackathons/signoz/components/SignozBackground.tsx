// ─── Men in Black "classified" backdrop — clean, minimal, professional ───────

const SignozBackground = () => {
	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* ── Deep classified-black base gradient ── */}
			<div className="absolute inset-0 bg-[#08090b]" />
			<div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10] via-[#08090b] to-[#070709]" />

			{/* ── Soft signature ambient glows (sparingly) ── */}
			<div className="absolute -top-[12%] right-[6%] w-[640px] h-[640px] rounded-full bg-[#e5502a]/10 blur-[180px]" />
			<div className="absolute top-[42%] -left-[6%] w-[560px] h-[560px] rounded-full bg-[#5fe9ff]/[0.06] blur-[190px]" />

			{/* ── Whisper-fine surveillance grid ── */}
			<div className="absolute inset-0 agency-grid opacity-[0.35]" />

			{/* ── Focusing vignette — keeps the edges clean & premium ── */}
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(120% 90% at 50% 30%, transparent 55%, rgba(5,5,7,0.55) 85%, #050507 100%)",
				}}
			/>

			{/* ── Barely-there neuralyzer flash ── */}
			<div className="absolute inset-0 bg-[#5fe9ff]/[0.04] neuralyze-flash" />
		</div>
	);
};

export default SignozBackground;
