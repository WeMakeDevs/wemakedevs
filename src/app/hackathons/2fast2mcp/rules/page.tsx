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
							This event is part of the{" "}
							<Link
								href="https://www.wemakedevs.org/february"
								className="text-orange-400 hover:text-orange-300 underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Hack All February
							</Link>{" "}
							series. You can participate solo or with a team of up to 4 members. Teams can change per hackathon - you don't need to have the same team members for all hackathons in February. You can even participate solo in some hackathons and with a team in others.
						</li>
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

				{/* Project Submission Section */}
				<div className="mt-12 p-8 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl border border-orange-500/30">
					<h3 className="text-2xl font-bold text-orange-400 mb-4">
						Submit Your Project
					</h3>
					{DATA.cta.disabled ? (
						<>
							<p className="text-slate-300 mb-6">
								Submissions for this hackathon have ended. Thank you for participating!
							</p>
							<div
								className="inline-flex items-center gap-2 px-6 py-3 bg-slate-600/50 text-slate-400 font-bold rounded-xl cursor-not-allowed opacity-75"
								aria-disabled="true"
							>
								Submissions closed
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
							</div>
						</>
					) : (
						<>
							<p className="text-slate-300 mb-6">
								Ready to submit your project? Only one person from a team needs to fill the submission form. Make sure you have your GitHub link, deployed link, and a YouTube demo (max 3 minutes) ready!
							</p>
							<Link
								href="https://forms.gle/S1fV4shNaDmAbgSB8"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-900 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30"
							>
								Submit Your Project
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
							</Link>
						</>
					)}
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonRules;
