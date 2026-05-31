import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import {
	ArrowUpRight,
	ExternalLink,
	GitPullRequest,
	Globe,
	Trophy,
	Users,
	Youtube,
	Zap,
} from "lucide-react";
import Link from "next/link";
import { DATA, navLinks } from "../data";
import {
	prContributors,
	submittedProjects,
	winningProjects,
} from "../projects";

const getPrizeStyles = (prizeText: string) => {
	if (prizeText.includes("MacBook")) {
		return "border-amber-400/60 text-amber-300 bg-amber-500/15";
	}
	if (prizeText.includes("iPad")) {
		return "border-cyan-400/60 text-cyan-300 bg-cyan-500/15";
	}
	if (prizeText.includes("Keychron")) {
		return "border-emerald-400/60 text-emerald-300 bg-emerald-500/15";
	}
	return "border-amber-400/60 text-amber-300 bg-amber-500/15";
};

const ProjectsPage = () => {
	const totalPrs = prContributors.reduce(
		(sum, c) => sum + c.prLinks.length,
		0,
	);

	return (
		<main className="pt-24 pb-20">
			{/* Hero / Header */}
			<ViewContainer className="pt-8 md:pt-12">
				<div className="text-center mb-8">
					<span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
						<Trophy className="w-4 h-4" />
						Hackathon Submissions
					</span>
					<h1 className="text-4xl md:text-5xl font-black italic uppercase text-amber-400 mb-4">
						Back to the Metadata · Projects
					</h1>
					<p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
						Every project shipped during the {DATA.title}{" "}
						hackathon, plus contributors who pushed code straight
						into the OpenMetadata repo.
					</p>
				</div>
			</ViewContainer>

			{/* Sub-page nav */}
			<ViewContainer>
				<nav className="bg-foreground/5 border-y border-foreground/10 rounded-xl flex flex-wrap gap-1 px-2 py-1">
					{navLinks.map(link => {
						const isActive = link.page === "projects";
						return (
							<Link
								key={link.page}
								href={link.href}
								className={cn(
									"px-4 py-2 font-medium text-sm rounded-md transition-colors",
									isActive
										? "bg-amber-500/15 text-amber-300 shadow-[inset_0_-2px_0_0_rgba(245,158,11,0.6)]"
										: "text-slate-300 hover:bg-foreground/10",
								)}
							>
								{link.label}
							</Link>
						);
					})}
				</nav>
			</ViewContainer>

			{/* Winners Section */}
			<ViewContainer className="mt-12">
				<div className="flex items-center gap-3 mb-2">
					<Trophy className="w-6 h-6 text-amber-400" />
					<h2 className="text-2xl md:text-3xl font-black italic uppercase text-amber-400">
						Winning Projects
					</h2>
				</div>
				<p className="text-slate-400 text-sm md:text-base mb-6">
					The crew that bent the timeline of metadata.
				</p>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{winningProjects.map(project => (
						<div
							key={project.teamName}
							className="glass-card rounded-2xl p-5 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 flex flex-col bg-slate-950/60 shadow-[0_0_24px_rgba(245,158,11,0.08)]"
						>
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
								</div>
							</div>
						</div>
					))}
				</div>
			</ViewContainer>

			{/* PR Submissions Section */}
			<ViewContainer className="mt-16">
				<div className="flex items-center gap-3 mb-2">
					<GitPullRequest className="w-6 h-6 text-amber-400" />
					<h2 className="text-2xl md:text-3xl font-black italic uppercase text-amber-400">
						Open Source Track · Pull Requests
					</h2>
					<span className="ml-2 inline-flex items-center justify-center text-xs font-mono font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300 rounded-full px-3 py-1">
						{totalPrs} PRs · {prContributors.length} contributors
					</span>
				</div>
				<p className="text-slate-400 text-sm md:text-base mb-6">
					Contributors who submitted pull requests directly to the{" "}
					<Link
						href="https://github.com/open-metadata/OpenMetadata"
						target="_blank"
						rel="noopener noreferrer"
						className="text-amber-400 hover:text-amber-300 underline"
					>
						open-metadata/OpenMetadata
					</Link>{" "}
					repository during the hackathon.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{prContributors.map(contributor => (
						<div
							key={contributor.name}
							className="rounded-xl border border-amber-500/15 hover:border-amber-500/40 transition-colors bg-slate-950/60 px-4 py-4"
						>
							<div className="flex items-center gap-3 mb-3">
								<GitPullRequest
									className="text-amber-400 shrink-0"
									size={18}
								/>
								<h3 className="font-semibold text-slate-100 grow">
									{contributor.name}
								</h3>
								<span className="text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded">
									{contributor.prLinks.length === 1
										? "1 PR"
										: `${contributor.prLinks.length} PRs`}
								</span>
							</div>
							<ul className="flex flex-col gap-1.5 ml-1">
								{contributor.prLinks.map(prLink => {
									const match = prLink.match(
										/github\.com\/open-metadata\/([\w-]+)\/(?:pull|issues)\/(\d+)/i,
									);
									const repo = match ? match[1] : "OpenMetadata";
									const num = match ? `#${match[2]}` : prLink;
									return (
										<li key={prLink}>
											<a
												href={prLink}
												target="_blank"
												rel="noopener noreferrer"
												className="group inline-flex items-center gap-2 text-sm text-slate-300 hover:text-amber-300 transition-colors"
											>
												<ExternalLink
													className="w-3 h-3 text-slate-500 group-hover:text-amber-400"
													aria-hidden="true"
												/>
												<span className="font-mono">
													{repo}
													{" · "}
													{num}
												</span>
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					))}
				</div>
			</ViewContainer>

			{/* All Projects Section */}
			<ViewContainer className="mt-16">
				<div className="flex items-center gap-3 mb-2">
					<Users className="w-6 h-6 text-amber-400" />
					<h2 className="text-2xl md:text-3xl font-black italic uppercase text-amber-400">
						All Projects
					</h2>
					<span className="ml-2 inline-flex items-center justify-center text-xs font-mono font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300 rounded-full px-3 py-1">
						{submittedProjects.length} submissions
					</span>
				</div>
				<p className="text-slate-400 text-sm md:text-base mb-6">
					Projects built on top of OpenMetadata during the hackathon.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{submittedProjects.map(project => {
						const primaryHref =
							project.github ||
							project.deployed ||
							project.youtube;
						return (
							<a
								key={`${project.team}-${primaryHref}`}
								href={primaryHref}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex flex-col gap-3 px-4 py-4 rounded-xl border border-amber-500/15 hover:border-amber-500/45 hover:bg-amber-500/5 transition-all bg-slate-950/60"
							>
								<div className="flex items-start justify-between gap-3">
									<div className="min-w-0 flex-1">
										<h3 className="font-semibold text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-1">
											{project.title}
										</h3>
										<p className="text-xs text-slate-500 mt-1 truncate">
											{project.isSolo
												? project.team
												: `Team · ${project.team}`}
										</p>
									</div>
									<ArrowUpRight
										className="text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
										size={18}
									/>
								</div>
								<div className="flex items-center gap-3 text-xs text-slate-400">
									{project.github && (
										<span className="inline-flex items-center gap-1 text-slate-300 hover:text-amber-300">
											<svg
												className="w-3.5 h-3.5"
												fill="currentColor"
												viewBox="0 0 20 20"
												aria-hidden="true"
											>
												<title>GitHub</title>
												<path
													fillRule="evenodd"
													d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
													clipRule="evenodd"
												/>
											</svg>
											Code
										</span>
									)}
									{project.deployed && (
										<span className="inline-flex items-center gap-1 text-slate-300 hover:text-amber-300">
											<Globe className="w-3.5 h-3.5" />
											Live
										</span>
									)}
									{project.youtube && (
										<span className="inline-flex items-center gap-1 text-slate-300 hover:text-amber-300">
											<Youtube className="w-3.5 h-3.5" />
											Demo
										</span>
									)}
								</div>
							</a>
						);
					})}
				</div>
			</ViewContainer>
		</main>
	);
};

export default ProjectsPage;
