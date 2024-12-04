import { cn } from "@/lib/utils";
import type { HackathonWinningProjectCardInterface } from "@/types";
import Link from "next/link";

const HackathonWinningProjectCard = ({
	className,
	projectTitle,
	description,
	githubLink,
	category,
	teamName,
	isSolo,
}: HackathonWinningProjectCardInterface) => {
	return (
		<Link
			href={githubLink}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				"block p-4 rounded border-2 border-accent-4 hover:bg-accent-4/10 transition-all hover:-translate-y-2 h-full flex flex-col",
				className,
			)}
		>
			<h3 className="text-lg mb-2">
				{projectTitle} - {isSolo ? teamName : `Team ${teamName}`}
			</h3>
			<div className="mt-auto space-y-4">
				<p className="line-clamp-2">{description}</p>
				{category && (
					<span
						className={cn(
							"font-semibold rounded-full px-3 py-1 uppercase inline-block",
							!category.bgColor && "bg-accent-4",
							!category.textColor && "text-white",
						)}
						style={{
							backgroundColor: category.bgColor || undefined,
							color: category.textColor || undefined,
						}}
					>
						{category.title}
					</span>
				)}
			</div>
		</Link>
	);
};

export default HackathonWinningProjectCard;
