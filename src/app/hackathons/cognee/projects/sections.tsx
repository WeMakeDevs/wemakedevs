import { cn } from "@/lib/utils";
import {
	ArrowUpRight,
	BookOpen,
	GitPullRequest,
	Globe,
	Trophy,
	Youtube,
} from "lucide-react";
import { submittedProjects, topProjects } from "../projects";

const trackStyles: Record<string, string> = {
	"Track 1": "border-[#b07d12]/40 text-[#8a5a00] bg-[#b07d12]/10",
	"Track 2": "border-[#0e8a80]/40 text-[#0e8a80] bg-[#0e8a80]/10",
	"PR/Blog": "border-[#c33124]/40 text-[#c33124] bg-[#c33124]/10",
};

const isUrl = (v: string) => /^https?:\/\//i.test(v.trim());

const GithubIcon = () => (
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
);

const TrackTags = ({ tracks }: { tracks: string[] }) =>
	tracks.length > 0 ? (
		<div className="flex flex-wrap gap-1.5">
			{tracks.map(track => (
				<span
					key={track}
					className={cn(
						"inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold border",
						trackStyles[track] ??
							"border-[#b09475]/40 text-[#7c6244] bg-[#b09475]/10",
					)}
				>
					{track}
				</span>
			))}
		</div>
	) : null;

// ── Top 18 projects ────────────────────────────────────────────────────────────
export const TopProjectsSection = () => (
	<>
		<div className="flex items-center gap-3 mb-2 flex-wrap">
			<Trophy className="w-6 h-6 text-[#c33124]" />
			<h2 className="text-2xl md:text-3xl font-black italic uppercase text-[#c33124]">
				Special Highlights
			</h2>
			<span className="inline-flex items-center justify-center text-xs font-mono font-semibold bg-[#c33124]/10 border border-[#c33124]/30 text-[#c33124] rounded-full px-3 py-1">
				Judges&apos; picks
			</span>
		</div>
		<p className="text-[#6b513a] text-sm md:text-base mb-6">
			The eighteen standout builds that impressed the judges, right behind
			the two grand track winners. Every one gives an agent a memory it
			never loses.
		</p>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
			{topProjects.map((p, i) => (
				<div
					key={`${p.team}-${p.github}`}
					className="relative flex flex-col gap-3 rounded-2xl p-6 paper-card"
				>
					<span className="absolute top-4 right-4 font-mono text-xs text-[#b09475]">
						#{String(i + 1).padStart(2, "0")}
					</span>
					<div className="pr-10">
						<h3 className="text-lg font-bold text-[#c33124] leading-tight">
							{p.team}
						</h3>
						<p className="text-xs text-[#7c6244] mt-1">
							by {p.submitter}
						</p>
					</div>
					<TrackTags tracks={p.tracks} />
					<p className="text-[#5a4632] text-sm leading-relaxed line-clamp-4">
						{p.description}
					</p>
					<div className="flex items-center gap-4 text-xs text-[#6b513a] mt-auto pt-1 flex-wrap">
						{isUrl(p.github) && (
							<a
								href={p.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 hover:text-[#c33124] transition-colors"
							>
								<GithubIcon /> Code
							</a>
						)}
						{isUrl(p.deployed) && (
							<a
								href={p.deployed.trim()}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 hover:text-[#0e8a80] transition-colors"
							>
								<Globe className="w-3.5 h-3.5" /> Live
							</a>
						)}
						{isUrl(p.youtube) && (
							<a
								href={p.youtube}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 hover:text-[#e23b2d] transition-colors"
							>
								<Youtube className="w-3.5 h-3.5" /> Demo
							</a>
						)}
					</div>
				</div>
			))}
		</div>
	</>
);

// ── All submitted projects ──────────────────────────────────────────────────────
export const AllProjectsSection = () => (
	<>
		<div className="flex items-center gap-3 mb-2 flex-wrap">
			<h2 className="text-2xl md:text-3xl font-black italic uppercase text-[#c33124]">
				Top Projects
			</h2>
			<span className="inline-flex items-center justify-center text-xs font-mono font-semibold bg-[#c33124]/10 border border-[#c33124]/30 text-[#c33124] rounded-full px-3 py-1">
				500+ builds
			</span>
		</div>
		<p className="text-[#6b513a] text-sm md:text-base mb-6">
			Top 500+ projects shipped during The Hangover Part AI hackathon.
			Browse the full crew and their memory-powered builds.
		</p>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{submittedProjects.map(project => {
				const primaryHref = [
					project.github,
					project.deployed,
					project.youtube,
					project.blog,
					project.pr,
				].find(isUrl);
				if (!primaryHref) return null;
				return (
					<a
						key={`${project.team}-${project.github}`}
						href={primaryHref}
						target="_blank"
						rel="noopener noreferrer"
						className="group flex flex-col gap-3 px-4 py-4 rounded-xl paper-card"
					>
						<div className="flex items-start justify-between gap-3">
							<div className="min-w-0 flex-1">
								<h3 className="font-semibold text-[#4a3624] group-hover:text-[#c33124] transition-colors line-clamp-1">
									{project.team}
								</h3>
								<p className="text-xs text-[#7c6244] mt-1 truncate">
									{project.isSolo
										? "Solo"
										: `Team · ${project.submitter}`}
								</p>
							</div>
							<ArrowUpRight
								className="text-[#b09475] group-hover:text-[#c33124] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
								size={18}
							/>
						</div>

						<TrackTags tracks={project.tracks} />

						<div className="flex items-center gap-3 text-xs text-[#6b513a] mt-auto flex-wrap">
							{isUrl(project.github) && (
								<span className="inline-flex items-center gap-1">
									<GithubIcon /> Code
								</span>
							)}
							{isUrl(project.deployed) && (
								<span className="inline-flex items-center gap-1">
									<Globe className="w-3.5 h-3.5" /> Live
								</span>
							)}
							{isUrl(project.youtube) && (
								<span className="inline-flex items-center gap-1">
									<Youtube className="w-3.5 h-3.5" /> Demo
								</span>
							)}
							{isUrl(project.blog) && (
								<span className="inline-flex items-center gap-1">
									<BookOpen className="w-3.5 h-3.5" /> Blog
								</span>
							)}
							{isUrl(project.pr) && (
								<span className="inline-flex items-center gap-1">
									<GitPullRequest className="w-3.5 h-3.5" />{" "}
									PR
								</span>
							)}
						</div>
					</a>
				);
			})}
		</div>
	</>
);
