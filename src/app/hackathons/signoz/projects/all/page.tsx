import { ViewContainer } from "@/components/ui/view-container";
import ProjectsShell from "../ProjectsShell";
import SubpageHeader from "../SubpageHeader";
import { AllProjectsSection, TrackWinnersSection } from "../sections";

const AllProjectsPage = () => {
	return (
		<ProjectsShell>
			<ViewContainer className="pt-12">
				<SubpageHeader active="all" />
				<div className="mb-16">
					<TrackWinnersSection />
				</div>
				<AllProjectsSection />
			</ViewContainer>
		</ProjectsShell>
	);
};

export default AllProjectsPage;
