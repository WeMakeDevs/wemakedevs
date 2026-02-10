import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ViewContainer } from "../ui/view-container";

const Sponsor = () => {
	return (
		<div className="bg-[#fde6d4] py-16" id="sponsors">
			<ViewContainer className="bg-white p-10 rounded-2xl shadow-2xl space-y-6">
				<h3 className="text-2xl font-bold font-title tracking-tight">
					Accomplish™
				</h3>
				<h2 className="text-4xl font-bold font-title">
					Open Source AI Desktop Agent
				</h2>
				<div className="space-y-2 font-medium">
					<p className="text-balance">
						This scholarship fund is made possible by our sponsor
						Accomplish
					</p>
					<p className="">
						Accomplish™ is an open source AI desktop agent that
						reads your files, creates documents, and automates
						repetitive knowledge work—using your own API keys (xAI,
						OpenAI, Anthropic Claude, Google Gemini) or local models
						via Ollama.
					</p>
					<p className="">
						Check out Accomplish on GitHub using the link below.
					</p>
				</div>
				<Link
					href="https://github.com/accomplish-ai/accomplish"
					target="_blank"
					rel="noopener noreferrer"
					className="flex gap-2 items-center w-fit bg-[#f15927] text-white px-4 py-3 font-semibold hover:bg-[#f15927]/80 transition-all duration-300 rounded-[8px]"
				>
					Check out Accomplish on GitHub <ArrowUpRight size={20} />
				</Link>
			</ViewContainer>
		</div>
	);
};

export default Sponsor;
