import {
	HackathonContentTitle,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { ViewContainer } from "@/components/ui/view-container";
import { SiSlack } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { DATA, navLinks } from "../data";
import { images } from "../images";

const linkClass =
	"text-[#ffd778] underline hover:no-underline hover:text-[#ea6e4a]";

const HackathonResources = async () => {
	return (
		<div className="pt-20 pb-10 bg-gradient-to-b from-[#0b0c0e] via-[#0e1014] to-[#0b0c0e] min-h-screen [&_h2]:text-[#f5f5f5]">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<div className="sticky top-[96px] z-[120]">
				<ViewContainer>
					<div className="signoz-sticky-nav rounded-xl">
						<HackathonNav
							slug={DATA.slug}
							page="resources"
							links={navLinks}
						/>
					</div>
				</ViewContainer>
			</div>
			<ViewContainer>
				<div className="mt-6 mb-2 flex flex-col sm:flex-row items-center gap-4 bg-[#16181d] rounded-2xl px-6 py-5 border border-[#4A154B]/50 shadow-sm text-center sm:text-left">
					<SiSlack size={32} className="text-[#ECB22E] shrink-0" />
					<p className="flex-1 font-medium text-[#c0c1c3]">
						The fastest way to get help, find teammates, and stay
						updated. Join the SigNoz Slack.
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

				<HackathonContentTitle className="text-[#f5f5f5]">
					The Three Pillars of Observability
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<strong className="text-[#ea6e4a]">Traces</strong>:
							follow every request across services and agent steps
							with distributed tracing built on OpenTelemetry
						</li>
						<li>
							<strong className="text-[#ea6e4a]">Metrics</strong>:
							track latency, throughput, error rates, and token
							costs with the Query Builder, PromQL, or ClickHouse
							SQL
						</li>
						<li>
							<strong className="text-[#ea6e4a]">Logs</strong>:
							ingest logs at scale and correlate them with traces
							and metrics in a single pane
						</li>
						<li>
							<strong className="text-[#ea6e4a]">
								Alerts &amp; Exceptions
							</strong>
							: set alerts on any signal and catch exceptions
							before your users do
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#f5f5f5]">
					Foundry
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://signoz.io/docs/install/docker/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Quickstart
							</Link>
						</li>
						<li>
							<Link
								href="https://github.com/SigNoz/foundry/blob/main/docs/reference/casting-file.md"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Casting file reference
							</Link>
						</li>
						<li>
							Concepts:{" "}
							<Link
								href="https://github.com/SigNoz/foundry/blob/main/docs/concepts/casting.md"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								casting
							</Link>
							,{" "}
							<Link
								href="https://github.com/SigNoz/foundry/blob/main/docs/concepts/moldings.md"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								moldings
							</Link>
							,{" "}
							<Link
								href="https://github.com/SigNoz/foundry/blob/main/docs/concepts/patches.md"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								patches
							</Link>
							,{" "}
							<Link
								href="https://github.com/SigNoz/foundry/blob/main/docs/concepts/annotations.md"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								annotations
							</Link>
						</li>
						<li>
							<Link
								href="https://github.com/SigNoz/foundry/blob/main/docs/concepts/mcp-server.md"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								MCP server
							</Link>
						</li>
						<li>
							<Link
								href="https://github.com/SigNoz/foundry/tree/main/docs/examples"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Examples
							</Link>{" "}
							(including{" "}
							<Link
								href="https://github.com/SigNoz/foundry/tree/main/docs/examples/docker/compose-mcp"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								compose + MCP
							</Link>
							)
						</li>
						<li>
							<Link
								href="https://signoz.io/blog/introducing-signoz-foundry"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Intro to Foundry
							</Link>
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#f5f5f5]">
					<span className="normal-case">SigNoz</span>
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://signoz.io/docs"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Docs
							</Link>
						</li>
						<li>
							<Link
								href="https://signoz.io/docs/ai/signoz-mcp-server/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								MCP server
							</Link>
						</li>
						<li>
							<Link
								href="https://signoz.io/docs/instrumentation/overview/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Instrumentation
							</Link>{" "}
							(all languages)
						</li>
						<li>
							<Link
								href="https://signoz.io/docs/userguide/query-builder-v5/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Query Builder
							</Link>
						</li>
						<li>
							<Link
								href="https://signoz.io/docs/userguide/manage-dashboards/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Dashboards
							</Link>
						</li>
						<li>
							<Link
								href="https://signoz.io/docs/alerts/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Alerts
							</Link>
						</li>
						<li>
							<Link
								href="https://signoz.io/docs/logs-management/overview/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Logs
							</Link>
							,{" "}
							<Link
								href="https://signoz.io/docs/userguide/hostmetrics/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								host metrics
							</Link>
						</li>
						<li>
							LLM / GenAI monitoring:{" "}
							<Link
								href="https://signoz.io/docs/llm/opentelemetry-openai-monitoring/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								OpenAI
							</Link>
							,{" "}
							<Link
								href="https://signoz.io/docs/google-gemini-monitoring/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Gemini
							</Link>
							,{" "}
							<Link
								href="https://signoz.io/docs/litellm-observability/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								LiteLLM
							</Link>
							,{" "}
							<Link
								href="https://signoz.io/docs/traceloop/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Traceloop
							</Link>
							,{" "}
							<Link
								href="https://signoz.io/docs/langtrace/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Langtrace
							</Link>
						</li>
						<li>
							<Link
								href="https://signoz.io/docs/manage/administrator-guide/iam/service-accounts/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Service accounts / API keys
							</Link>
							,{" "}
							<Link
								href="https://signoz.io/api-reference/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								API reference
							</Link>
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#f5f5f5]">
					<span className="normal-case">SigNoz</span> MCP Resources
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://signoz.io/blog/signoz-mcp-development-release-lifecycle"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Using SigNoz MCP for the Development and Release
								Lifecycle
							</Link>
						</li>
						<li>
							<Link
								href="https://signoz.io/blog/signoz-mcp-dashboard-automation"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Using SigNoz MCP for Dashboard Automation
							</Link>
						</li>
						<li>
							<Link
								href="https://signoz.io/blog/signoz-mcp-log-trace-investigation"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Using SigNoz MCP for Log and Trace Investigation
							</Link>
						</li>
						<li>
							<Link
								href="https://signoz.io/blog/signoz-mcp-incident-response"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Using SigNoz MCP for Incident Response
							</Link>
						</li>
						<li>
							<Link
								href="https://signoz.io/blog/automating-oncall-lifecycle-signoz-mcp"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Automating the On-Call Lifecycle with SigNoz MCP
							</Link>
						</li>
						<li>
							<Link
								href="https://signoz.io/blog/monitoring-langchain-agent-querying-signoz-mcp-server"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Full-Circle Observability: monitoring a
								LangChain agent that queries SigNoz MCP
							</Link>
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#f5f5f5]">
					OpenTelemetry
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://signoz.io/opentelemetry/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Start with OpenTelemetry
							</Link>
						</li>
						<li>
							<Link
								href="https://opentelemetry.io/docs/collector/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Collector
							</Link>
						</li>
						<li>
							<Link
								href="https://opentelemetry.io/docs/specs/semconv/gen-ai/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								GenAI semantic conventions
							</Link>
						</li>
						<li>
							<Link
								href="https://github.com/SigNoz/opentelemetry-demo-lite"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Demo app (sample telemetry)
							</Link>
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#f5f5f5]">
					Develop with AI (Claude)
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://github.com/SigNoz/agent-skills"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								SigNoz agent skills
							</Link>
							: official Claude Code plugin (queries, dashboards,
							alerts, docs, MCP setup)
						</li>
						<li>
							<Link
								href="https://github.com/SigNoz/signoz-mcp-server"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								SigNoz MCP server
							</Link>
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
