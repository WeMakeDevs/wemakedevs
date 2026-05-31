import { cn } from "@/lib/utils";
import {
	ArrowUpRight,
	BookOpen,
	ExternalLink,
	GitPullRequest,
	Globe,
	Users,
	Youtube,
} from "lucide-react";
import { submittedProjects } from "../projects";

const trackStyles: Record<string, string> = {
	"Track 1": "border-[#d4af37]/40 text-[#d4af37] bg-[#d4af37]/10",
	"Track 2": "border-[#2aa198]/40 text-[#2aa198] bg-[#2aa198]/10",
	Bounties: "border-[#cb4b16]/40 text-[#cb4b16] bg-[#cb4b16]/10",
};

// Try to derive a friendly label for a blog post URL.
const blogLabel = (url: string) => {
	try {
		const u = new URL(url);
		const host = u.hostname.replace(/^www\./, "");
		const path = u.pathname.replace(/\/$/, "");
		const slug = path.split("/").filter(Boolean).pop() || "";
		const pretty = slug
			.replace(/[-_]+/g, " ")
			.replace(/\.[a-z]{1,5}$/, "")
			.trim();
		if (pretty.length > 8) {
			return pretty.length > 70 ? `${pretty.slice(0, 67)}...` : pretty;
		}
		return host;
	} catch {
		return url;
	}
};

