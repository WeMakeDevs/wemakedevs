"use client";

import { logo } from "@/assets/images";
import { cn } from "@/lib/utils";
import type { navLinksType } from "@/types";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { NavContainer } from "./ui/nav-container";

const Navbar = ({ className }: { className?: string }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

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

	const navLinks: navLinksType = [
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
			name: "Initiatives",
			url: "https://wemakedevs.org/#initiatives",
			type: "link",
		},
		{
			name: "Join",
			url: "https://wemakedevs.org/#join",
			type: "link",
		},
		{
			name: "FAQs",
			url: "https://wemakedevs.org/#faq",
			type: "link",
		},
		{
			name: "Partner with us",
			url: "https://wemakedevs.org/#partners",
			type: "button",
		},
	];

	return (
		<nav
			id="nav"
			className={cn("fixed mx-auto w-full z-[100] md:py-4", className)}
		>
			<NavContainer
				className={cn(
					"items-center justify-between rounded transition-all py-3",
					isScrolled && "bg-white shadow-lg",
					"hidden lg:flex",
				)}
			>
				<Link
					href="https://wemakedevs.org"
					className="flex items-center gap-4"
				>
					<Image src={logo} alt="WeMakeDevs Logo" className="w-12" />
					<span
						className={cn(
							"font-title text-lg md:text-xl text-primary font-semibold",
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
								className={cn(
									buttonVariants({
										variant:
											link.type === "button"
												? "default"
												: "ghost",
									}),
									"px-4 py-2 text-foreground",
									link.type === "button" && "text-white",
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
					<Link
						href="https://wemakedevs.org"
						className="flex items-center gap-4"
					>
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
								className={cn(
									"w-full px-4 py-2 border-b border-accent-3 flex justify-center items-center",
									link.type === "button"
										? "bg-primary hover:bg-blue-700 text-white"
										: "hover:bg-black/[0.04] bg-transparent",
								)}
								onClick={handleToggle}
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

export default Navbar;
