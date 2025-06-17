import Faq from "@/components/Faq";
import {
	HackathonContentTitleH3,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content/";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import HackathonContentTitle from "@/components/hackathon-content/HackathonContentTitle";
import HackathonMain from "@/components/hackathon-content/HackathonMain";
import { ViewContainer } from "@/components/ui/view-container";
import { HACKATHON_FAQS } from "@/constants";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import hackathonData from "./data";
import { images } from "./images";
import { JudgingCriteria, Overview, Sponsor } from "./markdown";

const HackathonPage = async () => {
	return (
		<main className="pt-20">
			<HackathonCoverImage src={images.cover} alt={hackathonData.title} />
			<HackathonNav
				slug={hackathonData.slug}
				page="overview"
				links={hackathonData.navLinks}
				submitButton={hackathonData.submitButton}
			/>
			{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
			<HackathonMain hackathon={hackathonData as any} />
			<ViewContainer className="">
				<div className="">
					<HackathonContentBody>
						HackFrost was an online winter hackathon that brought
						together industry professionals, tech enthusiasts, and
						innovators from around the globe. HackFrost provided a
						platform to build impactful projects, featuring
						workshops, networking opportunities, and prizes worth
						$10,000+ to tech enthusiast coming from different
						experience level. Attendees came together to learn,
						connect, and have fun while advancing their skills and
						contributing to the open-source community.
					</HackathonContentBody>
					<HackathonContentBody>
						{/* YOU CAN PUT ANYTHING IN THE OVERVIEW SECTION */}
						<Overview />
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
							{hackathonData.prizes.winning.map(prize => (
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
							{hackathonData.prizes.giveaway && (
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
											Top 20 people who star Kestra on
											Github and share their hackathon
											experience on socials using
											#HackFrost2024 will get an exclusive
											swag bag.
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
							{hackathonData.prizes.other.map(prize => (
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
					<HackathonContentBody>
						<Sponsor />
					</HackathonContentBody>
					<HackathonContentBody>
						<JudgingCriteria />
					</HackathonContentBody>
				</div>
			</ViewContainer>
			<Faq FAQS={HACKATHON_FAQS} />
		</main>
	);
};

export default HackathonPage;
