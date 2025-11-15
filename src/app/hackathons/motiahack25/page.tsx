import {
	HackathonContentBody,
	HackathonContentTitle,
	HackathonCoverImage,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FaqSection";
import HackathonHeader from "./components/Header";
import PrizesShowcase from "./components/PrizesShowcase";
import SecondaryNavbar from "./components/navbars/SecondaryNavbar";
import { DATA, faqs, navLinks } from "./data";
import { images } from "./images";

const HackathonPage = () => {
	return (
		<main className="pt-20 bg-[#050705] text-slate-100">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<SecondaryNavbar
				slug={DATA.slug}
				page="overview"
				links={navLinks}
				navCta={DATA.cta}
			/>
			<div id="about" className="scroll-mt-16">
				<HackathonHeader
					title={DATA.title}
					description={DATA.description}
					startDate={DATA.startDate}
					endDate={DATA.endDate}
					prize={DATA.prize}
					showDate={DATA.showDate}
					cta={DATA.cta}
				/>
				<AboutSection />
			</div>
			<div id="prizes" className="scroll-mt-16">
				<PrizesShowcase />
			</div>
			<div
				id="sponsor"
				className="bg-[#0b1114] py-16 scroll-mt-10 border-y border-white/5"
			>
				<ViewContainer>
					<HackathonContentTitle className="text-slate-100 font-mono [&>h2]:text-slate-100">
						<span className="text-green-400">&gt;</span>
						<span className="text-slate-100">Sponsor</span>
					</HackathonContentTitle>
					<div className="bg-[#0a0f11]/80 rounded-[12px] border border-green-500/20 overflow-hidden shadow-[0_20px_40px_rgba(5,8,9,0.55)] mt-6">
						<div className="flex items-center justify-between p-6 bg-[#0f181c]/80 flex-col md:flex-row gap-4 border-b border-green-500/15">
							<Image
								src={images.motiaLogo}
								alt="Motia Logo"
								className="w-36"
							/>
							<Link
								href="https://motia.dev"
								className="px-5 py-2.5 rounded-[6px] border-green-400/40 border flex gap-2 items-center bg-green-500/15 hover:bg-green-500/20 text-slate-100 transition-colors duration-300 shadow-[0_0_18px_rgba(0,255,65,0.18)] font-mono"
							>
								&gt; Check out Motia{" "}
								<ArrowUpRight
									size={16}
									className="text-green-400"
								/>
							</Link>
						</div>
						<div className="p-6 text-lg text-slate-200 border-t border-green-500/15 font-mono leading-relaxed">
							<span className="text-green-400">&gt;</span> Motia
							is a unified backend runtime where APIs, background
							jobs, durable workflows, and AI agents, written in
							any language live together with built-in
							observability, state management, streaming, and
							logging. One runtime. One primitive. One command to
							production.
						</div>
					</div>
				</ViewContainer>
			</div>
			<div
				id="judging"
				className="scroll-mt-10 bg-[#0b1114] py-16 border-y border-white/5"
			>
				<ViewContainer>
					<HackathonContentTitle className="text-slate-100 font-mono [&>h2]:text-slate-100">
						<span className="text-green-400">&gt;</span>
						<span className="text-slate-100">Judging Criteria</span>
					</HackathonContentTitle>
					<HackathonContentBody className="text-slate-200/90 font-mono">
						<ul className="list-none space-y-4">
							<li className="flex gap-3">
								<span className="text-green-400 font-bold">
									&gt;
								</span>
								<div>
									<span className="font-semibold text-slate-100">
										Real-World Impact:
									</span>{" "}
									How effectively does your project solve real
									backend challenges? From automating
									workflows to building scalable production
									systems, show us the problem you're solving.
								</div>
							</li>
							<li className="flex gap-3">
								<span className="text-green-400 font-bold">
									&gt;
								</span>
								<div>
									<span className="font-semibold text-slate-100">
										Creativity & Innovation:
									</span>{" "}
									How uniquely do you leverage Motia's unified
									runtime? Combine APIs, workflows, background
									jobs, or AI agents in novel ways using Steps
									as your core primitive.
								</div>
							</li>
							<li className="flex gap-3">
								<span className="text-green-400 font-bold">
									&gt;
								</span>
								<div>
									<span className="font-semibold text-slate-100">
										Learning Journey:
									</span>{" "}
									Demonstrate your problem-solving approach
									and growth mindset, especially valuable if
									you're exploring unified backends, durable
									workflows, or multi-language systems for the
									first time.
								</div>
							</li>
							<li className="flex gap-3">
								<span className="text-green-400 font-bold">
									&gt;
								</span>
								<div>
									<span className="font-semibold text-slate-100">
										Technical Excellence:
									</span>{" "}
									Quality of implementation matters. We
									evaluate code quality, workflow efficiency,
									use of Motia's observability and state
									features, scalability, and integration
									depth.
								</div>
							</li>
							<li className="flex gap-3">
								<span className="text-green-400 font-bold">
									&gt;
								</span>
								<div>
									<span className="font-semibold text-slate-100">
										Developer Experience:
									</span>{" "}
									How intuitive is your project? Whether it's
									API design, workflow visualization,
									dashboards, or developer tools—polish and
									usability count.
								</div>
							</li>
						</ul>
					</HackathonContentBody>
				</ViewContainer>
			</div>
			<div id="faq" className="scroll-mt-20">
				<FaqSection FAQS={faqs} />
			</div>
		</main>
	);
};

export default HackathonPage;
