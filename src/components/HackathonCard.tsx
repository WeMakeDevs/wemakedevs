import { hackathonImage } from "@/assets/images";
import { cn } from "@/lib/utils";
import type {
	GeneralComponent,
	HackathonCardDatesType,
	HackathonCardImageType,
	HackathonCardType,
} from "@/types";
import { CalendarIcon } from "@radix-ui/react-icons";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HackathonCard = ({ className, children, href }: HackathonCardType) => {
	return (
		<Link
			href={href}
			className={cn(
				className,
				"rounded group relative shadow-xl hover:shadow-none transition-shadow h-fit",
			)}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="rounded border-4 border-accent-4 p-2 md:p-4 space-y-4 bg-card">
				{children}
			</div>
			<div className="absolute bottom-0 left-0 rounded-b group-hover:translate-y-[90%] -z-10 transition-transform w-full bg-accent-4 border-b-4 border-t-4 border-accent-4 font-bold tracking-wider uppercase flex justify-center items-center">
				Explore
			</div>
		</Link>
	);
};

const HackathonCardTitle = ({
	className,
	children,
	...props
}: GeneralComponent) => {
	return (
		<h3 className={cn(className, "text-2xl md:text-3xl")} {...props}>
			{children}
		</h3>
	);
};

const HackathonCardDescription = ({
	className,
	children,
	...props
}: GeneralComponent) => {
	return (
		<p className={cn(className, "leading-snug font-medium")} {...props}>
			{children}
		</p>
	);
};

const HackathonCardImage = ({
	className,
	src,
	alt,
	...props
}: HackathonCardImageType) => {
	return (
		<Image
			className={cn(className, "aspect-[10/7] object-cover rounded")}
			{...props}
			src={src}
			alt={alt}
		/>
	);
};

const HackathonCardDates = ({
	startDate,
	endDate,
	className,
	...props
}: HackathonCardDatesType) => {
	return (
		<p
			className={cn(className, "flex gap-2 items-center font-medium")}
			{...props}
		>
			<CalendarIcon className="size-5" />
			{new Date(startDate).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
			})}{" "}
			-{" "}
			{new Date(endDate).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
			})}
		</p>
	);
};

const HackathonLastCard = () => {
	return (
		<Link
			className="overflow-clip p-5 rounded group relative shadow-xl bg-accent-4 text-[#0A3D71] "
			href="/hackathons"
		>
			<svg
				className="-translate-x-4 w-16 mx-auto"
				width="146"
				height="79"
				viewBox="0 0 146 79"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				role="img"
				aria-label="Folder Icon"
			>
				<path
					id="folder"
					className=""
					d="M59 28.9257V12.3974C59 10.2056 59.8707 8.10355 61.4205 6.55372C62.9703 5.00389 65.0724 4.13321 67.2642 4.13321H83.3792C84.7614 4.11966 86.1248 4.45298 87.3448 5.10268C88.5648 5.75237 89.6023 6.69768 90.3625 7.85208L93.7094 12.8106C94.4619 13.9532 95.4863 14.8912 96.6907 15.5402C97.8951 16.1893 99.2418 16.5292 100.61 16.5294H133.377C135.569 16.5294 137.671 17.4001 139.221 18.9499C140.771 20.4998 141.642 22.6018 141.642 24.7936V66.1143C141.642 68.3061 140.771 70.4081 139.221 71.958C137.671 73.5078 135.569 74.3785 133.377 74.3785H67.2642C65.0724 74.3785 62.9703 73.5078 61.4205 71.958C59.8707 70.4081 59 68.3061 59 66.1143V61.9823"
					stroke="#0A3D71"
					strokeWidth="8.26415"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					id="line"
					className="group-hover:opacity-0 transition-opacity"
					d="M59 62L59 26"
					stroke="#0A3D71"
					strokeWidth="8.26415"
					strokeLinecap="round"
				/>
				<g
					id="arrow"
					className="opacity-0 group-hover:opacity-100 group-hover:translate-x-16 transition-all"
				>
					<path
						d="M4.58203 45.4526H45.9028"
						stroke="#0A3D71"
						strokeWidth="8.26415"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M33.5039 57.8486L45.9001 45.4524L33.5039 33.0562"
						stroke="#0A3D71"
						strokeWidth="8.26415"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
			</svg>
			<div className="mt-28 group-hover:-translate-y-20 transition-transform">
				<h3 className="text-center leading-tight text-2xl md:text-3xl text-[#0A3D71]">
					Our Past
					<br />
					Hackathons
				</h3>
				<p className="text-center font-semibold mt-4 text-base md:text-lg">
					Missed out on previous hackathons?
					<br />
					Catch up here!
				</p>
			</div>
			<p className="flex justify-center items-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-10 group-hover:-translate-y-10 transition-transform text-xl md:text-2xl font-semibold font-title">
				Explore <ArrowUpRight strokeWidth={2} stroke="#0A3D71" />
			</p>
		</Link>
	);
};

const HackathonComingSoonCard = () => {
	return (
		<div className="overflow-clip p-5 rounded group relative shadow-xl bg-accent-4 text-[#0A3D71] ">
			<Image
				src={hackathonImage}
				alt="Hackathon Image"
				className="rounded"
			/>
			<div className="mt-16">
				<h3 className="text-center leading-tight text-2xl md:text-3xl text-[#0A3D71]">
					Coming Soon!
				</h3>
			</div>
		</div>
	);
};

export {
	HackathonCard,
	HackathonCardTitle,
	HackathonCardDates,
	HackathonCardImage,
	HackathonLastCard,
	HackathonCardDescription,
	HackathonComingSoonCard,
};
