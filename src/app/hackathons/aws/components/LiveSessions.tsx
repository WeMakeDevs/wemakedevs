import Image from "next/image";
import { sessionTopics } from "../data";
import { images } from "../images";
import Reveal from "./Reveal";

const icons = [
	<path key="a" strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.5-2.5v9L15 14M4 6h9a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />,
	<path key="b" strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M8 8h8m-8 8h5M4 4h16v12H5.2L4 17.2z" />,
	<path key="c" strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 100 18 9 9 0 000-18zM7.5 12l3 3 6-6" />,
];

export default function LiveSessions() {
	return (
		<section id="sessions" className="relative py-20 sm:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
					<Reveal>
						<p className="font-mono text-xs uppercase tracking-[0.3em] text-orange">
							Live Sessions
						</p>
						<h2 className="mt-3 font-heading font-extrabold text-heading text-3xl sm:text-4xl tracking-tight">
							Learn live from industry experts
						</h2>
						<p className="mt-4 text-lg text-body leading-relaxed">
							Every hackathon runs live sessions where engineers and builders
							teach you cloud and AI in real time. Follow along, ask questions,
							and apply what you learn straight into a hands on project you ship
							during the event.
						</p>
						<ul className="mt-7 space-y-4">
							{sessionTopics.map((t, i) => (
								<li key={t.title} className="flex items-start gap-3">
									<span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange/10 text-orange">
										<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
											{icons[i]}
										</svg>
									</span>
									<div>
										<p className="font-heading font-semibold text-heading">{t.title}</p>
										<p className="mt-0.5 text-sm text-ash">{t.desc}</p>
									</div>
								</li>
							))}
						</ul>
					</Reveal>

					<Reveal className="mt-12 lg:mt-0" delay={0.1}>
						<div className="relative mx-auto max-w-md">
							<div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange/20 to-rust/20 blur-2xl pointer-events-none" />
							<div className="relative glass rounded-3xl overflow-hidden">
								<div className="relative">
									<Image
										src={images.kunal}
										alt="Kunal Kushwaha"
										className="w-full h-auto object-cover"
										placeholder="blur"
									/>
									<div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0C0E] to-transparent pointer-events-none" />
									<span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-orange/40 bg-black/40 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-orange backdrop-blur">
										<span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
										Featured Mentor
									</span>
								</div>
								<div className="p-6">
									<h3 className="font-heading text-xl font-bold text-heading tracking-tight">
										Kunal Kushwaha
									</h3>
									<p className="mt-1 text-sm text-orange font-mono">
										Founder, WeMakeDevs
									</p>
									<p className="mt-3 text-sm text-body leading-relaxed">
										Joining live to help you level up on cloud and AI, and to guide
										your hands on builds throughout the hackathons, alongside AWS
										experts and guest speakers.
									</p>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
