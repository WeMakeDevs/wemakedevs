import { aboutImage } from "@/assets/images";
import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";
import Image from "next/image";
import { ViewContainer } from "./ui/view-container";

const About = ({ className, ...props }: GeneralComponent) => {
  return (
    <section {...props} className={cn(className, "my-14")} id='about'>
      <ViewContainer className='relative overflow-clip flex flex-col md:flex-row gap-10 lg:gap-20 p-8 md:p-12 rounded-xl bg-white shadow-xl border border-foreground/10 items-center'>
        <Image
          src={aboutImage}
          alt='About Us Image'
          className='flex-1 max-w-md w-full'
        />
        <div className='space-y-6 flex-1'>
          <h2 className='text-4xl md:text-5xl'>About us</h2>
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
