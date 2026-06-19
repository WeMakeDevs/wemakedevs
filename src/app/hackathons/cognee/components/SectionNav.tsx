"use client";

import { ViewContainer } from "@/components/ui/view-container";
import { Ticket } from "lucide-react";
import Link from "next/link";

const sections = [
	{ href: "#about", label: "Overview" },
	{ href: "#why", label: "The Problem" },
	{ href: "#apis", label: "Memory APIs" },
	{ href: "#ideas", label: "Build" },
	{ href: "#prizes", label: "Prizes" },
	{ href: "#faq", label: "FAQ" },
];

const SectionNav = ({ registerHref }: { registerHref: string }) => {
	const handleScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		const el = document.querySelector(href);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<nav
			aria-label="section nav"
			className="bg-foreground/5 border-t border-b border-foreground/10"
		>
			<ViewContainer className="flex justify-between items-center gap-2">
				<ul className="flex list-none overflow-x-auto no-scrollbar">
					{sections.map(s => (
						<li key={s.href}>
							<a
								href={s.href}
								onClick={e => handleScroll(e, s.href)}
								className="px-4 md:px-6 py-4 font-medium inline-block whitespace-nowrap cursor-pointer"
							>
								{s.label}
							</a>
						</li>
					))}
				</ul>
				<Link
					href={registerHref}
					target="_blank"
					rel="noopener noreferrer"
					className="cognee-register-btn shrink-0 inline-flex items-center gap-2 px-5 md:px-6 py-2.5 my-2 font-bold rounded-lg bg-[#fff8e6] text-[#5a1410] hover:opacity-90 transition-opacity"
				>
					<Ticket className="w-4 h-4" />
					Register
				</Link>
			</ViewContainer>
		</nav>
	);
};

export default SectionNav;
