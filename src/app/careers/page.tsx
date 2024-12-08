import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import Navbar from "@/components/Navbar";
import { ViewContainer } from "@/components/ui/view-container";
import type { JobCardType } from "@/types";

const jobs: JobCardType[] = [
	{
		title: "Social Media Manager",
		description:
			"Manage and grow our online presence by crafting engaging content and building relationships with our audience.",
		location: "Remote",
		salary: "₹40,000 - ₹60,000 per month",
		prerequisites: [
			"Proven experience in social media management",
			"Strong understanding of analytics tools",
			"Excellent communication and copywriting skills",
			"Creativity in content creation",
		],
		type: "Full-time",
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
		location: "Mumbai, India",
		salary: "₹30,000 - ₹50,000 per month",
		prerequisites: [
			"Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
			"Strong portfolio showcasing design skills",
			"Ability to meet deadlines in a fast-paced environment",
			"Good communication and teamwork skills",
		],
		type: "Contract",
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
			<ViewContainer className="py-20 lg:pt-28 z-[1000]">
				<h1 className="font-title text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mt-8">
					Careers at <span className="text-primary">WeMakeDevs</span>
				</h1>
				<p className="mt-7 text-sm sm:text-base max-w-3xl font-medium sm:leading-snug">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Eaque odio cupiditate eveniet deleniti. Sit debitis quae
					provident deserunt nisi optio ab, eius hic pariatur commodi
					laboriosam aut cupiditate illum sed doloremque, consequuntur
					exercitationem voluptatibus ipsum illo nihil. Quisquam,
					nulla assumenda.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
					{jobs.map(job => (
						<JobCard job={job} key={job.title} />
					))}
				</div>
			</ViewContainer>
			<Footer />
		</div>
	);
};

export default Careers;
