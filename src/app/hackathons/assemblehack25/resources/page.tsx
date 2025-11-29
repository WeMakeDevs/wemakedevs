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
		<div className="pt-20 pb-10">
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
				<HackathonContentTitle>Resources</HackathonContentTitle>
				<HackathonContentBody>
					<div className="space-y-6">
						<div>
							<h3 className="text-xl font-semibold mb-3">
								Cline
							</h3>
							<ul className="space-y-2 list-disc list-inside">
								<li>
									<Link
										href="https://docs.cline.bot/introduction/welcome"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://docs.cline.bot/introduction/welcome
									</Link>
								</li>
								<li>
									<Link
										href="https://cline.bot/learn#ai-coding-university"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://cline.bot/learn#ai-coding-university
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">
								Kestra
							</h3>
							<ul className="space-y-2 list-disc list-inside">
								<li>
									<Link
										href="https://kestra.io/blogs/introducing-ai-agents"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://kestra.io/blogs/introducing-ai-agents
									</Link>
								</li>
								<li>
									<Link
										href="https://kestra.io/blueprints?page=1&size=24&tags=ai"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://kestra.io/blueprints?page=1&size=24&tags=ai
									</Link>
								</li>
								<li>
									<Link
										href="https://kestra.io/blueprints/ai-check-weather-gemini"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://kestra.io/blueprints/ai-check-weather-gemini
									</Link>
								</li>
								<li>
									<Link
										href="https://kestra.io/docs"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://kestra.io/docs
									</Link>
								</li>
								<li>
									<Link
										href="https://kestra.io/tutorial-videos"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://kestra.io/tutorial-videos
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">
								Vercel
							</h3>
							<ul className="space-y-2 list-disc list-inside">
								<li>
									<Link
										href="https://vercel.com/docs"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://vercel.com/docs
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">Oumi</h3>
							<ul className="space-y-2 list-disc list-inside">
								<li>
									<Link
										href="https://www.oumi.ai/docs/en/latest/index.html"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://www.oumi.ai/docs/en/latest/index.html
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">
								CodeRabbit
							</h3>
							<ul className="space-y-2 list-disc list-inside">
								<li>
									<Link
										href="https://docs.coderabbit.ai/overview/introduction"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://docs.coderabbit.ai/overview/introduction
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
