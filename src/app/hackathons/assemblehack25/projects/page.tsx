import {
	HackathonContentTitle,
	HackathonCoverImage,
	HackathonNav,
	HackathonOtherProjectCard,
	HackathonProjectCardWithVideo,
	HackathonWinningProjectCardWithVideo,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { DATA as hackathonData, navLinks } from "../data";
import { images } from "../images";
import { otherProjects, topProjects, winningProjects } from "../projects";

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

				<HackathonContentTitle className="mt-8">
					Top Projects
				</HackathonContentTitle>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-8">
					{topProjects.map(project => {
						const teamNames = ["Team Orbairo", "TriplAI", "AI-4ce", "Sentinel", "Unseen Geeks"];
						const isSolo = !project.teamName.includes(",") && !teamNames.includes(project.teamName);
						return (
							<HackathonProjectCardWithVideo
								key={project.projectTitle}
								projectTitle={project.projectTitle}
								description={project.description}
								githubLink={project.githubLink}
								teamName={project.teamName}
								isSolo={isSolo}
								youtubeEmbed={project.youtubeEmbed}
							/>
						);
					})}
				</div>

				<HackathonContentTitle className="mt-8">
					All Projects
				</HackathonContentTitle>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-8">
					{otherProjects.map(project => {
						// Simple check: if team name contains comma, "Team", " and ", or "&", it's not solo
						const isSolo =
							!project.teamName.includes(",") &&
							!project.teamName.toLowerCase().includes("team") &&
							!project.teamName.includes(" and ") &&
							!project.teamName.includes("&") &&
							project.teamName !== "SOLO" &&
							project.teamName !== "Solo" &&
							project.teamName !== "solo";
						return (
							<HackathonOtherProjectCard
								key={project.projectTitle + project.teamName}
								projectTitle={project.projectTitle}
								githubLink={project.githubLink || "#"}
								teamName={project.teamName}
								isSolo={isSolo}
							/>
						);
					})}
				</div>
			</ViewContainer>
		</div>
	);
};

export default AssemblehackProjects;
