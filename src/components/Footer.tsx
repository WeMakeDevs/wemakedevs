import { logo } from "@/assets/images";
import { cn } from "@/lib/utils";
import type {
	FooterLinkSection,
	FooterSocialLink,
	GeneralComponent,
} from "@/types";
import {
	SiDiscord,
	SiGithub,
	SiGmail,
	SiInstagram,
	SiLinkedin,
	SiTelegram,
	SiX,
	SiYoutube,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import { ViewContainer } from "./ui/view-container";

const footerSocialLinks: FooterSocialLink[] = [
	{
		name: "YouTube",
		href: "https://youtube.com/@WeMakeDevs",
		icon: SiYoutube,
	},
	{
		name: "LinkedIn",
		href: "https://linkedin.com/company/WeMakeDevs",
		icon: SiLinkedin,
	},
	{
		name: "X",
		href: "https://x.com/WeMakeDevs",
		icon: SiX,
	},
	{
		name: "Instagram",
		href: "https://instagram.com/WeMakeDevs",
		icon: SiInstagram,
	},
	{
		name: "GitHub",
		href: "https://github.com/WeMakeDevs",
		icon: SiGithub,
	},
	{
		name: "Email",
		href: "mailto:contact@wemakedevs.org",
		icon: SiGmail,
	},
	{
		name: "Telegram",
		href: "https://t.me/WeMakeDevs",
		icon: SiTelegram,
	},
	{
		name: "Discord",
		href: "https://discord.gg/weMakeDevs",
		icon: SiDiscord,
	},
];

const footerLinks: FooterLinkSection[] = [
	{
		title: "Organization",
		links: [
			{
				name: "About",
				href: "/#about",
			},
			{
				name: "FAQs",
				href: "/#faq",
			},
			{
				name: "Join",
				href: "/#join",
			},
		],
	},
	{
		title: "Community",
		links: [
			{
				name: "Discord",
				href: "https://discord.gg/wemakedevs",
				opensInNewTab: true,
			},
			{
				name: "Telegram",
				href: "https://t.me/WeMakeDevs",
				opensInNewTab: true,
			},
			{
				name: "Blog",
				href: "https://blog.wemakedevs.org/",
				opensInNewTab: true,
			},
		],
	},
	{
		title: "Events",
		links: [
			{
				name: "Hackathons",
				href: "/hackathons",
				opensInNewTab: true,
			},
			{
				name: "Meetups",
				href: "https://lu.ma/wemakedevs",
				opensInNewTab: true,
			},
		],
	},
	{
		title: "Socials",
		links: [
			{
				name: "Twitter",
				href: "https://twitter.com/WeMakeDevs",
				opensInNewTab: true,
			},
			{
				name: "Linkedin",
				href: "https://www.linkedin.com/company/wemakedevs/",
				opensInNewTab: true,
			},
			{
				name: "Instagram",
				href: "https://www.instagram.com/wemakedevs/",
				opensInNewTab: true,
			},
			{
				name: "YouTube",
				href: "https://youtube.com/@WeMakeDevs",
				opensInNewTab: true,
			},
		],
	},
	{
		title: "Contact",
		links: [
			{
				name: "contact@wemakedevs.org",
				href: "mailto:contact@wemakedevs.org",
				opensInNewTab: true,
			},
		],
	},
];

const Footer = ({ className, ...props }: GeneralComponent) => {
	return (
		<footer
			className={cn(
				className,
				"border-t border-foreground/25 pt-8 py-12 bg-[#112130] relative",
			)}
			{...props}
		>
			<ViewContainer className="space-y-12">
				<div className="flex md:justify-between gap-10 flex-wrap justify-start">
					{footerLinks.map(section => (
						<div className="space-y-7" key={section.title}>
							<h3 className="font-semibold text-white border-b-2 w-fit border-accent-4">
								{section.title}
							</h3>
							<ul className="space-y-4">
								{section.links.map(link => (
									<li
										key={link.name}
										className="relative group w-fit"
									>
										<Link
											href={link.href}
											className="text-white text-base md:text-lg font-medium"
											target={
												link.opensInNewTab
													? "_blank"
													: "_self"
											}
											rel={
												link.opensInNewTab
													? "noreferrer noopener"
													: ""
											}
										>
											{link.name}
										</Link>
										<div className="origin-right group-hover:origin-left absolute w-full h-[3px] bottom-0 scale-x-0 group-hover:scale-x-100 left-0 transition-transform bg-accent-4" />
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="flex items-center flex-wrap gap-10 justify-between py-6 border-t-2 border-b-2 border-white/10">
					<Link href="/" className="flex items-center gap-4">
						<Image src={logo} alt="logo" className="w-12" />
						<span
							className={cn(
								"font-title text-lg md:text-xl text-white font-semibold",
							)}
						>
							WeMakeDevs
						</span>
					</Link>
					<ul className="flex gap-4 md:gap-6 list-none flex-wrap">
						{footerSocialLinks.map(link => (
							<li key={link.name}>
								<Link
									href={link.href}
									target="_blank"
									rel="noreferrer noopener"
									className="text-white hover:text-white/50 transition-colors"
								>
									<link.icon className="w-5 h-5" />
								</Link>
							</li>
						))}
					</ul>
				</div>
				<p className="text-center text-white font-medium font-title">
					© 2024 WeMakeDevs. All rights reserved.
				</p>
			</ViewContainer>
		</footer>
	);
};

export default Footer;
