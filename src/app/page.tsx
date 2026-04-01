import { DATA as openmetadataHackathon } from "@/app/hackathons/openmetadata/data";
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
import UpcomingHackathonRegisterBar from "@/components/UpcomingHackathonRegisterBar";
import { FAQS } from "@/constants";
import { cn } from "@/lib/utils";

export default function Home() {
	const showOpenMetadataRegisterBar =
		new Date() < new Date(openmetadataHackathon.endDate);

	return (
		<div
			className={cn(
				showOpenMetadataRegisterBar && "pb-[5.5rem] sm:pb-24",
			)}
		>
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
			{showOpenMetadataRegisterBar && (
				<UpcomingHackathonRegisterBar
					registerUrl={openmetadataHackathon.cta.href}
					hackathonPath={`/hackathons/${openmetadataHackathon.slug}`}
					hackathonTitle={openmetadataHackathon.title}
				/>
			)}
		</div>
	);
}
