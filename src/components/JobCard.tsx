import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import type { JobCardType } from "@/types";
import { Banknote, Briefcase, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const JobCard = ({ job }: { job: JobCardType }) => {
	return (
		<div className="border-gray-400 border-2 border-dashed p-4">
			<h3 className="text-lg md:text-xl font-medium">{job.title}</h3>
			<p className="mt-2 max-w-xl font-medium text-gray-700">
				{job.description}
			</p>
			<div className="flex flex-col gap-2 mt-4 font-medium text-gray-700">
				<div className="flex items-center gap-2">
					<MapPin size={18} />
					<p>{job.location}</p>
				</div>
				<div className="flex items-center gap-2">
					<Banknote size={18} />
					<p>{job.salary}</p>
				</div>
				<div className="flex items-center gap-2">
					<Briefcase size={18} />
					<p>{job.type}</p>
				</div>
			</div>
			<Dialog>
				<DialogTrigger asChild>
					<Button
						variant="outline"
						className="mt-6 px-6 py-2 hover:bg-primary hover:text-background"
					>
						Know more
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[800px] rounded-lg">
					<DialogHeader>
						<DialogTitle className="text-2xl font-bold">
							{job.title}
						</DialogTitle>
						<DialogDescription className="text-lg font-medium text-gray-700 leading-snug">
							{job.description}
						</DialogDescription>
					</DialogHeader>

					<div className="space-y-6 py-4">
						{/* Job Details */}
						<div className="flex flex-col gap-3 font-medium">
							<div className="flex items-center gap-2">
								<MapPin className="text-primary" size={20} />
								<p>{job.location}</p>
							</div>
							<div className="flex items-center gap-2">
								<Banknote className="text-primary" size={20} />
								<p>{job.salary}</p>
							</div>
							<div className="flex items-center gap-2">
								<Briefcase className="text-primary" size={20} />
								<p>{job.type}</p>
							</div>
						</div>

						{/* Prerequisites */}
						<div>
							<h4 className="text-lg font-semibold mb-2">
								Prerequisites
							</h4>
							<ul className="list-disc list-inside space-y-1">
								{job?.prerequisites?.map((prereq, index) => (
									<li key={prereq}>{prereq}</li>
								))}
							</ul>
						</div>

						{/* Benefits */}
						<div>
							<h4 className="text-lg font-semibold mb-2">
								Benefits
							</h4>
							<ul className="list-disc list-inside space-y-1">
								{job?.benefits?.map((benefit, index) => (
									<li key={benefit}>{benefit}</li>
								))}
							</ul>
						</div>

						{/* Dates */}
						<div className="space-y-1">
							<p>
								<span className="font-semibold">
									Posted Date:
								</span>{" "}
								{new Date(
									job.postedDate ?? new Date(),
								).toLocaleDateString()}
							</p>
							<p>
								<span className="font-semibold">
									Application Deadline:
								</span>{" "}
								{new Date(
									job.applicationDeadline ?? new Date(),
								).toLocaleDateString()}
							</p>
						</div>

						{/* Application Instructions */}
						<p>
							To apply, please email contact@wemakedevs.org along
							with your proof of work and CV
						</p>
					</div>

					<DialogFooter>
						<Button asChild className="w-full sm:w-auto px-6 py-2">
							<Link href="mailto:contact@wemakedevs.org">
								Apply Now
							</Link>
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default JobCard;
