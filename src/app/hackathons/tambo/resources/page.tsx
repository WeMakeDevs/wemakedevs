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
		<div className="pt-20 pb-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen">
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
							Join our Discord for updates and support:{" "}
							<Link
								href="https://discord.gg/wemakedevs"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://discord.gg/wemakedevs
							</Link>
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
								href="https://tambo.co"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Tambo Website
							</Link>
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
						<li>
							<Link
								href="https://docs.tambo.co"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Tambo Documentation
							</Link>
						</li>
						<li>
							<Link
								href="https://docs.tambo.co/llms.txt"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Tambo LLMs.txt (for AI agents)
							</Link>
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-amber-400">
					Training Holocrons (Tutorials)
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://docs.tambo.co/quickstart"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Tambo Quickstart Guide
							</Link>
						</li>
						<li>
							<Link
								href="https://docs.tambo.co/tutorial"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Full Tutorial
							</Link>
						</li>
						<li>
							<Link
								href="https://github.com/tambo-ai/tambo-template"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								AI Chat with Generative UI Template
							</Link>
						</li>
						<li>
							<Link
								href="https://github.com/tambo-ai/analytics-template"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								AI Analytics Dashboard Template
							</Link>
						</li>
					</ul>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
