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
				<h2 className="text-3xl font-bold text-orange-400 mb-8 text-center">
					Register for 2 Fast 2 MCP
				</h2>
				<div className="flex-1 min-h-[1300px] flex justify-center">
					<iframe
						width={540}
						src={REGISTER_IFRAME_SRC}
						title="2 Fast 2 MCP Registration"
						className="block mx-auto max-w-full w-full max-w-[540px] border-0 min-h-[1300px]"
						allowFullScreen
						style={{ minHeight: "1300px" }}
					/>
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonRegister;
