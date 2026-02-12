import Banner from "@/components/Banner";
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
import { buttonVariants } from "@/components/ui/button";
import { FAQS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
			<Footer />

			<Banner className="flex items-center text-base md:text-lg font-medium">
				<div className="flex flex-col md:flex-row items-center justify-center">
					<span className="text-white">
						Hack All February is here! Join all 4 hackathons to win a Samsung Galaxy Flip 7 + $40,000+ in prizes!{" "}
					</span>
					<Link
						href="/february"
						className={cn(
							buttonVariants(),
							"mt-4 md:mt-0 md:ml-8 px-3 py-2 bg-white hover:bg-white/80 text-[#1a2047] w-full md:w-fit",
						)}
					>
						Learn More
					</Link>
				</div>
			</Banner>
		</div>
	);
}
