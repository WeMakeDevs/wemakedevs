import {
	are,
	bhavishya,
	mokshith,
	nikhil,
	praharsh,
	prathamesh,
	tejas,
	vivek,
} from "@/assets/images/hackfrostTestimonials";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import type { TestimonialInterface } from "@/types";
import TestimonialCard from "../TestimonialCard";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";
import { ViewContainer } from "../ui/view-container";

const testimonials: TestimonialInterface[] = [
	{
		profileImage: bhavishya,
		name: "Bhavishya Aggarwal",
		platform: "twitter",
		testimonialText:
			"Thanks for organizing this hackathon @WeMakeDevs Team. I learned a lot through this Hackathon. And thanks @kestra_io for providing community support. I learned a lot on integrations on the backend side of the application.",
	},
	{
		profileImage: nikhil,
		name: "Nikhil Sinha",
		platform: "twitter",
		testimonialText:
			"My project on unique music app MuseSnap was not part of the winning projects, but I got to learn a lot through this Hackathon, especially the limited time interval pressure, which kept me motivated to work on all the features.",
	},
	{
		profileImage: tejas,
		name: "Tejas",
		platform: "twitter",
		testimonialText:
			"Wrapped up #HackFrost2024!! 🎊 It was a very great experience building with @kestra_io and a very good organization by @WeMakeDevs Excited for the results!!!",
	},
	{
		profileImage: are,
		name: "Are Kavyasri",
		platform: "linkedin",
		testimonialText:
			"I had the amazing opportunity to be part of this incredible hackathon hosted by WeMakeDevs and sponsored by Kestra. It was a thrilling experience collaborating, innovating, and learning alongside talented individuals. ",
	},
	{
		profileImage: praharsh,
		name: "Praharsh Raj Singh",
		platform: "linkedin",
		testimonialText:
			"Huge thanks to WeMakeDevs, Kunal Kushwaha, and Kestra for organizing such a brilliant hackathon and fostering a platform for creativity and innovation. I’m excited to continue building and exploring new possibilities in the tech space! 🚀",
	},
	{
		profileImage: mokshith,
		name: "Mokshith C V",
		platform: "linkedin",
		testimonialText:
			"Honored to have participated in the @Hackfrost Kestra Winter Hackathon 2024! It was amazing to connect with like-minded individuals, share knowledge, and work on exciting challenges. Kudos to WeMakeDevs and Kestra for hosting such an enriching event!",
	},
	{
		profileImage: vivek,
		name: "Vivek Ranjan Sahoo",
		platform: "linkedin",
		testimonialText:
			"A shoutout to the amazing team! A big shoutout to Kunal Kushwaha, Will Russell from Kestra, and the entire WeMakeDevs team for organizing such an awesome event. And a special thanks to Aayush Sharma for being our ever-patient and super helpful guide!",
	},
	{
		profileImage: prathamesh,
		name: "Prathamesh Kirad",
		platform: "linkedin",
		testimonialText:
			"A huge and heartfelt thank you to this incredible team. Your dedication, creativity, and support made every moment of this hackathon unforgettable. 🙌 I learned so much from the late-night debugging, brainstorming sessions, and unwavering teamwork.",
	},
];

const HackathonTestimonials = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			className={cn(className, "mt-6 pb-10 scroll-m-[100px]")}
			{...props}
			id="testimonials"
		>
			<ViewContainer className="">
				<Carousel
					className="overflow-clip md:overflow-visible"
					opts={{
						align: "center",
						loop: true,
					}}
				>
					<CarouselContent className="h-[480px]">
						{testimonials.map((item, index) => (
							<CarouselItem
								key={item.name}
								className="md:basis-1/2 lg:basis-1/3"
							>
								<TestimonialCard
									{...item}
									className={cn(
										index % 4 === 0 && "bg-accent-1",
										index % 4 === 1 && "bg-accent-2",
										index % 4 === 2 && "bg-accent-3",
										index % 4 === 3 && "bg-accent-4",
									)}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</ViewContainer>
		</section>
	);
};

export default HackathonTestimonials;
