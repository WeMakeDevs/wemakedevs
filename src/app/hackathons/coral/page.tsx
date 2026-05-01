import Faq from "@/components/Faq";
import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AboutSection from "./components/AboutSection";
import CoralHeader from "./components/Header";
import PrizesShowcase from "./components/PrizesShowcase";
import { DATA, faqs, navLinks } from "./data";
import { images } from "./images";

const HackathonPage = () => {
	return (
		<main className="pt-20">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav
				slug={DATA.slug}
				page="overview"
				links={navLinks}
				navCta={{
					label: DATA.cta.label,
					href: DATA.cta.href,
					openInNewTab: DATA.cta.openInNewTab,
					disabled: DATA.cta.disabled,
				}}
			/>

			{/* About Section */}
			<div id="about" className="scroll-mt-16 bg-[#0a0f1e]">
				<CoralHeader
					title={DATA.title}
					description={DATA.description}
					startDate={DATA.startDate}
					endDate={DATA.endDate}
					prize={DATA.prize}
					showDate={DATA.showDate}
					cta={DATA.cta}
				/>

				<ViewContainer className="mt-16 pb-20 bg-[#0c1a2e]/30 rounded-2xl py-12 px-8 treasure-map-bg">
					<h2 className="text-3xl md:text-4xl font-bold text-amber-400 uppercase tracking-wide mb-6 text-center">
						About the Voyage
					</h2>
					<div className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto text-center space-y-4">
						<p>
							In a world where AI agents need data from every
							corner of the seven seas, there&apos;s only one tool
							that lets them query it all as SQL.
						</p>
						<p>
							<strong className="text-amber-400">Coral</strong> is
							an open-source data retrieval layer for agents. It
							lets them query any API, database, or file as SQL
							tables. Coral handles auth, pagination, rate limits,
							cross-source joins, schema learning, and caching.
						</p>
						<p>
							No ETL. No warehouse. No glue code. You can run
							Coral from the CLI or through MCP. Everything is
							local. Credentials, data, and usage history never
							leave your machine.
						</p>
						<p>
							Whether you&apos;re a seasoned AI engineer, an
							agent-pilled software developer, or a curious
							tinkerer experimenting with intelligent agents, this
							hackathon is your voyage to prove what you can build
							with the power of unified data access.
						</p>
						<p className="text-amber-300 font-semibold italic">
							&quot;Not all treasure is silver and gold, mate.
							Sometimes it&apos;s a perfectly joined SQL
							query.&quot;
						</p>
					</div>
				</ViewContainer>
			</div>

			{/* Tracks Section */}
			<div id="tracks" className="scroll-mt-16">
				<AboutSection />
			</div>

			{/* Prizes Section */}
			<div id="prizes" className="scroll-mt-16 bg-[#0c1a2e]/30">
				<PrizesShowcase />
			</div>

			{/* Sponsor Section */}
			<div id="sponsor" className="py-20 scroll-mt-16 bg-[#0a0f1e]">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-bold text-amber-400 uppercase tracking-wide mb-8">
						Sponsor
					</h2>
					<div className="bg-[#0c1a2e]/60 backdrop-blur-sm rounded-2xl border border-amber-500/20 overflow-hidden">
						<div className="flex items-center justify-between p-8 border-b border-amber-500/10 flex-col md:flex-row gap-6">
							<div className="flex items-center gap-4">
								<div className="bg-gradient-to-br from-amber-500 to-amber-700 px-6 py-3 rounded-xl">
									<span className="text-2xl font-bold text-white">
										🪸 Coral
									</span>
								</div>
								<span className="text-slate-400 text-lg">
									Data Retrieval Layer for Agents
								</span>
							</div>
							<Link
								href="https://github.com/withcoral/coral"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 rounded-xl border border-amber-500/50 flex gap-2 items-center bg-[#0c1a2e]/50 hover:bg-amber-500/20 transition-colors duration-300 text-amber-400 font-medium"
							>
								Check out Coral <ArrowUpRight size={18} />
							</Link>
						</div>
						<div className="p-8">
							<div className="text-lg text-slate-300 leading-relaxed space-y-4">
								<p>
									Coral is an open-source data retrieval layer
									for agents that lets them query any API,
									database, or file as SQL tables. Coral
									handles auth, pagination, rate limits,
									cross-source joins, schema learning, and
									caching. No ETL, no warehouse, no glue
									code.
								</p>
								<p>
									You can run Coral from the CLI or through
									MCP. Everything is local. Credentials,
									data, and usage history never leave your
									machine.
								</p>
								<p>
									<strong>How to use it?</strong> For
									hackathon participants, Coral provides a
									unified SQL interface to query data from
									multiple sources. Instead of writing custom
									API integrations, pagination logic, and auth
									flows for each data source, you write SQL
									queries and Coral handles the rest. This
									means you can focus on building your
									agent&apos;s logic and impact while Coral
									handles the data plumbing.
								</p>
								<p>
									Whether you&apos;re connecting GitHub +
									Sentry + Slack for a debugging agent, or
									building a custom source connector for an
									API that doesn&apos;t exist yet, Coral is
									your data layer.
								</p>
							</div>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* Judging Criteria */}
			<div className="scroll-mt-16 py-20 bg-[#0c1a2e]/30">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-bold text-amber-400 uppercase tracking-wide mb-8">
						Judging Criteria
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-[#0c1a2e]/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-amber-500/30 transition-all">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								🏴‍☠️ Potential Impact
							</h3>
							<p className="text-slate-300">
								How effectively does the project address a
								meaningful problem or unlock a valuable use case
								using Coral&apos;s data retrieval capabilities?
							</p>
						</div>
						<div className="bg-[#0c1a2e]/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-amber-500/30 transition-all">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								⚓ Creativity & Originality
							</h3>
							<p className="text-slate-300">
								How unique is the idea? How creatively is Coral
								used to solve problems across multiple data
								sources?
							</p>
						</div>
						<div className="bg-[#0c1a2e]/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-amber-500/30 transition-all">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								🗺️ Learning & Growth
							</h3>
							<p className="text-slate-300">
								The learning curve tackled during the hackathon,
								especially for first-time Coral users and source
								connector builders.
							</p>
						</div>
						<div className="bg-[#0c1a2e]/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-amber-500/30 transition-all">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								⚔️ Technical Implementation
							</h3>
							<p className="text-slate-300">
								How well was the idea executed technically? Quality
								of integration with Coral, SQL queries, and
								cross-source joins.
							</p>
						</div>
						<div className="bg-[#0c1a2e]/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-amber-500/30 transition-all">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								🎨 Aesthetics & UX
							</h3>
							<p className="text-slate-300">
								How intuitive and user-friendly is the final
								experience? Especially if the project has a
								frontend, CLI, or agent interface.
							</p>
						</div>
						<div className="bg-[#0c1a2e]/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-amber-500/30 transition-all">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								🪸 Best Use of Coral
							</h3>
							<p className="text-slate-300">
								How effectively does the project leverage
								Coral&apos;s SQL interface, cross-source joins,
								schema learning, and caching to build something
								powerful?
							</p>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* FAQ Section */}
			<div id="faq" className="scroll-mt-16 py-20 bg-[#0a0f1e]">
				<ViewContainer>
					<div className="[&_h2]:text-amber-400 [&_h2]:font-bold [&_div[class*='pb-4']]:text-amber-700 [&_div[class*='pb-4']_a]:text-amber-700">
						<Faq FAQS={faqs} />
					</div>
				</ViewContainer>
			</div>
		</main>
	);
};

export default HackathonPage;
