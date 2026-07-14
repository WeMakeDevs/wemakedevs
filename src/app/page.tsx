import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hackathons from "@/components/Hackathons";
import Header from "@/components/Header";
import Initiatives from "@/components/Initiatives";
import Meetups from "@/components/Meetups";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Partners from "@/components/Partners";
import SignozRegisterBar from "@/components/SignozRegisterBar";
import { FAQS } from "@/constants";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Header />
			<Hackathons />
			<Meetups />
			<Initiatives />
			<Newsletter />
			<Faq FAQS={FAQS} />
			<Partners />
			<Footer />
			<SignozRegisterBar />
		</div>
	);
}