// Friendly label for a PR/issue URL.
const prLabel = (url: string) => {
	const m = url.match(
		/github\.com\/([^/]+)\/([^/]+)\/(?:pull|issues)\/(\d+)/i,
	);
	if (m) return `${m[1]}/${m[2]} · #${m[3]}`;
	const pulls = url.match(/github\.com\/([^/]+)\/([^/]+)\/pulls/i);
	if (pulls) return `${pulls[1]}/${pulls[2]} · pulls`;
	const tree = url.match(/github\.com\/([^/]+)\/([^/]+)\/tree\/([^/?#]+)/i);
	if (tree) return `${tree[1]}/${tree[2]} · ${tree[3]}`;
	const mr = url.match(
		/gitlab\.com\/([^/]+)\/([^/]+)\/-\/merge_requests\/(\d+)/i,
	);
	if (mr) return `${mr[1]}/${mr[2]} · !${mr[3]}`;
	try {
		return new URL(url).hostname.replace(/^www\./, "");
	} catch {
		return url;
	}
};

const blogContributors = submittedProjects
	.filter(p => p.blogs.length > 0)
	.sort(
		(a, b) =>
			b.blogs.length - a.blogs.length || a.team.localeCompare(b.team),
	);

const prContributors = submittedProjects
	.filter(p => p.prs.length > 0)
	.sort(
		(a, b) => b.prs.length - a.prs.length || a.team.localeCompare(b.team),
	);

const totalPrs = prContributors.reduce((s, p) => s + p.prs.length, 0);
const totalBlogs = blogContributors.reduce((s, p) => s + p.blogs.length, 0);
const totalProjects = submittedProjects.length;

export const counts = {
	prs: totalPrs,
	prTeams: prContributors.length,
	blogs: totalBlogs,
	blogTeams: blogContributors.length,
	projects: totalProjects,
};

export const PrsSection = () => (
	<>
		<div className="flex items-center gap-3 mb-2 flex-wrap">
			<GitPullRequest className="w-6 h-6 text-[#d4af37]" />
			<h2 className="text-2xl md:text-3xl font-black italic uppercase text-[#d4af37]">
				Top PRs
			</h2>
			<span className="inline-flex items-center justify-center text-xs font-mono font-semibold bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] rounded-full px-3 py-1">
				{totalPrs} PRs
			</span>
		</div>
		<p className="text-[#93a1a1] text-sm md:text-base mb-6">
			Pirates who built source specs and sent pull requests straight to
			the{" "}
			<a
				href="https://github.com/withcoral/coral"
				target="_blank"
				rel="noopener noreferrer"
				className="text-[#d4af37] hover:text-[#e8c84a] underline"
			>
				withcoral/coral
			</a>{" "}
			repository.
		</p>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{prContributors.map(project => (
				<div
					key={`${project.team}-prs`}
					className="rounded-xl border border-[#d4af37]/15 hover:border-[#d4af37]/40 transition-colors parchment-bg px-4 py-4"
				>
					<div className="flex items-center gap-3 mb-3">
						<GitPullRequest
							className="text-[#d4af37] shrink-0"
							size={18}
						/>
						<h3 className="font-semibold text-[#fdf6e3] grow truncate">
							{project.title}
						</h3>
						<span className="text-xs font-mono text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30 px-2 py-0.5 rounded shrink-0">
							{project.prs.length === 1
								? "1 PR"
								: `${project.prs.length} PRs`}
						</span>
					</div>
					<p className="text-xs text-[#586e75] mb-2 truncate">
						{project.isSolo
							? project.team
							: `Crew · ${project.team}`}
					</p>
					<ul className="flex flex-col gap-1.5 ml-1">
						{project.prs.map(url => (
							<li key={url}>
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									className="group inline-flex items-center gap-2 text-sm text-[#93a1a1] hover:text-[#d4af37] transition-colors"
								>
									<ExternalLink
										className="w-3 h-3 text-[#586e75] group-hover:text-[#d4af37] shrink-0"
										aria-hidden="true"
									/>
									<span className="font-mono">
										{prLabel(url)}
									</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	</>
);

export const BlogsSection = () => (
	<>
		<div className="flex items-center gap-3 mb-2 flex-wrap">
			<BookOpen className="w-6 h-6 text-[#d4af37]" />
			<h2 className="text-2xl md:text-3xl font-black italic uppercase text-[#d4af37]">
				Top Blogs
			</h2>
			<span className="inline-flex items-center justify-center text-xs font-mono font-semibold bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] rounded-full px-3 py-1">
				{totalBlogs} posts
			</span>
		</div>
		<p className="text-[#93a1a1] text-sm md:text-base mb-6">
			End-to-end &quot;How to Build X&quot; guides written by pirates
			during their voyage.
		</p>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{blogContributors.map(project => (
				<div
					key={`${project.team}-blogs`}
					className="rounded-xl border border-[#d4af37]/15 hover:border-[#d4af37]/40 transition-colors parchment-bg px-4 py-4"
				>
					<div className="flex items-center gap-3 mb-3">
						<BookOpen
							className="text-[#d4af37] shrink-0"
							size={18}
						/>
						<h3 className="font-semibold text-[#fdf6e3] grow truncate">
							{project.title}
						</h3>
						<span className="text-xs font-mono text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30 px-2 py-0.5 rounded shrink-0">
							{project.blogs.length === 1
								? "1 post"
								: `${project.blogs.length} posts`}
						</span>
					</div>
					<p className="text-xs text-[#586e75] mb-2 truncate">
						{project.isSolo
							? project.team
							: `Crew · ${project.team}`}
					</p>
					<ul className="flex flex-col gap-1.5 ml-1">
						{project.blogs.map(url => (
							<li key={url}>
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									className="group inline-flex items-start gap-2 text-sm text-[#93a1a1] hover:text-[#d4af37] transition-colors"
								>
									<ExternalLink
										className="w-3 h-3 text-[#586e75] group-hover:text-[#d4af37] mt-1 shrink-0"
										aria-hidden="true"
									/>
									<span className="line-clamp-2 break-words">
										{blogLabel(url)}
									</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	</>
);

export const ProjectsSection = () => (
	<>
		<div className="flex items-center gap-3 mb-2 flex-wrap">
			<Users className="w-6 h-6 text-[#d4af37]" />
			<h2 className="text-2xl md:text-3xl font-black italic uppercase text-[#d4af37]">
				Top Projects
			</h2>
			<span className="inline-flex items-center justify-center text-xs font-mono font-semibold bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] rounded-full px-3 py-1">
				{totalProjects} projects
			</span>
		</div>
		<p className="text-[#93a1a1] text-sm md:text-base mb-6">
			Every project built on top of Coral during the hackathon.
		</p>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{submittedProjects.map(project => {
				const primaryHref =
					project.github ||
					project.deployed ||
					project.youtube ||
					project.blogs[0] ||
					project.prs[0];
				if (!primaryHref) return null;
				return (
					<a
						key={`${project.team}-${primaryHref}`}
						href={primaryHref}
						target="_blank"
						rel="noopener noreferrer"
						className="group flex flex-col gap-3 px-4 py-4 rounded-xl border border-[#d4af37]/15 hover:border-[#d4af37]/45 hover:bg-[#d4af37]/5 transition-all parchment-bg"
					>
						<div className="flex items-start justify-between gap-3">
							<div className="min-w-0 flex-1">
								<h3 className="font-semibold text-[#fdf6e3] group-hover:text-[#d4af37] transition-colors line-clamp-1">
									{project.title}
								</h3>
								<p className="text-xs text-[#586e75] mt-1 truncate">
									{project.isSolo
										? project.team
										: `Crew · ${project.team}`}
								</p>
							</div>
							<ArrowUpRight
								className="text-[#586e75] group-hover:text-[#d4af37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
								size={18}
							/>
						</div>

						{/* Tracks */}
						{project.tracks.length > 0 && (
							<div className="flex flex-wrap gap-1.5">
								{project.tracks.map(track => (
									<span
										key={track}
										className={cn(
											"inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold border",
											trackStyles[track] ??
												"border-[#586e75]/30 text-[#586e75] bg-[#586e75]/10",
										)}
									>
										{track}
									</span>
								))}
							</div>
						)}

						{/* Links */}
						<div className="flex items-center gap-3 text-xs text-[#93a1a1] mt-auto flex-wrap">
							{project.github && (
								<span className="inline-flex items-center gap-1 hover:text-[#d4af37]">
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
								<span className="inline-flex items-center gap-1 hover:text-[#d4af37]">
									<Globe className="w-3.5 h-3.5" />
									Live
								</span>
							)}
							{project.youtube && (
								<span className="inline-flex items-center gap-1 hover:text-[#d4af37]">
									<Youtube className="w-3.5 h-3.5" />
									Demo
								</span>
							)}
							{project.blogs.length > 0 && (
								<span className="inline-flex items-center gap-1 hover:text-[#d4af37]">
									<BookOpen className="w-3.5 h-3.5" />
									{project.blogs.length === 1
										? "Blog"
										: `${project.blogs.length} blogs`}
								</span>
							)}
							{project.prs.length > 0 && (
								<span className="inline-flex items-center gap-1 hover:text-[#d4af37]">
									<GitPullRequest className="w-3.5 h-3.5" />
									{project.prs.length === 1
										? "1 PR"
										: `${project.prs.length} PRs`}
								</span>
							)}
						</div>
					</a>
				);
			})}
		</div>
	</>
);
