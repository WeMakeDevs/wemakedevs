import { HackathonNav } from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA, navLinks } from "../data";

// Shared shell for every /projects page: clears the fixed navbar and renders the
// sticky classified-glass secondary nav so agents can jump between sections.
const ProjectsShell = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="pt-24 pb-20 min-h-screen">
			<div className="sticky top-[96px] z-[120]">
				<ViewContainer>
					<div className="signoz-sticky-nav rounded-xl">
						<HackathonNav
							slug={DATA.slug}
							page="projects"
							links={navLinks}
						/>
					</div>
				</ViewContainer>
			</div>
			{children}
		</main>
	);
};

export default ProjectsShell;
