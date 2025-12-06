import { HackathonCoverImage } from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { ViewContainer } from "@/components/ui/view-container";
import Link from "next/link";
import SecondaryNavbar from "../components/navbars/SecondaryNavbar";
import { DATA, navLinks } from "../data";
import { images } from "../images";

const HackathonRules = async () => {
	return (
		<div className="pt-20 pb-10">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<SecondaryNavbar
				slug={DATA.slug}
				page="rules"
				links={navLinks}
				navCta={DATA.cta}
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
									requirements for each prize category. Each
									award is tied to specific sponsor tools, and
									your submission must meet those requirements
									to be eligible.
								</p>
								<ul className="space-y-3 list-disc list-outside pl-6 mb-4">
									<li>
										<strong>
											The Infinity Build Award – $5,000
										</strong>
										<br />
										Your project must use Cline CLI. Cline
										must be used to build capabilities on
										top of the CLI that improve the software
										development experience, and your project
										should demonstrate complete, working
										automation tools built through the CLI.
									</li>
									<li>
										<strong>
											The Wakanda Data Award – $4,000
										</strong>
										<br />
										Your project must use Kestra&apos;s
										built-in AI Agent to summarise data from
										other systems, with bonus credit if your
										agent can make decisions based on the
										summarised data.
									</li>
									<li>
										<strong>
											The Iron Intelligence Award – $3,000
										</strong>
										<br />
										Your project must use the Oumi
										open-source library and must include
										Oumi&apos;s Reinforcement Learning
										fine-tuning features as part of your
										submission. Data Synthesis and
										LLM-as-a-Judge are optional but
										encouraged.
									</li>
									<li>
										<strong>
											The Stormbreaker Deployment Award –
											$2,000
										</strong>
										<br />
										Your project must be deployed on Vercel,
										and the deployment must be live. Any
										standard Vercel deployment qualifies.
									</li>
									<li>
										<strong>
											The Captain Code Award – $1,000
										</strong>
										<br />
										Your repository must demonstrate the use
										of CodeRabbit for PR reviews, code
										quality improvements, documentation, and
										open-source best practices. CodeRabbit
										activity should be clearly visible.
									</li>
								</ul>
								<p>
									Projects that do not use the required
									sponsor technologies for their respective
									categories are not eligible for those
									sponsor-specific prizes.
									<br />
									Refer to the{" "}
									<Link
										href="/hackathons/assemblehack25/resources"
										className="text-blue-600 underline hover:no-underline"
									>
										Resources section
									</Link>{" "}
									for guides and documentation.
								</p>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold mb-2">
								What to Use for Each Sponsor
							</h2>
							<p className="text-gray-600 mb-4">
								Make sure to check out the{" "}
								<Link
									href="/hackathons/assemblehack25/resources"
									className="text-blue-600 underline hover:no-underline"
								>
									resources section
								</Link>{" "}
								to learn more about these tools.
							</p>
							<div className="space-y-4">
								<div>
									<h3 className="text-xl font-semibold mb-2">
										<strong>Cline</strong>
									</h3>
									<p>
										Participants must use the Cline CLI, the
										command-line interface for autonomous AI
										coding agents. You should build new
										capabilities on top of the CLI that
										improve the software development
										experience, and your project should
										demonstrate complete, working automation
										tools built through the CLI.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										<strong>Kestra</strong>
									</h3>
									<p>
										Your project must use Kestra&apos;s
										built-in AI Agent to summarise data from
										other systems, with bonus consideration
										if the agent can also make decisions
										based on the summarised data.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										<strong>Oumi</strong>
									</h3>
									<p>
										Your submission must use the{" "}
										<Link
											href="https://github.com/oumi-ai/oumi"
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 underline hover:no-underline"
										>
											Oumi
										</Link>{" "}
										open-source library, specifically
										Oumi&apos;s{" "}
										<Link
											href="https://github.com/oumi-ai/oumi/blob/main/notebooks/Oumi%20-%20OpenEnv%20GRPO%20with%20trl.ipynb"
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 underline hover:no-underline"
										>
											Reinforcement Learning
										</Link>{" "}
										fine-tuning features (
										<Link
											href="https://github.com/oumi-ai/oumi/blob/main/notebooks/Oumi%20-%20Train%20a%20Letter%20Counting%20Model%20using%20GRPO.ipynb"
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 underline hover:no-underline"
										>
											more info
										</Link>
										). You may also choose to use Data
										Synthesis, LLM-as-a-Judge, or any
										examples provided in the Oumi notebooks,
										as these are optional but encouraged.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										<strong>Vercel</strong>
									</h3>
									<p>
										Your project must be deployed on Vercel.
										Any standard Vercel deployment
										qualifies.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										<strong>CodeRabbit</strong>
									</h3>
									<p>
										Your repository should demonstrate the
										use of CodeRabbit for PR reviews, code
										quality suggestions, documentation
										improvements, and overall open-source
										best practices. CodeRabbit activity
										should be clearly visible in your
										workflow.
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
