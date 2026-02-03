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
							<strong className="text-amber-400">Prize distribution:</strong> Winners will receive the full prize amount regardless of team size. For teams, the prize will be equally distributed among all team members. Solo winners will also receive the full listed prize amount.
						</li>
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

			{/* Project Submission Section */}
			<div className="mt-12 p-8 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl border border-amber-500/30">
				<h3 className="text-2xl font-bold text-amber-400 mb-4">
					Submit Your Project
				</h3>
				<p className="text-slate-300 mb-6">
					Ready to submit your project? Only one person from a team needs to fill the submission form. Make sure you have your GitHub link, deployed link, and a YouTube demo (max 3 minutes) ready!
				</p>
				<Link
					href="https://forms.gle/dzDNfTwJJn5ap4vY7"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-900 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/30"
				>
					Submit Your Project
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
				</Link>
			</div>
		</ViewContainer>
		</div>
	);
};

export default HackathonRules;
