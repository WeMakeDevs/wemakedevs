import Image from "next/image";
import { orHiltch } from "../images/testimonials";

const AccomplishSpecialTestimonial = () => {
	return (
		<div className="space-y-10 my-10 md:my-20">
			<div className="space-y-4 text-lg md:text-xl font-medium max-w-4xl mx-auto text-center text-slate-200 font-mono">
				<p>
					We expected a hackathon; we got a high-octane engineering sprint.
					Kunal and the WeMakeDevs team didn&apos;t just bring us visibility,
					they brought us contributors. For Accomplish.ai, the impact was
					immediate: 5,000+ GitHub stars in a week and thousands of developers
					diving into our actual issues.
				</p>
				<p>
					The volume of PRs was staggering; we saw bugs squashed and new
					features shipped faster than we ever imagined. Beyond the code, the
					cultural ripple effect has been huge, people are sharing their
					Accomplish setups across social media, and we&apos;ve gained long-term
					contributors who are still active in our Discord today. If you want
					to move the needle on your product development while building a
					global brand, WeMakeDevs is the ultimate partner.
				</p>
			</div>
			<div className="flex items-center gap-2 mx-auto w-fit">
				<Image
					src={orHiltch}
					alt="Or Hiltch"
					className="w-14 h-14 rounded-full border-2 border-sky-500/50"
				/>
				<div>
					<p className="text-lg font-semibold text-slate-100 font-mono">
						Or Hiltch
					</p>
					<p className="text-sm font-medium text-slate-400 font-mono">
						CEO, Accomplish.ai
					</p>
				</div>
			</div>
		</div>
	);
};

export default AccomplishSpecialTestimonial;
