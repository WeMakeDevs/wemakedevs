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
				<HackathonContentTitle>Need help?</HackathonContentTitle>
				<HackathonContentBody>
					<ul className="space-y-2 list-disc list-inside">
						<li>
							Join our Discord for updates and support:{" "}
							<Link
								href="https://discord.gg/wemakedevs"
								className="text-blue-600 underline hover:no-underline"
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
								className="text-blue-600 underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								contact@wemakedevs.org
							</Link>
							.
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle>Resources</HackathonContentTitle>
				<HackathonContentBody>
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://www.motia.dev/docs"
								className="text-blue-600 underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Motia Documentation
							</Link>
						</li>
						<li>
							<Link
								href="https://git.new/kunal-motia"
								className="text-blue-600 underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Motia GitHub Repository
							</Link>
						</li>
						<li>
							<Link
								href="https://github.com/MotiaDev/motia-examples"
								className="text-blue-600 underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Motia Examples
							</Link>
						</li>
					</ul>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
