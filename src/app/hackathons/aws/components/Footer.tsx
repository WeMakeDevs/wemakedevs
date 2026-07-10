import Image from "next/image";
import { images } from "../images";

const links = [
	{ label: "About", href: "#top", newTab: false },
	{ label: "Hackathons", href: "#hubs", newTab: false },
	{ label: "Resources", href: "#builder", newTab: false },
	{ label: "Register", href: "#register", newTab: false },
	{ label: "FAQ", href: "#faqs", newTab: false },
	{ label: "Rules", href: "/aws/rules", newTab: true },
];

export default function Footer() {
	return (
		<footer className="border-t border-hair/10">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
				<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
					<div className="flex items-center gap-3">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={images.wemakedevsLogo.src}
							alt="WeMakeDevs"
							className="h-7 w-auto"
						/>
						<span className="h-6 w-px bg-hair/10" />
						<Image src={images.awsWhite} alt="AWS" className="logo-dark h-6 w-auto" />
						<Image src={images.awsBlack} alt="AWS" className="logo-light h-6 w-auto" />
					</div>
					<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-body">
						{links.map((l) =>
							l.newTab ? (
								<a
									key={l.href}
									href={l.href}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-1.5 rounded-lg border border-orange/40 bg-orange/10 px-3 py-1.5 font-medium text-orange transition-colors hover:bg-orange hover:text-ink"
								>
									{l.label}
									<svg
										className="h-3.5 w-3.5"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M7 17 17 7M9 7h8v8"
										/>
									</svg>
								</a>
							) : (
								<a
									key={l.href}
									href={l.href}
									className="hover:text-orange transition-colors"
								>
									{l.label}
								</a>
							),
						)}
					</div>
				</div>
				<div className="mt-8 border-t border-hair/10 pt-6 text-center sm:text-left">
					<p className="text-xs font-mono text-ash">
						© 2026 AWS Next Gen Hacks · In partnership with{" "}
						<a
							href="https://wemakedevs.org"
							target="_blank"
							rel="noopener noreferrer"
							className="text-orange hover:underline"
						>
							WeMakeDevs
						</a>
						. Built for developers.
					</p>
				</div>
			</div>
		</footer>
	);
}
