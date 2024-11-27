import { cn } from "@/lib/utils";
import type { HackathonNavInterface } from "@/types";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ViewContainer } from "../ui/view-container";

const HackathonNav = ({
	page,
	slug,
	className,
	...props
}: HackathonNavInterface) => {
	return (
		<nav
			aria-label="secondary nav"
			className={cn(
				className,
				"bg-foreground/5 border-t border-b border-foreground/10",
			)}
			{...props}
		>
			<ViewContainer className="flex justify-between flex-col md:flex-row">
				<ul className="flex flex-col md:flex-row list-none">
					<li>
						<Link
							href={`/hackathons/${slug}`}
							className={cn(
								"px-6 py-4 font-medium hover:bg-foreground/10 inline-block w-full md:w-auto text-center",
								page === "overview" && "shadow-secondaryNav",
							)}
						>
							Overview
						</Link>
					</li>
					<li>
						<Link
							href={`/hackathons/${slug}/schedule`}
							className={cn(
								"px-6 py-4 font-medium hover:bg-foreground/10 inline-block w-full md:w-auto text-center",
								page === "schedule" && "shadow-secondaryNav",
							)}
						>
							Schedule
						</Link>
					</li>
					<li>
						<Link
							href={`/hackathons/${slug}/resources`}
							className={cn(
								"px-6 py-4 font-medium hover:bg-foreground/10 inline-block w-full md:w-auto text-center",
								page === "resources" && "shadow-secondaryNav",
							)}
						>
							Resources
						</Link>
					</li>
					<li>
						<Link
							href={`/hackathons/${slug}/rules`}
							className={cn(
								"px-6 py-4 font-medium hover:bg-foreground/10 inline-block w-full md:w-auto text-center",
								page === "rules" && "shadow-secondaryNav",
							)}
						>
							Rules
						</Link>
					</li>
					{/* <li>
            <Link
              href={`/hackathons/${slug}/projects`}
              className={cn(
                "px-6 py-4 font-medium hover:bg-foreground/10 inline-block w-full md:w-auto text-center",
                page === "projects" && "shadow-secondaryNav"
              )}
            >
              Projects
            </Link>
          </li> */}
				</ul>
				{/* <Link
          href={`/hackathons/${slug}/submit`}
          className={cn(
            buttonVariants(),
            "inline-block md:ml-auto text-center"
          )}
        >
          Submit Project
        </Link> */}
			</ViewContainer>
		</nav>
	);
};

export default HackathonNav;
