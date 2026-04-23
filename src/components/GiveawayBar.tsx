import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const GiveawayBar = ({ className }: { className?: string }) => {
	return (
		<section
			className={cn(
				"fixed bottom-0 left-0 right-0 z-[95] border-t border-emerald-900 bg-emerald-600 text-white shadow-[0_-12px_32px_rgba(0,0,0,0.35)]",
				className,
			)}
			aria-label="iPad giveaway"
		>
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:gap-4">
				<p className="text-center text-sm font-medium leading-snug sm:text-left md:text-base">
					🎉 Fill our quick survey &amp; win an{" "}
					<span className="font-extrabold">Apple iPad worth ₹50,000</span>
					{" "}&mdash; winners announced{" "}
					<span className="font-extrabold">26th April</span>
				</p>
				<div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row">
					<Link
						href="/giveaways"
						className={cn(
							buttonVariants({
								variant: "secondary",
								size: "default",
							}),
							"w-full justify-center sm:w-auto bg-white text-emerald-700 hover:bg-slate-100",
						)}
					>
						Details
					</Link>
					<Link
						href="https://forms.gle/3EZNbXeGmPDzz4sz6"
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							buttonVariants({
								variant: "default",
								size: "default",
							}),
							"w-full justify-center sm:w-auto border border-white bg-emerald-900 text-white hover:bg-emerald-950",
						)}
					>
						Fill Survey
					</Link>
				</div>
			</div>
		</section>
	);
};

export default GiveawayBar;
