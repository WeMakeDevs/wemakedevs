import { heroBg } from "@/assets/images";
import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ViewContainer } from "./ui/view-container";

const Header = ({ className, ...props }: GeneralComponent) => {
  return (
    <header {...props} className={cn(className, "py-10 lg:py-14")}>
      <ViewContainer className='text-center'>
        <Image
          src={heroBg}
          alt='Hero background gradient'
          className='absolute -top-[100px] w-[100%] sm:-top-[200px] sm:w-[80%] md:w-[60%] md:-top-[250px] max-w-[750px] left-1/2 -translate-x-1/2 opacity-40 -z-10'
        />
        <div className='absolute -top-[250px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full blur-[150px] bg-primary'></div>
        <p className='font-title text-xl md:text-2xl text-primary font-semibold'>
          WeMakeDevs
        </p>
        <h1 className='font-title text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wide leading-tight mt-8'>
          Hackathons for <br />
          {"{"}EVERYONE{"}"}
        </h1>
        <p className='max-w-2xl w-full text-sm md:text-lg lg:text-lg mx-auto mt-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos
          similique perspiciatis nam? Ratione numquam sapiente accusamus
          consectetur, debitis reprehenderit eos delectus similique
          perspiciatis.
        </p>
        <div className='mx-auto flex flex-wrap gap-5 md:gap-10 justify-center mt-12'>
          <Link
            href='#hackathons'
            className={cn(
              buttonVariants({ variant: "default" }),
              "flex-auto sm:flex-initial sm:w-auto w-full"
            )}
          >
            Hackathons
          </Link>
          <Link
            href='https://discord.gg/wemakedevs/'
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex gap-2 flex-auto sm:flex-initial sm:w-auto w-full"
            )}
          >
            Join community
          </Link>
        </div>
      </ViewContainer>
    </header>
  );
};

export default Header;
