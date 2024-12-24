import {
	HackathonContentTitle,
	HackathonCoverImage,
	HackathonNav,
	HackathonProjectCard,
	HackathonWinningProjectCard,
} from "@/components/hackathon-content";
import HackathonOtherProjectCard from "@/components/hackathon-content/HackathonOtherProjectCard";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA as hackathonData } from "../data";
import { hackfrost24Cover } from "../images";

const HackathonProjects = async () => {
	return (
		<div className="pt-20 pb-10">
			<HackathonCoverImage
				src={hackfrost24Cover}
				alt={hackathonData.title}
			/>
			<HackathonNav slug={hackathonData.slug} page="projects" />
			<ViewContainer>
				<HackathonContentTitle className="mt-4">
					Winning projects
				</HackathonContentTitle>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-8">
					{hackathonData.projects?.showcase.map(project => (
						<HackathonWinningProjectCard
							teamName={project.teamName}
							isSolo={project.isSolo}
							key={project.projectTitle}
							projectTitle={project.projectTitle}
							description={project.description}
							githubLink={project.githubLink}
							category={project.category}
						/>
					))}
				</div>
				<HackathonContentTitle className="mt-8">
					Top 15 Projects
				</HackathonContentTitle>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-8">
					{hackathonData.projects?.top?.map(project => (
						<HackathonProjectCard
							key={project.projectTitle}
							projectTitle={project.projectTitle}
							description={project.description}
							githubLink={project.githubLink}
							teamName={project.teamName}
							isSolo={project.isSolo}
						/>
					))}
				</div>
				<HackathonContentTitle className="mt-8">
					All Projects
				</HackathonContentTitle>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-8">
					{hackathonData.projects?.all?.map(project => (
						<HackathonOtherProjectCard
							key={project.projectTitle}
							projectTitle={project.projectTitle}
							githubLink={project.githubLink}
							teamName={project.teamName}
							isSolo={project.isSolo}
						/>
					))}
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonProjects;
