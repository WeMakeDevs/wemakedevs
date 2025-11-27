"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import type { HackathonNavInterface } from "@/types";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

const SecondaryNavbar = ({
	page,
	className,
	links,
	navCta,
	...props
}: HackathonNavInterface & {
	links: NavLink[];
	navCta?: NavCta;
}) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	const linkBase =
		"px-6 py-4 font-mono text-sm tracking-wide inline-block transition-colors";

	return (
		<nav
			aria-label="secondary nav"
			className={cn(
				"bg-gradient-to-r from-white/95 via-blue-50/90 to-white/95 border-y border-blue-500/20 backdrop-blur",
				className,
			)}
			{...props}
		>
			<ViewContainer className="flex justify-between items-center">
				<ul className="hidden md:flex list-none">
					{links.map(link => (
						<li key={link.page}>
							<Link
								href={link.href}
								className={cn(
									linkBase,
									"text-gray-700 hover:text-blue-600 hover:bg-blue-50",
									page === link.page &&
										"bg-blue-100 text-blue-700 border-b-2 border-blue-500",
								)}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>

				<button
					type="button"
					onClick={toggleMobileMenu}
					className="md:hidden flex items-center gap-2 px-4 py-2 border border-blue-500/30 rounded-md text-gray-700 hover:bg-blue-50 transition-colors"
					aria-label="Toggle mobile menu"
					aria-expanded={isMobileMenuOpen}
				>
					{isMobileMenuOpen ? (
						<X className="h-5 w-5" />
					) : (
						<Menu className="h-5 w-5" />
					)}
					<span className="font-mono text-sm">
						{isMobileMenuOpen ? "Close" : "Menu"}
					</span>
				</button>

				{navCta && (
					<div className="hidden md:block">
						{navCta.disabled ? (
							<div className="px-6 py-3 font-mono text-sm text-gray-400 border border-blue-500/30 rounded-md opacity-60 cursor-not-allowed">
								{navCta.label}
							</div>
						) : (
							<Link
								href={navCta.href}
								className="px-6 py-3 font-mono text-sm text-white bg-blue-500 border-2 border-blue-600 rounded-full hover:bg-blue-600 transition-all"
								target={
									navCta.openInNewTab ? "_blank" : "_self"
								}
								rel={
									navCta.openInNewTab
										? "noopener noreferrer"
										: undefined
								}
							>
								{navCta.label}
							</Link>
						)}
					</div>
				)}
			</ViewContainer>

			<div
				className={cn(
					"md:hidden transition-all duration-300 ease-in-out overflow-hidden",
					isMobileMenuOpen
						? "max-h-96 opacity-100"
						: "max-h-0 opacity-0",
				)}
			>
				<div className="bg-white/95 border-t border-blue-500/20">
					<ul className="flex flex-col list-none">
						{links.map(link => (
							<li key={link.page}>
								<Link
									href={link.href}
									onClick={closeMobileMenu}
									className={cn(
										linkBase,
										"w-full text-gray-700 border-b border-blue-500/10",
										page === link.page &&
											"bg-blue-50 text-blue-700",
									)}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					{navCta && (
						<div className="p-4 border-t border-blue-500/20">
							{navCta.disabled ? (
								<div className="w-full px-6 py-3 font-mono text-center text-gray-400 border border-blue-500/30 rounded-md opacity-60 cursor-not-allowed">
									{navCta.label}
								</div>
							) : (
								<Link
									href={navCta.href}
									onClick={closeMobileMenu}
									className="w-full px-6 py-3 font-mono text-center text-white bg-blue-500 border-2 border-blue-600 rounded-full hover:bg-blue-600 inline-block transition-all"
									target={
										navCta.openInNewTab ? "_blank" : "_self"
									}
									rel={
										navCta.openInNewTab
											? "noopener noreferrer"
											: undefined
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

export default SecondaryNavbar;
