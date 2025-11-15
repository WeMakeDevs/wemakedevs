"use client";

import { logo } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { NavContainer } from "@/components/ui/nav-container";
import { cn } from "@/lib/utils";
import type { navLinksType } from "@/types";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HackathonNavbarProps {
	customNavLinks?: navLinksType;
}

const PrimaryNavbar = ({ customNavLinks }: HackathonNavbarProps = {}) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(prev => !prev);
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const defaultNavLinks: navLinksType = [
		{ name: "Join", url: "/#join", type: "link" },
		{ name: "Hackathons", url: "/#hackathons", type: "link" },
		{ name: "Meetups", url: "/#meetups", type: "link" },
		{
			name: "Partner with us",
			url: "/#partners",
			type: "button",
			openInNewTab: true,
		},
	];

	const navLinks = customNavLinks || defaultNavLinks;

	const desktopShell = cn(
		"items-center justify-between rounded-xl border transition-all duration-300 py-3 px-6",
		"backdrop-blur supports-[backdrop-filter]:backdrop-blur",
		isScrolled
			? "bg-[#112130]/95 border-green-500/20 shadow-[0_10px_35px_rgba(12,25,18,0.5)]"
			: "bg-gradient-to-r from-[#0a0e0a]/85 via-[#112130]/70 to-[#0a0e0a]/85 border-green-500/15 shadow-[0_15px_45px_rgba(0,255,65,0.12)]",
	);

	const linkClasses =
		"px-4 py-2 text-sm font-semibold tracking-wide text-green-100 font-mono uppercase transition-colors hover:text-white";

	return (
		<nav id="nav" className="fixed mx-auto w-full z-[100] md:py-4">
			<NavContainer className={cn(desktopShell, "hidden lg:flex")}>
				<Link href="/" className="flex items-center gap-4 group">
					<Image src={logo} alt="WeMakeDevs Logo" className="w-12" />
					<span className="font-title text-xl text-green-100 group-hover:text-white transition-colors">
						WeMakeDevs
					</span>
				</Link>
				<ul className="flex lg:gap-1 items-center">
					{navLinks.map(link => (
						<li key={link.name}>
							<Link
								href={link.url}
								className={cn(
									linkClasses,
									link.type === "button"
										? "bg-green-500/15 border border-green-500/40 rounded-md shadow-[0_0_15px_rgba(0,255,65,0.2)] hover:bg-green-500/25 lg:ml-4"
										: "rounded-md hover:bg-green-500/10",
								)}
								target={link.openInNewTab ? "_blank" : "_self"}
								rel={
									link.openInNewTab
										? "noreferrer noopener"
										: undefined
								}
							>
								<span className="text-green-400 mr-2">
									&gt;
								</span>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</NavContainer>

			<div
				className={cn(
					"px-5 py-2 lg:hidden border-b border-green-500/10",
					isScrolled
						? "bg-[#112130]/95 shadow-lg"
						: "bg-[#0a0e0a]/90",
					isOpen && "pb-4",
				)}
			>
				<div className="flex w-full justify-between items-center">
					<Link href="/" className="flex items-center gap-4">
						<Image
							src={logo}
							alt="WeMakeDevs Logo"
							className="w-12"
						/>
						<span className="font-title text-lg text-green-100">
							WeMakeDevs
						</span>
					</Link>
					<Button
						variant="outline"
						size="icon"
						aria-label="Menu button"
						className="bg-transparent border-green-500/40 text-green-100 hover:bg-green-500/10"
					>
						{isOpen ? (
							<Cross2Icon onClick={handleToggle} />
						) : (
							<HamburgerMenuIcon onClick={handleToggle} />
						)}
					</Button>
				</div>
				<ul
					className={cn(
						"flex flex-col gap-3 mt-4",
						isOpen ? "flex" : "hidden",
					)}
				>
					{navLinks.map(link => (
						<li key={link.name}>
							<Link
								href={link.url}
								onClick={handleToggle}
								className={cn(
									"w-full px-4 py-3 rounded-md border border-green-500/30 text-green-100 font-mono uppercase tracking-wide",
									link.type === "button"
										? "bg-green-500/20"
										: "bg-transparent hover:bg-green-500/10",
								)}
								target={link.openInNewTab ? "_blank" : "_self"}
								rel={
									link.openInNewTab
										? "noreferrer noopener"
										: undefined
								}
							>
								<span className="text-green-400 mr-2">
									&gt;
								</span>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default PrimaryNavbar;
