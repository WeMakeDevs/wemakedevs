import Image from "next/image";
import { images } from "../images";
import { sumit } from "../images/testimonials";

const LingohackSpecialTestimonial = () => {
	return (
		<div className="space-y-10 my-10 md:my-20">
			<Image
				src={images.lingoLogo}
				alt="Lingo Logo"
				className="w-32 mx-auto"
			/>
			<div className="space-y-4 text-lg md:text-xl font-medium max-w-4xl mx-auto text-center">
				<p>
					The hackathon we organised with WeMakeDevs was immensely
					successful. Not only did it bring us thousands of users,
					community members and GitHub stars but we were also very
					impressed with the projects participants submitted and what
					they built. So much so that it was difficult for us to pick
					winners.
				</p>
			</div>
			<div className="flex items-center gap-2 mx-auto w-fit">
				<Image
					src={sumit}
					alt="Sumit Saurabh"
					className="w-14 h-14 rounded-full"
				/>
				<div>
					<p className="text-lg font-semibold">Sumit Saurabh</p>
					<p className="text-sm font-medium text-gray-500">
						Lingo.dev
					</p>
				</div>
			</div>
		</div>
	);
};

export default LingohackSpecialTestimonial;
