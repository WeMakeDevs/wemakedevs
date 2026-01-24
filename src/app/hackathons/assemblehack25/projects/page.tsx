import {
	HackathonContentTitle,
	HackathonCoverImage,
	HackathonNav,
	HackathonWinningProjectCardWithVideo,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA as hackathonData, navLinks } from "../data";
import { images } from "../images";
import { winningProjects } from "../projects";

const AssemblehackProjects = async () => {
	return (
		<div className="pt-20 pb-10 bg-white">
			<HackathonCoverImage src={images.cover} alt={hackathonData.title} />
			<HackathonNav
				slug={hackathonData.slug}
				page="projects"
				links={navLinks}
				navCta={hackathonData.cta}
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
							isSolo={!project.teamName.includes(",")}
							youtubeEmbed={project.youtubeEmbed}
							prize={project.prize}
						/>
					))}
				</div>
			</ViewContainer>
		</div>
	);
};

export default AssemblehackProjects;
