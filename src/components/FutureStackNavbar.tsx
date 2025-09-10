"use client";

import { logo } from "@/assets/images";
import { cn } from "@/lib/utils";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { NavContainer } from "./ui/nav-container";

const FutureStackNavbar = () => {
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

	const navLinks = [
		{
			name: "About",
			url: "#about",
			type: "link",
		},
		{
			name: "Prizes",
			url: "#prizes",
			type: "link",
		},
		{
			name: "Register",
			url: "#register",
			type: "link",
		},
		{
			name: "Share",
			url: "#share",
			type: "link",
		},
	];

	return (
		<nav id="nav" className="fixed mx-auto w-full z-[100] md:py-4">
			<NavContainer
				className={cn(
					"items-center justify-between rounded transition-all py-3",
					isScrolled && "bg-white shadow-lg",
					"hidden lg:flex",
				)}
			>
				<Link href="/" className="flex items-center gap-4">
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
									buttonVariants({ variant: "ghost" }),
									"px-4 py-2 text-foreground",
								)}
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
						/>
						<span className="font-title text-lg md:text-xl text-primary font-semibold">
							FutureStack AI
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
									"w-full px-4 py-2 border-b border-accent-3 flex justify-center items-center hover:bg-black/[0.04] bg-transparent",
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

export default FutureStackNavbar;
