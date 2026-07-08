import {
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import {
	ArrowUpRight,
	BookOpen,
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
import { images } from "../images";
import { winningProjects } from "../projects";

const filters = [
	{
		key: "prs",
		title: "270+ PRs",
		description:
			"Pirates who built source specs and sent pull requests to withcoral/coral.",
		showCount: false,
		countLabel: "",
		teamsLabel: "",
		href: "/hackathons/coral/projects/prs",
		icon: GitPullRequest,
		accent: "from-[#d4af37]/20 to-[#d4af37]/5",
		border: "border-[#d4af37]/30 hover:border-[#d4af37]/60",
		iconColor: "text-[#d4af37]",
	},
	{
		key: "all",
		title: "Top Projects",
		description:
			"Every voyage shipped during the hackathon. Browse all crews and their builds.",
		showCount: false,
		countLabel: "",
		teamsLabel: "",
		href: "/hackathons/coral/projects/all",
		icon: Users,
		accent: "from-[#2aa198]/20 to-[#2aa198]/5",
		border: "border-[#2aa198]/30 hover:border-[#2aa198]/60",
		iconColor: "text-[#2aa198]",
	},
	{
		key: "blogs",
		title: "Top Blogs",
		description:
			'End-to-end "How to Build X" guides written by pirates during their voyage.',
		showCount: false,
		countLabel: "",
		teamsLabel: "",
		href: "/hackathons/coral/projects/blogs",
		icon: BookOpen,
		accent: "from-[#cb4b16]/20 to-[#cb4b16]/5",
		border: "border-[#cb4b16]/30 hover:border-[#cb4b16]/60",
		iconColor: "text-[#cb4b16]",
	},
];

const ProjectsHubPage = () => {
	return (
		<div className="pt-20 pb-16 min-h-screen">
			<HackathonCoverImage src={images.cover} alt={DATA.title} />
			<HackathonNav slug={DATA.slug} page="projects" links={navLinks} />

			{/* Hero / Header */}
			<ViewContainer className="pt-12">
				<div className="text-center mb-12">
					<span className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
						🏴‍☠️ Hackathon Submissions
					</span>
					<h1 className="text-4xl md:text-5xl font-black italic uppercase gold-shimmer-text mb-4">
						Pirates of the Coral-bean · Projects
					</h1>
					<p className="text-[#93a1a1] text-base md:text-lg max-w-2xl mx-auto">
						Every voyage shipped during the {DATA.title} hackathon.
						Crews built agents that query any API, database, or file
						as SQL. No ETL, no warehouse, no glue code.
					</p>
				</div>
			</ViewContainer>

			{/* Filter Cards */}
			<ViewContainer>
				{/* Winners Section */}
				<div className="mb-12">
					<div className="flex items-center gap-3 mb-2">
						<Trophy className="w-6 h-6 text-[#d4af37]" />
						<h2 className="text-2xl md:text-3xl font-black italic uppercase gold-shimmer-text">
							🏆 Winners
						</h2>
					</div>
					<p className="text-[#93a1a1] text-sm md:text-base mb-6">
						The crews that conquered the Coral-bean seas.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{winningProjects.map(project => (
							<div
								key={project.teamName}
								className="relative rounded-2xl p-6 border-2 border-[#d4af37]/40 parchment-bg shadow-[0_0_24px_rgba(212,175,55,0.12)] hover:border-[#d4af37]/70 transition-all"
							>
								<div className="absolute top-3 right-3">
									<span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] rounded-full px-3 py-1">
										{project.track}
									</span>
								</div>
								<div className="flex items-center gap-2 mb-3">
									<Zap className="w-5 h-5 text-[#d4af37]" />
									<h3 className="text-xl font-bold text-[#fdf6e3]">
										{project.teamName}
									</h3>
								</div>
								<p className="text-[#d4af37] font-semibold text-sm mb-2">
									{project.projectTitle}
								</p>
								<p className="text-[#93a1a1] text-xs mb-4">
									{project.members.join(" · ")}
								</p>
								<div className="flex items-center gap-2 mb-4 flex-wrap">
									<span className="inline-flex items-center gap-1.5 font-semibold rounded-full px-3 py-1 text-sm border-2 border-[#d4af37]/60 text-[#d4af37] bg-[#d4af37]/10">
										🏆 {project.prize}
									</span>
								</div>
								<div className="flex items-center gap-4 text-sm">
									{project.github && (
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 text-[#93a1a1] hover:text-[#d4af37] transition-colors"
										>
											<ExternalLink className="w-3.5 h-3.5" />
											Code
										</a>
									)}
									{project.deployed && (
										<a
											href={project.deployed}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 text-[#93a1a1] hover:text-[#d4af37] transition-colors"
										>
											<Globe className="w-3.5 h-3.5" />
											Live
										</a>
									)}
									{project.youtube && (
										<a
											href={project.youtube}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 text-[#93a1a1] hover:text-[#d4af37] transition-colors"
										>
											<Youtube className="w-3.5 h-3.5" />
											Demo
										</a>
									)}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
					{filters.map(filter => {
						const Icon = filter.icon;
						return (
							<Link
								key={filter.key}
								href={filter.href}
								className={`group relative flex flex-col gap-4 p-6 rounded-2xl border-2 ${filter.border} parchment-bg transition-all hover:-translate-y-1`}
							>
								<div
									className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${filter.accent} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
								/>

								<div className="relative flex items-center justify-between">
									<div
										className={`w-12 h-12 rounded-xl bg-[#002b36]/60 border border-current/20 flex items-center justify-center ${filter.iconColor}`}
									>
										<Icon className="w-6 h-6" />
									</div>
									<ArrowUpRight
										className={`${filter.iconColor} opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`}
										size={22}
									/>
								</div>

								<div className="relative">
									<h2
										className={`text-2xl md:text-3xl font-black italic uppercase ${filter.iconColor} mb-1`}
									>
										{filter.title}
									</h2>
									<p className="text-[#93a1a1] text-sm leading-relaxed">
										{filter.description}
									</p>
								</div>

								{filter.showCount && (
									<div className="relative mt-auto pt-3 border-t border-[#586e75]/20 flex items-center justify-between">
										<span
											className={`text-2xl font-mono font-bold ${filter.iconColor}`}
										>
											{filter.countLabel}
										</span>
										<span className="text-xs text-[#586e75] uppercase tracking-wider">
											{filter.teamsLabel}
										</span>
									</div>
								)}
							</Link>
						);
					})}
				</div>
			</ViewContainer>

			{/* Footnote */}
			<ViewContainer className="mt-12">
				<p className="text-center text-[#586e75] text-sm">
					Tap a card above to dive into PRs, projects, or blog posts.
				</p>
			</ViewContainer>
		</div>
	);
};

export default ProjectsHubPage;
