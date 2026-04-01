import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type UpcomingHackathonRegisterBarProps = {
	registerUrl: string;
	hackathonPath: string;
	hackathonTitle: string;
	className?: string;
};

const UpcomingHackathonRegisterBar = ({
	registerUrl,
	hackathonPath,
	hackathonTitle,
	className,
}: UpcomingHackathonRegisterBarProps) => {
	return (
		<section
			className={cn(
				"fixed bottom-0 left-0 right-0 z-[95] border-t border-blue-900 bg-blue-600 text-white shadow-[0_-12px_32px_rgba(0,0,0,0.35)]",
				className,
			)}
			aria-label="Upcoming hackathon registration"
		>
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:gap-4">
				<p className="text-center text-sm font-medium leading-snug sm:text-left md:text-base">
					Upcoming hackathon: win{" "}
					<span className="font-extrabold">$7,000 in prizes</span> +
					unlock{" "}
					<span className="font-extrabold">job opportunities</span>{" "}
					with <span className="font-semibold">{hackathonTitle}</span>
				</p>
				<div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row">
					<Link
						href={hackathonPath}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							buttonVariants({
								variant: "secondary",
								size: "default",
							}),
							"w-full justify-center sm:w-auto bg-white text-blue-700 hover:bg-slate-100",
						)}
					>
						Details
					</Link>
					<Link
						href={registerUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							buttonVariants({
								variant: "default",
								size: "default",
							}),
							"w-full justify-center sm:w-auto border border-white bg-blue-900 text-white hover:bg-blue-950",
						)}
					>
						Register
					</Link>
				</div>
			</div>
		</section>
	);
};

export default UpcomingHackathonRegisterBar;
