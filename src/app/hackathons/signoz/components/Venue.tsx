import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { venue } from "../data";
import { BrightDataLogo } from "./BrandLogos";

const Venue = () => {
	return (
		<div className="py-20">
			<ViewContainer>
				<div className="text-center max-w-2xl mx-auto mb-12">
					<span className="sz-eyebrow">Venue</span>
					<h2 className="mt-6 text-3xl md:text-5xl font-black uppercase text-[#f5f7fa]">
						{venue.name}
					</h2>
					<p className="mt-4 text-lg text-[#c0c1c3]">
						{venue.description}
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6">
					{/* ── Map ── */}
					<div className="rounded-2xl overflow-hidden border border-[#3c4152]/60 min-h-[340px] lg:min-h-full">
						<iframe
							title={`Map of ${venue.name}, ${venue.shortAddress}`}
							src={venue.mapEmbedUrl}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="block h-full min-h-[340px] w-full border-0 grayscale-[0.35] contrast-[1.05]"
						/>
					</div>

					{/* ── Address + event day ── */}
					<div className="flex flex-col gap-6">
						<div className="dossier-card rounded-2xl p-7">
							<div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#ea6e4a]">
								Address
							</div>
							<address className="mt-3 not-italic font-mono text-[15px] leading-[1.85] text-[#f5f7fa]">
								{venue.name}
								<br />
								{venue.host} · {venue.addressLines[0]}
								<br />
								{venue.addressLines[1]}
								<br />
								{venue.addressLines[2]}
							</address>
							<div className="mt-6 flex flex-wrap gap-3">
								<Link
									href={venue.directionsUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 rounded-lg border border-[#e5502a]/50 bg-[#e5502a]/10 px-5 py-2.5 font-semibold text-[#ea6e4a] transition-colors hover:bg-[#e5502a]/20"
								>
									Get Directions
									<ArrowUpRight className="w-4 h-4" />
								</Link>
								<Link
									href="https://brightdata.com"
									target="_blank"
									rel="noopener noreferrer"
									className="sz-ghost-btn inline-flex items-center gap-2.5 rounded-lg border border-[#3c4152] px-5 py-2.5 font-semibold text-[#e8eaee] transition-all hover:border-[#8b93a7] hover:text-[#f5f7fa]"
								>
									About
									<BrightDataLogo className="h-[15px] w-auto" />
									<ArrowUpRight className="w-4 h-4" />
								</Link>
							</div>
						</div>

						<div className="dossier-card rounded-2xl p-7">
							<div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8b93a7]">
								Event day
							</div>
							<div className="mt-2.5 font-mono text-lg md:text-xl font-bold text-[#f5f7fa]">
								{venue.dateLabel}
							</div>
						</div>
					</div>
				</div>

				{/* ── Getting there ── */}
				<div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div className="dossier-card rounded-2xl p-7">
						<h3 className="text-lg font-extrabold text-[#f5f7fa]">
							Getting there
						</h3>
						<div className="mt-5 grid gap-4">
							{venue.travel.map(row => (
								<div key={row.mode} className="flex gap-3">
									<Check className="mt-1 h-4 w-4 shrink-0 text-[#2be38b]" />
									<p className="text-[14.5px] leading-relaxed text-[#c0c1c3]">
										<strong className="block text-sm text-[#f5f7fa]">
											{row.mode}
										</strong>
										{row.detail}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
						{venue.facilities.map(item => (
							<div
								key={item.title}
								className="dossier-card rounded-2xl p-6"
							>
								<h3 className="text-base font-extrabold text-[#f5f7fa]">
									{item.title}
								</h3>
								<p className="mt-2 text-[14px] leading-relaxed text-[#c0c1c3]">
									{item.detail}
								</p>
							</div>
						))}
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default Venue;
