import { images as visionImages } from "@/app/hackathons/vision/images";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ViewContainer } from "../ui/view-container";

const Sponsor = () => {
	return (
		<div className="bg-[#fde6d4] py-16" id="sponsors">
			<ViewContainer className="bg-white p-10 rounded-2xl shadow-2xl space-y-6">
				<div className="flex items-center gap-4 flex-wrap">
					<Image
						src={visionImages.sponsorLogo}
						alt="Open Vision Agents by Stream"
						width={200}
						height={50}
						className="h-10 w-auto"
					/>
					<h3 className="text-2xl font-bold font-title tracking-tight">
						Open Vision Agents by Stream
					</h3>
				</div>
				<h2 className="text-4xl font-bold font-title">
					Open-Source Vision AI SDK
				</h2>
				<div className="space-y-2 font-medium">
					<p className="text-balance">
						This scholarship fund is made possible by our sponsor Open Vision
						Agents by Stream.
					</p>
					<p className="">
						Vision Agents is an open-source SDK by Stream for building
						real-time Vision AI agents. It provides the building blocks to
						create intelligent, low-latency video experiences—combining vision
						models like YOLO, Roboflow, and Moondream with LLMs like Gemini and
						OpenAI. With native SDK methods, ultra-low latency via Stream's
						edge network, and support for React, Android, iOS, Flutter, React
						Native, and Unity, you have everything you need to build the next
						generation of video AI applications.
					</p>
					<p className="">
						Check out Vision Agents on GitHub using the link below.
					</p>
				</div>
				<Link
					href="https://github.com/GetStream/Vision-Agents"
					target="_blank"
					rel="noopener noreferrer"
					className="flex gap-2 items-center w-fit bg-[#f15927] text-white px-4 py-3 font-semibold hover:bg-[#f15927]/80 transition-all duration-300 rounded-[8px]"
				>
					Check out Vision Agents on GitHub <ArrowUpRight size={20} />
				</Link>
			</ViewContainer>
		</div>
	);
};

export default Sponsor;
