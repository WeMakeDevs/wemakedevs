import { ViewContainer } from "@/components/ui/view-container";
import { BookOpen, Globe, Quote, Youtube } from "lucide-react";
import { blogWinner } from "../../projects";
import ProjectsShell from "../ProjectsShell";
import SubpageHeader from "../SubpageHeader";

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

const BlogsPage = () => {
	return (
		<ProjectsShell>
			<ViewContainer className="pt-12">
				<SubpageHeader active="blogs" />

				<div className="flex items-center gap-3 mb-2 flex-wrap">
					<BookOpen className="w-6 h-6 text-[#0e8a80]" />
					<h2 className="text-2xl md:text-3xl font-black italic uppercase text-[#c33124]">
						Best Blog Winner
					</h2>
					<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8a5a00] bg-[#b07d12]/12 border border-[#b07d12]/30 rounded-full px-3 py-1">
						⌨️ Keychron Keyboard
					</span>
				</div>
				<p className="text-[#6b513a] text-sm md:text-base mb-8">
					The write-up that best told the tale of building with
					Cognee&apos;s memory layer, end to end.
				</p>

				{/* Author card */}
				<div className="rounded-2xl p-7 border-2 border-[#0e8a80]/40 bg-[#fffdf6] shadow-[0_10px_28px_rgba(14,138,128,0.12)] mb-8">
					<div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
						<div className="shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0e8a80] to-[#0c736b] text-white text-3xl font-black shadow-md">
							{blogWinner.name.charAt(0)}
						</div>
						<div>
							<h3 className="text-3xl font-black italic text-[#0e8a80] leading-tight">
								{blogWinner.name}
							</h3>
							<p className="text-sm text-[#7c6244] mt-1">
								{blogWinner.trackLabel}
							</p>
						</div>
					</div>

					<p className="text-[#5a4632] leading-relaxed mb-6">
						Mahimai is a solo builder who shipped{" "}
						<span className="font-semibold text-[#c33124]">
							RealtyRecall
						</span>
						, an always-on voice receptionist that gives solo
						real-estate agents a memory of every caller. What set
						his submission apart was the blog: a clear, honest,
						end-to-end account of modeling a real business as a
						typed Cognee knowledge graph, wiring a live voice agent
						to read and write that memory on every call, and
						watching the graph visibly grow. It is exactly the kind
						of &ldquo;how to build X&rdquo; story the Tell the Tale
						track was made for.
					</p>

					<div className="flex flex-wrap items-center gap-4 text-sm">
						{isUrl(blogWinner.blog) && (
							<a
								href={blogWinner.blog}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#0e8a80] to-[#0c736b] text-white font-bold hover:opacity-90 transition-opacity"
							>
								<BookOpen className="w-4 h-4" /> Read the
								winning blog
							</a>
						)}
						{isUrl(blogWinner.github) && (
							<a
								href={blogWinner.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 text-[#6b513a] hover:text-[#c33124] transition-colors"
							>
								<GithubIcon /> Code
							</a>
						)}
						{isUrl(blogWinner.deployed) && (
							<a
								href={blogWinner.deployed.trim()}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 text-[#6b513a] hover:text-[#0e8a80] transition-colors"
							>
								<Globe className="w-4 h-4" /> Live
							</a>
						)}
						{isUrl(blogWinner.youtube) && (
							<a
								href={blogWinner.youtube}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 text-[#6b513a] hover:text-[#e23b2d] transition-colors"
							>
								<Youtube className="w-4 h-4" /> Demo
							</a>
						)}
					</div>
				</div>

				{/* Project details */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div className="rounded-2xl p-6 paper-card">
						<h4 className="text-lg font-bold text-[#c33124] mb-3">
							About RealtyRecall
						</h4>
						<p className="text-[#5a4632] text-sm leading-relaxed whitespace-pre-line">
							{blogWinner.description}
						</p>
					</div>
					<div className="rounded-2xl p-6 paper-card">
						<h4 className="text-lg font-bold text-[#0e8a80] mb-3">
							How Cognee Powers It
						</h4>
						<p className="text-[#5a4632] text-sm leading-relaxed whitespace-pre-line">
							{blogWinner.cogneeUsage}
						</p>
					</div>
				</div>

				{/* Experience quote */}
				{blogWinner.experience && (
					<div className="mt-6 rounded-2xl p-6 border-2 border-[#b07d12]/25 bg-[#f1dcb4]/50">
						<Quote className="w-6 h-6 text-[#b07d12] mb-3" />
						<p className="text-[#5a4632] italic leading-relaxed">
							{blogWinner.experience}
						</p>
						<p className="mt-3 text-sm font-semibold text-[#8a5a00]">
							— {blogWinner.name}, on the hackathon
						</p>
					</div>
				)}
			</ViewContainer>
		</ProjectsShell>
	);
};

export default BlogsPage;
