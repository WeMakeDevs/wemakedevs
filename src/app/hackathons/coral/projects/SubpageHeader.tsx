import { cn } from "@/lib/utils";
import { ArrowLeft, BookOpen, GitPullRequest, Users } from "lucide-react";
import Link from "next/link";

const tabs = [
	{
		key: "prs",
		label: "PRs",
		href: "/hackathons/coral/projects/prs",
		icon: GitPullRequest,
		activeColor: "border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10",
	},
	{
		key: "all",
		label: "Projects",
		href: "/hackathons/coral/projects/all",
		icon: Users,
		activeColor: "border-[#2aa198] text-[#2aa198] bg-[#2aa198]/10",
	},
	{
		key: "blogs",
		label: "Blogs",
		href: "/hackathons/coral/projects/blogs",
		icon: BookOpen,
		activeColor: "border-[#cb4b16] text-[#cb4b16] bg-[#cb4b16]/10",
	},
];

interface SubpageHeaderProps {
	active: "prs" | "all" | "blogs";
}

const SubpageHeader = ({ active }: SubpageHeaderProps) => {
	return (
		<div className="mb-10">
			<Link
				href="/hackathons/coral/projects"
				className="inline-flex items-center gap-2 text-sm text-[#93a1a1] hover:text-[#d4af37] transition-colors mb-6"
			>
				<ArrowLeft size={16} />
				All filters
			</Link>

			<div className="flex flex-wrap gap-2 border-b border-[#586e75]/20 pb-0">
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
									: "border-transparent text-[#93a1a1] hover:text-[#fdf6e3] hover:bg-[#fdf6e3]/5",
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
