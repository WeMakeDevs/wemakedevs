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

interface NavCta {
	href: string;
	label: string;
	openInNewTab?: boolean;
	disabled?: boolean;
}

const HackathonNav = ({
	page,
	slug,
	className,
	links,
	navCta,
	...props
}: HackathonNavInterface & {
	links: NavLink[];
	navCta?: NavCta;
}) => {
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
				{navCta &&
					(navCta.disabled ? (
						<div
							className={cn(
								"md:ml-auto px-6 py-4 font-semibold inline-block bg-gray-400 text-white cursor-not-allowed opacity-60",
							)}
						>
							{navCta.label}
						</div>
					) : (
						<Link
							href={navCta.href}
							className={cn(
								"md:ml-auto px-6 py-4 font-semibold inline-block bg-blue-500 text-white hover:bg-blue-600",
							)}
							target={navCta.openInNewTab ? "_blank" : "_self"}
							rel={
								navCta.openInNewTab ? "noopener noreferrer" : ""
							}
						>
							{navCta.label}
						</Link>
					))}
			</ViewContainer>
		</nav>
	);
};

export default HackathonNav;
