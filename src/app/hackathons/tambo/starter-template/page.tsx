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

const HackathonStarterTemplate = async () => {
	return (
		<div className="pt-20 pb-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen [&_h2]:text-amber-400">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav
				slug={DATA.slug}
				page="starter-template"
				links={navLinks}
				navCta={{
					label: DATA.cta.label,
					href: DATA.cta.href,
					openInNewTab: DATA.cta.openInNewTab,
					disabled: DATA.cta.disabled,
				}}
			/>
			<ViewContainer className="my-14">
				<HackathonContentTitle className="text-amber-400">
					Build a Tambo Starter Template
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300 space-y-6">
					<p>
						Looking for something to do before the UI Strikes Back hackathon?
						Build your starter template.
					</p>
					<p>
						If you create a template that meets our standard and open a PR, and
						we merge it, we&apos;ll send you $100 as a thank you.
					</p>
					<p>
						Even if we don&apos;t merge it, you will have head start with your
						own starter template.
					</p>
				</HackathonContentBody>

				<HackathonContentTitle className="text-amber-400 mt-10">
					To Submit:
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ol className="space-y-3 list-decimal list-inside">
						<li>
							Open a PR to{" "}
							<Link
								href="https://github.com/tambo-ai/tambo"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://github.com/tambo-ai/tambo
							</Link>{" "}
							adding your template to{" "}
							<code className="bg-slate-800 px-2 py-1 rounded text-amber-300">
								community/templates/
							</code>{" "}
							— see the{" "}
							<Link
								href="https://github.com/tambo-ai/tambo/blob/main/community/templates/README.md"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								requirements
							</Link>
						</li>
						<li>
							Fill out the{" "}
							<Link
								href="https://forms.gle/jxFM6K3VXCnRLmvA9"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								submission form
							</Link>{" "}
							so we can contact you
						</li>
						<li>
							<strong>Deadline:</strong> Friday, January 31st at 9am PST
						</li>
					</ol>
				</HackathonContentBody>

				<HackathonContentTitle className="text-amber-400 mt-10">
					Existing Templates for Inspiration:
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
								tambo-template
							</Link>{" "}
							- Next.js + Tambo
						</li>
						<li>
							<Link
								href="https://github.com/tambo-ai/tambo-template-tanstack"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								tambo-template-tanstack
							</Link>{" "}
							- TanStack Router + Vite
						</li>
						<li>
							<Link
								href="https://github.com/tambo-ai/analytics-template"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								analytics-template
							</Link>{" "}
							- Analytics dashboard
						</li>
						<li>
							<Link
								href="https://github.com/tambo-ai/betterauth-tambo-example"
								className="text-amber-400 underline hover:no-underline hover:text-amber-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								betterauth-tambo-example
							</Link>{" "}
							- BetterAuth integration (this needs upgrading!)
						</li>
					</ul>
				</HackathonContentBody>

				<HackathonContentBody className="text-slate-300 mt-8">
					<p>
						Questions? Ask in{" "}
						<Link
							href="https://discord.gg/dJNvPEHth6"
							className="text-amber-400 underline hover:no-underline hover:text-amber-300"
							target="_blank"
							rel="noopener noreferrer"
						>
							Discord
						</Link>
					</p>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonStarterTemplate;
