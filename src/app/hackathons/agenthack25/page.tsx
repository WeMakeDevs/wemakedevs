import Faq from "@/components/Faq";
import {
	HackathonContentBody,
	HackathonContentTitle,
	HackathonContentTitleH3,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import HackathonHeader from "./components/Header";
import AgentHackStats from "./components/Stats";
import AgentHackTestimonials from "./components/Testimonials";
import { DATA, faqs, navLinks } from "./data";
import { images } from "./images";

const HackathonPage = () => {
	return (
		<main className="pt-20">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav
				slug={DATA.slug}
				page="overview"
				links={navLinks}
				navCta={{
					label: DATA.cta.label,
					href: DATA.cta.href,
					openInNewTab: DATA.cta.openInNewTab,
					disabled: DATA.cta.disabled,
				}}
			/>
			<HackathonHeader
				title={DATA.title}
				description={DATA.description}
				startDate={DATA.startDate}
				endDate={DATA.endDate}
				prize={DATA.prize}
				cta={DATA.cta}
			/>
			<ViewContainer className="">
				<div className="">
					<HackathonContentBody>
						AgentHack was a global online hackathon that brought
						together industry professionals, tech enthusiasts, and
						innovators from around the globe. AgentHack provided a
						platform to build impactful AI agent projects, featuring
						workshops, networking opportunities, and prizes worth
						$6,000+ to tech enthusiast coming from different
						experience level. Attendees came together to learn,
						connect, and have fun while advancing their skills and
						contributing to the open-source AI community.
					</HackathonContentBody>
					<HackathonContentTitle>
						AgentHack 2025 Stats
					</HackathonContentTitle>
					<HackathonContentTitleH3 className="mt-8">
						AgentHack in numbers
					</HackathonContentTitleH3>
					<AgentHackStats />
					<HackathonContentTitleH3 className="mt-12">
						Participants testimonials
					</HackathonContentTitleH3>
					<AgentHackTestimonials />
					<HackathonContentTitle>
						What Participants Gained
					</HackathonContentTitle>
					<HackathonContentBody>
						<ul className="list-disc list-inside space-y-4">
							<li>
								<span className="font-semibold">
									Networking Opportunities:
								</span>{" "}
								Engaged with peers, industry leaders, and
								potential mentors who shared a passion for
								technology.
							</li>
							<li>
								<span className="font-semibold">
									Skill Development:
								</span>{" "}
								Participated in hands-on workshops to learn new
								skills and enhance existing ones. The hackathon
								setting fostered practical learning and
								problem-solving, ensuring participants stay at
								the forefront of technological advancements.
							</li>
							<li>
								<span className="font-semibold">
									Access to Advanced Tools:
								</span>{" "}
								Worked with cutting-edge tools and technologies
								provided by our sponsors, gaining experience
								with industry-leading software and platforms.
							</li>
							<li>
								<span className="font-semibold">
									Prizes Worth Over $6,000:
								</span>{" "}
								Competed for substantial rewards that recognized
								their hard work and innovation, adding value to
								their professional achievements.
							</li>
							<li>
								<span className="font-semibold">
									Contribute to Innovation:
								</span>{" "}
								Made a meaningful impact in the open-source AI
								community. Participant projects inspired
								real-world applications and influenced future
								developments.
							</li>
						</ul>
					</HackathonContentBody>
					<HackathonContentTitle>Prizes</HackathonContentTitle>
					<HackathonContentBody className="grid grid-cols-1 lg:grid-cols-2 gap-10">
						<div className="space-y-8">
							<HackathonContentTitleH3>
								Winning Prizes
							</HackathonContentTitleH3>
							{DATA.prizes.winning.map(prize => (
								<div className="space-y-4" key={prize.name}>
									<div className="text-lg md:text-xl font-semibold flex gap-2 items-center">
										<Star
											size={20}
											strokeWidth={0}
											fill="#ffd333"
											className="shrink-0"
										/>{" "}
										<div className="flex flex-wrap gap-2 items-center">
											{prize.name}{" "}
											{prize.prize && "will get"}
											{prize.prize && (
												<span className="px-2 py-1 bg-blue-600 text-white rounded-[4px]">
													{prize.prize}
												</span>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="space-y-8">
							<HackathonContentTitleH3>
								Side Quest
							</HackathonContentTitleH3>
							<div className="space-y-4">
								<div className="text-lg md:text-xl font-semibold flex gap-2 items-center">
									<Star
										size={20}
										strokeWidth={0}
										fill="#ffd333"
										className="shrink-0"
									/>{" "}
									<div className="flex flex-wrap gap-4 items-center">
										<Link
											href="https://github.com/portiaAI/portia-sdk-python"
											className="underline hover:no-underline group flex items-center gap-1"
											target="_blank"
											rel="noopener noreferrer"
										>
											Star Portia on GitHub{" "}
											<ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
										</Link>{" "}
										-
										<span className="px-2 py-1 bg-blue-600 text-white rounded-[4px]">
											Exclusive Swags
										</span>
									</div>
								</div>
								<p className="text-base md:text-lg font-medium">
									Top 10 people who star Portia on GitHub and
									share their hackathon experience on socials
									using #AgentHack2025 will get exclusive swag
									bags.
								</p>
							</div>
						</div>
					</HackathonContentBody>
					<HackathonContentTitle>Sponsor</HackathonContentTitle>
					<HackathonContentBody>
						<Link
							href="https://www.portialabs.ai/"
							className="font-bold underline hover:no-underline text-blue-600"
							target="_blank"
							rel="noopener noreferrer"
						>
							Portia
						</Link>{" "}
						is a cutting-edge platform for building{" "}
						<span className="font-bold">
							controllable AI agents
						</span>{" "}
						that can plan, ask for user input, and perform complex
						actions across thousands of tools. Designed with safety,
						flexibility, and developer experience in mind, Portia
						enables teams to integrate LLM-powered agents into
						real-world workflows without compromising on oversight
						or control.
					</HackathonContentBody>
					<HackathonContentBody>
						Portia tackles the core challenges of building practical
						AI agents through a powerful suite of features including
						a{" "}
						<span className="font-bold">
							Controllable Agent Framework
						</span>{" "}
						that enables structured planning and human-in-the-loop
						intervention,{" "}
						<span className="font-bold">Tool Connectivity</span>{" "}
						with over 1000+ APIs (like Gmail, GitHub, Slack, and
						Notion), and{" "}
						<span className="font-bold">Secure Execution</span>{" "}
						through open-source runtimes and configurable policies.
						Its{" "}
						<span className="font-bold">Developer-Centric SDK</span>{" "}
						allows full customization while ensuring agents behave
						safely and predictably.
					</HackathonContentBody>
					<HackathonContentBody>
						By simplifying how AI agents are created and managed,
						Portia empowers developers to bring intelligent
						automation to their workflows safely and reliably.
					</HackathonContentBody>
					<HackathonContentTitle>
						Judging Criteria
					</HackathonContentTitle>
					<HackathonContentBody>
						<ul className="list-disc list-inside space-y-3">
							<li>
								<span className="font-semibold">
									Potential Impact:
								</span>{" "}
								Evaluates how effectively the agent or solution
								addresses a meaningful problem or unlocks a
								valuable use case.
							</li>
							<li>
								<span className="font-semibold">
									Creativity & Originality:
								</span>{" "}
								Assesses the uniqueness of the agent idea, the
								novelty in how tools are connected, or how
								Portia is used in unexpected ways.
							</li>
							<li>
								<span className="font-semibold">
									Learning & Growth:
								</span>{" "}
								Recognizes the learning curve tackled during the
								hackathon, especially for first-time builders or
								teams experimenting with AI/automation.
							</li>
							<li>
								<span className="font-semibold">
									Implementation of the Idea:
								</span>{" "}
								Reviews how well the idea was executed
								technically, does the agent function as
								intended, and does it make good use of Portia's
								features?
							</li>
							<li>
								<span className="font-semibold">
									Aesthetics & UX:
								</span>{" "}
								Considers how intuitive and user-friendly the
								final experience is, especially if the project
								has a frontend or user interaction layer.
							</li>
						</ul>
					</HackathonContentBody>
				</div>
			</ViewContainer>
			<Faq FAQS={faqs} />
		</main>
	);
};

export default HackathonPage;
