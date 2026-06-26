import {
	HackathonContentTitle,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { ViewContainer } from "@/components/ui/view-container";
import { SiDiscord } from "@icons-pack/react-simple-icons";
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
				<div className="mt-6 mb-2 flex flex-col sm:flex-row items-center gap-4 bg-[#16181d] rounded-2xl px-6 py-5 border border-[#5865F2]/40 shadow-sm text-center sm:text-left">
					<SiDiscord size={32} className="text-[#5865F2] shrink-0" />
					<p className="flex-1 font-medium text-[#c0c1c3]">
						The fastest way to get help, find teammates, and stay
						updated. Join the WeMakeDevs Discord.
					</p>
					<Link
						href={DATA.discordUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#5865F2] hover:bg-[#4752c4] transition-colors text-white font-bold"
					>
						<SiDiscord size={18} /> Join the Discord
					</Link>
				</div>

				<HackathonContentTitle className="text-[#f5f5f5]">
					Get Started with SigNoz
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://signoz.io/docs/introduction/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								SigNoz Introduction
							</Link>
							: what SigNoz is and how the pieces fit together
						</li>
						<li>
							<Link
								href="https://signoz.io/docs/install/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Install Guide
							</Link>
							: self-host with Docker or Kubernetes, or start on
							SigNoz Cloud
						</li>
						<li>
							<Link
								href="https://signoz.io/docs/instrumentation/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Instrumentation Guides
							</Link>
							: auto-instrument apps with OpenTelemetry in your
							language of choice
						</li>
						<li>
							<Link
								href="https://github.com/SigNoz/signoz"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								SigNoz GitHub Repository
							</Link>
							: the open-source repo. Star it and find issues to
							contribute to
						</li>
						<li>
							<Link
								href="https://signoz.io/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								SigNoz Website
							</Link>
							: learn about OpenTelemetry-native observability
						</li>
					</ul>
				</HackathonContentBody>

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
					Dashboards &amp; Query Builder
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<p className="mb-3">
						Build cross-signal dashboards and powerful queries
						without vendor lock-in:
					</p>
					<ul className="space-y-2 list-disc list-inside">
						<li>
							<Link
								href="https://signoz.io/docs/userguide/query-builder/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Query Builder
							</Link>{" "}
							for building queries across traces, metrics, and
							logs
						</li>
						<li>
							<Link
								href="https://signoz.io/docs/dashboards/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Dashboards
							</Link>{" "}
							for assembling cross-signal panels and SLO packs
						</li>
						<li>
							<Link
								href="https://signoz.io/docs/alerts-management/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Alerts Management
							</Link>{" "}
							for setting up notifications on any signal
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-[#f5f5f5]">
					Ecosystem &amp; Integrations
				</HackathonContentTitle>
				<HackathonContentBody className="text-[#c0c1c3]">
					<p className="mb-3">
						Plug SigNoz into your stack with OpenTelemetry and these
						ready-made integrations:
					</p>
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<strong className="text-[#ea6e4a]">
								OpenTelemetry SDKs:
							</strong>{" "}
							<Link
								href="https://signoz.io/docs/instrumentation/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Instrumentation guides
							</Link>
						</li>
						<li>
							<strong className="text-[#ea6e4a]">
								Kubernetes &amp; Infra:
							</strong>{" "}
							<Link
								href="https://signoz.io/docs/tutorial/kubernetes-infra-metrics/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								K8s metrics setup
							</Link>
						</li>
						<li>
							<strong className="text-[#ea6e4a]">
								All integrations:
							</strong>{" "}
							<Link
								href="https://signoz.io/docs/integrations/"
								className={linkClass}
								target="_blank"
								rel="noopener noreferrer"
							>
								Full list of integrations &amp; guides
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
