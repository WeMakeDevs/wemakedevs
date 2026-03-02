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

const TamboProjects = async () => {
	return (
		<div className="pt-20 pb-10 bg-slate-950 text-slate-100">
			<HackathonCoverImage src={images.cover} alt={hackathonData.title} />
			<HackathonNav
				slug={hackathonData.slug}
				page="projects"
				links={navLinks}
				navCta={hackathonData.cta}
			/>
			<ViewContainer>
				<HackathonContentTitle className="mt-4 text-slate-100 [&>h2]:text-amber-400">
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
								project.teamName !== "MergeConflict" &&
								project.teamName !== "CipherX"
							}
							youtubeEmbed={project.youtubeEmbed}
							prize={project.prize}
						/>
					))}
				</div>

				<HackathonContentTitle className="mt-8 text-slate-100 [&>h2]:text-amber-400">
					Top Projects
				</HackathonContentTitle>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-8">
					{topProjects.map(project => (
						<HackathonProjectCardWithVideo
							key={project.projectTitle}
							projectTitle={project.projectTitle}
							description={project.description}
							githubLink={project.githubLink}
							teamName={project.teamName}
							isSolo={
								!project.teamName.toLowerCase().includes("team") &&
								project.teamName !== "Ctrl" &&
								project.teamName !== "Innovators" &&
								project.teamName !== "StormTroopers" &&
								project.teamName !== "Rugpull" &&
								project.teamName !== "SOLO" &&
								project.teamName !== "Solo"
							}
							youtubeEmbed={project.youtubeEmbed}
						/>
					))}
				</div>

				{otherProjects.length > 0 && (
					<>
						<HackathonContentTitle className="mt-8 text-slate-100 [&>h2]:text-amber-400">
							All Projects
						</HackathonContentTitle>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-8">
							{otherProjects.map(project => (
								<HackathonOtherProjectCard
									key={project.projectTitle}
									projectTitle={project.projectTitle}
									githubLink={project.githubLink}
									teamName={project.teamName}
									isSolo={!project.teamName.toLowerCase().includes("team")}
								/>
							))}
						</div>
					</>
				)}
			</ViewContainer>
		</div>
	);
};

export default TamboProjects;
