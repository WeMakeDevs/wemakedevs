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
			/>
			<ViewContainer>
				<HackathonContentTitle>
					Registration and Submission
				</HackathonContentTitle>
				<div className="mb-4">
					<h3 className="text-lg md:text-xl font-bold mb-2">
						Registration
					</h3>
					<p className="text-foreground/80">
						Please ensure you register before the deadline to
						participate.
					</p>
					<Link
						href={hackathonData.registrationLink}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(buttonVariants(), "mt-4 w-fit block")}
					>
						Register Now
					</Link>
				</div>
				<div>
					<h3 className="text-lg md:text-xl font-bold mb-2 mt-12">
						Submission
					</h3>
					<p className="text-foreground/80 mb-2">
						Please read the{" "}
						<a
							href={`/hackathons/${hackathonData.slug}/rules`}
							className="bg-yellow-100/20 inline px-1 py-0.5 hover:bg-yellow-100/0"
						>
							submission rules
						</a>{" "}
						and{" "}
						<a
							href={`/hackathons/${hackathonData.slug}/#requirements`}
							className="bg-yellow-100/20 inline px-1 py-0.5 hover:bg-yellow-100/0"
						>
							submission requirements
						</a>{" "}
						before submitting.
					</p>
					{hackathonData.submissionLink ? (
						<Link
							href={hackathonData.submissionLink}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(buttonVariants(), "mt-4 w-fit block")}
						>
							Submit Now
						</Link>
					) : (
						<p className="text-foreground/80">
							Submissions will open soon. Stay tuned for updates!
						</p>
					)}
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonSubmit;
