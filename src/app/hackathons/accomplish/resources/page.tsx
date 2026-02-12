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
		<div className="pt-20 pb-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen [&_h2]:text-sky-400">
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
				<HackathonContentTitle className="text-sky-400">
					Need a Safe House?
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-2 list-disc list-inside">
						<li>
							Join the{" "}
							<Link
								href="https://discord.gg/bHjupJwF"
								className="text-sky-400 underline hover:no-underline hover:text-sky-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Accomplish Discord
							</Link>{" "}
							for support, mission briefings, and updates
						</li>
						<li>
							For any other query email us at{" "}
							<Link
								href="mailto:contact@wemakedevs.org"
								className="text-sky-400 underline hover:no-underline hover:text-sky-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								contact@wemakedevs.org
							</Link>
							.
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-sky-400">
					Agent Toolkit
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://www.accomplish.ai"
								className="text-sky-400 underline hover:no-underline hover:text-sky-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Accomplish Website
							</Link>{" "}
							- Download the app and get started in 2 minutes
						</li>
						<li>
							<Link
								href="https://github.com/accomplish-ai/accomplish"
								className="text-sky-400 underline hover:no-underline hover:text-sky-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Accomplish GitHub Repository
							</Link>{" "}
							- Explore the source code, examples, and documentation
						</li>
						<li>
							<Link
								href="https://discord.gg/bHjupJwF"
								className="text-sky-400 underline hover:no-underline hover:text-sky-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Accomplish Discord Community
							</Link>{" "}
							- Connect with other agents and get help
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-sky-400">
					Quick Start Guide
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ol className="space-y-3 list-decimal list-inside">
						<li>
							<strong>Install the App:</strong> Download the DMG (macOS) or installer (Windows) from the{" "}
							<Link
								href="https://www.accomplish.ai"
								className="text-sky-400 underline hover:no-underline hover:text-sky-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Accomplish website
							</Link>{" "}
							and drag it into Applications.
						</li>
						<li>
							<strong>Connect Your AI:</strong> Use your own API key from OpenAI, Anthropic, Google, xAI, or other supported providers. Or run completely free with{" "}
							<Link
								href="https://ollama.com"
								className="text-sky-400 underline hover:no-underline hover:text-sky-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Ollama
							</Link>{" "}
							using local models.
						</li>
						<li>
							<strong>Give It Access:</strong> Choose which folders Accomplish can see and interact with. You stay in control - it only touches what you allow.
						</li>
						<li>
							<strong>Start Automating:</strong> Ask it to summarize a doc, clean a folder, create a report, or automate browser tasks. You approve every action.
						</li>
					</ol>
				</HackathonContentBody>
				<HackathonContentTitle className="text-sky-400">
					Supported Models & Providers
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<p className="mb-4">
						Accomplish supports a wide range of AI models and providers:
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
						{[
							"Anthropic (Claude)",
							"OpenAI (GPT)",
							"Google AI (Gemini)",
							"xAI (Grok)",
							"DeepSeek",
							"Amazon Bedrock",
							"Azure Foundry",
							"OpenRouter",
							"LiteLLM",
							"Ollama (local)",
							"LM Studio (local)",
							"Moonshot AI",
						].map((provider) => (
							<div
								key={provider}
								className="bg-slate-800/50 px-3 py-2 rounded-lg text-sm text-center border border-sky-500/10"
							>
								{provider}
							</div>
						))}
					</div>
				</HackathonContentBody>
				<HackathonContentTitle className="text-sky-400">
					Automation Ideas
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<p className="mb-4">
						Need inspiration? Here are some automation ideas to get you started:
					</p>
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<strong>File Organization:</strong> Clean up messy folders by project, file type, or date automatically
						</li>
						<li>
							<strong>Document Generation:</strong> Draft, summarize, and rewrite docs, reports, and meeting notes
						</li>
						<li>
							<strong>Browser Automation:</strong> Automate research, form filling, and web workflows
						</li>
						<li>
							<strong>Weekly Updates:</strong> Generate weekly summaries from files, emails, and notes
						</li>
						<li>
							<strong>Meeting Prep:</strong> Prepare meeting materials from docs and calendars automatically
						</li>
						<li>
							<strong>Data Processing:</strong> Process and organize data from various sources
						</li>
						<li>
							<strong>Custom Skills:</strong> Define repeatable workflows and save them as reusable skills
						</li>
					</ul>
					<p className="mt-4 text-amber-400 font-medium">
						Get creative! The best automations are the ones that solve YOUR unique problems.
					</p>
				</HackathonContentBody>
				<HackathonContentTitle className="text-sky-400">
					System Requirements
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-2 list-disc list-inside">
						<li>macOS (Apple Silicon or Intel)</li>
						<li>Windows 10/11</li>
						<li>Node.js 20+ (for development)</li>
						<li>pnpm 9+ (for development)</li>
					</ul>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
