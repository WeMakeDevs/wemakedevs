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
				<HackathonContentTitle>Need help?</HackathonContentTitle>
				<HackathonContentBody>
					<ul className="space-y-2 list-disc list-inside">
						<li>
							Join our Discord for updates and support:{" "}
							<Link
								href="https://dub.link/3DogDTY"
								className="text-blue-600 underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://dub.link/3DogDTY
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
								href="https://lingo.dev/en"
								className="text-blue-600 underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Lingo Website
							</Link>
						</li>
						<li>
							<Link
								href="https://github.com/lingodotdev/lingo.dev"
								className="text-blue-600 underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Lingo GitHub Repository
							</Link>
						</li>
						<li>
							<Link
								href="https://lingo.dev/en/cli"
								className="text-blue-600 underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Lingo CLI Documentation
							</Link>
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle>Demo Videos</HackathonContentTitle>
				<HackathonContentBody>
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://drive.google.com/file/d/1sfZlV1PVc6Q-AGl2Cpr0oS8Dx2TEf4Fw/view?usp=sharing"
								className="text-blue-600 underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Lingo CLI
							</Link>
						</li>
						<li>
							<Link
								href="https://drive.google.com/file/d/1e9JDZa05TL6Z9S_dOMCZsm9x23ZPzpvt/view?usp=sharing"
								className="text-blue-600 underline hover:no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Lingo MCP
							</Link>
						</li>
					</ul>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
