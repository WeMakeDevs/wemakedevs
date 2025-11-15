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

const accentLink =
	"text-green-200 hover:text-green-100 underline decoration-2 underline-offset-4 transition-colors";

const HackathonResources = async () => {
	return (
		<div className="pt-20 pb-16 bg-gradient-to-b from-[#050705] via-[#0b1114] to-[#112130] text-slate-100 min-h-screen">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<SecondaryNavbar
				slug={DATA.slug}
				page="resources"
				links={navLinks}
				navCta={DATA.cta}
			/>
			<ViewContainer className="mt-10 space-y-10">
				<HackathonContentTitle className="text-slate-100 font-mono [&>h2]:text-slate-100">
					<span className="text-green-400">&gt;</span> Need help?
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-200 font-mono bg-[#0f171d]/80 rounded-2xl border border-green-500/15 p-6 shadow-[0_15px_35px_rgba(6,12,9,0.45)]">
					<ul className="space-y-4 list-disc list-inside">
						<li>
							Join our Discord for updates and support:{" "}
							<Link
								href="https://discord.gg/wemakedevs"
								className={accentLink}
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
								className={accentLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								contact@wemakedevs.org
							</Link>
							.
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-slate-100 font-mono [&>h2]:text-slate-100">
					<span className="text-green-400">&gt;</span> Resources
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-200 font-mono bg-[#0f171d]/80 rounded-2xl border border-green-500/15 p-6 shadow-[0_15px_35px_rgba(6,12,9,0.45)]">
					<ul className="space-y-4 list-disc list-inside">
						<li>
							<Link
								href="https://www.motia.dev/docs"
								className={accentLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								Motia Documentation
							</Link>
						</li>
						<li>
							<Link
								href="https://git.new/kunal-motia"
								className={accentLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								Motia GitHub Repository
							</Link>
						</li>
						<li>
							<Link
								href="https://github.com/MotiaDev/motia-examples"
								className={accentLink}
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
