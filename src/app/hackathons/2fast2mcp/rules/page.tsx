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
				<h2 className="text-3xl font-bold text-orange-400 mb-6">
					The Racing Rulebook
				</h2>
				<HackathonContentBody className="text-slate-300">
					<ol className="list-decimal list-outside space-y-4 pl-6">
						<li>
							The more Archestra features you use, the faster you'll cross the finish line. Using Archestra's MCP-based agent orchestration, centralized runtime, security guardrails, observability, and deployment capabilities is recommended to maximize your chances of winning prizes, including cash rewards and exclusive swag. Check out the{" "}
							<Link
								href={`/hackathons/${DATA.slug}/resources`}
								className="text-orange-400 hover:text-orange-300 underline"
							>
								resources section
							</Link>
							.
						</li>
						<li>
							You must build a new project during the hackathon.
							Simply modifying an existing codebase or app is not
							allowed - your engine should be cold before the
							green light drops.
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
							diagrams are allowed before kickoff - just like
							studying the track before race day.
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
							kindly and professionally - in this family, we ride
							together. Harassment, discrimination, or exclusionary
							behavior of any kind will not be tolerated. If you
							see something concerning, notify an organizer
							immediately.
						</li>
						<li>
							Failure to follow these rules or the Code of Conduct
							may result in disqualification and a permanent pit
							stop from future events.
						</li>
					</ol>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonRules;
