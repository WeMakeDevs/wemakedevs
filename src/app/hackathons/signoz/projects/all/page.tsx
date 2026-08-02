import { ViewContainer } from "@/components/ui/view-container";
import ProjectsShell from "../ProjectsShell";
import SubpageHeader from "../SubpageHeader";
import { AllProjectsSection } from "../sections";

const AllProjectsPage = () => {
	return (
		<ProjectsShell>
			<ViewContainer className="pt-12">
				<SubpageHeader active="all" />
				<AllProjectsSection />
			</ViewContainer>
		</ProjectsShell>
	);
};

export default AllProjectsPage;
