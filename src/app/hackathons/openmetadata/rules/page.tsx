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
			<div className="sticky top-[96px] z-[120]">
				<ViewContainer>
					<div className="openmetadata-sticky-nav rounded-xl">
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
					</div>
				</ViewContainer>
			</div>
			<ViewContainer className="my-10">
				<h2 className="text-3xl font-bold text-amber-400 mb-6">
					Time Travel Protocol
				</h2>
				<HackathonContentBody className="text-slate-300">
					<ol className="list-decimal list-outside space-y-4 pl-6">
						<li>
							You can operate solo or assemble a team of up to 4
							members. Teams can change composition at any time
							before the hackathon begins.
						</li>
						<li>
							<strong className="text-amber-400">
								Required tech:
							</strong>{" "}
							Your project must integrate with or extend{" "}
							<Link
								href="https://github.com/open-metadata/OpenMetadata"
								className="text-amber-400 hover:text-amber-300 underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								OpenMetadata
							</Link>
							. The more deeply you leverage its features like
							APIs, connectors, lineage, governance, and
							observability, the stronger your submission will
							score.
						</li>
						<li>
							<strong className="text-amber-400">
								Open-ended theme:
							</strong>{" "}
							The hackathon theme is completely open-ended. You
							can build anything you want as long as it uses or
							integrates with OpenMetadata. The categories and
							ideas listed on the{" "}
							<Link
								href="https://github.com/orgs/open-metadata/projects/107/views/1?pane=info"
								className="text-amber-400 hover:text-amber-300 underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub project board
							</Link>{" "}
							are just suggestions to inspire you — you are not
							limited to those ideas. Your own original idea is
							equally welcome and encouraged.
						</li>
						<li>
							<strong className="text-amber-400">
								For GitHub contributions:
							</strong>{" "}
							you must get an issue assigned to you before
							starting work. To get assigned, comment on the issue
							and tag the maintainer (the person who opened the
							issue) to request assignment.
						</li>
						<li>
							<strong className="text-amber-400">
								Contribution Track winners are selected by the
								OpenMetadata team.
							</strong>{" "}
							Only meaningful, merged pull requests qualify for
							the $100 bounty. The OpenMetadata maintainers have
							sole discretion over which PRs are accepted and
							rewarded, based on code quality, impact, and
							alignment with the project roadmap.
						</li>
						<li>
							<strong className="text-amber-400">
								Zero tolerance for spam.
							</strong>{" "}
							Low-effort PRs (typo-only fixes, whitespace changes,
							README reformatting, duplicate or auto-generated
							submissions) will be rejected without review.
							Repeated spam or attempts to game the bounty system
							will result in immediate disqualification from the
							entire hackathon and a ban from future WeMakeDevs
							events.
						</li>
						<li>
							You can use starter templates, boilerplates, and
							pre-existing codebases to kickstart your project.
							However, simply submitting an existing project with
							minimal modifications is not permitted. Your
							original work built on top of these foundations will
							be evaluated.
						</li>
						<li>
							You may use templates, third-party tools,
							frameworks, open-source libraries, public APIs, and
							publicly available assets (e.g., Creative Commons
							images, fonts, or music). Your original work built
							on top of these resources will be judged.
						</li>
						<li>
							Teams can plan and discuss strategy in advance, but
							coding and design work should commence only after
							the hackathon begins. Written notes, sketches, and
							diagrams are permitted before kickoff.
						</li>
						<li>
							Projects must involve building software. Hardware
							components are optional but not required.
						</li>
						<li>Teams may consist of 1–4 members.</li>
						<li>
							Career opportunities (interviews at Collate)
							don&apos;t guarantee a position, but they provide a
							genuine chance to showcase your skills and access
							potential roles.
						</li>
						<li>
							Any intellectual property developed during the
							hackathon belongs to the team that created it. Teams
							are encouraged to agree internally on IP ownership,
							though this is not mandatory.
						</li>
						<li>
							Treat all participants with respect. Act
							professionally and kindly. Harassment,
							discrimination, or exclusionary behavior of any kind
							will result in immediate disqualification. If you
							witness concerning behavior, notify organizers
							immediately.
						</li>
						<li>
							Failure to follow these rules or the Code of Conduct
							may result in disqualification from the hackathon.
						</li>
					</ol>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonRules;
