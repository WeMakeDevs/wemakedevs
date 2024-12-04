import { cn } from "@/lib/utils";
import type { OtherProjectInterface } from "@/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const HackathonOtherProjectCard = ({
	projectTitle,
	githubLink,
	teamName,
	isSolo,
}: OtherProjectInterface) => {
	return (
		<Link
			href={githubLink}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				"flex items-center gap-3 group no-underline hover:underline font-medium px-4 py-2 rounded-lg border-2 border-accent-4 hover:bg-accent-4/10 transition-all",
			)}
		>
			<span className="grow">
				{projectTitle} - {isSolo ? teamName : `Team ${teamName}`}
			</span>
			<ArrowUpRight
				className="group-hover:translate-x-1 transition-all shrink-0"
				size={18}
			/>
		</Link>
	);
};

export default HackathonOtherProjectCard;
