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
				<h2 className="text-3xl font-bold text-cyan-400 mb-6">
					Mission Protocol
				</h2>
				<HackathonContentBody className="text-slate-300">
					<ol className="list-decimal list-outside space-y-4 pl-6">
						<li>
							This mission is part of the{" "}
							<Link
								href="https://www.wemakedevs.org/february"
								className="text-cyan-400 hover:text-cyan-300 underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Hack All February
							</Link>{" "}
							initiative. You can operate solo or assemble a team of up to 4 agents. Teams can change per hackathon - you don't need the same team members for all missions. You can even go solo on some and team up on others.
						</li>
						<li>
							<strong className="text-cyan-400">Required tech:</strong> Your project must use the{" "}
							<Link
								href="https://github.com/GetStream/Vision-Agents"
								className="text-cyan-400 hover:text-cyan-300 underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Vision Agents SDK
							</Link>
							. The more features you leverage - video AI, low latency streaming, native LLM APIs, multi-platform SDKs - the stronger your mission evaluation.
						</li>
						<li>
							You can use starter templates, boilerplates, and pre-existing codebases to kickstart your mission. However, simply submitting an existing project with minimal modifications is not permitted. Your original work built on top of these foundations will be evaluated.
						</li>
						<li>
							You may use templates, third-party tools, frameworks, open-source libraries, public APIs, and publicly available assets (e.g., Creative Commons images, fonts, or music). Your original work built on top of these resources will be judged.
						</li>
						<li>
							Teams can plan and discuss mission strategy in advance, but coding and design work should commence only after the mission begins. Written notes, sketches, and diagrams are permitted before kickoff.
						</li>
						<li>
							Projects must involve building software. Hardware components are optional but not required.
						</li>
						<li>
							Teams may consist of 1–4 agents (members).
						</li>
						<li>
							<strong className="text-cyan-400">Prize distribution:</strong> All rewards will be distributed equally among winning team members, with a maximum team size of four. The total prize amount will be divided by the number of team members to ensure fairness. If a project wins as a solo submission, the participant will receive 50% of the listed prize amount, which will still be higher than what an individual would receive in a team setting. This policy ensures fair payouts while encouraging collaborative participation.
						</li>
						<li>
							Career opportunities don't guarantee a position, but they provide a genuine chance to showcase your skills and access potential roles at Stream.
						</li>
						<li>
							Any intellectual property developed during the hackathon belongs to the team that created it. Teams are encouraged to agree internally on IP ownership, though this is not mandatory.
						</li>
						<li>
							Treat all fellow agents with respect. Act professionally and kindly. Harassment, discrimination, or exclusionary behavior of any kind will result in immediate disqualification. If you witness concerning behavior, notify mission control immediately.
						</li>
						<li>
							Failure to follow these protocols or the Code of Conduct may result in disqualification from the mission.
						</li>
					</ol>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonRules;
