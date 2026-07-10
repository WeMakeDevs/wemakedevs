import Image from "next/image";
import { images } from "../images";

const links = [
	{ label: "About", href: "#top" },
	{ label: "Hackathons", href: "#hubs" },
	{ label: "Resources", href: "#builder" },
	{ label: "Register", href: "#register" },
	{ label: "FAQ", href: "#faqs" },
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
						<span className="font-heading font-bold text-heading">
							Next Gen Hacks 2026
						</span>
					</div>
					<div className="flex items-center gap-6 text-sm text-body">
						{links.map((l) => (
							<a
								key={l.href}
								href={l.href}
								className="hover:text-orange transition-colors"
							>
								{l.label}
							</a>
						))}
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
