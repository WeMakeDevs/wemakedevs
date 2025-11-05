import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA, navLinks } from "../data";
import { images } from "../images";

const HackathonRules = async () => {
	return (
		<div className="pt-20 pb-10">
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
				<HackathonContentBody>
					<ol className="list-decimal list-outside space-y-4 pl-6">
						<li>
							Using Lingo Compiler is mandatory to be eligible for
							prizes such as cash rewards, Lingo credits, and
							exclusive swag. Projects that do not use Lingo
							Compiler will not qualify for these prizes.
						</li>
						<li>
							You must build a new project during the hackathon.
							Simply translating or modifying an existing website
							or app is not allowed.
						</li>
						<li>
							All design elements, code, and assets for your
							project must be created during the event. You may
							use third-party tools, frameworks, open-source
							libraries, public APIs, and publicly available
							assets (e.g., Creative Commons images, fonts, or
							music).
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
							Any intellectual property developed during the
							hackathon belongs to the team that created it. Teams
							are encouraged to agree internally on IP ownership,
							though this is not mandatory.
						</li>
						<li>
							Please treat all participants with respect. Act
							kindly and professionally. Harassment,
							discrimination, or exclusionary behavior of any kind
							will not be tolerated. If you see something
							concerning, notify an organizer immediately.
						</li>
						<li>
							Failure to follow these rules or the Code of Conduct
							may result in disqualification.
						</li>
					</ol>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonRules;
