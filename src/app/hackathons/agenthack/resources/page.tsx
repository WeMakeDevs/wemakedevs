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
							<p className="text-gray-600">
								(waiting for team to respond)
							</p>
						</section>
					</div>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
