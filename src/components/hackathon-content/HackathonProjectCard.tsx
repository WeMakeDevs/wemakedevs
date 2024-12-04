import { cn } from "@/lib/utils";
import type { HackathonProjectCardInterface } from "@/types";
import Link from "next/link";

const HackathonProjectCard = ({
	className,
	projectTitle,
	description,
	githubLink,
	teamName,
	isSolo,
}: HackathonProjectCardInterface) => {
	console.log(description);
	return (
		<Link
			href={githubLink}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				"p-4 rounded border-2 border-accent-4 hover:bg-accent-4/10 transition-all hover:-translate-y-2 h-full flex flex-col",
				className,
			)}
		>
			<h3 className="text-lg mb-2">
				{projectTitle} - {isSolo ? teamName : `Team ${teamName}`}
			</h3>
			<div className="mt-auto space-y-4">
				<p className="line-clamp-2">{description}</p>
			</div>
		</Link>
	);
};

export default HackathonProjectCard;
