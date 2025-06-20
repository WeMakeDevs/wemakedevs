import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content/";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import HackathonContentTitle from "@/components/hackathon-content/HackathonContentTitle";
import HackathonMain from "@/components/hackathon-content/HackathonMain";
import { ViewContainer } from "@/components/ui/view-container";
import Link from "next/link";
import hackathonData from "./data";
import { images } from "./images";
import { Overview, Sponsor } from "./markdown";

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
					{/* <HackathonContentBody>
						HackFrost was an online winter hackathon that brought
						together industry professionals, tech enthusiasts, and
						innovators from around the globe. HackFrost provided a
						platform to build impactful projects, featuring
						workshops, networking opportunities, and prizes worth
						$10,000+ to tech enthusiast coming from different
						experience level. Attendees came together to learn,
						connect, and have fun while advancing their skills and
						contributing to the open-source community.
					</HackathonContentBody> */}
					<HackathonContentBody>
						{/* YOU CAN PUT ANYTHING IN THE OVERVIEW SECTION */}
						<Overview />
					</HackathonContentBody>
					<HackathonContentTitle>Prizes</HackathonContentTitle>
					<HackathonContentBody className="space-y-4 text-lg">
						<p>
							✨ Barrier to entry is super low: simply register
							and star the GitHub repository for a chance to win a
							brand new{" "}
							<span className="font-bold bg-blue-600 text-white rounded-[4px] px-2 py-1">
								Apple iPad (2025)
							</span>
							.
						</p>
						<p>
							🏆 For those who want to go further, the most
							creative flow or blueprint creators will get a
							chance to win a brand new{" "}
							<span className="font-bold bg-blue-600 text-white rounded-[4px] px-2 py-1">
								Apple MacBook Air
							</span>
							.
						</p>
					</HackathonContentBody>
					<HackathonContentBody>
						<Sponsor />
					</HackathonContentBody>
					<HackathonContentTitle>
						How to submit your project
					</HackathonContentTitle>
					<HackathonContentBody className="space-y-4 text-lg">
						<p>
							✅ Once your flow is ready, share it on social media
							with your GitHub repository link. Don’t forget to
							tag WeMakeDevs and Kestra using #KestraHackWeek.
						</p>
					</HackathonContentBody>
					<HackathonContentTitle>Help</HackathonContentTitle>
					<HackathonContentBody>
						<p>
							❓Got questions? Join our discord and ask under
							questions channel in hackweek category. <br />
							For any other query email us at{" "}
							<Link
								href="mailto:contact@wemakedevs.org"
								className="text-blue-600"
							>
								contact@wemakedevs.org
							</Link>
							.
						</p>
					</HackathonContentBody>
				</div>
			</ViewContainer>
		</main>
	);
};

export default HackathonPage;
