import { ViewContainer } from "@/components/ui/view-container";
import { BookOpen, Trophy } from "lucide-react";
import { blogCountLabel, otherBlogs, preEventWinner } from "../../blogs";
import ProjectsShell from "../ProjectsShell";
import SubpageHeader from "../SubpageHeader";
import { BlogGrid, PreEventWinnerCard } from "../sections";

const BlogsPage = () => {
	return (
		<ProjectsShell>
			<ViewContainer className="pt-12">
				<SubpageHeader active="blogs" />

				{/* ── Pre-event winner ──────────────────────────────────────── */}
				<div className="flex items-center gap-3 mb-2 flex-wrap">
					<Trophy className="w-6 h-6 text-[#ffcd56]" />
					<h2 className="text-2xl md:text-3xl font-black uppercase text-[#f5f7fa] glow-orange">
						Pre-Event Blog Winner
					</h2>
				</div>
				<p className="text-[#c0c1c3] text-sm mb-6 max-w-3xl">
					The blog challenge ran in the days before the hackathon
					opened. This is the write-up that won it.
				</p>
				<div className="mb-16">
					<PreEventWinnerCard blog={preEventWinner} />
				</div>

				{/* ── Every other dispatch ──────────────────────────────────── */}
				<div className="flex items-center gap-3 mb-2 flex-wrap">
					<BookOpen className="w-6 h-6 text-[#5fe9ff]" />
					<h2 className="text-2xl md:text-3xl font-black uppercase text-[#f5f7fa] glow-orange">
						All Dispatches
					</h2>
					<span className="inline-flex items-center justify-center text-xs font-mono font-semibold bg-[#5fe9ff]/10 border border-[#5fe9ff]/30 text-[#5fe9ff] rounded-full px-3 py-1">
						{blogCountLabel} dispatches
					</span>
				</div>
				<p className="text-[#c0c1c3] text-sm mb-6 max-w-3xl">
					Every other blog published for the challenge, from the
					pre-event write-ups to the hackathon project reports. Plenty
					of first traces, first dashboards, and first &ldquo;oh,{" "}
					<em>that</em> is what was slow&rdquo; moments in here.
				</p>
				<BlogGrid blogs={otherBlogs} />
			</ViewContainer>
		</ProjectsShell>
	);
};

export default BlogsPage;
