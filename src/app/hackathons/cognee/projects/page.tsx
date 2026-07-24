import { ViewContainer } from "@/components/ui/view-container";
import {
	ArrowUpRight,
	BookOpen,
	GitPullRequest,
	Globe,
	Layers,
	Sparkles,
	Trophy,
	Youtube,
} from "lucide-react";
import Link from "next/link";
import {
	blogWinner,
	prWinners,
	submittedProjects,
	trackWinners,
} from "../projects";
import ProjectsShell from "./ProjectsShell";

const isUrl = (v: string) => /^https?:\/\//i.test(v.trim());

const GithubIcon = () => (
	<svg
		className="w-4 h-4"
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
);

const trackAccent: Record<
	string,
	{ badge: string; ring: string; text: string }
> = {
	"Track 1": {
		badge: "bg-[#b07d12]/12 border-[#b07d12]/35 text-[#8a5a00]",
		ring: "border-[#b07d12]/45 hover:border-[#b07d12]/70",
		text: "text-[#8a5a00]",
	},
	"Track 2": {
		badge: "bg-[#0e8a80]/12 border-[#0e8a80]/35 text-[#0e8a80]",
		ring: "border-[#0e8a80]/45 hover:border-[#0e8a80]/70",
		text: "text-[#0e8a80]",
	},
};

const filters = [
	{
		key: "top",
		title: "Top 18 Projects",
		description:
			"The eighteen standout builds the judges loved, right behind the grand winners.",
		href: "/hackathons/cognee/projects/top",
		icon: Trophy,
		iconColor: "text-[#c33124]",
		border: "border-[#c33124]/30 hover:border-[#c33124]/60",
		accent: "from-[#c33124]/12 to-[#c33124]/0",
	},
	{
		key: "prs",
		title: `Top ${prWinners.length} PRs`,
		description:
			"The best pull requests shipped straight into the Cognee open-source repos.",
		href: "/hackathons/cognee/projects/prs",
		icon: GitPullRequest,
		iconColor: "text-[#8a5a00]",
		border: "border-[#b07d12]/30 hover:border-[#b07d12]/60",
		accent: "from-[#b07d12]/12 to-[#b07d12]/0",
	},
	{
		key: "all",
		title: "All Projects",
		description: `Every one of the ${submittedProjects.length} builds submitted during the hackathon.`,
		href: "/hackathons/cognee/projects/all",
		icon: Layers,
		iconColor: "text-[#cf5f1c]",
		border: "border-[#e0762a]/30 hover:border-[#e0762a]/60",
		accent: "from-[#e0762a]/12 to-[#e0762a]/0",
	},
];

