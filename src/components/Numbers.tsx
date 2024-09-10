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
      color: "#93a0f6",
      href: "https://discord.gg/wemakedevs",
    },
    {
      name: "Twitter",
      number: 60000,
      icon: SiX,
      color: "#e7f433",
      href: "https://x.com/wemakedevs",
    },
    {
      name: "LinkedIn",
      number: 20000,
      icon: SiLinkedin,
      color: "#FE446D",
      href: "https://linkedin.com/company/wemakdevs",
    },
    {
      name: "Telegram",
      number: 10000,
      icon: SiTelegram,
      color: "#75dbb6",
      href: "https://t.me/WeMakeDevs",
    },
  ];

  return (
    <section className={cn(className, "my-16")} {...props}>
      <ViewContainer className='relative'>
        <h2 className='text-center text-4xl md:text-5xl'>
          Numbers say it all<span className='text-primary'>_</span>
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12'>
          {numbers.map((item, index) => (
            <Link
              href={item.href}
              className='bg-foreground/[.02] border border-foreground/10 rounded-xl p-5 relative group hover:scale-110 transition-transform hover:rotate-3'
              key={index}
            >
              <div
                className={`absolute top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2 w-[0px] h-[0px] blur-[70px] rounded-full group-hover:w-[50px] group-hover:h-[50px] transition-all`}
                style={{ backgroundColor: item.color }}
              ></div>
              <item.icon className='opacity-80' size={28} />
              <p className='text-4xl md:text-5xl font-title font-medium mt-12 md:mt-20'>
                <CountUp end={item.number} start={0} suffix='+' enableScrollSpy>
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </p>
              <h3 className='font-body font-medium mt-3'>{item.name}</h3>
            </Link>
          ))}
        </div>
      </ViewContainer>
    </section>
  );
};

export default Numbers;
