import { ViewContainer } from "@/components/ui/view-container";
import {
	Bot,
	Eye,
	Lightbulb,
	MessageSquare,
	Plug,
	Shield,
	Wrench,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
	brain: <Bot className="w-7 h-7 text-slate-900" />,
	eye: <Eye className="w-7 h-7 text-slate-900" />,
	plug: <Plug className="w-7 h-7 text-slate-900" />,
	wrench: <Wrench className="w-7 h-7 text-slate-900" />,
	message: <MessageSquare className="w-7 h-7 text-slate-900" />,
	shield: <Shield className="w-7 h-7 text-slate-900" />,
};

const categories = [
	{
		title: "MCP Ecosystem & AI Agents",
		icon: "brain",
		description:
			"Build MCP servers, AI agents, or intelligent assistants that interact with OpenMetadata's APIs. Think auto-classification, smart data discovery, or natural language metadata queries.",
		gradient: "from-violet-500 to-purple-600",
		shadowColor: "shadow-violet-500/20",
	},
	{
		title: "Data Observability",
		icon: "eye",
		description:
			"Create monitoring dashboards, data quality alert systems, anomaly detection tools, or pipeline health monitors that leverage OpenMetadata's observability features.",
		gradient: "from-blue-500 to-cyan-600",
		shadowColor: "shadow-blue-500/20",
	},
	{
		title: "OpenMetadata Connectors & Ingestion",
		icon: "plug",
		description:
			"Build new connectors for data sources, improve ingestion frameworks, create ETL integrations, or extend metadata ingestion to new platforms and databases.",
		gradient: "from-green-500 to-emerald-600",
		shadowColor: "shadow-green-500/20",
	},
	{
		title: "Developer Tooling & CI/CD",
		icon: "wrench",
		description:
			"Build CLI tools, GitHub Actions, CI/CD integrations, IDE plugins, or developer-facing utilities that make working with metadata effortless.",
		gradient: "from-amber-500 to-orange-600",
		shadowColor: "shadow-amber-500/20",
	},
	{
		title: "Community & Communication Apps",
		icon: "message",
		description:
			"Build Slack bots, notification systems, collaboration tools, or community dashboards that leverage OpenMetadata to keep teams informed and aligned.",
		gradient: "from-pink-500 to-rose-600",
		shadowColor: "shadow-pink-500/20",
	},
	{
		title: "Governance & Classification",
		icon: "shield",
		description:
			"Build governance automation, auto-tagging, PII detection, compliance tools, or policy enforcement systems powered by OpenMetadata's classification capabilities.",
		gradient: "from-red-500 to-rose-600",
		shadowColor: "shadow-red-500/20",
	},
];

const IdeasSection = () => {
	return (
		<div className="py-20">
			<ViewContainer>
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="flex justify-center mb-6">
						<div className="bg-gradient-to-br from-amber-500 to-orange-600 p-5 rounded-2xl shadow-lg shadow-amber-500/30">
							<Lightbulb className="w-10 h-10 text-slate-900" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent mb-4">
						Ideas on What to Build
					</h2>
					<p className="text-lg text-slate-400 max-w-3xl mx-auto">
						Not sure where to start? Here are the tracks you can build in.
						Pick a category, explore the ideas, and build something that shapes the future of metadata.
					</p>
					<Link
						href="https://github.com/orgs/open-metadata/projects/107/views/1"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 mt-4 text-amber-400 hover:text-amber-300 font-semibold underline decoration-2 underline-offset-4 transition-colors"
					>
						View all project ideas on GitHub →
					</Link>
				</div>

				{/* Idea Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{categories.map((category) => (
						<div
							key={category.title}
							className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 hover:border-amber-500/30 transition-all duration-300"
						>
							<div className="flex items-start gap-4 mb-4">
								<div
									className={`bg-gradient-to-br ${category.gradient} p-3 rounded-xl shadow-lg ${category.shadowColor} group-hover:scale-110 transition-transform`}
								>
									{iconMap[category.icon]}
								</div>
								<h3 className="text-xl font-bold text-amber-400 mt-1">
									{category.title}
								</h3>
							</div>
							<p className="text-slate-300 leading-relaxed">
								{category.description}
							</p>
						</div>
					))}
				</div>

				{/* CTA to project board */}
				<div className="mt-12 text-center">
					<Link
						href="https://github.com/orgs/open-metadata/projects/107/views/1"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-amber-500/10 border-2 border-amber-500/30 hover:bg-amber-500/20 transition-colors text-amber-400 font-bold text-lg"
					>
						<Lightbulb className="w-5 h-5" />
						Browse All Ideas on the Project Board
					</Link>
				</div>
			</ViewContainer>
		</div>
	);
};

export default IdeasSection;
