import {
	HackathonContentTitle,
	HackathonCoverImage,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { ViewContainer } from "@/components/ui/view-container";
import Link from "next/link";
import SecondaryNavbar from "../components/navbars/SecondaryNavbar";
import { DATA, navLinks } from "../data";
import { images } from "../images";

const HackathonResources = async () => {
	return (
		<div className="pt-20 pb-10">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<SecondaryNavbar
				slug={DATA.slug}
				page="resources"
				links={navLinks}
				navCta={DATA.cta}
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
										href="https://docs.cline.bot/cline-cli/installation"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Installation Guide
									</Link>
								</li>
								<li>
									<Link
										href="https://docs.cline.bot/cline-cli/cli-reference"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										CLI Reference
									</Link>
								</li>
								<li>
									<Link
										href="https://docs.cline.bot/cline-cli/three-core-flows"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Three Core Flows
									</Link>
								</li>
								<li>
									<Link
										href="https://docs.cline.bot/cline-cli/samples/github-integration"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub Integration Sample
									</Link>
								</li>
								<li>
									<Link
										href="https://docs.cline.bot/"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Main Documentation
									</Link>
								</li>
								<li>
									<Link
										href="https://discord.gg/cline"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Community Discord
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
										Introduction to AI Agents
									</Link>
								</li>
								<li>
									<Link
										href="https://kestra.io/blueprints?page=1&size=24&tags=ai"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Kestra AI Blueprints
									</Link>
								</li>
								<li>
									<Link
										href="https://kestra.io/blueprints/ai-check-weather-gemini"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Kestra Email Notification Blueprint
									</Link>
								</li>
								<li>
									<Link
										href="https://kestra.io/docs"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Kestra Documentation
									</Link>
								</li>
								<li>
									<Link
										href="https://kestra.io/tutorial-videos"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Kestra Tutorial Videos
									</Link>
								</li>
								<li>
									<Link
										href="https://github.com/wrussell1999/kestra-examples/tree/main/ai-workflows"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Kestra AI Workflows
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
										Vercel Documentation
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">Oumi</h3>
							<ul className="space-y-2 list-disc list-inside">
								<li>
									<Link
										href="https://oumi.ai/docs/en/latest/index.html"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Oumi Documentation
									</Link>
								</li>
								<li>
									<Link
										href="https://github.com/oumi-ai/oumi"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Oumi GitHub
									</Link>
								</li>
								<li>
									<Link
										href="https://github.com/oumi-ai/oumi/blob/main/notebooks/Oumi%20-%20Train%20a%20Letter%20Counting%20Model%20using%20GRPO.ipynb"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Train a Letter Counting Model using GRPO
									</Link>
								</li>
								<li>
									<Link
										href="https://github.com/oumi-ai/oumi/blob/main/notebooks/Oumi%20-%20OpenEnv%20GRPO%20with%20trl.ipynb"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										OpenEnv GRPO with trl
									</Link>
								</li>
								<li>
									<Link
										href="https://github.com/oumi-ai/oumi/tree/main/notebooks"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Other Oumi Notebooks
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
										CodeRabbit Documentation
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
