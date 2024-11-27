import { aboutImage } from "@/assets/images";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import Image from "next/image";
import { ViewContainer } from "./ui/view-container";

const About = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			{...props}
			className={cn(className, "my-14 scroll-m-[100px]")}
			id="about"
		>
			<ViewContainer className="relative overflow-clip flex flex-col lg:flex-row gap-10 lg:gap-20 p-8 md:p-12 rounded-xl bg-white shadow-xl border border-foreground/10 items-center">
				<Image
					src={aboutImage}
					alt="About Us Image"
					className="flex-1 max-w-md w-full"
				/>
				<div className="space-y-6 flex-1 max-w-md lg:max-w-none">
					<h2 className="text-4xl md:text-5xl">About Us</h2>
					<p className="text-lg leading-snug font-medium text-foreground/90">
						WeMakeDevs is an inclusive global community for anyone
						passionate about technology. We foster collaboration and
						innovation through global hackathons and events,
						partnering with leading and emerging companies, as well
						as open source projects.
					</p>
					<p className="text-lg leading-snug font-medium text-foreground/90">
						If you are someone who is looking to discuss the latest
						advancements, discover valuable resources and
						opportunities, engage with tech events, share your
						ideas, or seek guidance, you&apos;re in the right place.
						Welcome to a vibrant, dynamic community pushing the
						boundaries of what we can achieve together.
					</p>
				</div>
			</ViewContainer>
		</section>
	);
};

export default About;
