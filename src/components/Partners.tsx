import {
	draperHouseLogo,
	hackThisFallLogo,
	kubesimplifyLogo,
	postmanLogo,
} from "@/assets/images/communityPartners";
import {
	kestraAuthor,
	kestraLogo,
	kodecloudAuthor,
	kodecloudLogo,
	kubesphereAuthor,
	kubesphereLogo,
	teleportAuthor,
	teleportLogo,
	wilcoAuthor,
	wilcoLogo,
} from "@/assets/images/partners";
import { cn } from "@/lib/utils";
import type { PartnerData } from "@/types";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
	PartnerCard,
	PartnerCardAuthorImage,
	PartnerCardAuthorName,
	PartnerCardLogo,
	PartnerCardQuote,
} from "./PartnerCard";
import { buttonVariants } from "./ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { ViewContainer } from "./ui/view-container";

const partnersData: PartnerData[] = [
	{
		image: kestraAuthor,
		logo: kestraLogo,
		author: "Emmanuel Darras",
		name: "Kestra",
		quote: "🌟 Huge thanks to Kunal Kushwaha and the amazing team at WeMakeDevs for organizing the very first Hackathon around Kestra! With over 2,000 participants worldwide, it was an incredible success and a true honor to see brilliant developers using Kestra to create innovative projects. 🙌",
	},
	{
		image: kodecloudAuthor,
		logo: kodecloudLogo,
		author: "Prabhjyot Kaur",
		name: "Kode Kloud",
		quote: "Excellent! So there was a sudden spike in audience from YT redirected to our site after the collaboration and that was really good to see.",
	},
	{
		image: teleportAuthor,
		logo: teleportLogo,
		author: "Kateryna Ivashchenko",
		name: "Teleport",
		quote: "Partnering with Kunal and his community was one of the highlights for the Teleport team this year. The quality of content is top-notch, the community engagement is very high, and the ROI is there to prove it. It brought in 10K+ new web sessions and 100+ downloads with majority being new users.",
	},
	{
		image: wilcoAuthor,
		logo: wilcoLogo,
		author: "Alexandra Macias",
		name: "Wilco",
		quote: "It was extremely successful. We got around 1700 signups through our campaigns. Thank you for everything, Kunal. You have a wonderful community.",
	},
	{
		image: kubesphereAuthor,
		logo: kubesphereLogo,
		author: "Yun Li",
		name: "Kubesphere",
		quote: "It's been a great feeling to collaborate with Kunal and his community, and he has made the entire process a pleasure. Kunal has made great contributions to letting more people know the benefits of our services and increase our user base. We got over 11K stars and 5K signups.",
	},
];

const Partners = () => {
	return (
		<section id="partners" className="my-28 scroll-m-[100px]">
			<ViewContainer>
				{/* Partner Testimonials Carousel */}
				<div className="mb-16 space-y-8">
					<div className="mb-8 space-y-6">
						<h2 className="text-4xl md:text-5xl text-center">
							Partner With Us
						</h2>
						<p className="text-center text-lg leading-snug font-medium text-foreground/90">
							Collaborate with us to support innovation in global
							hackathons and tech events.
						</p>
					</div>

					<div className="relative">
						<Carousel
							opts={{
								align: "start",
								loop: true,
							}}
							className="w-full"
						>
							<CarouselContent className="-ml-2 md:-ml-4">
								{partnersData.map(partner => (
									<CarouselItem
										key={partner.name}
										className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
									>
										<PartnerCard className="relative h-full">
											<PartnerCardLogo
												className="mb-6"
												img={partner.logo}
												title={partner.name}
											/>
											<PartnerCardQuote>
												{partner.quote}
											</PartnerCardQuote>
											<div className="flex mt-auto absolute bottom-5 left-5 items-center gap-4">
												<PartnerCardAuthorImage
													img={partner.image}
													title={partner.author}
													className="w-10 rounded-full"
												/>
												<PartnerCardAuthorName>
													{partner.author}
												</PartnerCardAuthorName>
											</div>
										</PartnerCard>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</div>
				</div>

				{/* Community Partners Section */}
				<div className="space-y-8">
					<div className="text-center space-y-4">
						<h3 className="text-3xl md:text-4xl font-semibold">
							Community Partners
						</h3>
						<p className="text-lg leading-snug font-medium text-foreground/80 max-w-3xl mx-auto">
							Expand your impact, tap into thousands of active
							builders while we spotlight your community
						</p>
					</div>

					{/* Community Partner Logos */}
					<div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
						<Link
							href="https://www.postman.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center p-4"
						>
							<Image
								src={postmanLogo}
								alt="Postman"
								className="object-contain w-20"
							/>
						</Link>
						<Link
							href="https://hackthisfall.tech/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center p-4"
						>
							<Image
								src={hackThisFallLogo}
								alt="HackThisFall"
								className="object-contain w-32"
							/>
						</Link>
						<Link
							href="https://draperstartuphouse.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center p-4"
						>
							<Image
								src={draperHouseLogo}
								alt="Draper House India"
								className="object-contain w-36"
							/>
						</Link>
						<Link
							href="https://kubesimplify.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center p-4"
						>
							<Image
								src={kubesimplifyLogo}
								alt="Kubesimplify"
								className="object-contain w-48"
							/>
						</Link>
					</div>

					{/* Get in Touch Button */}
					<div className="flex justify-center pt-4">
						<Link
							className={cn(
								buttonVariants({}),
								"text-white w-fit flex items-center gap-4 text-lg px-8 py-3",
							)}
							href="mailto:contact@wemakedevs.org"
						>
							Get in touch <Mail size={20} />
						</Link>
					</div>
				</div>
			</ViewContainer>
		</section>
	);
};

export default Partners;
