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
				"flex items-center gap-3 group no-underline hover:underline font-medium px-4 py-2 rounded-lg border-2 border-green-500/20 hover:bg-green-500/10 transition-all text-slate-100 bg-[#0a0f11]/80",
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
