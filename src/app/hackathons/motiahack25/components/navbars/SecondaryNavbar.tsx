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
				"bg-gradient-to-r from-[#0a0e0a]/80 via-[#112130]/70 to-[#0a0e0a]/80 border-y border-green-500/20 backdrop-blur",
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
									"text-green-100 hover:text-white hover:bg-green-500/10",
									page === link.page &&
										"bg-green-500/15 text-white border-b-2 border-green-400 shadow-[0_6px_20px_rgba(0,255,65,0.15)]",
								)}
							>
								<span className="text-green-400 mr-2">
									&gt;
								</span>
								{link.label}
							</Link>
						</li>
					))}
				</ul>

				<button
					type="button"
					onClick={toggleMobileMenu}
					className="md:hidden flex items-center gap-2 px-4 py-2 border border-green-500/30 rounded-md text-green-100 hover:bg-green-500/10 transition-colors"
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
							<div className="px-6 py-3 font-mono text-sm text-green-200 border border-green-500/30 rounded-md opacity-60 cursor-not-allowed">
								{navCta.label}
							</div>
						) : (
							<Link
								href={navCta.href}
								className="px-6 py-3 font-mono text-sm text-green-900 bg-green-300 rounded-md shadow-[0_0_15px_rgba(82,255,168,0.4)] hover:bg-green-200 transition-colors"
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
				<div className="bg-[#0a0e0a]/90 border-t border-green-500/20">
					<ul className="flex flex-col list-none">
						{links.map(link => (
							<li key={link.page}>
								<Link
									href={link.href}
									onClick={closeMobileMenu}
									className={cn(
										linkBase,
										"w-full text-green-100 border-b border-green-500/10",
										page === link.page &&
											"bg-green-500/10 text-white",
									)}
								>
									<span className="text-green-400 mr-2">
										&gt;
									</span>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					{navCta && (
						<div className="p-4 border-t border-green-500/20">
							{navCta.disabled ? (
								<div className="w-full px-6 py-3 font-mono text-center text-green-200 border border-green-500/30 rounded-md opacity-60 cursor-not-allowed">
									{navCta.label}
								</div>
							) : (
								<Link
									href={navCta.href}
									onClick={closeMobileMenu}
									className="w-full px-6 py-3 font-mono text-center text-green-900 bg-green-300 rounded-md shadow-[0_0_15px_rgba(82,255,168,0.4)] hover:bg-green-200 inline-block transition-colors"
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
