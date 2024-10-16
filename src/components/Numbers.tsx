"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GeneralComponent, numbersType } from "@/types";
import { ViewContainer } from "./ui/view-container";
import {
  SiDiscord,
  SiLinkedin,
  SiTelegram,
  SiX,
} from "@icons-pack/react-simple-icons";
import CountUp from "react-countup";

const Numbers = ({ className, ...props }: GeneralComponent) => {
  const numbers: numbersType = [
    {
      name: "Discord",
      number: 65000,
      icon: SiDiscord,
      color: "accent-1",
      href: "https://discord.gg/wemakedevs",
    },
    {
      name: "Twitter",
      number: 60000,
      icon: SiX,
      color: "accent-2",
      href: "https://x.com/wemakedevs",
    },
    {
      name: "LinkedIn",
      number: 20000,
      icon: SiLinkedin,
      color: "accent-3",
      href: "https://linkedin.com/company/wemakdevs",
    },
    {
      name: "Telegram",
      number: 10000,
      icon: SiTelegram,
      color: "accent-4",
      href: "https://t.me/WeMakeDevs",
    },
  ];

  return (
    <section className={cn(className, "my-16")} {...props} id='numbers'>
      <ViewContainer className='relative'>
        <h2 className='text-center text-4xl md:text-5xl mx-auto'>
          Numbers say it all{" "}
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12'>
          {numbers.map((item, index) => (
            <Link
              href={item.href}
              className='bg-white shadow-lg hover:shadow-xl transition-shadow border border-foreground/10 rounded-xl p-5 relative group overflow-clip'
              key={index}
            >
              <div
                className={`duration-300 z-0 absolute bottom-0 left-0 w-full h-full transition-transform origin-top group-hover:origin-bottom scale-y-0 group-hover:scale-y-100 bg-${item.color}`}
              ></div>
              <item.icon className='opacity-80 z-10' size={28} />
              <p className='relative text-4xl md:text-5xl font-title font-medium mt-12 md:mt-20 z-10'>
                <CountUp end={item.number} start={0} suffix='+' enableScrollSpy>
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </p>
              <h3 className='font-body font-medium mt-3 relative z-10'>
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
      </ViewContainer>
    </section>
  );
};

export default Numbers;
