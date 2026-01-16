import {
	HackathonContentTitle,
	HackathonCoverImage,
	HackathonNav,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { cn } from "@/lib/utils";
import ContributorCard from "../components/ContributorCard";
import { DATA as hackathonData, navLinks } from "../data";
import { images } from "../images";
import { contributors } from "../contributors";

const ContributorStoriesPage = async () => {
	return (
		<div className="pt-20 pb-10 bg-gradient-to-br from-indigo-50 to-blue-50 min-h-screen">
			<HackathonCoverImage src={images.cover} alt={hackathonData.title} />
			<HackathonNav
				slug={hackathonData.slug}
				page="contributors"
				links={navLinks}
				navCta={{
					label: hackathonData.cta.label,
					href: hackathonData.cta.href,
					openInNewTab: hackathonData.cta.openInNewTab,
					disabled: hackathonData.cta.disabled,
				}}
			/>
			<ViewContainer>
				<HackathonContentTitle className="mt-4">
					Contributor Stories
				</HackathonContentTitle>
				<p className="text-lg text-gray-600 max-w-2xl mt-2 mb-8">
					Hear from developers who made meaningful contributions to Kestra during the{" "}
					<span className="whitespace-nowrap">Open Source Fest</span>
				</p>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-8">
					{contributors.map((contributor, index) => (
						<ContributorCard
							key={`${contributor.firstName}-${contributor.lastName}`}
							contributor={contributor}
							className={cn(
								index % 4 === 0 && "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200",
								index % 4 === 1 && "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
								index % 4 === 2 && "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
								index % 4 === 3 && "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
							)}
						/>
					))}
				</div>
			</ViewContainer>
		</div>
	);
};

export default ContributorStoriesPage;
