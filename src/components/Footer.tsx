import { cn } from "@/lib/utils";
import { FooterLinkSection, FooterSocialLink, GeneralComponent } from "@/types";
import { ViewContainer } from "./ui/view-container";
import Image from "next/image";
import { logo } from "@/assets/images";
import {
  SiX,
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
  SiTelegram,
  SiGmail,
  SiHashnode,
  SiThreads,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

const footerSocialLinks: FooterSocialLink[] = [
  {
    name: "YouTube",
    href: "https://youtube.com/WeMakeDevs",
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
  {
    name: "Hashnode",
    href: "#",
    icon: SiHashnode,
  },
  {
    name: "Threads",
    href: "https://www.threads.net/@wemakedevs",
    icon: SiThreads,
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
        name: "Newsletter",
        href: "/#newsletter",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Discord",
        href: "https://discord.gg/wemakedevs",
      },
      {
        name: "Telegram",
        href: "https://t.me/WeMakeDevs",
      },
      {
        name: "Blog",
        href: "#",
      },
    ],
  },
  {
    title: "Events",
    links: [
      {
        name: "Hackathons",
        href: "/#hackathons",
      },
      {
        name: "Meetups",
        href: "/#meetups",
      },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        name: "Twitter",
        href: "https://twitter.com/WeMakeDevs",
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/company/wemakedevs/",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/wemakedevs/",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "contact@wemakedevs.org",
        href: "mailto:contact@wemakedevs.org",
      },
    ],
  },
];

const Footer = ({ className, ...props }: GeneralComponent) => {
  return (
    <footer
      className={cn(
        className,
        "border-t border-foreground/25 pt-8 py-12 bg-[#112130] relative"
      )}
      {...props}
    >
      <ViewContainer className='space-y-12'>
        <div className='flex md:justify-between gap-10 flex-wrap justify-start'>
          {footerLinks.map((section, index) => (
            <div className='space-y-7' key={index}>
              <h3 className='font-semibold text-white border-b-2 w-fit border-accent-4'>
                {section.title}
              </h3>
              <ul className='space-y-4'>
                {section.links.map((link, index2) => (
                  <li key={index2} className='relative group w-fit'>
                    <Link
                      href={link.href}
                      className='text-white text-base md:text-lg font-medium'
                    >
                      {link.name}
                    </Link>
                    <div className='origin-right group-hover:origin-left absolute w-full h-[3px] bottom-0 scale-x-0 group-hover:scale-x-100 left-0 transition-transform bg-accent-4'></div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex items-center flex-wrap gap-10 justify-between py-6 border-t-2 border-b-2 border-white/10'>
          <Link href='/' className='flex items-center gap-4'>
            <Image src={logo} alt='logo' className='w-12' />
            <span
              className={cn(
                "font-title text-lg md:text-xl text-white font-semibold"
              )}
            >
              WeMakeDevs
            </span>
          </Link>
          <ul className='flex gap-4 md:gap-6 list-none flex-wrap'>
            {footerSocialLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target='_blank'
                  className='text-white hover:text-white/50 transition-colors'
                >
                  <link.icon className='w-5 h-5' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className='text-center text-white font-medium font-title'>
          © 2024 WeMakeDevs. All rights reserved.
        </p>
      </ViewContainer>
    </footer>
  );
};

export default Footer;
