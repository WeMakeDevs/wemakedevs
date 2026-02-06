import Image from "next/image";
import { images } from "../images";
import { juanPa } from "../images/testimonials";

const AssembleSpecialTestimonial = () => {
	return (
		<div className="space-y-10 my-10 md:my-20">
			<Image
				src={images.clineLogo}
				alt="Cline Logo"
				className="w-28 mx-auto"
			/>
			<div className="space-y-4 text-lg md:text-xl font-medium max-w-4xl mx-auto text-center text-gray-700">
				<p>
					Working with WeMakeDevs on our hackathon was one of the best
					partnership decisions we made. The turnout exceeded anything we
					expected, with real, engaged builders who showed up ready to
					create. That kind of audience doesn't happen by accident. It's
					the result of years of authentic community building and the
					trust they've earned with developers.
				</p>
				<p>
					From a sponsor perspective, they made our involvement
					effortless. Clear communication, realistic expectations, and
					they actually delivered on what they promised. They helped us
					make the impossible possible. Happy to recommend them to anyone
					looking to connect with developers in a meaningful way.
				</p>
			</div>
			<div className="flex items-center gap-3 mx-auto w-fit">
				<Image
					src={juanPa}
					alt="Juan Pa"
					className="w-14 h-14 rounded-full border-2 border-cyan-500/50 object-cover"
				/>
				<div>
					<p className="text-lg font-semibold text-gray-900">Juan Pa</p>
					<p className="text-sm font-medium text-gray-500">
						Developer Relations, Cline
					</p>
				</div>
			</div>
		</div>
	);
};

export default AssembleSpecialTestimonial;
