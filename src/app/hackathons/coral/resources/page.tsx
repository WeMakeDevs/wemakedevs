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

const HackathonResources = async () => {
	return (
		<div className="pt-20 pb-10 bg-gradient-to-b from-[#0a0f1e] via-[#0c1a2e] to-[#0a0f1e] min-h-screen [&_h2]:text-amber-400">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
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
			<ViewContainer>
				<HackathonContentTitle className="text-amber-400">
					🏴‍☠️ Need a Port of Call?
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-2 list-disc list-inside">
						<li>
							Join the{" "}
							<Link
								href="https://withcoral.com/discord"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Coral Discord
							</Link>{" "}
							for support and updates — ask questions in{" "}
							<span className="text-amber-400 font-mono">
								#help-and-questions
							</span>
						</li>
						<li>
							For any other query email us at{" "}
							<Link
								href="mailto:contact@wemakedevs.org"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								contact@wemakedevs.org
							</Link>
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-amber-400">
					🗺️ Navigation Charts (Documentation)
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://withcoral.com/"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Coral Website
							</Link>{" "}
							— Learn what Coral does and see use cases
						</li>
						<li>
							<Link
								href="https://withcoral.com/docs"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Coral Documentation
							</Link>{" "}
							— Full docs to get started and go deep
						</li>
						<li>
							<Link
								href="https://github.com/withcoral/coral/blob/main/README.md"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Coral GitHub README
							</Link>{" "}
							— Quick start guide and repo overview
						</li>
						<li>
							<Link
								href="https://github.com/withcoral/coral"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Coral GitHub Repository
							</Link>{" "}
							— Explore the source code (don&apos;t forget to ⭐
							star it!)
						</li>
						<li>
							<Link
								href="https://withcoral.com/discord"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Coral Discord
							</Link>{" "}
							— Connect with the crew and get help
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-amber-400">
					⚓ Building a Source Connector
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<p className="mb-4">
						Want to build a new source connector for Coral? Follow
						the official guide:
					</p>
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://withcoral.com/docs/guides/write-a-custom-source"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Write a Custom Source Guide
							</Link>{" "}
							— Step-by-step guide to building a new Coral source
							connector
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentTitle className="text-amber-400">
					🪸 What is Coral?
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<p className="mb-4">
						Coral is an open-source data retrieval layer for agents
						that lets them query any API, database, or file as SQL
						tables. Here&apos;s what it handles for you:
					</p>
					<ol className="space-y-3 list-decimal list-inside">
						<li>
							<strong>Query anything as SQL:</strong> Any API,
							database, or file becomes a SQL table. No custom
							integrations needed.
						</li>
						<li>
							<strong>Cross-source joins:</strong> Join data
							across GitHub, Slack, Sentry, PagerDuty, and more
							in a single SQL query.
						</li>
						<li>
							<strong>Auth & pagination handled:</strong> Coral
							manages authentication, pagination, and rate limits
							for every source.
						</li>
						<li>
							<strong>Schema learning:</strong> Coral
							automatically learns the schema of your data
							sources.
						</li>
						<li>
							<strong>Caching:</strong> Smart caching so repeated
							queries are fast.
						</li>
						<li>
							<strong>CLI or MCP:</strong> Run Coral from the
							command line or through MCP — your choice.
						</li>
						<li>
							<strong>100% local:</strong> Credentials, data, and
							usage history never leave your machine.
						</li>
						<li>
							<strong>No ETL, no warehouse, no glue code:</strong>{" "}
							Just SQL queries against live data.
						</li>
					</ol>
				</HackathonContentBody>

				<HackathonContentTitle className="text-amber-400">
					🏴‍☠️ Example Agent Use Cases
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<strong>Coding Agent Debugger:</strong> Connect
							GitHub + Sentry + Slack. Agent joins failed CI
							builds with Sentry errors and related Slack
							discussions to diagnose root cause in one query.
						</li>
						<li>
							<strong>AI SRE / Incident Investigator:</strong>{" "}
							Connect PagerDuty + GitHub + Datadog. Agent
							correlates high-urgency incidents with PRs merged
							in the same time window and Datadog metrics.
						</li>
						<li>
							<strong>Sprint Health Dashboard:</strong> Connect
							Linear + GitHub + Slack. Agent joins open issues
							with PR status and relevant Slack threads for a
							real-time view of what&apos;s blocked.
						</li>
						<li>
							<strong>Customer Escalation Agent:</strong> Connect
							support tool + Sentry + Slack. Agent joins open
							tickets with error spikes and internal Slack
							threads.
						</li>
						<li>
							<strong>Security/Compliance Monitor:</strong>{" "}
							Connect GitHub + Slack + Notion. Agent monitors for
							secrets in commits, permission changes, and flags
							compliance gaps.
						</li>
					</ul>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
