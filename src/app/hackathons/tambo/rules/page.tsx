import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { ViewContainer } from "@/components/ui/view-container";
import Link from "next/link";
import { DATA, navLinks } from "../data";
import { images } from "../images";

const HackathonRules = async () => {
	return (
		<div className="pt-20 pb-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav
				slug={DATA.slug}
				page="rules"
				links={navLinks}
				navCta={{
					label: DATA.cta.label,
					href: DATA.cta.href,
					openInNewTab: DATA.cta.openInNewTab,
					disabled: DATA.cta.disabled,
				}}
			/>
			<ViewContainer className="my-10">
				<h2 className="text-3xl font-bold text-amber-400 mb-6">
					The Jedi Code of Conduct
				</h2>
				<HackathonContentBody className="text-slate-300">
					<ol className="list-decimal list-outside space-y-4 pl-6">
						<li>
							This event is part of the{" "}
							<Link
								href="https://www.wemakedevs.org/february"
								className="text-amber-400 hover:text-amber-300 underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Hack All February
							</Link>{" "}
							series. You can participate solo or with a team of up to 4 members. Teams can change per hackathon - you don't need to have the same team members for all hackathons in February. You can even participate solo in some hackathons and with a team in others.
						</li>
						<li>
							The more Tambo features you use, the stronger your
							Force becomes. Using Tambo's React SDK with
							generative components, interactable components, MCP
							integrations, and local tools is recommended to
							maximize your chances of winning prizes such as cash
							rewards, exclusive swag, and job/intern interviews at Tambo.
						</li>
						<li>
							You can use already made templates, starter kits, and
							boilerplates to kickstart your project - no need to
							start from absolute zero, young Padawan. However,
							simply submitting an existing website or app with
							minimal modifications is not allowed.
						</li>
						<li>
							You may use templates, third-party tools, frameworks,
							open-source libraries, public APIs, and publicly
							available assets (e.g., Creative Commons images, fonts,
							or music). Your original work built on top of these
							resources will be judged.
						</li>
						<li>
							Teams can plan and discuss ideas in advance, but
							coding and design work should start only after the
							hackathon begins. Written notes, sketches, and
							diagrams are allowed before kickoff.
						</li>
						<li>
							Projects must involve building software (hardware
							components are optional).
						</li>
						<li>Teams may consist of 1–4 members.</li>
						<li>
							While interviews don't guarantee a job, they provide
							a genuine chance to showcase your skills and access
							potential roles.
						</li>
						<li>
							Any intellectual property developed during the
							hackathon belongs to the team that created it. Teams
							are encouraged to agree internally on IP ownership,
							though this is not mandatory.
						</li>
						<li>
							Please treat all participants with respect. Act
							kindly and professionally - this is the way.
							Harassment, discrimination, or exclusionary behavior
							of any kind will not be tolerated. If you see
							something concerning, notify an organizer
							immediately.
						</li>
						<li>
							Failure to follow these rules or the Code of Conduct
							may result in disqualification and banishment to the
							outer rim.
						</li>
					</ol>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonRules;
