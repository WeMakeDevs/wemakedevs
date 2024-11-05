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
      <Faq FAQS={FAQS} />
      <Partners />
      <Footer />
    </div>
  );
}
