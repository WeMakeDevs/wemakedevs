"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";
import { previousWebinars } from "../data";

const PreviousWebinars = () => {
	const [index, setIndex] = useState(0);
	const [playing, setPlaying] = useState(false);
	const total = previousWebinars.length;
	const current = previousWebinars[index];

	const go = (next: number) => {
		setIndex((next + total) % total);
		setPlaying(false);
	};

	return (
		<div className="py-20">
			<ViewContainer>
				<div className="text-center max-w-2xl mx-auto mb-12">
					<span className="inline-flex items-center gap-2 rounded-full border border-[#e5502a]/30 bg-[#e5502a]/10 px-5 py-2 text-sm font-semibold text-[#ea6e4a]">
						▶ From The Archives
					</span>
					<h2 className="mt-6 text-3xl md:text-5xl font-black uppercase text-[#f5f7fa] glow-orange">
						Previous Edition Webinars
					</h2>
					<p className="mt-4 text-lg text-[#c0c1c3]">
						Sessions we hosted during Edition 1. Catch up before you
						build.
					</p>
				</div>

				<div className="dossier-card rounded-2xl p-4 md:p-6 max-w-4xl mx-auto">
					{/* ── Player ── */}
					<div className="relative aspect-video overflow-hidden rounded-xl bg-[#08090b]">
						{playing ? (
							<iframe
								key={current.videoId}
								title={current.title}
								src={`https://www.youtube.com/embed/${current.videoId}?autoplay=1&rel=0`}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className="h-full w-full border-0"
							/>
						) : (
							<button
								type="button"
								onClick={() => setPlaying(true)}
								className="group relative block h-full w-full"
								aria-label={`Play ${current.title}`}
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={`https://i.ytimg.com/vi/${current.videoId}/maxresdefault.jpg`}
									alt=""
									className="h-full w-full object-cover"
									loading="lazy"
								/>
								<span className="absolute inset-0 bg-[#08090b]/25 transition-colors group-hover:bg-[#08090b]/10" />
								<span className="absolute inset-0 grid place-items-center">
									<span className="grid h-16 w-16 place-items-center rounded-full bg-[#e5502a] shadow-[0_10px_30px_rgba(229,80,42,0.5)] transition-transform group-hover:scale-110">
										<Play className="h-7 w-7 translate-x-0.5 fill-white text-white" />
									</span>
								</span>
							</button>
						)}
					</div>

					{/* ── Meta + controls ── */}
					<div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
						<div className="min-w-0">
							<div className="font-mono text-xs tracking-[0.16em] text-[#62687c]">
								{String(index + 1).padStart(2, "0")} /{" "}
								{String(total).padStart(2, "0")}
							</div>
							<h3 className="mt-1.5 text-xl md:text-2xl font-extrabold text-[#ea6e4a]">
								{current.title}
							</h3>
							<p className="mt-1 text-sm text-[#8b93a7]">
								{current.date}
							</p>
							<p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-[#c0c1c3]">
								{current.blurb}
							</p>
						</div>

						<div className="flex shrink-0 gap-2.5">
							<button
								type="button"
								onClick={() => go(index - 1)}
								aria-label="Previous session"
								className="grid h-11 w-11 place-items-center rounded-full border border-[#3c4152] text-[#c0c1c3] transition-colors hover:border-[#5fe9ff] hover:text-[#5fe9ff]"
							>
								<ChevronLeft className="h-5 w-5" />
							</button>
							<button
								type="button"
								onClick={() => go(index + 1)}
								aria-label="Next session"
								className="grid h-11 w-11 place-items-center rounded-full border border-[#3c4152] text-[#c0c1c3] transition-colors hover:border-[#5fe9ff] hover:text-[#5fe9ff]"
							>
								<ChevronRight className="h-5 w-5" />
							</button>
						</div>
					</div>

					{/* ── Dots ── */}
					<div className="mt-5 flex justify-center gap-2.5">
						{previousWebinars.map((webinar, i) => (
							<button
								key={webinar.videoId}
								type="button"
								onClick={() => go(i)}
								aria-label={`Go to ${webinar.title}`}
								aria-current={i === index}
								className={`h-2 rounded-full transition-all ${
									i === index
										? "w-6 bg-[#e5502a]"
										: "w-2 bg-[#3c4152] hover:bg-[#62687c]"
								}`}
							/>
						))}
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default PreviousWebinars;
