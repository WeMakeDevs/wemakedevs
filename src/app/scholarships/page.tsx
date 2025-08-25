import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Carousel from "@/components/scholarships/Carousel";
import Dates from "@/components/scholarships/Dates";
import ScholarshipsHeader from "@/components/scholarships/Header";
import ScholarshipsNavbar from "@/components/scholarships/Navbar";
import Sponsor from "@/components/scholarships/Sponsor";
import WhyApply from "@/components/scholarships/WhyApply";
import { SCHOLARSHIP_FAQS } from "@/constants";

const Scholarships = () => {
	return (
		<div>
			<ScholarshipsNavbar />
			<ScholarshipsHeader />
			<WhyApply />
			<Sponsor />
			<Dates />
			<Carousel />
			<Newsletter />
			<Faq
				FAQS={SCHOLARSHIP_FAQS}
				className="my-0 md:my-0 py-10 bg-white"
			/>
			<Footer />
		</div>
	);
};

export default Scholarships;
