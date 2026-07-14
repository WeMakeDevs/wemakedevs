import Image from "next/image";
import { images } from "../images";
import { mikePiccolo } from "../images/testimonials";

const MotiaSpecialTestimonial = () => {
	return (
		<div className="space-y-10 my-10 md:my-20">
			<div className="bg-white rounded-lg px-4 py-3 flex w-fit mx-auto">
				<Image
					src={images.motiaLogo}
					alt="Motia Logo"
					className="w-32"
				/>
			</div>
			<div className="space-y-4 text-lg md:text-xl font-medium max-w-4xl mx-auto text-center text-slate-200 font-mono">
				<p>
					Working with WeMakeDevs for #MotiaHack25 was amazing! This
					partnership went way beyond what we expected. The quality of
					projects was impressive, thousands of developers actually
					understood what we were building and shipped real solutions.
					Kunal and the team brought exactly the kind of engaged builders
					we wanted to reach.
				</p>
			</div>
			<div className="flex items-center gap-2 mx-auto w-fit">
				<Image
					src={mikePiccolo}
					alt="Mike Piccolo"
					className="w-14 h-14 rounded-full border-2 border-green-500/50"
				/>
				<div>
					<p className="text-lg font-semibold text-slate-100 font-mono">
						Mike Piccolo
					</p>
					<p className="text-sm font-medium text-slate-400 font-mono">
						Founder, Motia
					</p>
				</div>
			</div>
		</div>
	);
};

export default MotiaSpecialTestimonial;
