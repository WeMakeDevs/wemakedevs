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
		{ name: "Join", url: "https://wemakedevs.org/#join", type: "link" },
		{
			name: "Hackathons",
			url: "https://wemakedevs.org/#hackathons",
			type: "link",
		},
		{
			name: "Meetups",
			url: "https://wemakedevs.org/#meetups",
			type: "link",
		},
		{
			name: "Partner with us",
			url: "https://wemakedevs.org/#partners",
			type: "button",
			openInNewTab: true,
		},
	];

	const navLinks = customNavLinks || defaultNavLinks;

	const desktopShell = cn(
		"items-center justify-between rounded-xl border transition-all duration-300 py-3 px-6",
		"backdrop-blur supports-[backdrop-filter]:backdrop-blur",
		isScrolled
			? "bg-white/95 border-blue-500/20 shadow-[0_10px_35px_rgba(59,130,246,0.15)]"
			: "bg-gradient-to-r from-white/95 via-blue-50/90 to-white/95 border-blue-500/15 shadow-[0_15px_45px_rgba(59,130,246,0.1)]",
	);

	const linkClasses =
		"px-4 py-2 text-sm font-semibold tracking-wide font-mono uppercase transition-colors";

	return (
		<nav id="nav" className="fixed mx-auto w-full z-[100] md:py-4">
			<NavContainer className={cn(desktopShell, "hidden lg:flex")}>
				<Link
					href="https://wemakedevs.org"
					className="flex items-center gap-4 group"
				>
					<Image src={logo} alt="WeMakeDevs Logo" className="w-12" />
					<span className="font-title text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
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
										? "bg-blue-500 text-white border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white lg:ml-4"
										: "text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600",
								)}
								target={link.openInNewTab ? "_blank" : "_self"}
								rel={
									link.openInNewTab
										? "noreferrer noopener"
										: undefined
								}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</NavContainer>

			<div
				className={cn(
					"px-5 py-2 lg:hidden border-b border-blue-500/10",
					isScrolled ? "bg-white/95 shadow-lg" : "bg-white/90",
					isOpen && "pb-4",
				)}
			>
				<div className="flex w-full justify-between items-center">
					<Link
						href="https://wemakedevs.org"
						className="flex items-center gap-4"
					>
						<Image
							src={logo}
							alt="WeMakeDevs Logo"
							className="w-12"
						/>
						<span className="font-title text-lg text-gray-800">
							WeMakeDevs
						</span>
					</Link>
					<Button
						variant="outline"
						size="icon"
						aria-label="Menu button"
						className="bg-transparent border-blue-500/40 text-gray-700 hover:bg-blue-50"
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
									"w-full px-4 py-3 rounded-md border border-blue-500/30 text-gray-700 font-mono uppercase tracking-wide",
									link.type === "button"
										? "bg-blue-500 text-white rounded-full"
										: "bg-transparent hover:bg-blue-50",
								)}
								target={link.openInNewTab ? "_blank" : "_self"}
								rel={
									link.openInNewTab
										? "noreferrer noopener"
										: undefined
								}
							>
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
