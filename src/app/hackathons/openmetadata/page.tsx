import Faq from "@/components/Faq";
import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HackathonHeader from "./components/Header";
import IdeasSection from "./components/IdeasSection";
import PrizesShowcase from "./components/PrizesShowcase";
import { DATA, faqs, navLinks } from "./data";
import { images } from "./images";

const HackathonPage = () => {
	return (
		<main className="pt-20">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav
				slug={DATA.slug}
				page="overview"
				links={navLinks}
				navCta={{
					label: DATA.cta.label,
					href: DATA.cta.href,
					openInNewTab: DATA.cta.openInNewTab,
					disabled: DATA.cta.disabled,
				}}
			/>

			{/* Hero Section */}
			<div id="about" className="scroll-mt-16 bg-slate-950">
				<HackathonHeader
					title={DATA.title}
					description={DATA.description}
					startDate={DATA.startDate}
					endDate={DATA.endDate}
					prize={DATA.prize}
					cta={DATA.cta}
				/>

				{/* About Content */}
				<ViewContainer className="mt-16 pb-20 bg-slate-900/30 rounded-2xl py-12 px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-amber-400 uppercase tracking-wide mb-6 text-center">
						Where We&apos;re Going, We Don&apos;t Need Silos
					</h2>
					<p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto text-center">
						OpenMetadata is an open-source unified platform for data discovery,
						data observability, and data governance — powered by a central
						metadata repository, in-depth column-level lineage, and seamless
						team collaboration. Whether you&apos;re building MCP servers, data
						observability tools, custom connectors, governance automations, or
						AI-powered metadata agents — this hackathon is your proving ground.
						Fire up the flux capacitor and build something that changes the
						timeline of data management forever.
					</p>
				</ViewContainer>
			</div>

			{/* Ideas Section */}
			<div id="ideas" className="scroll-mt-16 bg-slate-900/30">
				<IdeasSection />
			</div>

			{/* Submit Project CTA */}
			{DATA.submissionFormUrl && (
				<ViewContainer className="mt-12 pb-4">
					<Link
						href={DATA.submissionFormUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 md:p-8 rounded-2xl border-2 border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 transition-colors group"
					>
						<span className="text-xl md:text-2xl font-bold text-amber-400 group-hover:text-amber-300">
							Submit your project →
						</span>
						<span className="text-slate-400 text-center sm:text-left">
							One person per team. Submit via the official form before the deadline.
						</span>
						<ArrowUpRight className="w-6 h-6 text-amber-400 shrink-0" />
					</Link>
				</ViewContainer>
			)}

			{/* Prizes Section */}
			<div id="prizes" className="scroll-mt-16 bg-slate-950">
				<PrizesShowcase />
			</div>

			{/* Sponsor Section */}
			<div id="sponsor" className="py-20 scroll-mt-10 bg-slate-900/30">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-bold text-amber-400 uppercase tracking-wide mb-8">
						Powered By
					</h2>
					<div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-amber-500/20 overflow-hidden">
						<div className="flex items-center justify-between p-8 border-b border-amber-500/10 flex-col md:flex-row gap-6">
							<div className="flex items-center gap-4">
								<div className="bg-slate-800 px-6 py-3 rounded-xl border border-amber-500/20">
									<Image
										src="https://raw.githubusercontent.com/open-metadata/OpenMetadata/main/openmetadata-docs/images/logo/OpenMetadata.svg"
										alt="OpenMetadata"
										width={200}
										height={50}
										className="h-10 w-auto"
										unoptimized
									/>
								</div>
								<span className="text-slate-400 text-lg">
									OpenMetadata by Collate
								</span>
							</div>
							<Link
								href="https://github.com/open-metadata"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 rounded-xl border border-amber-500/50 flex gap-2 items-center bg-slate-800/50 hover:bg-amber-500/20 transition-colors duration-300 text-amber-400 font-medium"
							>
								Visit GitHub <ArrowUpRight size={18} />
							</Link>
						</div>
						<div className="p-8">
							<p className="text-lg text-slate-300 leading-relaxed">
								OpenMetadata is an open-source unified metadata platform for
								data discovery, data observability, and data governance. It
								provides a central metadata repository, in-depth column-level
								lineage, seamless team collaboration, and robust governance
								capabilities. With support for 70+ connectors, automated data
								quality tests, and a powerful API-first architecture, OpenMetadata
								is the backbone of modern data teams. Your mission: push the
								boundaries of what&apos;s possible with metadata.
							</p>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* Judging Section */}
			<div id="judging" className="scroll-mt-10 py-20 bg-slate-950">
				<ViewContainer>
					<h2 className="text-3xl md:text-4xl font-bold text-amber-400 uppercase tracking-wide mb-8">
						Judging Criteria
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								Potential Impact
							</h3>
							<p className="text-slate-300">
								How effectively does the project address a
								meaningful problem or unlock a valuable use
								case in the metadata and data management space?
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								Creativity & Innovation
							</h3>
							<p className="text-slate-300">
								How unique is the idea? Does it push the
								boundaries of what&apos;s possible with
								metadata discovery, observability, or governance?
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								Technical Excellence
							</h3>
							<p className="text-slate-300">
								How well is the project implemented? Does it
								demonstrate strong engineering practices and
								clean, maintainable code?
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								Best Use of OpenMetadata
							</h3>
							<p className="text-slate-300">
								How deeply and effectively does the project
								integrate with OpenMetadata&apos;s APIs, connectors,
								lineage, governance, or observability features?
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								User Experience
							</h3>
							<p className="text-slate-300">
								Is the project intuitive to use? Does it provide
								a seamless, polished experience that users would
								actually want to adopt?
							</p>
						</div>
						<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
							<h3 className="text-xl font-bold text-amber-400 mb-3">
								Presentation Quality
							</h3>
							<p className="text-slate-300">
								How clearly is the project presented? Does the
								demo, README, and submission effectively communicate
								the problem, solution, and impact?
							</p>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* FAQ Section */}
			<div id="faq" className="scroll-mt-20 py-20 bg-slate-900/30">
				<ViewContainer>
					<div className="[&_h2]:text-amber-400 [&_h2]:font-bold [&_div[class*='pb-4']]:text-amber-700 [&_div[class*='pb-4']_a]:text-amber-700">
						<Faq FAQS={faqs} />
					</div>
				</ViewContainer>
			</div>
		</main>
	);
};

export default HackathonPage;
