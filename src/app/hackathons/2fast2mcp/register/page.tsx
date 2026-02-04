import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA, navLinks } from "../data";
import { images } from "../images";

const REGISTER_IFRAME_SRC =
	"https://718dd6be.sibforms.com/serve/MUIFANqSNjmMWD14pJOkv4st6FAXfExRqNphrBFJKytcS4AzI1OQAZeKdR4qhT6j_WhBwHZ-XICh6hlu0Dh45fQKuACzR70VENeNF7C2rPI_EAdzVOEVya5mHsNk4OPcy0i6lQxl-9ldyzIj6FGmbPh0T6qaMaTHwtC-AK9RKYx3cb3KJ-SMTJYc5h9JRNe9-WAxnMiLpEnUmaqz";

const HackathonRegister = async () => {
	return (
		<div className="pt-20 pb-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen flex flex-col">
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
				<h2 className="text-3xl md:text-4xl font-bold text-orange-400 uppercase tracking-wide mb-2 text-center">
					Register for 2 Fast 2 MCP
				</h2>
				<p className="text-slate-400 text-center mb-8">
					Fill out the form below to secure your spot in the race.
				</p>
				<div className="flex-1 min-h-[1300px] flex justify-center">
					<div className="w-full max-w-[580px] bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-orange-500/20 overflow-hidden shadow-xl shadow-orange-500/5">
						{/* Themed top accent */}
						<div className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500" />
						<div className="p-4 md:p-6">
							<iframe
								width={540}
								src={REGISTER_IFRAME_SRC}
								title="2 Fast 2 MCP Registration"
								className="block mx-auto max-w-full w-full border-0 min-h-[1300px] rounded-lg bg-slate-800/50"
								allowFullScreen
								style={{ minHeight: "1300px" }}
							/>
						</div>
					</div>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonRegister;
