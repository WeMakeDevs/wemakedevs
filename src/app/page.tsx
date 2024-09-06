import About from "@/components/About";
import Hackathons from "@/components/Hackathons";
import Header from "@/components/Header";
import Numbers from "@/components/Numbers";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Numbers />
      <Hackathons />
      <Testimonials />
    </div>
  );
}
