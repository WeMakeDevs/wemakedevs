import About from "@/components/About";
import Hackathons from "@/components/Hackathons";
import Header from "@/components/Header";
import Numbers from "@/components/Numbers";
import Testimonials from "@/components/Testimonials";
import Meetups from "@/components/Meetups";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Testimonials />
      <Newsletter />
      <Numbers />
      <Hackathons />
      <Meetups />
      <Faq />
      <Partners />
    </div>
  );
}
