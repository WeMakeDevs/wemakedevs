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
				}}
			/>
			<ViewContainer>
				<HackathonContentTitle>Need help?</HackathonContentTitle>
				<HackathonContentBody>
					<ul className="space-y-2 list-disc list-inside">
						<li>
							If you require any help such as finding a team, do
							join the FutureStack hackathon channel on{" "}
							<Link
								href="https://cerebras.ai/discord"
								className="text-blue-600 underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Cerebras Discord
							</Link>{" "}
							server.
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

				{/* Cerebras Resources */}
				<HackathonContentBody>
					<h3 className="text-xl font-bold mb-4 text-orange-600">
						Cerebras
					</h3>
					<ul className="space-y-3 list-disc list-inside ml-4">
						<li>
							<Link
								href="https://cloud.cerebras.ai/?referral_code=wemakedevs"
								className="text-blue-600 underline hover:no-underline font-semibold"
								target="_blank"
								rel="noopener noreferrer"
							>
								Sign up for Cerebras Cloud (Use referral code:
								wemakedevs)
							</Link>
						</li>
						<li>
							<Link
								href="https://inference-docs.cerebras.ai/quickstart"
								className="text-blue-600 underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Cerebras Documentation & Quickstart
							</Link>
						</li>
					</ul>
				</HackathonContentBody>

				{/* Meta Resources */}
				<HackathonContentBody>
					<h3 className="text-xl font-bold mb-4 text-blue-600">
						Meta
					</h3>
					<ul className="space-y-3 list-disc list-inside ml-4">
						<li>
							<Link
								href="https://inference-docs.cerebras.ai/models/llama-4-scout"
								className="text-blue-600 underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Meta Llama Models Documentation
							</Link>
						</li>
					</ul>
				</HackathonContentBody>

				{/* Docker Resources */}
				<HackathonContentBody>
					<h3 className="text-xl font-bold mb-4 text-cyan-600">
						Docker
					</h3>
					<ul className="space-y-3 list-disc list-inside ml-4">
						<li>
							<Link
								href="https://docs.docker.com/"
								className="text-blue-600 underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Docker Documentation
							</Link>
						</li>
					</ul>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
