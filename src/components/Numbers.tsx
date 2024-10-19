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
import { ArrowUpRight } from "lucide-react";

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
      number: 70000,
      icon: SiX,
      color: "accent-2",
      href: "https://x.com/wemakedevs",
    },
    {
      name: "LinkedIn",
      number: 25000,
      icon: SiLinkedin,
      color: "accent-3",
      href: "https://linkedin.com/company/wemakdevs",
    },
    {
      name: "Telegram",
      number: 30000,
      icon: SiTelegram,
      color: "accent-4",
      href: "https://t.me/WeMakeDevs",
    },
  ];

  return (
    <section
      className={cn(className, "my-16 scroll-m-[100px]")}
      {...props}
      id='numbers'
    >
      <ViewContainer className='relative'>
        <h2 className='text-center text-4xl md:text-5xl mx-auto'>
          Numbers say it all{" "}
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-12'>
          {numbers.map((item, index) => (
            <Link
              href={item.href}
              className='group bg-white shadow-lg hover:shadow-xl transition-shadow border border-foreground/10 rounded-xl p-5 pb-4 relative group overflow-clip'
              key={index}
            >
              <div
                className={`duration-300 z-0 absolute bottom-0 left-0 w-full h-full transition-transform origin-top group-hover:origin-bottom scale-y-0 group-hover:scale-y-100 bg-${item.color}`}
              ></div>
              <item.icon className='opacity-80 z-10' size={28} />
              <div className='mt-16 md:mt-24 group-hover:-translate-y-8 transition-transform'>
                <h3 className='font-body font-medium relative z-10'>
                  {item.name}
                </h3>
                <p className='relative text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-title font-medium mt-3 z-10'>
                  <CountUp
                    end={item.number}
                    start={0}
                    suffix='+'
                    enableScrollSpy
                  >
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp>
                </p>
              </div>
              <p className='absolute bottom-0 left-5 translate-y-[22px] group-hover:-translate-y-2.5 transition-all flex gap-2 items-center font-title font-semibold text-lg md:text-xl opacity-75 mix-blend-multiply'>
                Join <ArrowUpRight strokeWidth={2} />
              </p>
            </Link>
          ))}
        </div>
      </ViewContainer>
    </section>
  );
};

export default Numbers;
