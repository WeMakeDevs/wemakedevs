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
				"fixed bottom-0 left-0 right-0 z-[95] border-t border-primary/25 bg-background/95 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md supports-[backdrop-filter]:bg-background/80",
				className,
			)}
			aria-label="Upcoming hackathon registration"
		>
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:gap-4">
				<p className="text-center text-sm font-medium leading-snug sm:text-left md:text-base">
					Register for the upcoming hackathon —{" "}
					<span className="font-semibold text-primary">
						{hackathonTitle}
					</span>{" "}
					<span className="text-muted-foreground">
						with OpenMetadata × WeMakeDevs
					</span>
				</p>
				<div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row">
					<Link
						href={hackathonPath}
						className={cn(
							buttonVariants({
								variant: "outline",
								size: "default",
							}),
							"w-full justify-center sm:w-auto",
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
							"w-full justify-center sm:w-auto",
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
