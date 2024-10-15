import { aboutUfo } from "@/assets/images";
import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";
import { SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import { ViewContainer } from "./ui/view-container";

const About = ({ className, ...props }: GeneralComponent) => {
  return (
    <section {...props} className={cn(className, "my-14")} id='about'>
      <ViewContainer className='relative overflow-clip grid grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2 px-6 md:px-8 py-10 md:py-16 rounded-xl bg-foreground/[.02] border border-foreground/10'>
        <div className='absolute w-[200px] h-[200px] rounded-full bg-primary top-0 left-0 blur-[200px] -z-10'></div>
        <div className='absolute w-[200px] h-[200px] rounded-full bg-secondary bottom-0 right-0 blur-[200px] -z-10'></div>
        <div className='relative hidden md:block'>
          <Image
            src={aboutUfo}
            alt='Ufo Illustration'
            className='w-[300px] absolute md: left-[25px] lg:left-[100px] top-[100px] translate-x-1/2 animate-bounce transition-all duration-slow ease-in-out'
          />
        </div>
        <div className='space-y-8'>
          <h2 className='text-4xl md:text-5xl'>
            About us<span className='text-primary'>_</span>
          </h2>
          <p className='text-lg leading-snug font-medium text-foreground/90'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, inventore numquam voluptate ab maiores non
            laudantium nobis consectetur fugiat aliquam sed officia, iusto animi
            incidunt rem expedita labore. Velit, laborum!
          </p>
          <p className='text-lg leading-snug font-medium text-foreground/90'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            voluptatibus quasi ipsa excepturi id deleniti ad possimus placeat
            officia doloremque, commodi dolore ratione omnis explicabo
            molestias, amet repudiandae ab! Cupiditate minima numquam tempore
            iure officiis vel corporis. Minima autem reprehenderit excepturi
            maxime quibusdam, cupiditate cumque placeat ipsa dolores facere
            eveniet.
          </p>
        </div>
      </ViewContainer>
    </section>
  );
};

export default About;
