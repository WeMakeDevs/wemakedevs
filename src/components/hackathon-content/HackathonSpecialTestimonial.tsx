import { emmanuel, kestraLogo } from "@/assets/images";
import Image from "next/image";

const HackathonSpecialTestimonial = () => {
	return (
		<div className="space-y-10 my-10 md:my-20">
			<Image
				src={kestraLogo}
				alt="Kestra Logo"
				className="w-32 mx-auto"
			/>
			<div className="space-y-4 text-lg md:text-xl font-medium max-w-4xl mx-auto text-center">
				<p className="">
					🌟 Huge thanks to Kunal Kushwaha and the amazing team at
					WeMakeDevs for organizing the very first Hackathon around
					Kestra! With over 2,000 participants all around the world,
					it was an incredible success and a true honor to see such
					brilliant developers using Kestra to create innovative and
					original projects. 🙌
				</p>
				<p className="">
					Congratulations to all the participants of HackFrost Kestra
					❄️ and to the standout teams in categories like Best
					Documentation, Best Sustainability Project, Best Open Source
					Practices, Solo Project Track, AI/ML Project, Best Use of
					Kestra, Best UI/UX Project. 🎉
				</p>
				<p className="">
					What an inspiring milestone for the Kestra community! 🚀
				</p>
			</div>
			<div className="flex items-center gap-2 mx-auto w-fit">
				<Image
					src={emmanuel}
					alt="Emmanuel"
					className="w-14 h-14 rounded-full"
				/>
				<div className="">
					<p className="text-lg font-semibold">Emmanuel Darras</p>
					<p className="text-sm font-medium text-gray-500">
						CEO, Kestra
					</p>
				</div>
			</div>
		</div>
	);
};

export default HackathonSpecialTestimonial;
