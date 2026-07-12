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
import { Banknote, Briefcase, Clock, MapPin } from "lucide-react";
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
				{job.salary && (
					<div className="flex items-center gap-2">
						<Banknote size={18} />
						<p>{job.salary}</p>
					</div>
				)}
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
				<DialogContent className="sm:max-w-[800px] rounded-lg overflow-y-scroll max-h-[90vh]">
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
							{job.salary && (
								<div className="flex items-center gap-2">
									<Banknote
										className="text-primary"
										size={20}
									/>
									<p>{job.salary}</p>
								</div>
							)}
							{job.workingHours && (
								<div className="flex items-center gap-2">
									<Clock className="text-primary" size={20} />
									<p>Working hours: {job.workingHours}</p>
								</div>
							)}
							<div className="flex items-center gap-2">
								<Briefcase className="text-primary" size={20} />
								<p>{job.type}</p>
							</div>
						</div>

						{/* Responsibilities */}
						{job?.responsibilities &&
							job.responsibilities.length > 0 && (
								<div>
									<h4 className="text-lg font-semibold mb-2">
										Responsibilities
									</h4>
									<ul className="list-disc list-inside space-y-1">
										{job.responsibilities.map(
											responsibility => (
												<li key={responsibility}>
													{responsibility}
												</li>
											),
										)}
									</ul>
								</div>
							)}

						{/* Prerequisites */}
						<div>
							<h4 className="text-lg font-semibold mb-2">
								Requirements
							</h4>
							<ul className="list-disc list-inside space-y-1">
								{job?.prerequisites?.map((prereq, index) => (
									<li key={prereq}>{prereq}</li>
								))}
							</ul>
						</div>

						{/* Good to Have */}
						{job?.goodToHave && job.goodToHave.length > 0 && (
							<div>
								<h4 className="text-lg font-semibold mb-2">
									Good to Have
								</h4>
								<ul className="list-disc list-inside space-y-1">
									{job.goodToHave.map(item => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						)}

						{/* Benefits */}
						{job?.benefits && job.benefits.length > 0 && (
							<div>
								<h4 className="text-lg font-semibold mb-2">
									Benefits
								</h4>
								<ul className="list-disc list-inside space-y-1">
									{job.benefits.map(benefit => (
										<li key={benefit}>{benefit}</li>
									))}
								</ul>
							</div>
						)}

						{/* Dates */}
						{/* <div className="space-y-1">
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
						</div> */}

						{/* Application Instructions */}
						<div>
							<h4 className="text-lg font-semibold mb-2">
								How to Apply
							</h4>
							{job.applyDetails && job.applyDetails.length > 0 ? (
								<>
									<p>
										Email us your profile with the below
										details on{" "}
										<span className="font-semibold">
											{job.applyEmail ??
												"aayush@wemakedevs.org"}
										</span>
										:
									</p>
									<ul className="list-disc list-inside space-y-1 mt-2">
										{job.applyDetails.map(detail => (
											<li key={detail}>{detail}</li>
										))}
									</ul>
									{job.applySubject && (
										<p className="mt-2">
											<span className="font-semibold">
												Subject of the email should be:
											</span>{" "}
											{job.applySubject}
										</p>
									)}
								</>
							) : (
								<p>
									To apply, please email{" "}
									{job.applyEmail ?? "aayush@wemakedevs.org"}{" "}
									along with your proof of work and CV.
								</p>
							)}
						</div>
					</div>

					<DialogFooter>
						<Button asChild className="w-full sm:w-auto px-6 py-2">
							<Link href={job.applyLink}>Apply Now</Link>
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default JobCard;
