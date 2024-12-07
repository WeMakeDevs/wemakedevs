import type { JobCardType } from "@/types";
import { Banknote, Briefcase, MapPin } from "lucide-react";
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
			<Button
				variant="outline"
				className="mt-6 px-6 py-2 hover:bg-primary hover:text-background"
			>
				Know more
			</Button>
		</div>
	);
};

export default JobCard;
