import { ViewContainer } from "@/components/ui/view-container";
import { ExternalLink, GitPullRequest } from "lucide-react";
import { prWinners } from "../../projects";
import ProjectsShell from "../ProjectsShell";
import SubpageHeader from "../SubpageHeader";

// Friendly "owner/repo · #123" label for a GitHub PR URL.
const prLabel = (url: string) => {
	const m = url.match(/github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)/i);
	if (m) return `${m[1]}/${m[2]} · #${m[3]}`;
	try {
		return new URL(url).hostname.replace(/^www\./, "");
	} catch {
		return url;
	}
};

const PrsPage = () => {
	return (
		<ProjectsShell>
			<ViewContainer className="pt-12">
				<SubpageHeader active="prs" />

				<div className="flex items-center gap-3 mb-2 flex-wrap">
					<GitPullRequest className="w-6 h-6 text-[#8a5a00]" />
					<h2 className="text-2xl md:text-3xl font-black italic uppercase text-[#c33124]">
						Top {prWinners.length} PR Winners
					</h2>
				</div>
				<p className="text-[#6b513a] text-sm md:text-base mb-8">
					The best pull requests shipped straight into the Cognee
					open-source repositories during the hackathon, each earning
					a $100 reward. Ranked by the Cognee team.
				</p>

				<div className="flex flex-col gap-3">
					{prWinners.map(pr => (
						<a
							key={pr.prLink}
							href={pr.prLink}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-start gap-4 rounded-xl p-4 md:p-5 paper-card"
						>
							<span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#e7a92b] to-[#c8901a] text-white font-black text-lg shadow-md">
								{pr.rank}
							</span>
							<div className="min-w-0 flex-1">
								<div className="flex items-center gap-2 flex-wrap">
									<h3 className="font-bold text-[#4a3624] group-hover:text-[#c33124] transition-colors">
										{pr.description}
									</h3>
								</div>
								<div className="flex items-center gap-3 mt-1.5 flex-wrap text-xs">
									<span className="inline-flex items-center gap-1.5 font-semibold text-[#8a5a00]">
										@{pr.author}
									</span>
									<span className="inline-flex items-center gap-1.5 font-mono text-[#6b513a] group-hover:text-[#c33124] transition-colors">
										<ExternalLink className="w-3 h-3" />
										{prLabel(pr.prLink)}
									</span>
								</div>
							</div>
						</a>
					))}
				</div>
			</ViewContainer>
		</ProjectsShell>
	);
};

export default PrsPage;
