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
					<div className="space-y-8">
						<section>
							<h2 className="text-2xl font-bold mb-4">
								Eligibility and Participation
							</h2>
							<div className="space-y-4">
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Age Requirement
									</h3>
									<p>
										Participants must be 16 years of age or
										older.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Registration
									</h3>
									<p>
										Only individuals who complete the
										official registration form will be
										granted access to the hackathon
										platform.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Online Participation
									</h3>
									<p>
										The hackathon is fully online. All team
										activities, including collaboration,
										workshops, mentoring, and project
										submissions, must take place using the
										designated platforms.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Team Composition
									</h3>
									<p>
										Teams may consist of 1 to 4 members. All
										members must be officially registered.
										Collaboration outside official channels
										is allowed only for coordination among
										registered teammates.
									</p>
								</div>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold mb-4">
								Project Rules
							</h2>
							<div>
								<h3 className="text-xl font-semibold mb-2">
									Use of Sponsor Technology
								</h3>
								<p className="mb-4">
									To qualify for cash prizes or interview
									opportunities, projects must follow the
									requirements for each prize category:
								</p>
								<ul className="space-y-3 list-disc list-outside pl-6 mb-4">
									<li>
										<strong>
											The Infinity Build Award – $10,000
										</strong>
										<br />
										Use <strong>all three tools</strong>:
										Cline, Vercel, and Kestra to build a
										full-stack AI agent system.
									</li>
									<li>
										<strong>
											The Visionary Intelligence Award –
											$3,000
										</strong>
										<br />
										Best use of <strong>Oumi</strong> with{" "}
										<strong>open-source LLMs</strong>{" "}
										(LLaMA, Gemma, Mistral, Qwen, etc.).
									</li>
									<li>
										<strong>
											The Captain Code Award – $2,000
										</strong>
										<br />
										Use <strong>CodeRabbit</strong> to
										demonstrate exceptional open-source good
										practices.
									</li>
								</ul>
								<p>
									Projects that do not use the required
									sponsor technologies are not eligible for
									sponsor-specific prizes.
									<br />
									Refer to the Resources section for guides
									and documentation.
								</p>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold mb-4">
								What to Use for Each Sponsor
							</h2>
							<div className="space-y-4">
								<div>
									<h3 className="text-xl font-semibold mb-2">
										<strong>Kestra</strong>
									</h3>
									<p>
										Use Kestra&apos;s built-in AI Agent to
										summarise data from other systems.
										<br />
										Bonus points for enabling the agent to
										make decisions based on the summarised
										data.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										<strong>Cline</strong>
									</h3>
									<p>
										Use the <strong>Cline CLI</strong>{" "}
										during development as part of your
										agent-building workflow.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										<strong>Vercel</strong>
									</h3>
									<p>
										You may use anything you like, but your
										project must be{" "}
										<strong>deployed on Vercel</strong> to
										qualify for UI-related or
										deployment-focused scoring.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										<strong>Oumi</strong>
									</h3>
									<p>
										Build agents using{" "}
										<strong>open-source LLMs</strong> such
										as LLaMA, Gemma, Mistral, or Qwen.
										<br />
										Judges will evaluate how effectively
										Oumi is used to power reasoning, tools,
										memory, or autonomy.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										<strong>CodeRabbit</strong>
									</h3>
									<p>
										Demonstrate exceptional open-source
										engineering through:
										<br />
										clean PRs, documentation, modularity,
										GitHub hygiene, and OSS workflows.
									</p>
								</div>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold mb-4">
								Creation Guidelines
							</h2>
							<ul className="space-y-2 list-disc list-outside pl-6">
								<li>
									All work (code, design, hardware) must be
									created during the hackathon.
								</li>
								<li>
									Open-source libraries, APIs, Creative
									Commons media, and publicly available
									resources may be used.
								</li>
								<li>
									Pre-event planning such as sketches, ideas,
									or documentation is allowed.
								</li>
								<li>Use of AI tools is permitted.</li>
								<li>
									Projects must include meaningful software
									development. Hardware components are
									optional.
								</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-bold mb-4">
								Intellectual Property
							</h2>
							<ul className="space-y-2 list-disc list-outside pl-6">
								<li>
									WeMakeDevs does not claim ownership of
									hackathon ideas or projects.
								</li>
								<li>
									This hackathon is an experiential learning
									event, and most ideas will be early stage.
								</li>
								<li>
									If a project is based on a pre-existing or
									more developed idea, ownership remains with
									the originator and any team members who
									significantly contribute.
								</li>
								<li>
									Teams must resolve ownership and
									contribution arrangements internally.
								</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-bold mb-4">
								Code of Conduct
							</h2>
							<ul className="space-y-2 list-disc list-outside pl-6">
								<li>
									Treat all participants, mentors, and
									organizers with respect.
								</li>
								<li>
									Harassment, discrimination, or abusive
									behavior will not be tolerated.
								</li>
								<li>
									Collaboration is encouraged, but plagiarism
									or misrepresentation of work will lead to
									disqualification.
								</li>
								<li>
									Participants must follow the rules of all
									hackathon platforms and respect community
									guidelines.
								</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-bold mb-4">
								Submission Guidelines
							</h2>
							<p className="mb-4">
								Each submission must include:
							</p>
							<div className="space-y-4">
								<div>
									<h3 className="text-xl font-semibold mb-2">
										GitHub Repository
									</h3>
									<p>
										A public repo with visible commit
										history.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										README File
									</h3>
									<p>
										A clear explanation of the project,
										setup instructions, and usage details.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Demo Video
									</h3>
									<p>
										A mandatory 2-minute demo showcasing the
										project.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Deployment
									</h3>
									<p>
										Optional for most tracks but earns extra
										credit.
										<br />
										Deployment is <strong>mandatory</strong>{" "}
										when competing for prizes that require
										Vercel.
									</p>
								</div>
							</div>
						</section>
					</div>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonRules;
