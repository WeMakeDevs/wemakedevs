import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";
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
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

const footerLinks = [
  {
    name: "X",
    href: "https://x.com/WeMakeDevs",
    icon: SiX,
  },
  {
    name: "Discord",
    href: "https://discord.gg/weMakeDevs",
    icon: SiDiscord,
  },
  {
    name: "GitHub",
    href: "https://github.com/WeMakeDevs",
    icon: SiGithub,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/WeMakeDevs",
    icon: SiInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/WeMakeDevs",
    icon: SiLinkedin,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/WeMakeDevs",
    icon: SiYoutube,
  },
  {
    name: "Telegram",
    href: "https://t.me/WeMakeDevs",
    icon: SiTelegram,
  },
];

const Footer = ({ className, ...props }: GeneralComponent) => {
  return (
    <footer
      className={cn(
        className,
        "border-t border-foreground/25 py-12 bg-[#112130] relative"
      )}
      {...props}
    >
      {/* <div className='w-full h-36 absolute left-0 top-0 -translate-y-full bg-gradient-to-t from-white to-background -z-10'></div> */}
      <ViewContainer>
        <div className='flex items-center flex-wrap gap-10 justify-between'>
          <div className='flex items-center gap-4'>
            <Image src={logo} alt='logo' className='w-12' />
          </div>
          <ul className='flex gap-4 md:gap-6 list-none'>
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  rel='noopener noreferrer'
                  target='_blank'
                  className='text-white hover:text-background transition-colors'
                >
                  <link.icon className='w-5 h-5' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <p className='text-[20vw] lg:text-[180px] text-center font-extrabold bg-clip-text bg-gradient-to-r from-[#5236e5] via-[#e6b6fa] to-[#fee4fd] text-transparent'>
          wemakedevs
        </p> */}
      </ViewContainer>
    </footer>
  );
};

export default Footer;
