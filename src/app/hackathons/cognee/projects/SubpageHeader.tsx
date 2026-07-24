import { cn } from "@/lib/utils";
import {
	ArrowLeft,
	BookOpen,
	GitPullRequest,
	Layers,
	Trophy,
} from "lucide-react";
import Link from "next/link";

const tabs = [
	{
		key: "top",
		label: "Top 18",
		href: "/hackathons/cognee/projects/top",
		icon: Trophy,
		activeColor: "border-[#c33124] text-[#c33124] bg-[#c33124]/10",
	},
	{
		key: "prs",
		label: "PR Winners",
		href: "/hackathons/cognee/projects/prs",
		icon: GitPullRequest,
		activeColor: "border-[#8a5a00] text-[#8a5a00] bg-[#b07d12]/10",
	},
	{
		key: "blogs",
		label: "Blog Winner",
		href: "/hackathons/cognee/projects/blogs",
		icon: BookOpen,
		activeColor: "border-[#0e8a80] text-[#0e8a80] bg-[#0e8a80]/10",
	},
	{
		key: "all",
		label: "All Projects",
		href: "/hackathons/cognee/projects/all",
		icon: Layers,
		activeColor: "border-[#e0762a] text-[#cf5f1c] bg-[#e0762a]/10",
	},
];

interface SubpageHeaderProps {
	active: "top" | "prs" | "blogs" | "all";
}

const SubpageHeader = ({ active }: SubpageHeaderProps) => {
	return (
		<div className="mb-10">
			<Link
				href="/hackathons/cognee/projects"
				className="inline-flex items-center gap-2 text-sm text-[#6b513a] hover:text-[#c33124] transition-colors mb-6"
			>
				<ArrowLeft size={16} />
				Back to winners
			</Link>

			<div className="flex flex-wrap gap-2 border-b border-[#b07d12]/20 pb-0">
				{tabs.map(tab => {
					const Icon = tab.icon;
					const isActive = tab.key === active;
					return (
						<Link
							key={tab.key}
							href={tab.href}
							className={cn(
								"inline-flex items-center gap-2 px-5 py-2.5 rounded-t-lg border-b-2 text-sm font-semibold transition-colors -mb-px",
								isActive
									? tab.activeColor
									: "border-transparent text-[#6b513a] hover:text-[#c33124] hover:bg-[#c33124]/5",
							)}
						>
							<Icon size={16} />
							{tab.label}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default SubpageHeader;
