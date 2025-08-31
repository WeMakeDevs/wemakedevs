import { cerebrasLogo } from "@/assets/images";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ViewContainer } from "../ui/view-container";

const Sponsor = () => {
	return (
		<div className="bg-[#fde6d4] py-16" id="sponsors">
			<ViewContainer className="bg-white p-10 rounded-2xl shadow-2xl space-y-6">
				<Image
					src={cerebrasLogo}
					alt="Cerebras Logo"
					className="w-24"
				/>
				<h2 className="text-4xl font-bold font-title">
					At the forefront of AI innovation.
				</h2>
				<div className="space-y-2 font-medium">
					<p className="text-balance">
						This scholarship fund is made possible by our sponsor
						Cerebras
					</p>
					<p className="">
						Cerebras is the company behind the world's fastest AI
						accelerator, the Wafer-Scale Engine, a chip the size of
						an iPad built to train AI models at unprecedented speed
						and scale. Their mission is to reduce the time it takes
						to train the largest models in the world.
					</p>
					<p className="">
						They also offer a free cloud platform where anyone, from
						researchers to indie builders, can run and experiment
						with powerful AI models instantly.
					</p>
					<p className="">
						To apply for this scholarship, you need to sign up on
						Cerebras. It takes only a few seconds, with no credit
						card or waitlist. When you sign up through us, you also
						get 1.2 million free tokens every day.
					</p>
					<p className="">
						Sign up using the link below to be eligible for the
						scholarship.
					</p>
				</div>
				<Link
					href="https://cloud.cerebras.ai/?referral_code=kunal"
					target="_blank"
					rel="noopener noreferrer"
					className="flex gap-2 items-center w-fit bg-[#f15927] text-white px-4 py-3 font-semibold hover:bg-[#f15927]/80 transition-all duration-300 rounded-[8px]"
				>
					Sign up on Cerebras <ArrowUpRight size={20} />
				</Link>
			</ViewContainer>
		</div>
	);
};

export default Sponsor;
