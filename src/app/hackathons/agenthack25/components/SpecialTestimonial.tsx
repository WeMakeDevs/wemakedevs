import Image from "next/image";
import { images } from "../images";

const AgentHackSpecialTestimonial = () => {
	return (
		<div className="space-y-10 my-10 md:my-20">
			<Image
				src={images.portiaLogo}
				alt="Portia Logo"
				className="w-32 mx-auto"
			/>
			<div className="space-y-4 text-lg md:text-xl font-medium max-w-4xl mx-auto text-center">
				<p className="">
					🚀 What an incredible journey AgentHack 2025 has been!
					Seeing developers from around the world come together to
					build innovative AI agents using Portia was truly inspiring.
					The creativity and technical excellence displayed by all
					participants exceeded our expectations. 💡
				</p>
				<p className="">
					From autonomous workflow systems to intelligent automation
					tools, the projects showcased the immense potential of
					controllable AI agents. It's amazing to witness how our
					platform empowers developers to create solutions that can
					make a real impact in their communities and industries. 🌟
				</p>
				<p className="">
					Congratulations to all the winners and participants! Your
					innovation drives the future of AI development. 🎉
				</p>
			</div>
			<div className="flex items-center gap-2 mx-auto w-fit">
				<Image
					src={images.portiaTestimonialAuthor}
					alt="Mounir Mouawad"
					className="w-14 h-14 rounded-full"
				/>
				<div className="">
					<p className="text-lg font-semibold">Mounir Mouawad</p>
					<p className="text-sm font-medium text-gray-500">
						CEO, Portia AI
					</p>
				</div>
			</div>
		</div>
	);
};

export default AgentHackSpecialTestimonial;
