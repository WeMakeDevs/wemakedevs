import { ViewContainer } from "@/components/ui/view-container";
import { ArrowUpRight, BookOpen, Layers, Trophy } from "lucide-react";
import Link from "next/link";
import { blogCountLabel, preEventWinner } from "../blogs";
import { projectCountLabel } from "../projects";
import { trackWinners } from "../winners";
import ProjectsShell from "./ProjectsShell";
import { PreEventWinnerCard, TrackWinnersSection } from "./sections";

const explore = [
	{
		key: "blogs",
		title: "Top Blogs",
		description: `Top ${blogCountLabel} dispatches published for the blog challenge, all in one place.`,
		href: "/hackathons/signoz/projects/blogs",
		icon: BookOpen,
		iconColor: "text-[#5fe9ff]",
		border: "border-[#5fe9ff]/30 hover:border-[#5fe9ff]/60",
		accent: "from-[#5fe9ff]/12 to-transparent",
	},
	{
		key: "all",
		title: "Top Projects",
		description: `Top ${projectCountLabel} builds submitted during the hackathon, all in one place.`,
		href: "/hackathons/signoz/projects/all",
		icon: Layers,
		iconColor: "text-[#ea6e4a]",
		border: "border-[#e5502a]/30 hover:border-[#e5502a]/60",
		accent: "from-[#e5502a]/12 to-transparent",
	},
];

const ProjectsHubPage = () => {
	return (
		<ProjectsShell>
			{/* ── Hero ──────────────────────────────────────────────────────── */}
			<ViewContainer className="pt-12">
				<div className="text-center mb-14">
					<span className="inline-flex items-center gap-2 bg-[#2be38b]/10 border border-[#2be38b]/30 text-[#2be38b] px-5 py-2 rounded-full text-sm font-semibold mb-6">
						⬢ Mission Debrief
					</span>
					<h1 className="text-4xl md:text-5xl font-black text-[#f5f7fa] glow-orange">
						Agents of SigNoz ·{" "}
						<span className="text-[#e5502a]">Field Reports</span>
					</h1>
				</div>

				{/* ── Stat strip ────────────────────────────────────────────── */}
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
					<div className="dossier-card rounded-xl px-5 py-5 col-span-2 md:col-span-1">
						<p className="font-mono text-[10px] uppercase tracking-wider text-[#8b93a7]">
							Grand Winners
						</p>
						<p className="text-3xl font-black text-[#ffcd56] mt-1">
							{trackWinners.length}
						</p>
					</div>
					<div className="dossier-card rounded-xl px-5 py-5">
						<p className="font-mono text-[10px] uppercase tracking-wider text-[#8b93a7]">
							Projects
						</p>
						<p className="text-3xl font-black text-[#ea6e4a] mt-1">
							{projectCountLabel}
						</p>
					</div>
					<div className="dossier-card rounded-xl px-5 py-5">
						<p className="font-mono text-[10px] uppercase tracking-wider text-[#8b93a7]">
							Blogs
						</p>
						<p className="text-3xl font-black text-[#5fe9ff] mt-1">
							{blogCountLabel}
						</p>
					</div>
				</div>
			</ViewContainer>

			{/* ── Grand track winners ───────────────────────────────────────── */}
			<ViewContainer className="mb-16">
				<TrackWinnersSection />
			</ViewContainer>

			{/* ── Explore ───────────────────────────────────────────────────── */}
			<ViewContainer className="mb-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					{explore.map(item => {
						const Icon = item.icon;
						return (
							<Link
								key={item.key}
								href={item.href}
								className={`group relative flex flex-col gap-4 p-6 rounded-2xl border ${item.border} bg-[#101116]/70 backdrop-blur-md transition-all hover:-translate-y-1 shadow-[0_12px_34px_rgba(0,0,0,0.5)]`}
							>
								<div
									className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
								/>
								<div className="relative flex items-center justify-between">
									<div
										className={`w-12 h-12 rounded-xl bg-[#16181d] border border-[#8b93a7]/20 flex items-center justify-center ${item.iconColor}`}
									>
										<Icon className="w-6 h-6" />
									</div>
									<ArrowUpRight
										className={`${item.iconColor} opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`}
										size={22}
									/>
								</div>
								<div className="relative">
									<h3
										className={`text-xl md:text-2xl font-black uppercase ${item.iconColor} mb-1`}
									>
										{item.title}
									</h3>
									<p className="text-[#c0c1c3] text-sm leading-relaxed">
										{item.description}
									</p>
								</div>
							</Link>
						);
					})}
				</div>
			</ViewContainer>

			{/* ── Pre-event blog winner ─────────────────────────────────────── */}
			<ViewContainer>
				<div className="flex items-center gap-3 mb-2 flex-wrap">
					<Trophy className="w-6 h-6 text-[#ffcd56]" />
					<h2 className="text-2xl md:text-3xl font-black uppercase text-[#f5f7fa] glow-orange">
						Pre-Event Blog Winner
					</h2>
				</div>
				<p className="text-[#c0c1c3] text-sm md:text-base mb-8 max-w-3xl">
					Before the hackathon began, agents self-hosted SigNoz, sent
					it real telemetry, and wrote up the feature that won them
					over. This one told it best.
				</p>
				<div className="mb-16">
					<PreEventWinnerCard blog={preEventWinner} />
				</div>
			</ViewContainer>
		</ProjectsShell>
	);
};

export default ProjectsHubPage;
