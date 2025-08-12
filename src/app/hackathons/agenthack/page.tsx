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
import { DATA, faqs, navLinks } from "./data";
import { images } from "./images";

const HackathonPage = () => {
	return (
		<main className="pt-20">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav slug={DATA.slug} page="overview" links={navLinks} />
			<HackathonHeader
				title={DATA.title}
				description={DATA.description}
				startDate={DATA.startDate}
				endDate={DATA.endDate}
				prize={DATA.prize}
				cta={DATA.cta}
			/>
			<ViewContainer>
				<HackathonContentBody>
					HackFrost was an online winter hackathon that brought
					together industry professionals, tech enthusiasts, and
					innovators from around the globe. HackFrost provided a
					platform to build impactful projects, featuring workshops,
					networking opportunities, and prizes worth $10,000+ to tech
					enthusiast coming from different experience level. Attendees
					came together to learn, connect, and have fun while
					advancing their skills and contributing to the open-source
					community.
				</HackathonContentBody>
				<HackathonContentTitle>Prizes</HackathonContentTitle>
				<HackathonContentBody className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					<div className="space-y-8">
						<HackathonContentTitleH3>
							Winning Prizes
						</HackathonContentTitleH3>
						<div className="flex flex-wrap gap-2 items-center">
							<span className="px-2 py-1 bg-blue-600 text-white rounded-[4px] font-medium text-base md:text-xl inline-block">
								Separate gadget for every team member
							</span>
							<span className="px-2 py-1 bg-blue-600 text-white rounded-[4px] font-medium text-base md:text-xl">
								Use of Kestra is mandatory for below tracks
							</span>
						</div>
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
										{prize.name} {prize.prize && "-"}
										{prize.prize && (
											<span className="px-2 py-1 bg-blue-600 text-white rounded-[4px]">
												{prize.prize}
											</span>
										)}
									</div>
								</div>
							</div>
						))}
						{DATA.prizes.giveaway && (
							<>
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
												href="https://github.com/kestra-io/kestra"
												className="underline hover:no-underline group flex items-center gap-1"
												target="_blank"
												rel="noopener noreferrer"
											>
												Star Kestra on GitHub{" "}
												<ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
											</Link>{" "}
											-
											<span className="px-2 py-1 bg-blue-600 text-white rounded-[4px]">
												Exclusive Swag Bag
											</span>
										</div>
									</div>
									<p className="text-base md:text-lg font-medium">
										Top 20 people who star Kestra on Github
										and share their hackathon experience on
										socials using #HackFrost2024 will get an
										exclusive swag bag.
									</p>
								</div>
							</>
						)}
					</div>
					<div className="space-y-8">
						<HackathonContentTitleH3>
							Other Prizes
						</HackathonContentTitleH3>
						<div className="flex flex-wrap gap-2 items-center">
							<span className="px-2 py-1 bg-blue-600 text-white rounded-[4px] font-medium text-base md:text-xl">
								Keychron Keyboard + Swag Bag for each
							</span>
						</div>
						{DATA.prizes.other.map(prize => (
							<div className="space-y-4" key={prize.name}>
								<div className="text-lg md:text-xl font-semibold flex gap-2 items-center">
									<Star
										size={20}
										strokeWidth={0}
										fill="#ffd333"
										className="shrink-0"
									/>{" "}
									<div className="flex flex-wrap gap-2 items-center">
										{prize.name}
									</div>
								</div>
							</div>
						))}
					</div>
				</HackathonContentBody>
				<HackathonContentTitle>Sponsor</HackathonContentTitle>
				<HackathonContentBody>
					<Link
						href="https://kestra.io/"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:no-underline text-blue-600"
					>
						Kestra
					</Link>{" "}
					is a Unified Orchestration Platform for scheduling and
					orchestration that simplifies complicated data pipelines and
					processes. Kestra gives developers the freedom to
					concentrate on creativity and execution rather than the
					complexities of infrastructure administration by providing a
					complete platform. It offers a user-friendly visual
					interface for process design, which both technical and
					non-technical people may efficiently utilize.
				</HackathonContentBody>
				<HackathonContentBody>
					Kestra adeptly addresses common infrastructure orchestration
					challenges with a suite of features including a Visual
					Workflow Designer that provides a visual topology for
					developers and editable configurations for team members, a
					Scalable Architecture designed for large-scale and high-load
					environments through horizontal scalability, Comprehensive
					Monitoring Tools that offer detailed insights for quick
					issue resolution and system reliability, Simplified
					Management by consolidating various tasks into a single
					platform, and Realtime Triggers that automate workflows
					based on specific events, enhancing response times and
					procedural efficiency.
				</HackathonContentBody>
				<HackathonContentTitle>Judging Criteria</HackathonContentTitle>
				<HackathonContentBody>
					<ul className="list-disc list-inside">
						<li>
							Potential Impact: Assesses the extent to which the
							solution can address a significant need.
						</li>
						<li>
							Creativity & Originality**: Considers the uniqueness
							and innovation behind the idea.
						</li>
						<li>
							Learning: Measures the learning and growth
							demonstrated by the team during the project
							development.
						</li>
						<li>
							Implementation of the Idea: Examines how well the
							concept was executed by the developer or team.
						</li>
						<li>
							Aesthetics: Reviews the UI/UX of the project for
							intuitiveness and user-friendliness.
						</li>
					</ul>
				</HackathonContentBody>
				<Faq FAQS={faqs} />
			</ViewContainer>
		</main>
	);
};

export default HackathonPage;
