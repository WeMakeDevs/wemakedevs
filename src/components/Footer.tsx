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
        "border-t border-foreground/25 py-12 bg-black/10",
      )}
      {...props}
    >
      <ViewContainer>
        <div className="flex items-center  flex-wrap gap-10 justify-between">
          <div className="flex items-center gap-4">
            <Image src={logo} alt="logo" className="w-12" />
            <span className="text-xl font-bold font-title">WeMakeDevs</span>
          </div>
          <ul className="flex gap-4 md:gap-6 list-none">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </ViewContainer>
    </footer>
  );
};

export default Footer;
