import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { sponsors } from "../data";
import { BrightDataLogo, SigNozLogo } from "./BrandLogos";

/** Each sponsor renders its own wordmark rather than a styled text name. */
const sponsorLogos: Record<string, React.ReactNode> = {
	SigNoz: (
		<SigNozLogo className="text-[1.75rem] font-black tracking-[-0.02em] text-[#f5f7fa]" />
	),
	"Bright Data": <BrightDataLogo className="h-8 w-auto text-[#f5f7fa]" />,
};

const perks = [
	{
		num: "01",
		title: "Reach practitioners",
		body: "Attendees are approved individually, so the room skews heavily toward people who actually operate systems rather than casual drop-ins.",
	},
	{
		num: "02",
		title: "Sponsor a session",
		body: "Put your product in front of builders for a full day, on the main stage or in the workshop room.",
	},
	{
		num: "03",
		title: "Open-source aligned",
		body: "The programme is built around OpenTelemetry and open-source tooling. No vendor-pitch keynotes.",
	},
];

const Sponsors = () => {
	return (
		<div className="py-20">
			<ViewContainer>
				<div className="max-w-2xl mb-12">
					<span className="sz-eyebrow">Sponsors</span>
					<h2 className="mt-6 text-3xl md:text-5xl font-black uppercase text-[#f5f7fa]">
						Backed by the people building observability
					</h2>
					<p className="mt-4 text-lg text-[#c0c1c3]">
						This conference exists because two teams put real weight
						behind it. One builds the observability platform, one
						opened their doors in San Francisco.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{sponsors.map(sponsor => (
						<div
							key={sponsor.name}
							className="dossier-card rounded-2xl p-8 flex flex-col"
							style={{ borderColor: `${sponsor.accent}55` }}
						>
							<div
								className="font-mono text-[11px] uppercase tracking-[0.18em]"
								style={{ color: sponsor.accent }}
							>
								{sponsor.tier}
							</div>
							<div className="mt-5 flex h-9 items-center">
								{sponsorLogos[sponsor.name]}
							</div>
							<p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#c0c1c3]">
								{sponsor.blurb}
							</p>
							<div className="mt-6 flex flex-wrap gap-2.5">
								{sponsor.links.map(link => {
									const external =
										link.href.startsWith("http");
									return (
										<Link
											key={link.href}
											href={link.href}
											target={
												external ? "_blank" : undefined
											}
											rel={
												external
													? "noopener noreferrer"
													: undefined
											}
											className="sz-ghost-btn inline-flex items-center gap-1.5 rounded-lg border border-[#3c4152] px-4 py-2 text-sm font-bold text-[#f5f7fa] transition-all hover:border-[#8b93a7] hover:text-[#f5f7fa]"
										>
											{link.label}
											{external && (
												<ArrowUpRight className="h-3.5 w-3.5" />
											)}
										</Link>
									);
								})}
							</div>
						</div>
					))}
				</div>

				{/* ── Sponsor us ── */}
				<div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
					<div>
						<span className="sz-eyebrow">Get involved</span>
						<h3 className="mt-6 text-2xl md:text-3xl font-extrabold text-[#f5f7fa]">
							Sponsor the conference
						</h3>
						<p className="mt-4 text-base leading-relaxed text-[#c0c1c3]">
							A room of engineers who run production systems, for
							a full day: platform and infra engineers, SREs,
							backend developers and the people deciding what
							their teams adopt next. A smaller number of founders
							and engineering leaders attend alongside them.
						</p>
						<p className="mt-4 text-base leading-relaxed text-[#c0c1c3]">
							Sponsorship covers stage time, workshop slots, booth
							space at the venue and logo placement. Tiers and
							pricing on request.
						</p>
						<Link
							href="mailto:contact@wemakedevs.org?subject=Sponsorship%20%E2%80%94%20Agents%20of%20SigNoz%20Edition%202"
							className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#e5502a] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#c4421f]"
						>
							Request the sponsor pack
							<ArrowUpRight className="h-4 w-4" />
						</Link>
					</div>

					<div className="grid gap-4">
						{perks.map(perk => (
							<div
								key={perk.num}
								className="dossier-card rounded-xl p-6"
							>
								<span className="font-mono text-xs tracking-[0.12em] text-[#8b93a7]">
									{perk.num}
								</span>
								<h4 className="mt-2 text-lg font-extrabold text-[#f5f7fa]">
									{perk.title}
								</h4>
								<p className="mt-2 text-[14.5px] leading-relaxed text-[#c0c1c3]">
									{perk.body}
								</p>
							</div>
						))}
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default Sponsors;
