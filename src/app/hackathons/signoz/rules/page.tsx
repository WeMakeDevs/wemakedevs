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
		<div className="pt-20 pb-10 bg-gradient-to-b from-[#0b0c0e] via-[#0e1014] to-[#0b0c0e] min-h-screen">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<div className="sticky top-[96px] z-[120]">
				<ViewContainer>
					<div className="signoz-sticky-nav rounded-xl">
						<HackathonNav
							slug={DATA.slug}
							page="rules"
							links={navLinks}
						/>
					</div>
				</ViewContainer>
			</div>
			<ViewContainer className="my-10">
				<h2 className="text-3xl font-bold text-[#f5f5f5] glow-orange mb-6">
					Hackathon Rules
				</h2>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ol className="list-decimal list-outside space-y-4 pl-6">
						<li>
							You can enter solo or build a team of up to 4
							members. Teams can change composition at any time
							before the hackathon begins.
						</li>
						<li>
							<strong className="text-[#ea6e4a]">
								Required tech:
							</strong>{" "}
							Your project must use or integrate with{" "}
							<Link
								href={DATA.githubUrl}
								className="text-[#ffd778] hover:text-[#ea6e4a] underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								SigNoz
							</Link>{" "}
							for observability. The more deeply you lean on
							SigNoz and OpenTelemetry, traces, metrics, logs,
							dashboards, and alerts, the stronger your submission
							will score.
						</li>
						<li>
							<strong className="text-[#ea6e4a]">
								Three tracks, open ideas:
							</strong>{" "}
							Pick one of the three tracks (AI &amp; Agent
							Observability, Signals &amp; Dashboards, or Build
							Your Own) or bring your own idea. The example builds
							listed on the overview page are inspiration only;
							you are not limited to them.
						</li>
						<li>
							<strong className="text-[#ea6e4a]">
								Job interviews do not guarantee a job.
							</strong>{" "}
							Top winners get interview opportunities at SigNoz.
							These are a genuine chance to showcase your skills,
							but they do{" "}
							<strong className="text-[#ea6e4a]">not</strong>{" "}
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
							<strong className="text-[#ea6e4a]">
								How to submit:
							</strong>{" "}
							Once your project is ready, submit it through the{" "}
							<Link
								href={DATA.cta.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-amber-300 underline hover:text-amber-200"
							>
								project submission form
							</Link>{" "}
							before the deadline. Everything you need to include
							is listed in the form.
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

				<h2 className="text-3xl font-bold text-[#f5f5f5] glow-orange mt-12 mb-6">
					SigNoz Field Requirements
				</h2>
				<HackathonContentBody className="text-[#c0c1c3]">
					<ol className="list-decimal list-outside space-y-4 pl-6">
						<li>
							<strong className="text-[#ea6e4a]">
								Install SigNoz using Foundry.
							</strong>{" "}
							Foundry installs both SigNoz and its MCP server in
							one step. Follow the{" "}
							<Link
								href="https://signoz.io/docs/install/docker/"
								className="text-[#ffd778] hover:text-[#ea6e4a] underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Foundry quickstart
							</Link>{" "}
							to get started.
						</li>
						<li>
							<strong className="text-[#ea6e4a]">
								The more SigNoz features you use, the better
								your chances.
							</strong>{" "}
							Using the SigNoz MCP server, Query Builder,
							dashboards, and alerts is recommended to maximize
							your chances of winning. Check out the{" "}
							<Link
								href="/hackathons/signoz/resources"
								className="text-[#ffd778] hover:text-[#ea6e4a] underline"
							>
								resources section
							</Link>
							.
						</li>
						<li>
							<strong className="text-[#ea6e4a]">
								Make your deployment reproducible.
							</strong>{" "}
							Your repo must include the{" "}
							<code className="text-[#ffd778]">casting.yaml</code>{" "}
							and{" "}
							<code className="text-[#ffd778]">
								casting.yaml.lock
							</code>
							. Judges may re-run Foundry against them to
							reproduce your deployment.
						</li>
					</ol>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonRules;
