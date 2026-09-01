import Faq from "@/components/Faq";
import { HackathonNav } from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { SiSlack } from "@icons-pack/react-simple-icons";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import PrizesShowcase from "./components/PrizesShowcase";
import ProblemSolution from "./components/ProblemSolution";
import Signals from "./components/Signals";
import SponsorTestimonial from "./components/SponsorTestimonial";
import Tracks from "./components/Tracks";
import { DATA, faqs, navLinks } from "./data";
import { images } from "./images";

const judgingCriteria = [
	{
		title: "Potential Impact",
		description:
			"How effectively does the project address a meaningful problem or unlock a valuable use case with observability?",
	},
	{
		title: "Creativity & Innovation",
		description:
			"How unique is the idea? Does it push the boundaries of what's possible when you can see inside your systems?",
	},
	{
		title: "Technical Excellence",
		description:
			"How well is the project implemented? Does it demonstrate strong engineering practices and clean, maintainable code?",
	},
	{
		title: "Best Use of SigNoz",
		description:
			"How deeply and effectively does the project lean on SigNoz, traces, metrics, logs, dashboards, and alerts?",
	},
	{
		title: "User Experience",
		description:
			"Is the project intuitive to use? Does it provide a polished experience that users would actually want to adopt?",
	},
	{
		title: "Presentation Quality",
		description:
			"How clearly is the project presented? Do the demo, README, and submission communicate the problem, solution, and impact?",
	},
];

