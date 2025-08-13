import {
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
			<HackathonNav slug={DATA.slug} page="resources" links={navLinks} />
			<ViewContainer>
				<HackathonContentBody>
					<div className="space-y-6">
						<section>
							<h2 className="text-2xl font-bold mb-4">
								Need help
							</h2>
							<p className="mb-4">
								If you require any help such as finding a team,
								do join our{" "}
								<Link
									href="https://discord.gg/wemakedevs"
									className="text-blue-600 underline hover:no-underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									Discord server
								</Link>{" "}
								and head over to AgentHack category.
							</p>
							<p>
								For any other query email us at{" "}
								<Link
									href="mailto:contact@wemakedevs.org"
									className="text-blue-600 underline hover:no-underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									contact@wemakedevs.org
								</Link>
								.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-bold mb-4">
								Getting started with Portia
							</h2>

							<ul className="space-y-3">
								<li>
									<span className="font-medium">
										Portia Docs:
									</span>{" "}
									<Link
										href="https://docs.portialabs.ai/"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://docs.portialabs.ai/
									</Link>
								</li>
								<li>
									<span className="font-medium">
										Tutorial:
									</span>{" "}
									<Link
										href="https://youtu.be/g5qnYCmvXA8?feature=shared"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://youtu.be/g5qnYCmvXA8?feature=shared
									</Link>
								</li>
								<li>
									<span className="font-medium">
										Portia SDK:
									</span>{" "}
									<Link
										href="http://docs.portialabs.ai/SDK/portia/execution_agents/utils/final_output_summarizer"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										http://docs.portialabs.ai/SDK/portia/execution_agents/utils/final_output_summarizer
									</Link>
								</li>
								<li>
									<span className="font-medium">
										Portia API:
									</span>{" "}
									<Link
										href="https://docs.portialabs.ai/examples/redoc/"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://docs.portialabs.ai/examples/redoc/
									</Link>
								</li>
								<li>
									<span className="font-medium">
										Portia Project Ideas:
									</span>{" "}
									<Link
										href="https://github.com/portiaAI/portia-agent-examples"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://github.com/portiaAI/portia-agent-examples
									</Link>
								</li>
							</ul>
						</section>
					</div>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
