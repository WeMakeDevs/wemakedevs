import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import Link from "next/link";
import { DATA, navLinks } from "../data";
import { images } from "../images";

const HackathonRegister = async () => {
	return (
		<div className="pt-20 pb-10 bg-gradient-to-b from-[#0a0f1e] via-[#0c1a2e] to-[#0a0f1e] min-h-screen flex flex-col">
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
			<ViewContainer className="my-14 flex-1 flex flex-col min-h-0">
				<h2 className="text-3xl md:text-4xl font-bold text-amber-400 uppercase tracking-wide mb-2 text-center">
					🏴‍☠️ Join the Crew
				</h2>
				<p className="text-slate-400 text-center mb-8">
					Fill out the form below to board the ship.
					<br />
					<span className="text-slate-500 text-sm">
						You can register solo or as part of a crew. If
						you&apos;re participating in a crew, each member must
						register individually.
					</span>
				</p>

				{/* Entry Requirements */}
				<div className="max-w-[700px] mx-auto w-full mb-8">
					<div className="bg-[#0c1a2e]/60 backdrop-blur-sm rounded-2xl border border-amber-500/20 p-6">
						<h3 className="text-xl font-bold text-amber-400 mb-4">
							⚓ Entry Requirements
						</h3>
						<p className="text-slate-300 mb-4">
							Before registering, make sure you&apos;ve completed
							these steps:
						</p>
						<ol className="space-y-3 text-slate-300">
							<li className="flex items-start gap-3">
								<span className="text-amber-400 font-bold">
									1.
								</span>
								<span>
									⭐ Star the{" "}
									<Link
										href="https://github.com/withcoral/coral"
										target="_blank"
										rel="noopener noreferrer"
										className="text-amber-400 underline hover:text-amber-300"
									>
										Coral GitHub repo
									</Link>
								</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="text-amber-400 font-bold">
									2.
								</span>
								<span>
									Join the{" "}
									<Link
										href="https://withcoral.com/discord"
										target="_blank"
										rel="noopener noreferrer"
										className="text-amber-400 underline hover:text-amber-300"
									>
										Coral Discord
									</Link>
								</span>
							</li>
						</ol>
					</div>
				</div>

				{/* Registration form */}
				<div className="flex-1 min-h-[1300px] flex justify-center">
					<div className="w-full max-w-[700px] bg-[#0c1a2e]/60 backdrop-blur-sm rounded-2xl border border-amber-500/20 overflow-hidden shadow-xl shadow-amber-500/5">
						<div className="h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />
						<div className="p-4 md:p-6">
							<iframe
								src="https://docs.google.com/forms/d/e/1FAIpQLSfBxBPLK17A8dXwp64A/viewform?embedded=true"
								title="Pirates of the Coral-bean Registration"
								className="block mx-auto max-w-full w-full border-0 min-h-[1300px] rounded-lg bg-[#0c1a2e]/50"
								allowFullScreen
								style={{ minHeight: "1300px" }}
							/>
						</div>
					</div>
				</div>

				{/* Fallback link */}
				<p className="text-center text-slate-500 mt-4 text-sm">
					Having trouble with the form?{" "}
					<Link
						href="https://forms.gle/dxBPLK17A8dXwp64A"
						target="_blank"
						rel="noopener noreferrer"
						className="text-amber-400 underline hover:text-amber-300"
					>
						Open it directly
					</Link>
				</p>
			</ViewContainer>
		</div>
	);
};

export default HackathonRegister;
