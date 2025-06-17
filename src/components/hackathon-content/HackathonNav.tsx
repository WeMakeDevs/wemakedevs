import { cn } from "@/lib/utils";
import type { HackathonNavInterface } from "@/types";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ViewContainer } from "../ui/view-container";

interface NavLink {
	href: string;
	label: string;
	page: string;
}

const HackathonNav = ({
	page,
	slug,
	className,
	links,
	...props
}: HackathonNavInterface & { links: NavLink[] }) => {
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
					{links.map(link => (
						<li key={link.page}>
							<Link
								href={link.href}
								className={cn(
									"px-6 py-4 font-medium hover:bg-foreground/10 inline-block w-full md:w-auto text-center",
									page === link.page && "shadow-secondaryNav",
								)}
							>
								{link.label}
							</Link>
						</li>
					))}
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
