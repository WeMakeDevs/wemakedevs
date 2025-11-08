import Image from "next/image";
import { images } from "../images";

const FutureStackSpecialTestimonial = () => {
	return (
		<div className="my-10 md:my-20">
			{/* Yash Khare Testimonial */}
			<div className="space-y-10 border-b border-gray-200 pb-10">
				<Image
					src={images.metaLogo}
					alt="Meta Logo"
					className="w-32 mx-auto"
				/>
				<div className="space-y-4 text-lg md:text-xl font-medium max-w-4xl mx-auto text-center">
					<p className="">
						The WeMakeDevs hackathon provided a fantastic platform
						for developers and students to showcase their skills and
						learn from each other. It was an amazing experience for
						me to be invited for a QA session. The questions ranged
						from tactical hackathon strategies to AI career advice,
						which made for some interesting conversations. It was
						cool to hear about the projects people were working on,
						like someone leveraging Llama models for database schema
						generation. Overall, it was a great opportunity to share
						knowledge and see innovative ideas being built.
					</p>
				</div>
				<div className="flex items-center gap-2 mx-auto w-fit">
					<Image
						src={images.yashKhare}
						alt="Yash Khare"
						className="w-14 h-14 rounded-full"
					/>
					<div className="">
						<p className="text-lg font-semibold">Yash Khare</p>
						<p className="text-sm font-medium text-gray-500">
							Partner Engineer, GenAI, Meta
						</p>
					</div>
				</div>
			</div>

			{/* Sarah Chieng Testimonial */}
			<div className="space-y-10 border-t border-gray-200 pt-10">
				<Image
					src={images.cerebrasLogo}
					alt="Cerebras Logo"
					className="w-32 mx-auto"
				/>
				<div className="space-y-4 text-lg md:text-xl font-medium max-w-4xl mx-auto text-center">
					<p className="">
						Working with WeMakeDevs was such a great experience! The
						energy from the community was unreal, over 5,500
						participants and 7,000+ API signups in just one
						hackathon. We loved seeing how creative the projects
						were and how quickly developers picked up Cerebras tech
						to build real AI use cases. Huge shoutout to the
						WeMakeDevs team, super passionate, easy to work with,
						and genuinely care about empowering builders.
					</p>
				</div>
				<div className="flex items-center gap-2 mx-auto w-fit">
					<Image
						src={images.sarahChieng}
						alt="Sarah Chieng"
						className="w-14 h-14 rounded-full"
					/>
					<div className="">
						<p className="text-lg font-semibold">Sarah Chieng</p>
						<p className="text-sm font-medium text-gray-500">
							Head of DevX, Cerebras Systems
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FutureStackSpecialTestimonial;
