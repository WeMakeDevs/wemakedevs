import { quotation } from "@/assets/images";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ContributorInterface } from "../contributors";

interface ContributorCardProps {
	contributor: ContributorInterface;
	className?: string;
}

const ContributorCard = ({ contributor, className }: ContributorCardProps) => {
	return (
		<div
			className={cn(
				"flex flex-col gap-6 p-6 md:p-8 rounded-xl h-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow",
				className,
			)}
		>
			<Image
				src={quotation}
				alt="Quotation symbol"
				className="w-10 mix-blend-multiply opacity-50"
			/>
			<p className="text-base md:text-lg font-medium grow text-gray-700 leading-relaxed">
				{contributor.quote}
			</p>
			<div className="flex justify-between items-center pt-4 border-t border-gray-200">
				<span className="font-title font-semibold text-base md:text-lg text-gray-900">
					{contributor.fullName}
				</span>
				<Link
					href={contributor.blogLink}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors"
					aria-label={`Read ${contributor.fullName}'s blog`}
				>
					<span className="hidden sm:inline">Read Story</span>
					<ExternalLink className="w-4 h-4" />
				</Link>
			</div>
		</div>
	);
};

export default ContributorCard;