const HackathonPage = () => {
	return (
		<main className="pt-20">
			{/* ── Hero ──────────────────────────────────────────────────────────── */}
			<div id="about" className="scroll-mt-44">
				<HeroSection
					title={DATA.title}
					description={DATA.description}
					prize={DATA.prize}
					cta={DATA.cta}
				/>
			</div>

			{/* ── Sticky sub-page nav ───────────────────────────────────────────── */}
			<div className="sticky top-[96px] z-[120]">
				<ViewContainer>
					<div className="signoz-sticky-nav rounded-xl">
						<HackathonNav
							slug={DATA.slug}
							page="overview"
							links={navLinks}
						/>
					</div>
				</ViewContainer>
			</div>

			{/* ── Sponsor testimonial ───────────────────────────────────────────── */}
			<SponsorTestimonial />

			{/* ── The Mission (overview) ────────────────────────────────────────── */}
			<div id="overview" className="scroll-mt-44 py-20 agency-grid">
				<ViewContainer>
					<div className="text-center max-w-3xl mx-auto">
						<span className="inline-flex items-center gap-2 bg-[#2be38b]/10 border border-[#2be38b]/30 text-[#2be38b] px-5 py-2 rounded-full text-sm font-semibold mb-6">
							⬢ The Mission
						</span>
						<h2 className="text-3xl md:text-5xl font-black uppercase text-[#f5f5f5] glow-orange">
							See Inside{" "}
							<span className="text-[#e5502a]">Everything</span>{" "}
							You Ship
						</h2>
						<p className="text-lg text-[#c0c1c3] mt-4">
							Your mission in this hackathon is to build
							agent-native observability workflows, SRE copilots,
							and AI/LLM observability dashboards powered by
							SigNoz. It&apos;s not about how fast you code,
							it&apos;s about how deep you can see.
						</p>
					</div>
				</ViewContainer>
			</div>

			{/* ── Prizes ────────────────────────────────────────────────────────── */}
			<div id="prizes" className="scroll-mt-44 agency-grid">
				<PrizesShowcase />
			</div>

			{/* ── Why we're doing this (Problem / Solution) ─────────────────────── */}
			<div id="why" className="scroll-mt-44">
				<ProblemSolution />
			</div>

			{/* ── Sponsor ───────────────────────────────────────────────────────── */}
			<div id="sponsor" className="py-20 scroll-mt-44">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-black uppercase text-[#f5f5f5] glow-orange mb-8">
						Powered By <span className="normal-case">SigNoz</span>
					</h2>
					<div className="dossier-card rounded-2xl overflow-hidden">
						<div className="flex items-center justify-between p-8 border-b border-[#3c4152] flex-col md:flex-row gap-6">
							<div className="flex items-center gap-4">
								<div className="bg-white px-5 py-3 rounded-xl border border-[#3c4152]">
									<Image
										src={images.logo}
										alt="SigNoz"
										className="h-8 w-auto"
									/>
								</div>
								<span className="text-[#c0c1c3] text-lg">
									OpenTelemetry-native observability
								</span>
							</div>
							<div className="flex flex-wrap items-center gap-3">
								<Link
									href={DATA.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-3 rounded-xl flex gap-2 items-center bg-gradient-to-r from-[#ea6e4a] to-[#e5502a] hover:opacity-90 transition-opacity duration-300 text-white font-bold border border-[#ffcd56]/50 shadow-md"
								>
									<Star size={18} className="fill-white" />{" "}
									Star SigNoz on GitHub
								</Link>
								<Link
									href={DATA.slackUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-3 rounded-xl flex gap-2 items-center bg-[#4A154B] hover:bg-[#611f5f] transition-colors duration-300 text-white font-bold shadow-md"
								>
									<SiSlack size={18} /> Join SigNoz Slack
								</Link>
							</div>
						</div>
						<div className="p-8">
							<p className="text-lg text-[#c0c1c3] leading-relaxed">
								SigNoz is the one-stop open observability
								platform built for the AI era. Instrument your
								agents, LLMs, and the tools they call to see{" "}
								<span className="text-[#e5502a] font-semibold">
									traces
								</span>
								,{" "}
								<span className="text-[#2be38b] font-semibold">
									metrics
								</span>
								,{" "}
								<span className="text-[#ffcd56] font-semibold">
									logs
								</span>
								, and{" "}
								<span className="text-[#5fe9ff] font-semibold">
									token cost
								</span>{" "}
								in one place. Then point your coding agent at
								MCP, and your agents debug with the same data.
								Open source, built on OpenTelemetry, the
								standard your agents already speak, with no
								proprietary agents or lock-in.
							</p>

							<div className="mt-6 rounded-2xl border border-[#2be38b]/30 bg-[#2be38b]/8 px-6 py-5">
								<div className="flex items-start gap-3">
									<span className="text-2xl">🛰️</span>
									<div>
										<p className="text-[#2be38b] font-bold text-lg">
											Self-host SigNoz, free and open
											source
										</p>
										<p className="text-[#c0c1c3] text-sm">
											Run SigNoz yourself with Docker or
											Kubernetes and start ingesting
											telemetry in minutes.{" "}
											<Link
												href="https://signoz.io/docs/install/self-host/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-[#ffd778] underline hover:text-[#2be38b]"
											>
												See the self-host install guide
											</Link>
											.
										</p>
									</div>
								</div>
							</div>

							<div className="mt-4 rounded-2xl border border-[#ffcd56]/30 bg-[#ffcd56]/8 px-6 py-5">
								<div className="flex items-start gap-3">
									<span className="text-2xl">🔌</span>
									<div>
										<p className="text-[#ffcd56] font-bold text-lg">
											Don&apos;t build it alone
										</p>
										<p className="text-[#c0c1c3] text-sm">
											SigNoz is OpenTelemetry-native, with
											integrations for cloud providers
											(AWS, GCP, Azure), databases,
											message queues, web frameworks, and
											more. Browse the{" "}
											<Link
												href="https://signoz.io/docs/integrations/integrations-list/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-[#ffd778] underline hover:text-[#ffcd56]"
											>
												full integrations list
											</Link>{" "}
											to find yours and ship instrumented
											systems faster.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* ── Observability signals ─────────────────────────────────────────── */}
			<div id="signals" className="scroll-mt-44 agency-grid">
				<Signals />
			</div>

			{/* ── Tracks ────────────────────────────────────────────────────────── */}
			<div id="projects" className="scroll-mt-44">
				<Tracks />
			</div>

			{/* ── Judging Criteria ──────────────────────────────────────────────── */}
			<div id="judging" className="scroll-mt-44 py-20">
				<ViewContainer>
					<div className="text-center mb-12">
						<span className="inline-flex items-center gap-2 bg-[#e5502a]/10 border border-[#e5502a]/30 text-[#ea6e4a] px-5 py-2 rounded-full text-sm font-semibold mb-6">
							⚖️ How You&apos;re Judged
						</span>
						<h2 className="text-3xl md:text-4xl font-black uppercase text-[#f5f5f5] glow-orange">
							Judging Criteria
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{judgingCriteria.map((criterion, i) => (
							<div
								key={criterion.title}
								className="dossier-card rounded-xl p-6 group"
							>
								<div className="flex items-center gap-3 mb-3">
									<span className="font-mono text-xs text-[#ffd778] bg-[#ffcd56]/12 px-2 py-0.5 rounded">
										{String(i + 1).padStart(2, "0")}
									</span>
									<h3 className="text-lg font-bold text-[#ea6e4a]">
										{criterion.title}
									</h3>
								</div>
								<p className="text-[#c0c1c3] text-sm leading-relaxed">
									{criterion.description}
								</p>
							</div>
						))}
					</div>
				</ViewContainer>
			</div>

			{/* ── FAQ ───────────────────────────────────────────────────────────── */}
			<div id="faq" className="scroll-mt-44 py-20">
				<ViewContainer>
					<div className="[&_h2]:text-[#f5f5f5] [&_h2]:font-bold">
						<Faq FAQS={faqs} />
					</div>

					<div className="mt-10 flex justify-center">
						<div className="inline-flex flex-col sm:flex-row items-center gap-4 mib-glass-bg rounded-2xl px-8 py-5 border border-[#4A154B]/50 shadow-md text-center sm:text-left">
							<SiSlack
								size={28}
								className="text-[#ECB22E] shrink-0"
							/>
							<p className="text-[#c0c1c3] font-medium">
								Still have questions? Join the SigNoz Slack and
								get help in real time.
							</p>
							<Link
								href={DATA.slackUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4A154B] hover:bg-[#611f5f] transition-colors text-white font-bold"
							>
								<SiSlack size={18} /> Join SigNoz Slack
							</Link>
						</div>
					</div>
				</ViewContainer>
			</div>
		</main>
	);
};

export default HackathonPage;
