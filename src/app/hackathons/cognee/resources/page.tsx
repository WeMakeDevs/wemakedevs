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
	"text-[#8a5a00] underline hover:no-underline hover:text-[#c33124]";

const HackathonResources = async () => {
	return (
		<div className="pt-20 pb-10 bg-gradient-to-b from-[#f7ead0] via-[#f1dcb4] to-[#f7ead0] min-h-screen [&_h2]:text-[#c33124]">
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
				<HackathonContentTitle className="text-[#c33124]">
					Claim Your Free Cognee Cloud Credit
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#4a3624]">
					<div className="rounded-2xl border-2 border-[#0e8a80]/30 bg-[#0e8a80]/8 px-6 py-5">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
							<div className="flex items-start gap-3">
								<span className="text-2xl">🎁</span>
								<div>
									<p className="text-[#0e8a80] font-bold text-lg">
										Free Developer plan ($35 value)
									</p>
									<p className="text-[#4a3624] text-sm">
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
										<code className="font-mono font-bold text-[#c33124] bg-[#b07d12]/15 border border-[#b07d12]/30 rounded px-1.5 py-0.5">
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
								className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#0e8a80] to-[#0c736b] text-white font-bold hover:opacity-90 transition-opacity"
							>
								Claim free credit
							</Link>
						</div>
					</div>
				</HackathonContentBody>
				<HackathonContentTitle className="text-[#c33124]">
					Get Started with Cognee
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#4a3624]">
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

				<HackathonContentTitle className="text-[#c33124]">
					The Core Memory Lifecycle APIs
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#4a3624]">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<strong className="text-[#c33124]">
								remember()
							</strong>{" "}
							— ingest text, files, and URLs and permanently
							structure them into the knowledge graph
						</li>
						<li>
							<strong className="text-[#c33124]">recall()</strong>{" "}
							— query memory; Cognee automatically routes between
							semantic similarity and deep graph traversals
						</li>
						<li>
							<strong className="text-[#c33124]">
								improve() / memify
							</strong>{" "}
							— run post-ingestion enrichment, prune stale nodes,
							and adapt weights based on feedback
						</li>
						<li>
							<strong className="text-[#c33124]">forget()</strong>{" "}
							— surgically prune or delete datasets when
							they&apos;re no longer needed
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#c33124]">
					Ecosystem Integrations
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#4a3624]">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<strong className="text-[#c33124]">
								LangGraph:
							</strong>{" "}
							use <code>cognee-integration-langgraph</code> to
							spin up session-isolated memory tools
						</li>
						<li>
							<strong className="text-[#c33124]">n8n:</strong> use{" "}
							<code>n8n-nodes-cognee</code> to build never-forget
							AI workflows without writing backend code
						</li>
						<li>
							<strong className="text-[#c33124]">
								Claude Code & Cursor:
							</strong>{" "}
							build plugins or use the Model Context Protocol
							(MCP) server so your IDE agents have local project
							memory
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#c33124]">
					Need Help? Join the Community
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#4a3624]">
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
