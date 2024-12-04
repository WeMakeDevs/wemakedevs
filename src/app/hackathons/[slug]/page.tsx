import Faq from "@/components/Faq";
import NumberCard from "@/components/NumberCard";
import {
	HackathonContentTitleH3,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content/";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import HackathonContentTitle from "@/components/hackathon-content/HackathonContentTitle";
import HackathonMain from "@/components/hackathon-content/HackathonMain";
import HackathonStats from "@/components/hackathon-content/HackathonStats";
import { CustomMDX } from "@/components/mdx-remote";
import { ViewContainer } from "@/components/ui/view-container";
import { HACKATHON_FAQS } from "@/constants";
import { fetchHackathonData } from "@/lib/hackathon";
import type { NumbersShowcaseType } from "@/types";
import { ArrowUpRight, File, Globe, Sparkle, Star, Users } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const hackathons = await fetchHackathonData();

	return hackathons.map(hackathon => ({
		slug: hackathon.slug,
	}));
}

const HackathonPage = async ({ params }: { params: { slug: string } }) => {
	const hackathons = await fetchHackathonData();
	const hackathon = hackathons.find(
		hackathon => hackathon.slug === params.slug,
	);

	if (!hackathon) notFound();

	return (
		<main className="pt-20">
			<HackathonCoverImage
				src={hackathon.image.cover}
				alt={hackathon.title}
			/>
			<HackathonNav slug={hackathon.slug} page="overview" />
			<HackathonMain hackathon={hackathon} />
			<ViewContainer className="">
				{/* MDX File information renders from here */}
				<div className="">
					<HackathonContentBody>
						<CustomMDX source={hackathon.overview} />
					</HackathonContentBody>
					<HackathonContentTitle>
						Hackfrost 2024 Stats
					</HackathonContentTitle>
					<HackathonStats />
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
							{hackathon.prizes.winning.map(prize => (
								<div className="space-y-4" key={prize.name}>
									<p className="text-lg md:text-xl font-semibold flex gap-2 items-center">
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
									</p>
								</div>
							))}
							{hackathon.prizes.giveaway && (
								<>
									<HackathonContentTitleH3>
										Side Quest
									</HackathonContentTitleH3>
									<div className="space-y-4">
										<p className="text-lg md:text-xl font-semibold flex gap-2 items-center">
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
										</p>
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
							{hackathon.prizes.other.map(prize => (
								<div className="space-y-4" key={prize.name}>
									<p className="text-lg md:text-xl font-semibold flex gap-2 items-center">
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
									</p>
								</div>
							))}
						</div>
					</HackathonContentBody>
					<HackathonContentBody>
						{hackathon.sponsor && (
							<CustomMDX source={hackathon.sponsor} />
						)}
					</HackathonContentBody>
					<HackathonContentBody>
						{hackathon.judgingCriteria && (
							<CustomMDX source={hackathon.judgingCriteria} />
						)}
					</HackathonContentBody>
				</div>
			</ViewContainer>
			<Faq FAQS={HACKATHON_FAQS} />
		</main>
	);
};

export default HackathonPage;
