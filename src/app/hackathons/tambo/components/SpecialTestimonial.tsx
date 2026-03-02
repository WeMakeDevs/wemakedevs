import Image from "next/image";
import { michaelMagan } from "../images/testimonials";

const TamboSpecialTestimonial = () => {
	return (
		<div className="space-y-10 my-10 md:my-20">
			<div className="space-y-4 text-lg md:text-xl font-medium max-w-4xl mx-auto text-center text-slate-200 font-mono">
				<p>
					Working with WeMakeDevs was a game-changer for Tambo. What we
					imagined, Kunal and his team delivered, and then some. The results
					from our hackathon were staggering: we gained over 7,000 GitHub
					stars in just one week and saw thousands of developers actively
					building and engaging in our Discord.
				</p>
				<p>
					The quality of the projects produced was incredible. If you are
					looking to tap into a global developer ecosystem, gather real-world
					feedback, and discover innovative use cases for your product, I
					highly recommend partnering with WeMakeDevs. They don&apos;t just run
					events; they build movements.
				</p>
			</div>
			<div className="flex items-center gap-2 mx-auto w-fit">
				<Image
					src={michaelMagan}
					alt="Michael Magan"
					className="w-14 h-14 rounded-full border-2 border-amber-500/50"
				/>
				<div>
					<p className="text-lg font-semibold text-slate-100 font-mono">
						Michael Magan
					</p>
					<p className="text-sm font-medium text-slate-400 font-mono">
						CEO, Tambo
					</p>
				</div>
			</div>
		</div>
	);
};

export default TamboSpecialTestimonial;
