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
		<div className="pt-20 pb-10 bg-gradient-to-b from-[#0a0f1e] via-[#0c1a2e] to-[#0a0f1e] min-h-screen">
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
					🏴‍☠️ The Pirate&apos;s Code
				</h2>
				<HackathonContentBody className="text-slate-300">
					<ol className="list-decimal list-outside space-y-4 pl-6">
						<li>
							This event is part of the{" "}
							<Link
								href="https://www.wemakedevs.org/hackathons"
								className="text-amber-400 hover:text-amber-300 underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								WeMakeDevs Hackathon
							</Link>{" "}
							series. You can participate solo or with a crew of
							up to 4 members.
						</li>
						<li>
							<strong className="text-amber-400">
								Entry Requirements:
							</strong>{" "}
							You must ⭐ star the{" "}
							<Link
								href="https://github.com/withcoral/coral"
								className="text-amber-400 hover:text-amber-300 underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Coral GitHub repo
							</Link>{" "}
							and join the{" "}
							<Link
								href="https://withcoral.com/discord"
								className="text-amber-400 hover:text-amber-300 underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Coral Discord
							</Link>{" "}
							to be eligible for prizes.
						</li>
						<li>
							The more Coral features you use, the better your
							chances. Using Coral&apos;s SQL interface,
							cross-source joins, schema learning, caching, and
							MCP integration is recommended to maximize your
							chances of winning. Check out the{" "}
							<Link
								href={`/hackathons/${DATA.slug}/resources`}
								className="text-amber-400 hover:text-amber-300 underline"
							>
								resources section
							</Link>
							.
						</li>
						<li>
							You must build a new project during the hackathon.
							Simply modifying an existing codebase or app is not
							allowed — your ship should be freshly launched when
							the voyage begins.
						</li>
						<li>
							All design elements, code, and assets for your
							project must be created during the event. You may
							use third-party tools, frameworks, open-source
							libraries, public APIs, and publicly available
							assets.
						</li>
						<li>
							Crews can plan and discuss ideas in advance, but
							coding and design work should start only after the
							hackathon begins. Written notes, sketches, and
							diagrams are allowed before kickoff — just like
							studying the treasure map before setting sail.
						</li>
						<li>
							Projects must involve building software (hardware
							components are optional).
						</li>
						<li>Crews may consist of 1–4 members.</li>
						<li>
							Any intellectual property developed during the
							hackathon belongs to the crew that created it. Crews
							are encouraged to agree internally on IP ownership.
						</li>
						<li>
							Please treat all participants with respect. Act
							kindly and professionally — on this ship, we sail
							together. Harassment, discrimination, or exclusionary
							behavior of any kind will not be tolerated. If you
							see something concerning, notify an organizer
							immediately.
						</li>
						<li>
							Failure to follow these rules or the Code of Conduct
							may result in disqualification and a permanent ban
							from future events — ye&apos;ll be walking the
							plank!
						</li>
					</ol>
				</HackathonContentBody>

				{/* Project Submission Section */}
				<div className="mt-12 p-8 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl border border-amber-500/30">
					<h3 className="text-2xl font-bold text-amber-400 mb-4">
						📜 Submit Your Treasure
					</h3>
					{DATA.cta.disabled ? (
						<>
							<p className="text-slate-300 mb-6">
								Submissions for this hackathon have ended. Thank
								you for sailing with us!
							</p>
							<div
								className="inline-flex items-center gap-2 px-6 py-3 bg-slate-600/50 text-slate-400 font-bold rounded-xl cursor-not-allowed opacity-75"
								aria-disabled="true"
							>
								Submissions closed
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M7 7h10v10" />
									<path d="M7 17 17 7" />
								</svg>
							</div>
						</>
					) : (
						<>
							<p className="text-slate-300 mb-6">
								Ready to submit your project? Only one person
								from a crew needs to fill the submission form.
								Make sure you have your GitHub link, deployed
								link, and a YouTube demo (max 3 minutes) ready!
							</p>
							<Link
								href="https://forms.gle/dxBPLK17A8dXwp64A"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/30"
							>
								Submit Your Treasure
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M7 7h10v10" />
									<path d="M7 17 17 7" />
								</svg>
							</Link>
						</>
					)}
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonRules;
