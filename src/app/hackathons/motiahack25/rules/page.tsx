import { HackathonCoverImage } from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { ViewContainer } from "@/components/ui/view-container";
import SecondaryNavbar from "../components/navbars/SecondaryNavbar";
import { DATA, navLinks } from "../data";
import { images } from "../images";

const HackathonRules = async () => {
	return (
		<div className="pt-20 pb-16 bg-gradient-to-b from-[#050705] via-[#0b1114] to-[#112130] text-slate-100 min-h-screen">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<SecondaryNavbar slug={DATA.slug} page="rules" links={navLinks} />
			<ViewContainer className="my-10">
				<HackathonContentBody className="bg-[#0f171d]/80 rounded-2xl border border-green-500/15 p-6 text-slate-200 font-mono shadow-[0_15px_35px_rgba(6,12,9,0.45)]">
					<ol className="list-decimal list-outside space-y-4 pl-6">
						<li>
							Projects should meaningfully use Motia's core model
							of Steps and Workflows. Using the Motia CLI and
							showcasing unified flows that tie together APIs,
							background jobs, scheduled tasks, events, or AI
							agents will score higher, since that's the heart of
							Motia.
						</li>
						<li>
							You must build a new project during the hackathon.
							Repackaging or lightly modifying an existing project
							is not allowed.
						</li>
						<li>
							All design elements, code, and assets for your
							project must be created during the event. You may
							use third-party tools, frameworks, open-source
							libraries, public APIs, and publicly available
							assets such as Creative Commons images, fonts,
							datasets, or music.
						</li>
						<li>
							Teams can plan and discuss ideas in advance, but
							coding and design work should start only after the
							hackathon begins. Written notes, sketches,
							architecture diagrams, and workflow drafts are
							allowed before kickoff.
						</li>
						<li>
							Projects must involve building software that runs on
							Motia as the backend framework. You can mix
							languages inside one project when it helps your
							workflow. Hardware components are optional.
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
