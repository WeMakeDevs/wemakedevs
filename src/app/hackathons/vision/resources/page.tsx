import {
	HackathonContentTitle,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody";
import { ViewContainer } from "@/components/ui/view-container";
import Link from "next/link";
import { DATA, navLinks } from "../data";
import { images } from "../images";

const HackathonResources = async () => {
	return (
		<div className="pt-20 pb-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen [&_h2]:text-cyan-400">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav
				slug={DATA.slug}
				page="resources"
				links={navLinks}
				navCta={{
					label: DATA.cta.label,
					href: DATA.cta.href,
					openInNewTab: DATA.cta.openInNewTab,
					disabled: DATA.cta.disabled,
				}}
			/>
			<ViewContainer>
				<HackathonContentTitle className="text-cyan-400">
					Need Mission Support?
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-2 list-disc list-inside">
						<li>
							Join{" "}
							<Link
								href="https://discord.gg/RkhX9PxMS6"
								className="text-cyan-400 underline hover:no-underline hover:text-cyan-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Vision Agents Discord
							</Link>{" "}
							for tactical support
						</li>
						<li>
							For other queries, contact HQ at{" "}
							<Link
								href="mailto:contact@wemakedevs.org"
								className="text-cyan-400 underline hover:no-underline hover:text-cyan-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								contact@wemakedevs.org
							</Link>
							.
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-cyan-400">
					Mission Intel (Resources)
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<Link
								href="https://visionagents.ai"
								className="text-cyan-400 underline hover:no-underline hover:text-cyan-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Vision Agents Documentation
							</Link>{" "}
							- Official docs and getting started guide
						</li>
						<li>
							<Link
								href="https://github.com/GetStream/Vision-Agents"
								className="text-cyan-400 underline hover:no-underline hover:text-cyan-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Vision Agents GitHub Repository
							</Link>{" "}
							- Source code, examples, and issues
						</li>
						<li>
							<Link
								href="https://github.com/GetStream/Vision-Agents/tree/main/examples"
								className="text-cyan-400 underline hover:no-underline hover:text-cyan-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Example Projects
							</Link>{" "}
							- Golf coach, security camera, phone integration, and more
						</li>
						<li>
							<Link
								href="https://visionagents.ai/integrations"
								className="text-cyan-400 underline hover:no-underline hover:text-cyan-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Integrations Guide
							</Link>{" "}
							- Gemini, OpenAI, YOLO, Roboflow, Moondream, and 20+ more
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-cyan-400">
					Key Capabilities
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<strong className="text-cyan-400">Video AI:</strong>{" "}
							Combine YOLO, Roboflow, Moondream with Gemini/OpenAI in real-time
						</li>
						<li>
							<strong className="text-cyan-400">Low Latency:</strong>{" "}
							Join in 500ms, audio/video latency under 30ms via Stream's edge network
						</li>
						<li>
							<strong className="text-cyan-400">Native APIs:</strong>{" "}
							Direct access to OpenAI, Gemini, and Claude methods
						</li>
						<li>
							<strong className="text-cyan-400">Multi-Platform SDKs:</strong>{" "}
							React, Android, iOS, Flutter, React Native, and Unity
						</li>
						<li>
							<strong className="text-cyan-400">Processors:</strong>{" "}
							Manage state and handle audio/video in real-time with pluggable processors
						</li>
						<li>
							<strong className="text-cyan-400">Tool Calling:</strong>{" "}
							Execute APIs and functions mid-conversation
						</li>
					</ul>
				</HackathonContentBody>
				<HackathonContentTitle className="text-cyan-400">
					Inspiration: Demo Applications
				</HackathonContentTitle>
				<HackathonContentBody className="text-slate-300">
					<ul className="space-y-3 list-disc list-inside">
						<li>
							<strong className="text-cyan-400">Golf Coach:</strong>{" "}
							Real-time pose tracking with YOLO + Gemini Live for actionable feedback
						</li>
						<li>
							<strong className="text-cyan-400">Security Camera:</strong>{" "}
							Face recognition, package detection, automated theft response
						</li>
						<li>
							<strong className="text-cyan-400">GeoGuesser:</strong>{" "}
							OpenAI Realtime identifying real-world locations
						</li>
						<li>
							<strong className="text-cyan-400">Phone & RAG:</strong>{" "}
							Twilio integration with TurboPuffer for retrieval augmented generation
						</li>
						<li>
							<strong className="text-cyan-400">Realtime Stable Diffusion:</strong>{" "}
							Interactive scene generation with Decart's Mirage 2
						</li>
					</ul>
				</HackathonContentBody>
			</ViewContainer>
		</div>
	);
};

export default HackathonResources;
