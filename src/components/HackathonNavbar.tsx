"use client";

import { logo } from "@/assets/images";
import { cn } from "@/lib/utils";
import type { navLinksType } from "@/types";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type MouseEvent, useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { NavContainer } from "./ui/nav-container";

interface HackathonNavbarProps {
	customNavLinks?: navLinksType;
}

const HackathonNavbar = ({ customNavLinks }: HackathonNavbarProps = {}) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const handleToggle = () => {
		setIsOpen(prev => !prev);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const defaultNavLinks: navLinksType = [
		{
			name: "Join",
			url: "/#join",
			type: "link",
		},
		{
			name: "Hackathons",
			url: "/#hackathons",
			type: "link",
		},
		{
			name: "Meetups",
			url: "/#meetups",
			type: "link",
		},
		{
			name: "Partner with us",
			url: "/#partners",
			type: "button",
		},
	];

	const navLinks = customNavLinks || defaultNavLinks;

	const normalizePath = (path: string) =>
		path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;

	const handleNavClick = (
		url: string,
		event: MouseEvent<HTMLAnchorElement>,
	) => {
		if (!url.includes("#")) return;

		const [rawPath, hash] = url.split("#");
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
			router.push(url);
		}
		setIsOpen(false);
	};

	return (
		<nav id="nav" className="fixed mx-auto w-full z-[100] md:py-4">
			<NavContainer
				className={cn(
					"items-center justify-between rounded transition-all py-3",
					isScrolled && "bg-white shadow-lg",
					isScrolled && "text-slate-900",
					"hidden lg:flex",
				)}
			>
				<Link href="/" className="flex items-center gap-4">
					<Image src={logo} alt="WeMakeDevs Logo" className="w-12" />
					<span
						className={cn(
							"font-title text-lg md:text-xl font-semibold",
							isScrolled ? "text-slate-900" : "text-primary",
						)}
					>
						WeMakeDevs
					</span>
				</Link>
				<ul className="flex lg:gap-2">
					{navLinks.map(link => (
						<li key={link.name}>
							<Link
								href={link.url}
								onClick={event => handleNavClick(link.url, event)}
								className={cn(
									buttonVariants({
										variant:
											link.type === "button"
												? "default"
												: "ghost",
									}),
									"px-4 py-2",
									isScrolled
										? link.type === "button"
											? "text-white"
											: "text-slate-900"
										: "text-foreground",
									link.type === "button" && !isScrolled && "text-white",
								)}
								target={link.openInNewTab ? "_blank" : "_self"}
								rel={
									link.openInNewTab
										? "noreferrer noopener"
										: ""
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
					"px-5 py-2 lg:hidden",
					isOpen && "pb-4",
					"bg-white shadow-md ",
				)}
			>
				<div className="flex w-full justify-between items-center">
					<Link href="/" className="flex items-center gap-4">
						<Image
							src={logo}
							alt="WeMakeDevs Logo"
							className="w-12"
						/>{" "}
						<span className="font-title text-lg md:text-xl text-primary font-semibold">
							WeMakeDevs
						</span>
					</Link>
					<Button
						variant="outline"
						size="icon"
						aria-label="Menu button"
						className="bg-transparent"
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
						"flex flex-col gap-4 mt-4",
						isOpen ? "flex" : "hidden",
					)}
				>
					{navLinks.map(link => (
						<li key={link.name}>
							<Link
								href={link.url}
								onClick={event => {
									handleNavClick(link.url, event);
									handleToggle();
								}}
								className={cn(
									"w-full px-4 py-2 border-b border-accent-3 flex justify-center items-center",
									link.type === "button"
										? "bg-primary hover:bg-blue-700 text-white"
										: "hover:bg-black/[0.04] bg-transparent",
								)}
								target={link.openInNewTab ? "_blank" : "_self"}
								rel={
									link.openInNewTab
										? "noreferrer noopener"
										: ""
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

export default HackathonNavbar;
