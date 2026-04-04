import {
	HackathonContentTitle,
	HackathonCoverImage,
	HackathonNav,
	HackathonWinningProjectCardWithVideo,
} from "@/components/hackathon-content";
import HackathonOtherProjectCard from "@/components/hackathon-content/HackathonOtherProjectCard";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA as hackathonData, navLinks } from "../data";
import { images } from "../images";
import { otherProjects, winningProjects } from "../projects";

const HackathonProjects = async () => {
	return (
		<div className="pt-20 pb-10">
			<HackathonCoverImage src={images.cover} alt={hackathonData.title} />
			<HackathonNav
				slug={hackathonData.slug}
				page="projects"
				links={navLinks}
			/>
			<ViewContainer>
				<HackathonContentTitle className="mt-4">
					Winning Projects
				</HackathonContentTitle>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-8">
					{winningProjects.map(project => (
						<HackathonWinningProjectCardWithVideo
							key={project.projectTitle}
							projectTitle={project.projectTitle}
							description={project.description}
							githubLink={project.githubLink}
							teamName={project.teamName}
							isSolo={
								!project.teamName.toLowerCase().includes("team")
							}
							youtubeEmbed={project.youtubeEmbed}
							prize={project.prize}
						/>
					))}
				</div>

				{otherProjects.length > 0 && (
					<>
						<HackathonContentTitle className="mt-8">
							All Projects
						</HackathonContentTitle>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-8">
							{otherProjects.map(project => (
								<HackathonOtherProjectCard
									key={project.projectTitle}
									projectTitle={project.projectTitle}
									githubLink={project.githubLink}
									teamName={project.teamName}
									isSolo={
										!project.teamName
											.toLowerCase()
											.includes("team")
									}
								/>
							))}
						</div>
					</>
				)}
			</ViewContainer>
		</div>
	);
};

export default HackathonProjects;
