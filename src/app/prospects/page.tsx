"use client";

import { useCallback, useEffect, useState } from "react";
import "./styles.css";

const TOTAL_SLIDES = 17;

const Prospects = () => {
	const [current, setCurrent] = useState(0);

	const goTo = useCallback((idx: number) => {
		if (idx < 0 || idx >= TOTAL_SLIDES) return;
		setCurrent(idx);
	}, []);

	const next = useCallback(
		() => setCurrent(i => Math.min(i + 1, TOTAL_SLIDES - 1)),
		[],
	);
	const prev = useCallback(() => setCurrent(i => Math.max(i - 1, 0)), []);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (
				e.key === "ArrowRight" ||
				e.key === " " ||
				e.key === "PageDown"
			) {
				e.preventDefault();
				next();
			} else if (e.key === "ArrowLeft" || e.key === "PageUp") {
				e.preventDefault();
				prev();
			} else if (e.key === "Home") {
				e.preventDefault();
				goTo(0);
			} else if (e.key === "End") {
				e.preventDefault();
				goTo(TOTAL_SLIDES - 1);
			}
		};
		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [next, prev, goTo]);

	useEffect(() => {
		let touchStartX = 0;
		let touchStartY = 0;
		const onStart = (e: TouchEvent) => {
			touchStartX = e.touches[0].clientX;
			touchStartY = e.touches[0].clientY;
		};
		const onEnd = (e: TouchEvent) => {
			if (!e.changedTouches.length) return;
			const dx = e.changedTouches[0].clientX - touchStartX;
			const dy = e.changedTouches[0].clientY - touchStartY;
			if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
				if (dx < 0) next();
				else prev();
			}
		};
		document.addEventListener("touchstart", onStart, { passive: true });
		document.addEventListener("touchend", onEnd, { passive: true });
		return () => {
			document.removeEventListener("touchstart", onStart);
			document.removeEventListener("touchend", onEnd);
		};
	}, [next, prev]);

	const isActive = (i: number) => (current === i ? "slide active" : "slide");

	return (
		<div className="prospects">
			<div className="slide-stage">
				{/* SLIDE 1: COVER */}
				<section className={isActive(0)}>
					<div className="cover-content">
						<div className="cover-logo">
							<span className="mark">
								<span className="lt">&lt;</span>
								<span className="gt">&gt;</span>
							</span>
							WeMakeDevs
						</div>
						<div className="eyebrow">
							Partnership Proposal · 2026
						</div>
						<h1 className="display">
							Build a{" "}
							<span className="grad">
								global developer
								<br />
								movement
							</span>{" "}
							around your product.
						</h1>
					</div>
					<div className="cover-footer">
						<div>wemakedevs.org</div>
						<div>
							<a
								href="https://www.wemakedevs.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								www.wemakedevs.org →
							</a>
						</div>
					</div>
				</section>

				{/* SLIDE 2: ABOUT */}
				<section className={isActive(1)}>
					<div className="strip">
						<div className="brand">
							<span>01 /</span> About WeMakeDevs
						</div>
						<div className="meta">wemakedevs.org</div>
					</div>
					<div className="eyebrow">Who we are</div>
					<h2 className="title">
						A community of{" "}
						<span className="grad">200,000+ builders</span>
						<br />
						across 30+ countries.
					</h2>
					<p className="lede">
						WeMakeDevs is a global developer community built to
						empower the next generation of builders. We connect,
						educate, and amplify developers worldwide through
						hackathons, content, and hands-on programs, and
						we&apos;ve become a home for emerging tech, from
						cloud-native and DevOps to AI and developer tooling.
					</p>
					<div className="stats-grid">
						<div className="stat">
							<div className="num">
								200K<span className="plus">+</span>
							</div>
							<div className="label">Community Members</div>
						</div>
						<div className="stat">
							<div className="num">
								30<span className="plus">+</span>
							</div>
							<div className="label">Countries Represented</div>
						</div>
						<div className="stat">
							<div className="num">
								100K<span className="plus">+</span>
							</div>
							<div className="label">Followers · WMD Socials</div>
						</div>
					</div>
				</section>

				{/* SLIDE 3: FOUNDER */}
				<section className={isActive(2)}>
					<div className="strip">
						<div className="brand">
							<span>02 /</span> Founder
						</div>
						<div className="meta">Kunal Kushwaha</div>
					</div>
					<div className="founder">
						<div className="founder-photo-wrap">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src="https://pub.hyperagent.com/api/published/pbf01KSR6P19P_K497EHYNH901QAK7/cmppzhoiu04ow06adnkfrpfxo_IMG_4698.JPG"
								alt="Kunal Kushwaha"
							/>
						</div>
						<div>
							<div className="founder-role">
								Founder · WeMakeDevs
							</div>
							<div className="founder-name">Kunal Kushwaha</div>
							<p className="founder-bio">
								Senior Developer Advocate at{" "}
								<strong>CAST AI</strong>, leading developer
								relations across EMEA, focused on cloud-native
								technologies and AI. Founder of{" "}
								<strong>WeMakeDevs</strong>, mentoring
								individuals in tech. His YouTube content has
								been watched by <strong>millions</strong>. A
								passionate open-source advocate, Kunal regularly
								speaks at industry conferences on cloud, AI, and
								developer growth.
							</p>
							<div className="socials">
								<div className="social">
									<div className="platform">YouTube</div>
									<div className="count">
										890<span className="accent">K</span>
									</div>
								</div>
								<div className="social">
									<div className="platform">LinkedIn</div>
									<div className="count">
										370<span className="accent">K</span>
									</div>
								</div>
								<div className="social">
									<div className="platform">X / Twitter</div>
									<div className="count">
										280<span className="accent">K</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SLIDE 4: DIVIDER */}
				<section className={`${isActive(3)} divider`}>
					<div className="strip">
						<div className="brand">
							<span>03 /</span> Past Events
						</div>
						<div className="meta">Leading with data</div>
					</div>
					<div className="number">CHAPTER · 03</div>
					<h2>
						Leading with <span className="grad">data.</span>
					</h2>
					<p
						className="lede"
						style={{
							marginTop: "2rem",
							fontSize: "1.3rem",
							maxWidth: 720,
						}}
					>
						Every event is real, recent, and produced measurable
						outcomes, stars on GitHub, PRs shipped, and developers
						who stuck around long after the closing ceremony.
					</p>
				</section>

				{/* SLIDE 5: cognee */}
				<section className={isActive(4)}>
					<div className="strip">
						<div className="brand">
							<span>03 /</span> Past Events
						</div>
						<div className="meta">01 of 11 · cognee</div>
					</div>
					<span className="event-tag">
						The Hangover Part AI × cognee
					</span>
					<h2 className="event-title">
						The Hangover{" "}
						<span style={{ color: "var(--cyan)" }}>Part AI</span>
					</h2>
					<p className="event-sub">
						<a
							href="https://www.wemakedevs.org/hackathons/cognee"
							target="_blank"
							rel="noopener noreferrer"
						>
							wemakedevs.org/hackathons/cognee
						</a>
					</p>
					<div className="event-body">
						<div className="event-stats">
							<div className="ev-stat featured">
								<div className="num">
									8K<span className="plus">+</span>
								</div>
								<div className="label">Participants</div>
							</div>
							<div className="ev-stat featured">
								<div className="num">
									1.2K<span className="plus">+</span>
								</div>
								<div className="label">Projects Built</div>
							</div>
							<div className="ev-stat">
								<div className="num">
									7.5K<span className="plus">+</span>
								</div>
								<div className="label">Cloud Signups</div>
							</div>
							<div className="ev-stat">
								<div className="num">
									30<span className="plus">+</span>
								</div>
								<div className="label">Countries</div>
							</div>
						</div>
					</div>
				</section>

				{/* SLIDE 6: OpenMetadata */}
				<section className={isActive(5)}>
					<div className="strip">
						<div className="brand">
							<span>03 /</span> Past Events
						</div>
						<div className="meta">02 of 11 · OpenMetadata</div>
					</div>
					<span className="event-tag">
						Back to the Metadata × Collate
					</span>
					<h2 className="event-title">
						Back to the{" "}
						<span style={{ color: "var(--cyan)" }}>Metadata</span>
					</h2>
					<p className="event-sub">
						<a
							href="https://www.wemakedevs.org/hackathons/openmetadata"
							target="_blank"
							rel="noopener noreferrer"
						>
							wemakedevs.org/hackathons/openmetadata
						</a>
					</p>
					<div className="event-body">
						<div className="event-stats">
							<div className="ev-stat featured">
								<div className="num">
									5K<span className="plus">+</span>
								</div>
								<div className="label">Participants</div>
							</div>
							<div className="ev-stat">
								<div className="num">
									4.5K<span className="plus">+</span>
								</div>
								<div className="label">
									GitHub Stars / Signups
								</div>
							</div>
							<div className="ev-stat">
								<div className="num">
									100<span className="plus">+</span>
								</div>
								<div className="label">
									PRs Merged · Features Shipped
								</div>
							</div>
							<div className="ev-stat">
								<div className="num">
									20<span className="plus">+</span>
								</div>
								<div className="label">
									Countries · Trended on GitHub
								</div>
							</div>
						</div>
						<div className="testimonial">
							<div className="testimonial-text">
								Great community of knowledgeable and
								enthusiastic developers who brought new
								perspectives on how to build with our
								open-source semantic context layer. Great
								turnout of new contributors, we&apos;re looking
								forward to working with WeMakeDevs again.
							</div>
							<div className="testimonial-attr">
								<div>
									<div className="who">Steve Wooledge</div>
									<div className="role">CMO · Collate</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SLIDE 7: Accomplish */}
				<section className={isActive(6)}>
					<div className="strip">
						<div className="brand">
							<span>03 /</span> Past Events
						</div>
						<div className="meta">03 of 11 · Accomplish.ai</div>
					</div>
					<span className="event-tag">
						Automate Me If You Can × Accomplish.ai
					</span>
					<h2 className="event-title">
						Automate Me{" "}
						<span style={{ color: "var(--cyan)" }}>If You Can</span>
					</h2>
					<p className="event-sub">
						<a
							href="https://www.wemakedevs.org/hackathons/accomplish"
							target="_blank"
							rel="noopener noreferrer"
						>
							wemakedevs.org/hackathons/accomplish
						</a>
					</p>
					<div className="event-body">
						<div className="event-stats">
							<div className="ev-stat featured">
								<div className="num">
									5K<span className="plus">+</span>
								</div>
								<div className="label">Participants</div>
							</div>
							<div className="ev-stat featured">
								<div className="num">
									5K<span className="plus">+</span>
								</div>
								<div className="label">
									GitHub Stars (in 1 week)
								</div>
							</div>
							<div className="ev-stat">
								<div className="num">
									200<span className="plus">+</span>
								</div>
								<div className="label">PRs Submitted</div>
							</div>
							<div className="ev-stat">
								<div className="num">
									15<span className="plus">+</span>
								</div>
								<div className="label">Countries</div>
							</div>
						</div>
						<div className="testimonial">
							<div className="testimonial-text">
								We expected a hackathon; we got a high-octane
								engineering sprint. 5,000+ GitHub stars in a
								week, bugs squashed and new features shipped
								faster than we imagined. If you want to move the
								needle on product development while building a
								global brand, WeMakeDevs is the ultimate
								partner.
							</div>
							<div className="testimonial-attr">
								<div>
									<div className="who">Or Hiltch</div>
									<div className="role">CEO · Accomplish</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SLIDE 8: Vision Possible */}
				<section className={isActive(7)}>
					<div className="strip">
						<div className="brand">
							<span>03 /</span> Past Events
						</div>
						<div className="meta">04 of 11 · Agent Protocol</div>
					</div>
					<span className="event-tag">
						Vision Possible × Agent Protocol
					</span>
					<h2 className="event-title">
						Vision{" "}
						<span style={{ color: "var(--cyan)" }}>Possible</span>
					</h2>
					<p className="event-sub">
						<a
							href="https://www.wemakedevs.org/hackathons/vision"
							target="_blank"
							rel="noopener noreferrer"
						>
							wemakedevs.org/hackathons/vision
						</a>
					</p>
					<div className="event-body">
						<div
							className="event-stats"
							style={{ gridTemplateColumns: "1fr" }}
						>
							<div className="ev-stat featured">
								<div className="num">
									5,000<span className="plus">+</span>
								</div>
								<div className="label">Participants</div>
							</div>
							<div className="ev-stat">
								<div className="num">
									3,000<span className="plus">+</span>
								</div>
								<div className="label">
									GitHub Stars / Platform Signups
								</div>
							</div>
							<div className="ev-stat">
								<div className="num">
									18<span className="plus">+</span>
								</div>
								<div className="label">Countries</div>
							</div>
						</div>
						<div
							className="testimonial"
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<div style={{ textAlign: "center" }}>
								<div
									className="grad"
									style={{
										fontFamily: "var(--font-mono)",
										fontSize: "4rem",
										fontWeight: 700,
										lineHeight: 1,
									}}
								>
									Agent
									<br />
									Protocol
								</div>
								<div
									style={{
										marginTop: "1.5rem",
										fontFamily: "var(--font-mono)",
										fontSize: "0.8rem",
										color: "var(--text-dim)",
										letterSpacing: "0.15em",
										textTransform: "uppercase",
									}}
								>
									Building the future of
									<br />
									autonomous agents
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SLIDE 9: Tambo */}
				<section className={isActive(8)}>
					<div className="strip">
						<div className="brand">
							<span>03 /</span> Past Events
						</div>
						<div className="meta">05 of 11 · Tambo</div>
					</div>
					<span className="event-tag">
						The UI Strikes Back × Tambo
					</span>
					<h2 className="event-title">
						The UI{" "}
						<span style={{ color: "var(--cyan)" }}>
							Strikes Back
						</span>
					</h2>
					<p className="event-sub">
						<a
							href="https://www.wemakedevs.org/hackathons/tambo"
							target="_blank"
							rel="noopener noreferrer"
						>
							wemakedevs.org/hackathons/tambo
						</a>
					</p>
					<div className="event-body">
						<div className="event-stats">
							<div className="ev-stat featured">
								<div className="num">
									7K<span className="plus">+</span>
								</div>
								<div className="label">Participants</div>
							</div>
							<div className="ev-stat featured">
								<div className="num">
									7K<span className="plus">+</span>
								</div>
								<div className="label">
									GitHub Stars (1 week)
								</div>
							</div>
							<div
								className="ev-stat"
								style={{ gridColumn: "1 / -1" }}
							>
								<div className="num">
									20<span className="plus">+</span>
								</div>
								<div className="label">Countries</div>
							</div>
						</div>
						<div className="testimonial">
							<div className="testimonial-text">
								What we imagined, Kunal and his team delivered,
								and then some. 7,000 GitHub stars in just one
								week and thousands of developers actively
								building. They don&apos;t just run events, they
								build movements.
							</div>
							<div className="testimonial-attr">
								<div>
									<div className="who">Michael Magan</div>
									<div className="role">CEO · Tambo</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SLIDE 10: Archestra */}
				<section className={isActive(9)}>
					<div className="strip">
						<div className="brand">
							<span>03 /</span> Past Events
						</div>
						<div className="meta">06 of 11 · Archestra</div>
					</div>
					<span className="event-tag">2 Fast 2 MCP × Archestra</span>
					<h2 className="event-title">
						2 Fast{" "}
						<span style={{ color: "var(--cyan)" }}>2 MCP</span>
					</h2>
					<p className="event-sub">
						<a
							href="https://www.wemakedevs.org/hackathons/2fast2mcp"
							target="_blank"
							rel="noopener noreferrer"
						>
							wemakedevs.org/hackathons/2fast2mcp
						</a>
					</p>
					<div className="event-body">
						<div className="event-stats">
							<div className="ev-stat featured">
								<div className="num">
									5K<span className="plus">+</span>
								</div>
								<div className="label">Participants</div>
							</div>
							<div className="ev-stat">
								<div className="num">
									3K<span className="plus">+</span>
								</div>
								<div className="label">
									GitHub Stars / Signups
								</div>
							</div>
							<div
								className="ev-stat"
								style={{ gridColumn: "1 / -1" }}
							>
								<div className="num">
									20<span className="plus">+</span>
								</div>
								<div className="label">Countries</div>
							</div>
						</div>
						<div className="testimonial">
							<div className="testimonial-text">
								Kunal and his team didn&apos;t just host a
								hackathon, they built a bridge between our tech
								and thousands of high-level developers.
								WeMakeDevs attracts a higher tier of talent.
							</div>
							<div className="testimonial-attr">
								<div>
									<div className="who">Matvey Kukuy</div>
									<div className="role">CEO · Archestra</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SLIDE 11: AI Agents Assemble */}
				<section className={isActive(10)}>
					<div className="strip">
						<div className="brand">
							<span>03 /</span> Past Events
						</div>
						<div className="meta">
							07 of 11 · Cline + CodeRabbit + Together AI
						</div>
					</div>
					<span className="event-tag">
						AI Agents Assemble × Multiple Partners
					</span>
					<h2 className="event-title">
						AI Agents{" "}
						<span style={{ color: "var(--cyan)" }}>Assemble</span>
					</h2>
					<p className="event-sub">
						<a
							href="https://www.wemakedevs.org/hackathons/assemblehack25"
							target="_blank"
							rel="noopener noreferrer"
						>
							wemakedevs.org/hackathons/assemblehack25
						</a>{" "}
						· <strong>6,000+ participants · 20+ countries</strong>
					</p>
					<div className="testimonial-stack">
						<div className="testimonial compact">
							<div className="testimonial-text">
								&quot;One of the best partnership decisions we
								made. Real, engaged builders who showed up ready
								to create, the result of years of authentic
								community building and the trust they&apos;ve
								earned with developers.&quot;
							</div>
							<div className="testimonial-attr">
								<div>
									<div className="who">Juan Pa</div>
									<div className="role">
										Developer Relations · Cline
									</div>
								</div>
							</div>
						</div>
						<div className="testimonial compact">
							<div className="testimonial-text">
								&quot;Developers tried CodeRabbit, they loved
								it, and told others about it. The awareness we
								gained in the developer community was beyond
								what we expected.&quot;
							</div>
							<div className="testimonial-attr">
								<div>
									<div className="who">Aravind Putrevu</div>
									<div className="role">
										VP of Growth · CodeRabbit
									</div>
								</div>
							</div>
						</div>
						<div className="testimonial compact">
							<div className="testimonial-text">
								&quot;Highly engaged audience with thoughtful
								questions and active discussion around LLMs and
								coding agents.&quot;
							</div>
							<div className="testimonial-attr">
								<div>
									<div className="who">Zain</div>
									<div className="role">Together AI</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SLIDE 12: Motia */}
				<section className={isActive(11)}>
					<div className="strip">
						<div className="brand">
							<span>03 /</span> Past Events
						</div>
						<div className="meta">08 of 11 · Motia</div>
					</div>
					<span className="event-tag">Backend Reloaded × Motia</span>
					<h2 className="event-title">
						Backend{" "}
						<span style={{ color: "var(--cyan)" }}>Reloaded</span>
					</h2>
					<p className="event-sub">
						<a
							href="https://www.wemakedevs.org/hackathons/motiahack25"
							target="_blank"
							rel="noopener noreferrer"
						>
							wemakedevs.org/hackathons/motiahack25
						</a>
					</p>
					<div className="event-body">
						<div className="event-stats">
							<div className="ev-stat featured">
								<div className="num">
									4K<span className="plus">+</span>
								</div>
								<div className="label">Participants</div>
							</div>
							<div className="ev-stat">
								<div className="num">
									3K<span className="plus">+</span>
								</div>
								<div className="label">
									GitHub Stars / Signups
								</div>
							</div>
							<div
								className="ev-stat"
								style={{ gridColumn: "1 / -1" }}
							>
								<div className="num">
									10<span className="plus">+</span>
								</div>
								<div className="label">Countries</div>
							</div>
						</div>
						<div className="testimonial">
							<div className="testimonial-text">
								This partnership went way beyond what we
								expected. Thousands of developers actually
								understood what we were building and shipped
								real solutions. Exactly the kind of engaged
								builders we wanted to reach.
							</div>
							<div className="testimonial-attr">
								<div>
									<div className="who">Mike Piccolo</div>
									<div className="role">Founder · Motia</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SLIDE 13: FutureStack */}
				<section className={isActive(12)}>
					<div className="strip">
						<div className="brand">
							<span>03 /</span> Past Events
						</div>
						<div className="meta">09 of 11 · Cerebras + Meta</div>
					</div>
					<span className="event-tag">
						FutureStack GenAI × Cerebras + Meta
					</span>
					<h2 className="event-title">
						<span style={{ color: "var(--cyan)" }}>
							FutureStack
						</span>{" "}
						GenAI
					</h2>
					<p className="event-sub">
						<a
							href="https://www.wemakedevs.org/hackathons/futurestack25"
							target="_blank"
							rel="noopener noreferrer"
						>
							wemakedevs.org/hackathons/futurestack25
						</a>{" "}
						·{" "}
						<strong>
							5.5K+ participants · 50+ countries · 7K+ API signups
						</strong>
					</p>
					<div className="testimonial-stack">
						<div className="testimonial compact">
							<div className="testimonial-text">
								&quot;A fantastic platform for developers to
								showcase their skills and learn from each
								other. A great opportunity to share knowledge
								and see innovative ideas being built, like
								someone leveraging Llama models for database
								schema generation.&quot;
							</div>
							<div className="testimonial-attr">
								<div>
									<div className="who">Yash Khare</div>
									<div className="role">
										Partner Engineer, GenAI · Meta
									</div>
								</div>
							</div>
						</div>
						<div className="testimonial compact">
							<div className="testimonial-text">
								&quot;The energy was unreal, 5,500+ participants
								and 7,000+ API signups in just one hackathon.
								Super passionate, easy to work with, and
								genuinely care about empowering builders.&quot;
							</div>
							<div className="testimonial-attr">
								<div>
									<div className="who">Sarah Chieng</div>
									<div className="role">
										Head of DevX · Cerebras Systems
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SLIDE 14: Portia */}
				<section className={isActive(13)}>
					<div className="strip">
						<div className="brand">
							<span>03 /</span> Past Events
						</div>
						<div className="meta">10 of 11 · Portia AI</div>
					</div>
					<span className="event-tag">
						AgentHack 2025 × Portia AI
					</span>
					<h2 className="event-title">
						AgentHack{" "}
						<span style={{ color: "var(--cyan)" }}>2025</span>
					</h2>
					<p className="event-sub">
						<a
							href="https://www.wemakedevs.org/hackathons/agenthack25"
							target="_blank"
							rel="noopener noreferrer"
						>
							wemakedevs.org/hackathons/agenthack25
						</a>
					</p>
					<div className="event-body">
						<div className="event-stats">
							<div className="ev-stat featured">
								<div className="num">
									4K<span className="plus">+</span>
								</div>
								<div className="label">Participants</div>
							</div>
							<div className="ev-stat">
								<div className="num">
									3K<span className="plus">+</span>
								</div>
								<div className="label">
									GitHub Stars / Signups
								</div>
							</div>
							<div
								className="ev-stat"
								style={{ gridColumn: "1 / -1" }}
							>
								<div className="num">
									30<span className="plus">+</span>
								</div>
								<div className="label">Countries</div>
							</div>
						</div>
						<div className="testimonial">
							<div className="testimonial-text">
								Developers from around the world coming together
								to build innovative AI agents using Portia was
								truly inspiring. The creativity and technical
								excellence exceeded our expectations, from
								autonomous workflows to intelligent automation
								tools.
							</div>
							<div className="testimonial-attr">
								<div>
									<div className="who">Mounir Mouawad</div>
									<div className="role">CEO · Portia AI</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SLIDE 15: HackFrost */}
				<section className={isActive(14)}>
					<div className="strip">
						<div className="brand">
							<span>03 /</span> Past Events
						</div>
						<div className="meta">11 of 11 · Kestra</div>
					</div>
					<span className="event-tag">HackFrost × Kestra</span>
					<h2 className="event-title">
						<span style={{ color: "var(--cyan)" }}>HackFrost</span>
					</h2>
					<p className="event-sub">
						<a
							href="https://www.wemakedevs.org/hackathons/hackfrost24"
							target="_blank"
							rel="noopener noreferrer"
						>
							wemakedevs.org/hackathons/hackfrost24
						</a>
					</p>
					<div className="event-body">
						<div className="event-stats">
							<div className="ev-stat featured">
								<div className="num">
									3K<span className="plus">+</span>
								</div>
								<div className="label">Participants</div>
							</div>
							<div className="ev-stat">
								<div className="num">
									2K<span className="plus">+</span>
								</div>
								<div className="label">
									GitHub Stars / Signups
								</div>
							</div>
							<div
								className="ev-stat"
								style={{ gridColumn: "1 / -1" }}
							>
								<div className="num">
									25<span className="plus">+</span>
								</div>
								<div className="label">Countries</div>
							</div>
						</div>
						<div className="testimonial">
							<div className="testimonial-text">
								The very first hackathon around Kestra! With
								over 2,000 participants from around the world,
								an incredible success, brilliant developers
								using Kestra to create innovative projects. An
								inspiring milestone for the Kestra community.
							</div>
							<div className="testimonial-attr">
								<div>
									<div className="who">Emmanuel Darras</div>
									<div className="role">CEO · Kestra</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SLIDE 16: WHAT'S INCLUDED */}
				<section className={isActive(15)}>
					<div className="strip">
						<div className="brand">
							<span>04 /</span> The Package
						</div>
						<div className="meta">What&apos;s included</div>
					</div>
					<div className="eyebrow">What&apos;s included</div>
					<h2 className="title">
						We run the entire engine.
						<br />
						<span className="grad">You focus on your product.</span>
					</h2>
					<div className="included-grid">
						<div className="pack">
							<div className="ico">01</div>
							<h3>Audience &amp; Outcomes</h3>
							<ul>
								<li>5,000+ participants</li>
								<li>GitHub stars &amp; product signups</li>
								<li>
									High-quality developer feedback that has
									shaped many of the tools we&apos;ve worked
									with
								</li>
							</ul>
						</div>
						<div className="pack">
							<div className="ico">02</div>
							<h3>End-to-End Management</h3>
							<ul>
								<li>Full marketing &amp; promotions</li>
								<li>Custom event website setup</li>
								<li>
									All registrations &amp; developer
									communications
								</li>
							</ul>
						</div>
						<div className="pack">
							<div className="ico">03</div>
							<h3>Execution &amp; After</h3>
							<ul>
								<li>Judging &amp; prize logistics</li>
								<li>
									Post-event blogs &amp; project showcases
								</li>
								<li>
									Social amplification across our channels
								</li>
							</ul>
						</div>
					</div>
					<p
						className="lede"
						style={{ marginTop: "2.5rem", textAlign: "center" }}
					>
						We handle everything. You get the developers, the stars,
						the PRs, and the movement.
					</p>
				</section>

				{/* SLIDE 17: CTA */}
				<section className={`${isActive(16)} cta`}>
					<div
						className="eyebrow"
						style={{ justifyContent: "center" }}
					>
						Let&apos;s build something together
					</div>
					<h1 className="display">
						Ready to launch a
						<br />
						<span className="grad">developer movement?</span>
					</h1>
					<p className="cta-sub">
						Reach out and we&apos;ll scope a hackathon, plan the
						goals, and start building.
					</p>
					<div className="cta-links">
						<a
							className="cta-link primary"
							href="mailto:kunal@wemakedevs.org"
						>
							kunal@wemakedevs.org
						</a>
						<a
							className="cta-link"
							href="https://www.wemakedevs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							wemakedevs.org →
						</a>
					</div>
					<div className="cta-sig">
						— Kunal Kushwaha &amp; the WeMakeDevs team
					</div>
				</section>
			</div>

			{/* NAV CONTROLS */}
			<div className="nav-arrows">
				<button
					type="button"
					className="nav-btn"
					onClick={prev}
					disabled={current === 0}
					aria-label="Previous slide"
				>
					←
				</button>
				<button
					type="button"
					className="nav-btn"
					onClick={next}
					disabled={current === TOTAL_SLIDES - 1}
					aria-label="Next slide"
				>
					→
				</button>
			</div>
			<div className="dots">
				{Array.from({ length: TOTAL_SLIDES }, (_, i) => i).map(i => (
					<button
						type="button"
						key={`dot-${i}`}
						className={`dot ${current === i ? "active" : ""}`}
						onClick={() => goTo(i)}
						aria-label={`Go to slide ${i + 1}`}
					/>
				))}
			</div>
			<div className="counter">
				<span className="cur">
					{String(current + 1).padStart(2, "0")}
				</span>{" "}
				/ {String(TOTAL_SLIDES).padStart(2, "0")}
			</div>
		</div>
	);
};

export default Prospects;
