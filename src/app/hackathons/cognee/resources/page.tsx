import {
	HackathonContentTitle,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { ViewContainer } from "@/components/ui/view-container";
import Link from "next/link";
import { DATA, navLinks } from "../data";
import { images } from "../images";

const linkClass =
	"text-[#ffb800] underline hover:no-underline hover:text-[#ffd24a]";

const HackathonResources = async () => {
	return (
		<div className="pt-20 pb-10 bg-gradient-to-b from-[#0d0618] via-[#160a26] to-[#0d0618] min-h-screen [&_h2]:text-[#ffd24a]">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<div className="sticky top-[96px] z-[120]">
				<ViewContainer>
					<div className="cognee-sticky-nav rounded-xl">
						<HackathonNav
							slug={DATA.slug}
							page="resources"
							links={navLinks}
							navCta={{
								label: DATA.cta.label,
								href: DATA.cta.href,
								openInNewTab: DATA.cta.openInNewTab,
								disabled: DATA.cta.disabled,
							}}
						/>
					</div>
				</ViewContainer>
			</div>
			<ViewContainer>
				<HackathonContentTitle className="text-[#ffd24a]">
					Claim Your Free Cognee Cloud Credit
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<div className="rounded-2xl border border-[#21e6c1]/40 bg-[#00e0d5]/10 px-6 py-5 backdrop-blur-sm shadow-[0_0_30px_rgba(0,224,213,0.16)]">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
							<div className="flex items-start gap-3">
								<span className="text-2xl">🎁</span>
								<div>
									<p className="text-[#21e6c1] font-bold text-lg">
										Free Developer plan ($35 value)
									</p>
									<p className="text-slate-300 text-sm">
										Sign up to{" "}
										<Link
											href="https://platform.cognee.ai/sign-in"
											className={linkClass}
											target="_blank"
											rel="noopener noreferrer"
										>
											Cognee Cloud
										</Link>{" "}
										for free and unlock the Developer plan
										with code{" "}
										<code className="font-mono font-bold text-[#ffd24a] bg-[#ffb800]/15 border border-[#ffb800]/30 rounded px-1.5 py-0.5">
											COGNEE-35
										</code>{" "}
										for free access.
									</p>
								</div>
							</div>
							<Link
								href="https://platform.cognee.ai/sign-in"
								target="_blank"
								rel="noopener noreferrer"
								className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#00e0d5] to-[#21a8e6] text-[#0d0618] font-bold hover:opacity-90 transition-opacity"
							>
								Claim free credit
							</Link>
						</div>
					</div>
				</HackathonContentBody>
				<HackathonContentTitle className="text-[#ffd24a]">
					Get Started with Cognee
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://docs.cognee.ai/guides/self-improvement-quickstart"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Self-Improvement Quickstart
							</Link>{" "}
							— spin up your memory layer and call remember() /
							recall() in minutes
						</li>
						<li>
							<Link
								href="https://docs.cognee.ai"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Cognee Documentation
							</Link>{" "}
							— full docs for the memory lifecycle APIs and
							integrations
						</li>
						<li>
							<Link
								href="https://github.com/topoteretes/cognee"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Cognee GitHub Repository
							</Link>{" "}
							— the open-source repo. Star it and find issues to
							contribute to
						</li>
						<li>
							<Link
								href="https://www.cognee.ai"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Cognee Website
							</Link>{" "}
							— learn about the memory layer for AI
						</li>
						<li>
							<Link
								href="https://github.com/topoteretes/karpathy-wiki"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Andrej Karpathy Wiki
							</Link>{" "}
							— a real example of Cognee turning content into a
							queryable knowledge graph
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#ffd24a]">
					The Core Memory Lifecycle APIs
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<strong className="text-[#ffd24a]">
								remember()
							</strong>{" "}
							— ingest text, files, and URLs and permanently
							structure them into the knowledge graph
						</li>
						<li>
							<strong className="text-[#ffd24a]">recall()</strong>{" "}
							— query memory; Cognee automatically routes between
							semantic similarity and deep graph traversals
						</li>
						<li>
							<strong className="text-[#ffd24a]">
								improve() / memify
							</strong>{" "}
							— run post-ingestion enrichment, prune stale nodes,
							and adapt weights based on feedback
						</li>
						<li>
							<strong className="text-[#ffd24a]">forget()</strong>{" "}
							— surgically prune or delete datasets when
							they&apos;re no longer needed
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#ffd24a]">
					Ecosystem Integrations
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<strong className="text-[#ffd24a]">
								LangGraph:
							</strong>{" "}
							use <code>cognee-integration-langgraph</code> to
							spin up session-isolated memory tools
						</li>
						<li>
							<strong className="text-[#ffd24a]">n8n:</strong> use{" "}
							<code>n8n-nodes-cognee</code> to build never-forget
							AI workflows without writing backend code
						</li>
						<li>
							<strong className="text-[#ffd24a]">
								Claude Code & Cursor:
							</strong>{" "}
							build plugins or use the Model Context Protocol
							(MCP) server so your IDE agents have local project
							memory
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#ffd24a]">
					Need Help? Join the Community
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-2 list-disc list-inside">
						<li>
							Join the{" "}
							<Link
								href={DATA.discordUrl}
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Discord
							</Link>{" "}
							for technical support, doubts, and community
							discussion
						</li>
						<li>
							For other queries, contact us at{" "}
							<Link
								href="mailto:contact@wemakedevs.org"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								contact@wemakedevs.org
							</Link>
						</li>
					</ul>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
