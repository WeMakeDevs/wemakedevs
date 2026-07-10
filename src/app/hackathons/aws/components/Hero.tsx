export default function Hero() {
	return (
		<section
			id="top"
			className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32"
		>
			<div className="pointer-events-none absolute left-1/2 top-40 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF9900]/10 to-[#B8422E]/15 blur-[120px] w-[45vw] h-[45vw] max-w-[640px] max-h-[640px]" />

			<div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
				<div className="animate-fadeup" style={{ animationDelay: ".05s" }}>
					<span className="pulse-badge inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-orange">
						<svg
							className="h-3.5 w-3.5"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2 12s5 6 10 6 10 6 10 6M22 2l-9.5 9.5"
							/>
						</svg>
						Win a sponsored trip to Las Vegas
					</span>
				</div>

				<h1
					className="mt-7 font-heading font-black text-heading text-4xl sm:text-6xl lg:text-7xl tracking-tight animate-fadeup"
					style={{ animationDelay: ".15s" }}
				>
					AWS Next Gen Hacks <span className="text-orange">2026</span>
				</h1>
				<p
					className="mx-auto mt-5 max-w-2xl text-lg sm:text-xl text-body animate-fadeup"
					style={{ animationDelay: ".25s" }}
				>
					Six hybrid hackathons across India. Build with AWS online or on site,
					and top teams win a{" "}
					<span className="text-heading font-semibold">
						sponsored trip to Las Vegas
					</span>
					.
				</p>

				<div className="mt-12 animate-fadeup" style={{ animationDelay: ".35s" }}>
					<p className="font-mono text-xs uppercase tracking-[0.35em] text-ash">
						Total Prize Pool
					</p>
					<div className="mt-3 font-heading font-black tracking-tight leading-none bg-gradient-to-r from-[#FF9900] to-[#FFD394] bg-clip-text text-transparent text-6xl sm:text-8xl">
						$100,000+
					</div>
					<p className="mt-2 font-mono text-lg sm:text-xl text-body">
						/ 1 Crore+ INR in cash, prizes &amp; resources
					</p>
				</div>

				<div
					className="mx-auto mt-12 grid max-w-4xl grid-cols-1 sm:grid-cols-3 gap-4 text-left animate-fadeup"
					style={{ animationDelay: ".45s" }}
				>
					{[
						{
							title: "Trip to Las Vegas",
							desc: "Top teams flown out to showcase their build on a global stage.",
							icon: (
								<>
									<circle cx="12" cy="12" r="9" />
									<path
										strokeLinecap="round"
										d="M3.6 9h16.8M3.6 15h16.8M12 3a17 17 0 000 18M12 3a17 17 0 010 18"
									/>
								</>
							),
						},
						{
							title: "Cloud Credits",
							desc: "Turn prototypes into funded projects with AWS grants.",
							icon: (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13 2 4.5 12.5H11l-1 7.5L18.5 9.5H12l1-7.5z"
								/>
							),
						},
						{
							title: "Expert Mentorship",
							desc: "Direct guidance from AWS Solutions Architects.",
							icon: (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17 20h5v-1a4 4 0 00-4-4h-1m-6 5H2v-1a4 4 0 014-4h1m5-4a4 4 0 100-8 4 4 0 000 8z"
								/>
							),
						},
					].map((m) => (
						<div key={m.title} className="glass rounded-xl p-5">
							<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange/10 text-orange">
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="currentColor"
									strokeWidth={1.8}
									viewBox="0 0 24 24"
								>
									{m.icon}
								</svg>
							</div>
							<p className="font-heading font-bold text-heading">{m.title}</p>
							<p className="mt-1 text-sm text-ash">{m.desc}</p>
						</div>
					))}
				</div>

				<div
					className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeup"
					style={{ animationDelay: ".55s" }}
				>
					<a
						href="#hubs"
						className="inline-flex items-center gap-2 rounded-lg bg-orange px-7 py-3.5 font-semibold text-ink shadow-lg shadow-orange/25 transition-all duration-200 hover:bg-rust hover:text-white hover:scale-[1.03] active:scale-[0.98]"
					>
						Explore Hackathons
						<svg
							className="h-5 w-5"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5 12h14M13 6l6 6-6 6"
							/>
						</svg>
					</a>
					<a
						href="https://wemakedevs.org"
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex items-center gap-2 px-4 py-3.5 font-semibold text-body transition-colors hover:text-orange"
					>
						Join the WeMakeDevs Community
						<svg
							className="h-4 w-4 transition-transform group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M7 17 17 7M9 7h8v8"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}
