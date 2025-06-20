import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { HackathonContentTitle } from "@/components/hackathon-content";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import hackathonData from "../data";
import { images } from "../images";

const HackathonSubmit = async () => {
	return (
		<div className="mb-10 pt-20">
			<HackathonCoverImage src={images.cover} alt={hackathonData.title} />
			<HackathonNav
				slug={hackathonData.slug}
				page="submit"
				links={hackathonData.navLinks}
				navCta={hackathonData.hackathonCtas.nav}
			/>
			<ViewContainer>
				<HackathonContentTitle>
					✅ How to submit your project:
				</HackathonContentTitle>
				<div>
					<p className="font-medium my-6">
						Once your flow is ready, share it on social media with
						your GitHub repository link. Don't forget to tag
						WeMakeDevs and Kestra using #KestraHackWeek.
					</p>
					<Link
						href="https://forms.gle/Rouo5hxDm6ZQfcUPA"
						target="_blank"
						rel="noopener noreferrer"
						className={cn(buttonVariants(), "mt-4 w-fit block")}
					>
						Submit Project
					</Link>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonSubmit;
