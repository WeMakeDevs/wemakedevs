import {
	HackathonContentTitle,
	HackathonCoverImage,
	HackathonNav,
	HackathonWinningProjectCard,
} from "@/components/hackathon-content";
import { HackathonProjectCard } from "@/components/hackathon-content/";
import { ViewContainer } from "@/components/ui/view-container";
import { fetchHackathonData } from "@/lib/hackathon";
import { notFound } from "next/navigation";

const HackathonProjects = async ({ params }: { params: { slug: string } }) => {
	const hackathons = await fetchHackathonData();
	const hackathon = hackathons.find(
		hackathon => hackathon.slug === params.slug,
	);

	if (!hackathon || !hackathon.projects) notFound();

	return (
		<div className="pt-20 pb-10">
			<HackathonCoverImage
				src={hackathon.image.cover}
				alt={hackathon.title}
			/>
			<HackathonNav slug={hackathon.slug} page="projects" />
			<ViewContainer>
				<HackathonContentTitle className="mt-4">
					Winning projects
				</HackathonContentTitle>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-8">
					{hackathon.projects?.showcase.map(project => (
						<HackathonWinningProjectCard
							key={project.projectTitle}
							projectTitle={project.projectTitle}
							description={project.description}
							githubLink={project.githubLink}
							demoLink={project.demoLink}
							category={project.category}
						/>
					))}
				</div>
				<HackathonContentTitle className="mt-8">
					All projects
				</HackathonContentTitle>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-8">
					{hackathon.projects?.all?.map(project => (
						<HackathonProjectCard
							key={project.projectTitle}
							projectTitle={project.projectTitle}
							description={project.description}
							githubLink={project.githubLink}
							demoLink={project.demoLink}
						/>
					))}
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonProjects;
