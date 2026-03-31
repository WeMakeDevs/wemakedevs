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
		<div className="pt-20 pb-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen [&_h2]:text-amber-400">
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
					Need Help? Join the Community
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-2 list-disc list-inside">
						<li>
							Join the{" "}
							<Link
								href="https://slack.open-metadata.org"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								OpenMetadata Slack
							</Link>{" "}
							for technical support, doubts, and community discussion
						</li>
						<li>
							For other queries, contact us at{" "}
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
					Getting Started Resources
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://www.docker.com/products/docker-desktop/"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Docker Desktop Download
							</Link>{" "}
							— Select your device type and download Docker Desktop
						</li>
						<li>
							<Link
								href="https://docs.open-metadata.org/v1.12.x/quick-start/local-docker-deployment"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								OpenMetadata on Docker Quickstart
							</Link>{" "}
							— Get the latest version of OpenMetadata up and running in seconds
						</li>
						<li>
							<Link
								href="https://www.youtube.com/watch?v=oM-wXHSSWTs"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								OpenMetadata Day 1 Guide (Video)
							</Link>{" "}
							— Video walkthrough of getting started on OpenMetadata
						</li>
						<li>
							<Link
								href="https://docs.open-metadata.org/v1.12.x/developers/contribute/development-environment-setup"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Dev Containers & Development Setup
							</Link>{" "}
							— Build tools with OpenMetadata to streamline contributor onboarding
						</li>
						<li>
							<Link
								href="https://www.youtube.com/playlist?list=PL0HKMRdGJ6El-kUknhMKmKaXVKXZElk9v"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Collate Clues Playlist
							</Link>{" "}
							— Videos demonstrating various OpenMetadata features
						</li>
						<li>
							<Link
								href="https://github.com/open-metadata/OpenMetadata/issues/26666"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Hackathon Resources Issue
							</Link>{" "}
							— Curated list of resources compiled for this hackathon
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-amber-400">
					Ideas on What to Build
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<p className="mb-4">
						Explore the official project board for detailed ideas across all tracks:
					</p>
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://github.com/orgs/open-metadata/projects/107/views/1"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								OpenMetadata Hackathon Project Board
							</Link>{" "}
							— Browse all project ideas across 6 tracks
						</li>
					</ul>
					<p className="mt-4">
						<strong className="text-amber-400">Tracks:</strong> MCP Ecosystem & AI Agents, Data Observability,
						OpenMetadata Connectors & Ingestion, Developer Tooling & CI/CD,
						Community & Communication Apps, Governance & Classification
					</p>
				</HackathonContentBody>
				<HackathonContentTitle className="text-amber-400">
					Key OpenMetadata Capabilities
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<strong className="text-amber-400">Data Discovery:</strong>{" "}
							Centralized metadata repository with search, tags, and descriptions
						</li>
						<li>
							<strong className="text-amber-400">Column-Level Lineage:</strong>{" "}
							Trace data flow from source to destination at the column level
						</li>
						<li>
							<strong className="text-amber-400">Data Quality:</strong>{" "}
							Automated tests, profiling, and anomaly detection for your data
						</li>
						<li>
							<strong className="text-amber-400">Governance:</strong>{" "}
							Policies, roles, classifications, and compliance management
						</li>
						<li>
							<strong className="text-amber-400">70+ Connectors:</strong>{" "}
							Ingestion from databases, dashboards, ML models, pipelines, and more
						</li>
						<li>
							<strong className="text-amber-400">API-First:</strong>{" "}
							Full REST API for programmatic access to all metadata
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-amber-400">
					Official Links
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://github.com/open-metadata/OpenMetadata"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								OpenMetadata GitHub Repository
							</Link>
						</li>
						<li>
							<Link
								href="https://open-metadata.org"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								OpenMetadata Website
							</Link>
						</li>
						<li>
							<Link
								href="https://docs.open-metadata.org"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								OpenMetadata Documentation
							</Link>
						</li>
						<li>
							<Link
								href="https://slack.open-metadata.org"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								OpenMetadata Slack Community
							</Link>
						</li>
					</ul>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