const WinnerLinks = ({
	github,
	deployed,
	youtube,
}: {
	github: string;
	deployed: string;
	youtube: string;
}) => (
	<div className="flex items-center gap-4 text-sm flex-wrap">
		{isUrl(github) && (
			<a
				href={github}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center gap-1.5 text-[#6b513a] hover:text-[#c33124] transition-colors"
			>
				<GithubIcon /> Code
			</a>
		)}
		{isUrl(deployed) && (
			<a
				href={deployed.trim()}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center gap-1.5 text-[#6b513a] hover:text-[#0e8a80] transition-colors"
			>
				<Globe className="w-4 h-4" /> Live
			</a>
		)}
		{isUrl(youtube) && (
			<a
				href={youtube}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center gap-1.5 text-[#6b513a] hover:text-[#e23b2d] transition-colors"
			>
				<Youtube className="w-4 h-4" /> Demo
			</a>
		)}
	</div>
);

const ProjectsHubPage = () => {
	return (
		<ProjectsShell>
			{/* Hero */}
			<ViewContainer className="pt-12">
				<div className="text-center mb-14">
					<span className="inline-flex items-center gap-2 bg-[#c33124]/10 border border-[#c33124]/30 text-[#c33124] px-5 py-2 rounded-full text-sm font-semibold mb-6">
						🏆 Hackathon Results
					</span>
					<h1 className="text-4xl md:text-5xl font-black italic uppercase text-[#c33124] glow-red mb-4">
						The Hangover Part AI · Winners
					</h1>
					<p className="text-[#6b513a] text-base md:text-lg max-w-2xl mx-auto">
						What happens in the context window doesn&apos;t have to
						stay there. Meet the crews who built AI that
						doesn&apos;t forget, powered by Cognee&apos;s hybrid
						graph-vector memory.
					</p>
				</div>
			</ViewContainer>

			{/* Grand Track Winners */}
			<ViewContainer>
				<div className="flex items-center gap-3 mb-2">
					<Trophy className="w-6 h-6 text-[#c33124]" />
					<h2 className="text-2xl md:text-3xl font-black italic uppercase text-[#c33124]">
						Grand Winners
					</h2>
				</div>
				<p className="text-[#6b513a] text-sm md:text-base mb-6">
					Two tracks, two champions. Best Use of Cognee Open Source
					and Best Use of Cognee Cloud.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
					{trackWinners.map(winner => {
						const accent =
							trackAccent[winner.track] ?? trackAccent["Track 1"];
						return (
							<div
								key={winner.team}
								className={`relative rounded-2xl p-7 border-2 ${accent.ring} bg-[#fffdf6] shadow-[0_10px_28px_rgba(120,80,30,0.14)] transition-all`}
							>
								<div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
									<span
										className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold border rounded-full px-3 py-1 ${accent.badge}`}
									>
										{winner.track}
									</span>
									<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c33124]">
										<Sparkles className="w-3.5 h-3.5" />{" "}
										Grand Winner
									</span>
								</div>
								<h3 className="text-2xl font-black italic text-[#c33124] leading-tight">
									{winner.team}
								</h3>
								<p className="text-xs text-[#7c6244] mt-1 mb-3">
									{winner.members.join(" · ")}
								</p>
								<div
									className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 mb-4 text-sm font-bold border ${accent.badge}`}
								>
									🎁 {winner.prize}
								</div>
								<p className="text-[#5a4632] text-sm leading-relaxed line-clamp-5 mb-4">
									{winner.description}
								</p>
								<WinnerLinks
									github={winner.github}
									deployed={winner.deployed}
									youtube={winner.youtube}
								/>
							</div>
						);
					})}
				</div>
			</ViewContainer>

			{/* Blog Winner */}
			<ViewContainer>
				<div className="flex items-center gap-3 mb-2">
					<BookOpen className="w-6 h-6 text-[#0e8a80]" />
					<h2 className="text-2xl md:text-3xl font-black italic uppercase text-[#c33124]">
						Best Blog
					</h2>
				</div>
				<p className="text-[#6b513a] text-sm md:text-base mb-6">
					The write-up that best told the tale of building with Cognee
					memory, worth a Keychron mechanical keyboard.
				</p>
				<div className="relative rounded-2xl p-7 border-2 border-[#0e8a80]/40 bg-[#fffdf6] shadow-[0_10px_28px_rgba(14,138,128,0.12)] mb-16">
					<div className="flex flex-col md:flex-row md:items-start gap-6">
						<div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0e8a80] to-[#0c736b] text-white text-2xl font-black shadow-md">
							{blogWinner.name.charAt(0)}
						</div>
						<div className="min-w-0">
							<div className="flex items-center gap-2 flex-wrap mb-1">
								<h3 className="text-2xl font-black italic text-[#0e8a80] leading-tight">
									{blogWinner.name}
								</h3>
								<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8a5a00] bg-[#b07d12]/12 border border-[#b07d12]/30 rounded-full px-3 py-1">
									⌨️ Keychron Keyboard
								</span>
							</div>
							<p className="text-sm text-[#7c6244] mb-4">
								Author of the winning blog — a solo builder who
								shipped{" "}
								<span className="font-semibold text-[#5a4632]">
									RealtyRecall
								</span>
								, an always-on voice receptionist that gives
								real-estate agents a memory of every caller, and
								wrote the standout end-to-end account of doing
								it with Cognee.
							</p>
							<p className="text-[#5a4632] text-sm leading-relaxed line-clamp-4 mb-4">
								{blogWinner.description}
							</p>
							<div className="flex items-center gap-4 text-sm flex-wrap">
								{isUrl(blogWinner.blog) && (
									<a
										href={blogWinner.blog}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1.5 font-semibold text-[#0e8a80] hover:text-[#0c736b] transition-colors"
									>
										<BookOpen className="w-4 h-4" /> Read
										the blog
									</a>
								)}
								<WinnerLinks
									github={blogWinner.github}
									deployed={blogWinner.deployed}
									youtube={blogWinner.youtube}
								/>
							</div>
						</div>
					</div>
				</div>
			</ViewContainer>

			{/* Explore more */}
			<ViewContainer>
				<div className="flex items-center gap-3 mb-6">
					<h2 className="text-2xl md:text-3xl font-black italic uppercase text-[#c33124]">
						Explore Everything
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
					{filters.map(filter => {
						const Icon = filter.icon;
						return (
							<Link
								key={filter.key}
								href={filter.href}
								className={`group relative flex flex-col gap-4 p-6 rounded-2xl border-2 ${filter.border} bg-[#fffdf6] transition-all hover:-translate-y-1 shadow-[0_8px_22px_rgba(120,80,30,0.1)]`}
							>
								<div
									className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${filter.accent} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
								/>
								<div className="relative flex items-center justify-between">
									<div
										className={`w-12 h-12 rounded-xl bg-[#f7ead0] border border-[#b07d12]/20 flex items-center justify-center ${filter.iconColor}`}
									>
										<Icon className="w-6 h-6" />
									</div>
									<ArrowUpRight
										className={`${filter.iconColor} opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`}
										size={22}
									/>
								</div>
								<div className="relative">
									<h3
										className={`text-xl md:text-2xl font-black italic uppercase ${filter.iconColor} mb-1`}
									>
										{filter.title}
									</h3>
									<p className="text-[#6b513a] text-sm leading-relaxed">
										{filter.description}
									</p>
								</div>
							</Link>
						);
					})}
				</div>
			</ViewContainer>
		</ProjectsShell>
	);
};

export default ProjectsHubPage;
