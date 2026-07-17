import { images as futurestackImages } from "@/app/hackathons/futurestack25/images";
import { images as tamboImages } from "@/app/hackathons/tambo/images";
import { michaelMagan } from "@/app/hackathons/tambo/images/testimonials";
import { images as twoFastTwoMcpImages } from "@/app/hackathons/2fast2mcp/images";
import { matveyKukuy } from "@/app/hackathons/2fast2mcp/images/testimonials";
import { images as accomplishImages } from "@/app/hackathons/accomplish/images";
import { orHiltch } from "@/app/hackathons/accomplish/images/testimonials";
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
import {
	assetmerkleLogo,
	awsugblrLogo,
	founderLogo,
	kubesimplifyLogo,
	theApiCommunityLogo,
} from "@/assets/images/communityPartners";
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
		image: michaelMagan,
		logo: tamboImages.tamboLogo,
		author: "Michael Magan",
		name: "Tambo",
		quote: "Working with WeMakeDevs was a game-changer for Tambo. What we imagined, Kunal and his team delivered, and then some. The results from our hackathon were staggering: we gained over 7,000 GitHub stars in just one week and saw thousands of developers actively building and engaging in our Discord. The quality of the projects produced was incredible. If you are looking to tap into a global developer ecosystem, gather real-world feedback, and discover innovative use cases for your product, I highly recommend partnering with WeMakeDevs. They don't just run events; they build movements.",
		logoClassName: "w-28",
	},
	{
		image: matveyKukuy,
		logo: twoFastTwoMcpImages.archestraLogo,
		author: "Matvey Kukuy",
		name: "Archestra",
		quote: "Kunal and his team didn't just host a hackathon; they built a bridge between our tech and thousands of high-level developers. The results spoke for themselves: 3,000+ GitHub stars and a community of builders actually orchestrating MCP agents in real-time. The sophisticated projects we saw come out of this event proved that WeMakeDevs attracts a higher tier of talent. If you're looking to get your AI tools into the hands of global builders and see what they can really do, look no further.",
		logoClassName: "w-28",
	},
	{
		image: orHiltch,
		logo: accomplishImages.accomplishLogo,
		author: "Or Hiltch",
		name: "Accomplish.ai",
		quote: "We expected a hackathon; we got a high-octane engineering sprint. Kunal and the WeMakeDevs team didn't just bring us visibility, they brought us contributors. For Accomplish.ai, the impact was immediate: 5,000+ GitHub stars in a week and thousands of developers diving into our actual issues. The volume of PRs was staggering; we saw bugs squashed and new features shipped faster than we ever imagined. Beyond the code, the cultural ripple effect has been huge, people are sharing their Accomplish setups across social media, and we've gained long-term contributors who are still active in our Discord today. If you want to move the needle on your product development while building a global brand, WeMakeDevs is the ultimate partner.",
		logoClassName: "w-28",
	},
	{
		image: futurestackImages.yashKhare,
		logo: futurestackImages.metaLogo,
		author: "Yash Khare",
		name: "Meta",
		quote: "The WeMakeDevs hackathon provided a fantastic platform for developers to showcase their skills. It was an amazing experience to be invited for a QA session covering hackathon strategies and AI career advice. Great opportunity to share knowledge.",
		logoClassName: "w-28",
	},
	{
		image: futurestackImages.sarahChieng,
		logo: futurestackImages.cerebrasLogo,
		author: "Sarah Chieng",
		name: "Cerebras Systems",
		quote: "Working with WeMakeDevs was such a great experience! The energy was unreal, over 5,500 participants and 7,000+ API signups in one hackathon. We loved seeing creative projects and how quickly developers picked up Cerebras tech to build real AI use cases. Huge shoutout to the WeMakeDevs team.",
		logoClassName: "w-24",
	},
	{
		image: kestraAuthor,
		logo: kestraLogo,
		author: "Emmanuel Darras",
		name: "Kestra",
		quote: "Kestra officially hit 25,000 GitHub stars today… and we are celebrating in a big way! 🎉 The energy this week has been unbelievable. A massive new wave of developers discovered Kestra and jumped in to build agentic and event driven orchestration. The momentum is skyrocketing. 🚀",
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
												className={cn(
													"mb-6",
													partner.logoClassName,
												)}
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
					<div className="flex flex-wrap justify-center gap-6 md:gap-x-20 md:gap-y-10 items-center justify-items-center">
						<Link
							href="https://kubesimplify.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center p-4"
						>
							<Image
								src={kubesimplifyLogo}
								alt="Kubesimplify"
								className="object-contain w-[140px] md:w-[156px] lg:w-52"
							/>
						</Link>
						<Link
							href="https://www.founderstartuphouse.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center p-4"
						>
							<Image
								src={founderLogo}
								alt="Founder Startup House"
								className="object-contain w-[110px] md:w-[132px] lg:w-[156px]"
							/>
						</Link>
						<Link
							href="https://www.theapicommunity.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center p-4"
						>
							<Image
								src={theApiCommunityLogo}
								alt="The API Community"
								className="object-contain w-[90px] md:w-[110px] lg:w-[130px]"
							/>
						</Link>
						<Link
							href="https://assetmerkleigdtuw.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center p-4"
						>
							<Image
								src={assetmerkleLogo}
								alt="AssetMerkle IGDTUW"
								className="object-contain w-[110px] md:w-[132px] lg:w-[156px]"
							/>
						</Link>
						<Link
							href="https://www.meetup.com/awsugblr/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center p-4"
						>
							<Image
								src={awsugblrLogo}
								alt="AWS User Group Bengaluru"
								className="object-contain w-[110px] md:w-[132px] lg:w-[156px]"
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
