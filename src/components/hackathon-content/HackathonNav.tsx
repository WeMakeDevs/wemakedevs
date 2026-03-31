"use client";

import { cn } from "@/lib/utils";
import type { HackathonNavInterface } from "@/types";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type MouseEvent, useState } from "react";
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
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const normalizePath = (path: string) =>
		path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;

	const handleLinkClick = (
		href: string,
		event: MouseEvent<HTMLAnchorElement>,
	) => {
		if (!href.includes("#")) return;

		const [rawPath, hash] = href.split("#");
		if (!hash) return;

		const targetPath = rawPath || pathname;
		const samePage = normalizePath(targetPath) === normalizePath(pathname);

		if (!samePage) return;

		event.preventDefault();
		const target = document.getElementById(hash);
		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" });
			window.history.replaceState(null, "", `#${hash}`);
		} else {
			router.push(href);
		}
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<nav
			aria-label="secondary nav"
			className={cn(
				className,
				"bg-foreground/5 border-t border-b border-foreground/10",
			)}
			{...props}
		>
			<ViewContainer className="flex justify-between items-center">
				{/* Desktop Navigation */}
				<ul className="hidden md:flex list-none">
					{links.map(link => (
						<li key={link.page}>
							<Link
								href={link.href}
								onClick={event => handleLinkClick(link.href, event)}
								className={cn(
									"px-6 py-4 font-medium hover:bg-foreground/10 inline-block",
									page === link.page && "shadow-secondaryNav",
								)}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile Menu Button */}
				<button
					type="button"
					onClick={toggleMobileMenu}
					className="md:hidden flex items-center gap-2 px-4 py-2 hover:bg-foreground/10 rounded-md transition-colors"
					aria-label="Toggle mobile menu"
					aria-expanded={isMobileMenuOpen}
				>
					{isMobileMenuOpen ? (
						<X className="h-5 w-5" />
					) : (
						<Menu className="h-5 w-5" />
					)}
					<span className="font-medium text-sm">
						{isMobileMenuOpen ? "Close" : "Menu"}
					</span>
				</button>

				{/* Desktop CTA */}
				{navCta && (
					<div className="hidden md:block">
						{navCta.disabled ? (
							<div
								className={cn(
									"px-6 py-4 font-semibold inline-block bg-gray-400 text-white cursor-not-allowed opacity-60 rounded-md",
								)}
							>
								{navCta.label}
							</div>
						) : (
							<Link
								href={navCta.href}
								className={cn(
									"px-6 py-4 font-semibold inline-block bg-blue-500 text-white hover:bg-blue-600 rounded-md transition-colors",
								)}
								target={
									navCta.openInNewTab ? "_blank" : "_self"
								}
								rel={
									navCta.openInNewTab
										? "noopener noreferrer"
										: ""
								}
							>
								{navCta.label}
							</Link>
						)}
					</div>
				)}
			</ViewContainer>

			{/* Mobile Drawer */}
			<div
				className={cn(
					"md:hidden transition-all duration-300 ease-in-out overflow-hidden",
					isMobileMenuOpen
						? "max-h-96 opacity-100"
						: "max-h-0 opacity-0",
				)}
			>
				<div className="bg-foreground/5 border-t border-foreground/10">
					<ul className="flex flex-col list-none">
						{links.map(link => (
							<li key={link.page}>
								<Link
									href={link.href}
									onClick={event => {
										handleLinkClick(link.href, event);
										closeMobileMenu();
									}}
									className={cn(
										"px-6 py-4 font-medium hover:bg-foreground/10 inline-block w-full text-left border-b border-foreground/5 last:border-b-0",
										page === link.page &&
											"bg-foreground/10 shadow-secondaryNav",
									)}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>

					{/* Mobile CTA */}
					{navCta && (
						<div className="p-4 border-t border-foreground/10">
							{navCta.disabled ? (
								<div
									className={cn(
										"w-full px-6 py-3 font-semibold text-center bg-gray-400 text-white cursor-not-allowed opacity-60 rounded-md",
									)}
								>
									{navCta.label}
								</div>
							) : (
								<Link
									href={navCta.href}
									onClick={closeMobileMenu}
									className={cn(
										"w-full px-6 py-3 font-semibold text-center bg-blue-500 text-white hover:bg-blue-600 rounded-md transition-colors inline-block",
									)}
									target={
										navCta.openInNewTab ? "_blank" : "_self"
									}
									rel={
										navCta.openInNewTab
											? "noopener noreferrer"
											: ""
									}
								>
									{navCta.label}
								</Link>
							)}
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default HackathonNav;
