import Image from "next/image";
import { images } from "../images";
import { matveyKukuy } from "../images/testimonials";

const TwoFastTwoMcpSpecialTestimonial = () => {
	return (
		<div className="space-y-10 my-10 md:my-20">
			<div className="max-w-2xl mx-auto rounded-xl overflow-hidden border border-orange-500/20 bg-slate-900/40">
				<Image
					src={images.archestraStarHistory}
					alt="Archestra GitHub star history"
					className="w-full h-auto"
					width={800}
					height={533}
				/>
			</div>
			<div className="space-y-4 text-lg md:text-xl font-medium max-w-4xl mx-auto text-center text-slate-200 font-mono">
				<p>
					Kunal and his team didn&apos;t just host a hackathon; they built a
					bridge between our tech and thousands of high-level developers. The
					results spoke for themselves: 3,000+ GitHub stars and a community
					of builders actually orchestrating MCP agents in real-time.
				</p>
				<p>
					The sophisticated projects we saw come out of this event proved
					that WeMakeDevs attracts a higher tier of talent. If you&apos;re
					looking to get your AI tools into the hands of global builders and
					see what they can really do, look no further.
				</p>
			</div>
			<div className="flex items-center gap-2 mx-auto w-fit">
				<Image
					src={matveyKukuy}
					alt="Matvey Kukuy"
					className="w-14 h-14 rounded-full border-2 border-orange-500/50"
				/>
				<div>
					<p className="text-lg font-semibold text-slate-100 font-mono">
						Matvey Kukuy
					</p>
					<p className="text-sm font-medium text-slate-400 font-mono">
						CEO, Archestra
					</p>
				</div>
			</div>
		</div>
	);
};

export default TwoFastTwoMcpSpecialTestimonial;
