import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import Navbar from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import type { JobCardType } from "@/types";
import Link from "next/link";

const jobs: JobCardType[] = [
	{
		title: "Graphic Designer",
		description:
			"Create visually compelling designs that align with our brand identity and resonate with our audience.",
		location: "Remote",
		salary: "₹10,000 - ₹15,000 per month (based on performance)",
		prerequisites: [
			"Proficiency in design tools like Photoshop, Canva, Figma and other tools",
			"Ability to meet deadlines in a fast-paced environment",
			"Good communication and teamwork skills",
		],
		type: "Internship",
		postedDate: "2024-12-08",
		applicationDeadline: "2024-12-20",
		benefits: [
			"Opportunity to work with a creative team",
			"Access to design resources",
		],
		applyLink:
			"https://docs.google.com/document/d/18rzz9LVnteJcU2PXLLruhKdKwt3ISR3PPh-728mzWZw/edit?usp=sharing",
	},
	{
		title: "Discord Moderator",
		description:
			"Help us manage and grow the WeMakeDevs Discord community by keeping it active, helpful, safe, and well-organized. You'll moderate conversations, support members, share updates, and ensure participants have a smooth experience during hackathons and events.",
		location: "Remote",
		salary: "₹10,000 per month",
		prerequisites: [
			"Active on Discord and understands how Discord communities work",
			"Good communication skills, responds politely and professionally",
			"Comfortable interacting with developers and students",
			"Can stay organized and manage multiple conversations",
			"Can identify spam, off-topic content, and community issues quickly",
			"Reliable and available during important event timelines",
			"Can follow and enforce community guidelines fairly",
		],
		type: "Part-time",
		postedDate: "2026-07-12",
		benefits: [
			"Flexible working hours",
			"Work closely with the WeMakeDevs team",
			"Be part of a global developer community",
		],
		applyLink:
			"mailto:sachin@wemakedevs.org,aayush@wemakedevs.org?subject=Applying%20for%20Discord%20Moderator%20-%20%3CFull%20Name%3E&body=Your%20name%3A%0AYour%20Discord%20username%3A%0AYour%20previous%20community%20or%20moderation%20experience%20(if%20any)%3A%0AWhy%20you%20want%20to%20join%20WeMakeDevs%20as%20a%20Discord%20Moderator%3A%0ALinks%20to%20any%20communities%20you%20have%20managed%20or%20helped%20with%3A",
	},
];
const Careers = () => {
	return (
		<div>
			<Navbar className="z-10" />
			<div className="pt-20 lg:pt-28 z-[1000] flex flex-col min-h-screen">
				<ViewContainer className="grow mb-20">
					<h1 className="font-title text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mt-8">
						Opportunities at{" "}
						<span className="text-primary">WeMakeDevs</span>
					</h1>
					<p className="mt-7 text-sm sm:text-base max-w-3xl font-medium sm:leading-snug">
						If you're looking for a paid opportunity with mentorship
						from industry leaders, apply now by emailing us at{" "}
						<Link
							href="mailto:contact@wemakedevs.org"
							className={cn(
								buttonVariants({ variant: "link" }),
								"p-0",
							)}
						>
							contact@wemakedevs.org
						</Link>{" "}
						with your updated resume.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
						{jobs.map(job => (
							<JobCard job={job} key={job.title} />
						))}
					</div>
				</ViewContainer>
				<Footer />
			</div>
		</div>
	);
};

export default Careers;
