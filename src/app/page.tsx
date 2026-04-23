import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hackathons from "@/components/Hackathons";
import Header from "@/components/Header";
import Initiatives from "@/components/Initiatives";
import Meetups from "@/components/Meetups";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Numbers from "@/components/Numbers";
import Partners from "@/components/Partners";
import SponsorTestimonialsScroll from "@/components/SponsorTestimonialsScroll";
import Testimonials from "@/components/Testimonials";
import GiveawayBar from "@/components/GiveawayBar";
import { FAQS } from "@/constants";

const GIVEAWAY_END_DATE = "2026-04-26T23:59:59";

export default function Home() {
	const showGiveawayBar = new Date() < new Date(GIVEAWAY_END_DATE);

	return (
		<div className={showGiveawayBar ? "pb-[5.5rem] sm:pb-24" : undefined}>
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
			<Footer />
			{showGiveawayBar && <GiveawayBar />}
		</div>
	);
}
