"use client";

import { logo } from "@/assets/images";
import { cn } from "@/lib/utils";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NavContainer } from "@/components/ui/nav-container";

const GiveawaysNavbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "How It Works", href: "#how-it-works", external: false },
		{ name: "Past Winners", href: "#past-winners", external: false },
		{ name: "Join", href: "#join", external: false },
		{ name: "Hackathons", href: "/hackathons", external: true },
	];

	return (
		<nav className="fixed mx-auto w-full z-[100] md:py-4">
			{/* Desktop */}
			<NavContainer
				className={cn(
					"items-center justify-between rounded transition-all py-3 hidden lg:flex",
					isScrolled ? "bg-white shadow-lg" : "bg-transparent",
				)}
			>
				<Link href="/" className="flex items-center gap-4">
					<Image src={logo} alt="WeMakeDevs Logo" className="w-12" />
					<span
						className={cn(
							"font-title text-lg md:text-xl font-semibold transition-colors",
							isScrolled ? "text-primary" : "text-white",
						)}
					>
						WeMakeDevs
					</span>
				</Link>
				<ul className="flex lg:gap-2">
					{navLinks.map((link) =>
						link.external ? (
							<li key={link.name}>
								<Link
									href={link.href}
									target="_blank"
									rel="noreferrer noopener"
									className={cn(
										"px-4 py-2 rounded-md text-sm font-medium transition-colors",
										isScrolled
											? "text-foreground hover:bg-black/[0.04]"
											: "text-white hover:bg-white/10",
									)}
								>
									{link.name}
								</Link>
							</li>
						) : (
							<li key={link.name}>
								<a
									href={link.href}
									className={cn(
										"px-4 py-2 rounded-md text-sm font-medium transition-colors",
										isScrolled
											? "text-foreground hover:bg-black/[0.04]"
											: "text-white hover:bg-white/10",
									)}
								>
									{link.name}
								</a>
							</li>
						),
					)}
				</ul>
			</NavContainer>

			{/* Mobile */}
			<div
				className={cn(
					"px-5 py-2 lg:hidden transition-colors",
					isOpen && "pb-4",
					isScrolled || isOpen
						? "bg-white shadow-md"
						: "bg-transparent",
				)}
			>
				<div className="flex w-full justify-between items-center">
					<Link href="/" className="flex items-center gap-4">
						<Image
							src={logo}
							alt="WeMakeDevs Logo"
							className="w-12"
						/>
						<span
							className={cn(
								"font-title text-lg md:text-xl font-semibold transition-colors",
								isScrolled || isOpen
									? "text-primary"
									: "text-white",
							)}
						>
							WeMakeDevs
						</span>
					</Link>
					<Button
						variant="outline"
						size="icon"
						aria-label="Menu button"
						className={cn(
							"bg-transparent",
							!isScrolled &&
								!isOpen &&
								"border-white/30 text-white hover:bg-white/10",
						)}
						onClick={handleToggle}
					>
						{isOpen ? <Cross2Icon /> : <HamburgerMenuIcon />}
					</Button>
				</div>
				<ul
					className={cn(
						"flex flex-col gap-4 mt-4",
						isOpen ? "flex" : "hidden",
					)}
				>
					{navLinks.map((link) =>
						link.external ? (
							<li key={link.name}>
								<Link
									href={link.href}
									target="_blank"
									rel="noreferrer noopener"
									className="w-full px-4 py-2 border-b border-accent-3 flex justify-center items-center hover:bg-black/[0.04]"
									onClick={handleToggle}
								>
									{link.name}
								</Link>
							</li>
						) : (
							<li key={link.name}>
								<a
									href={link.href}
									className="w-full px-4 py-2 border-b border-accent-3 flex justify-center items-center hover:bg-black/[0.04]"
									onClick={handleToggle}
								>
									{link.name}
								</a>
							</li>
						),
					)}
				</ul>
			</div>
		</nav>
	);
};

export default GiveawaysNavbar;
