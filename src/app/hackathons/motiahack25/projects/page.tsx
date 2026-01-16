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

const MotiahackProjects = async () => {
	return (
		<div className="pt-20 pb-10 bg-[#050705] text-slate-100">
			<HackathonCoverImage src={images.cover} alt={hackathonData.title} />
			<HackathonNav
				slug={hackathonData.slug}
				page="projects"
				links={navLinks}
				navCta={hackathonData.cta}
			/>
			<ViewContainer>
				<HackathonContentTitle className="mt-4 text-slate-100 font-mono [&>h2]:text-slate-100 [&>h2]:font-mono">
					<span className="text-green-400">&gt;</span>{" "}
					<span className="text-slate-100">Winning Projects</span>
				</HackathonContentTitle>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-8">
					{winningProjects.map(project => (
						<HackathonWinningProjectCardWithVideo
							key={project.projectTitle}
							projectTitle={project.projectTitle}
							description={project.description}
							githubLink={project.githubLink}
							teamName={project.teamName}
							isSolo={true}
							youtubeEmbed={project.youtubeEmbed}
							prize={project.prize}
						/>
					))}
				</div>

				<HackathonContentTitle className="mt-8 text-slate-100 font-mono [&>h2]:text-slate-100 [&>h2]:font-mono">
					<span className="text-green-400">&gt;</span>{" "}
					<span className="text-slate-100">Top Projects</span>
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
								project.teamName !== "Deadlock" &&
								project.teamName !== "CodeXCode" &&
								project.teamName !== "BitWrappers" &&
								project.teamName !== "RAG2riches"
							}
							youtubeEmbed={project.youtubeEmbed}
						/>
					))}
				</div>

				<HackathonContentTitle className="mt-8 text-slate-100 font-mono [&>h2]:text-slate-100 [&>h2]:font-mono">
					<span className="text-green-400">&gt;</span>{" "}
					<span className="text-slate-100">All Projects</span>
				</HackathonContentTitle>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-8">
					{otherProjects.map(project => (
						<HackathonOtherProjectCard
							key={project.projectTitle}
							projectTitle={project.projectTitle}
							githubLink={project.githubLink}
							teamName={project.teamName}
							isSolo={
								!project.teamName.toLowerCase().includes("team") &&
								project.teamName !== "SOLO" &&
								project.teamName !== "Deadlock" &&
								project.teamName !== "CodeXCode" &&
								project.teamName !== "BitWrappers" &&
								project.teamName !== "RAG2riches" &&
								project.teamName !== "Team Binary Force" &&
								project.teamName !== "RedBugs" &&
								project.teamName !== "Team Dark Mode" &&
								project.teamName !== "Think Twice" &&
								project.teamName !== "Team SoloDevs" &&
								project.teamName !== "NullPointer" &&
								project.teamName !== "devPals" &&
								project.teamName !== "DuoMinds" &&
								project.teamName !== "Noob Coders" &&
								project.teamName !== "Innovators" &&
								project.teamName !== "PowerGit" &&
								project.teamName !== "SEEDHE CODE" &&
								project.teamName !== "ConflictCode" &&
								project.teamName !== "Codecatalysts" &&
								project.teamName !== "codecult-org" &&
								project.teamName !== "Tech titans" &&
								project.teamName !== "ERROR_404_NOT_FOUND" &&
								project.teamName !== "SleepyBots" &&
								project.teamName !== "Team lazy" &&
								project.teamName !== "Team Elite" &&
								project.teamName !== "Four in denial" &&
								project.teamName !== "Glasskiss" &&
								project.teamName !== "ServerSide Ninjas"
							}
						/>
					))}
				</div>
			</ViewContainer>
		</div>
	);
};

export default MotiahackProjects;
