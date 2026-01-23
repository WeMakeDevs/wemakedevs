import {
	abhinavAvatar,
	adityaAvatar,
	anujAvatar,
	areAvatar,
	jayAvatar,
	parvezAvatar,
	prathameshAvatar,
	saiAvatar,
	sameekshaAvatar,
	sarahAvatar,
	shivayAvatar,
} from "@/assets/images/testimonials";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import type { TestimonialInterface } from "@/types";
import TestimonialCard from "./TestimonialCard";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { ViewContainer } from "./ui/view-container";

const testimonials: TestimonialInterface[] = [
	{
		profileImage: sarahAvatar,
		name: "Sarah Chieng",
		platform: "twitter",
		testimonialText:
			"Thanks to WeMakeDevs for the 7-day hackathon! Great collaboration with Cerebras, Meta, and Docker. Good space for builders to work together and learn.",
	},
	{
		profileImage: shivayAvatar,
		name: "Shivay Lamba",
		platform: "twitter",
		testimonialText:
			"WeMakeDevs launched scholarships covering flights, hotels, and travel for Kubecon Amsterdam. Nice initiative to help developers attend events and connect with others.",
	},
	{
		profileImage: saiAvatar,
		name: "Sai Vardhan Penmetsa",
		platform: "linkedin",
		testimonialText:
			"✨ Five days of pure hustle, late-night debugging, and incredible learning! Building project during AgentHack 2025 with Portia AI and guidance from the WeMakeDevs community was intense yet rewarding 🚀",
	},
	{
		profileImage: sameekshaAvatar,
		name: "Sameeksha",
		platform: "twitter",
		testimonialText:
			"Looking forward to the FutureStack GenAI hackathon. WeMakeDevs organized this with Cerebras, Meta, and Docker. Good prizes and learning opportunities for developers.",
	},
	{
		profileImage: parvezAvatar,
		name: "Parvez Shaikh",
		platform: "twitter",
		testimonialText:
			"Good opportunity of Kubecon Amsterdam scholarship through WeMakeDevs for students and builders. Looking forward to KubeCon Amsterdam 2026 and the chance to learn and connect.",
	},
	{
		profileImage: adityaAvatar,
		name: "Aditya Oberai",
		platform: "twitter",
		testimonialText:
			"WeMakeDevs organized a GenAI hackathon with Cerebras, Meta, and Docker. Good platform for developers to build and collaborate on projects.",
	},
	{
		profileImage: jayAvatar,
		name: "Jay Bamroliya",
		platform: "twitter",
		testimonialText:
			"AI hackathon by WeMakeDevs with Docker, Meta, and Cerebras. Good opportunity for builders to explore and work together virtually.",
	},
	{
		profileImage: anujAvatar,
		name: "Anuj Upadhyay",
		platform: "twitter",
		testimonialText:
			"Won AgentHack2025 with Team Dark Mode. Thanks to WeMakeDevs, Portia AI, and Kunal for organizing the hackathon.",
	},
	{
		profileImage: prathameshAvatar,
		name: "Prathamesh Kirad",
		platform: "linkedin",
		testimonialText:
			"A huge and heartfelt thank you to this incredible team. Your dedication, creativity, and support made every moment of this hackathon unforgettable. 🙌",
	},
	{
		profileImage: abhinavAvatar,
		name: "Abhinav Dubey",
		platform: "twitter",
		testimonialText:
			"If you're into AI and building, check out this WeMakeDevs hackathon. Good chance to work on AI integration with containers and learn from others.",
	},
	{
		profileImage: areAvatar,
		name: "Are Kavyasri",
		platform: "linkedin",
		testimonialText:
			"I had the amazing opportunity to be part of this incredible hackathon hosted by WeMakeDevs and sponsored by Kestra. It was a thrilling experience collaborating, innovating, and learning alongside talented individuals.",
	},
];

const Testimonials = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			className={cn(className, "mt-20 pb-16 scroll-m-[100px]")}
			{...props}
			id="testimonials"
		>
		<ViewContainer className="">
			<Carousel
					className="mt-10 overflow-clip md:overflow-visible"
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
										"h-[390px]",
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

export default Testimonials;
