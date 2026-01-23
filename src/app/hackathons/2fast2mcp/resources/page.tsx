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
		<div className="pt-20 pb-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen [&_h2]:text-orange-400">
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
				<HackathonContentTitle className="text-orange-400">
					Need a Pit Stop?
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-2 list-disc list-inside">
						<li>
							Join the{" "}
							<Link
								href="https://join.slack.com/t/archestracommunity/shared_invite/zt-39yk4skox-zBF1NoJ9u4t59OU8XxQChg"
								className="text-orange-400 underline hover:no-underline hover:text-orange-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Archestra Slack Community
							</Link>{" "}
							for support and updates
						</li>
						<li>
							For any other query email us at{" "}
							<Link
								href="mailto:contact@wemakedevs.org"
								className="text-orange-400 underline hover:no-underline hover:text-orange-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								contact@wemakedevs.org
							</Link>
							.
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-orange-400">
					Garage Resources
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://archestra.ai/docs/platform-quickstart"
								className="text-orange-400 underline hover:no-underline hover:text-orange-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Platform Quickstart Guide
							</Link>{" "}
							- Get your engines running in minutes
						</li>
						<li>
							<Link
								href="https://github.com/archestra-ai/archestra"
								className="text-orange-400 underline hover:no-underline hover:text-orange-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Archestra GitHub Repository
							</Link>{" "}
							- Explore the source code and examples
						</li>
						<li>
							<Link
								href="https://join.slack.com/t/archestracommunity/shared_invite/zt-39yk4skox-zBF1NoJ9u4t59OU8XxQChg"
								className="text-orange-400 underline hover:no-underline hover:text-orange-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Archestra Slack Community
							</Link>{" "}
							- Connect with the crew and get help
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-orange-400">
					What is MCP?
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<p className="mb-4">
						The Model Context Protocol (MCP) is an open standard
						that enables AI agents to securely connect to external
						tools, data sources, and services. Think of it as the
						universal adapter that lets your AI communicate with any
						system - databases, APIs, file systems, and more.
					</p>
					<p>
						With Archestra, you can build, deploy, and manage MCP
						servers that give your AI agents the tools they need to
						get real work done. Perfect for DevOps automation, SRE
						workflows, and building intelligent agent systems.
					</p>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
