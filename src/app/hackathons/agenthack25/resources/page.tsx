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
			<HackathonNav slug={DATA.slug} page="resources" links={navLinks} />
			<ViewContainer>
				<HackathonContentBody>
					<div className="aspect-video w-full max-w-[800px]">
						<iframe
							src="https://www.youtube.com/embed/5_0JTeR3Yt8?si=DWSUyvaK5077BusY"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
					</div>
				</HackathonContentBody>
				<HackathonContentTitle>Resources</HackathonContentTitle>
				<HackathonContentBody>
					<div className="space-y-6">
						<section>
							<ul className="space-y-3 list-disc list-inside">
								<li>
									<Link
										href="https://youtu.be/g5qnYCmvXA8?feature=shared"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Tutorial
									</Link>
								</li>
								<li>
									{" "}
									<Link
										href="https://docs.portialabs.ai/"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Portia Docs
									</Link>
								</li>
								<li>
									{" "}
									<Link
										href="http://docs.portialabs.ai/SDK/portia/execution_agents/utils/final_output_summarizer"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Portia SDK
									</Link>
								</li>
								<li>
									{" "}
									<Link
										href="https://docs.portialabs.ai/examples/redoc/"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Portia API
									</Link>
								</li>
								<li>
									<Link
										href="https://github.com/portiaAI/portia-agent-examples"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Portia Project Ideas
									</Link>
								</li>
								<li>
									Screen Recordings for specific
									functionalities of Portia Dashboard:
									<ul className="mt-2 space-y-2 ml-6 list-disc list-inside">
										<li>
											<Link
												href="https://drive.google.com/file/d/15uSQM_xSyWONy6i9qwMfiMHkZqOY0mI4/view?usp=drive_link"
												className="text-blue-600 underline hover:no-underline"
												target="_blank"
												rel="noopener noreferrer"
											>
												Enable MCP tools on Portia
												dashboard
											</Link>
										</li>
										<li>
											<Link
												href="https://drive.google.com/file/d/1Nl5KeOIHS6eVDrV4xqAVqNN5KdIwEO4E/view?usp=drive_link"
												className="text-blue-600 underline hover:no-underline"
												target="_blank"
												rel="noopener noreferrer"
											>
												Add Remote MCP servers
											</Link>
										</li>
										<li>
											<Link
												href="https://drive.google.com/file/d/1pnpzmxfpFlhPArU6scuBC726RKVCxF0t/view?usp=drive_link"
												className="text-blue-600 underline hover:no-underline"
												target="_blank"
												rel="noopener noreferrer"
											>
												Portia Agent plans a sequence of
												steps with LLM/tool calls before
												running
											</Link>
										</li>
										<li>
											<Link
												href="https://drive.google.com/file/d/1pFCCyj_Wvuz3xsndY_iGRA2-IokIoLgv/view?usp=drive_link"
												className="text-blue-600 underline hover:no-underline"
												target="_blank"
												rel="noopener noreferrer"
											>
												How Plans run statefully and
												surface clarifications for
												Authentication
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-bold mb-4">
								Need help
							</h2>
							<ul className="space-y-2 list-disc list-inside">
								<li>
									If you require any help such as finding a
									team, do join our{" "}
									<Link
										href="https://discord.gg/wemakedevs"
										className="text-blue-600 underline hover:no-underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Discord
									</Link>{" "}
									server and head over to AgentHack category.
								</li>
								<li>
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
								</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-bold mb-4">
								Getting started with Portia
							</h2>
							<p>(waiting for team to respond)</p>
						</section>
					</div>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
