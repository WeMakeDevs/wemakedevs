import Faq from "@/components/Faq";
import { ViewContainer } from "@/components/ui/view-container";
import { SiSlack } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Agenda from "./components/Agenda";
import CommunityPartners from "./components/CommunityPartners";
import ConferenceHero from "./components/ConferenceHero";
import Marquee from "./components/Marquee";
import MissionSpotlight from "./components/MissionSpotlight";
import PreviousWebinars from "./components/PreviousWebinars";
import ProblemSolution from "./components/ProblemSolution";
import Signals from "./components/Signals";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";
import Venue from "./components/Venue";
import WaitlistForm from "./components/WaitlistForm";
import { DATA, faqs } from "./data";

const ConferencePage = () => {
	return (
		<main className="pt-20">
			{/* ── Hero ──────────────────────────────────────────────────────────── */}
			<div id="about" className="scroll-mt-32">
				<ConferenceHero />
			</div>

			{/* ── Topic marquee ─────────────────────────────────────────────────── */}
			<Marquee />

			{/* ── See inside everything you ship ────────────────────────────────── */}
			<div id="overview" className="scroll-mt-32 agency-grid">
				<MissionSpotlight />
			</div>

			{/* ── Why we're doing this (Problem / Solution) ─────────────────────── */}
			<div id="why" className="scroll-mt-32">
				<ProblemSolution />
			</div>

			{/* ── Observability signals ─────────────────────────────────────────── */}
			<div className="agency-grid">
				<Signals />
			</div>

			{/* ── Featured speakers ─────────────────────────────────────────────── */}
			<div id="speakers" className="scroll-mt-32">
				<Speakers />
			</div>

			{/* ── Agenda ────────────────────────────────────────────────────────── */}
			<div id="agenda" className="scroll-mt-32 agency-grid">
				<Agenda />
			</div>

			{/* ── Venue ─────────────────────────────────────────────────────────── */}
			<div id="venue" className="scroll-mt-32 agency-grid">
				<Venue />
			</div>

			{/* ── Previous edition webinars ─────────────────────────────────────── */}
			<div id="archives" className="scroll-mt-32">
				<PreviousWebinars />
			</div>

			{/* ── Sponsors ──────────────────────────────────────────────────────── */}
			<div id="sponsors" className="scroll-mt-32 agency-grid">
				<Sponsors />
			</div>

			{/* ── Community partners ────────────────────────────────────────────── */}
			<div id="partners" className="scroll-mt-32">
				<CommunityPartners />
			</div>

			{/* ── FAQ (the Faq component owns the #faq anchor) ───────────────────── */}
			<div className="pb-10">
				<ViewContainer>
					<div className="[&_h2]:text-[#f5f5f5] [&_h2]:font-bold">
						<Faq FAQS={faqs} />
					</div>

					<div className="mt-10 flex justify-center">
						<div className="inline-flex flex-col sm:flex-row items-center gap-4 sz-glass-bg rounded-2xl px-8 py-5 border border-[#4A154B]/50 shadow-md text-center sm:text-left">
							<SiSlack
								size={28}
								className="text-[#ECB22E] shrink-0"
							/>
							<p className="text-[#c0c1c3] font-medium">
								Still have questions? Join the SigNoz Slack and
								get help in real time.
							</p>
							<Link
								href={DATA.slackUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4A154B] hover:bg-[#611f5f] transition-colors text-white font-bold"
							>
								<SiSlack size={18} /> Join SigNoz Slack
							</Link>
						</div>
					</div>
				</ViewContainer>
			</div>

			{/* ── Waitlist ──────────────────────────────────────────────────────── */}
			<div id="register" className="scroll-mt-32">
				<WaitlistForm />
			</div>
		</main>
	);
};

export default ConferencePage;
