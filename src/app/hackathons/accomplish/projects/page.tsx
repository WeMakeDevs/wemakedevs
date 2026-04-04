import {
	HackathonContentTitle,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight, GitPullRequest, Megaphone } from "lucide-react";
import Link from "next/link";
import { DATA as hackathonData, navLinks } from "../data";
import { images } from "../images";
import { openSourceContributions, showcaseSubmissions } from "../projects";

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
					Open Source Track
				</HackathonContentTitle>
				<p className="text-slate-400 mt-2 mb-6">
					Contributors who picked issues and submitted pull requests to{" "}
					<Link
						href="https://github.com/accomplish-ai/accomplish"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sky-400 hover:text-sky-300 underline"
					>
						accomplish-ai/accomplish
					</Link>
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{openSourceContributions.map((contributor) => (
						<Link
							key={contributor.name}
							href={contributor.mainPrLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 group no-underline hover:underline font-medium px-4 py-3 rounded-lg border-2 border-sky-500/20 hover:bg-sky-500/10 transition-all text-slate-100 bg-[#0a0f11]/80"
						>
							<GitPullRequest
								className="text-sky-400 shrink-0"
								size={18}
							/>
							<span className="grow">
								{contributor.name}
								<span className="text-slate-400 font-normal ml-2">
									·{" "}
									{contributor.prCount === 1
										? "1 PR"
										: `${contributor.prCount} PRs`}
								</span>
							</span>
							<ArrowUpRight
								className="group-hover:translate-x-1 transition-all shrink-0 text-slate-400"
								size={18}
							/>
						</Link>
					))}
				</div>

				<HackathonContentTitle className="mt-12">
					Showcase Track
				</HackathonContentTitle>
				<p className="text-slate-400 mt-2 mb-6">
					Participants who showcased how they used Accomplish to
					automate real tasks
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{showcaseSubmissions.map((submission, index) => (
						<Link
							key={`${submission.name}-${index}`}
							href={submission.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 group no-underline hover:underline font-medium px-4 py-3 rounded-lg border-2 border-amber-500/20 hover:bg-amber-500/10 transition-all text-slate-100 bg-[#0a0f11]/80"
						>
							<Megaphone
								className="text-amber-400 shrink-0"
								size={18}
							/>
							<span className="grow truncate">
								{submission.name}
							</span>
							<ArrowUpRight
								className="group-hover:translate-x-1 transition-all shrink-0 text-slate-400"
								size={18}
							/>
						</Link>
					))}
				</div>
			</ViewContainer>
		</div>
	);
};

export default HackathonProjects;
