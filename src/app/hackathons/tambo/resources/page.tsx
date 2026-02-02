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
					Need help, young Padawan?
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-2 list-disc list-inside">
						<li>
							Join{" "}
							<Link
								href="https://discord.gg/dJNvPEHth6"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Tambo Discord
							</Link>{" "}
							for support
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
							.
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-amber-400">
					Jedi Archives (Resources)
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://docs.tambo.co/docs/getting-started/quickstart"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Quickstart Guide
							</Link>{" "}
							- Zero to running app in 5 min
						</li>
						<li>
							<Link
								href="https://ui.tambo.co"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Component Library
							</Link>{" "}
							- Interactive demos of all components
						</li>
						<li>
							<Link
								href="https://tambo.co/blog/what-is-generative-ui"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								"What is Generative UI?"
							</Link>{" "}
							- Intro blog post on the concept
						</li>
						<li>
							<Link
								href="https://github.com/tambo-ai/tambo"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Tambo GitHub Repository
							</Link>
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-amber-400">
					Starter Templates
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://github.com/tambo-ai/tambo-template"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Tambo Template
							</Link>{" "}
							- Basic starter template
						</li>
						<li>
							<Link
								href="https://github.com/tambo-ai/analytics-template"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Analytics Template
							</Link>{" "}
							- AI-powered analytics dashboard
						</li>
						<li>
							<Link
								href="https://github.com/tambo-ai/tambo-tanstack-template"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								TanStack Template
							</Link>{" "}
							- Template with TanStack integration
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-amber-400">
					Build and ship your project with Charlie
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<p className="mb-4">
						Get an autonomous TypeScript engineer in your GitHub repo — plus 10,000 credits ($500 of value) — more than enough for the hackathon and beyond.
					</p>
					<Link
						href="https://charlielabs.ai/tambo-hackathon/"
						className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						Claim Your Free Credits
					</Link>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
