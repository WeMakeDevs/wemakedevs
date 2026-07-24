import { ViewContainer } from "@/components/ui/view-container";
import ProjectsShell from "../ProjectsShell";
import SubpageHeader from "../SubpageHeader";
import { TopProjectsSection } from "../sections";

const TopProjectsPage = () => {
	return (
		<ProjectsShell>
			<ViewContainer className="pt-12">
				<SubpageHeader active="top" />
				<TopProjectsSection />
			</ViewContainer>
		</ProjectsShell>
	);
};

export default TopProjectsPage;
