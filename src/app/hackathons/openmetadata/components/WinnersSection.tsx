import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import { Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { winningProjects } from "../projects";

const getPrizeStyles = (prizeText: string) => {
	if (prizeText.includes("MacBook")) {
		return "border-amber-400/60 text-amber-300 bg-amber-500/15"; // Gold
	}
	if (prizeText.includes("iPad")) {
		return "border-cyan-400/60 text-cyan-300 bg-cyan-500/15"; // Silver-ish
	}
	if (prizeText.includes("Keychron")) {
		return "border-emerald-400/60 text-emerald-300 bg-emerald-500/15"; // Bronze-ish
	}
	return "border-amber-400/60 text-amber-300 bg-amber-500/15";
};

const WinnersSection = () => {
	return (
		<div id="winners" className="scroll-mt-44 py-20 bg-slate-900/40">
			<ViewContainer>
				<div className="text-center mb-12">
					<span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
						<Trophy className="w-4 h-4" />
						Hall of Fame
					</span>
					<h2 className="text-3xl md:text-4xl font-black italic uppercase text-amber-400 mb-4">
						Winning Projects
					</h2>
					<p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
						The crew that bent the timeline of metadata. Watch
						their winning demos below.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{winningProjects.map(project => (
						<div
							key={project.teamName}
							className="glass-card rounded-2xl p-5 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 flex flex-col bg-slate-950/60 shadow-[0_0_24px_rgba(245,158,11,0.08)]"
						>
							{/* YouTube embed */}
							<div className="mb-4 aspect-video rounded-xl overflow-hidden flex-shrink-0 border border-amber-500/15 bg-black">
								<iframe
									src={project.youtubeEmbed}
									title={`${project.teamName} - Winning Demo`}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
									className="w-full h-full"
								/>
							</div>

							<div className="flex flex-col flex-grow gap-3">
								<div className="flex items-center gap-2">
									<Zap className="w-4 h-4 text-amber-400" />
									<h3 className="text-lg font-bold text-amber-300">
										{project.teamName}
									</h3>
								</div>

								<p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
									{project.description}
								</p>

								<div className="flex items-center justify-between mt-auto pt-3 flex-wrap gap-3">
									<span
										className={cn(
											"font-semibold rounded-full px-3 py-1 text-sm border-2 inline-flex items-center gap-1.5",
											getPrizeStyles(project.prize),
										)}
									>
										🏆 {project.prize}
									</span>
									{project.githubLink && (
										<Link
											href={project.githubLink}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-100 rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium border border-slate-700"
										>
											<svg
												className="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 20 20"
												aria-label="GitHub"
											>
												<title>
													GitHub Repository
												</title>
												<path
													fillRule="evenodd"
													d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
													clipRule="evenodd"
												/>
											</svg>
											View Code
										</Link>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</ViewContainer>
		</div>
	);
};

export default WinnersSection;
