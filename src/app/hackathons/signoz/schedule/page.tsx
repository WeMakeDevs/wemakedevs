import { HackathonNav } from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import Agenda from "../components/Agenda";
import { DATA, navLinks } from "../data";

const HackathonSchedule = async () => {
	return (
		<div className="pt-24 pb-10 bg-gradient-to-b from-[#0b0c0e] via-[#0e1014] to-[#0b0c0e] min-h-screen">
			<div className="sticky top-[96px] z-[120]">
				<ViewContainer>
					<div className="signoz-sticky-nav rounded-xl">
						<HackathonNav
							slug={DATA.slug}
							page="schedule"
							links={navLinks}
						/>
					</div>
				</ViewContainer>
			</div>
			<Agenda />
		</div>
	);
};

export default HackathonSchedule;
