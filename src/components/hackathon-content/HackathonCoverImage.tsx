import { cn } from "@/lib/utils";
import type { HackathonCoverImageInterface } from "@/types";
import Image from "next/image";
import { ViewContainer } from "../ui/view-container";

const HackathonCoverImage = ({
	src,
	alt,
	className,
	...props
}: HackathonCoverImageInterface) => {
	return (
		<ViewContainer>
			<Image
				src={src}
				alt={alt}
				className={cn(className, "mt-4")}
				{...props}
			/>
		</ViewContainer>
	);
};

export default HackathonCoverImage;
