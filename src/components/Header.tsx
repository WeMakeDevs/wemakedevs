import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ViewContainer } from "./ui/view-container";

const Header = ({ className, ...props }: GeneralComponent) => {
	return (
		<header
			{...props}
			className={cn(className, "pb-10 lg:pb-14 pt-20 lg:pt-36")}
		>
			<ViewContainer className="text-center">
				<p className="mb-8 font-semibold flex gap-3 justify-center items-center text-sm md:text-base">
					<span className="rounded-full border bg-accent-1 p-1 shadow-custom-hard block">
						<span className="bg-transparent px-2 md:px-3 py-1.5 md:py-2 border rounded-full block">
							Code
						</span>
					</span>
					<span className="rounded-full border bg-accent-2 p-1 shadow-custom-hard block">
						<span className="bg-transparent px-2 md:px-3 py-1.5 md:py-2 border rounded-full block">
							Create
						</span>
					</span>
					<span className="rounded-full border bg-accent-3 p-1 shadow-custom-hard block">
						<span className="bg-transparent px-2 md:px-3 py-1.5 md:py-2 border rounded-full block">
							Connect
						</span>
					</span>
				</p>
				<h1 className="font-title text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mt-8 w-fit mx-auto">
					Hackathons & Meetups For <br />
					<div className="my-2 relative h-20">
						<span className="opacity-0 animate-fade1 px-2 bg-accent-1 rounded-xl absolute top-0 left-1/2 -translate-x-1/2">
							Developers
						</span>
						<span className="opacity-0 animate-fade2 px-2 bg-accent-2 rounded-xl absolute top-0 left-1/2 -translate-x-1/2">
							Students
						</span>
						<span className="opacity-0 animate-fade3 px-2 bg-accent-3 rounded-xl absolute top-0 left-1/2 -translate-x-1/2">
							Professionals
						</span>
					</div>
				</h1>
				<p className="max-w-3xl w-full text-lg lg:text-xl mx-auto mt-10 font-medium">
					WeMakeDevs is an inclusive global community for anyone
					passionate about technology. We foster collaboration and
					innovation through global events.
				</p>
				<div className="mx-auto flex flex-wrap gap-5 md:gap-10 justify-center mt-12">
					<Link
						href="#join"
						className={cn(
							buttonVariants({ variant: "default" }),
							"flex gap-2 flex-auto sm:flex-initial sm:w-auto w-full",
						)}
					>
						Join our community
					</Link>
					<Link
						href="#hackathons"
						className={cn(
							buttonVariants({ variant: "outline" }),
							"flex-auto sm:flex-initial sm:w-auto w-full",
						)}
					>
						Events
					</Link>
				</div>
			</ViewContainer>
		</header>
	);
};

export default Header;
