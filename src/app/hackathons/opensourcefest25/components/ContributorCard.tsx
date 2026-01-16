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
	// Generate initials for avatar
	const initials = `${contributor.firstName[0]}${contributor.lastName[0]}`.toUpperCase();

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
				<div className="flex gap-4 items-center">
					{/* Avatar with initials */}
					<div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-semibold text-lg">
						{initials}
					</div>
					<div className="flex flex-col">
						<span className="font-title font-semibold text-base md:text-lg text-gray-900">
							{contributor.fullName}
						</span>
						<span className="text-sm text-gray-500">Contributor</span>
					</div>
				</div>
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
