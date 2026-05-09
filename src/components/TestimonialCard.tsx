import { quotation } from "@/assets/images";
import { cn } from "@/lib/utils";
import type { TestimonialCardType } from "@/types";
import { SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import Image from "next/image";

const TestimonialCard = ({
	profileImage,
	testimonialText,
	platform,
	name,
	className,
	...props
}: TestimonialCardType) => {
	return (
		<div
			className={cn(
				"flex flex-col gap-6 md:gap-8 p-4 md:p-6 rounded rounded-tr-[50px] sm:max-w-[400px] md:max-w-[500px] mx-auto h-full overflow-hidden",
				className,
			)}
			{...props}
		>
			<Image
				src={quotation}
				alt="Quotation symbol"
				className="w-10 mix-blend-multiply opacity-50 shrink-0"
			/>
			<p className="text-base md:text-lg font-medium grow overflow-y-auto break-words pr-1 leading-relaxed">
				{testimonialText}
			</p>
			<div className="flex justify-between items-center shrink-0">
				<div className="flex gap-4 items-center min-w-0">
					<Image
						src={profileImage}
						alt={name}
						className="w-6 md:w-8 rounded-full shrink-0"
					/>
					<span className="font-title font-medium text-base md:text-lg text-foreground/70 truncate">
						{name}
					</span>
				</div>
				{platform === "twitter" ? (
					<SiX className="text-foreground/50 shrink-0" />
				) : (
					<SiLinkedin className="text-foreground/50 shrink-0" />
				)}
			</div>
		</div>
	);
};

export default TestimonialCard;
