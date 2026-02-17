import Link from "next/link";
import { FileText, FolderOpen, Globe, MonitorSmartphone, PenTool, Sparkles } from "lucide-react";

const AboutSection = () => {
	return (
		<div className="py-20 mt-10">
			<div className="max-w-6xl mx-auto px-4">
				{/* What is Accomplish Section */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 via-amber-400 to-sky-500 bg-clip-text text-transparent mb-6 leading-tight">
						Meet Your New AI Coworker
					</h2>
					<p className="text-xl text-slate-400 max-w-3xl mx-auto">
						Accomplish is the open source AI coworker that lives on your desktop. It reads your files, creates documents, and automates repetitive knowledge work - all running locally on your machine.
					</p>
				</div>

				{/* What Accomplish Can Do - organized grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
					<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-sky-500/15 hover:border-sky-500/30 transition-colors">
						<div className="bg-gradient-to-br from-sky-500 to-sky-600 p-3 rounded-xl w-fit mb-4 shadow-lg shadow-sky-500/20">
							<Globe className="w-6 h-6 text-white" />
						</div>
						<h3 className="text-xl font-bold text-sky-400 mb-2">
							Browse the Web
						</h3>
						<p className="text-slate-300 leading-relaxed">
							Ask it to perform any browsing task - research topics, fill out forms, grab information from websites, or automate repetitive web workflows.
						</p>
					</div>

					<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-sky-500/15 hover:border-sky-500/30 transition-colors">
						<div className="bg-gradient-to-br from-amber-500 to-orange-500 p-3 rounded-xl w-fit mb-4 shadow-lg shadow-amber-500/20">
							<FolderOpen className="w-6 h-6 text-white" />
						</div>
						<h3 className="text-xl font-bold text-sky-400 mb-2">
							Organize Files
						</h3>
						<p className="text-slate-300 leading-relaxed">
							Rename and organize files based on their contents. Clean up messy Downloads folders, sort by project, date, or type - automatically.
						</p>
					</div>

					<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-sky-500/15 hover:border-sky-500/30 transition-colors">
						<div className="bg-gradient-to-br from-emerald-500 to-green-600 p-3 rounded-xl w-fit mb-4 shadow-lg shadow-emerald-500/20">
							<FileText className="w-6 h-6 text-white" />
						</div>
						<h3 className="text-xl font-bold text-sky-400 mb-2">
							Generate Documents
						</h3>
						<p className="text-slate-300 leading-relaxed">
							Generate or rewrite documents. Draft follow-up emails, create meeting summaries, or prepare reports from your existing files.
						</p>
					</div>

					<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-sky-500/15 hover:border-sky-500/30 transition-colors">
						<div className="bg-gradient-to-br from-purple-500 to-violet-600 p-3 rounded-xl w-fit mb-4 shadow-lg shadow-purple-500/20">
							<MonitorSmartphone className="w-6 h-6 text-white" />
						</div>
						<h3 className="text-xl font-bold text-sky-400 mb-2">
							Scan & Summarize
						</h3>
						<p className="text-slate-300 leading-relaxed">
							Point it at any folder and get a summary of what's inside. Understand project structures, find important files, or audit your content.
						</p>
					</div>

					<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-sky-500/15 hover:border-sky-500/30 transition-colors">
						<div className="bg-gradient-to-br from-rose-500 to-pink-600 p-3 rounded-xl w-fit mb-4 shadow-lg shadow-rose-500/20">
							<PenTool className="w-6 h-6 text-white" />
						</div>
						<h3 className="text-xl font-bold text-sky-400 mb-2">
							Create Calendar Entries
						</h3>
						<p className="text-slate-300 leading-relaxed">
							Turn meeting notes into calendar entries, draft follow-up documents, or prepare a project folder with the right file structure.
						</p>
					</div>

					<div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-sky-500/15 hover:border-sky-500/30 transition-colors">
						<div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-3 rounded-xl w-fit mb-4 shadow-lg shadow-cyan-500/20">
							<Sparkles className="w-6 h-6 text-white" />
						</div>
						<h3 className="text-xl font-bold text-sky-400 mb-2">
							Custom Automations
						</h3>
						<p className="text-slate-300 leading-relaxed">
							Define repeatable workflows and save them as reusable skills. Build automations that fit your specific routine and needs.
						</p>
					</div>
				</div>

				{/* The big sell + how to win */}
				<div className="bg-gradient-to-br from-sky-500/10 via-slate-900/50 to-amber-500/10 rounded-3xl border border-sky-500/20 p-8 md:p-12 mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-sky-400 mb-6 text-center">
						How to Pull Off the Perfect Con
					</h2>
					<p className="text-lg text-slate-300 text-center max-w-3xl mx-auto mb-8">
						Frank Abagnale conned his way across the world by making the impossible look effortless. Your job? Make your boring, repetitive tasks <span className="text-amber-400 font-semibold">disappear</span> using Accomplish. Here's how to win:
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<div className="space-y-4">
							<h3 className="text-xl font-bold text-amber-400">1. Pick a Real Problem</h3>
							<p className="text-slate-300">
								What eats up your time every day or week? Messy files? Writing the same emails? Repetitive research? Tedious reports? Pick something you actually deal with.
							</p>
						</div>
						<div className="space-y-4">
							<h3 className="text-xl font-bold text-amber-400">2. Automate It with Accomplish</h3>
							<p className="text-slate-300">
								Install Accomplish, connect your AI provider (or use Ollama for free), and put it to work. Let it browse, organize, write, and manage tasks on your behalf.
							</p>
						</div>
						<div className="space-y-4">
							<h3 className="text-xl font-bold text-amber-400">3. Get Creative</h3>
							<p className="text-slate-300">
								The more creative your automation, the better. Chain multiple tasks together. Combine file organization with document generation. Surprise us with something clever.
							</p>
						</div>
						<div className="space-y-4">
							<h3 className="text-xl font-bold text-amber-400">4. Show the Before & After</h3>
							<p className="text-slate-300">
								Record a demo (max 3 min) showing your life <em>before</em> Accomplish and <em>after</em>. The more dramatic the transformation, the more likely you are to win.
							</p>
						</div>
					</div>

					<div className="mt-10 text-center">
						<p className="text-lg text-slate-400 italic">
							&ldquo;Two little mice fell in a bucket of cream. The first mouse quickly gave up and drowned. The second mouse wouldn't quit - he struggled so hard that he churned that cream into butter and crawled out.&rdquo;
						</p>
						<p className="text-sky-400 font-semibold mt-2">
							- Frank Abagnale Sr. (Catch Me If You Can)
						</p>
					</div>

					{/* Start your open source journey - tip */}
					<div className="mt-10 pt-10 border-t border-sky-500/20">
						<h3 className="text-xl font-bold text-amber-400 mb-3 text-center">
							Start your open source journey
						</h3>
						<p className="text-lg text-slate-300 text-center max-w-3xl mx-auto">
							The project has good issues open on GitHub that you can contribute to. Pick an issue with the{" "}
							<Link
								href="https://github.com/accomplish-ai/accomplish/issues?q=is%3Aissue%20state%3Aopen%20label%3Afeb_hackathon"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sky-400 hover:text-sky-300 font-semibold underline decoration-2 underline-offset-2"
							>
								label <code className="text-amber-400 bg-slate-800 px-1.5 py-0.5 rounded text-sm">feb_hackathon</code>
							</Link>
							, get your PR merged, and be one of the Top 20 (open source) to earn <span className="text-amber-400 font-semibold">$100 each</span>. Or showcase how you used Accomplish to automate your task and be one of 10 winners (highlight) for <span className="text-amber-400 font-semibold">$100 each</span>. One person can win both tracks. Great way to build your open source portfolio while getting paid.
						</p>
					</div>
				</div>

				{/* Privacy callout */}
				<div className="bg-slate-900/40 rounded-2xl border border-sky-500/15 p-8 max-w-4xl mx-auto text-center">
					<p className="text-lg text-slate-300 leading-relaxed">
						<span className="text-sky-400 font-bold text-xl">Nothing leaves your machine unless you allow it.</span>
						<br />
						<span className="text-slate-400 mt-2 block">
							Accomplish runs 100% locally. Every action is shown and approved before it runs. You bring your own API keys (xAI, OpenAI, Anthropic Claude, Google Gemini) or use local models via Ollama. No subscriptions, no data collection. It's a tool, not a service.
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
