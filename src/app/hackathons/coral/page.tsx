import Faq from "@/components/Faq";
import { HackathonNav } from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import PrizesShowcase from "./components/PrizesShowcase";
import TracksSection from "./components/TracksSection";
import WaveDivider from "./components/WaveDivider";
import { DATA, faqs, navLinks } from "./data";

const HackathonPage = () => {
	return (
		<main className="pt-20">
			{/* Hero */}
			<div className="scroll-mt-44">
				<HeroSection
					title={DATA.title}
					description={DATA.description}
					startDate={DATA.startDate}
					endDate={DATA.endDate}
					prize={DATA.prize}
					showDate={DATA.showDate}
					cta={DATA.cta}
				/>
			</div>

			{/* Sticky sub-nav (Overview, Rules, Resources, Schedule) */}
			<div className="sticky top-[96px] z-[120]">
				<ViewContainer>
					<div className="coral-sticky-nav rounded-xl">
						<HackathonNav
							slug={DATA.slug}
							page="overview"
							links={navLinks}
						/>
					</div>
				</ViewContainer>
			</div>

			<WaveDivider />

			{/* About */}
			<div id="about" className="scroll-mt-44 bg-[#002b36]/50">
				<AboutSection />
			</div>

			<WaveDivider />

			{/* Tracks */}
			<div id="tracks" className="scroll-mt-44">
				<TracksSection />
			</div>

			<WaveDivider />

			{/* Prizes */}
			<div id="prizes" className="scroll-mt-44 bg-[#002b36]/30">
				<PrizesShowcase />
			</div>

			<WaveDivider />

			{/* Sponsor */}
			<div id="sponsor" className="scroll-mt-44 py-24">
				<div className="max-w-6xl mx-auto px-4 md:px-8">
					<h2 className="text-3xl md:text-5xl font-bold gold-shimmer-text mb-10 text-center">
						Sponsor
					</h2>
					<div className="parchment-bg rounded-2xl border border-[#d4af37]/10 overflow-hidden">
						<div className="flex items-center justify-between p-6 md:p-8 border-b border-[#d4af37]/8 flex-col md:flex-row gap-6">
							<div className="flex items-center gap-4">
								<div className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37]/20 to-[#b8960c]/20 border border-[#d4af37]/20">
									<span className="text-xl font-bold text-[#d4af37]">
										🪸 Coral
									</span>
								</div>
								<span className="text-[#586e75] text-base">
									Open-source query layer for agents
								</span>
							</div>
							<Link
								href="https://git.new/coral-wemakedevs-may26"
								target="_blank"
								rel="noopener noreferrer"
								className="px-5 py-2.5 rounded-xl border border-[#d4af37]/20 flex gap-2 items-center hover:bg-[#d4af37]/5 transition-colors text-[#d4af37] font-medium text-sm"
							>
								Check out Coral <ArrowUpRight size={16} />
							</Link>
						</div>
						<div className="p-6 md:p-8">
							<div className="text-[#93a1a1] leading-relaxed space-y-5">
								<p>
									Coral is an open-source query layer for
									agents. Any API, database, or file becomes
									a SQL table. Write one query across all of
									them. Coral handles auth, pagination, rate
									limits, and schema mapping.
								</p>
								<p>
									Run Coral from CLI or over MCP. Everything
									runs locally.
								</p>

								{/* Quickstart */}
								<div className="pt-2">
									<p className="text-[#fdf6e3] font-semibold mb-3">
										Quickstart
									</p>
									<div className="rounded-lg border border-[#d4af37]/10 bg-[#001e26] overflow-hidden">
										<div className="flex items-center gap-2 px-4 py-2 border-b border-[#d4af37]/10 bg-[#001a20]">
											<span className="w-2.5 h-2.5 rounded-full bg-[#dc322f]/60" />
											<span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]/60" />
											<span className="w-2.5 h-2.5 rounded-full bg-[#859900]/60" />
											<span className="text-[#586e75] text-xs font-mono ml-2">
												terminal
											</span>
										</div>
										<div className="p-4 font-mono text-sm space-y-1.5 overflow-x-auto">
											<p className="whitespace-nowrap">
												<span className="text-[#2aa198]">
													$
												</span>{" "}
												<span className="text-[#fdf6e3]">
													brew install
													withcoral/tap/coral
												</span>
											</p>
											<p className="whitespace-nowrap">
												<span className="text-[#2aa198]">
													$
												</span>{" "}
												<span className="text-[#fdf6e3]">
													coral source add
												</span>{" "}
												<span className="text-[#586e75]">
													[your source]
												</span>
											</p>
											<p className="whitespace-nowrap">
												<span className="text-[#586e75]">
													# start querying
												</span>
											</p>
										</div>
									</div>
								</div>

								{/* Quick links */}
								<div className="flex flex-wrap gap-3 pt-2">
									<Link
										href="https://withcoral.com/docs"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#d4af37]/15 bg-[#d4af37]/5 text-[#d4af37] text-sm font-medium hover:bg-[#d4af37]/10 transition-colors"
									>
										Docs <ArrowUpRight size={14} />
									</Link>
									<Link
										href="https://withcoral.com/discord"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#2aa198]/15 bg-[#2aa198]/5 text-[#2aa198] text-sm font-medium hover:bg-[#2aa198]/10 transition-colors"
									>
										Discord <ArrowUpRight size={14} />
									</Link>
									<Link
										href="https://git.new/coral-wemakedevs-may26"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#859900]/15 bg-[#859900]/5 text-[#859900] text-sm font-medium hover:bg-[#859900]/10 transition-colors"
									>
										GitHub <ArrowUpRight size={14} />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<WaveDivider />

			{/* Judging Criteria */}
			<div className="py-24 bg-[#002b36]/30">
				<div className="max-w-6xl mx-auto px-4 md:px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-10 text-center">
						Judging Criteria
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
						{[
							{ emoji: "🏴‍☠️", title: "Potential Impact", desc: "How effectively does the project address a meaningful problem using Coral's data retrieval capabilities?" },
							{ emoji: "⚓", title: "Creativity & Originality", desc: "How unique is the idea? How creatively is Coral used to solve problems across multiple data sources?" },
							{ emoji: "🗺️", title: "Learning & Growth", desc: "The learning curve tackled during the hackathon, especially for first-time Coral users." },
							{ emoji: "⚔️", title: "Technical Implementation", desc: "How well was the idea executed technically? Quality of integration with Coral and SQL queries." },
							{ emoji: "🎨", title: "Aesthetics & UX", desc: "How intuitive and user-friendly is the final experience? Frontend, CLI, or agent interface." },
							{ emoji: "🪸", title: "Best Use of Coral", desc: "How effectively does the project leverage Coral's SQL interface, cross-source joins, and caching?" },
						].map((c) => (
							<div key={c.title} className="parchment-bg rounded-xl p-5 border border-[#d4af37]/8 hover:border-[#d4af37]/20 transition-all">
								<h3 className="text-lg font-bold text-[#d4af37] mb-2">
									{c.emoji} {c.title}
								</h3>
								<p className="text-[#586e75] text-sm leading-relaxed">{c.desc}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<WaveDivider />

			{/* FAQ */}
			<div id="faq" className="scroll-mt-44">
				<div className="[&_h2]:text-[#d4af37] [&_h2]:font-bold [&_div[class*='pb-4']]:text-[#5c4813] [&_div[class*='pb-4']_a]:text-[#5c4813] [&_section]:my-0 [&_section]:py-24">
					<Faq FAQS={faqs} />
				</div>
			</div>
		</main>
	);
};

export default HackathonPage;
