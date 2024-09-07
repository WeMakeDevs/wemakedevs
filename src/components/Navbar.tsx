"use client";

import { useState } from "react";
import { logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { ViewContainer } from "./ui/view-container";
import { Button, buttonVariants } from "./ui/button";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { navLinksType } from "@/types";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks: navLinksType = [
    {
      name: "Header",
      url: "/#header",
      type: "link",
    },
    {
      name: "About",
      url: "/#about",
      type: "link",
    },
    {
      name: "Testimonials",
      url: "/#testimonials",
      type: "link",
    },
    {
      name: "Sponsors",
      url: "/#sponsors",
      type: "link",
    },
    {
      name: "FAQs",
      url: "/#faq",
      type: "link",
    },
  ];

  return (
    <nav className=''>
      <ViewContainer className='flex justify-between items-center h-20 relative overflow-x-clip'>
        <Link href='https://wemakedevs.org/'>
          <Image src={logo} alt='WeMakeDevs Logo' className='w-12' />
        </Link>
        <Button
          variant='outline'
          size='icon'
          aria-label='Toggle menu button'
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className='md:hidden'
        >
          {isOpen ? <Cross2Icon /> : <HamburgerMenuIcon />}
        </Button>
        <ul
          className={cn(
            "flex flex-col md:flex-row gap-4 justify-center items-center transition-[left] absolute md:static w-screen md:w-auto nav-h-mobile md:h-auto top-20",
            "bg-background transition-[left] ease-in-out duration-300 px-5 md:px-0",
            isOpen && "left-0",
            !isOpen && "left-full"
          )}
        >
          {navLinks.map((link, index) => (
            <li key={index} className='w-full'>
              <Link
                href={link.url}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "default" }),
                  "w-full md:w-auto"
                )}
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
                target={link.openInNewTab ? "_blank" : ""}
                rel={link.openInNewTab ? "noreferrer noopener" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className='w-full'>
            <Link
              href='#hackathons'
              className={cn(buttonVariants({ variant: "default" }), "w-full")}
            >
              Hackathons
            </Link>
          </li>
        </ul>
      </ViewContainer>
    </nav>
  );
};

export default Navbar;
