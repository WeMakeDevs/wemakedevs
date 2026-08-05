import { SiLinkedin } from "@icons-pack/react-simple-icons";
import {
	ArrowUpRight,
	BookOpen,
	ChevronDown,
	Globe,
	Radio,
	Sparkles,
	Trophy,
	Youtube,
} from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import type { Blog, FeaturedBlog } from "../blogs";
import { images } from "../images";
import { projectCountLabel, submittedProjects } from "../projects";
import { type TrackWinner, trackWinners } from "../winners";

export const isUrl = (v: string) => /^https?:\/\//i.test(v.trim());

export const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
	<svg
		className={className}
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

// ── Blog cards ────────────────────────────────────────────────────────────────
export const BlogCard = ({ blog }: { blog: Blog }) => (
	<a
		href={blog.url}
		target="_blank"
		rel="noopener noreferrer"
		className="group flex flex-col gap-3 px-5 py-4 rounded-xl dossier-card"
	>
		<div className="flex items-start justify-between gap-3">
			<h3 className="font-semibold text-[#f5f7fa] group-hover:text-[#5fe9ff] transition-colors leading-snug line-clamp-3">
				{blog.title}
			</h3>
			<ArrowUpRight
				className="text-[#8b93a7] group-hover:text-[#5fe9ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5"
				size={18}
			/>
		</div>
		<div className="flex items-center gap-2 mt-auto flex-wrap text-xs">
			<span className="text-[#c0c1c3] font-medium">{blog.name}</span>
			<span className="text-[#4b5162]">·</span>
			<span className="font-mono text-[10px] text-[#8b93a7] border border-[#8b93a7]/25 rounded px-1.5 py-0.5">
				{blog.platform}
			</span>
		</div>
	</a>
);

export const BlogGrid = ({ blogs }: { blogs: Blog[] }) => (
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{blogs.map(blog => (
			<BlogCard key={blog.url} blog={blog} />
		))}
	</div>
);

