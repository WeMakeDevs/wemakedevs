import { cn } from "@/lib/utils";
import { ArrowLeft, BookOpen, Layers } from "lucide-react";
import Link from "next/link";

const tabs = [
	{
		key: "blogs",
		label: "Blogs",
		href: "/hackathons/signoz/projects/blogs",
		icon: BookOpen,
		activeColor: "border-[#5fe9ff] text-[#5fe9ff] bg-[#5fe9ff]/10",
	},
	{
		key: "all",
		label: "All Projects",
		href: "/hackathons/signoz/projects/all",
		icon: Layers,
		activeColor: "border-[#e5502a] text-[#ea6e4a] bg-[#e5502a]/10",
	},
];

interface SubpageHeaderProps {
	active: "blogs" | "all";
}

const SubpageHeader = ({ active }: SubpageHeaderProps) => {
	return (
		<div className="mb-10">
			<Link
				href="/hackathons/signoz/projects"
				className="inline-flex items-center gap-2 text-sm text-[#8b93a7] hover:text-[#5fe9ff] transition-colors mb-6"
			>
				<ArrowLeft size={16} />
				Back to the debrief
			</Link>

			<div className="flex flex-wrap gap-2 border-b border-[#8b93a7]/20 pb-0">
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
									: "border-transparent text-[#8b93a7] hover:text-[#5fe9ff] hover:bg-[#5fe9ff]/5",
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
