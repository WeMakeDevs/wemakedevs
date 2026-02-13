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
								href="https://archestra.ai/join-slack"
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
								href="https://archestra.ai/join-slack"
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
					Using Archestra in Hackathons and Projects
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ol className="space-y-3 list-decimal list-inside">
						<li>
							<strong>1-command setup:</strong> Spin up the full Archestra platform in seconds using Docker, including the backend and chat UI, so you can skip setup and start fast.
						</li>
						<li>
							<strong>Built-in chat UI:</strong> Interact with and test MCP-based agents directly through a ChatGPT-style interface, with shared prompt management for teams.
						</li>
						<li>
							<strong>Large integration library:</strong> Plug into hundreds of prebuilt MCP integrations for tools and data sources like Slack, GitHub, databases, and APIs without writing glue code.
						</li>
						<li>
							<strong>Multi-LLM support:</strong> Experiment easily with different models such as GPT-4, Claude, or local open-source models to balance performance and cost.
						</li>
						<li>
							<strong>Secure by default:</strong> Run powerful agents with built-in guardrails that help prevent unsafe tool use, prompt injection, and data leaks keeping demos safe.
						</li>
						<li>
							<strong>Observability built in:</strong> Get live logs, metrics, and traces to debug, tune, and confidently demo your agent workflows.
						</li>
						<li>
							<strong>Cost control:</strong> Optimize usage with model routing and limits to stay within API budgets during the hackathon.
						</li>
						<li>
							<strong>Ready-made examples:</strong> Use existing guides and integrations with popular AI frameworks and tools to jump-start your project.
						</li>
					</ol>
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
