"use client";

import { useEffect, useState } from "react";
import { logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { ViewContainer } from "./ui/view-container";
import { NavContainer } from "./ui/nav-container";
import { Button, buttonVariants } from "./ui/button";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { navLinksType } from "@/types";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  ];

  return (
    <nav id='nav' className='fixed mx-auto w-full z-[100] md:py-4'>
      <NavContainer
        className={cn(
          "items-center justify-between rounded transition-all py-3",
          isScrolled && "bg-white shadow-lg",
          "hidden md:flex"
        )}
      >
        <Link href='#' className='flex items-center gap-4'>
          <Image src={logo} alt='WeMakeDevs Logo' className='w-12' />
          <span
            className={cn(
              "font-title text-lg md:text-xl text-primary font-semibold"
            )}
          >
            WeMakeDevs
          </span>
        </Link>
        <ul className='flex lg:gap-2'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "px-4 py-2 text-foreground"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href='#hackathons'
          className={cn(
            buttonVariants({
              variant: "outline",
            }),
            "hover:bg-primary hover:text-white hover:border-primary font-semibold bg-transparent py-2 px-4"
          )}
        >
          Hackathons
        </Link>
      </NavContainer>
      <div
        className={cn(
          "px-5 py-2 md:hidden",
          isOpen && "pb-4",
          "bg-white shadow-md "
        )}
      >
        <div className='flex w-full justify-between items-center'>
          <Link href='#' className='flex items-center gap-4'>
            <Image src={logo} alt='WeMakeDevs Logo' className='w-12' />{" "}
            <span className='font-title text-lg md:text-xl text-primary font-semibold'>
              WeMakeDevs
            </span>
          </Link>
          <Button
            variant='outline'
            size='icon'
            aria-label='Menu button'
            className='bg-transparent'
          >
            {isOpen ? (
              <Cross2Icon onClick={handleToggle} />
            ) : (
              <HamburgerMenuIcon onClick={handleToggle} />
            )}
          </Button>
        </div>
        <ul
          className={cn("flex flex-col gap-4 mt-4", isOpen ? "flex" : "hidden")}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className={cn(
                  "w-full px-4 py-2 border-b border-accent-3 hover:bg-black/[0.04] bg-transparent flex justify-center items-center"
                )}
                onClick={handleToggle}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
