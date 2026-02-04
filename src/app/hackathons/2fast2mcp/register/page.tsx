import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA, navLinks } from "../data";
import { images } from "../images";

const HackathonRegister = async () => {
	return (
		<div className="pt-20 pb-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav
				slug={DATA.slug}
				page="register"
				links={navLinks}
				navCta={{
					label: DATA.cta.label,
					href: DATA.cta.href,
					openInNewTab: DATA.cta.openInNewTab,
					disabled: DATA.cta.disabled,
				}}
			/>
			<ViewContainer className="my-14">
				<h2 className="text-3xl md:text-4xl font-bold text-orange-400 uppercase tracking-wide mb-8 text-center">
					Register for the Race
				</h2>
				<div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-orange-500/20">
					<div className="w-full h-[800px] md:h-[900px]">
						<iframe
							src="https://docs.google.com/forms/d/e/1FAIpQLSe6T8VhPoNI0hZrTKJJAqDx5yzJOYDqRsJZwRXqVFPCOMdPaA/viewform?embedded=true"
							width="100%"
							height="100%"
							frameBorder="0"
							marginHeight={0}
							marginWidth={0}
							className="rounded-xl"
							title="2 Fast 2 MCP Hackathon Registration Form"
						>
							Loading…
						</iframe>
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonRegister;
