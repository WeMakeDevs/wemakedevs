import { scholarshipsBg, scholarshipsLogo } from "@/assets/images";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ViewContainer } from "../ui/view-container";

const Header = ({ className, ...props }: GeneralComponent) => {
	return (
		<header
			{...props}
			className={cn(
				className,
				"pb-10 lg:pb-14 pt-20 lg:pt-36 relative min-h-screen bg-transparent",
			)}
		>
			<Image
				src={scholarshipsBg}
				alt="Kubecon Amsterdam"
				className="w-full h-full object-cover absolute top-0 left-0 z-[-100] user-select-none"
			/>
			<div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10" />
			<ViewContainer className="z-10 text-white space-y-8">
				<Image
					src={scholarshipsLogo}
					alt="WeMakeDevs Scholarships"
					className="w-40 md:w-60"
				/>
				<h1 className="font-title text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white md:max-w-4xl">
					Fully sponsored trip to KubeCon Amsterdam!
				</h1>
				<div className="space-y-4">
					<p className="text-lg font-medium max-w-3xl">
						WeMakeDevs is sponsoring need-based and
						diversity-focused scholarships to attend KubeCon Europe
						2025 in Amsterdam, one of the world's biggest
						open-source cloud-native events.
					</p>
					<p className="text-lg font-medium max-w-3xl">
						Whether you're a student, early-career engineer, or just
						starting out in cloud-native, this is your chance to
						make it to the global stage.
					</p>
				</div>
				<Link
					href="#"
					className={cn(
						buttonVariants(),
						"bg-white hover:bg-white/80 text-[#1a2047] flex items-center gap-2 w-fit transition-colors",
					)}
				>
					Apply now
					<ArrowRightIcon size={18} />
				</Link>
			</ViewContainer>
		</header>
	);
};

export default Header;
