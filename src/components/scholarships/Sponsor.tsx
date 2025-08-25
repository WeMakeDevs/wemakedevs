import { cerebrasLogo } from "@/assets/images";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ViewContainer } from "../ui/view-container";

const Sponsor = () => {
	return (
		<div className="bg-[#fde6d4] py-16">
			<ViewContainer className="bg-white p-10 rounded-2xl shadow-2xl space-y-6">
				<div className="flex items-center justify-between">
					<Image
						src={cerebrasLogo}
						alt="Cerebras Logo"
						className="w-24"
					/>
					<Link
						href="https://www.cerebras.ai/"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-[#f15927] text-white px-4 py-3 font-semibold hover:bg-[#f15927]/80 transition-all duration-300 rounded-[8px] hidden md:block"
					>
						Check out Cerebras
					</Link>
				</div>
				<h2 className="text-4xl font-bold font-title">
					At the forefront of AI innovation.
				</h2>
				<div className="space-y-2 font-medium">
					<p className="">
						This KubeCon Europe scholarship fund is made possible by
						our amazing sponsor: Cerebras Cerebras is the company
						behind the world's fastest AI accelerator, the
						Wafer-Scale Engine, a chip the size of an iPad designed
						to train AI models at unprecedented speed and scale.
						Their mission is to radically reduce the time it takes
						to train the largest models in the world.
					</p>
					<p className="">
						As part of their commitment to open access, Cerebras now
						offers a free cloud platform where anyone, from
						researchers to indie builders can run and experiment
						with powerful AI models instantly.
					</p>
					<p className="">
						To apply, first sign up on Cerebras. It takes 10
						seconds. No credit card. No waitlist. Just fast, free AI
						compute.
					</p>
				</div>
				<Link
					href="#"
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
