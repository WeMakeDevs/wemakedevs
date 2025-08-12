import Footer from "@/components/Footer";
import {
	HackathonCard,
	HackathonCardDates,
	HackathonCardDescription,
	HackathonCardImage,
	HackathonCardTitle,
} from "@/components/HackathonCard";
import HackathonStatus from "@/components/HackathonStatus";
import Navbar from "@/components/Navbar";
import { ViewContainer } from "@/components/ui/view-container";
import { hackathons } from "@/constants/hackathons";

const Hackathons = () => {
	return (
		<>
			<Navbar />
			<main className="py-20">
				<ViewContainer className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{hackathons.map(hackathon => (
						<HackathonCard
							key={hackathon.slug}
							href={`/hackathons/${hackathon.slug}`}
						>
							<HackathonCardImage
								src={hackathon.thumbnail}
								alt={hackathon.title}
							/>
							<HackathonCardTitle>
								{hackathon.title}
							</HackathonCardTitle>
							<div className="flex justify-between items-center">
								<HackathonStatus
									startDate={hackathon.startDate}
									endDate={hackathon.endDate}
								/>
								<HackathonCardDates
									startDate={hackathon.startDate}
									endDate={hackathon.endDate}
								/>
							</div>
							<HackathonCardDescription>
								{hackathon.description}
							</HackathonCardDescription>
						</HackathonCard>
					))}
				</ViewContainer>
				<Footer />
			</main>
		</>
	);
};

export default Hackathons;