// ── Pre-event blog winner (featured) ──────────────────────────────────────────
export const PreEventWinnerCard = ({ blog }: { blog: FeaturedBlog }) => (
	<div className="relative rounded-2xl p-7 md:p-8 dossier-card border-[#ffcd56]/40 hover:translate-y-0 hover:scale-100">
		<div className="flex flex-col md:flex-row md:items-start gap-6">
			<div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ffcd56] to-[#e5a12a] text-[#08090b] text-2xl font-black shadow-md">
				{blog.name.charAt(0)}
			</div>
			<div className="min-w-0">
				<div className="flex items-center gap-2 flex-wrap mb-2">
					<h3 className="text-2xl md:text-3xl font-black text-[#ffd778] leading-tight">
						{blog.name}
					</h3>
					<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffd778] bg-[#ffcd56]/10 border border-[#ffcd56]/30 rounded-full px-3 py-1">
						🎧 AirPods Pro 3 / Powerbeats Pro 2
					</span>
				</div>

				<p className="text-lg font-bold text-[#f5f7fa] leading-snug mb-3">
					{blog.title}
				</p>

				<p className="text-[#c0c1c3] text-sm md:text-base leading-relaxed mb-6">
					{blog.description}
				</p>

				<div className="flex flex-wrap items-center gap-4 text-sm">
					<a
						href={blog.url}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#ea6e4a] to-[#e5502a] text-white font-bold border border-[#ffcd56]/50 hover:opacity-90 transition-opacity"
					>
						<BookOpen className="w-4 h-4" /> Read the winning blog
					</a>
					{isUrl(blog.linkedin) && (
						<a
							href={blog.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-[#8b93a7] hover:text-[#5fe9ff] transition-colors font-medium"
						>
							<SiLinkedin size={16} /> LinkedIn
						</a>
					)}
					<span className="font-mono text-[10px] text-[#8b93a7] border border-[#8b93a7]/25 rounded px-1.5 py-0.5">
						{blog.platform}
					</span>
				</div>
			</div>
		</div>
	</div>
);

// ── Grand track winners ───────────────────────────────────────────────────────
const prizeImages: Record<string, StaticImageData> = {
	"MacBook Air": images.macbook,
	"iPad Air": images.ipad,
	"iPhone Air": images.iphone,
};

export const TrackWinnerCard = ({ winner }: { winner: TrackWinner }) => {
	const prizeImage = prizeImages[winner.prize];
	return (
		<div
			className="relative flex flex-col h-full rounded-2xl p-6 dossier-card overflow-hidden"
			style={{ borderColor: `${winner.accent}55` }}
		>
			<div
				className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-20"
				style={{ background: winner.accent }}
			/>

			{/* Prize */}
			<div className="relative flex flex-col items-center text-center pb-5 mb-5 border-b border-[#8b93a7]/15">
				{prizeImage && (
					<div className="h-24 flex items-center justify-center mb-3">
						<Image
							src={prizeImage}
							alt={winner.prize}
							className="max-h-full w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
						/>
					</div>
				)}
				<p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#62687c] font-bold">
					{winner.track} · {winner.trackLabel}
				</p>
				<p
					className="text-xl font-black leading-tight mt-0.5"
					style={{ color: winner.accent }}
				>
					{winner.prize}
				</p>
			</div>

			{/* Dossier */}
			<div className="relative flex flex-col flex-1 min-w-0">
				<span className="inline-flex self-start items-center gap-1.5 text-xs font-semibold text-[#ffd778] bg-[#ffcd56]/10 border border-[#ffcd56]/30 rounded-full px-3 py-1 mb-3">
					<Sparkles className="w-3.5 h-3.5" /> Grand Winner
				</span>

				<h3 className="text-xl font-black text-[#f5f7fa] leading-tight break-words">
					{winner.project}
				</h3>
				<p className="text-sm text-[#8b93a7] mt-1 mb-3">
					by {winner.builder}
				</p>

				<p className="text-[#c0c1c3] text-sm leading-relaxed">
					{winner.description}
				</p>

				<details className="group mt-4 rounded-xl border border-[#8b93a7]/20 bg-[#0b0c0e]/60">
					<summary className="flex items-center justify-between gap-2 cursor-pointer list-none px-4 py-3 text-sm font-semibold text-[#c0c1c3] hover:text-[#5fe9ff] transition-colors">
						<span className="inline-flex items-center gap-2">
							<Radio className="w-4 h-4 shrink-0" /> How they used
							SigNoz
						</span>
						<ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" />
					</summary>
					<p className="px-4 pb-4 text-sm text-[#c0c1c3] leading-relaxed">
						{winner.signozUsage}
					</p>
				</details>

				<div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-sm mt-auto pt-5">
					{isUrl(winner.youtube) && (
						<a
							href={winner.youtube}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ea6e4a] to-[#e5502a] text-white font-bold border border-[#ffcd56]/50 hover:opacity-90 transition-opacity"
						>
							<Youtube className="w-4 h-4" /> Demo
						</a>
					)}
					{isUrl(winner.github) && (
						<a
							href={winner.github}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 text-[#8b93a7] hover:text-[#5fe9ff] transition-colors font-medium"
						>
							<GithubIcon className="w-4 h-4" /> Code
						</a>
					)}
					{isUrl(winner.deployed) && (
						<a
							href={winner.deployed}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 text-[#8b93a7] hover:text-[#2be38b] transition-colors font-medium"
						>
							<Globe className="w-4 h-4" /> Live
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export const TrackWinnersSection = () => (
	<>
		<div className="flex items-center gap-3 mb-2 flex-wrap">
			<Trophy className="w-6 h-6 text-[#ffcd56]" />
			<h2 className="text-2xl md:text-3xl font-black uppercase text-[#f5f7fa] glow-orange">
				Grand Winners
			</h2>
		</div>
		<p className="text-[#c0c1c3] text-sm md:text-base mb-8 max-w-3xl">
			Three tracks, three champions. Each of them pointed SigNoz at
			something real, agents, releases, even a hydroponic farm, and made
			it fully observable. Every member of a winning team takes home the
			device.
		</p>
		<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
			{trackWinners.map(winner => (
				<TrackWinnerCard key={winner.project} winner={winner} />
			))}
		</div>
	</>
);

// ── All submitted projects ────────────────────────────────────────────────────
export const AllProjectsSection = () => (
	<>
		<div className="flex items-center gap-3 mb-2 flex-wrap">
			<h2 className="text-2xl md:text-3xl font-black uppercase text-[#f5f7fa] glow-orange">
				Top Projects
			</h2>
			<span className="inline-flex items-center justify-center text-xs font-mono font-semibold bg-[#e5502a]/10 border border-[#e5502a]/30 text-[#ea6e4a] rounded-full px-3 py-1">
				{projectCountLabel} builds
			</span>
		</div>
		<p className="text-[#c0c1c3] text-sm md:text-base mb-8 max-w-3xl">
			Every project shipped during Agents of SigNoz. Instrumented agents,
			SRE copilots, dashboards, and telemetry pipelines, all of them built
			on SigNoz and OpenTelemetry.
		</p>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{submittedProjects.map(project => (
				<div
					key={`${project.team}-${project.github}`}
					className="group flex flex-col gap-3 px-5 py-5 rounded-xl dossier-card"
				>
					<div className="flex items-start justify-between gap-3">
						<div className="min-w-0 flex-1">
							<h3 className="font-bold text-[#f5f7fa] leading-snug line-clamp-2">
								{project.team}
							</h3>
							<p className="text-xs text-[#8b93a7] mt-1 truncate">
								{project.isSolo
									? "Solo agent"
									: `Team · ${project.submitter}`}
							</p>
						</div>
					</div>

					{project.description && (
						<p className="text-[#c0c1c3] text-sm leading-relaxed line-clamp-4">
							{project.description}
						</p>
					)}

					<div className="flex items-center gap-3.5 text-xs text-[#8b93a7] mt-auto pt-1 flex-wrap">
						{isUrl(project.github) && (
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 hover:text-[#5fe9ff] transition-colors"
							>
								<GithubIcon /> Code
							</a>
						)}
						{isUrl(project.deployed) && (
							<a
								href={project.deployed}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 hover:text-[#2be38b] transition-colors"
							>
								<Globe className="w-3.5 h-3.5" /> Live
							</a>
						)}
						{isUrl(project.youtube) && (
							<a
								href={project.youtube}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 hover:text-[#e5502a] transition-colors"
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
