import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hackathons from "@/components/Hackathons";
import Header from "@/components/Header";
import Initiatives from "@/components/Initiatives";
import Meetups from "@/components/Meetups";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Numbers from "@/components/Numbers";
import OrchestrationBanner from "@/components/OrchestrationBanner";
import Partners from "@/components/Partners";
import SponsorTestimonialsScroll from "@/components/SponsorTestimonialsScroll";
import Testimonials from "@/components/Testimonials";
import { FAQS } from "@/constants";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Header />
			<SponsorTestimonialsScroll />
			<Numbers />
			<Testimonials />
			<Newsletter />
			<Hackathons />
			<Meetups />
			<Initiatives />
			<Faq FAQS={FAQS} />
			<Partners />
			<OrchestrationBanner />
			<Footer />
		</div>
	);
}
