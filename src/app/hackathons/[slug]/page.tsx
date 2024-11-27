import Faq from "@/components/Faq";
import {
	HackathonContentTitleH3,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content/";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import HackathonContentTitle from "@/components/hackathon-content/HackathonContentTitle";
import HackathonMain from "@/components/hackathon-content/HackathonMain";
import { CustomMDX } from "@/components/mdx-remote";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { HACKATHON_FAQS } from "@/constants";
import { fetchHackathonData } from "@/lib/hackathon";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
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
									{hackathon.prizes.giveaway.map(prize => (
										<div
											className="space-y-4"
											key={prize.name}
										>
											<p className="text-lg md:text-xl font-semibold flex gap-2 items-center">
												<Star
													size={20}
													strokeWidth={0}
													fill="#ffd333"
													className="shrink-0"
												/>{" "}
												<div className="flex flex-wrap gap-2 items-center">
													{prize.name}{" "}
													{prize.prize && "-"}
													{prize.prize && (
														<span className="px-2 py-1 bg-blue-600 text-white rounded-[4px]">
															{prize.prize}
														</span>
													)}
												</div>
											</p>
											{prize.description && (
												<p className="text-base md:text-lg font-medium">
													{prize.description}
												</p>
											)}
										</div>
									))}
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
