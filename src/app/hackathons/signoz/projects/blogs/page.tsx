import { ViewContainer } from "@/components/ui/view-container";
import { BookOpen, Trophy } from "lucide-react";
import {
	blogCountLabel,
	otherBlogs,
	preEventWinner,
	winningBlogs,
} from "../../blogs";
import ProjectsShell from "../ProjectsShell";
import SubpageHeader from "../SubpageHeader";
import { BlogGrid, PreEventWinnerCard, WinningBlogCard } from "../sections";

const BlogsPage = () => {
	return (
		<ProjectsShell>
			<ViewContainer className="pt-12">
				<SubpageHeader active="blogs" />

				{/* ── Intro ─────────────────────────────────────────────────── */}
				<div className="flex items-center gap-3 mb-2 flex-wrap">
					<BookOpen className="w-6 h-6 text-[#5fe9ff]" />
					<h2 className="text-2xl md:text-3xl font-black uppercase text-[#f5f7fa] glow-orange">
						The Blog Archive
					</h2>
					<span className="inline-flex items-center justify-center text-xs font-mono font-semibold bg-[#5fe9ff]/10 border border-[#5fe9ff]/30 text-[#5fe9ff] rounded-full px-3 py-1">
						{blogCountLabel} dispatches
					</span>
				</div>
				<p className="text-[#c0c1c3] text-sm md:text-base mb-12 max-w-3xl">
					The blog challenge asked one thing: self-host SigNoz, send
					it real data, and write about the feature you liked most.
					Agents answered with slow-query hunts, runaway AI agents,
					self-hosting war stories, and traces that finally explained
					a silent 500.
				</p>

				{/* ── Pre-event winner ──────────────────────────────────────── */}
				<div className="flex items-center gap-3 mb-2 flex-wrap">
					<Trophy className="w-6 h-6 text-[#ffcd56]" />
					<h3 className="text-xl md:text-2xl font-black uppercase text-[#f5f7fa]">
						Pre-Event Blog Winner
					</h3>
				</div>
				<p className="text-[#c0c1c3] text-sm mb-6 max-w-3xl">
					The blog challenge ran in the days before the hackathon
					opened. This is the write-up that won it.
				</p>
				<div className="mb-16">
					<PreEventWinnerCard blog={preEventWinner} />
				</div>

				{/* ── Top 3 blogs ───────────────────────────────────────────── */}
				<div className="flex items-center gap-3 mb-2 flex-wrap">
					<Trophy className="w-6 h-6 text-[#ffcd56]" />
					<h3 className="text-xl md:text-2xl font-black uppercase text-[#f5f7fa]">
						Top 3 Blogs
					</h3>
				</div>
				<p className="text-[#c0c1c3] text-sm mb-6 max-w-3xl">
					Three more write-ups that showed the work: a real system, a
					real problem, and the telemetry that cracked it open.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
					{winningBlogs.map((blog, i) => (
						<WinningBlogCard
							key={blog.url}
							blog={blog}
							rank={i + 1}
						/>
					))}
				</div>

				{/* ── Every other dispatch ──────────────────────────────────── */}
				<div className="flex items-center gap-3 mb-2 flex-wrap">
					<BookOpen className="w-6 h-6 text-[#5fe9ff]" />
					<h3 className="text-xl md:text-2xl font-black uppercase text-[#f5f7fa]">
						All Dispatches
					</h3>
				</div>
				<p className="text-[#c0c1c3] text-sm mb-6 max-w-3xl">
					Every other blog published for the challenge. Plenty of
					first traces, first dashboards, and first &ldquo;oh,{" "}
					<em>that</em> is what was slow&rdquo; moments in here.
				</p>
				<BlogGrid blogs={otherBlogs} />
			</ViewContainer>
		</ProjectsShell>
	);
};

export default BlogsPage;
