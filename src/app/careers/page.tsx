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
		title: "Social Media Manager",
		description:
			"Manage and grow our online presence by crafting engaging content and building relationships with our audience.",
		location: "Remote",
		salary: "₹10,000 - ₹15,000 per month (based on performance)",
		prerequisites: [
			"Proven experience in social media management",
			"Excellent communication and copywriting skills",
			"Creativity in content creation",
		],
		type: "Freelance",
		postedDate: "2024-12-08",
		applicationDeadline: "2024-12-31",
		benefits: [
			"Flexible working hours",
			"Professional development opportunities",
			"Remote work allowance",
		],
		applyLink: "https://example.com/apply/social-media-manager",
	},
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
		type: "Freelance",
		postedDate: "2024-12-08",
		applicationDeadline: "2024-12-20",
		benefits: [
			"Opportunity to work with a creative team",
			"Access to design resources",
		],
		applyLink: "https://example.com/apply/graphic-designer",
	},
];
// TODO: Use trigger component "
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
						If you're looking for a paid opportunity with mentorship from industry leaders, apply
						now by emailing us at{" "}
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
