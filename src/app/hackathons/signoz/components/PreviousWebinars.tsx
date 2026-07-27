"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";
import { previousWebinars } from "../data";

const PER_PAGE = 2;

const PreviousWebinars = () => {
	const [page, setPage] = useState(0);
	const [playing, setPlaying] = useState<string | null>(null);

	const pageCount = Math.ceil(previousWebinars.length / PER_PAGE);
	const visible = previousWebinars.slice(
		page * PER_PAGE,
		page * PER_PAGE + PER_PAGE,
	);

	const go = (next: number) => {
		setPage((next + pageCount) % pageCount);
		setPlaying(null);
	};

	return (
		<div className="py-20">
			<ViewContainer>
				<div className="text-center max-w-2xl mx-auto mb-12">
					<span className="sz-eyebrow">From the archives</span>
					<h2 className="mt-6 text-3xl md:text-5xl font-black uppercase text-[#f5f7fa]">
						Previous Edition Webinars
					</h2>
					<p className="mt-4 text-lg text-[#c0c1c3]">
						Sessions we hosted during Edition 1.
					</p>
				</div>

				<div className="max-w-5xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						{visible.map(webinar => (
							<div
								key={webinar.videoId}
								className="dossier-card rounded-2xl p-4 flex flex-col"
							>
								{/* ── Player ── */}
								<div className="relative aspect-video overflow-hidden rounded-xl bg-[#08090b]">
									{playing === webinar.videoId ? (
										<iframe
											title={webinar.title}
											src={`https://www.youtube.com/embed/${webinar.videoId}?autoplay=1&rel=0`}
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
											className="h-full w-full border-0"
										/>
									) : (
										<button
											type="button"
											onClick={() =>
												setPlaying(webinar.videoId)
											}
											className="group relative block h-full w-full"
											aria-label={`Play ${webinar.title}`}
										>
											{/* eslint-disable-next-line @next/next/no-img-element */}
											<img
												src={`https://i.ytimg.com/vi/${webinar.videoId}/maxresdefault.jpg`}
												alt=""
												className="h-full w-full object-cover"
												loading="lazy"
											/>
											<span className="absolute inset-0 bg-[#08090b]/30 transition-colors group-hover:bg-[#08090b]/10" />
											<span className="absolute inset-0 grid place-items-center">
												<span className="grid h-14 w-14 place-items-center rounded-full bg-[#e5502a] shadow-[0_8px_24px_rgba(229,80,42,0.45)] transition-transform group-hover:scale-110">
													<Play className="h-6 w-6 translate-x-0.5 fill-white text-white" />
												</span>
											</span>
										</button>
									)}
								</div>

								{/* ── Meta ── */}
								<div className="mt-4 px-1 pb-1">
									<h3 className="text-lg md:text-xl font-extrabold text-[#ea6e4a]">
										{webinar.title}
									</h3>
									<p className="mt-1 text-sm text-[#8b93a7]">
										{webinar.date}
									</p>
									<p className="mt-2 text-[14.5px] leading-relaxed text-[#c0c1c3]">
										{webinar.blurb}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* ── Controls ── */}
					<div className="mt-7 flex items-center justify-between gap-4">
						<div className="font-mono text-xs tracking-[0.16em] text-[#62687c]">
							{String(page + 1).padStart(2, "0")} /{" "}
							{String(pageCount).padStart(2, "0")}
						</div>

						<div className="flex gap-2.5">
							{Array.from({ length: pageCount }, (_, i) => (
								<button
									// biome-ignore lint/suspicious/noArrayIndexKey: pages are positional
									key={i}
									type="button"
									onClick={() => go(i)}
									aria-label={`Go to page ${i + 1}`}
									aria-current={i === page}
									className={`h-2 rounded-full transition-all ${
										i === page
											? "w-6 bg-[#e5502a]"
											: "w-2 bg-[#3c4152] hover:bg-[#62687c]"
									}`}
								/>
							))}
						</div>

						<div className="flex shrink-0 gap-2.5">
							<button
								type="button"
								onClick={() => go(page - 1)}
								aria-label="Previous sessions"
								className="grid h-10 w-10 place-items-center rounded-full border border-[#3c4152] text-[#c0c1c3] transition-colors hover:border-[#8b93a7] hover:text-[#f5f7fa]"
							>
								<ChevronLeft className="h-5 w-5" />
							</button>
							<button
								type="button"
								onClick={() => go(page + 1)}
								aria-label="Next sessions"
								className="grid h-10 w-10 place-items-center rounded-full border border-[#3c4152] text-[#c0c1c3] transition-colors hover:border-[#8b93a7] hover:text-[#f5f7fa]"
							>
								<ChevronRight className="h-5 w-5" />
							</button>
						</div>
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default PreviousWebinars;
