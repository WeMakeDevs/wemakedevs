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
					Need Help?
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
							for support and updates
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
					Essential Links
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href={DATA.submissionFormUrl}
								className="text-sky-400 underline hover:no-underline hover:text-sky-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Submit Your Project
							</Link>{" "}
							- Record your demo, share on socials, and paste the link(s) here
						</li>
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
							- Connect with other participants and get help
						</li>
						<li>
							<Link
								href="https://github.com/accomplish-ai/accomplish/releases"
								className="text-sky-400 underline hover:no-underline hover:text-sky-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Accomplish Releases
							</Link>{" "}
							- Download the latest version
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-sky-400">
					Quick Start Guide (2 Minutes)
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ol className="space-y-3 list-decimal list-inside">
						<li>
							<strong>Install the App:</strong> Download from the{" "}
							<Link
								href="https://www.accomplish.ai"
								className="text-sky-400 underline hover:no-underline hover:text-sky-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Accomplish website
							</Link>
							. Available for macOS (Apple Silicon & Intel) and Windows 11.
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
							using local models. No subscriptions needed.
						</li>
						<li>
							<strong>Give It Access:</strong> Choose which folders Accomplish can see and interact with. You stay in control - it only touches what you allow.
						</li>
						<li>
							<strong>Start Automating:</strong> Ask it to summarize a doc, clean a folder, create a report, or browse the web. Every action is shown and approved before it runs.
						</li>
					</ol>
				</HackathonContentBody>
				<HackathonContentTitle className="text-sky-400">
					Supported AI Providers
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<p className="mb-4">
						Accomplish supports a wide range of AI models and providers. Pick your favorite:
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
					Automation Ideas to Get You Started
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<p className="mb-4">
						Need inspiration for your automation? Here are some ideas - but we encourage you to think beyond this list:
					</p>
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<strong>Downloads Folder Cleanup:</strong> Sort and organize your chaotic Downloads folder by file type, project, or date
						</li>
						<li>
							<strong>Meeting Notes to Action Items:</strong> Scan meeting notes and create follow-up documents, calendar entries, and task lists
						</li>
						<li>
							<strong>Weekly Report Generator:</strong> Generate a weekly summary from your files, notes, and project folders
						</li>
						<li>
							<strong>Browser Research Assistant:</strong> Automate web research workflows - gather information, summarize findings, save to organized files
						</li>
						<li>
							<strong>Project Scaffolder:</strong> Prepare a new project folder with the right structure, boilerplate files, and documentation
						</li>
						<li>
							<strong>Email/Document Drafter:</strong> Turn rough notes into polished emails, proposals, or reports
						</li>
						<li>
							<strong>Content Organizer:</strong> Scan a folder of mixed content and organize it into a searchable, summarized structure
						</li>
						<li>
							<strong>Custom Workflow Skills:</strong> Define a multi-step workflow you repeat often and save it as a reusable skill
						</li>
					</ul>
					<p className="mt-4 text-amber-400 font-medium">
						The best projects solve YOUR unique problems. Think about what annoys you most, then automate it away!
					</p>
				</HackathonContentBody>
				<HackathonContentTitle className="text-sky-400">
					For Developers: Run from Source
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<p className="mb-3">Want to contribute or hack on Accomplish itself? You can run it from source:</p>
					<div className="bg-slate-800/50 rounded-lg p-4 font-mono text-sm mb-3 border border-sky-500/10">
						<p className="text-sky-400">pnpm install</p>
						<p className="text-sky-400">pnpm dev</p>
					</div>
					<p className="mb-3">Prerequisites: Node.js 20+ and pnpm 9+</p>
					<p>
						Check the{" "}
						<Link
							href="https://github.com/accomplish-ai/accomplish/blob/main/CONTRIBUTING.md"
							className="text-sky-400 underline hover:no-underline hover:text-sky-300"
							target="_blank"
							rel="noopener noreferrer"
						>
							Contributing Guide
						</Link>{" "}
						for more details.
					</p>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
