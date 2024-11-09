import About from "@/components/About";
import Hackathons from "@/components/Hackathons";
import Header from "@/components/Header";
import Numbers from "@/components/Numbers";
import Testimonials from "@/components/Testimonials";
import Meetups from "@/components/Meetups";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import { FAQS } from "@/constants";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Testimonials />
      <Newsletter />
      <Numbers />
      <Hackathons />
      <Meetups />
      <Faq FAQS={FAQS} />
      <Partners />
      <Footer />

      <Banner className='flex items-center text-base md:text-lg font-medium'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <span className=''>
            Registrations for HackFrost Winter Hackathon are open!
          </span>
          <Link
            href='/hackathons/hackfrost24'
            className={cn(
              buttonVariants(),
              "mt-4 md:mt-0 md:ml-8 px-3 py-2 bg-white hover:bg-primary text-primary hover:text-white w-full md:w-fit"
            )}
            target='_blank'
            rel='noopener noreferrer'
          >
            Know more!
          </Link>
        </div>
      </Banner>
    </div>
  );
}
