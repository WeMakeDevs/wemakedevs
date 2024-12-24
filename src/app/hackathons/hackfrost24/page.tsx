import Faq from "@/components/Faq";
import {
	HackathonContentTitleH3,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content/";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import HackathonContentTitle from "@/components/hackathon-content/HackathonContentTitle";
import HackathonMain from "@/components/hackathon-content/HackathonMain";
import HackathonSpecialTestimonial from "@/components/hackathon-content/HackathonSpecialTestimonial";
import HackathonStats from "@/components/hackathon-content/HackathonStats";
import HackathonTestimonials from "@/components/hackathon-content/HackathonTestimonials";
import { ViewContainer } from "@/components/ui/view-container";
import { HACKATHON_FAQS } from "@/constants";
import { fetchHackathonData } from "@/lib/hackathon";
import type { HackathonData } from "@/types";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import { DATA as hackathonData } from "./data";
import { hackfrost24Cover } from "./images";
import { JudgingCriteria, Overview, Sponsor } from "./markdown";

export async function generateStaticParams() {
	const hackathons = await fetchHackathonData();

	return hackathons.map(hackathon => ({
		slug: hackathon.slug,
	}));
}

const HackathonPage = async () => {
	return (
		<main className="pt-20">
			<HackathonCoverImage
				src={hackfrost24Cover}
				alt={hackathonData.title}
			/>
			<HackathonNav slug={hackathonData.slug} page="overview" />
			<HackathonMain hackathon={hackathonData as HackathonData} />
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
					<HackathonContentTitle>
						HackFrost 2024 Stats
					</HackathonContentTitle>
					<HackathonContentTitleH3 className="mt-8">
						HackFrost in numbers
					</HackathonContentTitleH3>
					<HackathonStats />
					<HackathonSpecialTestimonial />
					<HackathonContentTitleH3 className="mt-12">
						Participants testimonials
					</HackathonContentTitleH3>
					<HackathonTestimonials />
					<HackathonContentBody>
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
