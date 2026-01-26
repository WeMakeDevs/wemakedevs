import { cn } from "@/lib/utils";
import Link from "next/link";

interface HackathonProjectCardWithVideoProps {
	className?: string;
	projectTitle: string;
	description: string;
	githubLink: string;
	teamName: string;
	isSolo: boolean;
	youtubeEmbed: string;
}

const HackathonProjectCardWithVideo = ({
	className,
	projectTitle,
	description,
	githubLink,
	teamName,
	isSolo,
	youtubeEmbed,
}: HackathonProjectCardWithVideoProps) => {
	return (
		<div
			className={cn(
				"p-4 rounded border-2 border-green-500/20 hover:bg-green-500/10 transition-colors h-full flex flex-col bg-[#0a0f11]/80",
				className,
			)}
		>
			{/* YouTube Video Embed */}
			<div className="mb-4 aspect-video rounded overflow-hidden flex-shrink-0">
				<iframe
					src={youtubeEmbed}
					title={`${projectTitle} - Demo Video`}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="w-full h-full"
				/>
			</div>

			<div className="flex flex-col flex-grow">
				<h3 className="text-lg mb-2 font-semibold text-slate-100">
					{projectTitle} - {isSolo ? teamName : `Team ${teamName}`}
				</h3>

				<div className="flex flex-col justify-between flex-grow">
					<p className="line-clamp-2 mb-4 text-slate-200">{description}</p>

					<div className="flex justify-end mt-auto">
						{githubLink && githubLink.trim() !== "" ? (
							<Link
								href={githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors text-sm font-medium shadow-sm"
							>
								<svg
									className="w-4 h-4"
									fill="currentColor"
									viewBox="0 0 20 20"
									aria-label="GitHub"
								>
									<title>GitHub Repository</title>
									<path
										fillRule="evenodd"
										d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
										clipRule="evenodd"
									/>
								</svg>
								View Code
							</Link>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HackathonProjectCardWithVideo;
