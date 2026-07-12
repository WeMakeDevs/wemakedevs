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
			"We are looking for a Discord Moderator who can help us manage and grow the WeMakeDevs Discord community. As a Discord Moderator at WeMakeDevs, you will be responsible for keeping the community active, helpful, safe, and well-organized. You will work closely with the WeMakeDevs team to manage conversations, support community members, share important updates, and make sure participants have a smooth experience during hackathons and events.",
		location: "Remote",
		salary: "₹10,000 per month",
		workingHours: "Flexible",
		type: "Part-time",
		postedDate: "2026-07-12",
		responsibilities: [
			"Moderating the WeMakeDevs Discord server",
			"Welcoming new members and helping them get started",
			"Answering questions from community members",
			"Sharing event, hackathon, and workshop updates",
			"Making sure conversations stay respectful and relevant",
			"Removing spam, irrelevant messages, and harmful content",
			"Guiding members to the right channels and resources",
			"Helping participants during hackathons and community events",
			"Escalating important issues to the WeMakeDevs team",
			"Keeping the Discord server organized and active",
			"Encouraging healthy discussions and community engagement",
		],
		prerequisites: [
			"Is active on Discord and understands how Discord communities work",
			"Has good communication skills",
			"Can respond politely and professionally",
			"Is comfortable interacting with developers and students",
			"Can stay organized and manage multiple conversations",
			"Can identify spam, off-topic content, and community issues quickly",
			"Is reliable and available during important event timelines",
			"Can follow community guidelines and enforce them fairly",
		],
		goodToHave: [
			"Previous experience moderating Discord, Telegram, Slack, or online communities",
			"Experience with hackathons, developer communities, or student communities",
			"Basic understanding of developer tools, open source, and tech events",
			"Familiarity with Discord bots, roles, channels, and permissions",
			"Ability to write short announcements and community updates",
		],
		applyEmail: "aayush@wemakedevs.org",
		applySubject: "Applying for Discord Moderator - <Full Name>",
		applyDetails: [
			"Your name",
			"Your Discord username",
			"Your previous community or moderation experience, if any",
			"Why you want to join WeMakeDevs as a Discord Moderator",
			"Links to any communities you have managed or helped with",
		],
		applyLink:
			"mailto:aayush@wemakedevs.org?subject=Applying%20for%20Discord%20Moderator%20-%20%3CFull%20Name%3E",
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
