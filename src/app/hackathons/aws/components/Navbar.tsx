"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "../data";
import { images } from "../images";

export default function Navbar() {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [light, setLight] = useState(false);

	useEffect(() => {
		try {
			setLight(localStorage.getItem("aws-theme") === "light");
		} catch {}
	}, []);

	const toggleTheme = () => {
		const next = !light;
		setLight(next);
		document.documentElement.classList.toggle("light", next);
		try {
			localStorage.setItem("aws-theme", next ? "light" : "dark");
		} catch {}
	};

	return (
		<header className="fixed top-0 inset-x-0 z-50">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
				<nav className="glass rounded-2xl shadow-lg shadow-black/20">
					<div className="flex h-16 items-center justify-between px-4 sm:px-5">
						{/* Co-branded identity */}
						<a href="#top" className="flex items-center gap-3 shrink-0">
							<span className="inline-flex items-center gap-2.5">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={images.wemakedevsLogo.src}
									alt="WeMakeDevs"
									className="h-7 w-auto"
								/>
								<span className="hidden sm:block font-heading font-extrabold text-heading tracking-tight leading-none">
									WeMakeDevs
								</span>
							</span>
							<span className="hidden sm:block h-7 w-px bg-hair/10" />
							<span className="flex items-center gap-2">
								<Image
									src={images.awsWhite}
									alt="AWS"
									className="logo-dark h-6 w-auto"
								/>
								<Image
									src={images.awsBlack}
									alt="AWS"
									className="logo-light h-6 w-auto"
								/>
							</span>
						</a>

						{/* Center links */}
						<div className="hidden md:flex items-center gap-8 text-sm font-medium text-body">
							{navLinks.map((l) => (
								<a
									key={l.href}
									href={l.href}
									className="navlink hover:text-heading transition-colors"
								>
									{l.label}
								</a>
							))}
						</div>

						{/* Right actions */}
						<div className="flex items-center gap-2.5">
							<button
								type="button"
								onClick={toggleTheme}
								className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-hair/10 text-ash transition-colors hover:text-orange hover:border-orange/50"
								aria-label="Toggle theme"
							>
								{light ? (
									<svg
										className="h-5 w-5"
										fill="none"
										stroke="currentColor"
										strokeWidth={1.8}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
										/>
									</svg>
								) : (
									<svg
										className="h-5 w-5"
										fill="none"
										stroke="currentColor"
										strokeWidth={1.8}
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="4" />
										<path
											strokeLinecap="round"
											d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
										/>
									</svg>
								)}
							</button>
							<a
								href="#register"
								className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-orange px-4 py-2 text-sm font-semibold text-ink shadow-lg shadow-orange/20 transition-all duration-200 hover:bg-rust hover:text-white hover:scale-[1.03] active:scale-[0.98]"
							>
								Register
								<svg
									className="h-4 w-4"
									viewBox="0 0 20 20"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										d="M4 10h12M11 5l5 5-5 5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
							<button
								type="button"
								onClick={() => setMobileMenu((v) => !v)}
								className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-hair/10 text-body"
								aria-label="Menu"
							>
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										d={mobileMenu ? "M6 6l12 12M18 6L6 18" : "M4 6h16M4 12h16M4 18h16"}
									/>
								</svg>
							</button>
						</div>
					</div>

					{mobileMenu && (
						<div className="md:hidden px-5 pb-4 flex flex-col gap-1 text-sm font-medium text-body border-t border-hair/10 pt-3">
							{navLinks.map((l) => (
								<a
									key={l.href}
									href={l.href}
									onClick={() => setMobileMenu(false)}
									className="py-2 hover:text-orange"
								>
									{l.label}
								</a>
							))}
							<a
								href="#register"
								onClick={() => setMobileMenu(false)}
								className="mt-2 inline-flex justify-center rounded-lg bg-orange px-4 py-2 font-semibold text-ink"
							>
								Register
							</a>
						</div>
					)}
				</nav>
			</div>
		</header>
	);
}
