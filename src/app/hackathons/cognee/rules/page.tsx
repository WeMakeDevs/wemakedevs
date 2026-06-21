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
		<div className="pt-20 pb-10 bg-gradient-to-b from-[#f7ead0] via-[#f1dcb4] to-[#f7ead0] min-h-screen">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<div className="sticky top-[96px] z-[120]">
				<ViewContainer>
					<div className="cognee-sticky-nav rounded-xl">
						<HackathonNav
							slug={DATA.slug}
							page="rules"
							links={navLinks}
						/>
					</div>
				</ViewContainer>
			</div>
			<ViewContainer className="my-10">
				<h2 className="text-3xl font-bold text-[#c33124] mb-6">
					House Rules
				</h2>
				<HackathonContentBody className="text-[#4a3624]">
					<ol className="list-decimal list-outside space-y-4 pl-6">
						<li>
							You can operate solo or assemble your own Wolfpack
							of up to 4 members. Teams can change composition at
							any time before the hackathon begins.
						</li>
						<li>
							<strong className="text-[#c33124]">
								Required tech:
							</strong>{" "}
							Your project must use{" "}
							<Link
								href="https://github.com/topoteretes/cognee"
								className="text-[#8a5a00] hover:text-[#c33124] underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Cognee
							</Link>{" "}
							for memory. The more deeply you lean on its memory
							lifecycle APIs (remember, recall, improve/memify,
							forget) and integrations, the stronger your
							submission will score.
						</li>
						<li>
							<strong className="text-[#c33124]">
								Open-ended theme:
							</strong>{" "}
							The theme is completely open. Build anything you
							want, agents, apps, tools, games, automations, as
							long as it uses Cognee. The project tracks listed on
							the overview page are inspiration only; you are not
							limited to them.
						</li>
						<li>
							<strong className="text-[#c33124]">
								Open Source Track ($100 per PR · top 20):
							</strong>{" "}
							Find issues on the{" "}
							<Link
								href="https://github.com/topoteretes/cognee"
								className="text-[#8a5a00] hover:text-[#c33124] underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Cognee GitHub repository
							</Link>{" "}
							and contribute to the open-source project. The top
							20 PR submissions earn $100 each. The process is:
							(1) find an issue you want to work on, (2) comment
							on the issue saying you&apos;d like to work on it
							and tag the maintainers, (3) wait until it is
							assigned to you, (4) work on it and submit a pull
							request. Do not spam the maintainers to review your
							PR, they will get to it.
						</li>
						<li>
							<strong className="text-[#c33124]">
								Zero tolerance for spam.
							</strong>{" "}
							Spamming the GitHub repository with AI-generated PRs
							or issues will get you permanently banned from
							WeMakeDevs events and disqualified. Low-effort PRs
							(typo-only fixes, whitespace changes, README
							reformatting, duplicate or auto-generated
							submissions) will be rejected without review.
							Repeated spam or attempts to game the bounty will
							result in disqualification and a ban from future
							WeMakeDevs events.
						</li>
						<li>
							<strong className="text-[#c33124]">
								Job interviews do not guarantee a job.
							</strong>{" "}
							Top winners get interview opportunities at Cognee.
							These are a genuine chance to showcase your skills,
							but they do{" "}
							<strong className="text-[#c33124]">not</strong>{" "}
							guarantee a position or offer of employment.
						</li>
						<li>
							You may use templates, third-party tools,
							frameworks, open-source libraries, public APIs, and
							publicly available assets (e.g. Creative Commons
							images, fonts, or music). Your original work built
							on top of these will be judged.
						</li>
						<li>
							Use of AI assistants (ChatGPT, Copilot, etc.) is
							permitted but must be declared in your submission.
							Failure to disclose will result in disqualification.
						</li>
						<li>
							Teams can plan and discuss strategy in advance, but
							coding and design work should begin only after the
							hackathon starts. Written notes, sketches, and
							diagrams are permitted beforehand.
						</li>
						<li>Teams may consist of 1–4 members.</li>
						<li>
							Any intellectual property developed during the
							hackathon belongs to the team that created it. Teams
							are encouraged to agree internally on IP ownership.
						</li>
						<li>
							Treat all participants with respect. Harassment,
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
